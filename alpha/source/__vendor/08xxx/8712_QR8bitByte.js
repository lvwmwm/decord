// Module ID: 8712
// Function ID: 8713
// Name: QR8bitByte
// Dependencies: [8713]

// Module 8712 (QR8bitByte)
import _mod8713 from "module_8713" /* 8713 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod8713.MODE_8BIT_BYTE, data });
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
