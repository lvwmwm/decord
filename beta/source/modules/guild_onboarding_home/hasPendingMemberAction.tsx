// Module ID: 8339
// Function ID: 8340
// Name: hasPendingMemberAction
// Dependencies: [4863, 4926, 4885, 7398, 8340, 1072, 4932, 7401, 1396, 2]
// Exports: hasPendingMemberAction

// Module 8339 (hasPendingMemberAction)
import Constants from "Constants" /* 1072 */;
import FlagUtilsAll from "FlagUtils" /* 1396 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4932 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7401 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildStore from "GuildStore" /* 4885 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7398 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8340 */;
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
