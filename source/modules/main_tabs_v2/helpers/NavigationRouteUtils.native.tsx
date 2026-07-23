// Module ID: 3981
// Function ID: 33019
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 653, 3982, 491, 1457, 3983, 3988, 3989, 2]
// Exports: coerceSidebarRoute, getCurrentRouteParents, getICYMIRouteIfActive, getSelectedChannelFromRoute, getSelectedGuildFromRoute, getTabsRouteIfActive, navigateToChannel, navigateToContextMenuCommands, navigateToCreateThread, navigateToMemberVerification, navigateToNewGroupDM, navigateToRootTab, popAllModals, popModalsAboveKey, popScreens, pushModal, resetToAuthRoute, setHomeDrawerState, useCurrentNavigationRouteName, useIsModalOpen, useOpenModalKey

// Module 3981 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ME } from "ME";
import set from "ME";

let closure_4;
let closure_5;
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
function navigationToRootTabHelper(params, resetRoot) {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (resetRoot) {
        const rootState = rootNavigationRef.getRootState();
        const routes = rootState.routes;
        const found = routes.filter((name) => "modal" === name.name);
        obj = { name: "tabs" };
        const obj3 = require(3983) /* wrapRouteForRootNavigator */;
        const _HermesInternal = HermesInternal;
        obj.key = "tabs-" + require(491) /* v1 */.v4();
        obj.params = params;
        const items = [obj];
        const items1 = [];
        HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(obj3.wrapRouteForRootNavigator(items), 0));
        const CommonActions = require(1457) /* Link */.CommonActions;
        obj = {};
        const merged = Object.assign(rootState);
        obj["routes"] = items1;
        obj["index"] = items1.length - 1;
        rootNavigationRef.dispatch(CommonActions.reset(obj));
        const obj5 = require(491) /* v1 */;
      } else {
        rootNavigationRef.navigate("tabs", params);
      }
    }
  }
  return false;
}
function coerceMainRoute(name) {
  if (null != name) {
    if ("main" === name.name) {
      return name;
    }
  }
}
function coerceChannelRoute(currentRoute) {
  if (null != currentRoute) {
    if ("channel" === currentRoute.name) {
      return currentRoute;
    }
  }
}
function coerceTabsRoute(value) {
  if (null != value) {
    if ("tabs" === value.name) {
      return value;
    }
  }
}
function coerceGuildsRoute(currentRoute) {
  if (null != currentRoute) {
    return currentRoute;
  }
}
function coerceICYMIRoute(name) {
  if (null != name) {
    if ("icymi" === name.name) {
      return name;
    }
  }
}
function coerceModalRoute(name) {
  if (null != name) {
    if ("modal" === name.name) {
      return name;
    }
  }
}
function isModalOpen(voiceChannelKey) {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        const tmp3 = coerceModalRoute(rootState.routes[rootState.index]);
        if (null == voiceChannelKey) {
          let tmp5 = null != tmp3;
        } else if ("string" === typeof voiceChannelKey) {
          let key;
          if (null != tmp3) {
            key = tmp3.key;
          }
          tmp5 = key === voiceChannelKey;
        } else {
          let modal;
          if (null != tmp3) {
            const params = tmp3.params;
            if (null != params) {
              modal = params.modal;
              if (null != modal) {
                modal = modal.modal;
              }
            }
          }
          tmp5 = modal === voiceChannelKey;
        }
        return tmp5;
      }
    }
  }
  return false;
}
function getOpenModalKey() {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null != rootState) {
        const tmp3 = coerceModalRoute(rootState.routes[rootState.index]);
        let key;
        if (null != tmp3) {
          key = tmp3.key;
        }
        return key;
      }
    }
  }
}
function getCurrentNavigationRouteName() {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      let name;
      if (null != currentRoute) {
        name = currentRoute.name;
      }
      let tmp3;
      if (null != name) {
        tmp3 = name;
      }
      return tmp3;
    }
  }
}
({ useLayoutEffect: closure_4, useState: closure_5 } = result);
let set = new Set(["friends", "sidebar", "message-requests", "modal"]);
result = set.fileFinishedImporting("modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx");
function popModal(EMAIL_VERIFICATION_MODAL_OPEN, onExited) {
  let index;
  let routes;
  const _require = EMAIL_VERIFICATION_MODAL_OPEN;
  let closure_1 = onExited;
  let obj = _require(3982);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      ({ routes, index } = rootState);
      let tmp2 = routes;
      if (index > -1) {
        while (true) {
          let tmp3 = coerceModalRoute;
          let tmp4 = coerceModalRoute(routes[index]);
          let tmp5 = index;
          if (null == EMAIL_VERIFICATION_MODAL_OPEN) {
            if (null != EMAIL_VERIFICATION_MODAL_OPEN) {
              index = index - 1;
              tmp2 = routes;
            } else if (null != tmp4) {
              break;
            }
            break;
          } else {
            let key;
            if (null != tmp4) {
              key = tmp4.key;
            }
            let tmp7 = tmp4;
            if (key === EMAIL_VERIFICATION_MODAL_OPEN) {
              break;
            }
          }
          let tmp8 = routes;
          if (null != onExited) {
            let items = [];
            let num7 = 0;
            let tmp26 = items;
            let tmp27 = routes;
            let arraySpreadResult = HermesBuiltin.arraySpread(routes, 0);
            obj = {};
            let tmp29 = obj;
            let tmp30 = tmp4;
            let merged = Object.assign(tmp4);
            obj = {};
            let tmp32 = obj;
            let merged1 = Object.assign(tmp4.params);
            let obj1 = {};
            let tmp34 = obj1;
            let merged2 = Object.assign(tmp4.params.modal);
            let obj2 = {};
            let tmp36 = obj2;
            let merged3 = Object.assign(tmp4.params.modal.callbacks);
            let str3 = "onExited";
            obj2["onExited"] = onExited;
            let str4 = "callbacks";
            obj1["callbacks"] = obj2;
            let str5 = "modal";
            obj["modal"] = obj1;
            let str6 = "params";
            obj["params"] = obj;
            items[index] = obj;
            let tmp38 = _require;
            let tmp39 = dependencyMap;
            let num8 = 5;
            let CommonActions2 = _require(1457).CommonActions;
            let obj3 = {};
            let tmp40 = obj3;
            let tmp41 = rootState;
            let merged4 = Object.assign(rootState);
            let str7 = "routes";
            obj3["routes"] = items;
            let str8 = "index";
            obj3["index"] = rootState.index;
            let dispatchResult = rootNavigationRef.dispatch(CommonActions2.reset(obj3));
            tmp8 = items;
          }
          let items1 = [];
          let num2 = 0;
          let tmp9 = items1;
          let tmp10 = tmp8;
          arraySpreadResult = HermesBuiltin.arraySpread(tmp8, 0);
          let num3 = 1;
          let spliceResult = items1.splice(index, 1);
          tmp2 = items1;
        }
      }
      if (tmp2 === rootState.routes) {
        let flag = false;
        if (null != onExited) {
          const resolved = Promise.resolve();
          resolved.then(() => onExited());
          flag = false;
        }
      } else if (null == onExited) {
        const CommonActions = _require(1457).CommonActions;
        const obj4 = {};
        const merged5 = Object.assign(rootState);
        obj4["routes"] = tmp2;
        const _Math = Math;
        obj4["index"] = Math.max(rootState.index - 1, 0);
        rootNavigationRef.dispatch(CommonActions.reset(obj4));
        flag = true;
      } else {
        const resolved1 = Promise.resolve();
        resolved1.then(() => outer1_20(closure_0));
        flag = true;
      }
      return flag;
    }
  }
  if (null != onExited) {
    const resolved2 = Promise.resolve();
    resolved2.then(() => onExited());
  }
  return false;
}

