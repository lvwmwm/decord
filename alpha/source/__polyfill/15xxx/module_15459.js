// Module ID: 15459
// Function ID: 15460
// Dependencies: [15455]

// Module 15459
import _mod15455 from "module_15455" /* 15455 */;


export default !_mod15455(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
