// Module ID: 4791
// Function ID: 41664
// Name: getImageWidth
// Dependencies: [4762]

// Module 4791 (getImageWidth)
const module = arg2;
const dependencyMap = arg6;
function getImageWidth(byteLength, sum2) {
  if (sum2 + 4 <= byteLength.byteLength) {
    let obj = module(4762);
    const longAt = obj.getLongAt(byteLength, sum2);
    obj = { value: longAt };
    const _HermesInternal = HermesInternal;
    obj.description = "" + longAt + "px";
    return obj;
  }
}
function getImageHeight(byteLength) {
  if (arg1 + 4 + 4 <= byteLength.byteLength) {
    let obj = module(4762);
    const longAt = obj.getLongAt(byteLength, arg1 + 4);
    obj = { value: longAt };
    const _HermesInternal = HermesInternal;
    obj.description = "" + longAt + "px";
    return obj;
  }
}
function getBitDepth(byteLength) {
  if (arg1 + 8 + 1 <= byteLength.byteLength) {
    let obj = module(4762);
    const byteAt = obj.getByteAt(byteLength, arg1 + 8);
    obj = { value: byteAt };
    const _HermesInternal = HermesInternal;
    obj.description = "" + byteAt;
    return obj;
  }
}
function getColorType(byteLength, arg1) {
  if (arg1 + 9 + 1 <= byteLength.byteLength) {
    let obj = module(4762);
    const byteAt = obj.getByteAt(byteLength, arg1 + 9);
    obj = { value: byteAt, description: { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha" }[byteAt] || "Unknown" };
    return obj;
  }
}
function getCompression(byteLength, arg1) {
  if (arg1 + 10 + 1 <= byteLength.byteLength) {
    let obj = module(4762);
    const byteAt = obj.getByteAt(byteLength, arg1 + 10);
    obj = { value: byteAt };
    let str = "Unknown";
    if (0 === byteAt) {
      str = "Deflate/Inflate";
    }
    obj.description = str;
    return obj;
  }
}
function getFilter(byteLength, arg1) {
  if (arg1 + 11 + 1 <= byteLength.byteLength) {
    let obj = module(4762);
    const byteAt = obj.getByteAt(byteLength, arg1 + 11);
    obj = { value: byteAt };
    let str = "Unknown";
    if (0 === byteAt) {
      str = "Adaptive";
    }
    obj.description = str;
    return obj;
  }
}
function getInterlace(byteLength, arg1) {
  if (arg1 + 12 + 1 <= byteLength.byteLength) {
    let obj = module(4762);
    const byteAt = obj.getByteAt(byteLength, arg1 + 12);
    obj = { value: byteAt, description: { 0: "Noninterlaced", 1: "Adam7 Interlace" }[byteAt] || "Unknown" };
    return obj;
  }
}
arg5.default = {
  read(byteLength) {
    return { "Image Width": getImageWidth(byteLength, arg1), "Image Height": getImageHeight(byteLength, arg1), "Bit Depth": getBitDepth(byteLength, arg1), "Color Type": getColorType(byteLength, arg1), Compression: getCompression(byteLength, arg1), Filter: getFilter(byteLength, arg1), Interlace: getInterlace(byteLength, arg1) };
  }
};
