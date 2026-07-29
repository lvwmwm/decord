// Module ID: 4390
// Function ID: 4391
// Name: hasPendingMemberAction
// Dependencies: [1372, 1942, 1862, 4391, 4392, 676, 3805, 4393, 1384, 2]
// Exports: hasPendingMemberAction

// Module 4390 (hasPendingMemberAction)
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";
import set from "set";
import { GuildFeatures } from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";

const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

export const hasPendingMemberAction = function hasPendingMemberAction(guild_id, selectedChannelId) {
  guild = guild.getGuild(guild_id);
  channel = channel.getChannel(selectedChannelId);
  let hasItem = null != guild && null != channel;
  if (hasItem) {
    hasItem = importDefault(4393)(guild);
  }
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.GUILD_SERVER_GUIDE);
  }
  if (hasItem) {
    selfMember = selfMember.getSelfMember(guild.id);
    let num;
    if (selfMember != null) {
      num = selfMember.flags;
    }
    if (num == null) {
      num = 0;
    }
    hasItem = !importAll(1384).hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
    const obj = importAll(1384);
  }
  if (hasItem) {
    hasItem = handleSettingsLoadSuccess.hasMemberAction(guild.id, channel.id);
  }
  if (hasItem) {
    hasItem = !set.hasCompletedActionForChannel(guild.id, channel.id);
  }
  return hasItem;
};
