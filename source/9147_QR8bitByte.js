// Module ID: 9147
// Function ID: 9148
// Name: QR8bitByte
// Dependencies: [9148]

// Module 9147 (QR8bitByte)
class QR8bitByte {
  constructor(arg0) {
    obj = { mode: require("module_9148").MODE_8BIT_BYTE, data: global };
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
