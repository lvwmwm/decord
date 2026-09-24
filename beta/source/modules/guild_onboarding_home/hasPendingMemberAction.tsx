// Module ID: 4976
// Function ID: 4977
// Name: hasPendingMemberAction
// Dependencies: [2045, 2109, 2067, 4977, 4978, 1078, 4418, 4979, 1389, 2]
// Exports: hasPendingMemberAction

// Module 4976 (hasPendingMemberAction)
import FlagUtilsAll from "FlagUtils" /* 1389 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 4979 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4977 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 4978 */;

const GuildFeatures = fn(1078).GuildFeatures;
const GuildMemberFlags = fn(4418).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

export const hasPendingMemberAction = function hasPendingMemberAction(guild_id, selectedChannelId) {
  guild = GuildStore.getGuild(guild_id);
  const channel = ChannelStore.getChannel(selectedChannelId);
  let hasItem = null != guild && null != channel;
  if (hasItem) {
    hasItem = guildHasOnboardingHomeDefault(guild);
  }
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.GUILD_SERVER_GUIDE);
  }
  if (hasItem) {
    const selfMember = GuildMemberStore.getSelfMember(guild.id);
    let num;
    if (selfMember != null) {
      num = selfMember.flags;
    }
    if (num == null) {
      num = 0;
    }
    hasItem = !FlagUtilsAll.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
  }
  if (hasItem) {
    hasItem = GuildOnboardingHomeSettingsStore.hasMemberAction(guild.id, channel.id);
  }
  if (hasItem) {
    hasItem = !GuildOnboardingMemberActionStore.hasCompletedActionForChannel(guild.id, channel.id);
  }
  return hasItem;
};
