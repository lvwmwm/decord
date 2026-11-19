// Module ID: 8391
// Function ID: 8392
// Name: hasPendingMemberAction
// Dependencies: [4641, 4704, 4663, 6563, 8392, 1072, 4710, 6566, 1406, 2]
// Exports: hasPendingMemberAction

// Module 8391 (hasPendingMemberAction)
import Constants from "Constants" /* 1072 */;
import FlagUtilsAll from "FlagUtils" /* 1406 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4710 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 6566 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import GuildMemberStore from "GuildMemberStore" /* 4704 */;
import GuildStore from "GuildStore" /* 4663 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6563 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8392 */;
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
