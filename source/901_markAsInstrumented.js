// Module ID: 901
// Function ID: 9890
// Name: markAsInstrumented
// Dependencies: []

// Module 901 (markAsInstrumented)
function markAsInstrumented(auth) {
  auth.__SENTRY_INSTRUMENTED__ = true;
}
function isInstrumented(auth) {
  return auth.__SENTRY_INSTRUMENTED__;
}
function extractOperation(arg0) {
  if (arguments.length > 1) {
    if ("GET" === arg0) {
      return "select";
    } else if ("POST" === arg0) {
      const Prefer = {}.Prefer;
      let str9 = "insert";
      if (null != Prefer) {
        str9 = "insert";
        if (Prefer.includes("resolution=")) {
          str9 = "upsert";
        }
      }
      return str9;
    } else if ("PATCH" === arg0) {
      return "update";
    } else if ("DELETE" === arg0) {
      return "delete";
    } else {
      return "<unknown-op>";
    }
  }
}
function translateFiltersIntoMethods(str, str2) {
  if ("" !== str2) {
    if ("*" !== str2) {
      if ("select" === str) {
        const _HermesInternal3 = HermesInternal;
        return "select(" + str2 + ")";
      } else {
        if ("or" !== str) {
          if (!str.endsWith(".or")) {
            const arr = callback(str2.split("."));
            const first = arr[0];
            const substr = arr.slice(1);
            if (null == first) {
              if (null == first) {
                if (null == first) {
                  if (null == first) {
                    let str10 = first;
                    if (first) {
                      str10 = obj[first];
                    }
                    if (!str10) {
                      str10 = "filter";
                    }
                    let str9 = str10;
                  } else {
                    str9 = "textSearch[websearch]";
                  }
                  let str7 = str9;
                } else {
                  str7 = "textSearch[phrase]";
                }
                let str5 = str7;
              } else {
                str5 = "textSearch[plain]";
              }
              let str3 = str5;
            } else {
              str3 = "textSearch";
            }
            const _HermesInternal = HermesInternal;
            return "" + str3 + "(" + str + ", " + substr.join(".") + ")";
          }
        }
        const _HermesInternal2 = HermesInternal;
        return "" + str + str2;
      }
    }
  }
  return "select(*)";
}
function instrumentAuthOperation(arg0, arg1) {
  const require = arg0;
  let closure_1 = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  const proxy = new Proxy(arg0, {
    apply(arg0, arg1, arg2) {
      let closure_1 = arg1;
      let obj = arg0(closure_1[4]);
      obj = {};
      let str = "";
      let str2 = "";
      if (closure_1) {
        str2 = "(admin) ";
      }
      obj.name = "auth " + str2 + arg0.name;
      const tmp = callback;
      const tmp2 = callback({}, arg0(closure_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.supabase");
      if (closure_1) {
        str = "admin.";
      }
      obj.attributes = tmp(callback(callback(callback({}, arg0(closure_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.supabase"), arg0(closure_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "db"), "db.system", "postgresql"), "db.operation", "auth." + str + arg0.name);
      return obj.startSpan(obj, (arg0) => {
        const applyResult = Reflect.apply(arg0, arg1, arg2);
        const catchPromise = Reflect.apply(arg0, arg1, arg2).then((error) => {
          if (error) {
            if ("object" === typeof error) {
              if ("error" in error) {
                if (error.error) {
                  let obj = { code: error(closure_1[6]).SPAN_STATUS_ERROR };
                  error.setStatus(obj);
                  obj = { mechanism: { alignItems: "video_timestamp_seconds", justifyContent: "%Uint32ArrayPrototype%" } };
                  error(closure_1[7]).captureException(error.error, obj);
                  const obj3 = error(closure_1[7]);
                }
                error.end();
                return error;
              }
            }
          }
          obj = { code: error(closure_1[6]).SPAN_STATUS_OK };
          error.setStatus(obj);
        }).catch((self) => {
          self.setStatus({ code: self(closure_1[6]).SPAN_STATUS_ERROR });
          self.end();
          const obj = { code: self(closure_1[6]).SPAN_STATUS_ERROR };
          self(closure_1[7]).captureException(self, { mechanism: { alignItems: "video_timestamp_seconds", justifyContent: "%Uint32ArrayPrototype%" } });
          throw self;
        });
        const then = catchPromise.then;
        return then.apply(catchPromise, callback(arg2));
      });
    }
  });
  return proxy;
}
function instrumentSupabaseClientConstructor(arg0) {
  if (!isInstrumented(arg0.prototype.from)) {
    const _Proxy = Proxy;
    const obj = {
      apply(arg0, arg1, arg2) {
          const applyResult = Reflect.apply(arg0, arg1, arg2);
          function instrumentPostgRESTQueryBuilder(constructor) {
            function _loop(item10006) {
              if (callback2(item10006.prototype[item10006])) {
                return 1;
              } else {
                const _Proxy = Proxy;
                const obj = {
                  apply(arg0, arg1, arg2) {
                      const applyResult = Reflect.apply(arg0, arg1, arg2);
                      if (arg0(closure_1[11]).DEBUG_BUILD) {
                        const debug = arg0(closure_1[12]).debug;
                        const _HermesInternal = HermesInternal;
                        debug.log("Instrumenting " + arg0 + " operation's PostgRESTFilterBuilder");
                      }
                      function instrumentPostgRESTFilterBuilder() { ... }(applyResult.constructor);
                      return applyResult;
                    }
                };
                const proxy = new Proxy(item10006.prototype[item10006], obj);
                item10006.prototype[item10006] = proxy;
                callback(item10006.prototype[item10006]);
              }
            }
            for (const item10006 of closure_9) {
              let tmp = _loop;
              let _loopResult = _loop(item10006);
            }
          }(applyResult.constructor);
          return applyResult;
        }
    };
    const proxy = new Proxy(arg0.prototype.from, obj);
    arg0.prototype.from = proxy;
    markAsInstrumented(arg0.prototype.from);
  }
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_6 = [];
let closure_7 = [true, true, true, true, true, true];
const obj = { "Bool(false)": 0, "Bool(false)": false, "Bool(false)": false, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": false, "Bool(false)": "auto.ai.openai.stream", "Bool(false)": "", "Bool(false)": "", "Bool(false)": false, "Bool(false)": "", "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": "0", "Bool(false)": false, "Bool(false)": "auto.ai.openai", "Bool(false)": null, "Bool(false)": "100", "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 100, "Bool(false)": false, "Bool(false)": 0, "Bool(false)": "0" };
const items = [-0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014916820409567813, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006080202367648626, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001939085188229577, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009778156605780385, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000029864435861791383];
function instrumentSupabaseClient(auth) {
  if (auth) {
    const _Function = Function;
    let constructor = auth;
    if (auth.constructor !== Function) {
      constructor = auth.constructor;
    }
    instrumentSupabaseClientConstructor(constructor);
    auth = auth.auth;
    if (auth) {
      if (!isInstrumented(tmp9.auth)) {
        const iter = closure_6[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp17 = nextResult;
          let tmp18 = auth;
          let tmp19 = tmp10[nextResult];
          let tmp21 = tmp19;
          let tmp20 = tmp19;
          if (tmp19) {
            let tmp22 = auth;
            let tmp23 = nextResult;
            tmp21 = "function" === typeof tmp9.auth[tmp17];
          }
          if (tmp21) {
            let tmp24 = auth;
            let tmp25 = nextResult;
            let tmp26 = instrumentAuthOperation;
            let tmp27 = tmp19;
            tmp9.auth[tmp17] = instrumentAuthOperation(tmp20);
          }
          // continue
        }
        const iter2 = closure_7[Symbol.iterator]();
        const nextResult1 = iter2.next();
        while (iter2 !== undefined) {
          let tmp32 = nextResult1;
          let tmp33 = auth;
          let tmp34 = tmp10.admin[nextResult1];
          let tmp36 = tmp34;
          let tmp35 = tmp34;
          if (tmp34) {
            let tmp37 = auth;
            let tmp38 = nextResult1;
            tmp36 = "function" === typeof tmp9.auth.admin[tmp32];
          }
          if (tmp36) {
            let tmp39 = auth;
            let tmp40 = nextResult1;
            let tmp41 = instrumentAuthOperation;
            let tmp42 = tmp34;
            tmp9.auth.admin[tmp32] = instrumentAuthOperation(tmp35, true);
          }
          // continue
        }
        markAsInstrumented(auth.auth);
      }
    }
    const tmp6 = instrumentSupabaseClientConstructor;
  } else if (require(dependencyMap[11]).DEBUG_BUILD) {
    const debug = require(dependencyMap[12]).debug;
    debug.warn("Supabase integration was not installed because no Supabase client was provided.");
  }
}
const _module = require(dependencyMap[13]);

export const DB_OPERATIONS_TO_INSTRUMENT = items;
export const FILTER_MAPPINGS = obj;
export { extractOperation };
export { instrumentSupabaseClient };
export const supabaseIntegration = _module.defineIntegration((supabaseClient) => function _supabaseIntegration(supabaseClient) {
  return {
    setupOnce() {
      callback(arg0);
    },
    name: "Supabase"
  };
}(supabaseClient.supabaseClient));
export { translateFiltersIntoMethods };
