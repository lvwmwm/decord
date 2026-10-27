// Module ID: 15332
// Function ID: 15333
// Dependencies: [15328]

// Module 15332
import _mod15328 from "module_15328" /* 15328 */;


export default !_mod15328(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
