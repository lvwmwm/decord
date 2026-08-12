// Module ID: 4544
// Function ID: 4545
// Name: hasPendingMemberAction
// Dependencies: [1391, 1990, 1910, 4545, 4546, 676, 3977, 4547, 1403, 2]
// Exports: hasPendingMemberAction

// Module 4544 (hasPendingMemberAction)
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
    hasItem = importDefault(4547)(guild);
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
    hasItem = !importAll(1403).hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
    const obj = importAll(1403);
  }
  if (hasItem) {
    hasItem = handleSettingsLoadSuccess.hasMemberAction(guild.id, channel.id);
  }
  if (hasItem) {
    hasItem = !set.hasCompletedActionForChannel(guild.id, channel.id);
  }
  return hasItem;
};
