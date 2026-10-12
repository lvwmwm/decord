// Module ID: 8737
// Function ID: 8738
// Name: QR8bitByte
// Dependencies: [8738]

// Module 8737 (QR8bitByte)
import _mod8738 from "module_8738" /* 8738 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod8738.MODE_8BIT_BYTE, data });
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
