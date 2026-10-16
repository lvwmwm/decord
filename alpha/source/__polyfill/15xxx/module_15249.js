// Module ID: 15249
// Function ID: 15250
// Dependencies: [15245]

// Module 15249
import _mod15245 from "module_15245" /* 15245 */;


export default !_mod15245(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
