// Module ID: 14616
// Function ID: 14617
// Dependencies: [14612]

// Module 14616
import _mod14612 from "module_14612" /* 14612 */;


export default !_mod14612(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
