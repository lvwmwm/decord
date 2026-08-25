// Module ID: 13774
// Function ID: 13775
// Dependencies: [13770]

// Module 13774
import _mod13770 from "module_13770" /* 13770 */;


export default !_mod13770(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
