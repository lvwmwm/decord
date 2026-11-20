// Module ID: 8390
// Function ID: 8391
// Name: hasPendingMemberAction
// Dependencies: [4643, 4706, 4665, 6565, 8391, 1071, 4712, 6568, 1404, 2]
// Exports: hasPendingMemberAction

// Module 8390 (hasPendingMemberAction)
import Constants from "Constants" /* 1071 */;
import FlagUtilsAll from "FlagUtils" /* 1404 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4712 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 6568 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import GuildMemberStore from "GuildMemberStore" /* 4706 */;
import GuildStore from "GuildStore" /* 4665 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6565 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8391 */;
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
