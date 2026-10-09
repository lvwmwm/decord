// Module ID: 16933
// Function ID: 16934
// Name: useResourceChannels
// Dependencies: [2064, 6919, 558, 576, 573, 2]

// Module 16933 (useResourceChannels)
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6919 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useResourceChannels(arg0) {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore, ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let channel;
      const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0);
      return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStoresArray(first, tmp7);
}) : (function useResourceChannels(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildOnboardingHomeSettingsStore, ChannelStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStoresArray(items, () => {
    let channel;
    const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0);
    return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
  });
});
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default tmp2;
