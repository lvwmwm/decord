// Module ID: 12177
// Function ID: 95345
// Name: QR8bitByte
// Dependencies: [12178]

// Module 12177 (QR8bitByte)
class QR8bitByte {
  constructor(arg0) {
    this.mode = require("module_12178").MODE_8BIT_BYTE;
    this.data = global;
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
