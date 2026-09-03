// Module ID: 16397
// Function ID: 16398
// Name: useResourceChannels
// Dependencies: [1386, 4708, 644, 2]
// Exports: default

// Module 16397 (useResourceChannels)
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import closure_3 from "handleSettingsLoadSuccess" /* 4708 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default function useResourceChannels(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _require(644).useStateFromStoresArray(items, () => {
    const resourceChannels = closure_1_3.getResourceChannels(closure_0);
    return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
  });
};
