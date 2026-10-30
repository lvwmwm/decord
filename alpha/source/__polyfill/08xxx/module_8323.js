// Module ID: 8323
// Function ID: 8324
// Dependencies: [8271]

// Module 8323
const require = globalThis.__r;

let closure_2 = [6, 7, 99];

export default {
  get(buffer, Compression, arg2) {
    let prop = Compression;
    if (prop) {
      const hasItem = undefined === Compression.Compression || closure_2.includes(Compression.Compression.value);
      prop = hasItem;
    }
    if (prop) {
      prop = Compression.JPEGInterchangeFormat;
    }
    if (prop) {
      prop = Compression.JPEGInterchangeFormat.value;
    }
    if (prop) {
      prop = Compression.JPEGInterchangeFormatLength;
    }
    if (prop) {
      prop = Compression.JPEGInterchangeFormatLength.value;
    }
    if (prop) {
      Compression.type = "image/jpeg";
      const sum = arg2 + Compression.JPEGInterchangeFormat.value;
      buffer = buffer.buffer;
      Compression.image = buffer.slice(sum, sum + Compression.JPEGInterchangeFormatLength.value);
      let obj = require("module_8271");
      obj.deferInit(Compression, "base64", function() {
        const obj = require("module_8271");
        return obj.getBase64Image(this.image);
      });
    }
    return Compression;
  }
};
