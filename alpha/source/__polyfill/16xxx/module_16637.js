// Module ID: 16637
// Function ID: 16638
// Dependencies: [16633]

// Module 16637
import _mod16633 from "module_16633" /* 16633 */;


export default !_mod16633(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
