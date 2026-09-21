// Module ID: 14585
// Function ID: 14586
// Dependencies: [14581]

// Module 14585
import _mod14581 from "module_14581" /* 14581 */;


export default !_mod14581(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
