// Module ID: 15558
// Function ID: 15559
// Dependencies: [15554]

// Module 15558
import _mod15554 from "module_15554" /* 15554 */;


export default !_mod15554(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
