// Module ID: 9324
// Function ID: 9325
// Name: QR8bitByte
// Dependencies: [9325]

// Module 9324 (QR8bitByte)
import _mod9325 from "module_9325" /* 9325 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod9325.MODE_8BIT_BYTE, data });
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
