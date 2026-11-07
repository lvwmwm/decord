// Module ID: 16439
// Function ID: 16440
// Dependencies: [16435]

// Module 16439
import _mod16435 from "module_16435" /* 16435 */;


export default !_mod16435(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
