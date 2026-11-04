// Module ID: 16136
// Function ID: 16137
// Dependencies: [16132]

// Module 16136
import _mod16132 from "module_16132" /* 16132 */;


export default !_mod16132(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
