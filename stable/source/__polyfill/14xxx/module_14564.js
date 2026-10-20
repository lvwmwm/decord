// Module ID: 14564
// Function ID: 14565
// Dependencies: [14560]

// Module 14564
import _mod14560 from "module_14560" /* 14560 */;


export default !_mod14560(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
