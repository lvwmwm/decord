// Module ID: 9101
// Function ID: 9102
// Name: QR8bitByte
// Dependencies: [9102]

// Module 9101 (QR8bitByte)
class QR8bitByte {
  constructor(arg0) {
    obj = { mode: require("module_9102").MODE_8BIT_BYTE, data: global };
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
