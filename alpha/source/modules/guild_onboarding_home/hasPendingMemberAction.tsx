// Module ID: 8331
// Function ID: 8332
// Name: hasPendingMemberAction
// Dependencies: [4858, 4921, 4880, 7392, 8332, 1072, 4927, 7395, 1397, 2]
// Exports: hasPendingMemberAction

// Module 8331 (hasPendingMemberAction)
import Constants from "Constants" /* 1072 */;
import FlagUtilsAll from "FlagUtils" /* 1397 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4927 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7395 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7392 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8332 */;
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
