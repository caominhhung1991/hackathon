export default class DiemNgap {
  constructor(pos, value) {
    this.pos = pos;
    this.next = [];
    this.initDiemNgap(value);
  }
  
  initDiemNgap(value) {
    for (let i in value) {
      if (value[i] === '1' && Number(i) !== this.pos) {
        this.next.push(Number(i));
      }
    }
  }
}