// Module ID: 15938
// Function ID: 15939
// Name: QR8bitByte
// Dependencies: [15939]

// Module 15938 (QR8bitByte)
import _mod15939 from "module_15939" /* 15939 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod15939.MODE_8BIT_BYTE, data });
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
