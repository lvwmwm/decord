// Module ID: 15589
// Function ID: 15590
// Dependencies: [15585]

// Module 15589
import _mod15585 from "module_15585" /* 15585 */;


export default !_mod15585(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
