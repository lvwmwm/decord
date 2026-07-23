// Module ID: 15627
// Function ID: 120535
// Name: CatEarsBackdrop
// Dependencies: [31, 27, 655, 5188, 1345, 33, 4130, 689, 1450, 5189, 1557, 3991, 15628, 4126, 1212, 15629, 6773, 5484, 5187, 15631, 5807, 4543, 2]
// Exports: default

// Module 15627 (CatEarsBackdrop)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_4;
let closure_5;
let closure_9;
const require = arg1;
function CatEarsBackdrop() {
  const tmp = _createForOfIteratorHelperLoose();
  const width = top(1450)().width;
  let obj = animatedPosition(5189);
  animatedPosition = obj.useBottomSheet().animatedPosition;
  top = top(1557)().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  let obj1 = animatedPosition(3991);
  const fn = function t() {
    let obj = {};
    obj = { translateY: animatedPosition.get() + top - 60 };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 6274760278164;
  fn.__initData = closure_12;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items };
  items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj = { style: items1 };
  items1 = [tmp.mascotLayer, ];
  obj1 = { top: -138 * result1, left: tmp6, right: tmp6 };
  items1[1] = obj1;
  const obj2 = {};
  const obj3 = { uri: top(15628) };
  obj2.source = obj3;
  obj2.style = tmp.mascotImage;
  obj2.accessibilityElementsHidden = true;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj.children = callback(closure_4, obj2);
  obj.children = callback(closure_5, obj);
  return callback(top(3991).View, obj);
}
function FeatureRow(arg0) {
  let icon;
  let text;
  ({ icon, text } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.featureRow };
  const items = [icon, ];
  obj = { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(closure_5, obj);
}
({ Image: closure_4, StyleSheet, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["pointerEvents"] = "none";
_createForOfIteratorHelperLoose.mascotContainer = _createForOfIteratorHelperLoose;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose.mascotLayer = {};
_createForOfIteratorHelperLoose.mascotImage = { width: "100%", aspectRatio: 1.8324022346368716 };
_createForOfIteratorHelperLoose.framePreviewImage = { width: "100%", aspectRatio: 3.25, resizeMode: "contain" };
_createForOfIteratorHelperLoose.container = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.headerText = { textAlign: "center" };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.featureRow = obj3;
_createForOfIteratorHelperLoose.featureText = { flex: 1 };
let obj1 = {};
let obj2 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.featureRows = { gap: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
let obj4 = { gap: require("_createForOfIteratorHelperLoose").space.PX_32 };
let result = require("items").fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  let showEaNonPremiumMarketing;
  let showEaPremiumMarketing;
  let showGiftingMarketing;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = markAsDismissed(15629);
  const profileFramesMarketing = obj.useProfileFramesMarketing("CollectiblesMobileAnnouncementActionSheet");
  const intl = markAsDismissed(1212).intl;
  const string = intl.string;
  const t = markAsDismissed(1212).t;
  if (profileFramesMarketing.showEaPremiumMarketing) {
    let stringResult = string(t["7cmcJI"]);
  } else {
    stringResult = string(t.MkVbBY);
  }
  ({ showGiftingMarketing, showEaPremiumMarketing, showEaNonPremiumMarketing } = profileFramesMarketing);
  const intl2 = markAsDismissed(1212).intl;
  const string2 = intl2.string;
  const t2 = markAsDismissed(1212).t;
  if (showGiftingMarketing) {
    let string2Result = string2(t2["/4bQuG"]);
  } else if (showEaPremiumMarketing) {
    string2Result = string2(t2["5UI+bw"]);
  } else if (showEaNonPremiumMarketing) {
    string2Result = string2(t2["4a7pVU"]);
  } else {
    string2Result = string2(t2["+9vaAT"]);
  }
  const importDefault = React.useRef(false);
  const dependencyMap = React.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = React.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (!outer1_1.current) {
      outer1_2.current(outer2_8.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = React.useCallback(() => {
    callback.current = true;
    markAsDismissed(outer1_8.PRIMARY);
    let obj = markAsDismissed(6773);
    obj = { screen: outer1_6.FEATURED_PAGE, analyticsLocations: [], analyticsSource: callback(5484).ACTION_SHEET };
    const result = obj.openCollectiblesShopMobile(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(outer1_8.USER_DISMISS);
  }, items2);
  const memo = React.useMemo(() => outer1_9(outer1_13, {}), []);
  obj = { onDismiss: callback1, backdropChildren: memo };
  obj = { style: tmp.container };
  const obj1 = {};
  const obj2 = { uri: importDefault(15631) };
  obj1.source = obj2;
  obj1.style = tmp.framePreviewImage;
  obj1.accessibilityElementsHidden = true;
  obj1.importantForAccessibility = "no-hide-descendants";
  const items3 = [callback(closure_4, obj1), , , ];
  const obj3 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp.headerText };
  const intl3 = tmp2(1212).intl;
  obj3.children = intl3.string(markAsDismissed(1212).t.vRCvqo);
  items3[1] = callback(markAsDismissed(4126).Text, obj3);
  const obj4 = { style: tmp.featureRows };
  const obj5 = { icon: callback(markAsDismissed(5807).PaintIllocon, { size: 32 }) };
  const intl4 = tmp2(1212).intl;
  obj5.text = intl4.string(markAsDismissed(1212).t["6ZWB0C"]);
  const items4 = [callback(FeatureRow, obj5), , ];
  const obj6 = { icon: callback(markAsDismissed(5807).HeartIllocon, { size: 32 }), text: stringResult };
  items4[1] = callback(FeatureRow, obj6);
  const obj7 = { icon: callback(markAsDismissed(5807).ShopIllocon, { size: 32 }), text: string2Result };
  items4[2] = callback(FeatureRow, obj7);
  obj4.children = items4;
  items3[2] = callback2(closure_5, obj4);
  const obj8 = { size: "lg" };
  const intl5 = tmp2(1212).intl;
  obj8.text = intl5.string(markAsDismissed(1212).t.S9hXPI);
  obj8.onPress = callback;
  items3[3] = callback(markAsDismissed(4543).Button, obj8);
  obj.children = items3;
  obj.children = callback2(closure_5, obj);
  return callback(markAsDismissed(5187).BottomSheet, obj);
};
