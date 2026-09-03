// Module ID: 14199
// Function ID: 14200
// Dependencies: [14195]

// Module 14199
import _mod14195 from "module_14195" /* 14195 */;


export default !_mod14195(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
