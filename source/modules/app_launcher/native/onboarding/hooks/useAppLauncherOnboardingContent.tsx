// Module ID: 11157
// Function ID: 86736
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 7921, 1348, 1345, 3946, 1334, 566, 11158, 11163, 5802, 2]
// Exports: default

// Module 11157 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { DismissibleContentGroupName as closure_6 } from "ContentDismissActionType";

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
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx");

export default function useAppLauncherOnboardingContent(channelId) {
  channelId = channelId.channelId;
  let items = [];
  let obj = {};
  const items1 = [closure_5];
  obj.channel = channelId(566).useStateFromStores(items1, () => outer1_5.getChannel(channelId));
  const tmp = importDefault(11163)({ channelId });
  if (tmp.canShowBotsBanner) {
    items.push(channelId(1334).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  }
  if (tmp.canShowAppsOrActivitiesBanner) {
    const push = items.push;
    const DismissibleContent = channelId(1334).DismissibleContent;
    if ((function useHasUsedActivities(channel) {
      channel = channel.channel;
      let obj = channelId(outer1_2[4]);
      let result = obj.useIsDismissibleContentDismissed_UNSAFE(channelId(outer1_2[5]).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
      const result1 = channelId(outer1_2[4]).useIsDismissibleContentDismissed_UNSAFE(channelId(outer1_2[5]).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
      const obj2 = channelId(outer1_2[4]);
      const items = [outer1_4];
      const stateFromStores = channelId(outer1_2[6]).useStateFromStores(items, () => outer2_4.getApplicationFrecencyWithoutLoadingLatest());
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      const obj3 = channelId(outer1_2[6]);
      const tmp4 = outer1_7;
      obj = { guildId: guild_id };
      if (result) {
        result = result1;
      }
      obj.fetchesShelf = !result;
      const tmp4Result = tmp4(channelId(outer1_2[7]).useActivityApplications(obj));
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
    })(obj).hasUsedActivities) {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
    } else {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
    }
  }
  let obj2 = channelId(566);
  const tmp9 = callback(channelId(5802).useSelectedDismissibleContent(items, constants.APP_LAUNCHER_ONBOARDING), 2);
  obj = { visibleContent: tmp9[0], markAsDismissed: tmp9[1] };
  return obj;
};
