// Module ID: 15714
// Function ID: 121183
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 21, 566, 686, 2]

// Module 15714 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let set = new Set();
const set1 = new Set();
let c8 = false;
let tmp4 = ((PersistedStore) => {
  class UnenrolledActivityQuestStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, UnenrolledActivityQuestStore);
      obj = outer1_5(UnenrolledActivityQuestStore);
      tmp2 = outer1_4;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
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
      const outer1_7 = new Set(dismissedQuestIds);
      let autoEnroll;
      if (null != dismissedQuestIds) {
        autoEnroll = dismissedQuestIds.autoEnroll;
      }
      const outer1_8 = null != autoEnroll && autoEnroll;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      const obj = {};
      const items = [...outer1_7];
      obj.dismissedQuestIds = items;
      obj.autoEnroll = outer1_8;
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "isDismissed",
    value(arg0) {
      let hasItem = null != arg0;
      if (hasItem) {
        hasItem = outer1_7.has(arg0);
      }
      return hasItem;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDismissedQuestIds",
    value() {
      return outer1_7;
    }
  };
  return callback(UnenrolledActivityQuestStore, items);
})(require("initialize").PersistedStore);
tmp4.displayName = "UnenrolledActivityQuestStore";
tmp4.persistKey = "UnenrolledActivityQuestStore";
tmp4 = new tmp4(require("dispatcher"), {
  UNENROLLED_ACTIVITY_QUEST_DISMISS: function handleDismissUnenrolledActivityQuest(questId) {
    if (set.size >= 20) {
      const _Array = Array;
      const sorted = Array.from(set).sort(importDefault(21).compare);
      const _Math = Math;
      const substr = sorted.slice(Math.floor(10));
      const _Set = Set;
      set = new Set(substr.map((arg0) => arg0.toString()));
      const arr = Array.from(set);
    }
    set.add(questId.questId);
    return true;
  },
  UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL: function handleSetAutoEnroll(autoEnroll) {
    autoEnroll = autoEnroll.autoEnroll;
    return true;
  }
});
let result = set.fileFinishedImporting("modules/quests/UnenrolledActivityQuestStore.tsx");

export default tmp4;
