// Module ID: 11766
// Function ID: 11767
// Name: useIsSelectedResourceChannel
// Dependencies: [6640, 4762, 4816, 1071, 4769, 563, 1404, 11767, 6683, 2]
// Exports: default

// Module 11766 (useIsSelectedResourceChannel)
import Constants from "Constants" /* 1071 */;
import FlagUtils from "FlagUtils" /* 1404 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel" /* 11767 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6640 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
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
