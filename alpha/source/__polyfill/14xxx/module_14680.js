// Module ID: 14680
// Function ID: 14681
// Dependencies: [14676]

// Module 14680
import _mod14676 from "module_14676" /* 14676 */;


export default !_mod14676(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
