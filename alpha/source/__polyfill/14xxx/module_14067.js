// Module ID: 14067
// Function ID: 14068
// Dependencies: [14063]

// Module 14067
import _mod14063 from "module_14063" /* 14063 */;


export default !_mod14063(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
