// Module ID: 8736
// Function ID: 8737
// Name: QR8bitByte
// Dependencies: [8737]

// Module 8736 (QR8bitByte)
import _mod8737 from "module_8737" /* 8737 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod8737.MODE_8BIT_BYTE, data });
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
