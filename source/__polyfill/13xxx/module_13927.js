// Module ID: 13927
// Function ID: 13928
// Dependencies: [13923]

// Module 13927
import _mod13923 from "module_13923" /* 13923 */;


export default !_mod13923(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
