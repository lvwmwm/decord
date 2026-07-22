// Module ID: 10544
// Function ID: 82384
// Name: useIsPrivateChannelWithEnabledActivities
// Dependencies: []
// Exports: default, isPrivateChannelWithEnabledActivities

// Module 10544 (useIsPrivateChannelWithEnabledActivities)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx");

export default function useIsPrivateChannelWithEnabledActivities(arg0) {
  const arg1 = arg0;
  let isPrivateResult;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[1]).useStateFromStores(items, () => channel.getChannel(arg0));
  if (null != stateFromStores) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  return null != isPrivateResult && isPrivateResult;
};
export const isPrivateChannelWithEnabledActivities = function isPrivateChannelWithEnabledActivities(channelId) {
  if (null == channelId) {
    return false;
  } else {
    const channel = channel.getChannel(channelId);
    let isPrivateResult;
    if (null != channel) {
      isPrivateResult = channel.isPrivate();
    }
    return null != isPrivateResult && isPrivateResult;
  }
};
