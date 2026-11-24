// Module ID: 15544
// Function ID: 15545
// Dependencies: [15540]

// Module 15544
import _mod15540 from "module_15540" /* 15540 */;


export default !_mod15540(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  const hasOwnPropertyResult = typeof bindResult !== "function" || bindResult.hasOwnProperty("prototype");
  return hasOwnPropertyResult;
});
