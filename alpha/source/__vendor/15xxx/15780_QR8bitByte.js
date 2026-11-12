// Module ID: 15780
// Function ID: 15781
// Name: QR8bitByte
// Dependencies: [15781]

// Module 15780 (QR8bitByte)
import _mod15781 from "module_15781" /* 15781 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod15781.MODE_8BIT_BYTE, data });
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
