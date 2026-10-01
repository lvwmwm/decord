// Module ID: 11964
// Function ID: 11965
// Name: ChannelAccessInfo
// Dependencies: [19, 17, 2063, 2108, 2102, 21, 4836, 576, 1115, 504, 9016, 1370, 4832, 5435, 11103, 1177, 11963, 5403, 9035, 9033, 9396, 2]
// Exports: default

// Module 11964 (ChannelAccessInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9016 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11103 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let metroImportAll;
let obj2;
const View = react_native.View;
const isGuildOwner = GuildRecord.isGuildOwner;
let Fragment = Fragment_mod;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let c11 = 100;
let obj = { section: obj2, sectionContent: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, avatar: { marginRight: 8 }, labelDetail: { marginRight: 12 }, sectionIcon: { marginRight: 6 } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, color: nativeDefault.colors.TEXT_DEFAULT, flexDirection: "row", marginBottom: 8, marginTop: 8, padding: 16 };
let closure_12 = createStyles.createStyles(obj);
const constants = { MEMBERS: 0, [0]: "MEMBERS", ROLES: 1, [1]: "ROLES" };
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default function ChannelAccessInfo(guild) {
  let closure_2;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj9;
  guild = guild.guild;
  const channel = guild.channel;
  const tmp = closure_12();
  dependencyMap = tmp;
  let intl = guild(1115).intl;
  const stringResult = intl.string(guild(1115).t.li1wKf);
  let obj = guild(504);
  let items = [GuildRoleStore];
  const items1 = [guild, channel];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const obj = ChannelPermissionsUtils;
    return obj.getExistingRoles(guild, GuildRoleStore.getSortedRoles(guild.id), channel, channel.accessPermissions);
  }, items1);
  let id;
  let tmp5 = GuildMemberStore;
  const getMemberIds = GuildMemberStore.getMemberIds;
  if (guild != null) {
    id = guild.id;
  }
  const memberIds = getMemberIds(id);
  const tmp2Result = guild(9016);
  const existingMembers = tmp2Result.getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
  const tmp8 = 0 === stateFromStoresArray.length && 1 === existingMembers.length && isGuildOwner(guild, existingMembers[0]);
  let first = null;
  if (tmp8) {
    first = existingMembers[0];
  }
  const tmp12 = closure_10;
  let tmp13 = closure_8;
  const items2 = [closure_8(tmp2(4832).Text, { variant: "eyebrow", children: stringResult }), ];
  let obj2 = {
    accessibilityLabel: stringResult,
    accessibilityRole: "button",
    onPress() {
      const obj = channel_permissions_ChannelPermissionsUtils;
      const result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
    },
    style: tmp.section,
    children: items6
  };
  const tmp14 = View;
  let obj3 = { style: tmp.sectionContent, children: tmp11(tmp12, obj9) };
  const PressableOpacity = tmp2(5435).PressableOpacity;
  if (null != first) {
    let obj4 = { children: items3 };
    let obj5 = { style: tmp.avatar, user: first, guildId: guild.id, size: tmp2(1177).AvatarSizes.XSMALL };
    const Avatar = tmp2(1177).Avatar;
    items3 = [tmp13(Avatar, obj5), ];
    let obj6 = { children: items4 };
    let obj7 = { variant: "text-sm/semibold", children: first.tag };
    items4 = [tmp13(tmp2(4832).Text, obj7), ];
    let obj8 = { variant: "text-xs/medium", children: intl2.string(tmp2(1115).t.rt0ERW) };
    const Text = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    items4[1] = tmp13(Text, obj8);
    items3[1] = closure_9(tmp14, obj6);
    obj9 = obj4;
  } else {
    function renderCounts(MEMBERS, length, arg2, GroupIcon) {
      let items;
      if (0 === length) {
        return null;
      } else {
        let tmp4;
        let tmp5;
        if (constants.MEMBERS === MEMBERS) {
          let formatToPlainStringResult;
          let tmp13;
          if (length > c11) {
            const intl4 = intl5.intl;
            const obj2 = { count: tmp12 };
            formatToPlainStringResult = intl4.formatToPlainString(intl5.t.PR5l07, obj2);
            tmp13 = require;
          } else {
            tmp13 = require;
            const intl3 = intl5.intl;
            const obj3 = { count: length };
            formatToPlainStringResult = intl3.formatToPlainString(intl5.t.bu5sya, obj3);
          }
          tmp4 = tmp13;
          tmp5 = formatToPlainStringResult;
        } else if (tmp25.ROLES === MEMBERS) {
          let formatToPlainStringResult1;
          let tmp7;
          if (length > c11) {
            const intl2 = intl5.intl;
            const obj4 = { count: tmp6 };
            formatToPlainStringResult1 = intl2.formatToPlainString(intl5.t["+OYnFQ"], obj4);
            tmp7 = require;
          } else {
            tmp7 = require;
            const intl = intl5.intl;
            const obj5 = { count: length };
            formatToPlainStringResult1 = intl.formatToPlainString(intl5.t.T2BEtm, obj5);
          }
          tmp4 = tmp7;
          tmp5 = formatToPlainStringResult1;
        } else {
          const obj = GlobalUtils;
          obj.assertNever(MEMBERS);
          tmp4 = require;
        }
        const Fragment = react.Fragment;
        const obj6 = { children: items };
        const obj7 = { size: "sm", style: closure_2.sectionIcon };
        items = [metroImportAll(GroupIcon, obj7), ];
        const obj8 = { style: closure_2.labelDetail, variant: "text-sm/medium", children: tmp5 };
        items[1] = metroImportAll(tmp4(4832).Text, obj8);
        return React4(Fragment, obj6);
      }
    }
    obj9 = { children: items5 };
    const MEMBERS = constants.MEMBERS;
    const length = existingMembers.length;
    channel(11963);
    items5 = [renderCounts(MEMBERS, length, 0, tmp2(5403).GroupIcon), ];
    const ROLES = constants.ROLES;
    const length2 = stateFromStoresArray.length;
    channel(9035);
    items5[1] = renderCounts(ROLES, length2, 0, guild(9033).ShieldUserIcon);
  }
  const obj10 = { children: items2 };
  items6 = [tmp13(tmp14, obj3), ];
  const obj11 = { source: channel(9396), size: guild(1177).Icon.Sizes.SMALL };
  const Icon = tmp2(1177).Icon;
  items6[1] = tmp13(Icon, obj11);
  items2[1] = closure_9(PressableOpacity, obj2);
  return closure_9(tmp12, obj10);
};
