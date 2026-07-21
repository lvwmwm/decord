// Module ID: 5600
// Function ID: 47563
// Name: getChannelIdForGuildTransition
// Dependencies: []
// Exports: getChannelIdForGuildTransition

// Module 5600 (getChannelIdForGuildTransition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const ME = arg1(dependencyMap[5]).ME;
const StaticChannelRoute = arg1(dependencyMap[6]).StaticChannelRoute;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/routing/getChannelIdForGuildTransition.tsx");

export const getChannelIdForGuildTransition = function getChannelIdForGuildTransition(guildId) {
  const channelId = channelId.getChannelId(guildId);
  const defaultChannel = defaultChannel.getDefaultChannel(guildId);
  let id;
  if (null != defaultChannel) {
    id = defaultChannel.id;
  }
  if (null == id) {
    let tmp5;
    if (guildId === ME) {
      const privateChannelIds = privateChannelIds.getPrivateChannelIds();
      let first;
      if (privateChannelIds.length > 0) {
        first = privateChannelIds[0];
      }
      tmp5 = first;
    }
    id = tmp5;
  }
  if (channelId === StaticChannelRoute.GUILD_ONBOARDING) {
    if (!closure_2.shouldShowOnboarding(guildId)) {
      return id;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    if (!obj.canSeeOnboardingHome(guildId)) {
      return id;
    }
    const obj = arg1(dependencyMap[7]);
  }
  if (channelId === StaticChannelRoute.GAME_SHOP) {
    if (obj2.canSeeGameShop(guildId)) {
      return channelId;
    }
    const obj2 = arg1(dependencyMap[8]);
  }
  const channel = channel.getChannel(channelId);
  if (null == channel) {
    let tmp13 = id;
  } else {
    tmp13 = channelId;
  }
  return tmp13;
};
