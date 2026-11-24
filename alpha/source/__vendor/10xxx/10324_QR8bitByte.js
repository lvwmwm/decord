// Module ID: 10324
// Function ID: 10325
// Name: QR8bitByte
// Dependencies: [10325]

// Module 10324 (QR8bitByte)
import _mod10325 from "module_10325" /* 10325 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod10325.MODE_8BIT_BYTE, data });
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
