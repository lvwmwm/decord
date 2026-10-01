// Module ID: 8731
// Function ID: 8732
// Name: BotPermissions
// Dependencies: [32, 19, 17, 21, 4836, 576, 4474, 1086, 8526, 8732, 5279, 5992, 4832, 1115, 2]
// Exports: default

// Module 8731 (BotPermissions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import permissions from "permissions" /* 8526 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
let size;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { disabledPermissionIcon: size };
size = { width: 24, height: 24, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
let closure_8 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/BotPermissions.tsx");

export default function BotPermissions(guild) {
  let _undefined;
  let application;
  let c5;
  let c6;
  let closure_4;
  let intl;
  let intl2;
  let items1;
  let items3;
  let obj3;
  let obj6;
  let onPermissionsChange;
  let permissions;
  ({ application, permissions } = guild);
  ({ deniedPermissions: importAll, onPermissionsChange } = guild);
  guild = guild.guild;
  c5 = undefined;
  c6 = undefined;
  react = closure_8();
  [c5, c6] = guild(react.useState(require("PermissionUtils").NONE), 2);
  let items = [guild.permissions, onPermissionsChange, permissions];
  const tmp2 = guild(react.useState(require("PermissionUtils").NONE), 2);
  const effect = react.useEffect(() => {
    onPermissionsChange(true, permissions);
    const obj = BigFlagUtilsAll;
    _undefined(obj.invert(guild.permissions));
    const obj2 = BigFlagUtilsAll;
    onPermissionsChange(false, obj2.invert(guild.permissions));
  }, items);
  const OrderedPermissions = permissions(onPermissionsChange[8]).OrderedPermissions;
  const found = OrderedPermissions.filter((item) => {
    const obj = BigFlagUtilsAll;
    return obj.has(permissions, item);
  });
  const found1 = found.filter((item) => {
    const obj = BigFlagUtilsAll;
    return !obj.has(c5, item);
  });
  const mapped = found1.map((item) => {
    let closure_0 = item;
    const obj = permissions(onPermissionsChange[8]);
    const permissionName = obj.getPermissionName(item);
    const obj2 = require("BigFlagUtils");
    const obj3 = {
      checked: !obj2.has(importAll, item),
      onToggle(arg0) {
        return onPermissionsChange(arg0, item);
      },
      label: permissionName
    };
    return _undefined(permissions(onPermissionsChange[9]).Checkbox, obj3, String(item));
  });
  const found2 = found.filter((item) => {
    const obj = BigFlagUtilsAll;
    return obj.has(c5, item);
  });
  const mapped1 = found2.map((item) => {
    let items;
    const obj = permissions;
    const permissionName = obj.getPermissionName(item);
    const obj2 = { direction: "horizontal", align: "center", children: items };
    const obj3 = { style: closure_4.disabledPermissionIcon, children: metroRequire(XSmallIcon.XSmallIcon, { size: "sm", color: "white" }) };
    const Stack = Stack_Stack.Stack;
    items = [metroRequire(View, obj3), metroRequire(Text_Text.Text, { variant: "text-md/medium", children: permissionName })];
    return metroImportDefault(Stack, obj2, String(item));
  });
  let Stack = permissions(onPermissionsChange[10]).Stack;
  let obj = { children: items1 };
  const Stack2 = permissions(onPermissionsChange[10]).Stack;
  let obj2 = { variant: "text-sm/medium", color: "text-subtle", children: intl.format(permissions(onPermissionsChange[13]).t.sOaT2j, obj3) };
  const Text = permissions(onPermissionsChange[12]).Text;
  intl = permissions(onPermissionsChange[13]).intl;
  obj3 = { applicationName: application.name, guildName: guild.name };
  items1 = [c6(Text, obj2), c6(permissions(onPermissionsChange[10]).Stack, { spacing: 12, children: mapped })];
  const children = [closure_7(Stack2, obj), ];
  let tmp6Result = null;
  if (mapped1.length > 0) {
    const obj4 = { children: items3 };
    const Stack3 = tmp4(tmp[10]).Stack;
    const obj5 = { variant: "text-sm/medium", color: "text-subtle", children: intl2.format(permissions(onPermissionsChange[13]).t.fsOkF4, obj6) };
    const Text2 = tmp4(tmp[12]).Text;
    intl2 = tmp4(tmp[13]).intl;
    obj6 = { applicationName: application.name };
    items3 = [c6(Text2, obj5), ];
    const obj7 = { spacing: 12, children: mapped1 };
    items3[1] = c6(permissions(onPermissionsChange[10]).Stack, obj7);
    tmp6Result = tmp6(Stack3, obj4);
  }
  children[1] = tmp6Result;
  return closure_7(Stack, { spacing: 16, children });
};
