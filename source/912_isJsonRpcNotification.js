// Module ID: 912
// Function ID: 9994
// Name: isJsonRpcNotification
// Dependencies: [956301315, 1593835523]

// Module 912 (isJsonRpcNotification)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isJsonRpcNotification = function isJsonRpcNotification(first) {
  let tmp = "object" === typeof first;
  if (tmp) {
    tmp = null !== first;
  }
  if (tmp) {
    tmp = "jsonrpc" in first;
  }
  if (tmp) {
    tmp = "2.0" === first.jsonrpc;
  }
  if (tmp) {
    tmp = "method" in first;
  }
  if (tmp) {
    tmp = !("id" in first);
  }
  return tmp;
};
arg5.isJsonRpcRequest = function isJsonRpcRequest(jsonrpc) {
  let tmp = "object" === typeof jsonrpc;
  if (tmp) {
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
};
arg5.isJsonRpcResponse = function isJsonRpcResponse(jsonrpc) {
  let tmp = "object" === typeof jsonrpc;
  if (tmp) {
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
    let tmp3 = "result" in jsonrpc;
    if (!tmp3) {
      tmp3 = "error" in jsonrpc;
    }
    tmp = tmp3;
  }
  return tmp;
};
arg5.isValidContentItem = function isValidContentItem(closure_3) {
  let tmp = null != closure_3;
  if (tmp) {
    tmp = "object" === typeof closure_3;
  }
  return tmp;
};
arg5.validateMcpServerInstance = function validateMcpServerInstance(arg0) {
  let flag = "object" === typeof arg0;
  if (flag) {
    flag = null !== arg0;
  }
  if (flag) {
    flag = "resource" in arg0;
  }
  if (flag) {
    flag = "tool" in arg0;
  }
  if (flag) {
    flag = "prompt" in arg0;
  }
  if (flag) {
    flag = "connect" in arg0;
  }
  if (!flag) {
    flag = false;
    if (arg1(arg6[0]).DEBUG_BUILD) {
      const debug = arg1(arg6[1]).debug;
      debug.warn("Did not patch MCP server. Interface is incompatible.");
      flag = false;
    }
  }
  return flag;
};
