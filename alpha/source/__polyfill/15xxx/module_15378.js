// Module ID: 15378
// Function ID: 15379
// Dependencies: [15374]

// Module 15378
import _mod15374 from "module_15374" /* 15374 */;


export default !_mod15374(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
