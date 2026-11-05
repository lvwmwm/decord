// Module ID: 7512
// Function ID: 7513
// Name: RoleIcon
// Dependencies: [19, 21, 1377, 5854, 5763, 2]
// Exports: default

// Module 7512 (RoleIcon)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5763 */;
import FastImageDefault from "FastImage" /* 5854 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
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
  const obj = { fontFamily: "System", fontSize: size * num, lineHeight: "id", textAlign: -102143, width: size, marginBottom: 16778543 };
  if (null != src) {
    const obj3 = { uri: src };
    tmp = jsx(FastImageDefault, { resizeMode: "contain", source: obj3, style: size1 });
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      const items = [size1, obj];
      tmp = jsx(Text_Text.Text, { allowFontScaling: false, color: "none", style: items, variant: "body-lg/normal", children: unicodeEmoji.surrogates });
    }
  }
  return tmp;
};
