// Module ID: 15526
// Function ID: 119492
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 14034, 6941, 4976, 664, 10495, 566, 6939, 6969, 5802, 1334, 2]
// Exports: default

// Module 15526 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";

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
const DAY = require("set").Millis.DAY;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default function useHasNewAdContent() {
  const MobileQuestHomeRedDotNotificationExperiment = enabled(stateFromStoresArray[5]).MobileQuestHomeRedDotNotificationExperiment;
  let obj = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
  enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig(obj).enabled;
  const items = [closure_4];
  const items1 = [enabled];
  stateFromStoresArray = enabled(stateFromStoresArray[6]).useStateFromStoresArray(items, () => {
    if (enabled) {
      const _Array = Array;
      const quests = outer1_4.quests;
      const found = Array.from(quests.values()).filter((value) => !enabled(stateFromStoresArray[7]).isQuestExpired(value));
      let mapped = found.map((id) => id.id);
      const arr = Array.from(quests.values());
    } else {
      mapped = [];
    }
    return mapped;
  }, items1);
  const obj2 = enabled(stateFromStoresArray[6]);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [stateFromStoresArray];
  const stateFromStores = enabled(stateFromStoresArray[6]).useStateFromStores(items2, () => {
    const tmp = outer1_7(stateFromStoresArray);
    let iter = tmp();
    if (!iter.done) {
      while (tmp4(enabled(stateFromStoresArray[8]).AdCreativeType.QUEST, tmp2)) {
        let iter2 = tmp();
        iter = iter2;
      }
      return true;
    }
    return false;
  }, items3);
  const obj3 = enabled(stateFromStoresArray[6]);
  let prop = null;
  if (stateFromStores) {
    prop = null;
    if (enabled) {
      prop = enabled(stateFromStoresArray[10]).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
    }
  }
  obj = { cooldownDurationMs: DAY };
  const tmp6 = callback(enabled(stateFromStoresArray[9]).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  obj = { showBadge: null != tmp6[0], dismissBadge: tmp6[1] };
  return obj;
};