export const navigateToChannel = function navigateToChannel(openChannel) {
  let channelId;
  let guildId;
  let messageId;
  let replaceChannelAndFixRoot;
  ({ channelId, guildId, messageId, replaceChannelAndFixRoot } = openChannel);
  if (replaceChannelAndFixRoot === undefined) {
    replaceChannelAndFixRoot = false;
  }
  let flag = openChannel.openChannel;
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (false !== replaceChannelAndFixRoot) {
        if (!flag) {
          return true;
        }
      }
      const rootState = rootNavigationRef.getRootState();
      if (replaceChannelAndFixRoot) {
        const tmp11 = coerceMainRoute(rootState.routes[0]);
        if (null != tmp11) {
          if (null != tmp11.state) {
            const tmp42 = coerceChannelRoute(tmp11.state.routes[tmp11.state.index]);
            if (null != tmp42) {
              obj = {};
              const merged = Object.assign(tmp42);
              obj = { channelId, guildId, messageId };
              obj["params"] = obj;
              let obj1 = obj;
            } else {
              obj1 = { name: "channel" };
              let combined = channelId;
              if (null == channelId) {
                let obj6 = require(491) /* v1 */;
                const _HermesInternal2 = HermesInternal;
                combined = "channel-" + obj6.v4();
              }
              obj1.key = combined;
              let obj2 = { channelId, guildId, messageId };
              obj1.params = obj2;
            }
            const tmp20 = _createForOfIteratorHelperLoose(tmp11.state.routes);
            const iter = tmp20();
            let iter2 = iter;
            let tmp21 = null;
            if (!iter.done) {
              const tmp23 = coerceTabsRoute(iter2.value);
              tmp21 = tmp23;
              while (null == tmp23) {
                let iter3 = tmp20();
                iter2 = iter3;
                tmp21 = tmp23;
                if (iter3.done) {
                  break;
                }
              }
            }
            if (null != tmp21) {
              const state = tmp21.state;
            }
            if (null != tmp21) {
              if (null != state) {
                const obj3 = {};
                const merged1 = Object.assign(state);
                const items = [];
                HermesBuiltin.arraySpread(state.routes, 0);
                obj3["routes"] = items;
                const obj4 = {};
                const merged2 = Object.assign(tmp21);
                obj4["state"] = obj3;
                if (0 !== obj3.index) {
                  obj3.index = 0;
                }
                const tmp25 = coerceGuildsRoute(obj3.routes[0]);
                let tmp26 = null == tmp25;
                if (!tmp26) {
                  const params = tmp25.params;
                  guildId = undefined;
                  if (null != params) {
                    guildId = params.guildId;
                  }
                  let tmp28 = guildId === guildId;
                  if (tmp28) {
                    const params2 = tmp25.params;
                    channelId = undefined;
                    if (null != params2) {
                      channelId = params2.channelId;
                    }
                    tmp28 = channelId === channelId;
                  }
                  tmp26 = tmp28;
                }
                if (!tmp26) {
                  const obj5 = {};
                  const merged3 = Object.assign(tmp25);
                  obj6 = { guildId, channelId, drawerOpen: false };
                  obj5["params"] = obj6;
                  obj3.routes[0] = obj5;
                }
                const obj7 = {};
                const merged4 = Object.assign(tmp11.state);
                const items1 = [obj4, obj1];
                obj7["routes"] = items1;
                obj7["index"] = 1;
                tmp11.state = obj7;
                const CommonActions2 = require(1457) /* Link */.CommonActions;
                const obj8 = {};
                const merged5 = Object.assign(rootState);
                const items2 = [tmp11];
                obj8["routes"] = items2;
                obj8["index"] = 0;
                rootNavigationRef.dispatch(CommonActions2.reset(obj8));
                return true;
              }
            }
            return false;
          }
        }
        return false;
      } else {
        const tmp3 = coerceChannelRoute(rootNavigationRef.getCurrentRoute());
        if (null != tmp3) {
          if (tmp3.params.channelId === channelId) {
            let key = tmp3.key;
          }
          const CommonActions = require(1457) /* Link */.CommonActions;
          const obj9 = { name: "channel", key };
          const obj10 = { channelId, guildId, messageId };
          obj9.params = obj10;
          rootNavigationRef.dispatch(CommonActions.navigate(obj9));
          return true;
        }
        obj2 = require(491) /* v1 */;
        const _HermesInternal = HermesInternal;
        key = "channel-" + obj2.v4();
      }
    }
  }
  return false;
};
export const navigateToMemberVerification = function navigateToMemberVerification(guildId, inviteCode) {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let flag = !tmp;
  if (!tmp) {
    obj = { name: "member-verification" };
    const _HermesInternal = HermesInternal;
    obj.key = "member-verification-" + require(491) /* v1 */.v4();
    obj = { guildId, inviteCode };
    obj.params = obj;
    rootNavigationRef.navigate(obj);
    flag = true;
    const obj4 = require(491) /* v1 */;
  }
  return flag;
};
export const navigateToRootTab = function navigateToRootTab(drawerOpen) {
  let channelId;
  let forceNavigate;
  let guildId;
  let resetRoot;
  let screen;
  let obj = icymiScreen(3982);
  const rootNavigationRef = obj.getRootNavigationRef();
  ({ screen, resetRoot, forceNavigate } = drawerOpen);
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (null != screen) {
        if (!forceNavigate) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          let name;
          if (null != currentRoute) {
            name = currentRoute.name;
          }
          forceNavigate = name !== screen;
        }
        if ("guilds" === screen) {
          ({ guildId, channelId } = drawerOpen);
          if (forceNavigate) {
            obj = { screen };
            obj = { guildId, channelId, drawerOpen: drawerOpen.drawerOpen };
            obj.params = obj;
            navigationToRootTabHelper(obj, resetRoot);
          } else {
            const obj1 = { guildId, channelId, drawerOpen: drawerOpen.drawerOpen };
            rootNavigationRef.setParams(obj1);
          }
        } else if ("messages" === screen) {
          if (forceNavigate) {
            const obj2 = { screen: "guilds" };
            const obj3 = { guildId: ME };
            obj2.params = obj3;
            navigationToRootTabHelper(obj2, resetRoot);
          }
        } else if ("notifications" === screen) {
          if (forceNavigate) {
            const obj4 = { screen: "notifications" };
            rootNavigationRef.navigate("tabs", obj4);
          }
        } else if ("icymi" === screen) {
          if (forceNavigate) {
            const obj5 = { screen: "icymi" };
            rootNavigationRef.navigate("tabs", obj5);
            icymiScreen = drawerOpen.icymiScreen;
            let tmp4 = null != icymiScreen;
            if (tmp4) {
              tmp4 = "icymi-screen" !== icymiScreen;
            }
            if (tmp4) {
              rootNavigationRef.dispatch(() => {
                const CommonActions = icymiScreen(outer1_2[5]).CommonActions;
                const params = { screen: icymiScreen };
                return CommonActions.navigate("tabs", { screen: "icymi", params });
              });
            }
          }
        }
        return true;
      }
    }
  }
  return false;
};
export const resetToAuthRoute = function resetToAuthRoute() {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let flag = !tmp;
  if (!tmp) {
    rootNavigationRef.dispatch(() => {
      const CommonActions = outer1_0(outer1_2[5]).CommonActions;
      return CommonActions.reset(outer1_0(outer1_2[6]).getInitialAuthState());
    });
    flag = true;
  }
  return flag;
};
export const pushModal = function pushModal(key) {
  key = key.key;
  let obj = Object.create(null);
  obj.key = 0;
  const merged = Object.assign(key, obj);
  obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  let tmp4 = null == rootNavigationRef;
  const obj3 = importDefault(3988);
  if (!tmp4) {
    tmp4 = !rootNavigationRef.isReady();
  }
  if (!tmp4) {
    tmp4 = runningTTIAutomationResult;
  }
  let flag = !tmp4;
  if (flag) {
    require(3989) /* getHighestActiveScreenIndex */.dismissKeyboard();
    obj = { name: "modal" };
    if (null == key) {
      const _HermesInternal = HermesInternal;
      key = "modal-" + require(491) /* v1 */.v4;
    }
    obj.key = key;
    obj.params = merged;
    rootNavigationRef.navigate(obj);
    flag = true;
    const obj4 = require(3989) /* getHighestActiveScreenIndex */;
  }
  return flag;
};
export { popModal };
export const popModalsAboveKey = function popModalsAboveKey(voiceChannelKey) {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (getOpenModalKey() === voiceChannelKey) {
        return false;
      } else {
        const rootState = rootNavigationRef.getRootState();
        const routes = rootState.routes;
        let num2 = 0;
        let num = -1;
        if (0 < routes.length) {
          while (true) {
            let tmp2 = coerceModalRoute;
            let tmp3 = coerceModalRoute(routes[num2]);
            let key;
            if (null != tmp3) {
              key = tmp3.key;
            }
            num = num2;
            if (key === voiceChannelKey) {
              break;
            } else {
              num2 = num2 + 1;
              num = -1;
              if (num2 >= routes.length) {
                break;
              }
            }
          }
        }
        if (-1 !== num) {
          if (num !== routes.length - 1) {
            const substr = routes.slice(0, num + 1);
            const CommonActions = require(1457) /* Link */.CommonActions;
            obj = {};
            const merged = Object.assign(rootState);
            obj["routes"] = substr;
            obj["index"] = num;
            rootNavigationRef.dispatch(CommonActions.reset(obj));
            return true;
          }
        }
        return false;
      }
    }
  }
  return false;
};
export const popAllModals = function popAllModals() {
  let iter2;
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      const routes = rootState.routes;
      const items = [];
      const tmp3 = _createForOfIteratorHelperLoose(routes);
      let iter = tmp3();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp4 = set;
          if (!set.has(value.name)) {
            let arr = items.push(value);
          }
          iter2 = tmp3();
          iter = iter2;
        } while (!iter2.done);
      }
      let flag = routes.length !== items.length;
      if (flag) {
        const CommonActions = require(1457) /* Link */.CommonActions;
        obj = {};
        const merged = Object.assign(rootState);
        obj["routes"] = items;
        obj["index"] = items.length - 1;
        rootNavigationRef.dispatch(CommonActions.reset(obj));
        flag = true;
      }
      return flag;
    }
  }
  return false;
};
export const getSelectedGuildFromRoute = function getSelectedGuildFromRoute() {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  let rootState;
  if (null != rootNavigationRef) {
    rootState = rootNavigationRef.getRootState();
  }
  if (null != rootState) {
    const tmp3 = coerceMainRoute(rootState.routes[rootState.index]);
    if (null != tmp3) {
      const state = tmp3.state;
      if (null != state) {
        const tmp5 = coerceChannelRoute(state.routes[state.index]);
        if (null != tmp5) {
          return tmp5.params.guildId;
        } else {
          const tmp7 = coerceTabsRoute(state.routes[state.index]);
          if (null != tmp7) {
            const state2 = tmp7.state;
            if (null != state2) {
              const index = state2.index;
              let num = -1;
              if (null != index) {
                num = index;
              }
              const tmp8Result = coerceGuildsRoute(state2.routes[num]);
              let guildId;
              if (null != tmp8Result) {
                const params = tmp8Result.params;
                if (null != params) {
                  guildId = params.guildId;
                }
              }
              return guildId;
            }
          }
        }
      }
    }
  }
};
export const getSelectedChannelFromRoute = function getSelectedChannelFromRoute() {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    let currentRoute;
    if (null != rootNavigationRef) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
    const tmp3 = coerceChannelRoute(currentRoute);
    if (null != tmp3) {
      return tmp3.params.channelId;
    } else {
      const tmp5 = coerceGuildsRoute(currentRoute);
      if (null != tmp5) {
        const params = tmp5.params;
        let channelId;
        if (null != params) {
          channelId = params.channelId;
        }
        return channelId;
      }
    }
  }
};
export const navigateToNewGroupDM = function navigateToNewGroupDM(id, CHANNEL_CALL) {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    obj = { screen: "gdm" };
    obj = { channelId: id, locationPage: CHANNEL_CALL };
    obj.params = obj;
    rootNavigationRef.navigate("friends", obj);
    flag = true;
  }
  return flag;
};
export const navigateToCreateThread = function navigateToCreateThread(guild_id, id) {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    flag = true;
    if (null != rootNavigationRef) {
      obj = { name: "channel", key: "new-thread" };
      obj = { guildId: guild_id, channelId: id, showCreateThread: true };
      obj.params = obj;
      rootNavigationRef.navigate(obj);
      flag = true;
    }
  }
  return flag;
};
export const navigateToContextMenuCommands = function navigateToContextMenuCommands(params) {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    obj = { screen: "root", params };
    rootNavigationRef.navigate("context-menu-commands", obj);
    flag = true;
  }
  return flag;
};
export const popScreens = function popScreens(arg0) {
  const _require = arg0;
  const rootNavigationRef = _require(3982).getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    rootNavigationRef.dispatch(() => {
      let callback;
      let diff;
      const rootState = rootNavigationRef.getRootState();
      const items = [...rootState.routes];
      if (callback > 0) {
        do {
          let arr = items.pop();
          let tmp3 = callback;
          diff = callback - 1;
          callback = diff;
        } while (diff > 0);
      }
      const CommonActions = callback(outer1_2[5]).CommonActions;
      const obj = {};
      const merged = Object.assign(rootState);
      obj["routes"] = items;
      return CommonActions.reset(obj);
    });
    flag = true;
  }
  return flag;
};
export { coerceMainRoute };
export { coerceChannelRoute };
export const coerceSidebarRoute = function coerceSidebarRoute(name) {
  if (null != name) {
    if ("sidebar" === name.name) {
      return name;
    }
  }
};
export { coerceTabsRoute };
export { coerceGuildsRoute };
export { coerceICYMIRoute };
export { coerceModalRoute };
export { isModalOpen };
export const useIsModalOpen = function useIsModalOpen(voiceChannelKey) {
  let closure_0 = voiceChannelKey;
  const tmp = callback(callback3(() => outer1_17(closure_0)), 2);
  let closure_1 = tmp[1];
  const items = [voiceChannelKey];
  callback2(() => {
    const rootNavigationRef = voiceChannelKey(outer1_2[3]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      return rootNavigationRef.addListener("state", () => {
        outer1_1(outer2_17(outer1_0));
      });
    }
    const obj = voiceChannelKey(outer1_2[3]);
  }, items);
  return tmp[0];
};
export { getOpenModalKey };
export const useOpenModalKey = function useOpenModalKey() {
  const tmp = callback(callback3(() => outer1_18()), 2);
  let closure_0 = tmp[1];
  callback2(() => {
    const rootNavigationRef = callback(outer1_2[3]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      return rootNavigationRef.addListener("state", () => {
        outer1_0(outer2_18());
      });
    }
    const obj = callback(outer1_2[3]);
  }, []);
  return tmp[0];
};
export { getCurrentNavigationRouteName };
export const useCurrentNavigationRouteName = function useCurrentNavigationRouteName() {
  const tmp = callback(callback3(() => outer1_19()), 2);
  let closure_0 = tmp[1];
  callback2(() => {
    const rootNavigationRef = callback(outer1_2[3]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      return rootNavigationRef.addListener("state", () => {
        outer1_0(outer2_19());
      });
    }
    const obj = callback(outer1_2[3]);
  }, []);
  return tmp[0];
};
export const getCurrentRouteParents = function getCurrentRouteParents() {
  let state1;
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const items = [];
      const rootState = rootNavigationRef.getRootState();
      let state;
      if (null != rootState) {
        const index = rootState.index;
        let num = 0;
        if (null != index) {
          num = index;
        }
        state = rootState.routes[num].state;
      }
      let tmp4 = rootState;
      let tmp5 = rootState;
      if (null != state) {
        do {
          let arr = items.push(tmp4);
          let index2 = tmp4.index;
          let num2 = 0;
          if (null != index2) {
            num2 = index2;
          }
          state = tmp4.routes[num2].state;
          state1 = undefined;
          if (null != state) {
            let index3 = state.index;
            let num3 = 0;
            if (null != index3) {
              num3 = index3;
            }
            state1 = state.routes[num3].state;
            let tmp8 = index3;
          }
          tmp4 = state;
          tmp5 = state;
        } while (null != state1);
      }
      if (null != tmp5) {
        items.push(tmp5);
      }
      return items;
    }
  }
  return [];
};
export const getTabsRouteIfActive = function getTabsRouteIfActive(arg0) {
  const tmp = coerceMainRoute(arg0.routes[arg0.index]);
  let state;
  if (null != tmp) {
    state = tmp.state;
  }
  if (null != state) {
    const index = tmp.state.index;
    let num = 0;
    if (null != index) {
      num = index;
    }
    return coerceTabsRoute(tmp.state.routes[num]);
  }
};
export const getICYMIRouteIfActive = function getICYMIRouteIfActive(index) {
  let tmp2;
  if (null != index) {
    index = undefined;
    if (null != index) {
      index = index.index;
    }
    tmp2 = index.routes[index];
  }
  const tmpResult = coerceMainRoute(tmp2);
  let state;
  if (null != tmpResult) {
    state = tmpResult.state;
  }
  if (null != state) {
    const tmp7 = coerceTabsRoute(tmpResult.state.routes[0]);
    let state1;
    if (null != tmp7) {
      state1 = tmp7.state;
    }
    if (null != state1) {
      return coerceICYMIRoute(tmp7.state.routes[tmp7.state.index]);
    }
  }
};
export const setHomeDrawerState = function setHomeDrawerState(drawerOpen) {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    let currentRoute;
    if (null != rootNavigationRef) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
    let tmp2 = null != currentRoute;
    if (tmp2) {
      tmp2 = null != coerceGuildsRoute(currentRoute);
    }
    if (tmp2) {
      obj = { drawerOpen };
      rootNavigationRef.setParams(obj);
    }
  }
};
