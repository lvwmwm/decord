// Module ID: 9978
// Function ID: 77169
// Name: OfficialConnectionIcon
// Dependencies: []
// Exports: default

// Module 9978 (OfficialConnectionIcon)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ verifiedCheck: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

export default function OfficialConnectionIcon(arg0) {
  let displayRoleIcon;
  let guildId;
  let role;
  let roleColor;
  let roleId;
  let size;
  let style;
  ({ role, roleId, roleColor, size, style } = arg0);
  ({ guildId, displayRoleIcon } = arg0);
  const tmp = callback3();
  let obj = { width: size, height: size };
  let obj1 = arg1(dependencyMap[5]);
  obj = { guildId };
  if (null == roleId) {
    let id;
    if (null != role) {
      id = role.id;
    }
    roleId = id;
  }
  if (null == roleId) {
    roleId = closure_5;
  }
  obj.roleId = roleId;
  obj.size = size;
  const roleIcon = obj1.useRoleIcon(obj);
  if (false !== displayRoleIcon) {
    if (null != roleIcon) {
      obj = {};
      const items = [style, obj];
      obj.style = items;
      obj.children = roleIcon;
      return callback(View, obj);
    }
  }
  if (null == roleColor) {
    let colorString;
    if (null != role) {
      colorString = role.colorString;
    }
    roleColor = colorString;
  }
  if (null == roleColor) {
    roleColor = closure_4;
  }
  let PRIMARY_630 = importDefault(dependencyMap[6]).unsafe_rawColors.WHITE;
  let obj3 = arg1(dependencyMap[7]);
  const hex2intResult = obj3.hex2int(roleColor);
  if (obj5.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_630;
  }
  obj1 = { style: items1 };
  const items1 = [style, obj];
  const obj2 = { style: items2 };
  const items2 = [tmp.verifiedCheck, obj];
  obj2.size = arg1(dependencyMap[8]).Icon.Sizes.CUSTOM;
  obj2.source = importDefault(dependencyMap[9]);
  obj2.color = roleColor;
  const items3 = [callback(arg1(dependencyMap[8]).Icon, obj2), ];
  obj3 = { style: items4 };
  const items4 = [tmp.verifiedCheck, obj];
  obj3.size = arg1(dependencyMap[8]).Icon.Sizes.CUSTOM;
  obj3.source = importDefault(dependencyMap[10]);
  obj3.color = PRIMARY_630;
  items3[1] = callback(arg1(dependencyMap[8]).Icon, obj3);
  obj1.children = items3;
  return callback2(View, obj1);
};
