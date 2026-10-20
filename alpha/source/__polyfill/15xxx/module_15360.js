// Module ID: 15360
// Function ID: 15361
// Dependencies: [15356]

// Module 15360
import _mod15356 from "module_15356" /* 15356 */;


export default !_mod15356(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
