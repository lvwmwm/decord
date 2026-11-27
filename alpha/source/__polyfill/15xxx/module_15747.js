// Module ID: 15747
// Function ID: 15748
// Dependencies: [15743]

// Module 15747
import _mod15743 from "module_15743" /* 15743 */;


export default !_mod15743(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
