// Module ID: 13635
// Function ID: 13636
// Name: IconPill
// Dependencies: [19, 17, 1085, 21, 4836, 576, 5283, 8072, 2]
// Exports: default

// Module 13635 (IconPill)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import IconDefault from "Icon" /* 5283 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8072 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { pillContainer: obj2, pillIcon: obj3, pillText: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, height: 20, paddingHorizontal: 8 };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4 };
obj4 = { fontFamily: Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("design/void/IconPill/native/IconPill.tsx");

export default function IconPill(IconComponent) {
  let accessibilityLabel;
  let items;
  let items1;
  let items2;
  let source;
  let style;
  let text;
  let textStyle;
  let tmp8;
  let tmp9;
  IconComponent = IconComponent.IconComponent;
  ({ text, source, style, textStyle, accessibilityLabel } = IconComponent);
  const tmp = closure_5();
  const obj = { style: items, children: items1 };
  items = [tmp.pillContainer, style];
  const tmp2 = React3;
  const tmp3 = View;
  if (null != IconComponent) {
    const obj2 = { size: "xxs", style: tmp.pillIcon };
    tmp9 = _false(IconComponent, obj2);
    tmp8 = _false;
  } else {
    const obj3 = { source, size: IconDefault.Sizes.EXTRA_SMALL, style: tmp.pillIcon };
    tmp8 = _false;
    const tmp7 = IconDefault;
    tmp9 = _false(tmp7, obj3);
  }
  items1 = [tmp9, ];
  const obj4 = { style: items2, numberOfLines: 1, accessibilityLabel, children: text };
  items2 = [tmp.pillText, textStyle];
  items1[1] = tmp8(LegacyText_LegacyTextDefault, obj4);
  return tmp2(tmp3, obj);
};
