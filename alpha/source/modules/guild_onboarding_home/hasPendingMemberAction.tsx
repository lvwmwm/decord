// Module ID: 8244
// Function ID: 8245
// Name: hasPendingMemberAction
// Dependencies: [4800, 4860, 4822, 7271, 8245, 1087, 4866, 7273, 1405, 2]
// Exports: hasPendingMemberAction

// Module 8244 (hasPendingMemberAction)
import Constants from "Constants" /* 1087 */;
import FlagUtilsAll from "FlagUtils" /* 1405 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4866 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7273 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import GuildMemberStore from "GuildMemberStore" /* 4860 */;
import GuildStore from "GuildStore" /* 4822 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7271 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8245 */;
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
