// Module ID: 12799
// Function ID: 12800
// Name: EmbeddedApplicationInstanceUtils
// Dependencies: [19, 1115, 8789, 8825, 2]
// Exports: useJoinOrStartButtonState

// Module 12799 (EmbeddedApplicationInstanceUtils)
import intl11 from "intl" /* 1115 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function getJoinOrStartButtonState(channel) {
  let currentEmbeddedActivity;
  let embeddedActivity;
  let intl10;
  let joinability;
  let stringResult;
  let stringResult1;
  let tmp6;
  ({ embeddedActivity, joinability, currentEmbeddedActivity } = channel);
  const obj = { disabled: false, isJoinAction: null != embeddedActivity, text: stringResult, tooltip: "Array" };
  channel = channel.channel;
  const intl = intl11.intl;
  const string = intl.string;
  const t = intl11.t;
  if (null == embeddedActivity) {
    stringResult = string(t.RscU7I);
    tmp6 = tmp2;
  } else {
    stringResult = string(t.sqe0hj);
    tmp6 = tmp2;
  }
  const tmp6Result = tmp6(8789);
  const result = tmp6Result.isActivitiesInTextEnabled(channel);
  if (null != embeddedActivity) {
    if (null != currentEmbeddedActivity) {
      if (embeddedActivity.launchId === currentEmbeddedActivity.launchId) {
        const obj2 = { disabled: true, text: intl10.string(tmp6(1115).t.DPfdsq), tooltip: undefined };
        const merged = Object.assign(obj);
        intl10 = tmp6(1115).intl;
        return obj2;
      }
    }
  }
  if (null == embeddedActivity) {
    const obj3 = { disabled: !result, tooltip: stringResult1 };
    const merged1 = Object.assign(obj);
    stringResult1 = undefined;
    if (!result) {
      const intl9 = tmp6(1115).intl;
      stringResult1 = intl9.string(tmp6(1115).t.f41E1g);
    }
    return obj3;
  } else {
    if (null != joinability) {
      if (joinability !== tmp6(8825).EmbeddedActivityJoinability.CAN_JOIN) {
        let stringResult2;
        if (tmp6(8825).EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === joinability) {
          const intl8 = tmp6(1115).intl;
          stringResult2 = intl8.string(tmp6(1115).t.hHGrWz);
        } else if (tmp6(8825).EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === joinability) {
          const intl7 = tmp6(1115).intl;
          stringResult2 = intl7.string(tmp6(1115).t["4WuFRE"]);
        } else if (tmp6(8825).EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === joinability) {
          const intl6 = tmp6(1115).intl;
          stringResult2 = intl6.string(tmp6(1115).t.uGDCcw);
        } else if (tmp6(8825).EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === joinability) {
          const intl5 = tmp6(1115).intl;
          stringResult2 = intl5.string(tmp6(1115).t.UXoQTp);
        } else if (tmp6(8825).EmbeddedActivityJoinability.CHANNEL_FULL === joinability) {
          const intl4 = tmp6(1115).intl;
          stringResult2 = intl4.string(tmp6(1115).t.rZfiNq);
        } else if (tmp6(8825).EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION === joinability) {
          const intl3 = tmp6(1115).intl;
          stringResult2 = intl3.string(tmp6(1115).t.w5SAps);
        } else {
          const intl2 = tmp6(1115).intl;
          stringResult2 = intl2.string(tmp6(1115).t.Etp6uI);
        }
        const obj4 = { disabled: true, tooltip: stringResult2 };
        const merged2 = Object.assign(obj);
        return obj4;
      }
    }
    return obj;
  }
}
let result = size.fileFinishedImporting("modules/messages/EmbeddedApplicationInstanceUtils.tsx");

export const EmbedStates = { ACTIVE: 0, [0]: "ACTIVE", ENDED: 1, [1]: "ENDED" };
export const useJoinOrStartButtonState = function useJoinOrStartButtonState(embeddedActivity) {
  embeddedActivity = embeddedActivity.embeddedActivity;
  const joinability = embeddedActivity.joinability;
  const currentEmbeddedActivity = embeddedActivity.currentEmbeddedActivity;
  const channel = embeddedActivity.channel;
  const items = [embeddedActivity, joinability, currentEmbeddedActivity, channel];
  return currentEmbeddedActivity.useMemo(() => {
    const obj = { embeddedActivity, joinability, currentEmbeddedActivity, channel };
    return getJoinOrStartButtonState(obj);
  }, items);
};
export { getJoinOrStartButtonState };
