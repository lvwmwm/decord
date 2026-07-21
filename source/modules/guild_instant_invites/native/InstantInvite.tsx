// Module ID: 10159
// Function ID: 78555
// Name: LinkedChannelInvite
// Dependencies: []
// Exports: LinkedChannelInvite

// Module 10159 (LinkedChannelInvite)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).createChannelRecordFromInvite;
const Routes = arg1(dependencyMap[3]).Routes;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ creatorWrapper: {}, gameWrapper: { "Bool(false)": null, "Bool(false)": "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", "Bool(false)": true, "Bool(false)": null }, gameText: { flex: 1 } });
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo((onInviteRevoked) => {
  let maxUses;
  let uses;
  const invite = onInviteRevoked.invite;
  const arg1 = invite;
  const guild = invite.guild;
  let id;
  ({ uses, maxUses } = invite);
  if (null != guild) {
    id = guild.id;
  }
  const items = [invite];
  const memo = importAllResult.useMemo(() => callback2(invite.channel), items);
  let obj = arg1(dependencyMap[22]);
  const items1 = [invite.roles];
  const inviteActions = obj.useInviteActions({ invite, onInviteRevoked: onInviteRevoked.onInviteRevoked });
  const memo1 = importAllResult.useMemo(() => {
    const roles = invite.roles;
    return roles.map((id) => id.id);
  }, items1);
  let tmp5 = memo1.length > 0 && null != id;
  obj = {};
  obj = { 0: true, -9223372036854775808: true };
  const obj1 = { Set: null, Icon: null, children: invite.code };
  const items2 = [
    callback(arg1(dependencyMap[17]).Text, obj1),
    callback(arg1(dependencyMap[18]).ContextMenu, {
      items: inviteActions,
      children(ref) {
        let obj = Object.create(null);
        obj.ref = 0;
        const merged = Object.assign(ref, obj);
        obj = { icon: callback(closure_2[13]).more };
        const intl = invite(closure_2[10]).intl;
        obj.accessibilityLabel = intl.string(invite(closure_2[10]).t.DEoVWZ);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return callback3(invite(closure_2[19]).IconButton, obj);
      }
    })
  ];
  obj.children = items2;
  const items3 = [callback2(arg1(dependencyMap[15]).Stack, obj), , , ];
  const obj3 = { channel: memo, expiresAt: invite.getExpiresAt() };
  items3[1] = callback(arg1(dependencyMap[20]).InstantInviteDetails, obj3);
  if (tmp5) {
    const obj4 = { roleIds: memo1, guildId: id };
    tmp5 = callback(importDefault(dependencyMap[23]), obj4);
  }
  items3[2] = tmp5;
  const obj5 = {};
  const obj6 = { style: callback3().creatorWrapper };
  const inviter = invite.inviter;
  let id1;
  if (null != inviter) {
    id1 = inviter.id;
  }
  let tmp15Result = null;
  if (null != id1) {
    const obj7 = { bind: null, cursor: null };
    const inviter2 = invite.inviter;
    let id2;
    if (null != inviter2) {
      id2 = inviter2.id;
    }
    obj7.userId = id2;
    obj7.guildId = id;
    tmp15Result = callback(importDefault(dependencyMap[21]), obj7);
    const tmp15 = callback;
    const tmp18 = importDefault(dependencyMap[21]);
  }
  obj6.children = tmp15Result;
  const items4 = [callback(View, obj6), callback(importDefault(dependencyMap[24]), { uses, maxUses })];
  obj5.children = items4;
  items3[3] = callback2(arg1(dependencyMap[15]).Stack, obj5);
  obj.children = items3;
  return callback2(arg1(dependencyMap[14]).Card, obj);
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_instant_invites/native/InstantInvite.tsx");

export default memoResult;
export const LinkedChannelInvite = function LinkedChannelInvite(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let dependencyMap;
  let importAllResult;
  const tmp = callback3();
  const linkedLobby = channel.linkedLobby;
  let linked_by;
  if (null != linkedLobby) {
    linked_by = linkedLobby.linked_by;
  }
  let obj = arg1(dependencyMap[6]);
  const linkedLobby2 = channel.linkedLobby;
  let application_id;
  if (null != linkedLobby2) {
    application_id = linkedLobby2.application_id;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(application_id);
  let obj1 = arg1(dependencyMap[7]);
  const canUnlinkLobbyChannel = obj1.useCanUnlinkLobbyChannel(channel);
  importDefault = canUnlinkLobbyChannel;
  let name;
  if (null != getOrFetchApplication) {
    name = getOrFetchApplication.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const tmp6Result = importDefault(dependencyMap[8])(channel.id, str);
  dependencyMap = tmp6Result;
  const items = [canUnlinkLobbyChannel, tmp6Result];
  const callback = importAllResult.useCallback(() => {
    if (canUnlinkLobbyChannel) {
      tmp6Result();
    } else {
      let obj = canUnlinkLobbyChannel(tmp6Result[9]);
      obj = {};
      const intl = channel(tmp6Result[10]).intl;
      obj.title = intl.string(channel(tmp6Result[10]).t.JmUENg);
      const intl2 = channel(tmp6Result[10]).intl;
      obj.body = intl2.string(channel(tmp6Result[10]).t.SrvsML);
      obj.show(obj);
    }
  }, items);
  importAllResult = callback;
  const items1 = [, , ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  items1[2] = callback;
  const memo = importAllResult.useMemo(() => {
    let obj = {};
    const intl = channel(tmp6Result[10]).intl;
    obj.label = intl.string(channel(tmp6Result[10]).t.aW2YlJ);
    obj.IconComponent = channel(tmp6Result[11]).ArrowSmallRightIcon;
    obj.action = function action() {
      lib(closure_2[12]).transitionTo(closure_6.CHANNEL(lib.guild_id, lib.id));
    };
    const items = [obj, ];
    obj = {};
    const intl2 = channel(tmp6Result[10]).intl;
    obj.label = intl2.string(channel(tmp6Result[10]).t.JmUENg);
    obj.iconSource = canUnlinkLobbyChannel(tmp6Result[13]).revoke;
    obj.variant = "destructive";
    obj.action = callback;
    items[1] = obj;
    return items;
  }, items1);
  obj = {};
  obj = { 0: true, -9223372036854775808: true };
  obj1 = { style: tmp.gameWrapper };
  const obj2 = { game: getOrFetchApplication };
  const tmp12 = View;
  const tmp13 = callback;
  const tmp6 = importDefault(dependencyMap[8]);
  obj2.size = arg1(dependencyMap[16]).GameIconSizes.SIZE_24;
  const items2 = [callback(importDefault(dependencyMap[16]), obj2), ];
  const obj3 = { style: tmp.gameText };
  let name1;
  if (null != getOrFetchApplication) {
    name1 = getOrFetchApplication.name;
  }
  obj3.children = name1;
  items2[1] = tmp13(arg1(dependencyMap[17]).Text, obj3);
  obj1.children = items2;
  const items3 = [
    closure_8(tmp12, obj1),
    callback(arg1(dependencyMap[18]).ContextMenu, {
      items: memo,
      children(ref) {
        let obj = Object.create(null);
        obj.ref = 0;
        const merged = Object.assign(ref, obj);
        obj = { icon: canUnlinkLobbyChannel(tmp6Result[13]).more };
        const intl = channel(tmp6Result[10]).intl;
        obj.accessibilityLabel = intl.string(channel(tmp6Result[10]).t.DEoVWZ);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return callback(channel(tmp6Result[19]).IconButton, obj);
      }
    })
  ];
  obj.children = items3;
  const items4 = [closure_8(arg1(dependencyMap[15]).Stack, obj), callback(arg1(dependencyMap[20]).InstantInviteDetails, { channel }), ];
  const obj5 = {};
  const obj6 = { style: tmp.creatorWrapper };
  let tmp18 = null;
  if (null != linked_by) {
    const obj7 = { bind: null, cursor: null, userId: linked_by, guildId: channel.guild_id };
    tmp18 = callback(importDefault(dependencyMap[21]), obj7);
  }
  obj6.children = tmp18;
  obj5.children = callback(View, obj6);
  items4[2] = callback(arg1(dependencyMap[15]).Stack, obj5);
  obj.children = items4;
  return closure_8(arg1(dependencyMap[14]).Card, obj);
};
