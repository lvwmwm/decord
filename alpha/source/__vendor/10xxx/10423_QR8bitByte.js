// Module ID: 10423
// Function ID: 10424
// Name: QR8bitByte
// Dependencies: [10424]

// Module 10423 (QR8bitByte)
import _mod10424 from "module_10424" /* 10424 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod10424.MODE_8BIT_BYTE, data });
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
