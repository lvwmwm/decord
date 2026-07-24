// Module ID: 10008
// Function ID: 77267
// Name: hasNotSetUpChannelOptIn
// Dependencies: [1316, 1907, 1917, 4325, 3746, 6767, 1360, 5072, 5063, 1282, 2]
// Exports: hasClearedGuildOnboardingNotice, toggleShowAllChannels

// Module 10008 (hasNotSetUpChannelOptIn)
import closure_3 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { GuildMemberFlags } from "GuildMemberFlags";

let closure_4;
let closure_5;
const require = arg1;
function hasNotSetUpChannelOptIn(guildId) {
  const result = require(6767) /* useOptInEnabledForGuild */.isOptInEnabledForGuild(guildId);
  selfMember = selfMember.getSelfMember(guildId);
  let flags;
  if (null != selfMember) {
    flags = selfMember.flags;
  }
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  const obj = require(6767) /* useOptInEnabledForGuild */;
  const obj2 = require(1360) /* hasFlag */;
  let tmp6 = !result;
  const hasFlagResult = require(1360) /* hasFlag */.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
  if (tmp6) {
    tmp6 = !hasFlagResult;
  }
  if (tmp6) {
    tmp6 = !tmp5;
  }
  return tmp6;
}
function optIntoAllChannelsForExistingMember(id, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let include = obj.include;
  if (include === undefined) {
    const _Set = Set;
    include = new Set();
  }
  let exclude = obj.exclude;
  if (exclude === undefined) {
    const _Set2 = Set;
    exclude = new Set();
  }
  let mapped;
  channels = channels.getChannels(id);
  const items = [...channels[closure_5]];
  const found = items.filter((channel) => {
    channel = channel.channel;
    let tmp = !channel.isThread();
    if (tmp) {
      tmp = !exclude.has(channel.id);
    }
    return tmp;
  });
  mapped = found.map((channel) => channel.channel.id);
  const item = include.forEach((arg0) => mapped.push(arg0));
  const obj2 = mapped(5063);
  const result = obj2.onboardExistingMember(id, new Set(mapped));
}
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_4, GUILD_VOCAL_CHANNELS_KEY: closure_5 } = _isNativeReflectConstruct);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/opt_in_channels/OptInOnboardingUtils.tsx");

export { hasNotSetUpChannelOptIn };
export const toggleShowAllChannels = function toggleShowAllChannels(id) {
  if (hasNotSetUpChannelOptIn(id)) {
    optIntoAllChannelsForExistingMember(id);
  } else {
    const result = require(6767) /* useOptInEnabledForGuild */.isOptInEnabledForGuild(id);
    const obj = require(6767) /* useOptInEnabledForGuild */;
    require(5072) /* _persistOptInChannelUpdates2 */.setGuildOptIn(id, !result);
    const obj2 = require(5072) /* _persistOptInChannelUpdates2 */;
  }
};
export { optIntoAllChannelsForExistingMember };
export const hasClearedGuildOnboardingNotice = function hasClearedGuildOnboardingNotice(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let hasFlagResult = null != arg0;
  if (hasFlagResult) {
    const guilds = tmp.settings.guilds;
    let prop;
    if (null != guilds) {
      if (null != guilds.guilds[arg0]) {
        prop = tmp6.guildOnboardingProgress;
      }
    }
    let num2 = 0;
    if (null != prop) {
      num2 = prop;
    }
    hasFlagResult = require(1360) /* hasFlag */.hasFlag(num2, require(1282) /* _callSuper */.GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
    const obj = require(1360) /* hasFlag */;
  }
  return hasFlagResult;
};
