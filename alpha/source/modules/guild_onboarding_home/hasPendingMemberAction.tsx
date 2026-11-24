// Module ID: 8031
// Function ID: 8032
// Name: hasPendingMemberAction
// Dependencies: [4766, 4829, 4788, 7455, 8032, 1071, 4835, 7458, 1404, 2]
// Exports: hasPendingMemberAction

// Module 8031 (hasPendingMemberAction)
import Constants from "Constants" /* 1071 */;
import FlagUtilsAll from "FlagUtils" /* 1404 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4835 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7458 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import GuildMemberStore from "GuildMemberStore" /* 4829 */;
import GuildStore from "GuildStore" /* 4788 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7455 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8032 */;
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
