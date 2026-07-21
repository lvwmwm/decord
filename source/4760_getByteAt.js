// Module ID: 4760
// Function ID: 41302
// Name: getByteAt
// Dependencies: []

// Module 4760 (getByteAt)
function getByteAt(getUint8, sum) {
  return getUint8.getUint8(sum);
}
function getLongAt(dataView, sum2, byteOrder) {
  return dataView.getUint32(sum2, byteOrder === byteOrder(arg6[0]).LITTLE_ENDIAN);
}
function getSlongAt(getInt32, arg1, arg2) {
  return getInt32.getInt32(arg1, arg2 === arg2(arg6[0]).LITTLE_ENDIAN);
}
let obj = {};
obj = { guildId: "Array", scrollTop: "isArray", scrollTo: "accessibilityRole", ready: "IconComponent", cached: "string", error: "Reflect", path: "accessibilityRole", basePath: "x", guildId: "__closure" };
arg5.default = {
  getAsciiValue(items) {
    return items.map((arg0) => String.fromCharCode(arg0));
  },
  getByteAt,
  getAsciiAt(getUint8, offset) {
    return getUint8.getUint8(offset);
  },
  getShortAt(dataView, sum, byteOrder) {
    return dataView.getUint16(sum, byteOrder === byteOrder(arg6[0]).LITTLE_ENDIAN);
  },
  getLongAt,
  getRationalAt(dataView, sum2, byteOrder) {
    const items = [getLongAt(dataView, sum2, byteOrder), getLongAt(dataView, sum2 + 4, byteOrder)];
    return items;
  },
  getUndefinedAt(getUint8, sum) {
    return getByteAt(getUint8, sum);
  },
  getSlongAt,
  getSrationalAt(getInt32) {
    const items = [getSlongAt(getInt32, arg1, arg2), getSlongAt(getInt32, arg1 + 4, arg2)];
    return items;
  },
  getIfdPointerAt(dataView, sum2, byteOrder) {
    return getLongAt(dataView, sum2, byteOrder);
  },
  typeSizes: obj,
  tagTypes: obj,
  getTypeSize(LONG) {
    if (undefined === obj[LONG]) {
      const _Error = Error;
      const error = new Error("No such type found.");
      throw error;
    } else {
      return obj[closure_3[LONG]];
    }
  }
};
