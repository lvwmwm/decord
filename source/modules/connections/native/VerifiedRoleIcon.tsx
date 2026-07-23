// Module ID: 5508
// Function ID: 46942
// Name: VerifiedRoleIcon
// Dependencies: [31, 27, 653, 33, 689, 4130, 5509, 5488, 4074, 2]
// Exports: default

// Module 5508 (VerifiedRoleIcon)
import "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ DEFAULT_ROLE_COLOR_HEX: closure_3, EMPTY_STRING_SNOWFLAKE_ID: closure_4 } = ME);
const WHITE = require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE;
const PRIMARY_630 = require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_630;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.iconContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/connections/native/VerifiedRoleIcon.tsx");

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
  let obj = require(5509) /* getHigherContrastColor */;
  obj = { backgroundColor: roleColor };
  const items = [WHITE, PRIMARY_630];
  obj.colors = items;
  const diff = size - size / 8 * 2;
  const higherContrastColor = obj.getHigherContrastColor(obj);
  let obj2 = require(5488) /* useRoleIcon */;
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
  items1 = [style, _createForOfIteratorHelperLoose().iconContainer, ];
  obj2 = { width: size, height: size, backgroundColor: roleColor };
  items1[2] = obj2;
  if (false === displayRoleIcon) {
    const obj3 = {};
    const obj4 = { width: diff, height: diff };
    obj3.style = obj4;
    obj3.size = "custom";
    obj3.color = higherContrastColor;
    roleIcon = jsx(require(4074) /* LinkIcon */.LinkIcon, {});
  }
  obj1.children = roleIcon;
  return <View style={items1} />;
};
