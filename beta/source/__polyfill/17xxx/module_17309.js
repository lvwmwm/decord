// Module ID: 17309
// Function ID: 17310
// Dependencies: [8741]

// Module 17309
import _mod8741 from "module_8741" /* 8741 */;


export default _mod8741((arg0, arg1, arg2) => {
  let num = 1;
  if (arg2) {
    num = 0;
  }
  arg0[num].push(arg1);
}, () => {
  const items = [[], []];
  return items;
});
