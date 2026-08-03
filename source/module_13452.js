// Module ID: 13452
// Function ID: 13453
// Dependencies: [13448]

// Module 13452

export default !require("module_13448")(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult === "HAS_APPLICATION";
  if (typeof bindResult !== "HAS_APPLICATION") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
