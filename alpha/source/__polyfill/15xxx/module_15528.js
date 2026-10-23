// Module ID: 15528
// Function ID: 15529
// Dependencies: [15524]

// Module 15528
import _mod15524 from "module_15524" /* 15524 */;


export default !_mod15524(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
