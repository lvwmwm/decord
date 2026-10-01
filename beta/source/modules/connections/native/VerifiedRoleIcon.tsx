// Module ID: 6624
// Function ID: 6625
// Name: VerifiedRoleIcon
// Dependencies: [19, 17, 1074, 21, 576, 4836, 6625, 6607, 6626, 4775, 2]
// Exports: default

// Module 6624 (VerifiedRoleIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useRoleIconProps2 from "useRoleIconProps" /* 6607 */;
import getHigherContrastColor from "getHigherContrastColor" /* 6625 */;
import RoleIconDefault from "RoleIcon" /* 6626 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp3;
const LinkIcon = tmp3(4775);
const View = react_native.View;
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: hasOwnProperty } = Constants);
const jsx = Fragment.jsx;
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
let obj = { iconContainer: obj2 };
obj2 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/connections/native/VerifiedRoleIcon.tsx");

export default function VerifiedRoleIcon(arg0) {
  let displayRoleIcon;
  let guildId;
  let items;
  let items1;
  let role;
  let roleColor;
  let roleId;
  let style;
  ({ role, roleId, roleColor, size } = arg0);
  ({ guildId, style, displayRoleIcon } = arg0);
  const tmp = closure_9();
  if (roleColor == null) {
    let colorString;
    if (role != null) {
      colorString = role.colorString;
    }
    roleColor = colorString;
  }
  if (roleColor == null) {
    roleColor = React3;
  }
  const obj2 = { backgroundColor: roleColor, colors: items };
  items = [WHITE, PRIMARY_630];
  const diff = size - size / 8 * 2;
  const obj = getHigherContrastColor;
  const higherContrastColor = obj.getHigherContrastColor(obj2);
  const obj3 = { guildId, roleId, size: diff };
  const useRoleIconProps = useRoleIconProps2.useRoleIconProps;
  useRoleIconProps2;
  if (roleId == null) {
    let id;
    if (role != null) {
      id = role.id;
    }
    roleId = id;
  }
  if (roleId == null) {
    roleId = hasOwnProperty;
  }
  const roleIconProps = useRoleIconProps(obj3);
  const obj4 = { style: items1, children: null };
  items1 = [style, tmp.iconContainer, { width: size, height: size, backgroundColor: roleColor }];
  if (false !== displayRoleIcon) {
    let tmp10Result;
    if (null != roleIconProps) {
      const obj5 = {};
      const tmp14 = RoleIconDefault;
      const merged = Object.assign(roleIconProps);
      tmp10Result = tmp10(tmp14, obj5);
    }
    obj4.children = tmp10Result;
    return <tmp11 {...obj4} />;
  }
  const obj6 = { style: { width: diff, height: diff }, size: "custom", color: higherContrastColor };
  tmp10Result = tmp10(LinkIcon.LinkIcon, obj6);
};
