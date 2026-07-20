// Module ID: 13861
// Function ID: 104893
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13861 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const QuestDockMode = arg1(dependencyMap[5]).QuestDockMode;
const COLLAPSED = QuestDockMode.COLLAPSED;
let closure_3 = null;
let closure_10 = false;
let tmp2 = (PersistedStore) => {
  class QuestDockStore {
    constructor() {
      self = this;
      tmp = closure_4(this, QuestDockStore);
      obj = closure_7(QuestDockStore);
      tmp2 = closure_6;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = QuestDockStore;
  callback2(QuestDockStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(questDockSoftDismissedAt) {
      if (null != questDockSoftDismissedAt) {
        questDockSoftDismissedAt = questDockSoftDismissedAt.questDockSoftDismissedAt;
        let closure_2 = QuestDockStore(closure_1[6]).isSoftDismissed(questDockSoftDismissedAt) ? tmp4.SOFT_DISMISSED : tmp4.COLLAPSED;
        const obj = QuestDockStore(closure_1[6]);
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return { prevRestingQuestDockMode: closure_2, questDockSoftDismissedAt: closure_3 };
    }
  };
  items[1] = obj;
  obj = {
    key: "prevRestingQuestDockMode",
    get() {
      return closure_2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "questDockSoftDismissedAt",
    get() {
      return closure_3;
    }
  };
  items[4] = {
    key: "isEligibleToBeVisible",
    get() {
      return closure_10;
    }
  };
  return callback(QuestDockStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp2.displayName = "QuestDockStore";
tmp2.persistKey = "QuestDockStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE: function handlePrevRestingQuestDockModeUpdate(mode) {
    const COLLAPSED = mode.mode;
    if (mode.mode !== COLLAPSED) {
      let timestamp = null;
      if (mode.mode === QuestDockMode.SOFT_DISMISSED) {
        const _Date = Date;
        timestamp = Date.now();
      }
      let closure_3 = timestamp;
    }
    return mode.mode !== COLLAPSED;
  },
  QUESTS_DOCK_RESET_SOFT_DISMISSAL: function handleResetSoftDismissal() {
    const COLLAPSED = QuestDockMode.COLLAPSED;
    let closure_3 = null;
  },
  QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE: function handleQuestDockEligibilityUpdate(isEligibleToBeVisible) {
    let closure_10 = isEligibleToBeVisible.isEligibleToBeVisible;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockStore.tsx");

export default tmp2;
