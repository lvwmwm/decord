// Module ID: 10141
// Function ID: 10142
// Name: QR8bitByte
// Dependencies: [10142]

// Module 10141 (QR8bitByte)
import _mod10142 from "module_10142" /* 10142 */;

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
