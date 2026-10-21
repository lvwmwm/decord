// Module ID: 15450
// Function ID: 15451
// Dependencies: [15446]

// Module 15450
import _mod15446 from "module_15446" /* 15446 */;


export default !_mod15446(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
