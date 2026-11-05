// Module ID: 18944
// Function ID: 18945
// Name: useResourceChannels
// Dependencies: [4992, 7540, 563, 2]
// Exports: default

// Module 18944 (useResourceChannels)
import ChannelStore from "ChannelStore" /* 4992 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7540 */;
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
