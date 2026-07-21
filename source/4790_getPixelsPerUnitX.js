// Module ID: 4790
// Function ID: 41660
// Name: getPixelsPerUnitX
// Dependencies: []

// Module 4790 (getPixelsPerUnitX)
function getPixelsPerUnitX(dataView, arg1, longAt) {
  if (tagFitsInBuffer(dataView, arg1, longAt, 0, 4)) {
    let obj = longAt(arg6[0]);
    longAt = obj.getLongAt(dataView, arg1 + arg1(arg6[1]).PNG_CHUNK_DATA_OFFSET);
    obj = { value: longAt, description: "" + longAt };
    return obj;
  }
}
function getPixelsPerUnitY(dataView, arg1, longAt) {
  if (tagFitsInBuffer(dataView, arg1, longAt, 4, 4)) {
    let obj = longAt(arg6[0]);
    longAt = obj.getLongAt(dataView, arg1 + arg1(arg6[1]).PNG_CHUNK_DATA_OFFSET + 4);
    obj = { value: longAt, description: "" + longAt };
    return obj;
  }
}
function getPixelUnits(getUint8, arg1, longAt) {
  if (tagFitsInBuffer(getUint8, arg1, longAt, 8, 1)) {
    let obj = longAt(arg6[0]);
    const byteAt = obj.getByteAt(getUint8, arg1 + arg1(arg6[1]).PNG_CHUNK_DATA_OFFSET + 8);
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
    let obj = longAt(arg6[0]);
    const shortAt = obj.getShortAt(getUint8, arg1 + arg1(arg6[1]).PNG_CHUNK_DATA_OFFSET);
    const byteAt = longAt(arg6[0]).getByteAt(getUint8, arg1 + arg1(arg6[1]).PNG_CHUNK_DATA_OFFSET + 2);
    const obj2 = longAt(arg6[0]);
    const byteAt1 = longAt(arg6[0]).getByteAt(getUint8, arg1 + arg1(arg6[1]).PNG_CHUNK_DATA_OFFSET + 3);
    const obj3 = longAt(arg6[0]);
    const byteAt2 = longAt(arg6[0]).getByteAt(getUint8, arg1 + arg1(arg6[1]).PNG_CHUNK_DATA_OFFSET + 4);
    const obj4 = longAt(arg6[0]);
    const byteAt3 = longAt(arg6[0]).getByteAt(getUint8, arg1 + arg1(arg6[1]).PNG_CHUNK_DATA_OFFSET + 5);
    const obj5 = longAt(arg6[0]);
    const byteAt4 = longAt(arg6[0]).getByteAt(getUint8, arg1 + arg1(arg6[1]).PNG_CHUNK_DATA_OFFSET + 6);
    obj = {};
    const items = [shortAt, byteAt, byteAt1, byteAt2, byteAt3, byteAt4];
    obj.value = items;
    const tmp11 = pad(shortAt, 4);
    const obj6 = longAt(arg6[0]);
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
    tmp = arg1 + arg1(arg6[1]).PNG_CHUNK_DATA_OFFSET + arg3 + arg4 <= byteLength.byteLength;
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
      let tmp = arg2;
      let tmp2 = arg6;
      let obj2 = arg2(arg6[0]);
      let tmp3 = arg1;
      let longAt = obj2.getLongAt(dataView, arg1[num] + arg1(arg6[1]).PNG_CHUNK_LENGTH_OFFSET);
      let obj3 = arg1(arg6[2]);
      let sum = arg1[num] + arg1(arg6[1]).PNG_CHUNK_TYPE_OFFSET;
      let stringFromDataView = obj3.getStringFromDataView(dataView, sum, arg1(arg6[1]).PNG_CHUNK_TYPE_SIZE);
      if (stringFromDataView === arg1(arg6[1]).TYPE_PHYS) {
        let tmp10 = getPixelsPerUnitX;
        obj.Pixels Per Unit X = getPixelsPerUnitX(dataView, arg1[num], longAt);
        let tmp11 = getPixelsPerUnitY;
        obj.Pixels Per Unit Y = getPixelsPerUnitY(dataView, arg1[num], longAt);
        let tmp12 = getPixelUnits;
        obj.Pixel Units = getPixelUnits(dataView, arg1[num], longAt);
      } else {
        let tmp7 = arg1;
        let tmp8 = arg6;
        if (stringFromDataView === arg1(arg6[1]).TYPE_TIME) {
          let tmp9 = getModifyDate;
          obj.Modify Date = getModifyDate(dataView, arg1[num], longAt);
        }
      }
    }
    return obj;
  }
};
