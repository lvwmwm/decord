// Module ID: 9968
// Function ID: 77033
// Name: hasNotSetUpChannelOptIn
// Dependencies: []
// Exports: hasClearedGuildOnboardingNotice, toggleShowAllChannels

// Module 9968 (hasNotSetUpChannelOptIn)
function hasNotSetUpChannelOptIn(guildId) {
  const result = arg1(dependencyMap[5]).isOptInEnabledForGuild(guildId);
  const selfMember = selfMember.getSelfMember(guildId);
  let flags;
  if (null != selfMember) {
    flags = selfMember.flags;
  }
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  const obj = arg1(dependencyMap[5]);
  const obj2 = arg1(dependencyMap[6]);
  let tmp6 = !result;
  const hasFlagResult = arg1(dependencyMap[6]).hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
  if (tmp6) {
    tmp6 = !hasFlagResult;
  }
  if (tmp6) {
    tmp6 = !tmp5;
  }
  return tmp6;
}
function optIntoAllChannelsForExistingMember(id, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let include = obj.include;
  if (include === undefined) {
    const _Set = Set;
    include = new Set();
  }
  let exclude = obj.exclude;
  if (exclude === undefined) {
    const _Set2 = Set;
    exclude = new Set();
  }
  arg1 = exclude;
  let importDefault;
  const channels = channels.getChannels(id);
  const items = [...channels[closure_5]];
  const found = items.filter((channel) => {
    channel = channel.channel;
    let tmp = !channel.isThread();
    if (tmp) {
      tmp = !exclude.has(channel.id);
    }
    return tmp;
  });
  const mapped = found.map((channel) => channel.channel.id);
  importDefault = mapped;
  const item = include.forEach((arg0) => mapped.push(arg0));
  const obj2 = importDefault(dependencyMap[8]);
  const result = obj2.onboardExistingMember(id, new Set(mapped));
}
let closure_3 = importDefault(dependencyMap[0]);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_4, GUILD_VOCAL_CHANNELS_KEY: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
const GuildMemberFlags = arg1(dependencyMap[4]).GuildMemberFlags;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/opt_in_channels/OptInOnboardingUtils.tsx");

export { hasNotSetUpChannelOptIn };
export const toggleShowAllChannels = function toggleShowAllChannels(id) {
  if (hasNotSetUpChannelOptIn(id)) {
    optIntoAllChannelsForExistingMember(id);
  } else {
    const result = arg1(dependencyMap[5]).isOptInEnabledForGuild(id);
    const obj = arg1(dependencyMap[5]);
    arg1(dependencyMap[7]).setGuildOptIn(id, !result);
    const obj2 = arg1(dependencyMap[7]);
  }
};
export { optIntoAllChannelsForExistingMember };
export const hasClearedGuildOnboardingNotice = function hasClearedGuildOnboardingNotice(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let hasFlagResult = null != arg0;
  if (hasFlagResult) {
    const guilds = tmp.settings.guilds;
    let prop;
    if (null != guilds) {
      if (null != guilds.guilds[arg0]) {
        prop = tmp6.guildOnboardingProgress;
      }
    }
    let num2 = 0;
    if (null != prop) {
      num2 = prop;
    }
    hasFlagResult = arg1(dependencyMap[6]).hasFlag(num2, arg1(dependencyMap[9]).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
    const obj = arg1(dependencyMap[6]);
  }
  return hasFlagResult;
};
