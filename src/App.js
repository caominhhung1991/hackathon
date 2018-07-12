import React, { Component } from 'react';
import DiemNgap from './model/diem-ngap';
import * as Service from './service/service';

class App extends Component {

  render() {
    // const s = '1001001001101100001000001';
    const s = '111000110110101010010100011011000011';
    
    let maxPath = '';
    let diemNgap = new DiemNgap(0, '10101');

    const arrayDiemNgap = Service.createArrayDiemNgap(s);

    for(let diemNgap of arrayDiemNgap) {
      Service.findPath('', diemNgap, arrayDiemNgap);
    }

    console.log(Service.getMaxPath())
    console.log(Service.getDeletePos());

    return (
      <div className="App">
       hello
      </div>
    );
  }
}

export default App;
