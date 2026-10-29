// Module ID: 16051
// Function ID: 16052
// Dependencies: [16047]

// Module 16051
import _mod16047 from "module_16047" /* 16047 */;


export default !_mod16047(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
