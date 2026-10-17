// Module ID: 9009
// Function ID: 9010
// Name: QR8bitByte
// Dependencies: [9010]

// Module 9009 (QR8bitByte)
import _mod9010 from "module_9010" /* 9010 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod9010.MODE_8BIT_BYTE, data });
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
