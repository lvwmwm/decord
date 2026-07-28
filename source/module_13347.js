// Module ID: 13347
// Function ID: 102304
// Dependencies: [13343]

// Module 13347

export default !require("module_13343")(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = "function" !== typeof bindResult;
  if (!hasOwnPropertyResult) {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
