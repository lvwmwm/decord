// Module ID: 16438
// Function ID: 16439
// Name: UserProfileUpsellCard
// Dependencies: [19, 17, 7371, 7610, 21, 5009, 575, 1188, 9506, 5619, 5582, 1093, 2]
// Exports: default

// Module 16438 (UserProfileUpsellCard)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import Constants from "Constants" /* 7371 */;
import ColorConstants from "ColorConstants" /* 7610 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: c3, ScrollView: closure_4 } = react_native);
const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
const Gradients = ColorConstants.Gradients;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { upsellButton: obj2, titleContainer: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 }, linearGradient: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, outer: obj3, scroll: obj4, inner: { paddingVertical: 12, paddingHorizontal: 14 } };
obj2 = { marginTop: 8, flexShrink: 0, borderRadius: nativeDefault.radii.round, gap: 4 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: PROFILE_SIDE_PADDING - 1 };
obj4 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCard.tsx");

export default function UserProfileUpsellCard(headerText) {
  let cardStyle;
  let children;
  let closure_0;
  let contentStyle;
  let ctaStyle;
  let ctaText;
  let fn;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj2;
  let onPress;
  let showLinearGradient;
  let style;
  let tmp7;
  headerText = headerText.headerText;
  ({ style, children, ctaText, showLinearGradient, cardStyle, contentStyle, ctaStyle, onPress } = headerText);
  let tmp = closure_8();
  _require = tmp;
  let obj = { borderWidth: 1, style: items, direction: require("native").GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: nativeDefault.radii.lg, children: closure_7(tmp7, obj2) };
  items = [tmp.outer, style];
  const GradientBorder = require("native").GradientBorder;
  obj2 = { bounces: false, style: items1, contentContainerStyle: items2, children: items4 };
  items1 = [tmp.scroll, cardStyle];
  items2 = [tmp.inner, contentStyle];
  let tmp6Result = null;
  tmp7 = closure_4;
  if (null != headerText) {
    const obj3 = { style: tmp.titleContainer, children: items3 };
    const obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, size: "xs" };
    const NitroWheelIcon = tmp3(9506).NitroWheelIcon;
    items3 = [closure_6(NitroWheelIcon, obj4), ];
    const obj5 = { variant: "heading-sm/bold", children: headerText };
    items3[1] = closure_6(require("Text/Text").Text, obj5);
    tmp6Result = tmp6(closure_3, obj3);
  }
  items4 = [tmp6Result, children, ];
  const obj6 = {
    style: items5,
    onPress,
    text: ctaText,
    color: require("native").ButtonColors.GREEN,
    renderIcon() {
      return closure_1_6(closure_0(dependencyMap[8]).NitroWheelIcon, { color: "white", size: "xs" });
    },
    renderLinearGradient: fn
  };
  items5 = [tmp.upsellButton, ctaStyle];
  const ShinyButton = tmp3(1188).ShinyButton;
  fn = undefined;
  if (showLinearGradient) {
    fn = () => {
      const obj = { style: closure_0.linearGradient, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2_TRI_COLOR };
      const tmp = LinearGradientDefault;
      return metroRequire(tmp, obj);
    };
  }
  items4[2] = closure_6(ShinyButton, obj6);
  return closure_6(GradientBorder, obj);
};
