// Module ID: 15902
// Function ID: 15903
// Name: QR8bitByte
// Dependencies: [15903]

// Module 15902 (QR8bitByte)
import _mod15903 from "module_15903" /* 15903 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod15903.MODE_8BIT_BYTE, data });
  }
}
const obj = {
  getLength(arg0) {
    return this.data.length;
  },
  write(put) {
    let length;
    const self = this;
    let num = 0;
    if (0 < this.data.length) {
      do {
        let data = self.data;
        let putResult = put.put(data.charCodeAt(num), 8);
        num = num + 1;
        length = self.data.length;
      } while (num < length);
    }
  }
};
QR8bitByte.prototype = obj;

export default QR8bitByte;
