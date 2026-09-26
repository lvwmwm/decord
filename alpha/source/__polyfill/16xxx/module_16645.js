// Module ID: 16645
// Function ID: 16646
// Dependencies: [7883]

// Module 16645
import _mod7883 from "module_7883" /* 7883 */;


export default _mod7883((arg0, arg1, arg2) => {
  let num = 1;
  if (arg2) {
    num = 0;
  }
  arg0[num].push(arg1);
}, () => {
  const items = [[], []];
  return items;
});
