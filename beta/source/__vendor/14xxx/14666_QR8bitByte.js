// Module ID: 14666
// Function ID: 14667
// Name: QR8bitByte
// Dependencies: [14667]

// Module 14666 (QR8bitByte)
import _mod14667 from "module_14667" /* 14667 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod14667.MODE_8BIT_BYTE, data });
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
