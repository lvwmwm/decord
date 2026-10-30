// Module ID: 7368
// Function ID: 7369
// Name: RoleIcon
// Dependencies: [19, 21, 1376, 5712, 5619, 2]
// Exports: default

// Module 7368 (RoleIcon)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
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
  const obj = { fontFamily: "System", fontSize: size * num, lineHeight: "id", textAlign: "<string:4268818845>", width: size, marginBottom: "PX_16" };
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
