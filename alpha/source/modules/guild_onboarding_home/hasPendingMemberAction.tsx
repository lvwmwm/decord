// Module ID: 8130
// Function ID: 8131
// Name: hasPendingMemberAction
// Dependencies: [4861, 4924, 4883, 7550, 8131, 1071, 4930, 7553, 1404, 2]
// Exports: hasPendingMemberAction

// Module 8130 (hasPendingMemberAction)
import Constants from "Constants" /* 1071 */;
import FlagUtilsAll from "FlagUtils" /* 1404 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4930 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7553 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildMemberStore from "GuildMemberStore" /* 4924 */;
import GuildStore from "GuildStore" /* 4883 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7550 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8131 */;
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
