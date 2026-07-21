// Module ID: 4747
// Function ID: 41226
// Name: getByteOrder
// Dependencies: []

// Module 4747 (getByteOrder)
const obj = {
  9223372036854775807: -1083113470,
  9223372036854775807: -347865087,
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
