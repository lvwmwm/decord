// Module ID: 920
// Function ID: 10056
// Name: set
// Dependencies: [57, 916]
// Exports: filterMcpPiiFromSpanData

// Module 920 (set)
import _slicedToArray from "_slicedToArray";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [require("module_916").CLIENT_ADDRESS_ATTRIBUTE, require("module_916").CLIENT_PORT_ATTRIBUTE, require("module_916").MCP_RESOURCE_URI_ATTRIBUTE];
const set = new Set(items);

export const filterMcpPiiFromSpanData = function filterMcpPiiFromSpanData(merged, BooleanResult) {
  let reduced = merged;
  if (!BooleanResult) {
    const _Object = Object;
    const entries = Object.entries(merged);
    reduced = entries.reduce((arg0, arg1) => {
      const tmp = outer1_0(arg1, 2);
      const first = tmp[0];
      if (!outer1_1.has(first)) {
        arg0[first] = tmp[1];
      }
      return arg0;
    }, {});
  }
  return reduced;
};
