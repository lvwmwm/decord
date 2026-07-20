// Module ID: 13108
// Function ID: 99438
// Dependencies: []

// Module 13108

export default !require(dependencyMap[0])(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = "function" !== typeof bindResult;
  if (!hasOwnPropertyResult) {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
