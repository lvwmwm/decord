// Module ID: 14799
// Function ID: 14800
// Name: _regeneratorRuntime
// Dependencies: [14800]

// Module 14799 (_regeneratorRuntime)
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
