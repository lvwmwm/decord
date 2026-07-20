// Module ID: 15492
// Function ID: 118256
// Name: CatEarsBackdrop
// Dependencies: []
// Exports: default

// Module 15492 (CatEarsBackdrop)
let StyleSheet;
function CatEarsBackdrop() {
  const tmp = callback3();
  const width = importDefault(dependencyMap[8])().width;
  let obj = arg1(dependencyMap[9]);
  const animatedPosition = obj.useBottomSheet().animatedPosition;
  const arg1 = animatedPosition;
  const top = importDefault(dependencyMap[10])().top;
  const importDefault = top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  let obj1 = arg1(dependencyMap[11]);
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
  const items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj = { style: items1 };
  const items1 = [tmp.mascotLayer, ];
  obj1 = { top: -138 * result1, left: tmp6, right: tmp6 };
  items1[1] = obj1;
  const obj2 = {};
  const obj3 = { uri: importDefault(dependencyMap[12]) };
  obj2.source = obj3;
  obj2.style = tmp.mascotImage;
  obj2.accessibilityElementsHidden = true;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj.children = callback(closure_4, obj2);
  obj.children = callback(closure_5, obj);
  return callback(importDefault(dependencyMap[11]).View, obj);
}
function FeatureRow(arg0) {
  let icon;
  let text;
  ({ icon, text } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.featureRow };
  const items = [icon, ];
  obj = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, style: tmp.featureText, children: text };
  items[1] = callback(arg1(dependencyMap[13]).Text, obj);
  obj.children = items;
  return callback2(closure_5, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, StyleSheet, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).CollectiblesMobileShopScreen;
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[3]).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["pointerEvents"] = "none";
obj.mascotContainer = obj;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.mascotLayer = {};
obj.mascotImage = {};
obj.framePreviewImage = {};
const obj1 = {};
const tmp3 = arg1(dependencyMap[5]);
obj.container = { padding: importDefault(dependencyMap[7]).space.PX_16, paddingTop: importDefault(dependencyMap[7]).space.PX_24, gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.headerText = { textAlign: "center" };
const obj3 = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.featureRow = obj3;
obj.featureText = { flex: 1 };
const obj2 = { padding: importDefault(dependencyMap[7]).space.PX_16, paddingTop: importDefault(dependencyMap[7]).space.PX_24, gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.featureRows = { gap: importDefault(dependencyMap[7]).space.PX_32 };
let closure_11 = obj.createStyles(obj);
let closure_12 = { code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
const obj4 = { gap: importDefault(dependencyMap[7]).space.PX_32 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  let showEaNonPremiumMarketing;
  let showEaPremiumMarketing;
  let showGiftingMarketing;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const tmp = callback3();
  let obj = arg1(closure_2[15]);
  const profileFramesMarketing = obj.useProfileFramesMarketing("CollectiblesMobileAnnouncementActionSheet");
  const intl = arg1(closure_2[14]).intl;
  const string = intl.string;
  const t = arg1(closure_2[14]).t;
  if (profileFramesMarketing.showEaPremiumMarketing) {
    let stringResult = string(t.7cmcJI);
  } else {
    stringResult = string(t.MkVbBY);
  }
  ({ showGiftingMarketing, showEaPremiumMarketing, showEaNonPremiumMarketing } = profileFramesMarketing);
  const intl2 = arg1(closure_2[14]).intl;
  const string2 = intl2.string;
  const t2 = arg1(closure_2[14]).t;
  if (showGiftingMarketing) {
    let string2Result = string2(t2./4bQuG);
  } else if (showEaPremiumMarketing) {
    string2Result = string2(t2.5UI+bw);
  } else if (showEaNonPremiumMarketing) {
    string2Result = string2(t2.4a7pVU);
  } else {
    string2Result = string2(t2.+9vaAT);
  }
  const importDefault = React.useRef(false);
  closure_2 = React.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = React.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(constants.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = React.useCallback(() => {
    callback.current = true;
    markAsDismissed(constants2.PRIMARY);
    let obj = markAsDismissed(closure_2[16]);
    obj = { screen: constants.FEATURED_PAGE, analyticsLocations: [], analyticsSource: callback(closure_2[17]).ACTION_SHEET };
    const result = obj.openCollectiblesShopMobile(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(constants2.USER_DISMISS);
  }, items2);
  const memo = React.useMemo(() => callback2(closure_13, {}), []);
  obj = { onDismiss: callback1, backdropChildren: memo };
  obj = { style: tmp.container };
  const obj1 = {};
  const obj2 = { uri: importDefault(closure_2[19]) };
  obj1.source = obj2;
  obj1.style = tmp.framePreviewImage;
  obj1.accessibilityElementsHidden = true;
  obj1.importantForAccessibility = "no-hide-descendants";
  const items3 = [callback(closure_4, obj1), , , ];
  const obj3 = { style: tmp.headerText };
  const intl3 = tmp2(tmp3[14]).intl;
  obj3.children = intl3.string(arg1(closure_2[14]).t.vRCvqo);
  items3[1] = callback(arg1(closure_2[13]).Text, obj3);
  const obj4 = { style: tmp.featureRows };
  const obj5 = { icon: callback(arg1(closure_2[20]).PaintIllocon, { size: 32 }) };
  const intl4 = tmp2(tmp3[14]).intl;
  obj5.text = intl4.string(arg1(closure_2[14]).t.6ZWB0C);
  const items4 = [callback(FeatureRow, obj5), , ];
  const obj6 = { icon: callback(arg1(closure_2[20]).HeartIllocon, { size: 32 }), text: stringResult };
  items4[1] = callback(FeatureRow, obj6);
  const obj7 = { icon: callback(arg1(closure_2[20]).ShopIllocon, { size: 32 }), text: string2Result };
  items4[2] = callback(FeatureRow, obj7);
  obj4.children = items4;
  items3[2] = callback2(closure_5, obj4);
  const obj8 = { size: "lg" };
  const intl5 = tmp2(tmp3[14]).intl;
  obj8.text = intl5.string(arg1(closure_2[14]).t.S9hXPI);
  obj8.onPress = callback;
  items3[3] = callback(arg1(closure_2[21]).Button, obj8);
  obj.children = items3;
  obj.children = callback2(closure_5, obj);
  return callback(arg1(closure_2[18]).BottomSheet, obj);
};
