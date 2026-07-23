// Module ID: 1022
// Function ID: 11070
// Name: observe
// Dependencies: []

// Module 1022 (observe)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.observe = function observe(type) {
  let closure_0 = arg1;
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let obj = arguments[2];
    }
    const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
    if (supportedEntryTypes.includes(type)) {
      const prototype = globalThis.PerformanceObserver.prototype;
      const performanceObserver = new globalThis.PerformanceObserver((arg0) => {
        let closure_0 = arg0;
        const resolved = Promise.resolve();
        resolved.then(() => {
          entries(entries.getEntries());
        });
      });
      const _Object = Object;
      obj = { type, buffered: true };
      performanceObserver.observe(Object.assign(obj, obj));
      return performanceObserver;
    }
  }
  obj = {};
};
