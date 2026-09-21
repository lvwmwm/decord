// Module ID: 806
// Function ID: 807
// Name: wrapTransportError
// Dependencies: [5, 691, 805, 807, 808, 717, 810, 735, 809, 814, 816]
// Exports: wrapTransportError, wrapTransportOnClose, wrapTransportOnMessage, wrapTransportSend

// Module 806 (wrapTransportError)
import _mod691 from "module_691" /* 691 */;
import _mod735 from "module_735" /* 735 */;
import _mod810 from "module_810" /* 810 */;
import _mod814 from "module_814" /* 814 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const wrapTransportError = function wrapTransportError(onerror) {
  if (onerror.onerror) {
    _mod691.fill(onerror, "onerror", (arg0) => {
      closure_0 = arg0;
      return function(error) {
        const self = this;
        (function captureTransportError(error) {
          try {
            closure_1_0(closure_1_1[10]).captureError(error, "transport");
          } catch (err) {
          }
        })(error);
        const call = closure_0.call;
        return typeof call === "unknown" ? closure_0(error) : call(self, error);
      };
    });
  }
};
export const wrapTransportOnClose = function wrapTransportOnClose(onclose) {
  if (onclose.onclose) {
    _mod691.fill(onclose, "onclose", (arg0) => {
      closure_0 = arg0;
      return function() {
        const items = [...arguments];
        const result = require("module_814").cleanupPendingSpansForTransport(this);
        const obj = require("module_814");
        const result1 = require("module_808").cleanupSessionDataForTransport(this);
        const items1 = [this, ...items];
        return closure_0.call.apply(items1);
      };
    });
  }
};
export const wrapTransportOnMessage = function wrapTransportOnMessage(onmessage, arg1) {
  _require = arg1;
  if (onmessage.onmessage) {
    require("module_691").fill(onmessage, "onmessage", (arg0) => {
      closure_0 = arg0;
      return function(method, extra) {
        const self = this;
        closure_2 = extra;
        if (obj.isJsonRpcRequest(method)) {
          closure_0 = tmp10;
          if ("initialize" === method.method) {
            try {
              const result = tmp(tmp2[3]).extractSessionDataFromInitializeRequest(method);
              closure_3 = result;
              let tmpResult = tmp(tmp2[3]);
              const result1 = tmp(tmp2[4]).storeSessionDataForTransport(self, result);
              const tmpResult6 = tmp(tmp2[4]);
            } catch (err) {
            }
          }
          const isolationScope = tmp(tmp2[5]).getIsolationScope();
          const tmpResult7 = tmp(tmp2[5]);
          const cloneResult = isolationScope.clone();
          return tmp(tmp2[5]).withIsolationScope(cloneResult, () => {
            const mcpServerSpanConfig = _mod810.buildMcpServerSpanConfig(method, self, closure_2, closure_0);
            const tmp4 = self;
            const startInactiveSpanResult = _mod735.startInactiveSpan(mcpServerSpanConfig);
            let tmp6 = closure_0;
            if (closure_0) {
              tmp6 = result;
            }
            if (tmp6) {
              const obj3 = {};
              const merged = Object.assign(tmp(807).buildClientAttributesFromInfo(result.clientInfo));
              let protocolVersion = result.protocolVersion;
              if (protocolVersion) {
                const obj4 = {};
                obj4[tmp(809).MCP_PROTOCOL_VERSION_ATTRIBUTE] = tmp7.protocolVersion;
                protocolVersion = obj4;
              }
              const merged1 = Object.assign(protocolVersion);
              startInactiveSpanResult.setAttributes(obj3);
              tmp7 = result;
              const tmpResult = tmp(807);
            }
            _mod814.storeSpanForRequest(tmp4, method.id, startInactiveSpanResult, method.method);
            const tmpResult3 = _mod814;
            return _mod735.withActiveSpan(startInactiveSpanResult, () => {
              const call = closure_0.call;
              return typeof call === "unknown" ? closure_0(method, extra) : call(self, method, extra);
            });
          });
        } else {
          if (tmpResult9.isJsonRpcNotification(method)) {
            const tmpResult10 = tmp(tmp2[6]);
            let mcpNotificationSpan = tmpResult10.createMcpNotificationSpan(method, self, extra, closure_0, () => {
              const call = closure_0.call;
              return typeof call === "unknown" ? closure_0(closure_1, closure_2) : call(self, closure_1, closure_2);
            });
          } else {
            let call = closure_0.call;
            mcpNotificationSpan = typeof call === "unknown" ? closure_0(method, extra) : call(self, method, extra);
          }
          return mcpNotificationSpan;
        }
        obj = closure_0(dependencyMap[2]);
      };
    });
    let obj = require("module_691");
  }
};
export const wrapTransportSend = function wrapTransportSend(send, arg1) {
  _require = arg1;
  if (send.send) {
    require("module_691").fill(send, "send", (arg0) => {
      closure_0 = arg0;
      return asyncGeneratorStep(async function() {
        const self = this;
        closure_1 = [...arguments];
        c6 = 0;
        c7 = 0;
        c5 = 0;
        const iter = (async (arg0, value) => {
          if (c7 === 2) {
            c7 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj6 = { value, done: true };
              return obj6;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c7 = 2;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                } else {
                  closure_4 = self;
                  closure_3 = tmp3;
                  closure_2 = self;
                  closure_130_3 = self;
                  closure_130_1 = dependencyMap;
                  closure_130_2 = undefined;
                  closure_130_0 = undefined;
                  c6 = 1;
                  c7 = 1;
                  return { value: "Set", done: true };
                }
              } else {
                if (1 === tmp7) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj9 = { value, done: true };
                    return obj9;
                  } else {
                    closure_130_2 = closure_130_1[0];
                    if (obj12.isJsonRpcNotification(closure_130_2)) {
                      const obj7 = _self(810);
                      c7 = 3;
                      const obj10 = {
                        value: obj7.createMcpOutgoingNotificationSpan(closure_130_2, closure_4, self, () => {
                                      const items = [closure_1_3, ...closure_1_1];
                                      return self.call.apply(items);
                                    }),
                        done: true
                      };
                      return obj10;
                    } else {
                      if (obj.isJsonRpcResponse(closure_130_2)) {
                        if (null !== closure_130_2.id) {
                          if (undefined !== closure_130_2.id) {
                            if (closure_130_2.error) {
                              (function captureJsonRpcErrorResponse(error) {
                                try {
                                  if (error) {
                                    if (typeof error === "object") {
                                      if ("code" in error) {
                                        if ("message" in error) {
                                          if (-32603 === error.code) {
                                            const _Error = Error;
                                            error = new Error(error.message);
                                            const _HermesInternal = HermesInternal;
                                            error.name = "JsonRpcError_" + error.code;
                                            _self(dependencyMap[10]).captureError(error, "protocol");
                                            const obj = _self(dependencyMap[10]);
                                          }
                                        }
                                      }
                                    }
                                  }
                                } catch (err) {
                                }
                              })(closure_130_2.error);
                            }
                            if (obj2.isValidContentItem(closure_130_2.result)) {
                              if (closure_130_2.result.protocolVersion) {
                                c5 = 1;
                                closure_130_0 = _self(807).extractSessionDataFromInitializeResponse(closure_130_2.result);
                                const obj3 = _self(807);
                                const result = _self(808).updateSessionDataForTransport(closure_4, closure_130_0);
                                c5 = 0;
                                const obj4 = _self(808);
                              }
                            }
                            obj2 = _self(805);
                          }
                        }
                      }
                      const call = closure_131_0.call;
                      let items = [closure_4];
                      HermesBuiltin.arraySpread(closure_130_1, 1);
                      c7 = 3;
                      const obj11 = { value: HermesBuiltin.apply(items, closure_131_0), done: true };
                      return obj11;
                    }
                    obj12 = _self(805);
                  }
                } else {
                  c5 = 0;
                }
                const obj5 = _self(814);
                const result1 = obj5.completeSpanWithResults(closure_4, closure_130_2.id, closure_130_2.result, self);
              }
            } catch (tmp65) {
              if (tmp4 === c5) {
                c7 = tmp2;
                throw tmp65;
              } else {
                c6 = tmp;
              }
            }
          }
        })();
        iter.next();
        return iter;
      });
    });
    let obj = require("module_691");
  }
};
