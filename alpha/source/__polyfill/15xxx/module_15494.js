// Module ID: 15494
// Function ID: 15495
// Dependencies: [15490]

// Module 15494
import _mod15490 from "module_15490" /* 15490 */;


export default !_mod15490(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
