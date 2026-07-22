// Module ID: 9013
// Function ID: 70924
// Name: BotPermissions
// Dependencies: []
// Exports: default

// Module 9013 (BotPermissions)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.ICON_FEEDBACK_CRITICAL };
obj.disabledPermissionIcon = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/oauth2/native/BotPermissions.tsx");

export default function BotPermissions(guild) {
  let application;
  let onPermissionsChange;
  let permissions;
  ({ application, permissions } = guild);
  const arg1 = permissions;
  ({ deniedPermissions: closure_1, onPermissionsChange } = guild);
  const dependencyMap = onPermissionsChange;
  guild = guild.guild;
  const callback = guild;
  const React = callback4();
  const tmp = callback(React.useState(importAll(dependencyMap[6]).NONE), 2);
  let closure_5 = tmp[0];
  const callback2 = tmp[1];
  const items = [guild.permissions, onPermissionsChange, permissions];
  const effect = React.useEffect(() => {
    onPermissionsChange(true, permissions);
    callback2(callback(onPermissionsChange[7]).invert(guild.permissions));
    const obj = callback(onPermissionsChange[7]);
    onPermissionsChange(false, callback(onPermissionsChange[7]).invert(guild.permissions));
  }, items);
  const OrderedPermissions = arg1(dependencyMap[8]).OrderedPermissions;
  const found = OrderedPermissions.filter((arg0) => callback(onPermissionsChange[7]).has(permissions, arg0));
  const found1 = found.filter((arg0) => !callback(onPermissionsChange[7]).has(closure_5, arg0));
  const mapped = found1.map((arg0) => {
    const permissions = arg0;
    let obj = permissions(onPermissionsChange[8]);
    const permissionName = obj.getPermissionName(arg0);
    const obj2 = callback(onPermissionsChange[7]);
    obj = {
      checked: !callback(onPermissionsChange[7]).has(callback, arg0),
      onToggle(arg0) {
        return callback(arg0, arg0);
      },
      label: permissionName
    };
    return callback2(permissions(onPermissionsChange[9]).Checkbox, obj, String(arg0));
  });
  const found2 = found.filter((arg0) => callback(onPermissionsChange[7]).has(closure_5, arg0));
  const mapped1 = found2.map((arg0) => {
    let obj = permissions(onPermissionsChange[8]);
    const permissionName = obj.getPermissionName(arg0);
    obj = { "Bool(false)": "absolute", "Bool(false)": 8 };
    obj = { style: obj.disabledPermissionIcon, children: callback2(permissions(onPermissionsChange[11]).XSmallIcon, { "Bool(false)": true, "Bool(false)": "/assets/images/native" }) };
    const items = [callback2(closure_5, obj), callback2(permissions(onPermissionsChange[12]).Text, { variant: "text-md/medium", children: permissionName })];
    obj.children = items;
    return callback3(permissions(onPermissionsChange[10]).Stack, obj, String(arg0));
  });
  let obj = { spacing: 16 };
  obj = {};
  obj = { cachedAt: true, edpbxy: true };
  const intl = arg1(dependencyMap[13]).intl;
  obj.children = intl.format(arg1(dependencyMap[13]).t.sOaT2j, { applicationName: application.name, guildName: guild.name });
  const items1 = [callback2(arg1(dependencyMap[12]).Text, obj), callback2(arg1(dependencyMap[10]).Stack, { spacing: 12, children: mapped })];
  obj.children = items1;
  const items2 = [callback3(arg1(dependencyMap[10]).Stack, obj), ];
  let tmp5 = null;
  if (mapped1.length > 0) {
    const obj2 = {};
    const obj3 = { cachedAt: true, edpbxy: true };
    const intl2 = arg1(dependencyMap[13]).intl;
    const obj4 = { applicationName: application.name };
    obj3.children = intl2.format(arg1(dependencyMap[13]).t.fsOkF4, obj4);
    const items3 = [callback2(arg1(dependencyMap[12]).Text, obj3), ];
    const obj5 = { spacing: 12, children: mapped1 };
    items3[1] = callback2(arg1(dependencyMap[10]).Stack, obj5);
    obj2.children = items3;
    tmp5 = callback3(arg1(dependencyMap[10]).Stack, obj2);
  }
  items2[1] = tmp5;
  obj.children = items2;
  return callback3(arg1(dependencyMap[10]).Stack, obj);
};
