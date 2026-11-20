// Module ID: 14536
// Function ID: 14537
// Name: QR8bitByte
// Dependencies: [14537]

// Module 14536 (QR8bitByte)
import _mod14537 from "module_14537" /* 14537 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod14537.MODE_8BIT_BYTE, data });
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
