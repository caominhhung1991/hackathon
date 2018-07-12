import DiemNgap from '../model/diem-ngap';

let maxPath = '';
let deletePos = -1;
let maxConnection = -1;

function initValue() {
  maxPath = '';
  deletePos = '';
  maxConnection = 0;
}

function getMaxPath() {
  return maxPath;
}

function getDeletePos() {
  return deletePos;
}

function createArrayDiemNgap(value) {
  const arrayDiemNgap = [];
  const value_length = value.length;
  const numOfDiemNgap = Math.sqrt(value_length);

  for (let i = 0; i < numOfDiemNgap; i++) {
    let valueOfDiemNghap = value.substring(i * numOfDiemNgap, i * numOfDiemNgap + numOfDiemNgap);
    let diemNgap = new DiemNgap(i, valueOfDiemNghap)
    arrayDiemNgap.push(diemNgap);
  }

  return arrayDiemNgap;
}

// path: String = null
// diemNgap: Object
// arrayDiemNgap: Array Object
function findPath(path, diemNgap, arrayDiemNgap) {
  if (path.includes(String(diemNgap.pos))) {
    return 0;
  }

  let numOfConnection = diemNgap.next.length;
  if (numOfConnection > maxConnection) {
    maxConnection = numOfConnection;
    deletePos = diemNgap.pos;
  }

  path = path + diemNgap.pos;

  if (path.length > maxPath.length) {
    maxPath = path;
  }

  for (let pos of diemNgap.next) {
    let diemNgapNext = getDiemNgap(pos, arrayDiemNgap);
    findPath(path, diemNgapNext, arrayDiemNgap);
  }
}

function getDiemNgap(pos, arrayDiemNgap) {
  return arrayDiemNgap[pos];
}

export {
  initValue,
  createArrayDiemNgap,
  findPath,
  getDiemNgap,
  getMaxPath,
  getDeletePos
} 