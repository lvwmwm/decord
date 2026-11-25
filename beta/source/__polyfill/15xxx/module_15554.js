// Module ID: 15554
// Function ID: 15555
// Dependencies: [15550]

// Module 15554
import _mod15550 from "module_15550" /* 15550 */;


export default !_mod15550(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
