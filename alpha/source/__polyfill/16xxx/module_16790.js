// Module ID: 16790
// Function ID: 16791
// Dependencies: [16786]

// Module 16790
import _mod16786 from "module_16786" /* 16786 */;


export default !_mod16786(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
