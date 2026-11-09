// Module ID: 16449
// Function ID: 16450
// Dependencies: [16445]

// Module 16449
import _mod16445 from "module_16445" /* 16445 */;


export default !_mod16445(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
