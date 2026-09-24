// Module ID: 14626
// Function ID: 14627
// Dependencies: [14622]

// Module 14626
import _mod14622 from "module_14622" /* 14622 */;


export default !_mod14622(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
