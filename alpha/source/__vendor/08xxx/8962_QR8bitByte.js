// Module ID: 8962
// Function ID: 8963
// Name: QR8bitByte
// Dependencies: [8963]

// Module 8962 (QR8bitByte)
import _mod8963 from "module_8963" /* 8963 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod8963.MODE_8BIT_BYTE, data });
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
