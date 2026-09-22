// Module ID: 11479
// Function ID: 11480
// Name: useIsSelectedResourceChannel
// Dependencies: [7383, 1957, 2011, 1074, 1964, 563, 1384, 11480, 7325, 2]
// Exports: default

// Module 11479 (useIsSelectedResourceChannel)
import FlagUtils from "FlagUtils" /* 1384 */;
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel" /* 11480 */;
import ChannelSectionStore from "ChannelSectionStore" /* 7383 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

const require = globalThis.__r;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = fn(1964).ChannelFlags;
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
