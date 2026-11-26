// Module ID: 15740
// Function ID: 15741
// Dependencies: [15736]

// Module 15740
import _mod15736 from "module_15736" /* 15736 */;


export default !_mod15736(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
