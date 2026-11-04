// Module ID: 801
// Function ID: 802
// Name: validateMcpServerInstance
// Dependencies: [687, 688]
// Exports: isJsonRpcNotification, isJsonRpcRequest, isJsonRpcResponse, isValidContentItem, validateMcpServerInstance

// Module 801 (validateMcpServerInstance)
import _mod687 from "module_687" /* 687 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function isJsonRpcNotification(jsonrpc) {
  let tmp = typeof jsonrpc === "object";
  if (typeof jsonrpc === "object") {
    tmp = null !== jsonrpc;
  }
  if (tmp) {
    tmp = "jsonrpc" in jsonrpc;
  }
  if (tmp) {
    tmp = "2.0" === jsonrpc.jsonrpc;
  }
  if (tmp) {
    tmp = "method" in jsonrpc;
  }
  if (tmp) {
    tmp = !("id" in jsonrpc);
  }
  return tmp;
}
export function isJsonRpcRequest(jsonrpc) {
  let tmp = typeof jsonrpc === "object";
  if (typeof jsonrpc === "object") {
    tmp = null !== jsonrpc;
  }
  if (tmp) {
    tmp = "jsonrpc" in jsonrpc;
  }
  if (tmp) {
    tmp = "2.0" === jsonrpc.jsonrpc;
  }
  if (tmp) {
    tmp = "method" in jsonrpc;
  }
  if (tmp) {
    tmp = "id" in jsonrpc;
  }
  return tmp;
}
export function isJsonRpcResponse(jsonrpc) {
  let tmp = typeof jsonrpc === "object";
  if (typeof jsonrpc === "object") {
    tmp = null !== jsonrpc;
  }
  if (tmp) {
    tmp = "jsonrpc" in jsonrpc;
  }
  if (tmp) {
    tmp = "2.0" === jsonrpc.jsonrpc;
  }
  if (tmp) {
    tmp = "id" in jsonrpc;
  }
  if (tmp) {
    tmp = "result" in jsonrpc || "error" in jsonrpc;
    const tmp2 = "result" in jsonrpc || "error" in jsonrpc;
  }
  return tmp;
}
export function isValidContentItem(clientInfo) {
  return null != clientInfo && typeof clientInfo === "object";
}
export function validateMcpServerInstance(obj) {
  let flag = typeof obj === "object";
  if (typeof obj === "object") {
    flag = null !== obj;
  }
  if (flag) {
    flag = "resource" in obj;
  }
  if (flag) {
    flag = "tool" in obj;
  }
  if (flag) {
    flag = "prompt" in obj;
  }
  if (flag) {
    flag = "connect" in obj;
  }
  if (!flag) {
    flag = false;
    const tmp = require;
    if (_mod687.DEBUG_BUILD) {
      const debug = tmp(688).debug;
      debug.warn("Did not patch MCP server. Interface is incompatible.");
      flag = false;
    }
  }
  return flag;
}
