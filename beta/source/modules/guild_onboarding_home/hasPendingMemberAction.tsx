// Module ID: 8510
// Function ID: 8511
// Name: hasPendingMemberAction
// Dependencies: [4762, 4825, 4784, 6684, 8511, 1071, 4831, 6687, 1404, 2]
// Exports: hasPendingMemberAction

// Module 8510 (hasPendingMemberAction)
import Constants from "Constants" /* 1071 */;
import FlagUtilsAll from "FlagUtils" /* 1404 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4831 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 6687 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import GuildMemberStore from "GuildMemberStore" /* 4825 */;
import GuildStore from "GuildStore" /* 4784 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6684 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8511 */;
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
