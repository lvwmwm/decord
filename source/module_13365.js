// Module ID: 13365
// Function ID: 13366
// Dependencies: [13361]

// Module 13365

export default !require("module_13361")(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult === "ZodObject";
  if (typeof bindResult !== "ZodObject") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
