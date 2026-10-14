// Module ID: 14918
// Function ID: 14919
// Dependencies: [14914]

// Module 14918
import _mod14914 from "module_14914" /* 14914 */;


export default !_mod14914(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
