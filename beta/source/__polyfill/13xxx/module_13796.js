// Module ID: 13796
// Function ID: 13797
// Dependencies: [13792]

// Module 13796
import _mod13792 from "module_13792" /* 13792 */;


export default !_mod13792(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
