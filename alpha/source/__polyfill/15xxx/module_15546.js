// Module ID: 15546
// Function ID: 15547
// Dependencies: [15542]

// Module 15546
import _mod15542 from "module_15542" /* 15542 */;


export default !_mod15542(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
