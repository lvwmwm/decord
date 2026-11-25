// Module ID: 11253
// Function ID: 11254
// Name: ExpressiveNitroUpsell
// Dependencies: [19, 17, 1073, 21, 5012, 575, 671, 5576, 5226, 11254, 2119, 6349, 1112, 5603, 5567, 1378, 9595, 7527, 2]
// Exports: default

// Module 11253 (ExpressiveNitroUpsell)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import intl3 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import LinearGradientDefault from "LinearGradient" /* 5567 */;
import Text_Text from "Text/Text" /* 5603 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6349 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let importDefault;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
({ Pressable: closure_4, View: hasOwnProperty, StyleSheet } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { nitroUpsellPill: obj2, nitroUpsellGradient: obj3, nitroUpsellSavings: obj4, nitroUpsellCta: { flexDirection: "row", alignItems: "center", flexShrink: 0 }, nitroUpsellIcon: { width: 16, height: 16, marginRight: 4 }, nitroUpsellChevron: { marginLeft: 2 }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, androidTextPadding: { paddingBottom: 2 } };
obj2 = { alignSelf: "stretch", marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.round, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { opacity: 0.6 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { flexShrink: 1, marginRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const result = size.fileFinishedImporting("modules/collectibles/native/ExpressiveNitroUpsell.tsx");

export default function _default(onTrackPress) {
  let defaultPriceFormatted;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items5;
  let premiumPriceFormatted;
  let strikedPrice;
  onTrackPress = onTrackPress.onTrackPress;
  ({ defaultPriceFormatted, premiumPriceFormatted } = onTrackPress);
  const tmp = closure_9();
  importDefault = tmp;
  let tmp5 = onTrackPress;
  const tmp4 = _modDef671;
  let obj = onTrackPress(5576);
  const tmp4Result = tmp4(obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START));
  const alphaResult = tmp4Result.alpha(0.4);
  const hexResult = alphaResult.hex();
  const tmp7 = _modDef671;
  const obj4 = onTrackPress(5576);
  let items = [onTrackPress];
  const tmp7Result = tmp7(obj4.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END));
  const items1 = [tmp.strikedPrice];
  const alphaResult1 = tmp7Result.alpha(0.4);
  const hexResult1 = alphaResult1.hex();
  const callback = react.useCallback(() => {
    let intl;
    let intl2;
    let items;
    if (onTrackPress != null) {
      tmp(ShopCtaEnum.SUBSCRIBE_NOW);
    }
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { analyticsLocations: items, title: intl.string(intl3.t.XcOMLu), description: intl2.string(intl3.t.JhE8nA) };
    items = [];
    const tmp5 = asyncRequire(11254, dependencyMap.paths);
    items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP_DETAILS_MODAL;
    intl = intl3.intl;
    intl2 = intl3.intl;
    openLazy(tmp5, "ShopNitroUpsellPromoSheet", obj, "stack");
  }, items);
  const callback1 = react.useCallback((children, arg1) => {
    const obj = { variant: "body-sm/medium", color: "text-subtle", style: strikedPrice.strikedPrice, children };
    return metroImportDefault(Text_Text.Text, obj, arg1);
  }, items1);
  const obj2 = { onPress: callback, style: tmp.nitroUpsellPill, accessibilityRole: "button", children: items3 };
  const callback2 = react.useCallback((children, arg1) => {
    const obj = { variant: "body-sm/semibold", color: "interactive-text-active", children };
    return closure_1_7(onTrackPress(dependencyMap[13]).Text, obj, arg1);
  }, []);
  const obj3 = { style: tmp.nitroUpsellGradient, colors: items2, start, end, pointerEvents: "none" };
  items2 = [hexResult, hexResult1];
  items3 = [closure_7(LinearGradientDefault, obj3), , ];
  const items4 = [tmp.nitroUpsellSavings, ];
  const Text = onTrackPress(5603).Text;
  let androidTextPadding;
  const obj9 = onTrackPress(1378);
  const tmp13 = closure_4;
  if (obj9.isAndroid()) {
    androidTextPadding = tmp.androidTextPadding;
  }
  items4[1] = androidTextPadding;
  const obj5 = { variant: "body-sm/medium", color: "text-subtle", style: items4, children: intl.format(tmp5(1112).t.TWtV8E, { defaultPrice: defaultPriceFormatted, premiumPrice: premiumPriceFormatted, defaultPriceHook: callback1, premiumPriceHook: callback2 }) };
  intl = tmp5(1112).intl;
  items3[1] = closure_7(Text, obj5);
  const obj6 = { style: tmp.nitroUpsellCta, children: items5 };
  const obj7 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm", style: tmp.nitroUpsellIcon };
  const NitroWheelIcon = tmp5(9595).NitroWheelIcon;
  items5 = [closure_7(NitroWheelIcon, obj7), , ];
  const Text2 = tmp5(5603).Text;
  let androidTextPadding1;
  const tmp16 = closure_5;
  const tmp5Result = tmp5(1378);
  if (tmp5Result.isAndroid()) {
    androidTextPadding1 = tmp.androidTextPadding;
  }
  const obj8 = { variant: "body-sm/medium", color: "interactive-text-active", style: androidTextPadding1, children: intl2.string(tmp5(1112).t["8x0jKT"]) };
  intl2 = tmp5(1112).intl;
  items5[1] = closure_7(Text2, obj8);
  const obj10 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "xs", style: tmp.nitroUpsellChevron };
  const ChevronSmallRightIcon = tmp5(7527).ChevronSmallRightIcon;
  items5[2] = closure_7(ChevronSmallRightIcon, obj10);
  items3[2] = closure_8(tmp16, obj6);
  return closure_8(tmp13, obj2);
};
