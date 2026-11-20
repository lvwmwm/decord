// Module ID: 15423
// Function ID: 15424
// Dependencies: [15419]

// Module 15423
import _mod15419 from "module_15419" /* 15419 */;


export default !_mod15419(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
