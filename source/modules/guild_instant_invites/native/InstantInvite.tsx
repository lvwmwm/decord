// Module ID: 10198
// Function ID: 78799
// Name: LinkedChannelInvite
// Dependencies: [31, 27, 1352, 653, 33, 4130, 5468, 10199, 10200, 4471, 1212, 10201, 1198, 10203, 5167, 4541, 5472, 4126, 9338, 7533, 10208, 10209, 10210, 10213, 10215, 2]
// Exports: LinkedChannelInvite

// Module 10198 (LinkedChannelInvite)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { createChannelRecordFromInvite as closure_5 } from "_callSuper";
import { Routes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ creatorWrapper: { marginLeft: -16, marginBottom: -16, marginTop: 8, flex: 1 }, gameWrapper: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 }, gameText: { flex: 1 } });
const memoResult = importAllResult.memo((onInviteRevoked) => {
  let maxUses;
  let uses;
  const invite = onInviteRevoked.invite;
  const guild = invite.guild;
  let id;
  ({ uses, maxUses } = invite);
  if (null != guild) {
    id = guild.id;
  }
  const items = [invite];
  const memo = importAllResult.useMemo(() => outer1_5(invite.channel), items);
  let obj = invite(10210);
  const items1 = [invite.roles];
  const inviteActions = obj.useInviteActions({ invite, onInviteRevoked: onInviteRevoked.onInviteRevoked });
  const memo1 = importAllResult.useMemo(() => {
    const roles = invite.roles;
    return roles.map((id) => id.id);
  }, items1);
  let tmp5 = memo1.length > 0 && null != id;
  obj = {};
  obj = { direction: "horizontal", justify: "space-between" };
  const obj1 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const items2 = [
    callback(invite(4126).Text, obj1),
    callback(invite(9338).ContextMenu, {
      items: inviteActions,
      children(ref) {
        let obj = Object.create(null);
        obj.ref = 0;
        const merged = Object.assign(ref, obj);
        obj = { size: "sm", variant: "secondary", icon: outer1_1(outer1_2[13]).more };
        const intl = invite(outer1_2[10]).intl;
        obj.accessibilityLabel = intl.string(invite(outer1_2[10]).t.DEoVWZ);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return outer1_7(invite(outer1_2[19]).IconButton, obj);
      }
    })
  ];
  obj.children = items2;
  const items3 = [callback2(invite(4541).Stack, obj), , , ];
  const obj3 = { channel: memo, expiresAt: invite.getExpiresAt() };
  items3[1] = callback(invite(10208).InstantInviteDetails, obj3);
  if (tmp5) {
    const obj4 = { roleIds: memo1, guildId: id };
    tmp5 = callback(importDefault(10213), obj4);
  }
  items3[2] = tmp5;
  const obj5 = { direction: "horizontal", align: "flex-end" };
  const obj6 = { style: callback3().creatorWrapper };
  const inviter = invite.inviter;
  let id1;
  if (null != inviter) {
    id1 = inviter.id;
  }
  let tmp15Result = null;
  if (null != id1) {
    const obj7 = { start: true, end: true };
    const inviter2 = invite.inviter;
    let id2;
    if (null != inviter2) {
      id2 = inviter2.id;
    }
    obj7.userId = id2;
    obj7.guildId = id;
    tmp15Result = callback(importDefault(10209), obj7);
    const tmp15 = callback;
    const tmp18 = importDefault(10209);
  }
  obj6.children = tmp15Result;
  const items4 = [callback(View, obj6), callback(importDefault(10215), { uses, maxUses })];
  obj5.children = items4;
  items3[3] = callback2(invite(4541).Stack, obj5);
  obj.children = items3;
  return callback2(invite(5167).Card, obj);
});
const result = require("_callSuper").fileFinishedImporting("modules/guild_instant_invites/native/InstantInvite.tsx");

