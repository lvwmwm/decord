// Module ID: 15206
// Function ID: 15207
// Name: useConjureServerWidgetOffers
// Dependencies: [5, 19, 11086, 5013, 1385, 6902, 559, 6903, 11085, 1282, 504, 1449, 7486, 11005, 15203, 7857, 15207, 15208, 2]
// Exports: default

// Module 15206 (useConjureServerWidgetOffers)
import BackoffDefault from "Backoff" /* 559 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6903 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7857 */;
import useAddableWidgets from "useAddableWidgets" /* 15208 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 11086 */;
import GuildStore from "GuildStore" /* 5013 */;
import UserStore from "UserStore" /* 1385 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6902 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c11, c12, c5, c6, closure_10, importDefault, set;

function offersServerWidget(install_scope) {
  let tmp = "guild" === install_scope.install_scope;
  if (tmp) {
    const supported_surfaces = install_scope.supported_surfaces;
    let hasItem;
    if (supported_surfaces != null) {
      hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET);
    }
    tmp = true === hasItem;
  }
  return tmp;
}
let obj = function _loadWidgetConfigs() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c9;
      try {
        let value2;
        let closure_2;
        let iter4;
        let next;
        let c4;
        let tmp15;
        let iter3;
        c12 = 2;
        const tmp3 = c11;
        if (0 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = closure_1;
            value2 = undefined;
            let c3;
            function* _loop(arg0, value) {
              let obj2;
              let obj8;
              if (c6 === 2) {
                c6 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c6 = 2;
                  if (0 === c5) {
                    if (arg0 === 1) {
                      c6 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c6 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      closure_2 = tmp;
                      value2 = tmp4;
                      closure_0 = undefined;
                      if (closure_0()) {
                        c6 = 3;
                        const obj5 = { value: { v: "r" }, done: true };
                        return obj5;
                      } else {
                        c4 = 1;
                        c5 = 2;
                        c6 = 1;
                        const obj6 = { value: obj8.fetchWidgetConfigs(c3), done: false };
                        obj8 = closure_0(closure_2[8]);
                        return obj6;
                      }
                    }
                  } else if (1 === c5) {
                    c4 = 0;
                    value2 = closure_3;
                    if (value2 instanceof closure_0(closure_2[9]).HTTPResponseError) {
                      if (429 === value2.status) {
                        const retryAfter = value2.retryAfter;
                        closure_0 = retryAfter;
                        if (retryAfter == null) {
                          closure_0 = closure_0(closure_2[9]).DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS;
                        }
                        const self = this;
                        const self2 = this;
                        const promise = new Promise((arg0) => setTimeout(arg0, 1000 * closure_1_0));
                        c5 = 3;
                        c6 = 1;
                        const obj7 = { value: promise, done: false };
                        return obj7;
                      }
                    }
                    c6 = 3;
                    return { value: 0, done: true };
                  } else {
                    if (2 === c5) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 0;
                        c6 = 3;
                        const obj9 = { value, done: true };
                        return obj9;
                      } else {
                        c4 = 0;
                      }
                    } else if (3 === c5) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c6 = 3;
                        const obj10 = { value, done: true };
                        return obj10;
                      } else if (closure_130_0()) {
                        c6 = 3;
                        const obj11 = { value: { v: "r" }, done: true };
                        return obj11;
                      } else {
                        c4 = 2;
                        c5 = 5;
                        c6 = 1;
                        const obj12 = { value: obj2.fetchWidgetConfigs(closure_130_3), done: false };
                        obj2 = closure_0(closure_2[8]);
                        return obj12;
                      }
                    } else if (4 === c5) {
                      c4 = 0;
                    } else if (arg0 === 1) {
                      c6 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 0;
                      c6 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c4 = 0;
                    }
                    c6 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp30) {
                  closure_3 = tmp30;
                  if (0 === c4) {
                    c6 = 3;
                    throw tmp30;
                  } else if (1 === tmp32) {
                    c5 = 1;
                  } else {
                    c5 = 4;
                  }
                }
              }
            }
            let closure_3 = closure_0;
            closure_2 = closure_0[Symbol.iterator]();
            if (closure_2 === undefined) {
              c12 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c9 = 1;
              c3 = tmp29;
              const tmp52 = _loop();
              iter4 = tmp52[tmp46.iterator]();
              HermesBuiltin.ensureObject("iterator is not an object");
              next = iter4.next;
              c4 = undefined;
            }
          }
        } else if (1 === tmp3) {
          c9 = 0;
          closure_2.return();
          throw closure_10;
        } else {
          if (2 === tmp3) {
            c9 = 2;
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else {
              c4 = value;
              if (arg0 === 2) {
                c4 = value;
                c9 = 1;
                const method = HermesBuiltin.getMethod("return");
                if (method === undefined) {
                  c9 = 0;
                  closure_2.return();
                  c12 = 3;
                  let obj4 = { value, done: true };
                  return obj4;
                } else {
                  const iter2 = method(c4);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    c9 = 0;
                    value = iter2.value;
                    closure_2.return();
                    c12 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    c11 = 2;
                    c12 = 1;
                    return iter2;
                  }
                }
              } else {
                c9 = 1;
                tmp15 = value;
              }
            }
          } else {
            const tmp4 = iter4;
            c9 = 1;
            const str = "throw";
            const tmp5 = closure_10;
            const method1 = HermesBuiltin.getMethod("throw");
            if (method1 === undefined) {
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              throw new TypeError("yield* delegate must have a .throw() method");
            } else {
              const iter = method1(tmp5);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              if (iter.done) {
                iter3 = iter;
              } else {
                c11 = 2;
                c12 = 1;
                return iter;
              }
            }
          }
          value2 = iter3.value;
          if (0 !== value2) {
            const tmp37 = value2;
            if (tmp37) {
              c9 = 0;
              const v = value2.v;
              closure_2.return();
              c12 = 3;
              let obj5 = { value: v, done: true };
              return obj5;
            }
          }
          c9 = 0;
        }
        const tmp30 = next;
        iter3 = next(tmp15);
        const tmp32 = iter3;
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        if (!iter3.done) {
          c11 = 2;
          c12 = 1;
          return iter3;
        }
      } catch (tmp40) {
        closure_10 = tmp40;
        if (0 === c9) {
          c12 = 3;
          throw tmp40;
        } else if (1 === tmp42) {
          c11 = 1;
        } else {
          c11 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
let tmp2 = new BackoffDefault(30000, 300000);
let closure_9 = tmp2;
let result = size.fileFinishedImporting("modules/conjure/server_widgets/useConjureServerWidgetOffers.tsx");

export default function useConjureServerWidgetOffers() {
  let allConfigsByApplication;
  let closure_1;
  let currentUser;
  let stateFromStores4;
  let stateFromStoresArray;
  let tmp = stateFromStoresArray;
  const tmp2 = stateFromStores4;
  let tmp3 = stateFromStoresArray(stateFromStores4[10]);
  let items = [GuildStore, ];
  const useStateFromStores = tmp3.useStateFromStores;
  let tmp4 = GuildStore;
  items[1] = stateFromStoresArray(stateFromStores4[11]).ApexExperimentStore;
  const stateFromStores = useStateFromStores(items, () => {
    obj = stateFromStoresArray(stateFromStores4[12]);
    return obj.hasEligibleConjureGuild(GuildStore.getGuildsArray(), "useConjureServerWidgetOffers");
  });
  obj = stateFromStoresArray(stateFromStores4[10]);
  let items1 = [ConjureProjectStore];
  const stateFromStores1 = obj.useStateFromStores(items1, () => ConjureProjectStore.getSharedWithMeProjectsFetchState());
  const items2 = [ConjureProjectStore];
  const obj2 = stateFromStoresArray(stateFromStores4[10]);
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    const projectsFetchState = ConjureProjectStore.getProjectsFetchState();
    let type;
    if (projectsFetchState != null) {
      type = projectsFetchState.type;
    }
    return "loading" === type;
  });
  let obj3 = react;
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2];
  const effect = react.useEffect(() => {
    if ("success" === stateFromStores1) {
      closure_2_9.succeed();
    }
    const tmp4 = stateFromStores && !stateFromStores2;
    if (tmp4) {
      if ("unattempted" === stateFromStores1) {
        obj = stateFromStoresArray(stateFromStores4[13]);
        obj.listProjects();
      } else {
        const pending = "error" !== tmp || closure_2_9.pending;
        if (!pending) {
          closure_2_9.fail(() => {
            obj = stateFromStores(stateFromStores2[13]);
            return obj.listProjects();
          });
        }
      }
    }
  }, items3);
  const items4 = [ConjureProjectStore];
  const obj4 = stateFromStoresArray(stateFromStores4[10]);
  stateFromStoresArray = obj4.useStateFromStoresArray(items4, () => {
    const items = [...closure_1_8.getOwnedProjects(), ...closure_1_8.getSharedWithMeProjects()];
    return items.filter(offersServerWidget);
  });
  const items5 = [stateFromStoresArray];
  const effect1 = react.useEffect(() => {
    function loadWidgetConfigs() {
      return closure_1_11(...arguments);
    }
    let c0 = false;
    loadWidgetConfigs(stateFromStoresArray.map((application_id) => application_id.application_id), () => c0);
    return () => {
      c0 = true;
    };
  }, items5);
  const items6 = [UserStore];
  const obj5 = stateFromStoresArray(stateFromStores4[10]);
  const stateFromStores3 = obj5.useStateFromStores(items6, () => currentUser.getCurrentUser());
  let id;
  let tmp12 = require("useUserProfileWidgets");
  if (stateFromStores3 != null) {
    id = stateFromStores3.id;
  }
  const tmp12Result = tmp12(id);
  importDefault = tmp12Result;
  const items7 = [ApplicationWidgetConfigStore];
  const tmpResult = tmp(tmp2[10]);
  stateFromStores4 = tmpResult.useStateFromStores(items7, () => allConfigsByApplication.getAllConfigsByApplication());
  const items8 = [tmp4];
  const tmpResult2 = tmp(tmp2[10]);
  const stateFromStores5 = tmpResult2.useStateFromStores(items8, () => GuildStore.getGuilds());
  const items9 = [stateFromStoresArray, stateFromStores4, stateFromStores5, tmp12Result];
  return obj3.useMemo(function() {
    const found = closure_1.filter((item) => item instanceof stateFromStoresArray(stateFromStores4[15]).ApplicationWidget);
    let self = this;
    const set1 = new Set(found.map((applicationId) => applicationId.applicationId));
    map = new Map();
    const tmp = stateFromStoresArray;
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let application_id = nextResult.application_id;
      let tmp3 = application_id;
      let guild_id = nextResult.guild_id;
      let arr2 = stateFromStores4[application_id];
      let found1;
      if (arr2 != null) {
        found1 = arr2.find((status) => status.status === stateFromStoresArray(stateFromStores4[16]).ApplicationWidgetConfigStatus.PUBLISHED);
      }
      let tmp6 = found1;
      let result = null != guild_id;
      if (result) {
        result = null != stateFromStores5[guild_id];
      }
      if (result) {
        result = !set1.has(tmp3);
      }
      if (result) {
        result = null != tmp6;
      }
      if (result) {
        let obj3 = useAddableWidgets;
        result = obj3.hasAddableApplicationWidgetSurfaces(tmp6);
      }
      if (result) {
        set = map.set;
        let items1 = map.get(guild_id);
        if (items1 == null) {
          items1 = [];
        }
        let items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items, items1, 0);
        obj = { applicationId: tmp3 };
        let self2 = this;
        self = this;
        let applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj);
        items[arraySpreadResult] = applicationWidget;
        let result1 = set(guild_id, items);
      }
      continue;
    }
    return Array.from(map, (arg0) => {
      let str;
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      obj = { guildId: tmp, guildName: str, widgets: tmp2 };
      str = undefined;
      if (stateFromStores5[tmp] != null) {
        str = tmp3.name;
      }
      if (str == null) {
        str = "";
      }
      return obj;
    });
  }, items9);
};
