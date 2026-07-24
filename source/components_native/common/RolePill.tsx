// Module ID: 10214
// Function ID: 78858
// Name: RolePill
// Dependencies: [31, 27, 653, 33, 4130, 689, 3803, 5486, 5490, 3830, 4660, 5506, 4126, 2]
// Exports: default

// Module 10214 (RolePill)
import "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, MAX_VISUAL_ROLE_LENGTH: closure_5 } = ME);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginRight: 4, marginBottom: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 8, paddingVertical: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.pill = obj1;
let obj2 = { marginRight: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, height: 12, width: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_MUTED };
_createForOfIteratorHelperLoose.bubble = obj2;
let obj3 = { marginRight: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, height: 12, width: 12 };
_createForOfIteratorHelperLoose.verifiedContainer = obj3;
_createForOfIteratorHelperLoose.roleIcon = { paddingRight: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("components_native/common/RolePill.tsx");

export default function RolePill(role) {
  let color;
  let guildId;
  role = role.role;
  ({ guildId, color } = role);
  const DeveloperMode = role(3803).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = role(5486);
  obj = { guildId, roleId: role.id, size: 12 };
  const roleIcon = obj.useRoleIcon(obj);
  let name = role.name;
  let combined = name;
  if (role.name.length > closure_5) {
    name = role.name;
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, closure_5) + "...";
    name = combined;
  }
  if (null == color) {
    color = role.colorString;
  }
  const tags = role.tags;
  let guild_connections;
  if (null != tags) {
    guild_connections = tags.guild_connections;
  }
  const tmp7 = _createForOfIteratorHelperLoose();
  obj = {};
  let disableInteraction = !setting;
  if (!disableInteraction) {
    disableInteraction = role.disableInteraction;
  }
  obj.disabled = disableInteraction;
  obj.style = tmp7.container;
  obj.onPress = function handlePress() {
    role(outer1_2[8]).copy(role.id);
    const obj = role(outer1_2[8]);
    role(outer1_2[9]).roleIdCopied(combined);
  };
  obj.accessible = false;
  const obj1 = { style: tmp7.pill };
  if (undefined !== guild_connections) {
    const obj2 = { style: tmp7.verifiedContainer, roleId: role.id };
    if (null == guildId) {
      guildId = closure_4;
    }
    obj2.guildId = guildId;
    let tmp18;
    if (null != color) {
      tmp18 = color;
    }
    obj2.roleColor = tmp18;
    obj2.size = 14;
    obj2.displayRoleIcon = false;
    let tmp11Result = callback(combined(5506), obj2);
    const tmp14 = callback;
    const tmp17 = combined(5506);
  } else {
    const obj3 = {};
    const items = [tmp7.bubble, ];
    if (null != color) {
      const obj4 = { backgroundColor: color };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    items[1] = obj5;
    obj3.style = items;
    tmp11Result = callback(View, obj3);
    const tmp11 = callback;
    const tmp12 = View;
  }
  const items1 = [tmp11Result, , ];
  let tmp19 = null;
  if (null != roleIcon) {
    const obj6 = { style: tmp7.roleIcon, children: roleIcon };
    tmp19 = callback(View, obj6);
  }
  items1[1] = tmp19;
  const obj7 = { variant: "text-xs/semibold", color: "interactive-text-active", children: name };
  items1[2] = callback(role(4126).Text, obj7);
  obj1.children = items1;
  obj.children = closure_7(View, obj1);
  return callback(role(4660).PressableHighlight, obj);
};
