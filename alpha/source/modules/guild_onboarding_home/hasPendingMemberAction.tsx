// Module ID: 8332
// Function ID: 8333
// Name: hasPendingMemberAction
// Dependencies: [4856, 4916, 4878, 7362, 8333, 1084, 4922, 7364, 1402, 2]
// Exports: hasPendingMemberAction

// Module 8332 (hasPendingMemberAction)
import Constants from "Constants" /* 1084 */;
import FlagUtilsAll from "FlagUtils" /* 1402 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4922 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7364 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildMemberStore from "GuildMemberStore" /* 4916 */;
import GuildStore from "GuildStore" /* 4878 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7362 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8333 */;
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
