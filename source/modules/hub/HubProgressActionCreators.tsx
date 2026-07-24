// Module ID: 5713
// Function ID: 49117
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1838, 5714, 653, 1331, 1360, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 5713 (_createForOfIteratorHelperLoose)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { HUB_PROGRESS_STEP_ORDER } from "items";
import { GuildFeatures } from "ME";

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
function changeHubProgressUserSetting(id, HUB_PROGRESS_STEP_ORDER) {
  const _require = HUB_PROGRESS_STEP_ORDER;
  const result = _require(1331).updateUserGuildSettings(id, (hubProgress) => {
    let iter3;
    const tmp = outer1_5(HUB_PROGRESS_STEP_ORDER);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = HUB_PROGRESS_STEP_ORDER;
        let tmp3 = outer1_1;
        let obj = HUB_PROGRESS_STEP_ORDER(outer1_1[4]);
        if (!obj.hasFlag(hubProgress.hubProgress, value)) {
          let tmp4 = HUB_PROGRESS_STEP_ORDER;
          let tmp5 = outer1_1;
          let obj2 = HUB_PROGRESS_STEP_ORDER(outer1_1[4]);
          hubProgress.hubProgress = obj2.addFlag(hubProgress.hubProgress, value);
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  }, _require(1331).UserSettingsDelay.INFREQUENT_USER_ACTION);
}
let result = require("ME").fileFinishedImporting("modules/hub/HubProgressActionCreators.tsx");

export const setHubProgressActionComplete = function setHubProgressActionComplete(guildId, JOIN_GUILD) {
  if (null != guildId) {
    guild = guild.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (hasItem) {
      const items = [JOIN_GUILD];
      changeHubProgressUserSetting(guildId, items);
    }
  }
};
export const skipHubProgress = function skipHubProgress(id) {
  changeHubProgressUserSetting(id, HUB_PROGRESS_STEP_ORDER);
};
