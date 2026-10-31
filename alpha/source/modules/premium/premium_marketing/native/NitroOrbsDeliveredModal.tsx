// Module ID: 15225
// Function ID: 15226
// Name: NitroOrbsDeliveredModal
// Dependencies: [32, 19, 17, 1072, 1074, 21, 5014, 575, 6028, 1260, 7719, 7351, 7563, 14692, 7292, 7367, 5717, 15226, 5624, 1113, 5634, 2]
// Exports: default

// Module 15225 (NitroOrbsDeliveredModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import FastImageDefault from "FastImage" /* 5717 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6028 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7719 */;
import AssetRegistryDefault from "AssetRegistry" /* 15226 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let StyleSheet;
let c10;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let unpackModuleId;
({ ActivityIndicator: hasOwnProperty, StyleSheet } = react_native);
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
let closure_9 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, background: StyleSheet.absoluteFillObject, loading: obj3, main: { flex: 1 }, header: obj4, body: obj5, orbGraphic: size, title: obj6, description: { textAlign: "center" }, footer: obj7 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { alignItems: "flex-start", paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_32 };
size = { width: 280, height: 157.5, marginBottom: nativeDefault.space.PX_32 };
obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_12 };
obj7 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx");

export default function NitroOrbsDeliveredModal(arg0) {
  let _undefined;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj12;
  let obj14;
  let obj4;
  let obj7;
  let onClose;
  let orbsAmount;
  let tmp10;
  let tmp12Result;
  ({ orbsAmount, onClose } = arg0);
  importDefault = undefined;
  const tmp = closure_12();
  let obj = { type: onClose(1260).ImpressionTypes.MODAL, name: onClose(1260).ImpressionNames.PREMIUM_ORBS_DELIVERED_MODAL, properties: { orbs_amount: orbsAmount } };
  const tmp4 = useTrackImpressionDefault;
  tmp4(obj);
  const items = [onClose];
  const items1 = [onClose];
  const callback = react.useCallback(() => {
    onClose();
    const obj = CollectiblesActionCreators;
    const obj2 = { screen: constants.ORBS, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING };
    const result = obj.openCollectiblesShopMobile(obj2);
  }, items);
  const callback1 = react.useCallback(() => {
    onClose();
    const obj = openUserSettings;
    const obj2 = { screen: UserSettingsSections.PREMIUM };
    obj.openUserSettings(obj2);
  }, items1);
  [tmp10, c1] = react.useState(false);
  let obj2 = { style: tmp.root, children: items2 };
  const obj3 = { style: StyleSheet.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_10(onClose(14692).OrbsRewardBackground, obj4) };
  _slicedToArray(react.useState(false), 2);
  const callback2 = react.useCallback(() => _undefined(true), []);
  obj4 = { style: tmp.background, onReady: callback2 };
  items2 = [closure_10(View, obj3), , ];
  let tmp14Result = !tmp12Result;
  if (tmp14Result) {
    const obj5 = { style: tmp.loading, children: closure_10(closure_5, { animating: true }) };
    tmp14Result = tmp14(tmp13, obj5);
  }
  items2[1] = tmp14Result;
  if (tmp12Result) {
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: items3 };
    const obj6 = { style: tmp.header, children: closure_10(onClose(7367).ActionSheetCloseButton, obj7) };
    const SafeAreaPaddingView = tmp5(7292).SafeAreaPaddingView;
    obj7 = { onPress: onClose, variant: "overlay" };
    items3 = [closure_10(View, obj6), , ];
    const obj8 = { style: tmp.body, children: items4 };
    const obj9 = { source: AssetRegistryDefault, style: tmp.orbGraphic, resizeMode: "contain" };
    const tmp2Result = FastImageDefault;
    items4 = [closure_10(tmp2Result, obj9), ];
    const obj10 = { children: items5 };
    const obj11 = { variant: "heading-lg/bold", color: "text-overlay-light", style: tmp.title, children: intl.formatToPlainString(onClose(1113).t["O2/Bj8"], obj12) };
    const Text = tmp5(5624).Text;
    intl = tmp5(1113).intl;
    obj12 = { orbAmount: orbsAmount };
    items5 = [closure_10(Text, obj11), ];
    const obj13 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.description, children: intl2.format(onClose(1113).t.qiZPb6, obj14) };
    const Text2 = tmp5(5624).Text;
    intl2 = tmp5(1113).intl;
    obj14 = { orbAmount: orbsAmount };
    items5[1] = closure_10(Text2, obj13);
    items4[1] = closure_11(View, obj10);
    items3[1] = closure_11(View, obj8);
    const obj15 = { style: tmp.footer, children: items6 };
    const obj16 = { text: intl3.string(onClose(1113).t.OhOWfI), variant: "primary", size: "lg", onPress: callback };
    const Button = tmp5(5634).Button;
    intl3 = tmp5(1113).intl;
    items6 = [closure_10(Button, obj16), ];
    const obj17 = { text: intl4.string(onClose(1113).t.CvXwDY), variant: "secondary-overlay", size: "lg", onPress: callback1 };
    const Button2 = tmp5(5634).Button;
    intl4 = tmp5(1113).intl;
    items6[1] = closure_10(Button2, obj17);
    items3[2] = closure_11(View, obj15);
    tmp12Result = closure_11(SafeAreaPaddingView, rect);
  }
  items2[2] = tmp12Result;
  return closure_11(View, obj2);
};
