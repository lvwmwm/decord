// Module ID: 4750
// Function ID: 41257
// Name: getByteOrder
// Dependencies: []

// Module 4750 (getByteOrder)
const obj = {
  BIG_ENDIAN: 19789,
  LITTLE_ENDIAN: 18761,
  getByteOrder(getUint16, sum1) {
    if (getUint16.getUint16(sum1) === 18761) {
      return 18761;
    } else if (getUint16.getUint16(sum1) === 19789) {
      return 19789;
    } else {
      const _Error = Error;
      const error = new Error("Illegal byte order value. Faulty image.");
      throw error;
    }
  }
};
arg5.default = obj;
