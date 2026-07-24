// Module ID: 913
// Function ID: 10006
// Name: wrapTransportError
// Dependencies: [5, 77, 799, 912, 914, 915, 825, 917, 842, 916, 921, 923]
// Exports: wrapTransportError, wrapTransportOnClose, wrapTransportOnMessage, wrapTransportSend

// Module 913 (wrapTransportError)
import asyncGeneratorStep from "weakMap";
import _defineProperty from "_defineProperty";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const wrapTransportError = function wrapTransportError(onerror) {
  if (onerror.onerror) {
    require(799) /* addNonEnumerableProperty */.fill(onerror, "onerror", (arg0) => {
      let closure_0 = arg0;
      return function(error) {
        outer2_0(outer2_1[11]).captureError(error, "transport");
        callback.call(this, error);
      };
    });
    const obj = require(799) /* addNonEnumerableProperty */;
  }
};
export const wrapTransportOnClose = function wrapTransportOnClose(onclose) {
  if (onclose.onclose) {
    require(799) /* addNonEnumerableProperty */.fill(onclose, "onclose", (arg0) => {
      let closure_0 = arg0;
      return function() {
        const result = outer2_0(outer2_1[10]).cleanupPendingSpansForTransport(this);
        const obj = outer2_0(outer2_1[10]);
        const result1 = outer2_0(outer2_1[5]).cleanupSessionDataForTransport(this);
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        const call = closure_0.call;
        const items = [this];
        return call.apply(closure_0, items.concat(array));
      };
    });
    let obj = require(799) /* addNonEnumerableProperty */;
  }
};
export const wrapTransportOnMessage = function wrapTransportOnMessage(onmessage, closure_0) {
  const _require = closure_0;
  if (onmessage.onmessage) {
    _require(799).fill(onmessage, "onmessage", (arg0) => {
      let closure_0 = arg0;
      return function(first, extra) {
        let self = this;
        const callback = first;
        let closure_1 = extra;
        self = this;
        if (obj.isJsonRpcRequest(first)) {
          let closure_4 = tmp16;
          if ("initialize" === tmp.method) {
            const result = callback(outer2_1[4]).extractSessionDataFromInitializeRequest(first);
            let closure_3 = result;
            let obj4 = callback(outer2_1[4]);
            const result1 = callback(outer2_1[5]).storeSessionDataForTransport(self, result);
            let obj5 = callback(outer2_1[5]);
          }
          const isolationScope = callback(outer2_1[6]).getIsolationScope();
          const obj6 = callback(outer2_1[6]);
          const cloneResult = isolationScope.clone();
          callback(outer2_1[6]).withIsolationScope(cloneResult, () => {
            const mcpServerSpanConfig = lib(outer3_1[7]).buildMcpServerSpanConfig(lib, self, closure_1, lib);
            const obj = lib(outer3_1[7]);
            const startInactiveSpanResult = lib(outer3_1[8]).startInactiveSpan(mcpServerSpanConfig);
            let tmp2 = closure_4;
            if (closure_4) {
              tmp2 = closure_3;
            }
            if (tmp2) {
              let protocolVersion = closure_3.protocolVersion;
              const clientAttributesFromInfo = lib(outer3_1[4]).buildClientAttributesFromInfo(closure_3.clientInfo);
              if (protocolVersion) {
                protocolVersion = outer3_3({}, lib(outer3_1[9]).MCP_PROTOCOL_VERSION_ATTRIBUTE, closure_3.protocolVersion);
              }
              startInactiveSpanResult.setAttributes(Object.assign({}, clientAttributesFromInfo, protocolVersion));
              const obj4 = lib(outer3_1[4]);
            }
            const obj2 = lib(outer3_1[8]);
            lib(outer3_1[10]).storeSpanForRequest(self, lib.id, startInactiveSpanResult, lib.method);
            const obj5 = lib(outer3_1[10]);
            return lib(outer3_1[8]).withActiveSpan(startInactiveSpanResult, () => callback.call(outer1_2, outer1_0, outer1_1));
          });
          const obj8 = callback(outer2_1[6]);
        } else {
          if (obj2.isJsonRpcNotification(tmp)) {
            const obj3 = callback(outer2_1[7]);
            let mcpNotificationSpan = obj3.createMcpNotificationSpan(tmp, self, extra, callback, () => lib.call(self, lib, closure_1));
          } else {
            mcpNotificationSpan = callback.call(self, tmp, extra);
          }
          return mcpNotificationSpan;
        }
      };
    });
    let obj = _require(799);
  }
};
export const wrapTransportSend = function wrapTransportSend(send, closure_0) {
  const _require = closure_0;
  if (send.send) {
    _require(799).fill(send, "send", (arg0) => {
      let closure_0 = arg0;
      return outer1_2(async function() {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          let array;
          const length = arguments.length;
          const _Array = Array;
          array = new Array(length);
          for (let num2 = 0; num2 < length; num2 = num2 + 1) {
            array[num2] = arguments[num2];
          }
          const first = array[0];
          if (obj2.isJsonRpcNotification(first)) {
            let tmp11Result = tmp11(tmp12[7]);
            return tmp11Result.createMcpOutgoingNotificationSpan(tmp8, self, callback, () => {
              const call = outer2_0.call;
              const items = [self];
              return call.apply(outer2_0, items.concat(array));
            });
          } else {
            tmp11Result = tmp11(tmp12[3]);
            if (tmp11Result.isJsonRpcResponse(tmp8)) {
              if (null !== tmp8.id) {
                if (undefined !== tmp8.id) {
                  if (tmp8.error) {
                    let error = tmp8.error;
                    if (error) {
                      if ("object" === typeof tmp17) {
                        if ("code" in tmp17) {
                          if ("message" in tmp17) {
                            if (-32603 === error.code) {
                              const _Error = Error;
                              error = new Error(tmp17.message);
                              const _HermesInternal = HermesInternal;
                              error.name = "JsonRpcError_" + tmp17.code;
                              callback(outer3_1[11]).captureError(error, "protocol");
                              const obj4 = callback(outer3_1[11]);
                            }
                          }
                        }
                      }
                    }
                  }
                  while (true) {
                    let tmp31 = callback;
                    let tmp32 = outer3_1;
                    let obj5 = callback(outer3_1[3]);
                    let tmp33 = first;
                    if (!obj5.isValidContentItem(tmp8.result)) {
                      break;
                    } else {
                      let tmp34 = first;
                      if (tmp8.result.protocolVersion) {
                        let tmp36 = callback;
                        let tmp37 = outer3_1;
                        let num8 = 4;
                        let obj6 = callback(outer3_1[4]);
                        let tmp38 = first;
                        let num9 = 5;
                        let result = obj6.extractSessionDataFromInitializeResponse(tmp8.result);
                        let obj7 = callback(outer3_1[5]);
                        let result1 = obj7.updateSessionDataForTransport(self, result);
                        break;
                      } else {
                        let tmp35 = first;
                        if (!tmp8.result.serverInfo) {
                          break;
                        }
                      }
                      break;
                    }
                    let tmp42 = callback;
                    let tmp43 = outer3_1;
                    let num10 = 10;
                    let obj8 = callback(outer3_1[10]);
                    let tmp44 = first;
                    let tmp45 = callback;
                    let tmp46 = obj8;
                    let tmp47 = self;
                    let result2 = obj8.completeSpanWithResults(self, tmp8.id, tmp8.result, callback);
                    while (true) {
                      let tmp41 = __exception;
                      continue;
                    }
                  }
                }
              }
            }
            let call = outer1_0.call;
            let items = [self];
            return call.apply(outer1_0, items.concat(array));
          }
          obj2 = callback(outer3_1[3]);
        }
      });
    });
    const obj = _require(799);
  }
};
