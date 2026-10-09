// Module ID: 12160
// Function ID: 12161
// Name: ChannelAccessInfo
// Dependencies: [19, 17, 2082, 2124, 2118, 21, 5091, 587, 558, 576, 1126, 8587, 504, 10731, 1388, 5087, 6191, 1200, 12159, 8200, 8607, 8605, 10978, 2]

// Module 12160 (ChannelAccessInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import GuildRecord from "GuildRecord" /* 2082 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 8587 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 10731 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelAccessInfo(guild) {
  let closure_2;
  let first;
  let intl2;
  let items1;
  let items2;
  let items4;
  let items5;
  let tmp7;
  let obj = guild(576);
  const cResult = obj.c(45);
  guild = guild.guild;
  const channel = guild.channel;
  let tmp4 = closure_12();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1126).intl;
    const stringResult = intl.string(guild(1126).t.li1wKf);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildRoleStore];
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === channel) {
    let tmp9;
    let tmp10;
    let tmp18;
    let str;
    let tmp17;
    let tmp16;
    let tmp15;
    let tmp14;
    let tmp13;
    let tmp12;
    let tmp11;
    if (cResult[3] === guild) {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const tmpResult = guild(504);
    const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp7, tmp9, tmp10);
    if (cResult[6] === channel) {
      if (cResult[7] === guild) {
        if (cResult[8] === stateFromStoresArray.length) {
          if (cResult[9] === tmp4.avatar) {
            if (cResult[10] === tmp4.labelDetail) {
              if (cResult[11] === tmp4.section) {
                if (cResult[12] === tmp4.sectionContent) {
                  if (cResult[13] === tmp4.sectionIcon) {
                    tmp11 = cResult[14];
                    tmp12 = cResult[15];
                    tmp13 = cResult[16];
                    tmp14 = cResult[17];
                    tmp15 = cResult[18];
                    tmp16 = cResult[19];
                    tmp17 = cResult[20];
                    str = cResult[21];
                    tmp18 = cResult[22];
                  }
                  if (cResult[30] === tmp11) {
                    if (cResult[31] === tmp15) {
                      let tmp41;
                      let tmp44;
                      if (cResult[32] === tmp16) {
                        tmp41 = cResult[33];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                        let obj2 = { source: channel(10978), size: tmp(1200).Icon.Sizes.SMALL };
                        const Icon = tmp(1200).Icon;
                        const tmp47 = closure_8(Icon, obj2);
                        cResult[34] = tmp47;
                        tmp44 = tmp47;
                      } else {
                        tmp44 = cResult[34];
                      }
                      if (cResult[35] === tmp12) {
                        if (cResult[36] === tmp13) {
                          if (cResult[37] === tmp41) {
                            if (cResult[38] === tmp17) {
                              if (cResult[39] === str) {
                                let tmp48;
                                if (cResult[40] === tmp18) {
                                  tmp48 = cResult[41];
                                }
                                if (cResult[42] === tmp14) {
                                  let tmp51;
                                  if (cResult[43] === tmp48) {
                                    tmp51 = cResult[44];
                                  }
                                  return tmp51;
                                }
                                let obj3 = { children: items1 };
                                items1 = [tmp14, tmp48];
                                const tmp54 = closure_9(closure_10, obj3);
                                cResult[42] = tmp14;
                                cResult[43] = tmp48;
                                cResult[44] = tmp54;
                                tmp51 = tmp54;
                              }
                            }
                          }
                        }
                      }
                      let obj4 = { accessibilityLabel: tmp17, accessibilityRole: str, onPress: tmp18, style: tmp13, children: items2 };
                      items2 = [tmp41, tmp44];
                      const tmp50 = closure_9(tmp12, obj4);
                      cResult[35] = tmp12;
                      cResult[36] = tmp13;
                      cResult[37] = tmp41;
                      class T {
                        constructor() {
                          const obj = ChannelPermissionsUtils;
                          return obj.getExistingRoles(guild, GuildRoleStore.getSortedRoles(guild.id), channel, channel.accessPermissions);
                        }
                      }
                      cResult[39] = str;
                      cResult[40] = tmp18;
                      cResult[41] = tmp50;
                      tmp48 = tmp50;
                    }
                  }
                  let obj5 = { style: tmp15, children: tmp16 };
                  const tmp43 = closure_8(tmp11, obj5);
                  cResult[30] = tmp11;
                  cResult[31] = tmp15;
                  cResult[32] = tmp16;
                  cResult[33] = tmp43;
                  tmp41 = tmp43;
                }
              }
            }
          }
        }
      }
    }
    let id;
    const getMemberIds = GuildMemberStore.getMemberIds;
    if (guild != null) {
      id = guild.id;
    }
    const memberIds = getMemberIds(id);
    const tmpResult2 = guild(8587);
    const tmp25 = channel;
    const existingMembers = tmpResult2.getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
    let first1 = null;
    const tmp27 = 0 === stateFromStoresArray.length && 1 === existingMembers.length && isGuildOwner(guild, existingMembers[0]);
    if (tmp27) {
      first1 = existingMembers[0];
    }
    if (cResult[23] === channel.guild_id) {
      let tmp30;
      if (cResult[24] === channel.id) {
        tmp30 = cResult[25];
      }
      if (cResult[26] === tmp4.labelDetail) {
        let tmp32;
        let tmp33;
        let obj12;
        if (cResult[27] === tmp4.sectionIcon) {
          tmp32 = cResult[28];
        }
        const _Symbol = Symbol;
        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
          let obj6 = { variant: "eyebrow", children: first };
          const tmp35 = closure_8(guild(5087).Text, obj6);
          cResult[29] = tmp35;
          tmp33 = tmp35;
        } else {
          tmp33 = cResult[29];
        }
        const PressableOpacity = tmp(6191).PressableOpacity;
        const section = tmp4.section;
        const sectionContent = tmp4.sectionContent;
        const tmp38 = closure_10;
        if (null != first1) {
          let obj7 = { children: null };
          let obj8 = { style: tmp4.avatar, user: first1, guildId: guild.id, size: tmp(1200).AvatarSizes.XSMALL };
          const Avatar = tmp(1200).Avatar;
          const items3 = [closure_8(Avatar, obj8), ];
          const obj10 = { variant: "text-sm/semibold", children: first1.tag };
          const obj9 = { children: items4 };
          items4 = [closure_8(tmp(5087).Text, obj10), ];
          const obj11 = { variant: "text-xs/medium", children: intl2.string(guild(1126).t.rt0ERW) };
          const Text = tmp(5087).Text;
          intl2 = tmp(1126).intl;
          items4[1] = closure_8(Text, obj11);
          items3[1] = closure_9(View, obj9);
          class T {
            constructor() {
              const obj = ChannelPermissionsUtils;
              return obj.getExistingRoles(guild, GuildRoleStore.getSortedRoles(guild.id), channel, channel.accessPermissions);
            }
          }
          obj12 = obj7;
        } else {
          obj12 = { children: items5 };
          const MEMBERS = constants.MEMBERS;
          items5 = [, ];
          const length = existingMembers.length;
          const tmp57 = channel(12159);
          items5[0] = tmp32(MEMBERS, length, tmp57, guild(8200).GroupIcon);
          const ROLES = constants.ROLES;
          const length2 = stateFromStoresArray.length;
          const tmp59 = channel(8607);
          items5[1] = tmp32(ROLES, length2, tmp59, guild(8605).ShieldUserIcon);
        }
        const tmp37Result = closure_9(tmp38, obj12);
        cResult[6] = channel;
        cResult[7] = guild;
        cResult[8] = stateFromStoresArray.length;
        cResult[9] = tmp4.avatar;
        cResult[10] = tmp4.labelDetail;
        class T {
          constructor() {
            const obj = ChannelPermissionsUtils;
            return obj.getExistingRoles(guild, GuildRoleStore.getSortedRoles(guild.id), channel, channel.accessPermissions);
          }
        }
        cResult[12] = tmp4.sectionContent;
        cResult[13] = tmp4.sectionIcon;
        cResult[14] = View;
        cResult[15] = PressableOpacity;
        cResult[16] = section;
        cResult[17] = tmp33;
        cResult[18] = sectionContent;
        cResult[19] = tmp37Result;
        cResult[20] = first;
        cResult[21] = "button";
        cResult[22] = tmp30;
        tmp18 = tmp30;
        str = "button";
        tmp17 = first;
        tmp16 = tmp37Result;
        tmp15 = sectionContent;
        tmp14 = tmp33;
        tmp13 = section;
        tmp12 = PressableOpacity;
        tmp11 = tmp36;
      }
      function renderCounts(arg0, count, arg2, arg3) {
        let items;
        if (0 === count) {
          return null;
        } else {
          let tmp4;
          let tmp5;
          if (constants.MEMBERS === arg0) {
            let formatToPlainStringResult;
            let tmp13;
            if (count > c11) {
              const intl4 = intl5.intl;
              const obj2 = { count: tmp12 };
              formatToPlainStringResult = intl4.formatToPlainString(intl5.t.PR5l07, obj2);
              tmp13 = require;
            } else {
              tmp13 = require;
              const intl3 = intl5.intl;
              const obj3 = { count };
              formatToPlainStringResult = intl3.formatToPlainString(intl5.t.bu5sya, obj3);
            }
            tmp4 = tmp13;
            tmp5 = formatToPlainStringResult;
          } else if (tmp25.ROLES === arg0) {
            let formatToPlainStringResult1;
            let tmp7;
            if (count > c11) {
              const intl2 = intl5.intl;
              const obj4 = { count: tmp6 };
              formatToPlainStringResult1 = intl2.formatToPlainString(intl5.t["+OYnFQ"], obj4);
              tmp7 = require;
            } else {
              tmp7 = require;
              const intl = intl5.intl;
              const obj5 = { count };
              formatToPlainStringResult1 = intl.formatToPlainString(intl5.t.T2BEtm, obj5);
            }
            tmp4 = tmp7;
            tmp5 = formatToPlainStringResult1;
          } else {
            const obj = GlobalUtils;
            obj.assertNever(arg0);
            tmp4 = require;
          }
          const Fragment = react.Fragment;
          const obj6 = { children: items };
          const obj7 = { size: "sm", style: closure_2.sectionIcon };
          items = [metroImportAll(arg3, obj7), ];
          const obj8 = { style: closure_2.labelDetail, variant: "text-sm/medium", children: tmp5 };
          items[1] = metroImportAll(tmp4(5087).Text, obj8);
          return React4(Fragment, obj6);
        }
      }
      cResult[26] = tmp4.labelDetail;
      cResult[27] = tmp4.sectionIcon;
      cResult[28] = renderCounts;
      tmp32 = renderCounts;
    }
    class T {
      constructor() {
        const obj = ChannelPermissionsUtils;
        return obj.getExistingRoles(guild, GuildRoleStore.getSortedRoles(guild.id), channel, channel.accessPermissions);
      }
    }
    cResult[23] = channel.guild_id;
    cResult[24] = channel.id;
    cResult[25] = tmp31;
    tmp30 = tmp31;
  }
  class T {
    constructor() {
      const obj = ChannelPermissionsUtils;
      return obj.getExistingRoles(guild, GuildRoleStore.getSortedRoles(guild.id), channel, channel.accessPermissions);
    }
  }
  const items6 = [guild, channel];
  cResult[2] = channel;
  cResult[3] = guild;
  cResult[4] = T;
  cResult[5] = items6;
  tmp10 = items6;
  tmp9 = T;
}) : (function ChannelAccessInfo(guild) {
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
  let intl = guild(1126).intl;
  const stringResult = intl.string(guild(1126).t.li1wKf);
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
  const tmp2Result = guild(8587);
  const existingMembers = tmp2Result.getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
  const tmp8 = 0 === stateFromStoresArray.length && 1 === existingMembers.length && isGuildOwner(guild, existingMembers[0]);
  let first = null;
  if (tmp8) {
    first = existingMembers[0];
  }
  const tmp12 = closure_10;
  let tmp13 = closure_8;
  const items2 = [closure_8(tmp2(5087).Text, { variant: "eyebrow", children: stringResult }), ];
  let obj2 = {
    accessibilityLabel: stringResult,
    accessibilityRole: "button",
    onPress: function handleSectionPressed() {
      const obj = channel_permissions_ChannelPermissionsUtils;
      const result = obj.openChannelMembersActionSheet(channel.id, channel.guild_id);
    },
    style: tmp.section,
    children: items6
  };
  const tmp14 = View;
  let obj3 = { style: tmp.sectionContent, children: tmp11(tmp12, obj9) };
  const PressableOpacity = tmp2(6191).PressableOpacity;
  if (null != first) {
    let obj4 = { children: items3 };
    let obj5 = { style: tmp.avatar, user: first, guildId: guild.id, size: tmp2(1200).AvatarSizes.XSMALL };
    const Avatar = tmp2(1200).Avatar;
    items3 = [tmp13(Avatar, obj5), ];
    let obj6 = { children: items4 };
    let obj7 = { variant: "text-sm/semibold", children: first.tag };
    items4 = [tmp13(tmp2(5087).Text, obj7), ];
    let obj8 = { variant: "text-xs/medium", children: intl2.string(tmp2(1126).t.rt0ERW) };
    const Text = tmp2(5087).Text;
    intl2 = tmp2(1126).intl;
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
        items[1] = metroImportAll(tmp4(5087).Text, obj8);
        return React4(Fragment, obj6);
      }
    }
    obj9 = { children: items5 };
    const MEMBERS = constants.MEMBERS;
    const length = existingMembers.length;
    channel(12159);
    items5 = [renderCounts(MEMBERS, length, 0, tmp2(8200).GroupIcon), ];
    const ROLES = constants.ROLES;
    const length2 = stateFromStoresArray.length;
    channel(8607);
    items5[1] = renderCounts(ROLES, length2, 0, guild(8605).ShieldUserIcon);
  }
  const obj10 = { children: items2 };
  items6 = [tmp13(tmp14, obj3), ];
  const obj11 = { source: channel(10978), size: guild(1200).Icon.Sizes.SMALL };
  const Icon = tmp2(1200).Icon;
  items6[1] = tmp13(Icon, obj11);
  items2[1] = closure_9(PressableOpacity, obj2);
  return closure_9(tmp12, obj10);
});
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default tmp3;
