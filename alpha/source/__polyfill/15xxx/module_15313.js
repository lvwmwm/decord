// Module ID: 15313
// Function ID: 15314
// Dependencies: [15302]

// Module 15313
import _mod15302 from "module_15302" /* 15302 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15302(arg0, arg2);
  const tmp = new _mod15302(arg1, arg2);
  return obj.intersects(tmp, arg2);
};
