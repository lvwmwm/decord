// Module ID: 14482
// Function ID: 14483
// Dependencies: [14478]

// Module 14482
import _mod14478 from "module_14478" /* 14478 */;


export default !_mod14478(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
