// Module ID: 11061
// Function ID: 11062
// Name: OfficialConnectionIcon
// Dependencies: [19, 17, 1074, 21, 4836, 6607, 6626, 576, 1092, 1177, 11062, 11063, 2]
// Exports: default

// Module 11061 (OfficialConnectionIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import native from "native" /* 1177 */;
import useRoleIconProps2 from "useRoleIconProps" /* 6607 */;
import RoleIconDefault from "RoleIcon" /* 6626 */;
import AssetRegistryDefault from "AssetRegistry" /* 11062 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11063 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ verifiedCheck: { position: "absolute", left: 0, top: 0 } });
const result = size.fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

export default function OfficialConnectionIcon(arg0) {
  let displayRoleIcon;
  let guildId;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj3;
  let role;
  let roleColor;
  let roleId;
  let style;
  let tmp13;
  ({ role, roleId, roleColor, size, style } = arg0);
  ({ guildId, displayRoleIcon } = arg0);
  const tmp = closure_8();
  const size1 = { width: size, height: size };
  const obj = { guildId, roleId, size };
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
  const roleIconProps = useRoleIconProps(obj);
  if (false !== displayRoleIcon) {
    if (null != roleIconProps) {
      const obj2 = { style: items, children: metroRequire(tmp13, obj3) };
      items = [style, size1];
      obj3 = {};
      tmp13 = RoleIconDefault;
      const merged = Object.assign(roleIconProps);
      return metroRequire(View, obj2);
    }
  }
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
  let PRIMARY_630 = nativeDefault.unsafe_rawColors.WHITE;
  const tmp2Result = utils_ColorUtils;
  const hex2intResult = tmp2Result.hex2int(roleColor);
  const tmp2Result2 = utils_ColorUtils;
  if (tmp2Result2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = tmp8(576).unsafe_rawColors.PRIMARY_630;
  }
  const obj4 = { style: items1, children: items3 };
  items1 = [style, size1];
  const obj5 = { style: items2, size: native.Icon.Sizes.CUSTOM, source: AssetRegistryDefault, color: roleColor };
  items2 = [tmp.verifiedCheck, size1];
  const Icon = tmp2(1177).Icon;
  items3 = [metroRequire(Icon, obj5), ];
  const obj6 = { style: items4, size: native.Icon.Sizes.CUSTOM, source: AssetRegistryDefault2, color: PRIMARY_630 };
  items4 = [tmp.verifiedCheck, size1];
  const Icon2 = tmp2(1177).Icon;
  items3[1] = metroRequire(Icon2, obj6);
  return metroImportDefault(View, obj4);
};
