// Module ID: 1340
// Function ID: 15743
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1341, 1342, 1343, 677, 1339, 682, 1344, 566, 686, 2]
// Exports: addCandidateContent, default, getCurrentFatigableWinner, getCurrentlyShownCounts, getLastShownDismissibleContent, isAnyContentShown, isContentShown, isInCooldown, isPostConnectionOpen, removeCandidateContent, useIsAnyContentShown, useIsContentShown

// Module 1340 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import TaskRunner from "TaskRunner";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function initState() {
  const obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [] };
  const map = new Map();
  obj.currentlyShown = new Set();
  const set = new Set();
  obj.currentlyShownGroup = new Set();
  obj.lastWinnerTime = 0;
  obj.postConnectionOpen = false;
  return obj;
}
function cloneState(candidates) {
  const obj = {};
  const merged = Object.assign(candidates);
  obj["candidates"] = new Map(candidates.candidates);
  const map = new Map(candidates.candidates);
  obj["currentlyShown"] = new Set(candidates.currentlyShown);
  const set = new Set(candidates.currentlyShown);
  obj["currentlyShownGroup"] = new Set(candidates.currentlyShownGroup);
  return obj;
}
function withoutContent(currentlyShown, shownFatigableCandidate) {
  if (null != shownFatigableCandidate) {
    if (null != shownFatigableCandidate.content) {
      currentlyShown = currentlyShown.currentlyShown;
      currentlyShown.delete(shownFatigableCandidate.content);
    }
    if (null != shownFatigableCandidate.groupName) {
      const currentlyShownGroup = currentlyShown.currentlyShownGroup;
      currentlyShownGroup.delete(shownFatigableCandidate.groupName);
    }
    shownFatigableCandidate = currentlyShown.shownFatigableCandidate;
    let content;
    if (null != shownFatigableCandidate) {
      content = shownFatigableCandidate.content;
    }
    if (content === shownFatigableCandidate.content) {
      currentlyShown.shownFatigableCandidate = null;
    }
  }
  return currentlyShown;
}
function withContent(currentlyShown, content) {
  const _require = content;
  if (null == content) {
    return currentlyShown;
  } else {
    currentlyShown = currentlyShown.currentlyShown;
    currentlyShown.add(content.content);
    const recentlyShown = currentlyShown.recentlyShown;
    const found = recentlyShown.filter((arg0) => arg0 !== content.content);
    found.unshift(content.content);
    found.splice(5);
    currentlyShown.recentlyShown = found;
    if (null != content.groupName) {
      const currentlyShownGroup = currentlyShown.currentlyShownGroup;
      currentlyShownGroup.add(content.groupName);
    }
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = _require(1339).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    if (!CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(content.content)) {
      currentlyShown.shownFatigableCandidate = content;
      const prevFatigableCandidate = currentlyShown.prevFatigableCandidate;
      content = undefined;
      if (null != prevFatigableCandidate) {
        content = prevFatigableCandidate.content;
      }
      if (content !== content.content) {
        currentlyShown.prevFatigableCandidate = content;
        const _Date = Date;
        const date = new Date();
        currentlyShown.lastWinnerTime = date.getTime();
      }
    }
    if (null != content.onAdded) {
      content.onAdded();
    }
    return currentlyShown;
  }
}
function withoutCandidate(candidates, content) {
  candidates = candidates.candidates;
  candidates.delete(content.content);
  return candidates;
}
function swapFatigableContent(shownFatigableCandidate, content) {
  withoutContent(shownFatigableCandidate, shownFatigableCandidate.shownFatigableCandidate);
  withContent(shownFatigableCandidate, content);
  return shownFatigableCandidate;
}
function withUpdateWinner(candidates) {
  if (0 === candidates.candidates.size) {
    return candidates;
  } else {
    const _Date = Date;
    const date = new Date();
    const tmp16 = date.getTime() - candidates.lastWinnerTime > 300000;
    let hasItem = null != candidates.prevFatigableCandidate;
    if (hasItem) {
      candidates = candidates.candidates;
      hasItem = candidates.has(candidates.prevFatigableCandidate.content);
    }
    if (hasItem) {
      hasItem = null == candidates.shownFatigableCandidate;
    }
    if (hasItem) {
      if (!tmp16) {
        taskRunner.unschedule();
        let value;
        if (null != candidates.prevFatigableCandidate) {
          let candidates2 = candidates.candidates;
          value = candidates2.get(candidates.prevFatigableCandidate.content);
        }
        swapFatigableContent(candidates, value);
        const tmp4 = swapFatigableContent;
      }
      return candidates;
    }
    if (null == candidates.shownFatigableCandidate) {
      let scheduledResult = taskRunner.scheduled();
      if (!scheduledResult) {
        scheduledResult = isStateInCooldown(candidates);
      }
      if (!scheduledResult) {
        taskRunner.schedule(() => {
          outer1_0(outer1_2[10]).batchUpdates(() => {
            outer2_11.setState((arg0) => {
              const tmp = outer3_15(arg0);
              outer3_19(tmp, (function nextFatigableContent(candidates) {
                let closure_0 = candidates;
                candidates = candidates.candidates;
                const items = [...candidates.keys()];
                let hasItem = null !== candidates.prevFatigableCandidate;
                if (hasItem) {
                  const candidates2 = candidates.candidates;
                  hasItem = candidates2.has(candidates.prevFatigableCandidate.content);
                }
                if (hasItem) {
                  hasItem = candidates.candidates.size > 1;
                }
                let found = items;
                if (hasItem) {
                  found = items.filter(() => { ... });
                }
                const candidates3 = candidates.candidates;
                return candidates3.get(found[Math.floor(Math, Math.random(Math) * found.length)]);
              })(tmp));
              return tmp;
            });
          });
        }, 250);
      }
    }
  }
}
function isStateInCooldown(state) {
  new Date();
  let tmp3 = null == state.shownFatigableCandidate;
  if (tmp3) {
    tmp3 = tmp2 - state.lastWinnerTime < 3600000;
  }
  return tmp3;
}
function reset() {
  require(682) /* batchUpdates */.batchUpdates(() => {
    outer1_11.setState(() => {
      const tmp = outer2_14();
      tmp.postConnectionOpen = true;
      return tmp;
    });
  });
  taskRunner.unschedule();
}
const taskRunner = new require("TaskRunner").TaskRunner();
let closure_11 = useStoreWithEqualityFn.createWithEqualityFn(initState);
let c12 = false;
let tmp3 = ((Store) => {
  class DismissibleContentShownStateStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, DismissibleContentShownStateStore);
      obj = outer1_6(DismissibleContentShownStateStore);
      tmp2 = outer1_5;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(DismissibleContentShownStateStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      this.waitFor(outer1_8, outer1_9);
      const items = [outer1_8, outer1_9];
      this.syncWith(items, () => self.setHasRequiredAction());
    }
  };
  let items = [obj, ];
  obj = {
    key: "setHasRequiredAction",
    value() {
      const outer1_12 = outer1_1(outer1_2[11])(outer1_8, outer1_9);
    }
  };
  items[1] = obj;
  return callback(DismissibleContentShownStateStore, items);
})(require("initialize").Store);
tmp3.displayName = "DismissibleContentShownStateStore";
useStoreWithEqualityFn = {
  CONNECTION_OPEN() {
    reset();
  },
  LOGOUT() {
    reset();
  }
};
tmp3 = new tmp3(require("dispatcher"), useStoreWithEqualityFn);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/dismissible_content/DismissibleContentShownStateStore.tsx");

