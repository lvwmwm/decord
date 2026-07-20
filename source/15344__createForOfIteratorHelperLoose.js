// Module ID: 15344
// Function ID: 116890
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 15344 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const QuestsExperimentLocations = arg1(dependencyMap[3]).QuestsExperimentLocations;
const DAY = importDefault(dependencyMap[4]).Millis.DAY;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default function useHasNewAdContent() {
  const MobileQuestHomeRedDotNotificationExperiment = arg1(dependencyMap[5]).MobileQuestHomeRedDotNotificationExperiment;
  let obj = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
  const enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig(obj).enabled;
  const arg1 = enabled;
  const items = [closure_4];
  const items1 = [enabled];
  const stateFromStoresArray = arg1(dependencyMap[6]).useStateFromStoresArray(items, () => {
    if (enabled) {
      const _Array = Array;
      const quests = quests.quests;
      const found = Array.from(quests.values()).filter((value) => !callback(closure_1[7]).isQuestExpired(value));
      let mapped = found.map((id) => id.id);
      const arr = Array.from(quests.values());
    } else {
      mapped = [];
    }
    return mapped;
  }, items1);
  const dependencyMap = stateFromStoresArray;
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [closure_3];
  const items3 = [stateFromStoresArray];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items2, () => {
    const tmp = callback(stateFromStoresArray);
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
  const obj3 = arg1(dependencyMap[6]);
  let prop = null;
  if (stateFromStores) {
    prop = null;
    if (enabled) {
      prop = arg1(dependencyMap[10]).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
    }
  }
  obj = { cooldownDurationMs: DAY };
  const tmp6 = callback(arg1(dependencyMap[9]).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  obj = { showBadge: null != tmp6[0], dismissBadge: tmp6[1] };
  return obj;
};
