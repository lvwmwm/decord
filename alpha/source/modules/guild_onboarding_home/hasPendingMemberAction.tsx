// Module ID: 8934
// Function ID: 8935
// Name: hasPendingMemberAction
// Dependencies: [5092, 5155, 5114, 7017, 8935, 1072, 5161, 7020, 1403, 2]
// Exports: hasPendingMemberAction

// Module 8934 (hasPendingMemberAction)
import Constants from "Constants" /* 1072 */;
import FlagUtilsAll from "FlagUtils" /* 1403 */;
import GuildMemberConstants from "GuildMemberConstants" /* 5161 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7020 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5114 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7017 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8935 */;
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
