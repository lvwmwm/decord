// Module ID: 11935
// Function ID: 11936
// Name: useIsSelectedResourceChannel
// Dependencies: [6973, 5092, 5146, 1072, 5099, 563, 1403, 11936, 7016, 2]
// Exports: default

// Module 11935 (useIsSelectedResourceChannel)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import ChannelConstants from "ChannelConstants" /* 5099 */;
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel" /* 11936 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6973 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
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
