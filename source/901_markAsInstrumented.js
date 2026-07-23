// Module ID: 901
// Function ID: 9895
// Name: markAsInstrumented
// Dependencies: [57, 65, 77, 830, 842, 816, 817, 845, 804, 807, 884, 800, 801, 863]

// Module 901 (markAsInstrumented)
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";
import _defineProperty from "_defineProperty";
import _toArray from "_toArray";
import setupIntegration from "setupIntegration";

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
            const arr = _toArray(str2.split("."));
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
  let closure_0 = arg0;
  let closure_1 = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  const proxy = new Proxy(arg0, {
    apply(arg0, arg1, arg2) {
      const lib = arg0;
      const dependencyMap = arg1;
      let closure_2 = arg2;
      let obj = lib(842);
      obj = {};
      let str = "";
      let str2 = "";
      if (dependencyMap) {
        str2 = "(admin) ";
      }
      obj.name = "auth " + str2 + lib.name;
      const tmp = outer1_4;
      const tmp2 = outer1_4({}, lib(816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.supabase");
      if (dependencyMap) {
        str = "admin.";
      }
      obj.attributes = tmp(outer1_4(outer1_4(outer1_4({}, lib(816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.supabase"), lib(816).SEMANTIC_ATTRIBUTE_SENTRY_OP, "db"), "db.system", "postgresql"), "db.operation", "auth." + str + lib.name);
      return obj.startSpan(obj, (arg0) => {
        let closure_0 = arg0;
        const applyResult = Reflect.apply(closure_0, closure_1, closure_2);
        const catchPromise = Reflect.apply(closure_0, closure_1, closure_2).then((error) => {
          if (error) {
            if ("object" === typeof error) {
              if ("error" in error) {
                if (error.error) {
                  let obj = { code: store(817).SPAN_STATUS_ERROR };
                  store.setStatus(obj);
                  obj = { mechanism: { handled: false, type: "auto.db.supabase.auth" } };
                  store(845).captureException(error.error, obj);
                  const obj3 = store(845);
                }
                store.end();
                return error;
              }
            }
          }
          obj = { code: store(817).SPAN_STATUS_OK };
          store.setStatus(obj);
        }).catch((arg0) => {
          store.setStatus({ code: store(817).SPAN_STATUS_ERROR });
          store.end();
          const obj = { code: store(817).SPAN_STATUS_ERROR };
          store(845).captureException(arg0, { mechanism: { handled: false, type: "auto.db.supabase.auth" } });
          throw arg0;
        });
        const then = catchPromise.then;
        return then.apply(catchPromise, outer2_3(closure_2));
      });
    }
  });
  return proxy;
}
function instrumentSupabaseClientConstructor(arg0) {
  if (!isInstrumented(arg0.prototype.from)) {
    let _Proxy = Proxy;
    let obj = {
      apply(arg0, arg1, arg2) {
          let applyResult = Reflect.apply(arg0, arg1, arg2);
          (function instrumentPostgRESTQueryBuilder(constructor) {
            let closure_0 = constructor;
            function _loop(item10006) {
              const ctor = item10006;
              if (outer3_12(ctor.prototype[item10006])) {
                return 1;
              } else {
                let _Proxy = Proxy;
                let obj = {
                  apply(arg0, arg1, arg2) {
                      const applyResult = Reflect.apply(arg0, arg1, arg2);
                      if (outer4_0(outer4_1[11]).DEBUG_BUILD) {
                        const debug = outer4_0(outer4_1[12]).debug;
                        let _HermesInternal = HermesInternal;
                        debug.log("Instrumenting " + closure_0 + " operation's PostgRESTFilterBuilder");
                      }
                      (function instrumentPostgRESTFilterBuilder() { ... })(applyResult.constructor);
                      return applyResult;
                    }
                };
                let proxy = new Proxy(ctor.prototype[item10006], obj);
                ctor.prototype[item10006] = proxy;
                outer3_11(ctor.prototype[item10006]);
              }
            }
            for (const item10006 of outer2_9) {
              let tmp = _loop;
              let _loopResult = _loop(item10006);
              continue;
            }
          })(applyResult.constructor);
          return applyResult;
        }
    };
    let proxy = new Proxy(arg0.prototype.from, obj);
    arg0.prototype.from = proxy;
    markAsInstrumented(arg0.prototype.from);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_6 = ["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"];
let closure_7 = ["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"];
let obj = { eq: "eq", neq: "neq", gt: "gt", gte: "gte", lt: "lt", lte: "lte", like: "like", "like(all)": "likeAllOf", "like(any)": "likeAnyOf", ilike: "ilike", "ilike(all)": "ilikeAllOf", "ilike(any)": "ilikeAnyOf", is: "is", in: "in", cs: "contains", cd: "containedBy", sr: "rangeGt", nxl: "rangeGte", sl: "rangeLt", nxr: "rangeLte", adj: "rangeAdjacent", ov: "overlaps", fts: "", plfts: "plain", phfts: "phrase", wfts: "websearch", not: "not" };
let items = ["select", "insert", "upsert", "update", "delete"];
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
        const iter = dependencyMap[Symbol.iterator]();
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
          continue;
        }
        const iter2 = dependencyMap2[Symbol.iterator]();
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
          continue;
        }
        markAsInstrumented(auth.auth);
      }
    }
    const tmp6 = instrumentSupabaseClientConstructor;
  } else if (require(800).DEBUG_BUILD) {
    const debug = require(801) /* consoleSandbox */.debug;
    debug.warn("Supabase integration was not installed because no Supabase client was provided.");
  }
}

export const DB_OPERATIONS_TO_INSTRUMENT = items;
export const FILTER_MAPPINGS = obj;
export { extractOperation };
export { instrumentSupabaseClient };
export const supabaseIntegration = setupIntegration.defineIntegration((supabaseClient) => (function _supabaseIntegration(supabaseClient) {
  let closure_0 = supabaseClient;
  return {
    setupOnce() {
      outer2_10(closure_0);
    },
    name: "Supabase"
  };
})(supabaseClient.supabaseClient));
export { translateFiltersIntoMethods };
