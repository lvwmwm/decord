// Module ID: 15259
// Function ID: 15260
// Dependencies: [15255]

// Module 15259
import _mod15255 from "module_15255" /* 15255 */;


export default !_mod15255(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
