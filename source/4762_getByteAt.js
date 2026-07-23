// Module ID: 4762
// Function ID: 41336
// Name: getByteAt
// Dependencies: [4750]

// Module 4762 (getByteAt)
const module = arg2;
const dependencyMap = arg6;
function getByteAt(getUint8, sum) {
  return getUint8.getUint8(sum);
}
function getLongAt(dataView, sum2, byteOrder) {
  return dataView.getUint32(sum2, byteOrder === module(4750).LITTLE_ENDIAN);
}
function getSlongAt(getInt32, arg1, arg2) {
  return getInt32.getInt32(arg1, arg2 === module(4750).LITTLE_ENDIAN);
}
let obj = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1, 9: 4, 10: 8, 13: 4 };
obj = { BYTE: 1, ASCII: 2, SHORT: 3, LONG: 4, RATIONAL: 5, UNDEFINED: 7, SLONG: 9, SRATIONAL: 10, IFD: 13 };
arg5.default = {
  getAsciiValue(items) {
    return items.map((arg0) => String.fromCharCode(arg0));
  },
  getByteAt,
  getAsciiAt(getUint8, offset) {
    return getUint8.getUint8(offset);
  },
  getShortAt(dataView, sum, byteOrder) {
    return dataView.getUint16(sum, byteOrder === module(4750).LITTLE_ENDIAN);
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
      return obj[obj[LONG]];
    }
  }
};
