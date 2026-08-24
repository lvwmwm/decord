// Module ID: 13739
// Function ID: 13740
// Dependencies: [13735]

// Module 13739
import _mod13735 from "module_13735" /* 13735 */;


export default !_mod13735(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
