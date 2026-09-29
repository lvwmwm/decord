// Module ID: 13965
// Function ID: 13966
// Dependencies: [13961]

// Module 13965
import _mod13961 from "module_13961" /* 13961 */;


export default !_mod13961(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
