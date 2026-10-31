// Module ID: 16132
// Function ID: 16133
// Dependencies: [16128]

// Module 16132
import _mod16128 from "module_16128" /* 16128 */;


export default !_mod16128(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
