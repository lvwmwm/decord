// Module ID: 11698
// Function ID: 90748
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 1316, 4812, 5714, 653, 566, 1282, 1212, 1327, 1360, 2]
// Exports: getHubProgressTitleForStep, getNextHubProgressStep, useHubProgressBarCompletedSteps

// Module 11698 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { HUB_PROGRESS_STEP_ORDER } from "items";
import { PlatformTypes } from "ME";

let require = arg1;
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
function useCompletedStepsFromSettings(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      const guilds = outer1_3.settings.guilds;
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
  const items1 = [stateFromStores];
  return React.useMemo(() => {
    let iter2;
    const set = new Set();
    const tmp2 = outer1_7(outer1_5);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = callback;
        let tmp4 = stateFromStores;
        let obj2 = callback(stateFromStores[9]);
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/hub/HubProgressBarUtils.tsx");

export const getHubProgressTitleForStep = function getHubProgressTitleForStep(nextHubProgressStep) {
  if (require(1282) /* _callSuper */.HubProgressStep.JOIN_GUILD === nextHubProgressStep) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.iNR25n);
  } else if (require(1282) /* _callSuper */.HubProgressStep.INVITE_USER === nextHubProgressStep) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["3NlTYU"]);
  } else if (require(1282) /* _callSuper */.HubProgressStep.CONTACT_SYNC === nextHubProgressStep) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.HFvFte);
  } else if (require(1282) /* _callSuper */.HubProgressStep.NO_PROGRESS === nextHubProgressStep) {
    return null;
  } else {
    require(1327) /* isDiscordFrontendDevelopment */.assertNever(nextHubProgressStep);
  }
};
export const useHubProgressBarCompletedSteps = function useHubProgressBarCompletedSteps(guild) {
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const tmpResult = useCompletedStepsFromSettings(id);
  const require = tmpResult;
  const tmp4 = (function useContactSyncEverEnabled() {
    const items = [outer1_4];
    return tmpResult(tmp4[5]).useStateFromStores(items, () => null != outer2_4.getLocalAccount(outer2_6.CONTACTS));
  })();
  const dependencyMap = tmp4;
  let items = [tmpResult, tmp4];
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
