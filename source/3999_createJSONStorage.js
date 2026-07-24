// Module ID: 3999
// Function ID: 33176
// Name: createJSONStorage
// Dependencies: [77, 29, 57]
// Exports: combine, devtools, persist, redux, subscribeWithSelector

// Module 3999 (createJSONStorage)
import _defineProperty from "_defineProperty";
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";

function createJSONStorage(arg0) {
  let closure_0 = arg1;
  let closure_1 = arg0();
  return {
    getItem(arg0) {
      function parse(arg0) {
        let parsed = null;
        if (null !== arg0) {
          let reviver;
          if (null != outer1_0) {
            reviver = outer1_0.reviver;
          }
          parsed = JSON.parse(arg0, reviver);
        }
        return parsed;
      }
      const value = store.getItem(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      if (tmp2 instanceof Promise) {
        let nextPromise = tmp2.then(parse);
      } else {
        nextPromise = parse(tmp2);
      }
      return nextPromise;
    },
    setItem(arg0, arg1) {
      let replacer;
      if (null != replacer) {
        replacer = replacer.replacer;
      }
      return store.setItem(arg0, JSON.stringify(arg1, replacer));
    },
    removeItem(arg0) {
      return store.removeItem(arg0);
    }
  };
}
let closure_3 = ["enabled", "anonymousActionType", "store"];
let closure_4 = ["connection"];
const map = new Map();
function getTrackedConnectionState(arg0) {
  const value = map.get(arg0);
  if (value) {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(value.stores);
    let fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
      const tmp = outer1_2(arg0, 2);
      const items = [tmp[0], tmp[1].getState()];
      return items;
    }));
  } else {
    fromEntriesResult = {};
  }
  return fromEntriesResult;
}
function findCallerName(str) {
  if (str) {
    const parts = str.split("\n");
    const findIndexResult = parts.findIndex((arr) => arr.includes("api.setState"));
    if (findIndexResult >= 0) {
      let str3;
      if (null != parts[findIndexResult + 1]) {
        str3 = str2.trim();
      }
      if (!str3) {
        str3 = "";
      }
      const match = /.+ (.+) .+/.exec(str3);
      let tmp4;
      if (null != match) {
        tmp4 = match[1];
      }
      return tmp4;
    }
  }
}
function parseJsonThen(arg0, arg1) {
  const parsed = JSON.parse(arg0);
  while (true) {
    let tmp2 = parsed;
    if (undefined === parsed) {
      break;
    } else {
      let tmp3 = arg1(parsed);
      break;
    }
  }
}
function toThenable(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    const tmp = callback(arg0);
    callback = tmp;
    if (tmp instanceof Promise) {
      let obj = tmp;
    } else {
      obj = {
        then(arg0) {
            return outer2_9(arg0)(closure_0);
          },
        catch: function _catch(arg0) {
            return this;
          }
      };
    }
    return obj;
  };
}

