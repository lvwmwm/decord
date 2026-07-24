// Module ID: 1466
// Function ID: 17015
// Name: DrawerRouter
// Dependencies: [65, 29, 1467, 1465]
// Exports: default

// Module 1466 (DrawerRouter)
import _toConsumableArray from "_toConsumableArray";
import _objectWithoutProperties from "_objectWithoutProperties";

const require = arg1;
let closure_3 = ["defaultStatus"];
let merged = Object.assign({}, require("getRouteHistory").TabActions, {
  openDrawer() {
    return { type: "OPEN_DRAWER" };
  },
  closeDrawer() {
    return { type: "CLOSE_DRAWER" };
  },
  toggleDrawer() {
    return { type: "TOGGLE_DRAWER" };
  }
});

export default function DrawerRouter(defaultStatus) {
  defaultStatus = defaultStatus.defaultStatus;
  let str = "closed";
  if (undefined !== defaultStatus) {
    str = defaultStatus;
  }
  let tmp2 = importDefault(isDrawerInHistory[2])(closeDrawer(defaultStatus, addDrawerToHistory));
  importDefault = tmp2;
  isDrawerInHistory = function isDrawerInHistory(history) {
    history = history.history;
    let someResult;
    if (null != history) {
      someResult = history.some((type) => "drawer" === type.type);
    }
    return Boolean(someResult);
  };
  addDrawerToHistory = function addDrawerToHistory(history) {
    let merged = history;
    if (!isDrawerInHistory(history)) {
      let obj = {};
      const items = [];
      obj = { type: "drawer" };
      let str2 = "open";
      if ("open" === "drawer") {
        str2 = "closed";
      }
      obj.status = str2;
      const items1 = [obj];
      obj.history = items.concat(removeDrawerFromHistory(history.history), items1);
      merged = Object.assign({}, history, obj);
      const tmp4 = removeDrawerFromHistory(history.history);
    }
    return merged;
  };
  function removeDrawerFromHistory(history) {
    let merged = history;
    if (isDrawerInHistory(history)) {
      const _Object = Object;
      const obj = {};
      history = history.history;
      obj.history = history.filter((type) => "drawer" !== type.type);
      merged = Object.assign({}, history, obj);
    }
    return merged;
  }
  closeDrawer = function closeDrawer(defaultStatus, addDrawerToHistory) {
    if ("open" === str) {
      let tmp2 = addDrawerToHistory(defaultStatus);
    } else {
      tmp2 = removeDrawerFromHistory(defaultStatus);
    }
    return tmp2;
  };
  return Object.assign({}, tmp2, {
    type: "drawer",
    getInitialState(routeNames) {
      let obj = { routeNames: routeNames.routeNames, routeParamList: routeNames.routeParamList, routeGetIdList: routeNames.routeGetIdList };
      obj = { default: str, stale: false, type: "drawer" };
      const initialState = tmp2.getInitialState(obj);
      obj.key = "drawer-" + str(isDrawerInHistory[3]).nanoid();
      return Object.assign({}, initialState, obj);
    },
    getRehydratedState(stale) {
      if (false === stale.stale) {
        return stale;
      } else {
        let obj = { routeNames: tmp, routeParamList: tmp2, routeGetIdList: tmp3 };
        const rehydratedState = tmp2.getRehydratedState(stale, obj);
        let tmp6 = rehydratedState;
        if (isDrawerInHistory(stale)) {
          tmp6 = addDrawerToHistory(removeDrawerFromHistory(rehydratedState));
        }
        const _Object = Object;
        obj = { default: str, type: "drawer" };
        const _HermesInternal = HermesInternal;
        obj.key = "drawer-" + "drawer"(isDrawerInHistory[3]).nanoid();
        return Object.assign({}, tmp6, obj);
      }
    },
    getStateForRouteFocus(arg0, arg1) {
      return closeDrawer(tmp2.getStateForRouteFocus(arg0, arg1));
    },
    getStateForAction(index, type) {
      type = type.type;
      if ("OPEN_DRAWER" === type) {
        if ("open" === str) {
          let tmp18 = removeDrawerFromHistory(index);
        } else {
          tmp18 = addDrawerToHistory(index);
        }
        return tmp18;
      } else if ("CLOSE_DRAWER" === type) {
        return closeDrawer(index);
      } else if ("TOGGLE_DRAWER" === type) {
        if (isDrawerInHistory(index)) {
          let tmp13 = removeDrawerFromHistory(index);
        } else {
          tmp13 = addDrawerToHistory(index);
        }
        return tmp13;
      } else {
        if ("JUMP_TO" !== type) {
          if ("NAVIGATE" !== type) {
            if ("GO_BACK" === type) {
              if (isDrawerInHistory(index)) {
                let stateForAction = removeDrawerFromHistory(index);
              } else {
                stateForAction = tmp2.getStateForAction(index, type, arg2);
              }
              return stateForAction;
            } else {
              return tmp2.getStateForAction(index, type, arg2);
            }
          }
        }
        const stateForAction1 = tmp2.getStateForAction(index, type, arg2);
        let tmp9 = stateForAction1;
        if (null != stateForAction1) {
          tmp9 = stateForAction1;
          if (stateForAction1.index !== index.index) {
            tmp9 = closeDrawer(stateForAction1);
          }
        }
        return tmp9;
      }
    },
    actionCreators: merged
  });
};
export const DrawerActions = merged;
