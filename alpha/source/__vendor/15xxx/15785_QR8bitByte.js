// Module ID: 15785
// Function ID: 15786
// Name: QR8bitByte
// Dependencies: [15786]

// Module 15785 (QR8bitByte)
import _mod15786 from "module_15786" /* 15786 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod15786.MODE_8BIT_BYTE, data });
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
