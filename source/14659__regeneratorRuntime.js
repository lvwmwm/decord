// Module ID: 14659
// Function ID: 14660
// Name: _regeneratorRuntime
// Dependencies: [14660]

// Module 14659 (_regeneratorRuntime)
const tmp3 = require("_regeneratorRuntime")();
try {
  globalThis.regeneratorRuntime = tmp3;
} catch (err) {
  const _globalThis = globalThis;
  if (typeof globalThis === "object") {
    const _globalThis2 = globalThis;
    globalThis.regeneratorRuntime = tmp2;
  } else {
    const _Function = Function;
    Function("r", "regeneratorRuntime = r")(tmp2);
  }
}

export default tmp3;
