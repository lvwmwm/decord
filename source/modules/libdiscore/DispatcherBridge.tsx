// Module ID: 16612
// Function ID: 129520
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 4129, 4993, 5036, 11976, 1194, 1910, 1838, 653, 3, 1843, 1841, 675, 686, 6651, 1184, 2]

// Module 16612 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import importDefaultResult1 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import importDefaultResult2 from "_isNativeReflectConstruct";
import importDefaultResult3 from "_createForOfIteratorHelperLoose";
import { AnalyticEvents } from "ME";
import importDefaultResult5 from "_isNativeReflectConstruct";
import set from "_isNativeReflectConstruct";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
importDefaultResult5 = new importDefaultResult5("DispatcherBridge");
let items = [importDefaultResult2, require("_createForOfIteratorHelperLoose"), importDefaultResult3, importDefaultResult, importDefaultResult1];
let closure_9 = {
  GUILD_MEMBER_ADD(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["currentUserId"] = id.getId();
    return obj;
  },
  CONNECTION_OPEN(guilds) {
    return { guilds: guilds.guilds, unavailableGuilds: guilds.unavailableGuilds };
  },
  CACHE_LOADED(guilds) {
    return { guilds: guilds.guilds };
  },
  CACHE_LOADED_LAZY(guilds) {
    return { guilds: guilds.guilds };
  },
  BACKGROUND_SYNC(guilds) {
    return { guilds: guilds.guilds };
  }
};
let tmp9 = (() => {
  class DispatcherBridge {
    constructor(arg0) {
      self = this;
      self = this;
      tmp = arg0;
      tmp2 = outer1_3(this, self);
      map = new Map();
      this.tokenToStore = map;
      this.disabledFromFatalError = false;
      if (0 !== arg0.length) {
        tmp34 = DispatcherBridge;
        tmp35 = outer1_2;
        num3 = 11;
        FLUX_API = DispatcherBridge(outer1_2[11]).FLUX_API;
        obj2 = FLUX_API;
        tmp36 = null;
        if (null != FLUX_API) {
          items = [];
          tmp6 = outer1_11;
          tmp7 = arg0;
          tmp8 = outer1_11(tmp);
          tmp9 = tmp8;
          iter = tmp8();
          iter2 = iter;
          str2 = "";
          str3 = " => [token: ";
          str4 = ", mode: ";
          str5 = "]";
          if (!iter.done) {
            do {
              tmp10 = iter2;
              value = iter2.value;
              name = value.getName();
              tmp12 = FLUX_API;
              result = value.connectWithLibdiscore(obj2);
              tokenToStore = this.tokenToStore;
              result1 = tokenToStore.set(result, value);
              tmp15 = items;
              _HermesInternal = HermesInternal;
              str6 = "";
              tmp16 = name;
              str7 = " => [token: ";
              tmp17 = result;
              str8 = ", mode: ";
              str9 = "]";
              arr = items.push("" + name + " => [token: " + result + ", mode: " + value.getMode() + "]");
              tmp19 = tmp8;
              iter3 = tmp9();
              iter2 = iter3;
              done = iter3.done;
            } while (!done);
          }
          tmp20 = outer1_8;
          length = arg0.length;
          tmp21 = items;
          str10 = ", ";
          _HermesInternal2 = HermesInternal;
          str11 = "Connected ";
          str12 = " store(s), mapping: ";
          str13 = ".";
          tmp22 = length;
          str14 = ".";
          infoResult = outer1_8.info("Connected " + length + " store(s), mapping: " + items.join(", ") + ".");
          tmp24 = FLUX_API;
          registeredActionTypes = obj2.getRegisteredActionTypes();
          length2 = registeredActionTypes.length;
          _HermesInternal3 = HermesInternal;
          str15 = "Registering ";
          str16 = " bridged action(s): ";
          tmp25 = length2;
          infoResult1 = outer1_8.info("Registering " + length2 + " bridged action(s): " + registeredActionTypes.join(", ") + ".");
          actionHandler = function actionHandler(actionHandler) {
            let iter3;
            let length;
            let length2;
            const _self = actionHandler;
            if (!_self.disabledFromFatalError) {
              const _performance = performance;
              const nowResult = performance.now();
              if (null != outer2_9[actionHandler.type]) {
                const _JSON2 = JSON;
                let obj = { type: actionHandler.type };
                const merged = Object.assign(tmp2(actionHandler));
                let json = JSON.stringify(obj);
              } else {
                const _JSON = JSON;
                json = JSON.stringify(actionHandler);
              }
              obj = { kind: "json_stringify_action" };
              const _performance2 = performance;
              obj.durationMillis = performance.now() - nowResult;
              const TelemetryExperiment = DispatcherBridge(outer2_2[12]).TelemetryExperiment;
              const shouldCollectMetricsResult = TelemetryExperiment.shouldCollectMetrics();
              const iter = FLUX_API.dispatchAction(json, shouldCollectMetricsResult);
              if (iter.ok) {
                const _performance3 = performance;
                const diff = performance.now() - nowResult;
                let value = iter.value;
                const metrics = value.metrics;
                const items = [];
                const tmp17 = outer2_11(value.storeResults);
                let iter2 = tmp17();
                if (!iter2.done) {
                  do {
                    value = iter2.value;
                    if (null != value.error) {
                      let tmp19 = _self;
                      let handleStoreErrorResult = _self.handleStoreError(value, actionHandler.type);
                    } else {
                      let arr = items.push(value);
                    }
                    iter3 = tmp17();
                    iter2 = iter3;
                  } while (!iter3.done);
                }
                let num3 = 0;
                if (0 < items.length) {
                  do {
                    let tmp21Result = tmp21(items[num3]);
                    num3 = num3 + 1;
                    length = items.length;
                  } while (num3 < length);
                }
                let num4 = 0;
                if (0 < items.length) {
                  do {
                    let tmp23 = _self;
                    let withStoreTokenResult = _self.withStoreToken(items[num4].storeToken, actionHandler.type, (doEmitChanges) => {
                      doEmitChanges.doEmitChanges(closure_0);
                    });
                    num4 = num4 + 1;
                    length2 = items.length;
                  } while (num4 < length2);
                }
                if (null != metrics) {
                  if (shouldCollectMetricsResult) {
                    const items1 = [obj];
                    HermesBuiltin.arraySpread(metrics.timings, 1);
                    if (outer2_5.get("libdiscore_verbose_telemetry_logging")) {
                      let mapped = items1.map((kind) => " - " + kind.kind + ": " + kind.durationMillis + "ms");
                      const items2 = ["Timings", mapped.join("\n")];
                      const items3 = [items2, , ];
                      const mutations = metrics.mutations;
                      const mapped1 = mutations.map((metrics) => {
                        const entries = Object.entries(metrics.metrics);
                        const found = entries.filter((arg0) => {
                          let tmp;
                          [, tmp] = arg0;
                          return 0 !== tmp;
                        });
                        const mapped = found.map((arg0) => {
                          let tmp;
                          let tmp2;
                          [tmp, tmp2] = arg0;
                          return " - " + tmp + ": " + tmp2;
                        });
                        return " * Record Type: " + metrics.recordType + "\n" + mapped.join("\n");
                      });
                      const items4 = ["Mutations", mapped1.join("\n")];
                      items3[1] = items4;
                      const memory = metrics.memory;
                      const mapped2 = memory.map((statistics) => {
                        const entries = Object.entries(statistics.statistics);
                        const mapped = entries.map((arg0) => {
                          let tmp;
                          let tmp2;
                          [tmp, tmp2] = arg0;
                          return " - " + tmp + ": " + JSON.stringify(tmp2);
                        });
                        return " * Record Type: " + statistics.recordType + "\n" + mapped.join("\n");
                      });
                      const items5 = ["Memory Usage", mapped2.join("\n")];
                      items3[2] = items5;
                      let found = items3.filter((arg0) => {
                        let arr;
                        [, arr] = arg0;
                        return arr.length > 0;
                      });
                      const mapped3 = found.map((arg0) => {
                        let tmp;
                        let tmp2;
                        [tmp, tmp2] = arg0;
                        return "" + tmp + ":\n" + tmp2;
                      });
                      const _HermesInternal = HermesInternal;
                      outer2_8.info("Handling action " + actionHandler.type + " took " + diff + "ms\n" + mapped3.join("\n\n"));
                    }
                    obj = { action_type: actionHandler.type, total_duration_millis: diff };
                    const _JSON3 = JSON;
                    obj.timings = JSON.stringify(items1);
                    const _JSON4 = JSON;
                    obj.mutations = JSON.stringify(metrics.mutations);
                    const _JSON5 = JSON;
                    obj.memory_usage = JSON.stringify(metrics.memory);
                    outer2_1(outer2_2[13]).track(outer2_7.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY, obj);
                    const TelemetryExperiment2 = DispatcherBridge(outer2_2[12]).TelemetryExperiment;
                    TelemetryExperiment2.didEmit();
                    const obj7 = outer2_1(outer2_2[13]);
                  }
                }
              } else {
                _self.handleFatalError(iter.error, actionHandler.type);
              }
            }
          };
          tmp27 = outer1_1;
          tmp28 = outer1_2;
          num = 14;
          obj = outer1_1(outer1_2[14]);
          _Object = Object;
          tmp30 = DispatcherBridge;
          fromEntriesResult = Object.fromEntries(registeredActionTypes.map((arg0) => {
            const items = [arg0, actionHandler];
            return items;
          }));
          str17 = "LibDiscoreDispatcherBridge";
          tmp31 = obj;
          registerResult = obj.register("LibDiscoreDispatcherBridge", fromEntriesResult, () => {

          }, DispatcherBridge(outer1_2[14]).DispatchBand.Database);
          num2 = 15;
          _default = DispatcherBridge(outer1_2[15]).default;
          f129543 = _default;
          addChangeListenerResult = _default.addChangeListener(() => {
            if ("active" !== _default.getState()) {
              let _Date = Date;
              let closure_0 = Date.now();
              const result = FLUX_API.flushReplicationStates();
              if (null != result) {
                result.then((arg0) => {
                  if (arg0) {
                    const _Date = Date;
                    const _HermesInternal = HermesInternal;
                    outer3_8.info("Successfully flushed replication states in " + Date.now() - closure_0 + "ms");
                  }
                });
              }
            }
          });
        } else {
          tmp4 = outer1_8;
          str = "Not initializing DispatcherBridge, because kvStoreApi is unavailable.";
          infoResult2 = outer1_8.info("Not initializing DispatcherBridge, because kvStoreApi is unavailable.");
        }
      }
      return;
    }
  }
  let obj = {
    key: "handleFatalError",
    value: function handleFatalError(error, type) {
      let done;
      const self = this;
      error = new Error(error);
      const result = this.hasAnyAuthoritativeStore();
      outer1_8.error("Fatal dispatch error for action", type, "hasAuthoritativeStore:", result, error);
      let obj = outer1_1(outer1_2[16]);
      obj = { actionType: type, hasAuthoritativeStore: result };
      obj.captureException(error, { extra: obj, tags: { source: "libdiscore", errorKind: "fatal_dispatch" } });
      if (result) {
        const result1 = DispatcherBridge(outer1_2[12]).clearLibdiscoreExperimentCache();
        throw error;
      } else {
        outer1_8.warn("Disabling DispatcherBridge until restart");
        self.disabledFromFatalError = true;
        const tokenToStore = self.tokenToStore;
        const tmp8 = outer1_11(tokenToStore.values());
        let iter = tmp8();
        if (!iter.done) {
          do {
            let value = iter.value;
            let result2 = value.disableDualReadValidation();
            let iter2 = tmp8();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      }
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "handleStoreError",
    value: function handleStoreError(value, type) {
      const tokenToStore = this.tokenToStore;
      value = tokenToStore.get(value.storeToken);
      let name;
      if (null != value) {
        name = value.getName();
      }
      if (null == name) {
        const _HermesInternal = HermesInternal;
        name = "unknown(token:" + value.storeToken + ")";
      }
      let mode;
      if (null != value) {
        mode = value.getMode();
      }
      let error = value.error;
      let str3 = "unknown store error";
      if (null != error) {
        str3 = error;
      }
      error = new Error(str3);
      outer1_8.error("Store", name, "failed to handle action", type, "mode:", mode, error);
      const obj = { actionType: type, storeName: name, storeMode: mode };
      outer1_1(outer1_2[16]).captureException(error, { extra: obj, tags: { source: "libdiscore", errorKind: "store_dispatch" } });
      if ("typescript-libdiscore-dual-read" !== mode) {
        if ("libdiscore" === mode) {
          const result = DispatcherBridge(outer1_2[12]).clearLibdiscoreExperimentCache();
          let error1 = error;
          const obj4 = DispatcherBridge(outer1_2[12]);
        } else {
          const _Error = Error;
          const _HermesInternal3 = HermesInternal;
          error1 = new Error("unexpected storeMode '" + mode + "' for store " + name);
        }
        throw error1;
      } else {
        const _HermesInternal2 = HermesInternal;
        outer1_8.warn("Store: " + name + " had unexpected error in Rust implementation, disabling moving forward");
        if (null != value) {
          const result1 = value.disableDualReadValidation();
        }
      }
      const obj2 = outer1_1(outer1_2[16]);
    }
  };
  items[1] = obj;
  obj = {
    key: "withStoreToken",
    value: function withStoreToken(storeToken, type, arg2) {
      const tokenToStore = this.tokenToStore;
      const value = tokenToStore.get(storeToken);
      if (null == value) {
        outer1_8.warn("When dispatching action", type, "we got a store token", storeToken, "that is unknown");
      } else {
        arg2(value);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasAnyAuthoritativeStore",
    value: function hasAnyAuthoritativeStore() {
      const tokenToStore = this.tokenToStore;
      const tmp = outer1_11(tokenToStore.values());
      let iter = tmp();
      if (!iter.done) {
        const value = iter.value;
        while ("libdiscore" !== value.getMode()) {
          let iter2 = tmp();
          iter = iter2;
        }
        return true;
      }
      return false;
    }
  };
  return callback(DispatcherBridge, items);
})();
let set = new Set(["libdiscore", "typescript-libdiscore-dual-read"]);
tmp9 = new tmp9((function filterStores(items) {
  return items.filter((getMode) => outer1_10.has(getMode.getMode()));
})(items));
let result = set.fileFinishedImporting("modules/libdiscore/DispatcherBridge.tsx");

export default tmp9;
