// Module ID: 5485
// Function ID: 46830
// Name: RoleDot
// Dependencies: [31, 27, 1917, 1910, 653, 33, 4130, 689, 5486, 3803, 5489, 5490, 3830, 1212, 5487, 5495, 5506, 4126, 4660, 566, 5508, 5509, 2]
// Exports: default

// Module 5485 (RoleDot)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function RoleDot(color) {
  color = color.color;
  let obj = {};
  const items = [_createForOfIteratorHelperLoose().roleDot, ];
  obj = {};
  if (null == color) {
    color = closure_7;
  }
  obj.backgroundColor = color;
  items[1] = obj;
  obj.style = items;
  return closure_9(View, obj);
}
class RoleItem {
  constructor(arg0) {
    role = global.role;
    guildId = global.guildId;
    colorString = global.color;
    concat = undefined;
    colorString = undefined;
    c4 = undefined;
    guild_connections = undefined;
    renderContent = function renderContent() {
      let obj = {};
      if (_isNativeReflectConstruct) {
        obj = { roleId: role.id, guildId };
        let colorString;
        if (null != role) {
          colorString = role.colorString;
        }
        let tmp17;
        if (null != colorString) {
          tmp17 = colorString;
        }
        obj.roleColor = tmp17;
        obj.size = 12;
        obj.displayRoleIcon = false;
        let tmp3Result = tmp3(guildId(name[16]), obj);
        const tmp11 = guildId(name[16]);
      } else {
        obj = {};
        let tmp7;
        if (null != colorString) {
          tmp7 = colorString;
        }
        obj.color = tmp7;
        tmp3Result = tmp3(outer1_13, obj);
        const tmp4 = outer1_13;
      }
      const items = [tmp3Result, roleIcon, outer1_9(role(name[17]).Text, { variant: "text-xs/medium", children: name })];
      obj.children = items;
      return outer1_11(outer1_10, obj);
    };
    tmp = c12();
    if (role.name.length <= MAX_VISUAL_ROLE_LENGTH) {
      name = role.name;
    } else {
      name = role.name;
      tmp2 = MAX_VISUAL_ROLE_LENGTH;
      num = 0;
      tmp3 = globalThis;
      _HermesInternal = HermesInternal;
      str = "";
      str2 = "...";
      name = "" + require("result") + "...";
    }
    concat = name;
    if (null == colorString) {
      colorString = role.colorString;
    }
    obj = require("useRoleIcon");
    obj = { guildId, roleId: role.id, size: 12 };
    roleIcon = obj.useRoleIcon(obj);
    c4 = roleIcon;
    tags = role.tags;
    guild_connections = undefined;
    if (null != tags) {
      guild_connections = tags.guild_connections;
    }
    guild_connections = undefined !== guild_connections;
    DeveloperMode = require("explicitContentFromProto").DeveloperMode;
    setting = DeveloperMode.useSetting();
    obj3 = require("items");
    items = [, ];
    items[0] = role.id;
    items[1] = name;
    items1 = [, , ];
    items1[0] = role;
    items1[1] = name;
    items1[2] = roleIcon;
    callback = colorString.useCallback(() => {
      role(name[11]).copy(role.id);
      const obj = role(name[11]);
      role(name[12]).roleIdCopied(name);
    }, items);
    tmp9 = jsx;
    if (setting) {
      tmp12 = role;
      tmp13 = concat;
      num2 = 18;
      obj1 = {};
      obj1.onPress = callback;
      tmp14 = undefined;
      if (setting) {
        if (obj3.useExperiment({ location: "RoleItem" }, { autoTrackExposure: false }).tidaWebformEnabled) {
          tmp14 = tmp8;
        }
      }
      obj1.onLongPress = tmp14;
      str3 = "button";
      obj1.accessibilityRole = "button";
      obj1.accessibilityLabel = name;
      tmp15 = role;
      tmp16 = concat;
      num3 = 13;
      intl = require("getSystemLocale").intl;
      obj1.accessibilityHint = intl.string(require("getSystemLocale").t.sMsaLg);
      obj1.style = tmp.role;
      obj1.children = renderContent();
      tmp9Result = tmp9(require("PressableBase").PressableHighlight, obj1);
    } else {
      tmp10 = c4;
      obj2 = {};
      obj2.style = tmp.role;
      obj2.children = renderContent();
      tmp9Result = tmp9(c4, obj2);
    }
    return tmp9Result;
  }
}
function RolesList(guildMemberRoleIds) {
  guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
  const guildId = guildMemberRoleIds.guildId;
  let obj = guildMemberRoleIds(566);
  const items = [closure_6];
  const items1 = [guildMemberRoleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const manyRoles = outer1_6.getManyRoles(guildId, guildMemberRoleIds);
    return manyRoles.sort(guildMemberRoleIds(outer1_2[20]).sortRolesByVerification);
  }, items1);
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.roleContainer, children: stateFromStoresArray.map((id) => outer1_9(outer1_14, { role: id, guildId }, id.id)) };
    tmp2 = callback(View, obj);
  }
  return tmp2;
}
({ DEFAULT_ROLE_COLOR_HEX: closure_7, MAX_VISUAL_ROLE_LENGTH: closure_8 } = ME);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { roleContainer: { flexDirection: "row", gap: 8, flexWrap: "wrap" } };
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", columnGap: 4, padding: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.role = _createForOfIteratorHelperLoose;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, height: 12, width: 12 };
_createForOfIteratorHelperLoose.roleDot = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileRolesCard.tsx");

export default function UserProfileRolesCard(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  let obj = userId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [userId, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getMember(guildId, userId), items1);
  let roles;
  if (null != stateFromStores) {
    roles = stateFromStores.roles;
  }
  if (null == roles) {
    roles = [];
  }
  let tmp2 = null;
  if (0 !== roles.length) {
    obj = {};
    const intl = userId(1212).intl;
    obj.title = intl.string(userId(1212).t["LPJmL/"]);
    obj.style = userId.style;
    obj = { guildId, guildMemberRoleIds: roles };
    obj.children = callback(RolesList, obj);
    tmp2 = callback(guildId(5509), obj);
    const tmp6 = guildId(5509);
  }
  return tmp2;
};
export { RoleItem };
