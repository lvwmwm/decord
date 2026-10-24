// Module ID: 15548
// Function ID: 15549
// Dependencies: [15544]

// Module 15548
import _mod15544 from "module_15544" /* 15544 */;


export default !_mod15544(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
