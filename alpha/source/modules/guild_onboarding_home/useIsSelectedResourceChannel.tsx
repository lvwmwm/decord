// Module ID: 11605
// Function ID: 11606
// Name: useIsSelectedResourceChannel
// Dependencies: [7522, 2041, 2095, 1074, 2048, 563, 1385, 11606, 7467, 2]
// Exports: default

// Module 11605 (useIsSelectedResourceChannel)
import FlagUtils from "FlagUtils" /* 1385 */;
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel" /* 11606 */;
import ChannelSectionStore from "ChannelSectionStore" /* 7522 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;

const require = globalThis.__r;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = fn(2048).ChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default function useIsSelectedResourceChannel(arg0) {
  _require = arg0;
  const items = [ChannelStore, SelectedChannelStore, ChannelSectionStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null != channel) {
      if (obj.hasFlag(channel.flags, ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
        if (isSelectedFromHomeChannelDefault(channel, SelectedChannelStore, ChannelSectionStore)) {
          return channel.guild_id;
        }
      }
      obj = FlagUtils;
    }
  });
  let obj = require("useStateFromStores");
  let tmp2 = stateFromStores;
  if (stateFromStores == null) {
    tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = require("OnboardingHomeUtils");
  return null != stateFromStores && require("OnboardingHomeUtils").useCanSeeOnboardingHome(tmp2);
};
