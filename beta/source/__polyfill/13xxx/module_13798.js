// Module ID: 13798
// Function ID: 13799
// Dependencies: [13794]

// Module 13798
import _mod13794 from "module_13794" /* 13794 */;


export default !_mod13794(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
