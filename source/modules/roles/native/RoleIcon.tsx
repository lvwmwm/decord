// Module ID: 5488
// Function ID: 46854
// Name: RoleIcon
// Dependencies: [31, 27, 33, 1273, 2]
// Exports: default

// Module 5488 (RoleIcon)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default function RoleIcon(arg0) {
  let size;
  let source;
  let unicodeEmoji;
  ({ source, unicodeEmoji, size } = arg0);
  if (size === undefined) {
    size = 20;
  }
  obj = { roleIcon: obj, unicodeEmojiRoleIcon: obj };
  obj = { height: size, width: size, resizeMode: "contain" };
  obj = { fontFamily: "System", fontSize: size, marginBottom: -2 };
  if (null != source) {
    const obj1 = { source, style: obj.roleIcon };
    let tmp = <Image source={source} style={obj.roleIcon} />;
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      const obj2 = { adjustsFontSizeToFit: true };
      const items = [, ];
      ({ roleIcon: arr[0], unicodeEmojiRoleIcon: arr[1] } = obj);
      obj2.style = items;
      obj2.children = unicodeEmoji.surrogates;
      tmp = jsx(require(1273) /* Button */.LegacyText, { adjustsFontSizeToFit: true });
    }
  }
  return tmp;
};
