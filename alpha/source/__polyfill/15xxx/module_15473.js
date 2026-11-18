// Module ID: 15473
// Function ID: 15474
// Dependencies: [15469]

// Module 15473
import _mod15469 from "module_15469" /* 15469 */;


export default !_mod15469(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
