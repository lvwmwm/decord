// Module ID: 15328
// Function ID: 15329
// Dependencies: [15324]

// Module 15328
import _mod15324 from "module_15324" /* 15324 */;


export default !_mod15324(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
