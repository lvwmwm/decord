// Module ID: 8286
// Function ID: 8287
// Name: hasPendingMemberAction
// Dependencies: [4821, 4881, 4843, 7310, 8287, 1087, 4887, 7312, 1405, 2]
// Exports: hasPendingMemberAction

// Module 8286 (hasPendingMemberAction)
import Constants from "Constants" /* 1087 */;
import FlagUtilsAll from "FlagUtils" /* 1405 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4887 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7312 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GuildMemberStore from "GuildMemberStore" /* 4881 */;
import GuildStore from "GuildStore" /* 4843 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7310 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8287 */;
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
