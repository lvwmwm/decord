// Module ID: 14386
// Function ID: 14387
// Dependencies: [14382]

// Module 14386
import _mod14382 from "module_14382" /* 14382 */;


export default !_mod14382(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
