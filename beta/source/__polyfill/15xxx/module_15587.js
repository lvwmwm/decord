// Module ID: 15587
// Function ID: 15588
// Dependencies: [15583]

// Module 15587
import _mod15583 from "module_15583" /* 15583 */;


export default !_mod15583(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
