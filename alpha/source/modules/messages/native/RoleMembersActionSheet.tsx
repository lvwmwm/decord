// Module ID: 11337
// Function ID: 11338
// Name: RoleMembersActionSheet
// Dependencies: [19, 17, 5079, 6967, 2118, 21, 5090, 587, 558, 576, 11, 6808, 504, 6806, 1200, 5086, 11338, 6829, 2]

// Module 11337 (RoleMembersActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5086 */;
import GuildRoleMemberActionCreators from "GuildRoleMemberActionCreators" /* 6808 */;
import ChannelMemberStore from "ChannelMemberStore" /* 6967 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c9;
let metroImportAll;
let obj2;
let obj3;
const View = react_native.View;
const EVERYONE_CHANNEL_ID = ChannelMemberStore.EVERYONE_CHANNEL_ID;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerText: { flex: 1 }, roleDot: { paddingTop: 0 }, memberCount: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleMembersActionSheet(guildId) {
  let roleStyle;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(33);
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  const tmp4 = closure_10();
  if (cResult[0] === guildId) {
    let tmp5;
    let tmp6;
    let tmp10;
    if (cResult[1] === roleId) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    const effect = react.useEffect(tmp5, tmp6);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildRoleStore];
      cResult[4] = items;
      tmp10 = items;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === guildId) {
      let tmp12;
      let tmp13;
      let tmp16;
      let tmp15;
      if (cResult[6] === roleId) {
        tmp12 = cResult[7];
        tmp13 = cResult[8];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12, tmp13);
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AccessibilityStore];
        class A {
          constructor() {
            return roleStyle.roleStyle;
          }
        }
        cResult[9] = items1;
        cResult[10] = A;
        tmp16 = A;
        tmp15 = items1;
      } else {
        tmp15 = cResult[9];
        tmp16 = cResult[10];
      }
      const tmpResult2 = tmp(504);
      const tmp18 = "dot" === tmpResult2.useStateFromStores(tmp15, tmp16);
      if (tmp18) {
        if (stateFromStores != null) {
          const colorString = stateFromStores.colorString;
        }
        class A {
          constructor() {
            return roleStyle.roleStyle;
          }
        }
      }
      const obj4 = roleId(11);
      const result = obj4.castGuildIdAsEveryoneGuildRoleId(guildId);
      const tmp22 = roleId(6806)(guildId);
      class I {
        constructor() {
          const obj = SnowflakeUtilsDefault;
          const tmp = roleId;
          const tmp3 = guildId;
          if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
            const obj2 = GuildRoleMemberActionCreators;
            const membersForRole = obj2.requestMembersForRole(tmp3, tmp);
          }
        }
      }
      if (roleId !== result) {
        let tmp24;
        if (tmp22 != null) {
          tmp24 = tmp22[roleId];
        }
        if (tmp24 == null) {
          tmp24 = null;
        }
        class A {
          constructor() {
            return roleStyle.roleStyle;
          }
        }
      }
      if (cResult[11] === stateFromStores) {
        if (cResult[12] === tmp18) {
          let name;
          if (stateFromStores != null) {
            name = stateFromStores.name;
          }
          class A {
            constructor() {
              return roleStyle.roleStyle;
            }
          }
          let obj2 = { variant: "text-sm/semibold", style: tmp4.headerText, children: name };
          cResult[15] = tmp4.headerText;
          cResult[16] = name;
          cResult[17] = closure_8(tmp(5086).Text, obj2);
          closure_8(tmp(5086).Text, obj2);
          class I {
            constructor() {
              const obj = SnowflakeUtilsDefault;
              const tmp = roleId;
              const tmp3 = guildId;
              if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
                const obj2 = GuildRoleMemberActionCreators;
                const membersForRole = obj2.requestMembersForRole(tmp3, tmp);
              }
            }
          }
        }
      }
      let tmp26 = null;
      if (tmp18) {
        const obj3 = { color: stateFromStores.colorString, colors: null, size: "small", containerStyles: tmp4.roleDot };
        class A {
          constructor() {
            return roleStyle.roleStyle;
          }
        }
        tmp26 = closure_8(tmp(1200).RoleDot, obj3);
      }
      cResult[11] = stateFromStores;
      cResult[12] = tmp18;
      cResult[13] = tmp4.roleDot;
      cResult[14] = tmp26;
    }
    const fn = function v() {
      return GuildRoleStore.getRole(guildId, roleId);
    };
    const items2 = [guildId, roleId];
    cResult[5] = guildId;
    class I {
      constructor() {
        const obj = SnowflakeUtilsDefault;
        const tmp = roleId;
        const tmp3 = guildId;
        if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
          const obj2 = GuildRoleMemberActionCreators;
          const membersForRole = obj2.requestMembersForRole(tmp3, tmp);
        }
      }
    }
    cResult[6] = roleId;
    cResult[7] = fn;
    cResult[8] = items2;
    tmp13 = items2;
    tmp12 = fn;
  }
  class I {
    constructor() {
      const obj = SnowflakeUtilsDefault;
      const tmp = roleId;
      const tmp3 = guildId;
      if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
        const obj2 = GuildRoleMemberActionCreators;
        const membersForRole = obj2.requestMembersForRole(tmp3, tmp);
      }
    }
  }
  const items3 = [guildId, roleId];
  cResult[0] = guildId;
  cResult[1] = roleId;
  cResult[2] = I;
  cResult[3] = items3;
  tmp6 = items3;
  tmp5 = I;
}) : (function RoleMembersActionSheet(guildId) {
  let header;
  let obj5;
  let roleStyle;
  let tmp9Result;
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let channelId = guildId.channelId;
  let stateFromStores;
  let closure_4;
  let c5;
  let tmp = closure_10();
  dependencyMap = tmp;
  let items = [guildId, roleId];
  const effect = stateFromStores.useEffect(() => {
    const obj = SnowflakeUtilsDefault;
    const tmp = roleId;
    const tmp3 = guildId;
    if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
      const obj2 = GuildRoleMemberActionCreators;
      const membersForRole = obj2.requestMembersForRole(tmp3, tmp);
    }
  }, items);
  let tmp4 = dependencyMap;
  let tmp3 = guildId;
  let obj = guildId(504);
  const items1 = [GuildRoleStore];
  const items2 = [guildId, roleId];
  stateFromStores = obj.useStateFromStores(items1, () => GuildRoleStore.getRole(guildId, roleId), items2);
  let obj2 = guildId(504);
  const items3 = [c5];
  let tmp6 = "dot" === obj2.useStateFromStores(items3, () => roleStyle.roleStyle);
  if (tmp6) {
    let colorString;
    if (stateFromStores != null) {
      colorString = stateFromStores.colorString;
    }
    tmp6 = null != colorString;
  }
  closure_4 = tmp6;
  const tmp9 = roleId;
  let obj3 = roleId(11);
  const result = obj3.castGuildIdAsEveryoneGuildRoleId(guildId);
  const tmp11 = roleId(6806)(guildId);
  let tmp12 = null;
  if (roleId !== result) {
    let tmp13;
    if (tmp11 != null) {
      tmp13 = tmp11[roleId];
    }
    if (tmp13 == null) {
      tmp13 = null;
    }
    tmp12 = tmp13;
  }
  c5 = tmp12;
  const items4 = [tmp6, stateFromStores, tmp12, tmp];
  let tmp16Result = null;
  if (null != stateFromStores) {
    let obj4 = { scrollable: true, header: tmp14, children: closure_8(tmp9Result, obj5) };
    BottomSheet = tmp3(6829).BottomSheet;
    obj5 = { guildId, channelId, roleId, headerShown: false, inActionSheet: true, disableStickySections: true, disableThemedGradient: true };
    tmp9Result = tmp9(11338);
    if (channelId == null) {
      channelId = EVERYONE_CHANNEL_ID;
    }
    tmp16Result = tmp16(BottomSheet, obj4);
  }
  return tmp16Result;
});
let result = size.fileFinishedImporting("modules/messages/native/RoleMembersActionSheet.tsx");

export default tmp4;
