// Module ID: 15815
// Function ID: 15816
// Dependencies: [15811]

// Module 15815
import _mod15811 from "module_15811" /* 15811 */;


export default !_mod15811(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
