// Module ID: 13960
// Function ID: 13961
// Dependencies: [13956]

// Module 13960
import _mod13956 from "module_13956" /* 13956 */;


export default !_mod13956(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
