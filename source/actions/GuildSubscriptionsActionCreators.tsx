// Module ID: 5683
// Function ID: 48935
// Name: subscribeChannel
// Dependencies: []
// Exports: subscribeChannelDimensions, subscribeGuild, subscribeMembers, subscribeToMemberUpdates, unsubscribeFromMemberUpdates, unsubscribeMembers

// Module 5683 (subscribeChannel)
function subscribeChannel(guildId, channelId, DEFAULT_RANGES) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId, channelId, ranges: DEFAULT_RANGES };
  obj.dispatch(obj);
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("actions/GuildSubscriptionsActionCreators.tsx");

export const subscribeMembers = function subscribeMembers(guildId, userIds) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId, userIds };
  obj.dispatch(obj);
};
export const unsubscribeMembers = function unsubscribeMembers(guildId, userIds) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId, userIds };
  obj.dispatch(obj);
};
export const subscribeToMemberUpdates = function subscribeToMemberUpdates(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId };
  obj.dispatch(obj);
};
export const unsubscribeFromMemberUpdates = function unsubscribeFromMemberUpdates(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId };
  obj.dispatch(obj);
};
export const subscribeGuild = function subscribeGuild(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "GUILD_SUBSCRIPTIONS", guildId };
  obj.dispatch(obj);
};
export { subscribeChannel };
export const subscribeChannelDimensions = function subscribeChannelDimensions(arg0) {
  let channelId;
  let guildId;
  let height;
  let y;
  ({ y, height, rowHeight: closure_0 } = arg0);
  function toIndex(arg0, toIndexResult) {
    let num = toIndexResult;
    if (toIndexResult === undefined) {
      num = 0;
    }
    return Math.max(0, Math.ceil(Math.ceil(arg0 / closure_0)) + num);
  }
  function pushRange(result) {
    const sum = result + (callback(closure_2[1]).MINIMUM_RANGE - 1);
    const items = [result, sum];
    items.push(items);
    return sum + 1;
  }
  const items = [];
  const importDefault = items;
  ({ guildId, channelId } = arg0);
  const toIndexResult = toIndex(0.5 * height);
  const toIndexResult1 = toIndex(y, -toIndexResult);
  const toIndexResult2 = toIndex(y + height, toIndexResult);
  let bound = toIndexResult1;
  if (toIndexResult1 > 0) {
    const _Math = Math;
    bound = Math.max(pushRange(0), toIndexResult1);
  }
  const rounded = Math.floor(bound / require(dependencyMap[1]).MINIMUM_RANGE);
  let result = rounded * require(dependencyMap[1]).MINIMUM_RANGE;
  if (result <= toIndexResult2) {
    do {
      result = pushRange(result);
    } while (result <= toIndexResult2);
  }
  subscribeChannel(guildId, channelId, items);
};
