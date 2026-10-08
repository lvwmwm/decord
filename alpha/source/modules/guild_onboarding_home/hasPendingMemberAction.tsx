// Module ID: 7887
// Function ID: 7888
// Name: hasPendingMemberAction
// Dependencies: [2063, 2124, 2086, 6912, 7888, 1085, 4693, 6914, 1402, 2]
// Exports: hasPendingMemberAction

// Module 7887 (hasPendingMemberAction)
import Constants from "Constants" /* 1085 */;
import FlagUtilsAll from "FlagUtils" /* 1402 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4693 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 6914 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6912 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 7888 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

export const hasPendingMemberAction = function hasPendingMemberAction(guild_id, selectedChannelId) {
  const guild = GuildStore.getGuild(guild_id);
  const channel = ChannelStore.getChannel(selectedChannelId);
  let hasItem = null != guild && null != channel && guildHasOnboardingHomeDefault(guild);
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.GUILD_SERVER_GUIDE);
  }
  if (hasItem) {
    const hasFlag = FlagUtilsAll.hasFlag;
    FlagUtilsAll;
    const selfMember = GuildMemberStore.getSelfMember(guild.id);
    let num;
    if (selfMember != null) {
      num = selfMember.flags;
    }
    if (num == null) {
      num = 0;
    }
    hasItem = !hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
  }
  if (hasItem) {
    hasItem = GuildOnboardingHomeSettingsStore.hasMemberAction(guild.id, channel.id);
  }
  if (hasItem) {
    hasItem = !GuildOnboardingMemberActionStore.hasCompletedActionForChannel(guild.id, channel.id);
  }
  return hasItem;
};
