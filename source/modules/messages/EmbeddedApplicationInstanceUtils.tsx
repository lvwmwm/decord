// Module ID: 12187
// Function ID: 93673
// Name: getJoinOrStartButtonState
// Dependencies: []
// Exports: useJoinOrStartButtonState

// Module 12187 (getJoinOrStartButtonState)
function getJoinOrStartButtonState(channel) {
  let currentEmbeddedActivity;
  let embeddedActivity;
  let joinability;
  ({ embeddedActivity, joinability, currentEmbeddedActivity } = channel);
  let obj = { disabled: false, isJoinAction: !tmp };
  const intl = arg1(dependencyMap[1]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[1]).t;
  if (null == embeddedActivity) {
    let stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.sqe0hj);
  }
  obj.text = stringResult;
  obj.tooltip = undefined;
  let obj1 = arg1(dependencyMap[2]);
  const result = obj1.isActivitiesInTextEnabled(channel.channel);
  if (null != embeddedActivity) {
    if (null != currentEmbeddedActivity) {
      if (embeddedActivity.launchId === currentEmbeddedActivity.launchId) {
        obj = {};
        const merged = Object.assign(obj);
        obj["disabled"] = true;
        const intl10 = arg1(dependencyMap[1]).intl;
        obj["text"] = intl10.string(arg1(dependencyMap[1]).t.DPfdsq);
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
      const intl9 = arg1(dependencyMap[1]).intl;
      stringResult1 = intl9.string(arg1(dependencyMap[1]).t.f41E1g);
    }
    obj["tooltip"] = stringResult1;
    return obj;
  } else {
    if (null != joinability) {
      if (joinability !== arg1(dependencyMap[3]).EmbeddedActivityJoinability.CAN_JOIN) {
        if (arg1(dependencyMap[3]).EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === joinability) {
          const intl8 = arg1(dependencyMap[1]).intl;
          let stringResult2 = intl8.string(arg1(dependencyMap[1]).t.hHGrWz);
        } else if (arg1(dependencyMap[3]).EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === joinability) {
          const intl7 = arg1(dependencyMap[1]).intl;
          stringResult2 = intl7.string(arg1(dependencyMap[1]).t.4WuFRE);
        } else if (arg1(dependencyMap[3]).EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === joinability) {
          const intl6 = arg1(dependencyMap[1]).intl;
          stringResult2 = intl6.string(arg1(dependencyMap[1]).t.uGDCcw);
        } else if (arg1(dependencyMap[3]).EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === joinability) {
          const intl5 = arg1(dependencyMap[1]).intl;
          stringResult2 = intl5.string(arg1(dependencyMap[1]).t.UXoQTp);
        } else if (arg1(dependencyMap[3]).EmbeddedActivityJoinability.CHANNEL_FULL === joinability) {
          const intl4 = arg1(dependencyMap[1]).intl;
          stringResult2 = intl4.string(arg1(dependencyMap[1]).t.rZfiNq);
        } else if (arg1(dependencyMap[3]).EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION === joinability) {
          const intl3 = arg1(dependencyMap[1]).intl;
          stringResult2 = intl3.string(arg1(dependencyMap[1]).t.w5SAps);
        } else {
          const intl2 = arg1(dependencyMap[1]).intl;
          stringResult2 = intl2.string(arg1(dependencyMap[1]).t.Etp6uI);
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
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/messages/EmbeddedApplicationInstanceUtils.tsx");

export const EmbedStates = { ACTIVE: 0, [0]: "ACTIVE", ENDED: 1, [1]: "ENDED" };
export const useJoinOrStartButtonState = function useJoinOrStartButtonState(embeddedActivity) {
  embeddedActivity = embeddedActivity.embeddedActivity;
  const arg1 = embeddedActivity;
  const joinability = embeddedActivity.joinability;
  const dependencyMap = joinability;
  const currentEmbeddedActivity = embeddedActivity.currentEmbeddedActivity;
  const React = currentEmbeddedActivity;
  const channel = embeddedActivity.channel;
  const getJoinOrStartButtonState = channel;
  const items = [embeddedActivity, joinability, currentEmbeddedActivity, channel];
  return React.useMemo(() => channel({ embeddedActivity, joinability, currentEmbeddedActivity, channel }), items);
};
export { getJoinOrStartButtonState };
