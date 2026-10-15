// Module ID: 8954
// Function ID: 8955
// Name: QR8bitByte
// Dependencies: [8955]

// Module 8954 (QR8bitByte)
import _mod8955 from "module_8955" /* 8955 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod8955.MODE_8BIT_BYTE, data });
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
