// Module ID: 16872
// Function ID: 16873
// Dependencies: [8078]

// Module 16872
import _mod8078 from "module_8078" /* 8078 */;


export default _mod8078((arg0, arg1, arg2) => {
  let num = 1;
  if (arg2) {
    num = 0;
  }
  arg0[num].push(arg1);
}, () => {
  const items = [[], []];
  return items;
});
