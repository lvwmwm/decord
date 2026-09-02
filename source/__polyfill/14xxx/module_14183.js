// Module ID: 14183
// Function ID: 14184
// Dependencies: [14179]

// Module 14183
import _mod14179 from "module_14179" /* 14179 */;


export default !_mod14179(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
