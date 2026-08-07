// Module ID: 5694
// Function ID: 5695
// Name: RoleIcon
// Dependencies: [19, 17, 21, 1297, 2]
// Exports: default

// Module 5694 (RoleIcon)
import "noop";
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
  let obj = { height: size, width: size, resizeMode: "contain" };
  if (null != source) {
    obj = { source: null, style: null };
    obj[0] = source;
    obj[1] = obj;
    let tmp = <Image source={null} style={null} />;
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      obj = { adjustsFontSizeToFit: true, style: null, children: null };
      const items = [obj, { fontFamily: "System", fontSize: size, marginBottom: -2 }];
      obj[1] = items;
      obj[2] = unicodeEmoji.surrogates;
      tmp = jsx(require(1297) /* Button */.LegacyText, { adjustsFontSizeToFit: true, style: null, children: null });
    }
  }
  return tmp;
};
