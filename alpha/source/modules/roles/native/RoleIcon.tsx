// Module ID: 7374
// Function ID: 7375
// Name: RoleIcon
// Dependencies: [19, 21, 1375, 5717, 5624, 2]
// Exports: default

// Module 7374 (RoleIcon)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let num = 0.9375;
if (PlatformUtils.isAndroid()) {
  num = 0.8125;
}
let size = size_mod;
const result = size.fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default function RoleIcon(arg0) {
  let src;
  let tmp;
  let unicodeEmoji;
  ({ src, unicodeEmoji, size } = arg0);
  if (size === undefined) {
    size = 20;
  }
  const size1 = { height: size, width: size };
  const obj = { fontFamily: "System", fontSize: size * num, lineHeight: "children", textAlign: "RELATIONSHIP_ADD", width: size, marginBottom: "isArrayBufferToString" };
  if (null != src) {
    const obj3 = { uri: src };
    tmp = jsx(FastImageDefault, { resizeMode: "contain", source: obj3, style: size1 });
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      const items = [size1, obj];
      tmp = jsx(Text_Text.Text, { allowFontScaling: false, color: "none", style: items, variant: "text-lg/normal", children: unicodeEmoji.surrogates });
    }
  }
  return tmp;
};
