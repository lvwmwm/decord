// Module ID: 14588
// Function ID: 14589
// Dependencies: [14584]

// Module 14588
import _mod14584 from "module_14584" /* 14584 */;


export default !_mod14584(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
