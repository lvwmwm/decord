// Module ID: 14568
// Function ID: 14569
// Name: QR8bitByte
// Dependencies: [14569]

// Module 14568 (QR8bitByte)
import _mod14569 from "module_14569" /* 14569 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod14569.MODE_8BIT_BYTE, data });
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
