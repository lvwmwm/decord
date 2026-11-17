// Module ID: 9011
// Function ID: 9012
// Name: hasPendingMemberAction
// Dependencies: [5159, 5222, 5181, 7088, 9012, 1072, 5228, 7091, 1406, 2]
// Exports: hasPendingMemberAction

// Module 9011 (hasPendingMemberAction)
import Constants from "Constants" /* 1072 */;
import FlagUtilsAll from "FlagUtils" /* 1406 */;
import GuildMemberConstants from "GuildMemberConstants" /* 5228 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7091 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import GuildMemberStore from "GuildMemberStore" /* 5222 */;
import GuildStore from "GuildStore" /* 5181 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7088 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 9012 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

export function hasPendingMemberAction(guild_id, selectedChannelId) {
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
}
