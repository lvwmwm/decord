// Module ID: 1340
// Function ID: 15741
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: addCandidateContent, default, getCurrentFatigableWinner, getCurrentlyShownCounts, getLastShownDismissibleContent, isAnyContentShown, isContentShown, isInCooldown, isPostConnectionOpen, removeCandidateContent, useIsAnyContentShown, useIsContentShown

// Module 1340 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function initState() {
  const obj = { "Bool(true)": "mn", "Bool(true)": "description", "Bool(true)": "Array", candidates: new Map(), recentlyShown: [] };
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
  if (null == content) {
    return currentlyShown;
  } else {
    currentlyShown = currentlyShown.currentlyShown;
    currentlyShown.add(content.content);
    const recentlyShown = currentlyShown.recentlyShown;
    const found = recentlyShown.filter((arg0) => arg0 !== arg1.content);
    found.unshift(content.content);
    found.splice(5);
    currentlyShown.recentlyShown = found;
    if (null != content.groupName) {
      const currentlyShownGroup = currentlyShown.currentlyShownGroup;
      currentlyShownGroup.add(content.groupName);
    }
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = content(dependencyMap[9]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
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
          const candidates2 = candidates.candidates;
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
          callback(closure_2[10]).batchUpdates(() => {
            state.setState((arg0) => {
              const tmp = callback(arg0);
              callback2(tmp, function nextFatigableContent(candidates) {
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
              }(tmp));
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
  arg1(dependencyMap[10]).batchUpdates(() => {
    state.setState(() => {
      const tmp = callback();
      tmp.postConnectionOpen = true;
      return tmp;
    });
  });
  taskRunner.unschedule();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const taskRunner = new arg1(dependencyMap[7]).TaskRunner();
let obj = arg1(dependencyMap[8]);
let closure_11 = obj.createWithEqualityFn(initState);
let closure_12 = false;
let tmp3 = (Store) => {
  class DismissibleContentShownStateStore {
    constructor() {
      self = this;
      tmp = closure_3(this, DismissibleContentShownStateStore);
      obj = closure_6(DismissibleContentShownStateStore);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = DismissibleContentShownStateStore;
  callback2(DismissibleContentShownStateStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const DismissibleContentShownStateStore = this;
      this.waitFor(closure_8, closure_9);
      const items = [closure_8, closure_9];
      this.syncWith(items, () => self.setHasRequiredAction());
    }
  };
  const items = [obj, ];
  obj = {
    key: "setHasRequiredAction",
    value() {
      let closure_12 = callback(closure_2[11])(closure_8, closure_9);
    }
  };
  items[1] = obj;
  return callback(DismissibleContentShownStateStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp3.displayName = "DismissibleContentShownStateStore";
obj = {
  CONNECTION_OPEN() {
    reset();
  },
  LOGOUT() {
    reset();
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[13]), obj);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/dismissible_content/DismissibleContentShownStateStore.tsx");

export default function useDismissibleContentShownStateStore(arg0, arg1) {
  return store(arg0, arg1);
};
export const isInCooldown = function isInCooldown() {
  return isStateInCooldown(store.getState());
};
export { isStateInCooldown };
export const addCandidateContent = function addCandidateContent(content) {
  const arg1 = content;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = arg1(dependencyMap[9]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  let closure_1 = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(content.content);
  arg1(dependencyMap[10]).batchUpdates(() => {
    state.setState((arg0) => {
      const tmp = callback(arg0);
      if (!closure_12) {
        if (closure_1) {
          callback2(tmp, content);
        } else {
          const candidates = tmp.candidates;
          const result = candidates.set(content.content, content);
          callback3(tmp);
        }
      }
      return tmp;
    });
  });
};
export const removeCandidateContent = function removeCandidateContent(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  arg1(dependencyMap[10]).batchUpdates(() => {
    state.setState((arg0) => {
      const tmp = callback(arg0);
      if (closure_1) {
        callback3(tmp, closure_0);
        callback2(tmp, closure_0);
        callback4(tmp);
      } else {
        callback3(tmp, closure_0);
        callback2(tmp, closure_0);
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
  const arg1 = FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  return store((currentlyShown) => {
    currentlyShown = currentlyShown.currentlyShown;
    return currentlyShown.has(currentlyShown);
  });
};
export const useIsAnyContentShown = function useIsAnyContentShown(arg0) {
  const arg1 = arg0;
  return store((arg0) => arg0.some((arg0) => {
    const currentlyShown = arg0.currentlyShown;
    return currentlyShown.has(arg0);
  }));
};
export const isAnyContentShown = function isAnyContentShown(arr) {
  const arg1 = store.getState().currentlyShown;
  return arr.find((arg0) => currentlyShown.has(arg0));
};
export const getCurrentlyShownCounts = function getCurrentlyShownCounts() {
  const items = [...closure_11.getState().currentlyShown];
  const items1 = [
    store.getState().currentlyShown.size,
    items.filter((arg0) => {
      const CONTENT_TYPES_WITH_BYPASS_FATIGUE = callback(closure_2[9]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
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
