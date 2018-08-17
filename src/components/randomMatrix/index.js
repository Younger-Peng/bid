import React from 'react';
import _ from 'lodash';
import XLSX from 'xlsx';

import TableView from '../TableView';

class SetRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            min: '',
            max: ''
        }
    }

    changeRange(type, event) {
        this.setState({
            [type]: event.nativeEvent.target.value
        })
    }

    handleSetRange() {
        this.props.handleSetRange(this.state.min, this.state.max)
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='min' value={this.state.min} onChange={this.changeRange.bind(this, 'min')} />
                <input type='text' placeholder='max' value={this.state.max} onChange={this.changeRange.bind(this, 'max')} />
                <button onClick={this.handleSetRange.bind(this)}>确定</button>
            </div>
        )
    }
}

export default class RandomMatrix extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleOnchange(event) {
        const RandomMatrix = this;
        var reader = new FileReader();
        reader.onload = function(event) {
            try {
                var data = event.target.result
                var workbook = XLSX.read(data, {
                        type: 'binary'
                    }); // 以二进制流方式读取得到整份excel表格对象
                var persons = []; // 存储获取到的数据
            } catch (e) {
                console.log('文件类型不正确');
                return;
            }
            var fromTo = '';
            for (var sheet in workbook.Sheets) {
                if (workbook.Sheets.hasOwnProperty(sheet)) {
                    fromTo = workbook.Sheets[sheet]['!ref'];
                    console.log(fromTo);
                    persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                }
            }
            console.log(persons);
            RandomMatrix.makeTable(persons)
        }
        reader.readAsBinaryString(event.target.files[0])
    }

    makeTable(rows) {
        const cols = rows[0];
        let header = _.map(cols, (data, key) => ({
            id: key,
            name: key
        }));
        let tableData = _.map(rows, (row, rowIndex) => {
            let formatRow = {};
            _.each(row, (cell, key) => {
                formatRow[key] = cell;
            });
            return formatRow;
        });
        this.setState({
            tableHeader: [header],
            tableData,
            show: true
        })
    }

    handleSetRange(min, max) {
        min = parseFloat(min, 10);
        max = parseFloat(max, 10);
        let tableData = _.cloneDeep(this.state.tableData);
        _.each(tableData, (row, rowIndex) => {
            _.each(row, (cell, columnIndex) => {
                row[columnIndex] = parseFloat(cell, 10) + _.random(min, max);
            })
        });
        this.setState({
            ...this.state,
            tableData
        })
    }

    render() {
        let { tableHeader, tableData } = this.state;
        // tableHeader = makeTableHeader()
        // tableData = makeTableData()
        return (
            <div>
                <input type='file' onChange={this.handleOnchange.bind(this)} />
                { this.state.show ? (
                    <div style={{ width: 1200, margin: '0 auto'}} >
                        <SetRange handleSetRange={this.handleSetRange.bind(this)}/>
                        <TableView tableHeader={tableHeader} tableName={'haha'} downloadkeys={tableHeader[0]} tableData={tableData} reserveRows  cancelTableSort />
                    </div>
                ) : null }
            </div>
        )
    }
}