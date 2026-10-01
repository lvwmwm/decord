// Module ID: 10409
// Function ID: 10410
// Name: RolePill
// Dependencies: [19, 17, 1074, 21, 4836, 576, 2021, 6607, 6610, 4527, 5435, 6624, 6626, 4832, 2]
// Exports: default

// Module 10409 (RolePill)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
const View = react_native.View;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, MAX_VISUAL_ROLE_LENGTH: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, pill: obj3, bubble: size, verifiedContainer: size1, roleIcon: { paddingRight: 4 } };
obj2 = { marginRight: 4, marginBottom: 4, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
size = { marginRight: 8, borderRadius: nativeDefault.radii.sm, height: 12, width: 12, backgroundColor: nativeDefault.colors.ICON_MUTED };
size1 = { marginRight: 8, borderRadius: nativeDefault.radii.sm, height: 12, width: 12 };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("components_native/common/RolePill.tsx");

export default function RolePill(role) {
  let color;
  let guildId;
  let items1;
  let obj10;
  let obj4;
  let tmp10Result;
  let tmp12;
  let tmp19;
  role = role.role;
  ({ guildId, color } = role);
  const disableInteraction = role.disableInteraction;
  const DeveloperMode = role(2021).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = role(6607);
  let obj2 = { guildId, roleId: role.id, size: 12 };
  const roleIconProps = obj.useRoleIconProps(obj2);
  let name = role.name;
  let combined = name;
  if (role.name.length > closure_5) {
    const name1 = role.name;
    const _HermesInternal = HermesInternal;
    combined = "" + name1.slice(0, tmp5) + "...";
    name = combined;
  }
  if (color == null) {
    color = role.colorString;
  }
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  const tmp9 = closure_8();
  let tmp11 = !setting;
  const PressableHighlight = tmp(5435).PressableHighlight;
  if (setting) {
    tmp11 = disableInteraction;
  }
  const obj3 = {
    disabled: tmp11,
    style: tmp9.container,
    onPress: function handlePress() {
      const obj = ClipboardUtils;
      obj.copy(role.id);
      const obj2 = ToastUtils;
      obj2.roleIdCopied(combined);
    },
    accessible: false,
    children: tmp12(View, obj4)
  };
  obj4 = { style: tmp9.pill, children: items1 };
  tmp12 = closure_7;
  if (undefined !== guild_connections) {
    const obj5 = { style: tmp9.verifiedContainer, roleId: role.id, guildId, roleColor: color, size: 14, displayRoleIcon: false };
    const tmp16 = combined(6624);
    if (guildId == null) {
      guildId = closure_4;
    }
    tmp10Result = tmp10(tmp16, obj5);
  } else {
    let obj7;
    const items = [tmp9.bubble, ];
    if (null != color) {
      obj7 = { backgroundColor: color };
      const obj6 = { backgroundColor: color };
    } else {
      obj7 = {};
    }
    const obj8 = { style: items };
    items[1] = obj7;
    tmp10Result = tmp10(tmp13, obj8);
  }
  items1 = [tmp10Result, , ];
  let tmp10Result2 = null;
  if (null != roleIconProps) {
    const obj9 = { style: tmp9.roleIcon, children: closure_6(tmp19, obj10) };
    obj10 = {};
    tmp19 = combined(6626);
    const merged = Object.assign(roleIconProps);
    tmp10Result2 = tmp10(tmp13, obj9);
  }
  items1[1] = tmp10Result2;
  items1[2] = closure_6(role(4832).Text, { variant: "text-xs/semibold", color: "interactive-text-active", children: name });
  return closure_6(PressableHighlight, obj3);
};
