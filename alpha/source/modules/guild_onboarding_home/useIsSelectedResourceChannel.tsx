// Module ID: 11214
// Function ID: 11215
// Name: useIsSelectedResourceChannel
// Dependencies: [6856, 4858, 4912, 1072, 4865, 563, 1397, 11215, 7391, 2]
// Exports: default

// Module 11214 (useIsSelectedResourceChannel)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1397 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel" /* 11215 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6856 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default function useIsSelectedResourceChannel(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [ChannelStore, SelectedChannelStore, ChannelSectionStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null != channel) {
      const obj = FlagUtils;
      if (obj.hasFlag(channel.flags, ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
        if (isSelectedFromHomeChannelDefault(channel, SelectedChannelStore, ChannelSectionStore)) {
          return channel.guild_id;
        }
      }
    }
  });
  let tmp3 = stateFromStores;
  const useCanSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome;
  const tmp2 = require("OnboardingHomeUtils");
  if (stateFromStores == null) {
    tmp3 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const tmp4 = null != stateFromStores && useCanSeeOnboardingHome(tmp3);
  return tmp4;
};
