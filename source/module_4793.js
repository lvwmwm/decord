// Module ID: 4793
// Function ID: 41636
// Dependencies: []

// Module 4793
let closure_2 = [false, false, false];
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
      Compression(arg6[0]).deferInit(Compression, "base64", function() {
        return callback(closure_1[0]).getBase64Image(this.image);
      });
      const obj = Compression(arg6[0]);
    }
    return Compression;
  }
};
