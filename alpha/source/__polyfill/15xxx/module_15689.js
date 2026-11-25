// Module ID: 15689
// Function ID: 15690
// Dependencies: [15685]

// Module 15689
import _mod15685 from "module_15685" /* 15685 */;


export default !_mod15685(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