export function combine(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return () => Object.assign({}, closure_0, callback(...arguments));
}
export { createJSONStorage };
export const devtools = function devtoolsImpl(arg0) {
  let closure_0 = arg0;
  if (arguments.length > 1) {
    let closure_1 = {};
    return (arg0, arg1, arg2) => {
      const callback = arg0;
      const lib = arg1;
      let closure_2 = arg2;
      const enabled = lib.enabled;
      const anonymousActionType = lib.anonymousActionType;
      const store = lib.store;
      let tmp5 = lib(lib, outer1_3);
      let closure_5 = tmp5;
      let tmp8 = tmp7;
      if (null != enabled) {
        tmp8 = enabled;
      }
      let __REDUX_DEVTOOLS_EXTENSION__ = tmp8;
      if (tmp8) {
        const _window = window;
        __REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__;
      }
      let obj = __REDUX_DEVTOOLS_EXTENSION__;
      while (true) {
        let tmp10 = __REDUX_DEVTOOLS_EXTENSION__;
        if (obj) {
          let tmp15 = store;
          let tmp16 = __REDUX_DEVTOOLS_EXTENSION__;
          let tmp17 = tmp5;
          if (undefined === tmp4) {
            obj = {};
            let str3 = "untracked";
            obj.type = "untracked";
            obj.connection = obj.connect(tmp6);
            let merged = obj;
          } else {
            let tmp48 = outer1_5;
            let value = outer1_5.get(tmp6.name);
            obj = {};
            if (value) {
              let tmp22 = globalThis;
              let _Object2 = Object;
              let str2 = "tracked";
              obj.type = "tracked";
              obj.store = tmp4;
              merged = Object.assign(obj, value);
            } else {
              obj.connection = obj.connect(tmp6);
              obj.stores = {};
              let tmp18 = outer1_5;
              let result = outer1_5.set(tmp6.name, obj);
              let tmp20 = globalThis;
              let _Object = Object;
              let obj1 = {};
              let str = "tracked";
              obj1.type = "tracked";
              obj1.store = tmp4;
              merged = Object.assign(obj1, obj);
            }
          }
          let connection = merged.connection;
          let obj4 = connection;
          let tmp23 = lib;
          let tmp24 = outer1_4;
          let tmp25 = lib(merged, outer1_4);
          let tmp26 = tmp25;
          let closure_7 = tmp25;
          let flag = true;
          let c8 = true;
          let tmp27 = arg2;
          tmp3.setState = (arg0, arg1, type) => {
            const tmp = callback(arg0, arg1);
            if (c8) {
              if (undefined === type) {
                let obj = {};
                let str2 = anonymousActionType;
                if (!anonymousActionType) {
                  const _Error = Error;
                  const error = new Error();
                  str2 = outer2_7(error.stack);
                }
                if (!str2) {
                  str2 = "anonymous";
                }
                obj.type = str2;
                let tmp2 = obj;
              } else {
                tmp2 = type;
                if ("string" === typeof type) {
                  obj = { type };
                  tmp2 = obj;
                }
              }
              if (undefined === store) {
                if (null != connection) {
                  connection.send(tmp2, callback2());
                }
              } else if (null != connection) {
                const _Object = Object;
                obj = {};
                const _HermesInternal = HermesInternal;
                obj.type = "" + store + "/" + tmp2.type;
                const _Object2 = Object;
                const merged = Object.assign({}, tmp2, obj);
                connection.send(merged, Object.assign({}, outer2_6(tmp5.name), callback({}, store, store.getState())));
                const tmp23 = outer2_6(tmp5.name);
              }
              return tmp;
            } else {
              return tmp;
            }
          };
          let obj2 = {
            cleanup() {
                  let tmp3 = connection;
                  if (connection) {
                    tmp3 = "function" === typeof connection.unsubscribe;
                  }
                  if (tmp3) {
                    connection.unsubscribe();
                    const tmp5 = connection;
                  }
                  const name = tmp5.name;
                  if (undefined !== store) {
                    const value = outer2_5.get(name);
                    if (value) {
                      const stores = value.stores;
                      delete tmp[tmp2];
                      const _Object = Object;
                      if (0 === Object.keys(value.stores).length) {
                        outer2_5.delete(name);
                      }
                    }
                  }
                }
          };
          tmp3.devtools = obj2;
          function setStateFromDevtools(closure_10) {
            let closure_8 = false;
            callback(...arguments);
          }
          let tmp28 = callback;
          let tmp29 = callback(tmp3.setState, arg1, tmp3);
          let closure_10 = tmp29;
          let str4 = "untracked";
          if ("untracked" === tmp25.type) {
            let tmp38 = connection;
            let tmp39 = null;
            if (null != obj4) {
              let tmp40 = connection;
              let tmp41 = tmp29;
              let initResult = obj4.init(tmp30);
            }
          } else {
            let tmp31 = tmp25;
            let tmp32 = arg2;
            tmp26.stores[tmp26.store] = tmp3;
            let tmp33 = connection;
            let tmp34 = null;
            if (null != obj4) {
              let tmp35 = connection;
              let tmp36 = globalThis;
              let _Object3 = Object;
              let _Object4 = Object;
              let entries = Object.entries(tmp25.stores);
              let initResult1 = obj4.init(Object.fromEntries(entries.map((arg0) => {
                const tmp = outer2_2(arg0, 2);
                const first = tmp[0];
                const items = [first, ];
                if (first === tmp25.store) {
                  let state = closure_10;
                } else {
                  state = obj.getState();
                }
                items[1] = state;
                return items;
              })));
            }
          }
          let tmp43 = arg2;
          if (tmp3.dispatchFromDevtools) {
            let tmp44 = arg2;
            let str5 = "function";
            if ("function" === typeof tmp3.dispatch) {
              let tmp45 = arg2;
              let dispatch = tmp3.dispatch;
              tmp3.dispatch = () => {
                const length = arguments.length;
                const array = new Array(length);
                for (let num = 0; num < length; num = num + 1) {
                  array[num] = arguments[num];
                }
                dispatch.apply(undefined, array);
              };
            }
          }
          let tmp46 = connection;
          let subscription = obj4.subscribe((type) => {
            type = type.type;
            if ("ACTION" === type) {
              if ("string" !== typeof type.payload) {
                let _console = console;
                console.error("[zustand devtools middleware] Unsupported action format");
              } else {
                outer2_8(type.payload, (type) => {
                  if ("__setState" !== type.type) {
                    let dispatchFromDevtools = outer1_2.dispatchFromDevtools;
                    if (dispatchFromDevtools) {
                      dispatchFromDevtools = "function" === typeof outer1_2.dispatch;
                    }
                    if (dispatchFromDevtools) {
                      outer1_2.dispatch(type);
                    }
                  } else if (undefined === outer1_4) {
                    outer1_9(type.state);
                  } else {
                    const _Object = Object;
                    if (1 !== Object.keys(type.state).length) {
                      const _console = console;
                      console.error("\n                    [zustand devtools middleware] Unsupported __setState action format.\n                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { \"type\": \"__setState\", \"state\": { \"abc123Store\": { \"foo\": \"bar\" } } }\n                    ");
                    }
                    if (null != type.state[outer1_4]) {
                      const _JSON = JSON;
                      const _JSON2 = JSON;
                      const json = JSON.stringify(outer1_2.getState());
                      if (json !== JSON.stringify(tmp3)) {
                        outer1_9(tmp3);
                      }
                    }
                  }
                });
              }
              return tmp46;
            } else if ("DISPATCH" === type) {
              const type2 = type.payload.type;
              if ("RESET" === type2) {
                setStateFromDevtools(closure_10);
                if (undefined === store) {
                  let initResult;
                  if (null != connection) {
                    initResult = connection.init(store.getState());
                  }
                  let initResult1 = initResult;
                } else if (null != connection) {
                  initResult1 = connection.init(outer2_6(tmp5.name));
                }
                return initResult1;
              } else if ("COMMIT" === type2) {
                if (undefined === store) {
                  if (null != connection) {
                    connection.init(store.getState());
                  }
                } else if (null != connection) {
                  const initResult3 = connection.init(outer2_6(tmp5.name));
                }
                return initResult3;
              } else if ("ROLLBACK" === type2) {
                outer2_8(type.state, (arg0) => {
                  if (undefined === outer1_4) {
                    outer1_9(arg0);
                    if (null != outer1_6) {
                      outer1_6.init(outer1_2.getState());
                    }
                  } else {
                    outer1_9(arg0[outer1_4]);
                    if (null != outer1_6) {
                      outer1_6.init(outer3_6(outer1_5.name));
                    }
                  }
                });
              } else {
                if ("JUMP_TO_STATE" !== type2) {
                  if ("JUMP_TO_ACTION" !== type2) {
                    if ("IMPORT_STATE" === type2) {
                      const nextLiftedState = type.payload.nextLiftedState;
                      const computedStates = nextLiftedState.computedStates;
                      const first = computedStates.slice(-1)[0];
                      let state;
                      if (null != first) {
                        state = first.state;
                      }
                      if (state) {
                        let tmp8 = state;
                        if (undefined !== store) {
                          tmp8 = state[store];
                        }
                        setStateFromDevtools(tmp8);
                        if (null != connection) {
                          connection.send(null, nextLiftedState);
                        }
                      }
                    } else if ("PAUSE_RECORDING" === type2) {
                      let c8 = tmp2;
                      return !c8;
                    }
                  }
                }
                outer2_8(type.state, (arg0) => {
                  if (undefined !== outer1_4) {
                    const _JSON = JSON;
                    const _JSON2 = JSON;
                    const json = JSON.stringify(outer1_2.getState());
                    if (json !== JSON.stringify(arg0[outer1_4])) {
                      outer1_9(arg0[outer1_4]);
                    }
                  } else {
                    outer1_9(arg0);
                  }
                });
              }
            }
          });
          return tmp29;
        } else {
          let tmp11 = callback;
          let tmp12 = arg0;
          let tmp13 = arg1;
          let tmp14 = arg2;
          return callback(arg0, arg1, tmp3);
        }
      }
    };
  }
};
export const persist = function persistImpl(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1, setState) => {
    const callback = arg0;
    let closure_1 = arg1;
    let obj = {
      storage: outer1_10(() => globalThis.localStorage),
      partialize(arg0) {
        return arg0;
      },
      version: 0,
      merge(arg0, arg1) {
        return Object.assign({}, arg1, arg0);
      }
    };
    const merged = Object.assign(obj, closure_1);
    let c3 = false;
    const set = new Set();
    const set1 = new Set();
    let storage = merged.storage;
    if (storage) {
      function setItem() {
        return storage.setItem(merged.name, { state: merged.partialize(Object.assign({}, callback2())), version: merged.version });
      }
      setState = setState.setState;
      setState.setState = (arg0, arg1) => {
        setState(arg0, arg1);
        return setItem();
      };
      let tmp6 = callback(() => {
        callback(...arguments);
        return setItem();
      }, arg1, setState);
      let closure_10 = tmp6;
      setState.getInitialState = () => closure_10;
      function hydrate() {
        if (storage) {
          let c3 = false;
          let item = set.forEach((arg0) => {
            let tmp = outer1_1();
            if (null == tmp) {
              tmp = outer1_10;
            }
            return arg0(tmp);
          });
          const onRehydrateStorage = merged.onRehydrateStorage;
          let callResult;
          if (null != onRehydrateStorage) {
            let tmp8 = callback2();
            if (null == tmp8) {
              tmp8 = closure_10;
            }
            callResult = onRehydrateStorage.call(merged, tmp8);
            const tmp6 = merged;
          }
          let closure_0 = callResult;
          const getItem = storage.getItem;
          const promise = outer2_9(getItem.bind(storage))(merged.name);
          let nextPromise = outer2_9(getItem.bind(storage))(merged.name).then((version) => {
            if (version) {
              if ("number" === typeof version.version) {
                if (version.version !== outer1_2.version) {
                  if (outer1_2.migrate) {
                    const migrateResult = outer1_2.migrate(version.state, version.version);
                    if (migrateResult instanceof Promise) {
                      let nextPromise = migrateResult.then((arg0) => {
                        const items = [true, arg0];
                        return items;
                      });
                    } else {
                      nextPromise = [true, migrateResult];
                    }
                    return nextPromise;
                  } else {
                    const _console = console;
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                  }
                }
              }
              let items = [false, version.state];
              return items;
            }
            const items1 = [false, undefined];
            return items1;
          });
          const nextPromise1 = outer2_9(getItem.bind(storage))(merged.name).then((version) => {
            if (version) {
              if ("number" === typeof version.version) {
                if (version.version !== outer1_2.version) {
                  if (outer1_2.migrate) {
                    const migrateResult = outer1_2.migrate(version.state, version.version);
                    if (migrateResult instanceof Promise) {
                      let nextPromise = migrateResult.then((arg0) => {
                        const items = [true, arg0];
                        return items;
                      });
                    } else {
                      nextPromise = [true, migrateResult];
                    }
                    return nextPromise;
                  } else {
                    const _console = console;
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                  }
                }
              }
              let items = [false, version.state];
              return items;
            }
            const items1 = [false, undefined];
            return items1;
          }).then((arg0) => {
            let tmp2;
            let tmp3;
            [tmp2, tmp3] = outer3_2(arg0, 2);
            let tmp5 = outer1_1();
            if (null == tmp5) {
              tmp5 = outer1_10;
            }
            const mergeResult = outer1_2.merge(tmp3, tmp5);
            const outer1_9 = mergeResult;
            callResult(mergeResult, true);
            if (tmp2) {
              return outer1_7();
            }
            const tmp = outer3_2(arg0, 2);
          });
          return outer2_9(getItem.bind(storage))(merged.name).then((version) => {
            if (version) {
              if ("number" === typeof version.version) {
                if (version.version !== outer1_2.version) {
                  if (outer1_2.migrate) {
                    const migrateResult = outer1_2.migrate(version.state, version.version);
                    if (migrateResult instanceof Promise) {
                      let nextPromise = migrateResult.then((arg0) => {
                        const items = [true, arg0];
                        return items;
                      });
                    } else {
                      nextPromise = [true, migrateResult];
                    }
                    return nextPromise;
                  } else {
                    const _console = console;
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                  }
                }
              }
              let items = [false, version.state];
              return items;
            }
            const items1 = [false, undefined];
            return items1;
          }).then((arg0) => {
            let tmp2;
            let tmp3;
            [tmp2, tmp3] = outer3_2(arg0, 2);
            let tmp5 = outer1_1();
            if (null == tmp5) {
              tmp5 = outer1_10;
            }
            const mergeResult = outer1_2.merge(tmp3, tmp5);
            const outer1_9 = mergeResult;
            callResult(mergeResult, true);
            if (tmp2) {
              return outer1_7();
            }
            const tmp = outer3_2(arg0, 2);
          }).then(() => {
            if (null != callResult) {
              callResult(outer1_9, undefined);
            }
            outer1_9 = outer1_1();
            let c3 = true;
            const item = outer1_5.forEach((arg0) => arg0(outer2_9));
          }).catch((arg0) => {
            if (null != callResult) {
              callResult(undefined, arg0);
            }
          });
        }
      }
      obj = {
        setOptions(storage) {
            closure_2 = Object.assign({}, closure_2, storage);
            if (storage.storage) {
              storage = storage.storage;
            }
          },
        clearStorage() {
            if (null != storage) {
              storage.removeItem(merged.name);
            }
          },
        getOptions() {
            return merged;
          },
        rehydrate() {
            return hydrate();
          },
        hasHydrated() {
            return c3;
          },
        onHydrate(arg0) {
            let closure_0 = arg0;
            set.add(arg0);
            return () => {
              outer1_4.delete(closure_0);
            };
          },
        onFinishHydration(arg0) {
            let closure_0 = arg0;
            set1.add(arg0);
            return () => {
              outer1_5.delete(closure_0);
            };
          }
      };
      setState.persist = obj;
      if (!merged.skipHydration) {
        hydrate();
      }
      let tmp9 = closure_9;
      if (!closure_9) {
        tmp9 = tmp6;
      }
      return tmp9;
    } else {
      return callback(() => {
        console.warn("[zustand persist middleware] Unable to update item '" + merged.name + "', the given storage is currently unavailable.");
        callback(...arguments);
      }, arg1, setState);
    }
  };
};
export const redux = function reduxImpl(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg2;
    arg2.dispatch = (arg0) => {
      const callback = arg0;
      callback((arg0) => callback(arg0, callback), false, arg0);
      return arg0;
    };
    arg2.dispatchFromDevtools = true;
    return Object.assign({
      dispatch() {
        const dispatch = store.dispatch;
        return dispatch(...arguments);
      }
    }, closure_1);
  };
};
export const subscribeWithSelector = function subscribeWithSelectorImpl(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1, subscribe) => {
    const callback = subscribe;
    subscribe = subscribe.subscribe;
    subscribe.subscribe = (arg0, arg1, equalityFn) => {
      const subscribe = arg0;
      const subscribe2 = arg1;
      let tmp = arg0;
      if (arg1) {
        equalityFn = undefined;
        if (null != equalityFn) {
          equalityFn = equalityFn.equalityFn;
        }
        if (!equalityFn) {
          const _Object = Object;
          equalityFn = Object.is;
        }
        let closure_3 = arg0(subscribe.getState());
        function listener(arg0) {
          const tmp = callback(arg0);
          if (!equalityFn(closure_3, tmp)) {
            closure_3 = tmp;
            callback2(tmp, closure_3);
          }
        }
        let fireImmediately;
        if (null != equalityFn) {
          fireImmediately = equalityFn.fireImmediately;
        }
        tmp = listener;
        if (fireImmediately) {
          arg1(closure_3, closure_3);
          tmp = listener;
        }
      }
      return subscribe2(tmp);
    };
    return callback(arg0, arg1, subscribe);
  };
};
