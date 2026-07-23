// Module ID: 4797
// Function ID: 41711
// Name: getStringFromDataView
// Dependencies: [4745]

// Module 4797 (getStringFromDataView)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = [6, 7, 99];
arg5.default = {
  get(buffer, Compression) {
    let prop = Compression;
    if (Compression) {
      let hasItem = undefined === Compression.Compression;
      if (!hasItem) {
        hasItem = closure_2.includes(Compression.Compression.value);
      }
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
      require(4745) /* getStringFromDataView */.deferInit(Compression, "base64", function() {
        return outer1_0(outer1_1[0]).getBase64Image(this.image);
      });
      const obj = require(4745) /* getStringFromDataView */;
    }
    return Compression;
  }
};
