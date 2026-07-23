// Module ID: 12174
// Function ID: 95296
// Name: QR8bitByte
// Dependencies: [12175]

// Module 12174 (QR8bitByte)
class QR8bitByte {
  constructor(arg0) {
    this.mode = require("module_12175").MODE_8BIT_BYTE;
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
