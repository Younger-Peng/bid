import React from 'react'
import _ from 'lodash'
import TableView from './TableView'
import { Button, Modal } from 'react-bootstrap'

export default class AddItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
        projectNumber: '',
        projectName: '',
        unit: '',
        needCount: '',
        unitPrice: '',
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
    let { projectNumber, projectName, unit, needCount, unitPrice } = this.state
    needCount = parseFloat(needCount, 10)
    unitPrice = parseFloat(unitPrice, 10)
    this.props.handleAdd({ projectNumber, projectName, unit, needCount, unitPrice })
    this.handleClose()
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleShow.bind(this)}>添加项目</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>设置</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
                <span>项目序号：</span>
                <input type='text' placeholder='项目序号' value={this.state.projectNumber} onChange={this.changeRange.bind(this, 'projectNumber')} />
            </div>
            <div>
                <span>项目名称：</span>
                <input type='text' placeholder='项目名称' value={this.state.projectName} onChange={this.changeRange.bind(this, 'projectName')} />
            </div>
            <div>
                <span>单位：</span>
                <input type='text' placeholder='单位' value={this.state.unit} onChange={this.changeRange.bind(this, 'unit')} />
            </div>
            <div>
                <span>数量：</span>
                <input type='text' placeholder='数量' value={this.state.needCount} onChange={this.changeRange.bind(this, 'needCount')} />
            </div>
            <div>
                <span>单价：</span>
                <input type='text' placeholder='单价' value={this.state.unitPrice} onChange={this.changeRange.bind(this, 'unitPrice')} />
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