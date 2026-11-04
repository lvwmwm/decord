// Module ID: 9136
// Function ID: 9137
// Name: QR8bitByte
// Dependencies: [9137]

// Module 9136 (QR8bitByte)
import _mod9137 from "module_9137" /* 9137 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod9137.MODE_8BIT_BYTE, data });
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
