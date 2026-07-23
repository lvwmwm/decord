// Module ID: 10554
// Function ID: 82434
// Name: useIsPrivateChannelWithEnabledActivities
// Dependencies: [1348, 624, 2]
// Exports: default, isPrivateChannelWithEnabledActivities

// Module 10554 (useIsPrivateChannelWithEnabledActivities)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx");

export default function useIsPrivateChannelWithEnabledActivities(arg0) {
  const _require = arg0;
  let isPrivateResult;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_2.getChannel(closure_0));
  if (null != stateFromStores) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  return null != isPrivateResult && isPrivateResult;
};
export const isPrivateChannelWithEnabledActivities = function isPrivateChannelWithEnabledActivities(channelId) {
  if (null == channelId) {
    return false;
  } else {
    channel = channel.getChannel(channelId);
    let isPrivateResult;
    if (null != channel) {
      isPrivateResult = channel.isPrivate();
    }
    return null != isPrivateResult && isPrivateResult;
  }
};
