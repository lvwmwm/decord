// Module ID: 7914
// Function ID: 7915
// Name: hasPendingMemberAction
// Dependencies: [2065, 2125, 2087, 6925, 7915, 1085, 4736, 6927, 1403, 2]
// Exports: hasPendingMemberAction

// Module 7914 (hasPendingMemberAction)
import Constants from "Constants" /* 1085 */;
import FlagUtilsAll from "FlagUtils" /* 1403 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4736 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 6927 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6925 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 7915 */;
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
