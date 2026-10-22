// Module ID: 15507
// Function ID: 15508
// Dependencies: [15503]

// Module 15507
import _mod15503 from "module_15503" /* 15503 */;


export default !_mod15503(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
