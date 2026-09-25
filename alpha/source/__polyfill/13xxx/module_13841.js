// Module ID: 13841
// Function ID: 13842
// Dependencies: [13837]

// Module 13841
import _mod13837 from "module_13837" /* 13837 */;


export default !_mod13837(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
