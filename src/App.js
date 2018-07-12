import React, { Component } from 'react';
import DiemNgap from './model/diem-ngap';
import * as Service from './service/service';

class App extends Component {
  state = {
    s: ''
  }

  onChangeHandle = (event) => {
    Service.initValue();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  printVungNgap = (vungNgapLonNhat) => {
    let result = '';
    for (let i = 0; i < vungNgapLonNhat.length; i++) {
      if (i < vungNgapLonNhat.length - 1) {
        result += vungNgapLonNhat[i] + ', '
      } else {
        result += vungNgapLonNhat[i]
      }
    }
    return result;
  }

  render() {
    const s = this.state.s;
    const arrayDiemNgap = Service.createArrayDiemNgap(s);
    
    for (let diemNgap of arrayDiemNgap) {
      Service.findPath('', diemNgap, arrayDiemNgap);
    }

    const vungNgapLonNhat = [];
    const maxPath = Service.getMaxPath();

    for (let i = 0; i < maxPath.length; i++) {
      vungNgapLonNhat.push(Number(maxPath[i]));
    }

    const viTriCanXoa = Service.getDeletePos()

    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <h1 >Hackathon Test</h1>
        <div style={{ margin: '15px 0' }}>
          Nhập chuỗi:
          <input
            type="text"
            name="s"
            style={{ width: '400px', height: '30px' }}
            onChange={this.onChangeHandle}
          />
        </div>

        <div>
          - Điểm ngập lớn nhất: ({this.printVungNgap(vungNgapLonNhat)})
        </div>
        <br />
        <div>
          - Vị trí cần phải xử lý: {viTriCanXoa}
        </div>
      </div>
    );
  }
}

export default App;
