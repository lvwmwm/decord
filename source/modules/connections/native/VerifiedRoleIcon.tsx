// Module ID: 5506
// Function ID: 46903
// Name: VerifiedRoleIcon
// Dependencies: []
// Exports: default

// Module 5506 (VerifiedRoleIcon)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ DEFAULT_ROLE_COLOR_HEX: closure_3, EMPTY_STRING_SNOWFLAKE_ID: closure_4 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const WHITE = importDefault(dependencyMap[4]).unsafe_rawColors.WHITE;
const PRIMARY_630 = importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_630;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.iconContainer = obj;
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/connections/native/VerifiedRoleIcon.tsx");

export default function VerifiedRoleIcon(arg0) {
  let displayRoleIcon;
  let guildId;
  let role;
  let roleColor;
  let roleId;
  let size;
  let style;
  ({ role, roleId, roleColor, size } = arg0);
  ({ guildId, style, displayRoleIcon } = arg0);
  if (null == roleColor) {
    let colorString;
    if (null != role) {
      colorString = role.colorString;
    }
    roleColor = colorString;
  }
  if (null == roleColor) {
    roleColor = closure_3;
  }
  let obj = arg1(dependencyMap[6]);
  obj = { backgroundColor: roleColor };
  const items = [WHITE, PRIMARY_630];
  obj.colors = items;
  const diff = size - size / 8 * 2;
  const higherContrastColor = obj.getHigherContrastColor(obj);
  let obj2 = arg1(dependencyMap[7]);
  obj = { guildId };
  if (null == roleId) {
    let id;
    if (null != role) {
      id = role.id;
    }
    roleId = id;
  }
  if (null == roleId) {
    roleId = closure_4;
  }
  obj.roleId = roleId;
  obj.size = diff;
  let roleIcon = obj2.useRoleIcon(obj);
  const obj1 = { style: items1 };
  const items1 = [style, callback().iconContainer, ];
  obj2 = { width: size, height: size, backgroundColor: roleColor };
  items1[2] = obj2;
  if (false === displayRoleIcon) {
    const obj3 = {};
    const obj4 = { width: diff, height: diff };
    obj3.style = obj4;
    obj3.size = "custom";
    obj3.color = higherContrastColor;
    roleIcon = jsx(arg1(dependencyMap[8]).LinkIcon, obj3);
  }
  obj1.children = roleIcon;
  return <View {...obj1} />;
};
