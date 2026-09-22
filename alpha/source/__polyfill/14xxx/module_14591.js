// Module ID: 14591
// Function ID: 14592
// Dependencies: [14587]

// Module 14591
import _mod14587 from "module_14587" /* 14587 */;


export default !_mod14587(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
