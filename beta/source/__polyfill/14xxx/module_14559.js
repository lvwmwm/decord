// Module ID: 14559
// Function ID: 14560
// Dependencies: [14555]

// Module 14559
import _mod14555 from "module_14555" /* 14555 */;


export default !_mod14555(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
