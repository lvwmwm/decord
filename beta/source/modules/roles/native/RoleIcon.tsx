// Module ID: 6626
// Function ID: 6627
// Name: RoleIcon
// Dependencies: [19, 17, 21, 1364, 4832, 2]
// Exports: default

// Module 6626 (RoleIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

const Image = react_native.Image;
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
  const obj = { fontFamily: "System", fontSize: size * num, lineHeight: "channel", textAlign: null, width: size, marginBottom: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000495295569648721 };
  if (null != src) {
    tmp = <Image resizeMode="contain" source={{ uri: src }} style={size1} />;
    const obj3 = { uri: src };
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      const items = [size1, obj];
      tmp = jsx(Text_Text.Text, { allowFontScaling: false, color: "none", style: items, variant: "text-lg/normal", children: unicodeEmoji.surrogates });
    }
  }
  return tmp;
};
