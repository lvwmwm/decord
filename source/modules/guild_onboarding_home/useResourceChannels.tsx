// Module ID: 16060
// Function ID: 16061
// Name: useResourceChannels
// Dependencies: [1391, 4660, 647, 2]
// Exports: default

// Module 16060 (useResourceChannels)
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "handleSettingsLoadSuccess" /* 4660 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default function useResourceChannels(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _require(647).useStateFromStoresArray(items, () => {
    const resourceChannels = closure_1_3.getResourceChannels(closure_0);
    return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
  });
};
