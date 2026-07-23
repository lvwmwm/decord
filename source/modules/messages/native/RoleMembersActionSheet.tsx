// Module ID: 10866
// Function ID: 84526
// Name: RoleMembersActionSheet
// Dependencies: [31, 27, 4122, 5658, 1910, 33, 4130, 689, 21, 5150, 566, 5148, 1273, 4126, 5187, 10867, 2]
// Exports: default

// Module 10866 (RoleMembersActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EVERYONE_CHANNEL_ID } from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerText = { flex: 1 };
_createForOfIteratorHelperLoose.roleDot = { paddingTop: 0 };
_createForOfIteratorHelperLoose.memberCount = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/RoleMembersActionSheet.tsx");

export default function RoleMembersActionSheet(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let channelId = guildId.channelId;
  let c4;
  let c5;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let items = [guildId, roleId];
  const effect = stateFromStores.useEffect(() => {
    if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
      const membersForRole = guildId(guildId[9]).requestMembersForRole(guildId, roleId);
      const obj2 = guildId(guildId[9]);
    }
  }, items);
  let obj = guildId(566);
  const items1 = [closure_7];
  const items2 = [guildId, roleId];
  stateFromStores = obj.useStateFromStores(items1, () => outer1_7.getRole(guildId, roleId), items2);
  const items3 = [c5];
  let tmp4 = "dot" === guildId(566).useStateFromStores(items3, () => _undefined.roleStyle);
  if (tmp4) {
    let colorString;
    if (null != stateFromStores) {
      colorString = stateFromStores.colorString;
    }
    tmp4 = null != colorString;
  }
  c4 = tmp4;
  let obj2 = guildId(566);
  const result = roleId(21).castGuildIdAsEveryoneGuildRoleId(guildId);
  const tmp8 = roleId(5148)(guildId);
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
  c5 = tmp9;
  const items4 = [tmp4, stateFromStores, tmp9, tmp];
  let tmp14Result = null;
  if (null != stateFromStores) {
    obj = { scrollable: true, header: tmp12 };
    obj = { guildId, channelId: null, roleId: null, headerShown: false, inActionSheet: true, disableStickySections: true, disableThemedGradient: true };
    if (null == channelId) {
      channelId = EVERYONE_CHANNEL_ID;
    }
    obj.channelId = channelId;
    obj.roleId = roleId;
    obj.children = closure_8(roleId(10867), obj);
    tmp14Result = tmp14(guildId(5187).BottomSheet, obj);
    const tmp18 = roleId(10867);
  }
  return tmp14Result;
};
