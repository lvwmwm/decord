// Module ID: 4324
// Function ID: 38143
// Name: hasPendingMemberAction
// Dependencies: []
// Exports: hasPendingMemberAction

// Module 4324 (hasPendingMemberAction)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const GuildFeatures = arg1(dependencyMap[5]).GuildFeatures;
const GuildMemberFlags = arg1(dependencyMap[6]).GuildMemberFlags;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

export const hasPendingMemberAction = function hasPendingMemberAction(guild_id, selectedChannelId) {
  const guild = guild.getGuild(guild_id);
  const channel = channel.getChannel(selectedChannelId);
  let hasItem = null != guild && null != channel;
  if (hasItem) {
    hasItem = importDefault(dependencyMap[7])(guild);
  }
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.GUILD_SERVER_GUIDE);
  }
  if (hasItem) {
    let flags;
    const selfMember = selfMember.getSelfMember(guild.id);
    if (null != selfMember) {
      flags = selfMember.flags;
    }
    let num3 = 0;
    if (null != flags) {
      num3 = flags;
    }
    hasItem = !importAll(dependencyMap[8]).hasFlag(num3, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
    const obj = importAll(dependencyMap[8]);
  }
  if (hasItem) {
    hasItem = closure_6.hasMemberAction(guild.id, channel.id);
  }
  if (hasItem) {
    hasItem = !closure_7.hasCompletedActionForChannel(guild.id, channel.id);
  }
  return hasItem;
};
