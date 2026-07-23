// Module ID: 4793
// Function ID: 41687
// Name: getPixelsPerUnitX
// Dependencies: [4762, 4752, 4745]

// Module 4793 (getPixelsPerUnitX)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function getPixelsPerUnitX(dataView, arg1, longAt) {
  if (tagFitsInBuffer(dataView, arg1, longAt, 0, 4)) {
    let obj = module(4762);
    longAt = obj.getLongAt(dataView, arg1 + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_DATA_OFFSET);
    obj = { value: longAt, description: "" + longAt };
    return obj;
  }
}
function getPixelsPerUnitY(dataView, arg1, longAt) {
  if (tagFitsInBuffer(dataView, arg1, longAt, 4, 4)) {
    let obj = module(4762);
    longAt = obj.getLongAt(dataView, arg1 + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_DATA_OFFSET + 4);
    obj = { value: longAt, description: "" + longAt };
    return obj;
  }
}
function getPixelUnits(getUint8, arg1, longAt) {
  if (tagFitsInBuffer(getUint8, arg1, longAt, 8, 1)) {
    let obj = module(4762);
    const byteAt = obj.getByteAt(getUint8, arg1 + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_DATA_OFFSET + 8);
    obj = { value: byteAt };
    let str = "Unknown";
    if (1 === byteAt) {
      str = "meters";
    }
    obj.description = str;
    return obj;
  }
}
function getModifyDate(getUint8, arg1, longAt) {
  if (tagFitsInBuffer(getUint8, arg1, longAt, 0, 7)) {
    let obj = module(4762);
    const shortAt = obj.getShortAt(getUint8, arg1 + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_DATA_OFFSET);
    const byteAt = module(4762).getByteAt(getUint8, arg1 + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_DATA_OFFSET + 2);
    const obj2 = module(4762);
    const byteAt1 = module(4762).getByteAt(getUint8, arg1 + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_DATA_OFFSET + 3);
    const obj3 = module(4762);
    const byteAt2 = module(4762).getByteAt(getUint8, arg1 + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_DATA_OFFSET + 4);
    const obj4 = module(4762);
    const byteAt3 = module(4762).getByteAt(getUint8, arg1 + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_DATA_OFFSET + 5);
    const obj5 = module(4762);
    const byteAt4 = module(4762).getByteAt(getUint8, arg1 + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_DATA_OFFSET + 6);
    obj = {};
    const items = [shortAt, byteAt, byteAt1, byteAt2, byteAt3, byteAt4];
    obj.value = items;
    const tmp11 = pad(shortAt, 4);
    const obj6 = module(4762);
    const tmp12 = pad(byteAt, 2);
    const tmp13 = pad(byteAt1, 2);
    const tmp14 = pad(byteAt2, 2);
    const _HermesInternal = HermesInternal;
    obj.description = "" + tmp11 + "-" + tmp12 + "-" + tmp13 + " " + tmp14 + ":" + pad(byteAt3, 2) + ":" + pad(byteAt4, 2);
    return obj;
  }
}
function tagFitsInBuffer(byteLength, arg1, longAt, arg3, arg4) {
  let tmp = arg3 + arg4 <= longAt;
  if (tmp) {
    tmp = arg1 + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_DATA_OFFSET + arg3 + arg4 <= byteLength.byteLength;
  }
  return tmp;
}
function pad(arg0, arg1) {
  return "" + "0".repeat(arg1 - "" + arg0.length) + arg0;
}
arg5.default = {
  read(dataView) {
    const obj = {};
    for (let num = 0; num < arg1.length; num = num + 1) {
      let tmp = module;
      let tmp2 = dependencyMap;
      let obj2 = module(4762);
      let tmp3 = require;
      let longAt = obj2.getLongAt(dataView, arg1[num] + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_LENGTH_OFFSET);
      let obj3 = require(4745) /* getStringFromDataView */;
      let sum = arg1[num] + require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_TYPE_OFFSET;
      let stringFromDataView = obj3.getStringFromDataView(dataView, sum, require(4752) /* isPngImageHeaderChunk */.PNG_CHUNK_TYPE_SIZE);
      if (stringFromDataView === require(4752) /* isPngImageHeaderChunk */.TYPE_PHYS) {
        let tmp10 = getPixelsPerUnitX;
        obj["Pixels Per Unit X"] = getPixelsPerUnitX(dataView, arg1[num], longAt);
        let tmp11 = getPixelsPerUnitY;
        obj["Pixels Per Unit Y"] = getPixelsPerUnitY(dataView, arg1[num], longAt);
        let tmp12 = getPixelUnits;
        obj["Pixel Units"] = getPixelUnits(dataView, arg1[num], longAt);
      } else {
        let tmp7 = require;
        let tmp8 = dependencyMap;
        if (stringFromDataView === require(4752) /* isPngImageHeaderChunk */.TYPE_TIME) {
          let tmp9 = getModifyDate;
          obj["Modify Date"] = getModifyDate(dataView, arg1[num], longAt);
        }
      }
    }
    return obj;
  }
};
