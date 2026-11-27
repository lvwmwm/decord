// Module ID: 20077
// Function ID: 20078
// Name: useCommandPermissionIdentifier
// Dependencies: [4892, 4955, 4949, 4985, 5100, 1387, 8184, 504, 5659, 2]
// Exports: useCommandPermissionChannel, useCommandPermissionRole, useCommandPermissionUser

// Module 20077 (useCommandPermissionIdentifier)
import useChannelName from "useChannelName" /* 5659 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import GuildRoleStore from "GuildRoleStore" /* 4949 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import StreamerModeStore from "StreamerModeStore" /* 5100 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useCommandPermissionIdentifier.tsx");

export function useCommandPermissionChannel(id, id2, getChannelIconComponentWithGuild) {
  _require = id;
  dependencyMap = id;
  let obj = require("ApplicationCommandUtils");
  let tmp = id === obj.allChannelsSentinel(id.id);
  let closure_3 = tmp;
  let obj2 = require("get initialized");
  const items = [getChannelIconComponentWithGuild, UserStore, RelationshipStore];
  const items1 = [getChannelIconComponentWithGuild, id, id, tmp];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let channelName;
    let channelName1;
    const tmp = closure_3;
    if (tmp) {
      return { icon: "Array", name: "channel_id", categoryName: "i" };
    } else {
      const channel = ChannelStore.getChannel(closure_1);
      let parent_id;
      const obj = ChannelStore;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      let channel1 = null;
      if (null != parent_id) {
        channel1 = obj.getChannel(channel.parent_id);
      }
      let tmp7;
      if (null != channel) {
        tmp7 = getChannelIconComponentWithGuild(channel, closure_0);
      }
      const obj2 = { icon: tmp7, name: channelName, categoryName: channelName1 };
      channelName = undefined;
      if (null != channel) {
        const obj3 = useChannelName;
        channelName = obj3.computeChannelName(channel, UserStore, RelationshipStore);
      }
      channelName1 = undefined;
      if (null != channel1) {
        const obj4 = useChannelName;
        channelName1 = obj4.computeChannelName(channel1, UserStore, RelationshipStore);
      }
      return obj2;
    }
  }, items1);
  let obj3 = { isAllChannels: tmp, icon: stateFromStoresObject.icon, name: stateFromStoresObject.name, categoryName: stateFromStoresObject.categoryName };
  return obj3;
}
export function useCommandPermissionRole(id, id2) {
  _require = id;
  dependencyMap = id;
  const items = [GuildRoleStore];
  const items1 = [id, id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => GuildRoleStore.getRole(closure_0, closure_1), items1);
}
export function useCommandPermissionUser(id, id2) {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj2;
  let obj3;
  let obj4;
  _require = id;
  dependencyMap = id;
  const obj = {
    user: obj2.useStateFromStores(items, () => UserStore.getUser(id), items1),
    nick: obj3.useStateFromStores(items2, () => {
      const member = GuildMemberStore.getMember(closure_0, closure_1);
      let nick;
      if (member != null) {
        nick = member.nick;
      }
      return nick;
    }, items3),
    showTag: !obj4.useStateFromStores(items4, () => StreamerModeStore.hidePersonalInformation)
  };
  items = [UserStore];
  items1 = [id];
  items2 = [GuildMemberStore];
  items3 = [id, id];
  obj2 = require("get initialized");
  items4 = [StreamerModeStore];
  obj3 = require("get initialized");
  obj4 = require("get initialized");
  return obj;
}
