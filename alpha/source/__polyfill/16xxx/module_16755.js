// Module ID: 16755
// Function ID: 16756
// Dependencies: [16751]

// Module 16755
import _mod16751 from "module_16751" /* 16751 */;


export default !_mod16751(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
