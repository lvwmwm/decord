// Module ID: 11504
// Function ID: 89577
// Name: ChannelAccessInfo
// Dependencies: [31, 27, 1391, 1917, 1910, 33, 4130, 689, 1212, 566, 8413, 1327, 4126, 4660, 10878, 1273, 11503, 4646, 8424, 8422, 10681, 2]
// Exports: default

// Module 11504 (ChannelAccessInfo)
import result from "result";
import { View } from "get ActivityIndicator";
import { isGuildOwner } from "isGuildOwner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, flexDirection: "row", marginBottom: 8, marginTop: 8, padding: 16 };
_createForOfIteratorHelperLoose.section = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sectionContent = { alignItems: "center", flexDirection: "row", flexGrow: 1 };
_createForOfIteratorHelperLoose.avatar = { marginRight: 8 };
_createForOfIteratorHelperLoose.labelDetail = { marginRight: 12 };
_createForOfIteratorHelperLoose.sectionIcon = { marginRight: 6 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { MEMBERS: 0, [0]: "MEMBERS", ROLES: 1, [1]: "ROLES" };
let result = require("isGuildOwner").fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default function ChannelAccessInfo(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  let dependencyMap;
  function renderCounts(MEMBERS, length, arg2, GroupIcon) {
    if (0 === length) {
      return null;
    } else if (outer1_12.MEMBERS === MEMBERS) {
      if (length > 100) {
        const intl4 = guild(_undefined[8]).intl;
        let obj = { count: 100 };
        let formatToPlainStringResult = intl4.formatToPlainString(guild(_undefined[8]).t.PR5l07, obj);
      } else {
        const intl3 = guild(_undefined[8]).intl;
        obj = { count: length };
        formatToPlainStringResult = intl3.formatToPlainString(guild(_undefined[8]).t.bu5sya, obj);
      }
    } else {
      if (outer1_12.ROLES === MEMBERS) {
        if (length > 100) {
          const intl2 = guild(_undefined[8]).intl;
          const obj1 = { count: 100 };
          let formatToPlainStringResult1 = intl2.formatToPlainString(guild(_undefined[8]).t["+OYnFQ"], obj1);
        } else {
          const intl = guild(_undefined[8]).intl;
          const obj2 = { count: length };
          formatToPlainStringResult1 = intl.formatToPlainString(guild(_undefined[8]).t.T2BEtm, obj2);
        }
        const tmp4 = formatToPlainStringResult1;
      } else {
        obj = guild(_undefined[11]);
        obj.assertNever(MEMBERS);
      }
      const obj3 = {};
      const obj4 = { size: "sm", style: _undefined.sectionIcon };
      const items = [outer1_8(GroupIcon, obj4), ];
      const obj5 = { style: _undefined.labelDetail, variant: "text-sm/medium", children: tmp4 };
      items[1] = outer1_8(guild(_undefined[12]).Text, obj5);
      obj3.children = items;
      return outer1_9(outer1_3.Fragment, obj3);
    }
  }
  const tmp = _createForOfIteratorHelperLoose();
  dependencyMap = tmp;
  let intl = guild(1212).intl;
  const stringResult = intl.string(guild(1212).t.li1wKf);
  let obj = guild(566);
  let items = [closure_7];
  const items1 = [guild, channel];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => guild(_undefined[10]).getExistingRoles(guild, outer1_7.getSortedRoles(guild.id), channel, channel.accessPermissions), items1);
  let id;
  if (null != guild) {
    id = guild.id;
  }
  memberIds = memberIds.getMemberIds(id);
  let obj1 = guild(8413);
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
  const items2 = [callback(guild(4126).Text, { variant: "eyebrow", children: stringResult }), ];
  obj = {
    accessibilityLabel: stringResult,
    accessibilityRole: "button",
    onPress() {
      const result = guild(_undefined[14]).openChannelMembersActionSheet(channel.id, channel.guild_id);
    },
    style: tmp.section
  };
  obj1 = { style: tmp.sectionContent };
  if (null != first) {
    let obj2 = {};
    let obj3 = { style: tmp.avatar, user: first, guildId: guild.id, size: guild(1273).AvatarSizes.XSMALL };
    const items3 = [callback(guild(1273).Avatar, obj3), ];
    let obj4 = {};
    let obj5 = { variant: "text-sm/semibold", children: first.tag };
    const items4 = [callback(guild(4126).Text, obj5), ];
    const obj6 = { variant: "text-xs/medium" };
    let intl2 = guild(1212).intl;
    obj6.children = intl2.string(guild(1212).t.rt0ERW);
    items4[1] = callback(guild(4126).Text, obj6);
    obj4.children = items4;
    items3[1] = callback2(View, obj4);
    obj2.children = items3;
    let obj7 = obj2;
  } else {
    obj7 = {};
    const MEMBERS = constants.MEMBERS;
    channel(11503);
    const items5 = [renderCounts(MEMBERS, existingMembers.length, undefined, guild(4646).GroupIcon), ];
    const ROLES = constants.ROLES;
    channel(8424);
    items5[1] = renderCounts(ROLES, stateFromStoresArray.length, undefined, guild(8422).ShieldUserIcon);
    obj7.children = items5;
  }
  obj1.children = callback2(closure_10, obj7);
  const items6 = [callback(View, obj1), ];
  const obj8 = { source: channel(10681), size: guild(1273).Icon.Sizes.SMALL };
  items6[1] = callback(guild(1273).Icon, obj8);
  obj.children = items6;
  items2[1] = callback2(guild(4660).PressableOpacity, obj);
  obj.children = items2;
  return callback2(closure_10, obj);
};
