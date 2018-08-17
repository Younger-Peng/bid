import React from 'react'
import _ from 'lodash'
import { Button, Modal } from 'react-bootstrap'

import TableView from './TableView'
import AddItem from './addItem';


const BlockView = ({ setCorpsCount }) => (
    <div>
        <div>请先设置投标公司数量</div>
        <input type='text' onBlur={setCorpsCount} />
    </div>
)

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        min: '',
        max: '',
        show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  changeRange(type, event) {
    this.setState({
        ...this.state,
        [type]: event.nativeEvent.target.value
    })
  }

  handleSet() {
    let { min, max } = this.state
    min = parseFloat(min, 10)
    max = parseFloat(max, 10)
    this.props.setRange([min, max])
    this.handleClose()
  }

  render() {
    return (
      <div>
        <span onClick={this.handleShow.bind(this)}>修改</span>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>设置</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
                <span>设置最小值：</span>
                <input type='text' placeholder='设置最小值' value={this.state.min} onChange={this.changeRange.bind(this, 'min')} />
            </div>
            <div>
                <span>设置最大值：</span>
                <input type='text' placeholder='设置最大值' value={this.state.max} onChange={this.changeRange.bind(this, 'max')} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSet.bind(this)}>确定</Button>
            <Button onClick={this.handleClose}>取消</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default class BidTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            corpsCount: 0
        }
    }

    setRange(rowIndex, range) {
        let tableData = _.cloneDeep(this.state.tableData)
        let { corpsCount } = this.state
        let targetRow = tableData[rowIndex]
        let { unitPrice } = targetRow
        for( let i=0; i<corpsCount; i++ ) {
            targetRow[`price${i}`] = getAroundNumber(unitPrice, range)
        }
        this.setState({
            ...this.state,
            tableData
        })
    }

    setCorpsCount(event) {
        let corpsCount = parseInt(event.nativeEvent.target.value, 10)
        const { tableHeader, tableName, downloadkeys } = makeTableInfo(corpsCount)
        this.setState({
            corpsCount,
            tableHeader,
            tableName,
            downloadkeys,
            tableData: []
        })
    }

    addItem() {
        this.setState({ show: true })
    }

    handleAdd({ projectNumber, projectName, unit, needCount, unitPrice }) {
        let { corpsCount, tableData } = this.state
        let currentRow = { projectNumber, projectName, unit, needCount, unitPrice }
        for(let i=0; i<corpsCount; i++) {
            currentRow[`price${i}`] = unitPrice
        }
        let newTableData = [...tableData, currentRow]
        _.each(newTableData, (row, rowIndex) => {
            row.setRange = <Example setRange={this.setRange.bind(this, rowIndex)} />
        })
        if(_.size(newTableData) >= 2) {
            let totalRow = { unitPrice: '总计' }
            for(let i=0; i<corpsCount; i++) {
                totalRow[`price${i}`] = _.chain(newTableData).map(row => {
                    return row.needCount * row[`price${i}`]   
                }).sum().value()
            }
            console.log('totalRow ->', totalRow)
        }
        this.setState({
            ...this.state,
            tableData: newTableData
        })
    }

    render() {
        if(this.state.corpsCount === 0) return <BlockView setCorpsCount={this.setCorpsCount.bind(this)} />
        const { tableHeader, tableName, tableData, downloadkeys } = this.state
        return (
            <div style={{width: 1350, margin: '100px auto'}} >
                <AddItem handleAdd={this.handleAdd.bind(this)}/>
                <TableView tableHeader={tableHeader} tableName={tableName} downloadkeys={downloadkeys} tableData={tableData} reserveRows />
            </div>
        )
    }
}

function makeTableInfo(corpsCount) {
    let mainHeader = [
        { id: 'projectNumber', name: '序号', freeze: 'left' },
        { id: 'projectName', name: '项目民称', freeze: 'left' },
        { id: 'unit', name: '单位', freeze: 'left' },
        { id: 'needCount', name: '数量', freeze: 'left' },
        { id: 'unitPrice', name: '单价', freeze: 'left' },
        { id: 'setRange', name: '修改浮动范围', freeze: 'left' }
    ];
    for( let i=0; i<corpsCount; i++) {
        mainHeader.push({ id: `price${i}`, name: `报价${i}`})
    }
    let downloadkeys = mainHeader.filter(headerCell => headerCell.id !== 'setRange')
    let tableName = 'Test'
    return { tableHeader: [mainHeader], tableName, downloadkeys }
}

function getAroundNumber(base, range) {
    const deep = range[1] - range[0]
    const randomNumber = range[0] + Math.random() * deep
    return base + randomNumber
}