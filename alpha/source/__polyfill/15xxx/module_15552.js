// Module ID: 15552
// Function ID: 15553
// Dependencies: [15548]

// Module 15552
import _mod15548 from "module_15548" /* 15548 */;


export default !_mod15548(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
