// Module ID: 15900
// Function ID: 15901
// Name: QR8bitByte
// Dependencies: [15901]

// Module 15900 (QR8bitByte)
import _mod15901 from "module_15901" /* 15901 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod15901.MODE_8BIT_BYTE, data });
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
