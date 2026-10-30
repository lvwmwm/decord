// Module ID: 11583
// Function ID: 11584
// Name: RoleMembersActionSheet
// Dependencies: [19, 17, 5010, 7440, 4915, 21, 5009, 575, 11, 7293, 504, 7291, 1188, 5619, 5267, 11584, 2]
// Exports: default

// Module 11583 (RoleMembersActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import GuildRoleMemberActionCreators from "GuildRoleMemberActionCreators" /* 7293 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7440 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
let result = size.fileFinishedImporting("modules/messages/native/RoleMembersActionSheet.tsx");

export default function RoleMembersActionSheet(guildId) {
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
  const tmp11 = roleId(7291)(guildId);
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
    BottomSheet = tmp3(5267).BottomSheet;
    obj5 = { guildId, channelId, roleId, headerShown: false, inActionSheet: true, disableStickySections: true, disableThemedGradient: true };
    tmp9Result = tmp9(11584);
    if (channelId == null) {
      channelId = EVERYONE_CHANNEL_ID;
    }
    tmp16Result = tmp16(BottomSheet, obj4);
  }
  return tmp16Result;
};
