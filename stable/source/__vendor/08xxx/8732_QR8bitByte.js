// Module ID: 8732
// Function ID: 8733
// Name: QR8bitByte
// Dependencies: [8733]

// Module 8732 (QR8bitByte)
import _mod8733 from "module_8733" /* 8733 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod8733.MODE_8BIT_BYTE, data });
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
