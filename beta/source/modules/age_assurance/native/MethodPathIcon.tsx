// Module ID: 7908
// Function ID: 7909
// Name: MethodPathIcon
// Dependencies: [19, 17, 21, 4836, 576, 4531, 7909, 2]
// Exports: default

// Module 7908 (MethodPathIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
let _require;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: size };
size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg };
let closure_5 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/age_assurance/native/MethodPathIcon.tsx");

export default function MethodPathIcon(icon) {
  let fill;
  let paths;
  _require = undefined;
  icon = icon.icon;
  const tmp = closure_5();
  const obj = require("useToken");
  _require = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  size = { width: 24, height: 24, viewBox: "0 0 24 24", children: paths.map((d) => jsx(inlineStyles.Path, { d: d.d, fill, fillRule: d.fillRule }, d.d)) };
  paths = icon.paths;
  inlineStylesDefault;
  return <View style={tmp.container}>{null}</View>;
};
