// Module ID: 8071
// Function ID: 8072
// Name: CardSection
// Dependencies: [19, 17, 1074, 21, 4836, 5836, 576, 8072, 2]
// Exports: default

// Module 8071 (CardSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8072 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let DISPLAY_EXTRABOLD;
let TextStyles;
let c3;
let closure_4;
let obj2;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingTop: 16, paddingHorizontal: 16 }, title: TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true, marginBottom: 6 }), card: obj2 };
createStyles = createStyles.createStyles;
DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
TextStyles = TextStyles_mod;
obj2 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("design/void/CardSection/native/CardSection.tsx");

export default function CardSection(arg0) {
  let accessibilityLabel;
  let accessibilityRole;
  let cardStyle;
  let children;
  let headerComponent;
  let items;
  let items1;
  let items2;
  let items3;
  let style;
  let title;
  let titleStyle;
  ({ title, children, headerComponent } = arg0);
  ({ titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp = closure_5();
  const obj = { style: items, accessibilityRole, accessibilityLabel, children: items2 };
  items = [tmp.container, style];
  let tmp4 = null;
  const tmp2 = React3;
  if (null != title) {
    const obj2 = { style: items1, accessibilityRole: "header", children: title };
    items1 = [tmp.title, titleStyle];
    tmp4 = _false(LegacyText_LegacyTextDefault, obj2);
  }
  items2 = [tmp4, , ];
  let tmp8 = null;
  if (null != headerComponent) {
    tmp8 = headerComponent;
  }
  items2[1] = tmp8;
  let tmp9 = null;
  if (null != children) {
    const obj3 = { style: items3, children };
    items3 = [tmp.card, cardStyle];
    tmp9 = _false(tmp3, obj3);
  }
  items2[2] = tmp9;
  return tmp2(View, obj);
};
