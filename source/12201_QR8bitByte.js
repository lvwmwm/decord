// Module ID: 12201
// Function ID: 95536
// Name: QR8bitByte
// Dependencies: [12202]

// Module 12201 (QR8bitByte)
class QR8bitByte {
  constructor(arg0) {
    this.mode = require("module_12202").MODE_8BIT_BYTE;
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
