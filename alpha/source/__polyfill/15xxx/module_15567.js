// Module ID: 15567
// Function ID: 15568
// Dependencies: [15563]

// Module 15567
import _mod15563 from "module_15563" /* 15563 */;


export default !_mod15563(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
