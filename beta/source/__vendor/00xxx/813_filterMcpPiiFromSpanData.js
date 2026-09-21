// Module ID: 813
// Function ID: 814
// Name: filterMcpPiiFromSpanData
// Dependencies: [809]
// Exports: filterMcpPiiFromSpanData

// Module 813 (filterMcpPiiFromSpanData)
import CLIENT_ADDRESS_ATTRIBUTE from "CLIENT_ADDRESS_ATTRIBUTE" /* 809 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [CLIENT_ADDRESS_ATTRIBUTE.CLIENT_ADDRESS_ATTRIBUTE, CLIENT_ADDRESS_ATTRIBUTE.CLIENT_PORT_ATTRIBUTE, CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE];
const set = new Set(items);

export const filterMcpPiiFromSpanData = function filterMcpPiiFromSpanData(arg0, BooleanResult) {
  let reduced = arg0;
  if (!BooleanResult) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    reduced = entries.reduce((acc, item) => {
      [tmp, tmp2] = item;
      if (!set.has(tmp)) {
        acc[tmp] = tmp2;
      }
      return acc;
    }, {});
  }
  return reduced;
};
