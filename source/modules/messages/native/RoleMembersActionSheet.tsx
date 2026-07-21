// Module ID: 10855
// Function ID: 84453
// Name: RoleMembersActionSheet
// Dependencies: []
// Exports: default

// Module 10855 (RoleMembersActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const EVERYONE_CHANNEL_ID = arg1(dependencyMap[3]).EVERYONE_CHANNEL_ID;
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { gap: importDefault(dependencyMap[7]).space.PX_4, paddingTop: importDefault(dependencyMap[7]).space.PX_12, paddingBottom: importDefault(dependencyMap[7]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj.header = obj;
obj.headerText = { flex: 1 };
obj.roleDot = { paddingTop: 0 };
const tmp2 = arg1(dependencyMap[5]);
obj.memberCount = { color: importDefault(dependencyMap[7]).colors.TEXT_MUTED };
let closure_10 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[7]).colors.TEXT_MUTED };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/messages/native/RoleMembersActionSheet.tsx");

export default function RoleMembersActionSheet(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const roleId = guildId.roleId;
  const importDefault = roleId;
  let channelId = guildId.channelId;
  let View;
  let closure_5;
  const tmp = callback();
  const dependencyMap = tmp;
  const items = [guildId, roleId];
  const effect = React.useEffect(() => {
    if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
      const membersForRole = guildId(guildId[9]).requestMembersForRole(guildId, roleId);
      const obj2 = guildId(guildId[9]);
    }
  }, items);
  let obj = arg1(dependencyMap[10]);
  const items1 = [closure_7];
  const items2 = [guildId, roleId];
  const stateFromStores = obj.useStateFromStores(items1, () => role.getRole(guildId, roleId), items2);
  const React = stateFromStores;
  const items3 = [closure_5];
  let tmp4 = "dot" === arg1(dependencyMap[10]).useStateFromStores(items3, () => tmp9.roleStyle);
  if (tmp4) {
    let colorString;
    if (null != stateFromStores) {
      colorString = stateFromStores.colorString;
    }
    tmp4 = null != colorString;
  }
  View = tmp4;
  const obj2 = arg1(dependencyMap[10]);
  const result = importDefault(dependencyMap[8]).castGuildIdAsEveryoneGuildRoleId(guildId);
  const tmp8 = importDefault(dependencyMap[11])(guildId);
  let tmp9 = null;
  if (roleId !== result) {
    let tmp10;
    if (null != tmp8) {
      tmp10 = tmp8[roleId];
    }
    let tmp11 = null;
    if (null != tmp10) {
      tmp11 = tmp10;
    }
    tmp9 = tmp11;
  }
  closure_5 = tmp9;
  const items4 = [tmp4, stateFromStores, tmp9, tmp];
  let tmp14Result = null;
  if (null != stateFromStores) {
    obj = { scrollable: true, header: tmp12 };
    obj = { guildId };
    if (null == channelId) {
      channelId = EVERYONE_CHANNEL_ID;
    }
    obj.channelId = channelId;
    obj.roleId = roleId;
    obj.children = closure_8(importDefault(dependencyMap[15]), obj);
    tmp14Result = tmp14(arg1(dependencyMap[14]).BottomSheet, obj);
    const tmp18 = importDefault(dependencyMap[15]);
  }
  return tmp14Result;
};
