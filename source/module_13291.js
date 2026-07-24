// Module ID: 13291
// Function ID: 101999
// Dependencies: [13287]

// Module 13291

export default !require("module_13287")(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = "function" !== typeof bindResult;
  if (!hasOwnPropertyResult) {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
