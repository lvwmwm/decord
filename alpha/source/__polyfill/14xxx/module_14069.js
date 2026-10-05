// Module ID: 14069
// Function ID: 14070
// Dependencies: [14065]

// Module 14069
import _mod14065 from "module_14065" /* 14065 */;


export default !_mod14065(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
