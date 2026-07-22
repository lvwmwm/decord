// Module ID: 11147
// Function ID: 86686
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 11147 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).DismissibleContentGroupName;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx");

export default function useAppLauncherOnboardingContent(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const items = [];
  let obj = {};
  const items1 = [closure_5];
  obj.channel = arg1(dependencyMap[6]).useStateFromStores(items1, () => channel.getChannel(channelId));
  const tmp = importDefault(dependencyMap[8])({ channelId });
  if (tmp.canShowBotsBanner) {
    items.push(arg1(dependencyMap[5]).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  }
  if (tmp.canShowAppsOrActivitiesBanner) {
    const push = items.push;
    const DismissibleContent = arg1(dependencyMap[5]).DismissibleContent;
    if (function useHasUsedActivities(channel) {
      channel = channel.channel;
      let obj = channelId(closure_2[4]);
      let result = obj.useIsDismissibleContentDismissed_UNSAFE(channelId(closure_2[5]).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
      const result1 = channelId(closure_2[4]).useIsDismissibleContentDismissed_UNSAFE(channelId(closure_2[5]).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
      const obj2 = channelId(closure_2[4]);
      const items = [closure_4];
      const stateFromStores = channelId(closure_2[6]).useStateFromStores(items, () => applicationFrecencyWithoutLoadingLatest.getApplicationFrecencyWithoutLoadingLatest());
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      const obj3 = channelId(closure_2[6]);
      const tmp4 = closure_7;
      obj = { guildId: guild_id };
      if (result) {
        result = result1;
      }
      obj.fetchesShelf = !result;
      const tmp4Result = tmp4(channelId(closure_2[7]).useActivityApplications(obj));
      const iter = tmp4Result();
      let iter2 = iter;
      let flag = false;
      if (!iter.done) {
        flag = true;
        while (null == stateFromStores.getEntry(iter2.value.id)) {
          let iter3 = tmp4Result();
          iter2 = iter3;
          flag = false;
          if (iter3.done) {
            break;
          }
        }
      }
      obj = { hasUsedActivities: flag };
      return obj;
    }(obj).hasUsedActivities) {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
    } else {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
    }
  }
  const obj2 = arg1(dependencyMap[6]);
  const tmp9 = callback(arg1(dependencyMap[9]).useSelectedDismissibleContent(items, constants.APP_LAUNCHER_ONBOARDING), 2);
  obj = { visibleContent: tmp9[0], markAsDismissed: tmp9[1] };
  return obj;
};
