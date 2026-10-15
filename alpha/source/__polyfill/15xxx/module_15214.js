// Module ID: 15214
// Function ID: 15215
// Dependencies: [15210]

// Module 15214
import _mod15210 from "module_15210" /* 15210 */;


export default !_mod15210(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
