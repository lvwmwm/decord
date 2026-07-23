// Module ID: 9987
// Function ID: 77233
// Name: OfficialConnectionIcon
// Dependencies: [31, 27, 653, 33, 4130, 5488, 689, 665, 1273, 9988, 9989, 2]
// Exports: default

// Module 9987 (OfficialConnectionIcon)
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
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: closure_5 } = ME);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ verifiedCheck: { position: "absolute", left: 0, top: 0 } });
const result = require("ME").fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

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
  let obj1 = require(5488) /* useRoleIcon */;
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
  let PRIMARY_630 = importDefault(689).unsafe_rawColors.WHITE;
  let obj3 = require(665) /* pad2 */;
  const hex2intResult = obj3.hex2int(roleColor);
  if (obj5.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = importDefault(689).unsafe_rawColors.PRIMARY_630;
  }
  obj1 = { style: items1 };
  items1 = [style, obj];
  const obj2 = { style: items2 };
  items2 = [tmp.verifiedCheck, obj];
  obj2.size = require(1273) /* Button */.Icon.Sizes.CUSTOM;
  obj2.source = importDefault(9988);
  obj2.color = roleColor;
  const items3 = [callback(require(1273) /* Button */.Icon, obj2), ];
  obj3 = { style: items4 };
  items4 = [tmp.verifiedCheck, obj];
  obj3.size = require(1273) /* Button */.Icon.Sizes.CUSTOM;
  obj3.source = importDefault(9989);
  obj3.color = PRIMARY_630;
  items3[1] = callback(require(1273) /* Button */.Icon, obj3);
  obj1.children = items3;
  return callback2(View, obj1);
};
