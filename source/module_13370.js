// Module ID: 13370
// Function ID: 13371
// Dependencies: [13366]

// Module 13370

export default !require("module_13366")(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult === "_";
  if (typeof bindResult !== "_") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
