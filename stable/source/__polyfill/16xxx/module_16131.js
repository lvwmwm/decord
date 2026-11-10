// Module ID: 16131
// Function ID: 16132
// Dependencies: [16127]

// Module 16131
import _mod16127 from "module_16127" /* 16127 */;


export default !_mod16127(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
