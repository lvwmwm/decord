// Module ID: 14087
// Function ID: 14088
// Dependencies: [14083]

// Module 14087
import _mod14083 from "module_14083" /* 14083 */;


export default !_mod14083(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
