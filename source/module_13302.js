// Module ID: 13302
// Function ID: 102126
// Dependencies: [13298]

// Module 13302

export default !require("module_13298")(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = "function" !== typeof bindResult;
  if (!hasOwnPropertyResult) {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
