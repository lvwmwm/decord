// Module ID: 7437
// Function ID: 7438
// Name: GuildSubscriptionsActionCreators
// Dependencies: [584, 7435, 2]
// Exports: subscribeChannel, subscribeChannelDimensions, subscribeGuild, subscribeMembers, subscribeToMemberUpdates, unsubscribeFromMemberUpdates, unsubscribeMembers

// Module 7437 (GuildSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 7435 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("actions/GuildSubscriptionsActionCreators.tsx");

export function subscribeMembers(guildId, userIds) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId, userIds };
  obj.dispatch(obj2);
}
export function unsubscribeMembers(guildId, userIds) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId, userIds };
  obj.dispatch(obj2);
}
export function subscribeToMemberUpdates(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId };
  obj.dispatch(obj2);
}
export function unsubscribeFromMemberUpdates(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId };
  obj.dispatch(obj2);
}
export function subscribeGuild(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SUBSCRIPTIONS", guildId };
  obj.dispatch(obj2);
}
export function subscribeChannel(guildId, channelId, ranges) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId, channelId, ranges };
  obj.dispatch(obj2);
}
export function subscribeChannelDimensions(arg0) {
  let channelId;
  let guildId;
  let height;
  let rowHeight;
  let y;
  ({ y, height, rowHeight } = arg0);
  ({ guildId, channelId } = arg0);
  const bound = Math.max(0, Math.ceil(Math.ceil(0.5 * height / rowHeight)));
  const tmp2 = -bound;
  const bound1 = Math.max(0, Math.ceil(Math.ceil(y / rowHeight)) + tmp2);
  let num = bound;
  const sum = y + height;
  if (bound === undefined) {
    num = 0;
  }
  const items = [];
  const bound2 = Math.max(0, Math.ceil(Math.ceil(sum / rowHeight)) + num);
  let maxResult = bound1;
  if (bound1 > 0) {
    const _Math = Math;
    const diff = GuildChannelSubscriptions.MINIMUM_RANGE - 1;
    const items1 = [0, diff];
    items.push(items1);
    maxResult = max(diff + 1, bound1);
  }
  const rounded = Math.floor(maxResult / GuildChannelSubscriptions.MINIMUM_RANGE);
  let result = rounded * GuildChannelSubscriptions.MINIMUM_RANGE;
  if (result <= bound2) {
    do {
      let sum1 = result + (GuildChannelSubscriptions.MINIMUM_RANGE - 1);
      let items2 = [result, sum1];
      let arr2 = items.push(items2);
      result = sum1 + 1;
    } while (result <= bound2);
  }
  const obj = DispatcherDefault;
  obj.dispatch({ type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId, channelId, ranges: items });
}
