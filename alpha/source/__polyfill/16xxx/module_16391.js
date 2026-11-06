// Module ID: 16391
// Function ID: 16392
// Dependencies: [16387]

// Module 16391
import _mod16387 from "module_16387" /* 16387 */;


export default !_mod16387(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
