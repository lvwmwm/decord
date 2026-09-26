// Module ID: 11050
// Function ID: 11051
// Name: OptInOnboardingUtils
// Dependencies: [1220, 4467, 2108, 5017, 4455, 6955, 1385, 6534, 6526, 1186, 2]
// Exports: hasClearedGuildOnboardingNotice, hasNotSetUpChannelOptIn, toggleShowAllChannels

// Module 11050 (OptInOnboardingUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6526 */;
import isOptInEnabled from "isOptInEnabled" /* 6955 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4467 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;

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
let GuildChannelStore = fn(4467);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_4, GUILD_VOCAL_CHANNELS_KEY: hasOwnProperty } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const GuildMemberFlags = fn(4455).GuildMemberFlags;
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
    const result1 = tmp(6955).isOptInEnabledForGuild(id);
    const tmpResult3 = tmp(6955);
    tmp(6534).setGuildOptIn(id, !result1);
    const tmpResult4 = tmp(6534);
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
