// Module ID: 11304
// Function ID: 87939
// Name: getRoleColor
// Dependencies: [57, 31, 5149, 1911, 1910, 653, 33, 11302, 8422, 566, 5150, 5165, 4126, 4646, 5045, 4098, 11289, 11290, 2]
// Exports: default

// Module 11304 (getRoleColor)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { DEFAULT_ROLE_COLOR_HEX } from "ME";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
const require = arg1;
function getRoleColor(role) {
  return null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX;
}
class RoleIcon {
  constructor(arg0) {
    role = global.role;
    if (null != role) {
      obj = {};
      tmp2 = getRoleColor;
      obj.backgroundColor = getRoleColor(role);
      tmp = obj;
    }
    tmp3 = jsx;
    obj = {};
    tmp4 = require("styles");
    tmp5 = jsx;
    obj1 = { size: "sm" };
    str = "interactive-text-default";
    if (null != role) {
      str = "white";
    }
    obj1.color = str;
    obj.icon = tmp5(require("ShieldUserIcon").ShieldUserIcon, obj1);
    obj.wrapperStyle = {};
    return tmp3(tmp4, obj);
  }
}
class RoleRow {
  constructor(arg0) {
    guildRole = global.guildRole;
    guildId = global.guildId;
    obj = Object.create(null);
    obj.guildRole = 0;
    obj.guildId = 0;
    merged = Object.assign(global, obj);
    obj = require("initialize");
    items = [];
    items[0] = c6;
    stateFromStores = obj.useStateFromStores(items, () => {
      const roleMemberCount = outer1_6.getRoleMemberCount(guildId);
      let tmp2;
      if (null != roleMemberCount) {
        tmp2 = roleMemberCount[guildRole.id];
      }
      return tmp2;
    });
    items1 = [];
    items1[0] = guildId;
    tmp4 = isEveryoneRole(guildRole);
    effect = c5.useEffect(() => {
      const memberCounts = outer1_2(outer1_3[10]).fetchMemberCounts(guildId);
    }, items1);
    tmp6 = jsx;
    obj1 = {};
    obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    obj2.children = guildRole.name;
    obj1.label = jsx(require("Text").Text, obj2);
    obj1.icon = jsx(RoleIcon, { role: guildRole });
    tmp7 = null;
    if (!tmp4) {
      tmp7 = null;
      if (null != stateFromStores) {
        tmp8 = jsxs;
        tmp9 = guildRole;
        tmp10 = closure_3;
        obj3 = { variant: "text-sm/normal", color: "text-muted" };
        tmp11 = jsx;
        num = 13;
        items2 = [, , ];
        items2[0] = jsx(require("GroupIcon").GroupIcon, { size: "xxs", color: "text-muted" });
        str = " ";
        items2[1] = " ";
        items2[2] = stateFromStores;
        obj3.children = items2;
        tmp7 = jsxs(require("Text").Text, obj3);
      }
    }
    obj1.trailing = tmp7;
    merged1 = Object.assign(merged);
    return tmp6(require("TableRowInner").TableRow, obj1, guildRole.id);
  }
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx");

export default function AppLauncherRoleListActionSheet(channel) {
  let onActionSheetDismiss;
  let require;
  ({ onRolePress: require, onActionSheetDismiss } = channel);
  function handleRolePress(role) {
    callback({ role: role.role });
    onActionSheetDismiss(first[15]).hideActionSheet("AppLauncherRoleListActionSheet");
    onActionSheetDismiss();
  }
  const guild_id = channel.channel.guild_id;
  let tmp = callback(ref.useState(""), 2);
  const first = tmp[0];
  callback = tmp[1];
  ref = ref.useRef(null);
  let obj = require(first[9]);
  const items = [handleRolePress];
  const stateFromStores = obj.useStateFromStores(items, () => handleRolePress.getSortedRoles(guild_id));
  const items1 = [stateFromStores, first];
  const memo = ref.useMemo(() => stateFromStores.filter((id) => {
    let tmp = outer1_3 === id.id;
    if (!tmp) {
      const trimmed = outer1_3.trim();
      tmp = onActionSheetDismiss(first[14])(trimmed, id.name.toLowerCase());
      const str = id.name;
      const tmp4 = onActionSheetDismiss(first[14]);
    }
    return tmp;
  }), items1);
  obj = { option: channel.option, onDismiss: onActionSheetDismiss };
  obj = {
    onChange(str) {
      callback2(str.toLowerCase());
      const current = ref.current;
      if (null != current) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  const items2 = [callback2(require(first[17]).AppLauncherListSearchBar, obj), ];
  if (0 === memo.length) {
    let tmp9 = callback2(require(first[17]).AppLauncherListEmptyState, {});
  } else {
    const obj1 = {
      ref,
      data: memo,
      renderItem(item) {
          item = item.item;
          const index = item.index;
          return outer1_10(outer1_14, {
            guildId: guild_id,
            guildRole: item,
            onPress() {
              outer1_8({ role: item });
            },
            start: 0 === index,
            end: index === memo.length - 1
          });
        }
    };
    tmp9 = callback2(require(first[17]).AppLauncherList, obj1);
  }
  items2[1] = tmp9;
  obj.children = items2;
  return closure_11(require(first[16]).AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY = "AppLauncherRoleListActionSheet";
export { RoleIcon };
export { RoleRow };
