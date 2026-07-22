// Module ID: 13124
// Function ID: 99516
// Dependencies: []

// Module 13124

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
