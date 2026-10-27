// Module ID: 8298
// Function ID: 8299
// Name: hasPendingMemberAction
// Dependencies: [4824, 4884, 4846, 7327, 8299, 1084, 4890, 7329, 1402, 2]
// Exports: hasPendingMemberAction

// Module 8298 (hasPendingMemberAction)
import Constants from "Constants" /* 1084 */;
import FlagUtilsAll from "FlagUtils" /* 1402 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4890 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7329 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildMemberStore from "GuildMemberStore" /* 4884 */;
import GuildStore from "GuildStore" /* 4846 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7327 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8299 */;
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
