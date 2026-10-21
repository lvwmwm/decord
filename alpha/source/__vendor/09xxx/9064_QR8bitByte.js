// Module ID: 9064
// Function ID: 9065
// Name: QR8bitByte
// Dependencies: [9065]

// Module 9064 (QR8bitByte)
import _mod9065 from "module_9065" /* 9065 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod9065.MODE_8BIT_BYTE, data });
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
