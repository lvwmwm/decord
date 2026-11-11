// Module ID: 19211
// Function ID: 19212
// Name: useResourceChannels
// Dependencies: [5092, 7017, 563, 2]
// Exports: default

// Module 19211 (useResourceChannels)
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default function useResourceChannels(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildOnboardingHomeSettingsStore, ChannelStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStoresArray(items, () => {
    let channel;
    const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0);
    return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
  });
};
