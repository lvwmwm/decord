// Module ID: 16146
// Function ID: 16147
// Dependencies: [16132]

// Module 16146
import _mod16132 from "module_16132" /* 16132 */;


export default (arg0, arg1, arg2) => {
  const compare = new _mod16132(arg0, arg2).compare;
  new _mod16132(arg0, arg2);
  const tmp2 = new _mod16132(arg1, arg2);
  return compare(tmp2);
};
