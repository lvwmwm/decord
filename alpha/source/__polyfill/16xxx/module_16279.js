// Module ID: 16279
// Function ID: 16280
// Dependencies: [16275]

// Module 16279
import _mod16275 from "module_16275" /* 16275 */;


export default !_mod16275(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
