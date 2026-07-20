// Module ID: 920
// Function ID: 10050
// Name: set
// Dependencies: []
// Exports: filterMcpPiiFromSpanData

// Module 920 (set)
let closure_0 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [require(dependencyMap[1]).CLIENT_ADDRESS_ATTRIBUTE, require(dependencyMap[1]).CLIENT_PORT_ATTRIBUTE, require(dependencyMap[1]).MCP_RESOURCE_URI_ATTRIBUTE];
const set = new Set(items);

export const filterMcpPiiFromSpanData = function filterMcpPiiFromSpanData(merged, BooleanResult) {
  let reduced = merged;
  if (!BooleanResult) {
    const _Object = Object;
    const entries = Object.entries(merged);
    reduced = entries.reduce((arg0, arg1) => {
      const tmp = callback(arg1, 2);
      const first = tmp[0];
      if (!set.has(first)) {
        arg0[first] = tmp[1];
      }
      return arg0;
    }, {});
  }
  return reduced;
};
