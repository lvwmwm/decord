// Module ID: 8135
// Function ID: 8136
// Name: hasPendingMemberAction
// Dependencies: [2068, 2128, 2090, 7147, 8136, 1087, 4795, 7149, 1405, 2]
// Exports: hasPendingMemberAction

// Module 8135 (hasPendingMemberAction)
import Constants from "Constants" /* 1087 */;
import FlagUtilsAll from "FlagUtils" /* 1405 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4795 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7149 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildMemberStore from "GuildMemberStore" /* 2128 */;
import GuildStore from "GuildStore" /* 2090 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7147 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8136 */;
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
