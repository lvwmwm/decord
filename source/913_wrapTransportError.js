// Module ID: 913
// Function ID: 10000
// Name: wrapTransportError
// Dependencies: [65, 798, 804, 841, 861, 29, 825, 928, 856, 816, 796, 932]
// Exports: wrapTransportError, wrapTransportOnClose, wrapTransportOnMessage, wrapTransportSend

// Module 913 (wrapTransportError)
import _toConsumableArray from "_toConsumableArray";
import module_798 from "module_798";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const wrapTransportError = function wrapTransportError(onerror) {
  if (onerror.onerror) {
    require(dependencyMap[2]).fill(onerror, "onerror", (arg0) => function(error) {
      error(closure_1[11]).captureError(error, "transport");
      error.call(this, error);
    });
    const obj = require(dependencyMap[2]);
  }
};
export const wrapTransportOnClose = function wrapTransportOnClose(onclose) {
  if (onclose.onclose) {
    require(dependencyMap[2]).fill(onclose, "onclose", (arg0) => function() {
      const result = arg0(closure_1[10]).cleanupPendingSpansForTransport(this);
      const obj = arg0(closure_1[10]);
      const result1 = arg0(closure_1[5]).cleanupSessionDataForTransport(this);
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const call = arg0.call;
      const items = [this];
      return call.apply(arg0, items.concat(array));
    });
    const obj = require(dependencyMap[2]);
  }
};
export const wrapTransportOnMessage = function wrapTransportOnMessage(onmessage, closure_0) {
  const require = closure_0;
  if (onmessage.onmessage) {
    require(dependencyMap[2]).fill(onmessage, "onmessage", (arg0) => {
      const arg1 = arg0;
      return function(first, extra) {
        let self = this;
        self = this;
        if (obj.isJsonRpcRequest(first)) {
          const tmp16 = "initialize" === tmp.method;
          if (tmp16) {
            const result = first(extra[4]).extractSessionDataFromInitializeRequest(first);
            const obj4 = first(extra[4]);
            const result1 = first(extra[5]).storeSessionDataForTransport(self, result);
            const obj5 = first(extra[5]);
          }
          const isolationScope = first(extra[6]).getIsolationScope();
          const obj6 = first(extra[6]);
          const cloneResult = isolationScope.clone();
          first(extra[6]).withIsolationScope(cloneResult, (self) => {
            const mcpServerSpanConfig = self(arg1[7]).buildMcpServerSpanConfig(self, self, arg1, self);
            const obj = self(arg1[7]);
            const startInactiveSpanResult = self(arg1[8]).startInactiveSpan(mcpServerSpanConfig);
            let tmp2 = tmp16;
            if (tmp16) {
              tmp2 = result;
            }
            if (tmp2) {
              let protocolVersion = result.protocolVersion;
              const clientAttributesFromInfo = self(arg1[4]).buildClientAttributesFromInfo(result.clientInfo);
              if (protocolVersion) {
                protocolVersion = result({}, self(arg1[9]).MCP_PROTOCOL_VERSION_ATTRIBUTE, result.protocolVersion);
              }
              startInactiveSpanResult.setAttributes(Object.assign({}, clientAttributesFromInfo, protocolVersion));
              const obj4 = self(arg1[4]);
            }
            const obj2 = self(arg1[8]);
            self(arg1[10]).storeSpanForRequest(self, self.id, startInactiveSpanResult, self.method);
            const obj5 = self(arg1[10]);
            return self(arg1[8]).withActiveSpan(startInactiveSpanResult, () => callback.call(closure_2, callback, closure_1));
          });
          const obj8 = first(extra[6]);
        } else {
          if (obj2.isJsonRpcNotification(tmp)) {
            const obj3 = first(extra[7]);
            let mcpNotificationSpan = obj3.createMcpNotificationSpan(tmp, self, extra, first, () => arg0.call(self, arg0, arg1));
          } else {
            mcpNotificationSpan = first.call(self, tmp, extra);
          }
          return mcpNotificationSpan;
        }
      };
    });
    const obj = require(dependencyMap[2]);
  }
};
export const wrapTransportSend = function wrapTransportSend(send, closure_0) {
  const require = closure_0;
  if (send.send) {
    require(dependencyMap[2]).fill(send, "send", (arg0) => {
      const arg1 = arg0;
      return callback(async function() {
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
            return tmp11Result.createMcpOutgoingNotificationSpan(tmp8, self, self, () => {
              const call = self.call;
              const items = [self];
              return call.apply(self, items.concat(array));
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
                              self(array[11]).captureError(error, "protocol");
                              const obj4 = self(array[11]);
                            }
                          }
                        }
                      }
                    }
                  }
                  while (true) {
                    let tmp31 = self;
                    let tmp32 = array;
                    let obj5 = self(array[3]);
                    let tmp33 = first;
                    if (!obj5.isValidContentItem(tmp8.result)) {
                      break;
                    } else {
                      let tmp34 = first;
                      if (tmp8.result.protocolVersion) {
                        let tmp36 = self;
                        let tmp37 = array;
                        let num8 = 4;
                        let obj6 = self(array[4]);
                        let tmp38 = first;
                        let num9 = 5;
                        let result = obj6.extractSessionDataFromInitializeResponse(tmp8.result);
                        let obj7 = self(array[5]);
                        let result1 = obj7.updateSessionDataForTransport(self, result);
                        // break
                      } else {
                        let tmp35 = first;
                        if (!tmp8.result.serverInfo) {
                          break;
                        }
                      }
                      break;
                    }
                    let tmp42 = self;
                    let tmp43 = array;
                    let num10 = 10;
                    let obj8 = self(array[10]);
                    let tmp44 = first;
                    let tmp45 = self;
                    let tmp46 = obj8;
                    let tmp47 = self;
                    let result2 = obj8.completeSpanWithResults(self, tmp8.id, tmp8.result, self);
                    while (true) {
                      let tmp41 = __exception;
                      // continue
                    }
                  }
                }
              }
            }
            const call = self.call;
            const items = [self];
            return call.apply(self, items.concat(array));
          }
          const obj2 = self(array[3]);
        }
      });
    });
    const obj = require(dependencyMap[2]);
  }
};
