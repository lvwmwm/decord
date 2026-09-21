// Module ID: 17298
// Function ID: 17299
// Dependencies: [8709]

// Module 17298
import _mod8709 from "module_8709" /* 8709 */;


export default _mod8709((arg0, arg1, arg2) => {
  let num = 1;
  if (arg2) {
    num = 0;
  }
  arg0[num].push(arg1);
}, () => {
  const items = [[], []];
  return items;
});
