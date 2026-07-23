// Module ID: 10436
// Function ID: 80377
// Name: useShowChannelOptInNotice
// Dependencies: [4325, 653, 1355, 6767, 566, 5607, 2]
// Exports: default

// Module 10436 (useShowChannelOptInNotice)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NULL_STRING_GUILD_ID } from "ME";
import { ChannelFlags } from "set";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/opt_in_channels/useShowChannelOptInNotice.tsx");

export default function useShowChannelOptInNotice(getGuildId) {
  const _require = getGuildId;
  let guildId;
  if (null != getGuildId) {
    guildId = getGuildId.getGuildId();
  }
  let optInEnabledForGuild = _require(6767).useOptInEnabledForGuild(null != guildId ? getGuildId.guild_id : NULL_STRING_GUILD_ID);
  const obj = _require(6767);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let result = null != closure_0;
    if (result) {
      result = outer1_2.isChannelRecordOrParentOptedIn(closure_0);
    }
    return result;
  });
  const obj2 = _require(566);
  let guild_id;
  if (null != getGuildId) {
    guild_id = getGuildId.guild_id;
  }
  if (null == guild_id) {
    guild_id = NULL_STRING_GUILD_ID;
  }
  let canSeeOnboardingHome = _require(5607).useCanSeeOnboardingHome(guild_id);
  if (null == getGuildId) {
    return false;
  } else {
    if (canSeeOnboardingHome) {
      canSeeOnboardingHome = getGuildId.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !canSeeOnboardingHome;
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !stateFromStores;
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !getGuildId.isThread();
    }
    return optInEnabledForGuild;
  }
  const obj3 = _require(5607);
};
