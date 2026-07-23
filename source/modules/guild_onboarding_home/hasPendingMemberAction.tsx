// Module ID: 4332
// Function ID: 38239
// Name: hasPendingMemberAction
// Dependencies: [1348, 1917, 1838, 4333, 4334, 653, 3746, 4335, 1360, 2]
// Exports: hasPendingMemberAction

// Module 4332 (hasPendingMemberAction)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

export const hasPendingMemberAction = function hasPendingMemberAction(guild_id, selectedChannelId) {
  guild = guild.getGuild(guild_id);
  channel = channel.getChannel(selectedChannelId);
  let hasItem = null != guild && null != channel;
  if (hasItem) {
    hasItem = importDefault(4335)(guild);
  }
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.GUILD_SERVER_GUIDE);
  }
  if (hasItem) {
    let flags;
    selfMember = selfMember.getSelfMember(guild.id);
    if (null != selfMember) {
      flags = selfMember.flags;
    }
    let num3 = 0;
    if (null != flags) {
      num3 = flags;
    }
    hasItem = !importAll(1360).hasFlag(num3, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
    const obj = importAll(1360);
  }
  if (hasItem) {
    hasItem = closure_6.hasMemberAction(guild.id, channel.id);
  }
  if (hasItem) {
    hasItem = !closure_7.hasCompletedActionForChannel(guild.id, channel.id);
  }
  return hasItem;
};
