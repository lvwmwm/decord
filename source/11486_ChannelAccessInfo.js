// Module ID: 11486
// Function ID: 89478
// Name: ChannelAccessInfo
// Dependencies: []
// Exports: default

// Module 11486 (ChannelAccessInfo)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isGuildOwner = arg1(dependencyMap[2]).isGuildOwner;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.sm, color: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
obj.section = obj;
obj.sectionContent = { 1652020561: "isArray", -1973327367: "constructor", -1164930477: "apply" };
obj.avatar = { marginRight: 8 };
obj.labelDetail = { marginRight: 12 };
obj.sectionIcon = { marginRight: 6 };
let closure_11 = obj.createStyles(obj);
let closure_12 = { MEMBERS: 0, [0]: "MEMBERS", ROLES: 1, [1]: "ROLES" };
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default function ChannelAccessInfo(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const channel = guild.channel;
  const importDefault = channel;
  let dependencyMap;
  function renderCounts(MEMBERS, length, arg2, GroupIcon) {
    if (0 === length) {
      return null;
    } else if (constants.MEMBERS === MEMBERS) {
      if (length > 100) {
        const intl4 = guild(tmp[8]).intl;
        let obj = { count: 100 };
        let formatToPlainStringResult = intl4.formatToPlainString(guild(tmp[8]).t.PR5l07, obj);
      } else {
        const intl3 = guild(tmp[8]).intl;
        obj = { count: length };
        formatToPlainStringResult = intl3.formatToPlainString(guild(tmp[8]).t.bu5sya, obj);
      }
    } else {
      if (constants.ROLES === MEMBERS) {
        if (length > 100) {
          const intl2 = guild(tmp[8]).intl;
          const obj1 = { count: 100 };
          let formatToPlainStringResult1 = intl2.formatToPlainString(guild(tmp[8]).t.+OYnFQ, obj1);
        } else {
          const intl = guild(tmp[8]).intl;
          const obj2 = { count: length };
          formatToPlainStringResult1 = intl.formatToPlainString(guild(tmp[8]).t.T2BEtm, obj2);
        }
        const tmp4 = formatToPlainStringResult1;
      } else {
        obj = guild(tmp[11]);
        obj.assertNever(MEMBERS);
      }
      const obj3 = {};
      const obj4 = { size: "sm", style: tmp.sectionIcon };
      const items = [callback(GroupIcon, obj4), ];
      const obj5 = { style: tmp.labelDetail, variant: "text-sm/medium", children: tmp4 };
      items[1] = callback(guild(tmp[12]).Text, obj5);
      obj3.children = items;
      return callback2(React.Fragment, obj3);
    }
  }
  const tmp = callback3();
  dependencyMap = tmp;
  const intl = arg1(dependencyMap[8]).intl;
  const stringResult = intl.string(arg1(dependencyMap[8]).t.li1wKf);
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7];
  const items1 = [guild, channel];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => guild(tmp[10]).getExistingRoles(guild, sortedRoles.getSortedRoles(guild.id), channel, channel.accessPermissions), items1);
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const memberIds = memberIds.getMemberIds(id);
  let obj1 = arg1(dependencyMap[10]);
  const existingMembers = obj1.getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
  let tmp6 = 0 === stateFromStoresArray.length;
  if (tmp6) {
    tmp6 = 1 === existingMembers.length;
  }
  if (tmp6) {
    tmp6 = isGuildOwner(guild, existingMembers[0]);
  }
  let first = null;
  if (tmp6) {
    first = existingMembers[0];
  }
  obj = {};
  const items2 = [callback(arg1(dependencyMap[12]).Text, { variant: "eyebrow", children: stringResult }), ];
  obj = {
    accessibilityLabel: stringResult,
    accessibilityRole: "button",
    onPress() {
      const result = guild(tmp[14]).openChannelMembersActionSheet(channel.id, channel.guild_id);
    },
    style: tmp.section
  };
  obj1 = { style: tmp.sectionContent };
  if (null != first) {
    const obj2 = {};
    const obj3 = { style: tmp.avatar, user: first, guildId: guild.id, size: arg1(dependencyMap[15]).AvatarSizes.XSMALL };
    const items3 = [callback(arg1(dependencyMap[15]).Avatar, obj3), ];
    const obj4 = {};
    const obj5 = { variant: "text-sm/semibold", children: first.tag };
    const items4 = [callback(arg1(dependencyMap[12]).Text, obj5), ];
    const obj6 = { variant: "text-xs/medium" };
    const intl2 = arg1(dependencyMap[8]).intl;
    obj6.children = intl2.string(arg1(dependencyMap[8]).t.rt0ERW);
    items4[1] = callback(arg1(dependencyMap[12]).Text, obj6);
    obj4.children = items4;
    items3[1] = callback2(View, obj4);
    obj2.children = items3;
    let obj7 = obj2;
  } else {
    obj7 = {};
    const MEMBERS = constants.MEMBERS;
    importDefault(dependencyMap[16]);
    const items5 = [renderCounts(MEMBERS, existingMembers.length, undefined, arg1(dependencyMap[17]).GroupIcon), ];
    const ROLES = constants.ROLES;
    importDefault(dependencyMap[18]);
    items5[1] = renderCounts(ROLES, stateFromStoresArray.length, undefined, arg1(dependencyMap[19]).ShieldUserIcon);
    obj7.children = items5;
  }
  obj1.children = callback2(closure_10, obj7);
  const items6 = [callback(View, obj1), ];
  const obj8 = { source: importDefault(dependencyMap[20]), size: arg1(dependencyMap[15]).Icon.Sizes.SMALL };
  items6[1] = callback(arg1(dependencyMap[15]).Icon, obj8);
  obj.children = items6;
  items2[1] = callback2(arg1(dependencyMap[13]).PressableOpacity, obj);
  obj.children = items2;
  return callback2(closure_10, obj);
};
