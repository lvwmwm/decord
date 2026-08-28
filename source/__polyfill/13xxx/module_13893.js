// Module ID: 13893
// Function ID: 13894
// Dependencies: [13889]

// Module 13893
import _mod13889 from "module_13889" /* 13889 */;


export default !_mod13889(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
