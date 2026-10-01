// Module ID: 855
// Function ID: 856
// Name: replaceExports
// Dependencies: []
// Exports: replaceExports

// Module 855 (replaceExports)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const replaceExports = function replaceExports(arg0, arg1, value) {
  if (typeof arg0[arg1] === "function") {
    try {
      arg0[arg1] = value;
    } catch (err) {
      const _Object = Object;
      const obj = { value, writable: true, configurable: true, enumerable: true };
      Object.defineProperty(arg0, arg1, obj);
    }
    if (arg0.default === arg0[arg1]) {
      try {
        arg0.default = value;
      } catch (err) {
        const _Object2 = Object;
        const obj2 = { value, writable: true, configurable: true, enumerable: true };
        Object.defineProperty(arg0, "default", obj2);
      }
    }
  }
};
