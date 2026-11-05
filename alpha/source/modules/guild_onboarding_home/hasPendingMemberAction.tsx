// Module ID: 8484
// Function ID: 8485
// Name: hasPendingMemberAction
// Dependencies: [4992, 5055, 5014, 7540, 8485, 1072, 5061, 7543, 1398, 2]
// Exports: hasPendingMemberAction

// Module 8484 (hasPendingMemberAction)
import Constants from "Constants" /* 1072 */;
import FlagUtilsAll from "FlagUtils" /* 1398 */;
import GuildMemberConstants from "GuildMemberConstants" /* 5061 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7543 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import GuildMemberStore from "GuildMemberStore" /* 5055 */;
import GuildStore from "GuildStore" /* 5014 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7540 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8485 */;
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
