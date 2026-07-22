// Module ID: 11688
// Function ID: 90699
// Name: _createForOfIteratorHelperLoose
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: getHubProgressTitleForStep, getNextHubProgressStep, useHubProgressBarCompletedSteps

// Module 11688 (_createForOfIteratorHelperLoose)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { HUB_PROGRESS_STEP_ORDER } from "__exportStarResult1";
import { PlatformTypes } from "__exportStarResult1";

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
function useCompletedStepsFromSettings(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => {
    let num = 0;
    if (null != arg0) {
      const guilds = settings.settings.guilds;
      let hubProgress;
      if (null != guilds) {
        if (null != guilds.guilds[closure_0]) {
          hubProgress = tmp4.hubProgress;
        }
      }
      let num2 = 0;
      if (null != hubProgress) {
        num2 = hubProgress;
      }
      num = num2;
    }
    return num;
  });
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores];
  return React.useMemo(() => {
    let iter2;
    const set = new Set();
    const tmp2 = callback(closure_5);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = closure_0;
        let tmp4 = closure_1;
        let obj2 = closure_0(closure_1[9]);
        if (obj2.hasFlag(tmp, value)) {
          let addResult = set.add(value);
        }
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
    return set;
  }, items1);
}
const result = require("__exportStarResult1").fileFinishedImporting("modules/hub/HubProgressBarUtils.tsx");

export const getHubProgressTitleForStep = function getHubProgressTitleForStep(nextHubProgressStep) {
  if (arg1(dependencyMap[6]).HubProgressStep.JOIN_GUILD === nextHubProgressStep) {
    const intl3 = arg1(dependencyMap[7]).intl;
    return intl3.string(arg1(dependencyMap[7]).t.iNR25n);
  } else if (arg1(dependencyMap[6]).HubProgressStep.INVITE_USER === nextHubProgressStep) {
    const intl2 = arg1(dependencyMap[7]).intl;
    return intl2.string(arg1(dependencyMap[7]).t.3NlTYU);
  } else if (arg1(dependencyMap[6]).HubProgressStep.CONTACT_SYNC === nextHubProgressStep) {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.HFvFte);
  } else if (arg1(dependencyMap[6]).HubProgressStep.NO_PROGRESS === nextHubProgressStep) {
    return null;
  } else {
    arg1(dependencyMap[8]).assertNever(nextHubProgressStep);
  }
};
export const useHubProgressBarCompletedSteps = function useHubProgressBarCompletedSteps(guild) {
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const tmpResult = useCompletedStepsFromSettings(id);
  const arg1 = tmpResult;
  const tmp4 = function useContactSyncEverEnabled() {
    const items = [closure_4];
    return tmpResult(tmp4[5]).useStateFromStores(items, () => null != localAccount.getLocalAccount(constants.CONTACTS));
  }();
  const dependencyMap = tmp4;
  const items = [tmpResult, tmp4];
  return React.useMemo(() => {
    if (tmp4) {
      const _Set = Set;
      const set = new Set(tmpResult);
      set.add(tmpResult(new.target[6]).HubProgressStep.CONTACT_SYNC);
      return set;
    } else {
      return tmpResult;
    }
  }, items);
};
export const getNextHubProgressStep = function getNextHubProgressStep(hubProgressBarCompletedSteps) {
  const tmp = _createForOfIteratorHelperLoose(HUB_PROGRESS_STEP_ORDER);
  let iter = tmp();
  if (!iter.done) {
    const value = iter.value;
    while (hubProgressBarCompletedSteps.has(value)) {
      let iter2 = tmp();
      iter = iter2;
    }
    return value;
  }
  return null;
};
