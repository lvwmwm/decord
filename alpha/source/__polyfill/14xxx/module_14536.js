// Module ID: 14536
// Function ID: 14537
// Dependencies: [14532]

// Module 14536
import _mod14532 from "module_14532" /* 14532 */;


export default !_mod14532(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
