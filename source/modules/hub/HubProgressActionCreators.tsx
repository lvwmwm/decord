// Module ID: 5709
// Function ID: 49064
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 5709 (_createForOfIteratorHelperLoose)
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
function changeHubProgressUserSetting(id, HUB_PROGRESS_STEP_ORDER) {
  const result = HUB_PROGRESS_STEP_ORDER(dependencyMap[3]).updateUserGuildSettings(id, (hubProgress) => {
    let iter3;
    const tmp = callback(arg1);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_0;
        let tmp3 = closure_1;
        let obj = closure_0(closure_1[4]);
        if (!obj.hasFlag(hubProgress.hubProgress, value)) {
          let tmp4 = closure_0;
          let tmp5 = closure_1;
          let obj2 = closure_0(closure_1[4]);
          hubProgress.hubProgress = obj2.addFlag(hubProgress.hubProgress, value);
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  }, HUB_PROGRESS_STEP_ORDER(dependencyMap[3]).UserSettingsDelay.INFREQUENT_USER_ACTION);
}
let closure_2 = importDefault(dependencyMap[0]);
const HUB_PROGRESS_STEP_ORDER = arg1(dependencyMap[1]).HUB_PROGRESS_STEP_ORDER;
const GuildFeatures = arg1(dependencyMap[2]).GuildFeatures;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/hub/HubProgressActionCreators.tsx");

export const setHubProgressActionComplete = function setHubProgressActionComplete(guildId, JOIN_GUILD) {
  if (null != guildId) {
    const guild = guild.getGuild(guildId);
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
