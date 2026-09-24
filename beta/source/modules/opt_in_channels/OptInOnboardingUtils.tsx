// Module ID: 11711
// Function ID: 11712
// Name: OptInOnboardingUtils
// Dependencies: [1224, 2100, 2109, 4971, 4418, 7814, 1389, 7392, 7384, 1190, 2]
// Exports: hasClearedGuildOnboardingNotice, hasNotSetUpChannelOptIn, toggleShowAllChannels

// Module 11711 (OptInOnboardingUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import FlagUtils from "FlagUtils" /* 1389 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7384 */;
import isOptInEnabled from "isOptInEnabled" /* 7814 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 2100 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4971 */;

require = fn;
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
  const channels = GuildChannelStore.getChannels(id);
  const items = [...channels[closure_1_5]];
  const found = items.filter((channel) => {
    channel = channel.channel;
    const isThreadResult = channel.isThread();
    let tmp2 = !isThreadResult;
    if (!isThreadResult) {
      tmp2 = !exclude.has(channel.id);
    }
    return tmp2;
  });
  const mapped = found.map((channel) => channel.channel.id);
  const item = include.forEach((item) => mapped.push(item));
  const obj2 = GuildOnboardingActionCreatorsDefault;
  const result = obj2.onboardExistingMember(id, new Set(mapped));
}
let GuildChannelStore = fn(2100);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_4, GUILD_VOCAL_CHANNELS_KEY: hasOwnProperty } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const GuildMemberFlags = fn(4418).GuildMemberFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/OptInOnboardingUtils.tsx");

export const hasNotSetUpChannelOptIn = function hasNotSetUpChannelOptIn(guildId) {
  const result = isOptInEnabled.isOptInEnabledForGuild(guildId);
  const selfMember = GuildMemberStore.getSelfMember(guildId);
  let num;
  if (selfMember != null) {
    num = selfMember.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmpResult = FlagUtils;
  let tmp7 = !result;
  const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
  if (!result) {
    tmp7 = !hasFlagResult;
  }
  if (tmp7) {
    tmp7 = !tmp6;
  }
  return tmp7;
};
export const toggleShowAllChannels = function toggleShowAllChannels(id) {
  const result = isOptInEnabled.isOptInEnabledForGuild(id);
  const selfMember = GuildMemberStore.getSelfMember(id);
  let num;
  if (selfMember != null) {
    num = selfMember.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmpResult = FlagUtils;
  let tmp7 = !result;
  const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
  if (!result) {
    tmp7 = !hasFlagResult;
  }
  if (tmp7) {
    tmp7 = !tmp6;
  }
  if (tmp7) {
    optIntoAllChannelsForExistingMember(id);
  } else {
    const result1 = tmp(7814).isOptInEnabledForGuild(id);
    const tmpResult3 = tmp(7814);
    tmp(7392).setGuildOptIn(id, !result1);
    const tmpResult4 = tmp(7392);
  }
};
export { optIntoAllChannelsForExistingMember };
export const hasClearedGuildOnboardingNotice = function hasClearedGuildOnboardingNotice(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = UserSettingsProtoStore;
  }
  let hasFlagResult = null != arg0;
  if (hasFlagResult) {
    const guilds = tmp.settings.guilds;
    let num;
    if (guilds != null) {
      if (guilds.guilds[arg0] != null) {
        num = tmp5.guildOnboardingProgress;
      }
    }
    if (num == null) {
      num = 0;
    }
    hasFlagResult = FlagUtils.hasFlag(num, preloaded_user_settings.GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
  }
  return hasFlagResult;
};
