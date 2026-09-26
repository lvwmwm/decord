// Module ID: 10162
// Function ID: 10163
// Name: QR8bitByte
// Dependencies: [10163]

// Module 10162 (QR8bitByte)
import _mod10163 from "module_10163" /* 10163 */;

class QR8bitByte {
  constructor(arg0) {
    obj = { mode: closure_0(closure_1[0]).MODE_8BIT_BYTE, data: global };
    return;
  }
}
QR8bitByte.prototype = {
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

export default QR8bitByte;
