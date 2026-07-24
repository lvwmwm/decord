// Module ID: 10417
// Function ID: 80293
// Name: useIsSelectedResourceChannel
// Dependencies: [5659, 1348, 1906, 653, 1355, 624, 1360, 10418, 5605, 2]
// Exports: default

// Module 10417 (useIsSelectedResourceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import { ChannelFlags } from "set";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default function useIsSelectedResourceChannel(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_5, _isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(callback);
    if (null != channel) {
      if (obj.hasFlag(channel.flags, outer1_7.IS_GUILD_RESOURCE_CHANNEL)) {
        if (outer1_1(outer1_2[7])(channel, outer1_5, outer1_3)) {
          return channel.guild_id;
        }
      }
      obj = callback(outer1_2[6]);
    }
  });
  let obj = _require(624);
  let tmp2 = stateFromStores;
  if (null == stateFromStores) {
    tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = _require(5605);
  return null != stateFromStores && _require(5605).useCanSeeOnboardingHome(tmp2);
};
