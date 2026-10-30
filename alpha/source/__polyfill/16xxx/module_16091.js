// Module ID: 16091
// Function ID: 16092
// Dependencies: [16087]

// Module 16091
import _mod16087 from "module_16087" /* 16087 */;


export default !_mod16087(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
