// Module ID: 16632
// Function ID: 16633
// Dependencies: [16628]

// Module 16632
import _mod16628 from "module_16628" /* 16628 */;


export default !_mod16628(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
