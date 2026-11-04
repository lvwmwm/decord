// Module ID: 9317
// Function ID: 9318
// Name: QR8bitByte
// Dependencies: [9318]

// Module 9317 (QR8bitByte)
import _mod9318 from "module_9318" /* 9318 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod9318.MODE_8BIT_BYTE, data });
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
