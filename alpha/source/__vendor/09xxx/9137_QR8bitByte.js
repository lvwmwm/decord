// Module ID: 9137
// Function ID: 9138
// Name: QR8bitByte
// Dependencies: [9138]

// Module 9137 (QR8bitByte)
import _mod9138 from "module_9138" /* 9138 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod9138.MODE_8BIT_BYTE, data });
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
