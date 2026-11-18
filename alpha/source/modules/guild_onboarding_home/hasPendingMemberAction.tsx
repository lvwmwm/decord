// Module ID: 8422
// Function ID: 8423
// Name: hasPendingMemberAction
// Dependencies: [4672, 4735, 4694, 6592, 8423, 1072, 4741, 6595, 1406, 2]
// Exports: hasPendingMemberAction

// Module 8422 (hasPendingMemberAction)
import Constants from "Constants" /* 1072 */;
import FlagUtilsAll from "FlagUtils" /* 1406 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4741 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 6595 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import GuildMemberStore from "GuildMemberStore" /* 4735 */;
import GuildStore from "GuildStore" /* 4694 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6592 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8423 */;
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
