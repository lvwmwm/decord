// Module ID: 15333
// Function ID: 116891
// Name: useResourceChannels
// Dependencies: [1348, 4333, 624, 2]
// Exports: default

// Module 15333 (useResourceChannels)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default function useResourceChannels(arg0) {
  const _require = arg0;
  const items = [closure_3, _isNativeReflectConstruct];
  return _require(624).useStateFromStoresArray(items, () => {
    const resourceChannels = outer1_3.getResourceChannels(closure_0);
    return resourceChannels.filter((channelId) => null != outer2_2.getChannel(channelId.channelId));
  });
};
