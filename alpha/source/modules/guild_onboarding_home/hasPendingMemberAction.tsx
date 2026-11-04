// Module ID: 8479
// Function ID: 8480
// Name: hasPendingMemberAction
// Dependencies: [4990, 5053, 5012, 7538, 8480, 1072, 5059, 7541, 1398, 2]
// Exports: hasPendingMemberAction

// Module 8479 (hasPendingMemberAction)
import Constants from "Constants" /* 1072 */;
import FlagUtilsAll from "FlagUtils" /* 1398 */;
import GuildMemberConstants from "GuildMemberConstants" /* 5059 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7541 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import GuildMemberStore from "GuildMemberStore" /* 5053 */;
import GuildStore from "GuildStore" /* 5012 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7538 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8480 */;
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
