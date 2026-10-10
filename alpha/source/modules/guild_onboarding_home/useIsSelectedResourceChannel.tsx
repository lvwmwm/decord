// Module ID: 10364
// Function ID: 10365
// Name: useIsSelectedResourceChannel
// Dependencies: [6061, 2065, 2116, 1085, 2072, 558, 576, 1403, 10365, 573, 6924, 2]

// Module 10364 (useIsSelectedResourceChannel)
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel" /* 10365 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6061 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = ChannelConstants.ChannelFlags;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsSelectedResourceChannel(arg0) {
  let closure_0;
  let first;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, , ];
    items[1] = SelectedChannelStore;
    items[2] = ChannelSectionStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const channel = ChannelStore.getChannel(closure_0);
      if (null != channel) {
        const obj = FlagUtils;
        if (obj.hasFlag(channel.flags, ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
          if (isSelectedFromHomeChannelDefault(channel, SelectedChannelStore, ChannelSectionStore)) {
            return channel.guild_id;
          }
        }
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  let tmp11 = stateFromStores;
  const useCanSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome;
  require("OnboardingHomeUtils");
  if (stateFromStores == null) {
    tmp11 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const tmp12 = null != stateFromStores && useCanSeeOnboardingHome(tmp11);
  return tmp12;
}) : (function useIsSelectedResourceChannel(arg0) {
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
});
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default tmp2;