export default function useDismissibleContentShownStateStore(arg0, arg1) {
  return store(arg0, arg1);
};
export const isInCooldown = function isInCooldown() {
  return isStateInCooldown(store.getState());
};
export { isStateInCooldown };
export const addCandidateContent = function addCandidateContent(content) {
  const _require = content;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = _require(1339).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  let closure_1 = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(content.content);
  _require(682).batchUpdates(() => {
    outer1_11.setState((arg0) => {
      const tmp = outer2_15(arg0);
      if (!outer2_12) {
        if (outer1_1) {
          outer2_17(tmp, outer1_0);
        } else {
          const candidates = tmp.candidates;
          const result = candidates.set(outer1_0.content, outer1_0);
          outer2_20(tmp);
        }
      }
      return tmp;
    });
  });
};
export const removeCandidateContent = function removeCandidateContent(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  _require(682).batchUpdates(() => {
    outer1_11.setState((arg0) => {
      const tmp = outer2_15(arg0);
      if (outer1_1) {
        outer2_18(tmp, outer1_0);
        outer2_16(tmp, outer1_0);
        outer2_20(tmp);
      } else {
        outer2_18(tmp, outer1_0);
        outer2_16(tmp, outer1_0);
      }
      return tmp;
    });
  });
};
export const getLastShownDismissibleContent = function getLastShownDismissibleContent() {
  const first = store.getState().recentlyShown[0];
  let tmp2 = null;
  if (null != first) {
    tmp2 = first;
  }
  return tmp2;
};
export const getCurrentFatigableWinner = function getCurrentFatigableWinner() {
  const shownFatigableCandidate = store.getState().shownFatigableCandidate;
  let content;
  if (null != shownFatigableCandidate) {
    content = shownFatigableCandidate.content;
  }
  let tmp2 = null;
  if (null != content) {
    tmp2 = content;
  }
  return tmp2;
};
export const isContentShown = function isContentShown(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
  const currentlyShown = store.getState().currentlyShown;
  return currentlyShown.has(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
};
export const useIsContentShown = function useIsContentShown(FAVORITES_SERVER_ONBOARDING_MENU_ITEM) {
  let closure_0 = FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  return store((currentlyShown) => {
    currentlyShown = currentlyShown.currentlyShown;
    return currentlyShown.has(closure_0);
  });
};
export const useIsAnyContentShown = function useIsAnyContentShown(arg0) {
  let closure_0 = arg0;
  return store((arg0) => {
    let closure_0 = arg0;
    return closure_0.some((arg0) => {
      currentlyShown = currentlyShown.currentlyShown;
      return currentlyShown.has(arg0);
    });
  });
};
export const isAnyContentShown = function isAnyContentShown(arr) {
  const currentlyShown = store.getState().currentlyShown;
  return arr.find((arg0) => currentlyShown.has(arg0));
};
export const getCurrentlyShownCounts = function getCurrentlyShownCounts() {
  const items = [...closure_11.getState().currentlyShown];
  const items1 = [
    store.getState().currentlyShown.size,
    items.filter((arg0) => {
      const CONTENT_TYPES_WITH_BYPASS_FATIGUE = outer1_0(outer1_2[9]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
      return !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
    }).length
  ];
  return items1;
};
export { reset };
export const isPostConnectionOpen = function isPostConnectionOpen() {
  return store.getState().postConnectionOpen;
};
export const dismissibleContentShownStateStore = tmp3;
