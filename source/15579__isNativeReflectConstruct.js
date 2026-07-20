// Module ID: 15579
// Function ID: 118904
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15579 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
new Set();
const set1 = new Set();
let closure_8 = false;
let tmp4 = (PersistedStore) => {
  class UnenrolledActivityQuestStore {
    constructor() {
      self = this;
      tmp = closure_2(this, UnenrolledActivityQuestStore);
      obj = closure_5(UnenrolledActivityQuestStore);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = UnenrolledActivityQuestStore;
  callback2(UnenrolledActivityQuestStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(dismissedQuestIds) {
      dismissedQuestIds = undefined;
      if (null != dismissedQuestIds) {
        dismissedQuestIds = dismissedQuestIds.dismissedQuestIds;
      }
      if (null == dismissedQuestIds) {
        dismissedQuestIds = [];
      }
      const set = new Set(dismissedQuestIds);
      let autoEnroll;
      if (null != dismissedQuestIds) {
        autoEnroll = dismissedQuestIds.autoEnroll;
      }
      let closure_8 = null != autoEnroll && autoEnroll;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      const obj = {};
      const items = [...closure_7];
      obj.dismissedQuestIds = items;
      obj.autoEnroll = closure_8;
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "isDismissed",
    value(arg0) {
      let hasItem = null != arg0;
      if (hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDismissedQuestIds",
    value() {
      return closure_7;
    }
  };
  return callback(UnenrolledActivityQuestStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp4.displayName = "UnenrolledActivityQuestStore";
tmp4.persistKey = "UnenrolledActivityQuestStore";
tmp4 = new tmp4(importDefault(dependencyMap[7]), {
  UNENROLLED_ACTIVITY_QUEST_DISMISS: function handleDismissUnenrolledActivityQuest(questId) {
    if (set1.size >= 20) {
      const _Array = Array;
      const sorted = Array.from(set1).sort(importDefault(dependencyMap[5]).compare);
      const _Math = Math;
      const substr = sorted.slice(Math.floor(10));
      const _Set = Set;
      const set = new Set(substr.map((arg0) => arg0.toString()));
      const arr = Array.from(set1);
    }
    set1.add(questId.questId);
    return true;
  },
  UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL: function handleSetAutoEnroll(autoEnroll) {
    autoEnroll = autoEnroll.autoEnroll;
    return true;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/UnenrolledActivityQuestStore.tsx");

export default tmp4;
