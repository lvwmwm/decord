// Module ID: 13190
// Function ID: 13191
// Dependencies: [32, 5, 13077, 13191, 13085, 13080, 13093, 13086]
// Exports: addFetchEndInstrumentationHandler, addFetchInstrumentationHandler

// Module 13190
import _mod13077 from "module_13077" /* 13077 */;
import _mod13080 from "module_13080" /* 13080 */;
import _mod13085 from "module_13085" /* 13085 */;
import _mod13093 from "module_13093" /* 13093 */;
import supportsFetch from "supportsFetch" /* 13191 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

let closure_4 = async function _resolveResponse(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp7;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let reader;
          let timeout;
          closure_130_4 = undefined;
          let timeout2;
          let done;
          if (closure_0) {
            if (tmp49.body) {
              const body = tmp49.body;
              closure_130_1 = body;
              reader = body.getReader();
              const _setTimeout = setTimeout;
              timeout = setTimeout(() => {
                closure_1_1.cancel().then(null, () => {

                });
              }, 90000);
              closure_130_4 = true;
              if (closure_130_4) {
                timeout2 = undefined;
                c5 = 2;
                const _setTimeout2 = setTimeout;
                timeout2 = setTimeout(() => {
                  closure_1_1.cancel().then(null, () => {

                  });
                }, 5000);
                c3 = 3;
                c6 = 1;
                const obj4 = { value: reader.read(), done: false };
                return obj4;
              } else {
                const _clearTimeout5 = clearTimeout;
                clearTimeout(timeout);
                reader.releaseLock();
                closure_130_1.cancel().then(null, () => {

                });
                const cancelResult = closure_130_1.cancel();
              }
            }
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (1 !== tmp7) {
        if (2 === tmp7) {
          c5 = 1;
          closure_130_4 = false;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout2);
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          done = value.done;
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout2);
          if (done) {
            closure_130_0();
            closure_130_4 = false;
          }
          c5 = 1;
        }
        c5 = 0;
        const _clearTimeout3 = clearTimeout;
        clearTimeout(timeout2);
      }
      c5 = 0;
      const _clearTimeout4 = clearTimeout;
      clearTimeout(timeout2);
      throw closure_4;
    } catch (tmp40) {
      closure_4 = tmp40;
      if (tmp4 === c5) {
        c6 = tmp3;
        throw tmp40;
      } else if (tmp2 === tmp42) {
        c3 = tmp2;
      } else {
        c3 = tmp;
      }
    }
  }
};
function streamHandler(clone) {
  const response = clone;
  try {
    !(function resolveResponse(arg0, arg1) {
      const self = this;
      const apply = closure_1_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(clone.clone(), () => {
      const obj2 = { endTimestamp: null, response: null };
      const obj = _mod13077;
      obj2.endTimestamp = 1000 * _mod13093.timestampInSeconds();
      obj2.response = response;
      obj.triggerHandlers("fetch-body-resolved", obj2);
    });
  } catch (err) {
    return tmp;
  }
}
function parseFetchArgs(arg0) {
  if (0 === arg0.length) {
    return { method: "GET", url: "" };
  } else if (2 === arg0.length) {
    [str4, tmp8] = arg0;
    let tmp9 = str4;
    if (typeof str4 !== "string") {
      let str5 = "";
      if (!str4) {
        tmp9 = str5;
      } else {
        if (tmp10) {
          str5 = str4.url;
        } else if (str4.toString) {
          str5 = str4.toString();
        }
        tmp10 = str4 && typeof str4 === "object" && str4.url;
      }
    }
    const request = { url: tmp9, method: null };
    let str6 = "GET";
    if (tmp12) {
      const _String2 = String;
      str6 = String(tmp8.method).toUpperCase();
      const str7 = String(tmp8.method);
    }
    request.method = str6;
    return request;
  } else {
    let tmp3 = str8;
    if (typeof arg0[0] !== "string") {
      let str = "";
      if (!str8) {
        tmp3 = str;
      } else {
        if (tmp) {
          str = str8.url;
        } else if (str8.toString) {
          str = str8.toString();
        }
        tmp = str8 && typeof str8 === "object" && str8.url;
      }
    }
    const request1 = { url: tmp3, method: null };
    let str2 = "GET";
    if (tmp4) {
      const _String = String;
      str2 = String(str8.method).toUpperCase();
      const str3 = String(str8.method);
    }
    request1.method = str2;
    return request1;
  }
}

export const addFetchEndInstrumentationHandler = function addFetchEndInstrumentationHandler(arg0) {
  _mod13077.addHandler("fetch-body-resolved", arg0);
  _mod13077.maybeInstrument("fetch-body-resolved", () => {
    closure_0 = closure_5;
    {
      closure_0(13085).fill(closure_0(13080).GLOBAL_OBJ, "fetch", (arg0) => {
        closure_0 = arg0;
        return () => {
          const items = [...arguments];
          const error = new Error();
          let stack = error;
          const request = parseFetchArgs(items);
          let obj = { args: items, fetchData: { method: request.method, url: request.url }, startTimestamp: 1000 * stack(dependencyMap[6]).timestampInSeconds(), virtualError: error };
          if (!closure_2_0) {
            let obj3 = {};
            let merged = Object.assign(obj);
            tmp2(tmp3[2]).triggerHandlers("fetch", obj3);
            const tmp2Result = tmp2(tmp3[2]);
          }
          let obj2 = stack(dependencyMap[6]);
          stack = asyncGeneratorStep(async (arg0, value) => {
            if (c1 === 2) {
              c1 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c1 = 2;
                if (arg0 === 1) {
                  c1 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c1 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  if (stack) {
                    tmp17(tmp16);
                  } else {
                    const obj5 = {};
                    const merged = Object.assign(c1);
                    obj = stack(13077);
                    obj5.endTimestamp = 1000 * stack(13093).timestampInSeconds();
                    obj5.response = tmp16;
                    obj.triggerHandlers("fetch", obj5);
                    const obj3 = stack(13093);
                  }
                  c1 = 3;
                }
              } catch (tmp11) {
                c1 = tmp;
                throw tmp11;
              }
            }
          });
          return stack.apply(stack(dependencyMap[5]).GLOBAL_OBJ, items).then(function(result) {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }, (error) => {
            obj = closure_3_0(13077);
            const obj2 = {};
            const merged = Object.assign(obj);
            obj2.endTimestamp = 1000 * closure_3_0(13093).timestampInSeconds();
            obj2.error = error;
            obj.triggerHandlers("fetch", obj2);
            const obj3 = closure_3_0(13093);
            const tmp = closure_3_0;
            const obj4 = closure_3_0(13086);
            if (tmp5) {
              error.stack = stack.stack;
              const result = tmp(13085).addNonEnumerableProperty(error, "framesToPop", 1);
              const tmpResult = tmp(13085);
            }
            throw error;
          });
        };
      });
      const obj = closure_0(13085);
    }
  });
};
export const addFetchInstrumentationHandler = function addFetchInstrumentationHandler(arg0, arg1) {
  _require = arg1;
  require("module_13077").addHandler("fetch", arg0);
  let obj = require("module_13077");
  require("module_13077").maybeInstrument("fetch", () => {
    let flag = closure_0;
    if (closure_0 === undefined) {
      flag = false;
    }
    if (flag) {
      flag = !supportsFetch.supportsNativeFetch();
    }
    if (!flag) {
      _mod13085.fill(_mod13080.GLOBAL_OBJ, "fetch", (arg0) => {
        closure_0 = arg0;
        return () => {
          const items = [...arguments];
          const error = new Error();
          let stack = error;
          const request = parseFetchArgs(items);
          let obj = { args: items, fetchData: { method: request.method, url: request.url }, startTimestamp: 1000 * stack(dependencyMap[6]).timestampInSeconds(), virtualError: error };
          if (!closure_2_0) {
            let obj3 = {};
            let merged = Object.assign(obj);
            tmp2(tmp3[2]).triggerHandlers("fetch", obj3);
            const tmp2Result = tmp2(tmp3[2]);
          }
          let obj2 = stack(dependencyMap[6]);
          stack = asyncGeneratorStep(async (arg0, value) => {
            if (c1 === 2) {
              c1 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c1 = 2;
                if (arg0 === 1) {
                  c1 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c1 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  if (stack) {
                    tmp17(tmp16);
                  } else {
                    const obj5 = {};
                    const merged = Object.assign(c1);
                    obj = stack(13077);
                    obj5.endTimestamp = 1000 * stack(13093).timestampInSeconds();
                    obj5.response = tmp16;
                    obj.triggerHandlers("fetch", obj5);
                    const obj3 = stack(13093);
                  }
                  c1 = 3;
                }
              } catch (tmp11) {
                c1 = tmp;
                throw tmp11;
              }
            }
          });
          return stack.apply(stack(dependencyMap[5]).GLOBAL_OBJ, items).then(function(result) {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }, (error) => {
            obj = closure_3_0(13077);
            const obj2 = {};
            const merged = Object.assign(obj);
            obj2.endTimestamp = 1000 * closure_3_0(13093).timestampInSeconds();
            obj2.error = error;
            obj.triggerHandlers("fetch", obj2);
            const obj3 = closure_3_0(13093);
            const tmp = closure_3_0;
            const obj4 = closure_3_0(13086);
            if (tmp5) {
              error.stack = stack.stack;
              const result = tmp(13085).addNonEnumerableProperty(error, "framesToPop", 1);
              const tmpResult = tmp(13085);
            }
            throw error;
          });
        };
      });
    }
  });
};
export { parseFetchArgs };
