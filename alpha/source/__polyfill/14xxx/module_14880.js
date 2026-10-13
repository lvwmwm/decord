// Module ID: 14880
// Function ID: 14881
// Dependencies: [14876]

// Module 14880
import _mod14876 from "module_14876" /* 14876 */;


export default !_mod14876(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
