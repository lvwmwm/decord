// Module ID: 4746
// Function ID: 41178
// Dependencies: []

// Module 4746
arg5.default = {
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
