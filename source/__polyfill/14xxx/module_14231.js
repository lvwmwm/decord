// Module ID: 14231
// Function ID: 14232
// Dependencies: [14227]

// Module 14231
import _mod14227 from "module_14227" /* 14227 */;


export default !_mod14227(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
