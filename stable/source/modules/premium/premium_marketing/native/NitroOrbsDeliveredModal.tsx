// Module ID: 13641
// Function ID: 13642
// Name: NitroOrbsDeliveredModal
// Dependencies: [32, 19, 17, 1074, 1076, 21, 4788, 576, 9080, 1249, 7815, 7459, 7656, 12066, 7400, 7475, 13642, 4784, 1115, 5218, 2]
// Exports: default

// Module 13641 (NitroOrbsDeliveredModal)
import nativeDefault from "native" /* 576 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7459 */;
import openUserSettings from "openUserSettings" /* 7656 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7815 */;
import useTrackImpressionDefault from "useTrackImpression" /* 9080 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef13642 = tmp2(13642);
require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const UserSettingsSections = fn(1074).UserSettingsSections;
let closure_10 = fn(1076).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4788);
let obj2 = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, background: StyleSheet.absoluteFillObject, loading: null, main: null, header: null, body: null, orbGraphic: null, title: null, description: null, footer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.loading = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.main = { flex: 1 };
const obj4 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.header = { alignItems: "flex-start", paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { alignItems: "flex-start", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.body = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_32 };
let size = { width: 280, height: 157.5, marginBottom: nativeDefault.space.PX_32 };
obj2.orbGraphic = size;
let obj6 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_32 };
obj2.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_12 };
obj2.description = { textAlign: "center" };
let obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_12 };
obj2.footer = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx");

export default function NitroOrbsDeliveredModal(arg0) {
  ({ orbsAmount, onClose } = arg0);
  importDefault = undefined;
  const tmp = closure_13();
  let obj = { type: onClose(1249).ImpressionTypes.MODAL, name: onClose(1249).ImpressionNames.PREMIUM_ORBS_DELIVERED_MODAL, properties: { orbs_amount: orbsAmount } };
  useTrackImpressionDefault(obj);
  const items = [onClose];
  const items1 = [onClose];
  const callback = noop.useCallback(() => {
    onClose();
    const obj = CollectiblesActionCreators;
    const result = obj.openCollectiblesShopMobile({ screen: constants.ORBS, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING });
  }, items);
  const callback1 = noop.useCallback(() => {
    onClose();
    openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
  }, items1);
  [tmp10, c1] = noop.useState(false);
  const obj2 = { style: tmp.root, children: null };
  const obj3 = { style: StyleSheet.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const callback2 = noop.useCallback(() => _undefined(true), []);
  obj3.children = closure_11(onClose(12066).OrbsRewardBackground, { style: tmp.background, onReady: callback2 });
  const items2 = [closure_11(View, obj3), , ];
  let tmp14Result = !tmp12Result;
  if (!tmp12Result) {
    const obj5 = { style: tmp.loading, children: tmp14(closure_5, { animating: true }) };
    tmp14Result = tmp14(tmp13, obj5);
  }
  items2[1] = tmp14Result;
  if (tmp12Result) {
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
    const obj6 = { style: tmp.header, children: null };
    const obj7 = { onPress: onClose, variant: "overlay" };
    obj6.children = tmp14(tmp5(7475).ActionSheetCloseButton, obj7);
    const items3 = [tmp14(tmp13, obj6), , ];
    const obj8 = { style: tmp.body, children: null };
    const obj9 = { source: _modDef13642, style: tmp.orbGraphic, resizeMode: "contain" };
    const items4 = [tmp14(closure_6, obj9), ];
    const obj10 = { children: null };
    const obj11 = { variant: "heading-lg/bold", color: "text-overlay-light", style: tmp.title, children: null };
    const intl = tmp5(1115).intl;
    const obj12 = { orbAmount: orbsAmount };
    obj11.children = intl.formatToPlainString(tmp5(1115).t["O2/Bj8"], obj12);
    const items5 = [tmp14(tmp5(4784).Text, obj11), ];
    const obj13 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.description, children: null };
    const intl2 = tmp5(1115).intl;
    const obj14 = { orbAmount: orbsAmount };
    obj13.children = intl2.format(tmp5(1115).t.qiZPb6, obj14);
    items5[1] = tmp14(tmp5(4784).Text, obj13);
    obj10.children = items5;
    items4[1] = tmp12(tmp13, obj10);
    obj8.children = items4;
    items3[1] = tmp12(tmp13, obj8);
    const obj15 = { style: tmp.footer, children: null };
    const obj16 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = tmp5(1115).intl;
    obj16.text = intl3.string(tmp5(1115).t.OhOWfI);
    obj16.onPress = callback;
    const items6 = [tmp14(tmp5(5218).Button, obj16), ];
    const obj17 = { text: null, variant: "secondary-overlay", size: "lg", onPress: null };
    const intl4 = tmp5(1115).intl;
    obj17.text = intl4.string(tmp5(1115).t.CvXwDY);
    obj17.onPress = callback1;
    items6[1] = tmp14(tmp5(5218).Button, obj17);
    obj15.children = items6;
    items3[2] = tmp12(tmp13, obj15);
    rect.children = items3;
    tmp12Result = tmp12(tmp5(7400).SafeAreaPaddingView, rect);
  }
  items2[2] = tmp12Result;
  obj2.children = items2;
  return closure_12(View, obj2);
};
