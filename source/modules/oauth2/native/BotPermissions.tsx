// Module ID: 9059
// Function ID: 71180
// Name: BotPermissions
// Dependencies: [57, 31, 27, 33, 4130, 689, 3763, 483, 9003, 9060, 4541, 5119, 4126, 1212, 2]
// Exports: default

// Module 9059 (BotPermissions)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: 24, height: 24, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.disabledPermissionIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/oauth2/native/BotPermissions.tsx");

export default function BotPermissions(guild) {
  let application;
  let importAll;
  let onPermissionsChange;
  let permissions;
  ({ application, permissions } = guild);
  ({ deniedPermissions: importAll, onPermissionsChange } = guild);
  guild = guild.guild;
  const React = _createForOfIteratorHelperLoose();
  const tmp = guild(React.useState(importAll(onPermissionsChange[6]).NONE), 2);
  let closure_5 = tmp[0];
  const callback = tmp[1];
  let items = [guild.permissions, onPermissionsChange, permissions];
  const effect = React.useEffect(() => {
    onPermissionsChange(true, permissions);
    callback(outer1_1(onPermissionsChange[7]).invert(guild.permissions));
    const obj = outer1_1(onPermissionsChange[7]);
    onPermissionsChange(false, outer1_1(onPermissionsChange[7]).invert(guild.permissions));
  }, items);
  const OrderedPermissions = permissions(onPermissionsChange[8]).OrderedPermissions;
  const found = OrderedPermissions.filter((arg0) => outer1_1(onPermissionsChange[7]).has(permissions, arg0));
  const found1 = found.filter((arg0) => !outer1_1(onPermissionsChange[7]).has(closure_5, arg0));
  const mapped = found1.map((arg0) => {
    let closure_0 = arg0;
    let obj = permissions(onPermissionsChange[8]);
    const permissionName = obj.getPermissionName(arg0);
    const obj2 = outer1_1(onPermissionsChange[7]);
    obj = {
      checked: !outer1_1(onPermissionsChange[7]).has(closure_1, arg0),
      onToggle(arg0) {
        return outer1_2(arg0, closure_0);
      },
      label: permissionName
    };
    return callback(permissions(onPermissionsChange[9]).Checkbox, obj, String(arg0));
  });
  const found2 = found.filter((arg0) => outer1_1(onPermissionsChange[7]).has(closure_5, arg0));
  const mapped1 = found2.map((arg0) => {
    let obj = permissions(onPermissionsChange[8]);
    const permissionName = obj.getPermissionName(arg0);
    obj = { direction: "horizontal", align: "center" };
    obj = { style: obj.disabledPermissionIcon, children: callback(permissions(onPermissionsChange[11]).XSmallIcon, { size: "sm", color: "white" }) };
    const items = [callback(closure_5, obj), callback(permissions(onPermissionsChange[12]).Text, { variant: "text-md/medium", children: permissionName })];
    obj.children = items;
    return outer1_7(permissions(onPermissionsChange[10]).Stack, obj, String(arg0));
  });
  let obj = { spacing: 16 };
  obj = {};
  obj = { variant: "text-sm/medium", color: "text-subtle" };
  const intl = permissions(onPermissionsChange[13]).intl;
  obj.children = intl.format(permissions(onPermissionsChange[13]).t.sOaT2j, { applicationName: application.name, guildName: guild.name });
  const items1 = [callback(permissions(onPermissionsChange[12]).Text, obj), callback(permissions(onPermissionsChange[10]).Stack, { spacing: 12, children: mapped })];
  obj.children = items1;
  const items2 = [callback2(permissions(onPermissionsChange[10]).Stack, obj), ];
  let tmp5 = null;
  if (mapped1.length > 0) {
    let obj2 = {};
    const obj3 = { variant: "text-sm/medium", color: "text-subtle" };
    const intl2 = permissions(onPermissionsChange[13]).intl;
    const obj4 = { applicationName: application.name };
    obj3.children = intl2.format(permissions(onPermissionsChange[13]).t.fsOkF4, obj4);
    const items3 = [callback(permissions(onPermissionsChange[12]).Text, obj3), ];
    const obj5 = { spacing: 12, children: mapped1 };
    items3[1] = callback(permissions(onPermissionsChange[10]).Stack, obj5);
    obj2.children = items3;
    tmp5 = callback2(permissions(onPermissionsChange[10]).Stack, obj2);
  }
  items2[1] = tmp5;
  obj.children = items2;
  return callback2(permissions(onPermissionsChange[10]).Stack, obj);
};
