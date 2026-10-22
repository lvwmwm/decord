// Module ID: 9073
// Function ID: 9074
// Name: QR8bitByte
// Dependencies: [9074]

// Module 9073 (QR8bitByte)
import _mod9074 from "module_9074" /* 9074 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod9074.MODE_8BIT_BYTE, data });
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
