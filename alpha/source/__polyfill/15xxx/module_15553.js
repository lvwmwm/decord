// Module ID: 15553
// Function ID: 15554
// Dependencies: [15549]

// Module 15553
import _mod15549 from "module_15549" /* 15549 */;


export default !_mod15549(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
