// Module ID: 8354
// Function ID: 8355
// Name: hasPendingMemberAction
// Dependencies: [4857, 4917, 4879, 7385, 8355, 1084, 4923, 7387, 1402, 2]
// Exports: hasPendingMemberAction

// Module 8354 (hasPendingMemberAction)
import Constants from "Constants" /* 1084 */;
import FlagUtilsAll from "FlagUtils" /* 1402 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4923 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7387 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildMemberStore from "GuildMemberStore" /* 4917 */;
import GuildStore from "GuildStore" /* 4879 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7385 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8355 */;
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
