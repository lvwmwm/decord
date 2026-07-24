// Module ID: 12328
// Function ID: 96064
// Name: getJoinOrStartButtonState
// Dependencies: [31, 1212, 8005, 10549, 2]
// Exports: useJoinOrStartButtonState

// Module 12328 (getJoinOrStartButtonState)
import result from "result";

const require = arg1;
function getJoinOrStartButtonState(channel) {
  let currentEmbeddedActivity;
  let embeddedActivity;
  let joinability;
  ({ embeddedActivity, joinability, currentEmbeddedActivity } = channel);
  let obj = { disabled: false, isJoinAction: !tmp };
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (null == embeddedActivity) {
    let stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.sqe0hj);
  }
  obj.text = stringResult;
  obj.tooltip = undefined;
  let obj1 = require(8005) /* isActivityInTextSupportedForChannel */;
  const result = obj1.isActivitiesInTextEnabled(channel.channel);
  if (null != embeddedActivity) {
    if (null != currentEmbeddedActivity) {
      if (embeddedActivity.launchId === currentEmbeddedActivity.launchId) {
        obj = {};
        const merged = Object.assign(obj);
        obj["disabled"] = true;
        const intl10 = require(1212) /* getSystemLocale */.intl;
        obj["text"] = intl10.string(require(1212) /* getSystemLocale */.t.DPfdsq);
        obj["tooltip"] = undefined;
        return obj;
      }
    }
  }
  if (null == embeddedActivity) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj["disabled"] = !result;
    let stringResult1;
    if (!result) {
      const intl9 = require(1212) /* getSystemLocale */.intl;
      stringResult1 = intl9.string(require(1212) /* getSystemLocale */.t.f41E1g);
    }
    obj["tooltip"] = stringResult1;
    return obj;
  } else {
    if (null != joinability) {
      if (joinability !== require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.CAN_JOIN) {
        if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === joinability) {
          const intl8 = require(1212) /* getSystemLocale */.intl;
          let stringResult2 = intl8.string(require(1212) /* getSystemLocale */.t.hHGrWz);
        } else if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === joinability) {
          const intl7 = require(1212) /* getSystemLocale */.intl;
          stringResult2 = intl7.string(require(1212) /* getSystemLocale */.t["4WuFRE"]);
        } else if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === joinability) {
          const intl6 = require(1212) /* getSystemLocale */.intl;
          stringResult2 = intl6.string(require(1212) /* getSystemLocale */.t.uGDCcw);
        } else if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === joinability) {
          const intl5 = require(1212) /* getSystemLocale */.intl;
          stringResult2 = intl5.string(require(1212) /* getSystemLocale */.t.UXoQTp);
        } else if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.CHANNEL_FULL === joinability) {
          const intl4 = require(1212) /* getSystemLocale */.intl;
          stringResult2 = intl4.string(require(1212) /* getSystemLocale */.t.rZfiNq);
        } else if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION === joinability) {
          const intl3 = require(1212) /* getSystemLocale */.intl;
          stringResult2 = intl3.string(require(1212) /* getSystemLocale */.t.w5SAps);
        } else {
          const intl2 = require(1212) /* getSystemLocale */.intl;
          stringResult2 = intl2.string(require(1212) /* getSystemLocale */.t.Etp6uI);
        }
        obj1 = {};
        const merged2 = Object.assign(obj);
        obj1["disabled"] = true;
        obj1["tooltip"] = stringResult2;
        return obj1;
      }
    }
    return obj;
  }
}
let result = require("isActivityInTextSupportedForChannel").fileFinishedImporting("modules/messages/EmbeddedApplicationInstanceUtils.tsx");

export const EmbedStates = { ACTIVE: 0, [0]: "ACTIVE", ENDED: 1, [1]: "ENDED" };
export const useJoinOrStartButtonState = function useJoinOrStartButtonState(embeddedActivity) {
  embeddedActivity = embeddedActivity.embeddedActivity;
  const joinability = embeddedActivity.joinability;
  const currentEmbeddedActivity = embeddedActivity.currentEmbeddedActivity;
  const channel = embeddedActivity.channel;
  const items = [embeddedActivity, joinability, currentEmbeddedActivity, channel];
  return currentEmbeddedActivity.useMemo(() => channel({ embeddedActivity, joinability, currentEmbeddedActivity, channel }), items);
};
export { getJoinOrStartButtonState };
