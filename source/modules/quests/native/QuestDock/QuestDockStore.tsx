// Module ID: 13992
// Function ID: 107144
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4976, 13993, 566, 686, 2]

// Module 13992 (_isNativeReflectConstruct)
import roundToNearestPixel from "roundToNearestPixel";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { QuestDockMode } from "QuestsExperimentLocations";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let COLLAPSED = QuestDockMode.COLLAPSED;
let c3 = null;
let c10 = false;
let tmp2 = ((PersistedStore) => {
  class QuestDockStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, QuestDockStore);
      obj = outer1_7(QuestDockStore);
      tmp2 = outer1_6;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(QuestDockStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(questDockSoftDismissedAt) {
      if (null != questDockSoftDismissedAt) {
        const outer1_3 = questDockSoftDismissedAt.questDockSoftDismissedAt;
        const outer1_2 = QuestDockStore(outer1_1[6]).isSoftDismissed(outer1_3) ? tmp4.SOFT_DISMISSED : tmp4.COLLAPSED;
        const obj = QuestDockStore(outer1_1[6]);
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return { prevRestingQuestDockMode: outer1_2, questDockSoftDismissedAt: outer1_3 };
    }
  };
  items[1] = obj;
  obj = {
    key: "prevRestingQuestDockMode",
    get() {
      return outer1_2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "questDockSoftDismissedAt",
    get() {
      return outer1_3;
    }
  };
  items[4] = {
    key: "isEligibleToBeVisible",
    get() {
      return outer1_10;
    }
  };
  return callback(QuestDockStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "QuestDockStore";
tmp2.persistKey = "QuestDockStore";
tmp2 = new tmp2(require("dispatcher"), {
  QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE: function handlePrevRestingQuestDockModeUpdate(mode) {
    mode = mode.mode;
    if (mode.mode !== mode) {
      let timestamp = null;
      if (mode.mode === QuestDockMode.SOFT_DISMISSED) {
        const _Date = Date;
        timestamp = Date.now();
      }
    }
    return mode.mode !== mode;
  },
  QUESTS_DOCK_RESET_SOFT_DISMISSAL: function handleResetSoftDismissal() {
    const COLLAPSED = QuestDockMode.COLLAPSED;
    let c3 = null;
  },
  QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE: function handleQuestDockEligibilityUpdate(isEligibleToBeVisible) {
    isEligibleToBeVisible = isEligibleToBeVisible.isEligibleToBeVisible;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockStore.tsx");

export default tmp2;
