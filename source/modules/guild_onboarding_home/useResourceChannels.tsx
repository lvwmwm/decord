// Module ID: 15666
// Function ID: 15667
// Name: useResourceChannels
// Dependencies: [1372, 4505, 647, 2]
// Exports: default

// Module 15666 (useResourceChannels)
import ensureGuildLoaded from "ensureGuildLoaded";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default function useResourceChannels(arg0) {
  const _require = arg0;
  const items = [handleSettingsLoadSuccess, ensureGuildLoaded];
  return _require(647).useStateFromStoresArray(items, () => {
    const resourceChannels = outer1_3.getResourceChannels(closure_0);
    return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
  });
};
