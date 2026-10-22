// Module ID: 8252
// Function ID: 8253
// Dependencies: [8200]

// Module 8252
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
      let obj = require("module_8200");
      obj.deferInit(Compression, "base64", function() {
        const obj = require("module_8200");
        return obj.getBase64Image(this.image);
      });
    }
    return Compression;
  }
};
