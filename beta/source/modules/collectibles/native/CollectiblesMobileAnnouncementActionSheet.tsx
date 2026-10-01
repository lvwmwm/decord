// Module ID: 16768
// Function ID: 16769
// Name: CollectiblesMobileAnnouncementActionSheet
// Dependencies: [19, 17, 1076, 6572, 2042, 21, 4836, 576, 1479, 6045, 1613, 4566, 16769, 4832, 6961, 6603, 6571, 16770, 1115, 12218, 12212, 16771, 5281, 2]
// Exports: default

// Module 16768 (CollectiblesMobileAnnouncementActionSheet)
import nativeDefault from "native" /* 576 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import _modDef16769 from "module_16769" /* 16769 */;
import _modDef16770 from "module_16770" /* 16770 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let BottomSheet, dependencyMap, importDefault;

let StyleSheet;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function CatEarsBackdrop() {
  let items;
  let items1;
  let obj4;
  let obj5;
  let obj6;
  const tmp = closure_11();
  const width = useWindowDimensionsDefault().width;
  let obj = BottomSheetModal;
  const animatedPosition = obj.useBottomSheet().animatedPosition;
  const top = useSafeAreaInsetsDefault().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  const obj2 = ReanimatedRexport;
  const fn = function t() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: animatedPosition.get() + top - 60 }];
    ({ translateY: animatedPosition.get() + top - 60 });
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 6274760278164;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items, children: React4(hasOwnProperty, obj4) };
  items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj4 = { style: items1, children: React4(React3, obj5) };
  items1 = [tmp.mascotLayer, ];
  const rect = { top: -138 * result1, left: -56 * result1, right: -56 * result1 };
  items1[1] = rect;
  obj5 = { source: obj6, style: tmp.mascotImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj6 = { uri: _modDef16769 };
  const View = ReanimatedRexportDefault.View;
  return React4(View, obj3);
}
function FeatureRow(arg0) {
  let icon;
  let items;
  let text;
  ({ icon, text } = arg0);
  const tmp = closure_11();
  const obj = { style: tmp.featureRow, children: items };
  items = [icon, ];
  const obj2 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text };
  items[1] = React4(Text_Text.Text, obj2);
  return authStore(hasOwnProperty, obj);
}
({ Image: closure_4, StyleSheet, View: hasOwnProperty } = react_native);
let closure_6 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { mascotContainer: obj2, mascotLayer: obj3, mascotImage: { width: "100%", aspectRatio: 1.8324022346368716 }, framePreviewImage: { width: "100%", aspectRatio: 3.25, resizeMode: "contain" }, container: obj4, headerText: { textAlign: "center" }, featureRow: obj5, featureText: { flex: 1 }, featureRows: obj6 };
obj2 = { pointerEvents: "none" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj6 = { gap: nativeDefault.space.PX_32 };
let closure_11 = createStyles(obj);
const __initData = { code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  let closure_1;
  let closure_2;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let obj2;
  let obj4;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_11();
  importDefault = react.useRef(false);
  dependencyMap = react.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = react.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = react.useEffect(() => {
    let ref;
    let ref2;
    return () => {
      if (!ref.current) {
        ref2.current(constants2.AUTO_DISMISS);
      }
    };
  }, []);
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = react.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.PRIMARY);
    const obj = CollectiblesActionCreators;
    const obj2 = { screen: constants.FEATURED_PAGE, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.ACTION_SHEET };
    const result = obj.openCollectiblesShopMobile(obj2);
  }, items1);
  const callback1 = react.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const memo = react.useMemo(() => closure_1_9(CatEarsBackdrop, {}), []);
  let obj = { onDismiss: callback1, backdropChildren: memo, children: closure_10(closure_5, obj2) };
  obj2 = { style: tmp.container, children: items3 };
  const obj3 = { source: obj4, style: tmp.framePreviewImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj4 = { uri: _modDef16770 };
  BottomSheet = markAsDismissed(6571).BottomSheet;
  items3 = [closure_9(closure_4, obj3), , , ];
  const obj5 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp.headerText, children: intl.string(markAsDismissed(1115).t.vRCvqo) };
  const Text = markAsDismissed(4832).Text;
  intl = markAsDismissed(1115).intl;
  items3[1] = closure_9(Text, obj5);
  const obj6 = { style: tmp.featureRows, children: items4 };
  const obj7 = { icon: closure_9(markAsDismissed(12218).PaintIllocon, { size: 32 }), text: intl2.string(markAsDismissed(1115).t["6ZWB0C"]) };
  intl2 = markAsDismissed(1115).intl;
  items4 = [closure_9(FeatureRow, obj7), , ];
  const obj8 = { icon: closure_9(markAsDismissed(12212).HeartIllocon, { size: 32 }), text: intl3.string(markAsDismissed(1115).t.MkVbBY) };
  intl3 = markAsDismissed(1115).intl;
  items4[1] = closure_9(FeatureRow, obj8);
  const obj9 = { icon: closure_9(markAsDismissed(16771).ShopIllocon, { size: 32 }), text: intl4.string(markAsDismissed(1115).t["/4bQuG"]) };
  intl4 = markAsDismissed(1115).intl;
  items4[2] = closure_9(FeatureRow, obj9);
  items3[2] = closure_10(closure_5, obj6);
  const obj10 = { size: "lg", text: intl5.string(markAsDismissed(1115).t.S9hXPI), onPress: callback };
  const Button = markAsDismissed(5281).Button;
  intl5 = markAsDismissed(1115).intl;
  items3[3] = closure_9(Button, obj10);
  return closure_9(BottomSheet, obj);
};
