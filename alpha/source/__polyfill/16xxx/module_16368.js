// Module ID: 16368
// Function ID: 16369
// Dependencies: [16364]

// Module 16368
import _mod16364 from "module_16364" /* 16364 */;


export default !_mod16364(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
