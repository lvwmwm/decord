// Module ID: 7855
// Function ID: 7856
// Name: StageSparkle
// Dependencies: [19, 17, 21, 4836, 576, 7856, 5899, 7857, 4540, 2]
// Exports: default

// Module 7855 (StageSparkle)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4540 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AssetRegistryDefault from "AssetRegistry" /* 7856 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
let size1;
function StageSparkleInner(style) {
  let IconComponent;
  let icon;
  let items;
  let items1;
  let tmp10;
  let tmp6Result;
  ({ IconComponent, icon } = style);
  style = style.style;
  if (icon === undefined) {
    icon = AssetRegistryDefault;
  }
  const tmp3 = closure_6();
  const obj = { style: items, children: items1 };
  items = [tmp3.container, style];
  const obj2 = { style: tmp3.iconContainer, children: tmp6Result };
  const tmp4 = hasOwnProperty;
  if (null != IconComponent) {
    const obj3 = { size: "lg", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
    tmp6Result = tmp6(IconComponent, obj3);
    tmp10 = importDefault;
  } else {
    const obj4 = { source: icon, style: tmp3.iconStyle };
    tmp6Result = tmp6(FastImageDefault, obj4);
    tmp10 = importDefault;
  }
  items1 = [React3(View, obj2), ];
  const obj5 = { style: tmp3.sparkles, source: tmp10(7857) };
  const tmp10Result = tmp10(5899);
  items1[1] = React3(tmp10Result, obj5);
  return tmp4(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: 88, height: 88, alignItems: "center", justifyContent: "center" }, iconContainer: size, iconStyle: size1, sparkles: { position: "absolute", top: 0 } };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 28, height: 56, width: 56, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 32, width: 32 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSparkle.tsx");

export default function StageSparkle(theme) {
  let obj3;
  let tmp7;
  theme = theme.theme;
  const merged = Object.assign(theme, Object.assign({ theme: 0 }));
  if (null != theme) {
    const obj2 = { theme, children: React3(StageSparkleInner, obj3) };
    obj3 = {};
    const ThemeContextProvider = native.ThemeContextProvider;
    const merged1 = Object.assign(merged);
    tmp7 = React3(ThemeContextProvider, obj2);
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    tmp7 = React3(StageSparkleInner, obj);
  }
  return tmp7;
};