export default memoResult;
export const LinkedChannelInvite = function LinkedChannelInvite(channel) {
  channel = channel.channel;
  let canUnlinkLobbyChannel;
  let dependencyMap;
  let callback;
  const tmp = callback3();
  const linkedLobby = channel.linkedLobby;
  let linked_by;
  if (null != linkedLobby) {
    linked_by = linkedLobby.linked_by;
  }
  let obj = channel(5468);
  const linkedLobby2 = channel.linkedLobby;
  let application_id;
  if (null != linkedLobby2) {
    application_id = linkedLobby2.application_id;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(application_id);
  let obj1 = channel(10199);
  canUnlinkLobbyChannel = obj1.useCanUnlinkLobbyChannel(channel);
  let name;
  if (null != getOrFetchApplication) {
    name = getOrFetchApplication.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const tmp6Result = canUnlinkLobbyChannel(10200)(channel.id, str);
  dependencyMap = tmp6Result;
  let items = [canUnlinkLobbyChannel, tmp6Result];
  callback = callback.useCallback(() => {
    if (canUnlinkLobbyChannel) {
      _undefined();
    } else {
      let obj = canUnlinkLobbyChannel(_undefined[9]);
      obj = {};
      const intl = channel(_undefined[10]).intl;
      obj.title = intl.string(channel(_undefined[10]).t.JmUENg);
      const intl2 = channel(_undefined[10]).intl;
      obj.body = intl2.string(channel(_undefined[10]).t.SrvsML);
      obj.show(obj);
    }
  }, items);
  const items1 = [, , ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  items1[2] = callback;
  const memo = callback.useMemo(() => {
    let obj = {};
    const intl = channel(_undefined[10]).intl;
    obj.label = intl.string(channel(_undefined[10]).t.aW2YlJ);
    obj.IconComponent = channel(_undefined[11]).ArrowSmallRightIcon;
    obj.action = function action() {
      channel(table[12]).transitionTo(outer2_6.CHANNEL(outer1_0.guild_id, outer1_0.id));
    };
    const items = [obj, ];
    obj = {};
    const intl2 = channel(_undefined[10]).intl;
    obj.label = intl2.string(channel(_undefined[10]).t.JmUENg);
    obj.iconSource = canUnlinkLobbyChannel(_undefined[13]).revoke;
    obj.variant = "destructive";
    obj.action = callback;
    items[1] = obj;
    return items;
  }, items1);
  obj = {};
  obj = { direction: "horizontal", justify: "space-between" };
  obj1 = { style: tmp.gameWrapper };
  const obj2 = { game: getOrFetchApplication };
  const tmp12 = View;
  const tmp13 = callback;
  const tmp6 = canUnlinkLobbyChannel(10200);
  obj2.size = channel(5472).GameIconSizes.SIZE_24;
  const items2 = [callback(canUnlinkLobbyChannel(5472), obj2), ];
  const obj3 = { ellipsizeMode: "tail", lineClamp: 1, variant: "text-lg/bold", style: tmp.gameText };
  let name1;
  if (null != getOrFetchApplication) {
    name1 = getOrFetchApplication.name;
  }
  obj3.children = name1;
  items2[1] = tmp13(channel(4126).Text, obj3);
  obj1.children = items2;
  const items3 = [
    closure_8(tmp12, obj1),
    callback(channel(9338).ContextMenu, {
      items: memo,
      children(ref) {
        let obj = Object.create(null);
        obj.ref = 0;
        const merged = Object.assign(ref, obj);
        obj = { size: "sm", variant: "secondary", icon: canUnlinkLobbyChannel(_undefined[13]).more };
        const intl = channel(_undefined[10]).intl;
        obj.accessibilityLabel = intl.string(channel(_undefined[10]).t.DEoVWZ);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return outer1_7(channel(_undefined[19]).IconButton, obj);
      }
    })
  ];
  obj.children = items3;
  const items4 = [closure_8(channel(4541).Stack, obj), callback(channel(10208).InstantInviteDetails, { channel }), ];
  const obj5 = { direction: "horizontal", align: "flex-end" };
  const obj6 = { style: tmp.creatorWrapper };
  let tmp18 = null;
  if (null != linked_by) {
    const obj7 = { start: true, end: true, userId: linked_by, guildId: channel.guild_id };
    tmp18 = callback(canUnlinkLobbyChannel(10209), obj7);
  }
  obj6.children = tmp18;
  obj5.children = callback(View, obj6);
  items4[2] = callback(channel(4541).Stack, obj5);
  obj.children = items4;
  return closure_8(channel(5167).Card, obj);
};
