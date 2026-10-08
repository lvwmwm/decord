// Module ID: 17435
// Function ID: 17436
// Name: CollectiblesMobileAnnouncementActionSheet
// Dependencies: [19, 17, 1087, 6830, 2060, 21, 5090, 587, 558, 576, 1496, 6298, 1630, 4810, 17436, 6164, 5086, 7251, 6865, 17437, 1126, 12481, 12475, 17438, 5375, 6829, 2]

// Module 17435 (CollectiblesMobileAnnouncementActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import FastImageDefault from "FastImage" /* 6164 */;
import BottomSheetModal from "BottomSheetModal" /* 6298 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6830 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7251 */;
import _modDef17436 from "module_17436" /* 17436 */;
import _modDef17437 from "module_17437" /* 17437 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let BottomSheet, dependencyMap, importDefault;

let StyleSheet;
let c9;
let closure_4;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp;
const Text_Text = tmp(5086);
({ StyleSheet, View: closure_4 } = react_native);
let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 32;
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
const __initData2 = { code: "function CollectiblesMobileAnnouncementActionSheetTsx2(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function CatEarsBackdrop() {
  let tmp9;
  let obj = react2;
  const cResult = obj.c(22);
  const tmp3 = closure_11();
  const width = useWindowDimensionsDefault().width;
  const obj2 = BottomSheetModal;
  const animatedPosition = obj2.useBottomSheet().animatedPosition;
  const top = useSafeAreaInsetsDefault().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
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
  const obj3 = ReanimatedRexport;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] !== result) {
    const rect = { left: result, right: result };
    cResult[0] = result;
    cResult[1] = rect;
    tmp9 = rect;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === tmp3.mascotContainer) {
      let tmp10;
      if (cResult[4] === tmp9) {
        tmp10 = cResult[5];
      }
      const result2 = -138 * result1;
      if (cResult[6] === result2) {
        if (cResult[7] === -56 * result1) {
          let tmp13;
          if (cResult[8] === -56 * result1) {
            tmp13 = cResult[9];
          }
          if (cResult[10] === tmp3.mascotLayer) {
            let tmp14;
            let tmp15;
            let tmp16;
            if (cResult[11] === tmp13) {
              tmp14 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { uri: _modDef17436 };
              cResult[13] = obj4;
              tmp15 = obj4;
            } else {
              tmp15 = cResult[13];
            }
            if (cResult[14] !== tmp3.mascotImage) {
              const obj5 = { source: tmp15, style: tmp3.mascotImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
              const tmp18 = metroImportAll(FastImageDefault, obj5);
              cResult[14] = tmp3.mascotImage;
              cResult[15] = tmp18;
              tmp16 = tmp18;
            } else {
              tmp16 = cResult[15];
            }
            if (cResult[16] === tmp14) {
              let tmp19;
              if (cResult[17] === tmp16) {
                tmp19 = cResult[18];
              }
              if (cResult[19] === tmp10) {
                let tmp23;
                if (cResult[20] === tmp19) {
                  tmp23 = cResult[21];
                }
                return tmp23;
              }
              const obj6 = { style: tmp10, children: tmp19 };
              const tmp25 = metroImportAll(ReanimatedRexportDefault.View, obj6);
              cResult[19] = tmp10;
              cResult[20] = tmp19;
              cResult[21] = tmp25;
              tmp23 = tmp25;
            }
            const obj7 = { style: tmp14, children: tmp16 };
            const tmp22 = metroImportAll(React3, obj7);
            cResult[16] = tmp14;
            cResult[17] = tmp16;
            cResult[18] = tmp22;
            tmp19 = tmp22;
          }
          let items = [tmp3.mascotLayer, tmp13];
          cResult[10] = tmp3.mascotLayer;
          cResult[11] = tmp13;
          cResult[12] = items;
          tmp14 = items;
        }
      }
      const rect1 = { top: result2, left: -56 * result1, right: -56 * result1 };
      cResult[6] = result2;
      cResult[7] = -56 * result1;
      cResult[8] = -56 * result1;
      cResult[9] = rect1;
      tmp13 = rect1;
    }
  }
  const items1 = [tmp3.mascotContainer, tmp9, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp3.mascotContainer;
  cResult[4] = tmp9;
  cResult[5] = items1;
  tmp10 = items1;
}) : (function CatEarsBackdrop() {
  let items;
  let items1;
  let obj4;
  let obj5;
  let obj6;
  let tmp7;
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
  fn.__workletHash = 4965253652215;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items, children: metroImportAll(React3, obj4) };
  items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj4 = { style: items1, children: metroImportAll(tmp7, obj5) };
  items1 = [tmp.mascotLayer, ];
  const rect = { top: -138 * result1, left: -56 * result1, right: -56 * result1 };
  items1[1] = rect;
  const View = ReanimatedRexportDefault.View;
  obj5 = { source: obj6, style: tmp.mascotImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj6 = { uri: _modDef17436 };
  tmp7 = FastImageDefault;
  return metroImportAll(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function FeatureRow(arg0) {
  let icon;
  let items;
  let text;
  const obj = react2;
  const cResult = obj.c(7);
  ({ icon, text } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === tmp4.featureText) {
    let tmp5;
    if (cResult[1] === text) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === icon) {
      if (cResult[4] === tmp4.featureRow) {
        let tmp7;
        if (cResult[5] === tmp5) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj2 = { style: tmp4.featureRow, children: items };
    items = [icon, tmp5];
    const tmp10 = React4(React3, obj2);
    cResult[3] = icon;
    cResult[4] = tmp4.featureRow;
    cResult[5] = tmp5;
    cResult[6] = tmp10;
    tmp7 = tmp10;
  }
  const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.featureText, children: text };
  const tmp6 = metroImportAll(Text_Text.Text, obj3);
  cResult[0] = tmp4.featureText;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function FeatureRow(arg0) {
  let icon;
  let items;
  let text;
  ({ icon, text } = arg0);
  const tmp = closure_11();
  const obj = { style: tmp.featureRow, children: items };
  items = [icon, ];
  const obj2 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text };
  items[1] = metroImportAll(Text_Text.Text, obj2);
  return React4(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  let closure_1;
  let closure_2;
  let constants2;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let obj11;
  let obj7;
  let obj9;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp19;
  let tmp23;
  let tmp25;
  let tmp28;
  let tmp33;
  let tmp38;
  let tmp43;
  let tmp47;
  let tmp49;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = markAsDismissed(576);
  const cResult = obj.c(33);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_11();
  let obj2 = react;
  importDefault = react.useRef(false);
  dependencyMap = react.useRef(markAsDismissed);
  if (cResult[0] !== markAsDismissed) {
    const fn = function o() {
      closure_2.current = markAsDismissed;
    };
    const items = [markAsDismissed];
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = obj2.useEffect(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      let ref;
      let ref2;
      return () => {
        if (!ref.current) {
          ref2.current(constants2.AUTO_DISMISS);
        }
      };
    };
    const items1 = [];
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect1 = obj2.useEffect(tmp8, tmp9);
  if (cResult[5] !== markAsDismissed) {
    const fn3 = function y() {
      closure_1.current = true;
      markAsDismissed(ContentDismissActionType.PRIMARY);
      const obj = CollectiblesActionCreators;
      const obj2 = { screen: constants.FEATURED_PAGE, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.ACTION_SHEET };
      const result = obj.openCollectiblesShopMobile(obj2);
    };
    cResult[5] = markAsDismissed;
    cResult[6] = fn3;
    tmp11 = fn3;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] !== markAsDismissed) {
    const fn4 = function v() {
      closure_1.current = true;
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[7] = markAsDismissed;
    cResult[8] = fn4;
    tmp12 = fn4;
  } else {
    tmp12 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = closure_8(closure_14, {});
    cResult[9] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[9];
  }
  const container = tmp4.container;
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { uri: _modDef17437 };
    cResult[10] = obj3;
    tmp17 = obj3;
  } else {
    tmp17 = cResult[10];
  }
  if (cResult[11] !== tmp4.framePreviewImage) {
    const obj4 = { source: tmp17, style: tmp4.framePreviewImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const tmp22 = closure_8(FastImageDefault, obj4);
    cResult[11] = tmp4.framePreviewImage;
    cResult[12] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[12];
  }
  const headerText = tmp4.headerText;
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(markAsDismissed(1126).t.vRCvqo);
    cResult[13] = stringResult;
    tmp23 = stringResult;
  } else {
    tmp23 = cResult[13];
  }
  if (cResult[14] !== tmp4.headerText) {
    const obj5 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: headerText, children: tmp23 };
    const tmp27 = closure_8(markAsDismissed(5086).Text, obj5);
    cResult[14] = tmp4.headerText;
    cResult[15] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[15];
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { icon: closure_8(markAsDismissed(12481).PaintIllocon, obj7), text: intl2.string(markAsDismissed(1126).t["6ZWB0C"]) };
    obj7 = { size };
    intl2 = tmp(1126).intl;
    const tmp32 = closure_8(closure_15, obj6);
    cResult[16] = tmp32;
    tmp28 = tmp32;
  } else {
    tmp28 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { icon: closure_8(markAsDismissed(12475).HeartIllocon, obj9), text: intl3.string(markAsDismissed(1126).t.MkVbBY) };
    obj9 = { size };
    intl3 = tmp(1126).intl;
    const tmp37 = closure_8(closure_15, obj8);
    cResult[17] = tmp37;
    tmp33 = tmp37;
  } else {
    tmp33 = cResult[17];
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { icon: closure_8(markAsDismissed(17438).ShopIllocon, obj11), text: intl4.string(markAsDismissed(1126).t["/4bQuG"]) };
    obj11 = { size };
    intl4 = tmp(1126).intl;
    const tmp42 = closure_8(closure_15, obj10);
    cResult[18] = tmp42;
    tmp38 = tmp42;
  } else {
    tmp38 = cResult[18];
  }
  if (cResult[19] !== tmp4.featureRows) {
    const obj12 = { style: tmp4.featureRows, children: items2 };
    items2 = [tmp28, tmp33, tmp38];
    const tmp46 = closure_9(closure_4, obj12);
    cResult[19] = tmp4.featureRows;
    cResult[20] = tmp46;
    tmp43 = tmp46;
  } else {
    tmp43 = cResult[20];
  }
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1126).intl;
    const stringResult1 = intl5.string(markAsDismissed(1126).t.S9hXPI);
    cResult[21] = stringResult1;
    tmp47 = stringResult1;
  } else {
    tmp47 = cResult[21];
  }
  if (cResult[22] !== tmp11) {
    const obj13 = { size: "lg", text: tmp47, onPress: tmp11 };
    const tmp51 = closure_8(markAsDismissed(5375).Button, obj13);
    cResult[22] = tmp11;
    cResult[23] = tmp51;
    tmp49 = tmp51;
  } else {
    tmp49 = cResult[23];
  }
  if (cResult[24] === tmp4.container) {
    if (cResult[25] === tmp19) {
      if (cResult[26] === tmp25) {
        if (cResult[27] === tmp43) {
          let tmp52;
          if (cResult[28] === tmp49) {
            tmp52 = cResult[29];
          }
          if (cResult[30] === tmp12) {
            let tmp54;
            if (cResult[31] === tmp52) {
              tmp54 = cResult[32];
            }
            return tmp54;
          }
          const obj14 = { onDismiss: tmp12, backdropChildren: tmp13, children: tmp52 };
          const tmp56 = closure_8(markAsDismissed(6829).BottomSheet, obj14);
          cResult[30] = tmp12;
          cResult[31] = tmp52;
          cResult[32] = tmp56;
          tmp54 = tmp56;
        }
      }
    }
  }
  const obj15 = { style: container, children: items3 };
  items3 = [tmp19, tmp25, tmp43, tmp49];
  const tmp53 = closure_9(closure_4, obj15);
  cResult[24] = tmp4.container;
  cResult[25] = tmp19;
  cResult[26] = tmp25;
  cResult[27] = tmp43;
  cResult[28] = tmp49;
  cResult[29] = tmp53;
  tmp52 = tmp53;
}) : (function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
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
  let obj10;
  let obj12;
  let obj2;
  let obj4;
  let obj8;
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
  const memo = react.useMemo(() => closure_1_8(closure_1_14, {}), []);
  let obj = { onDismiss: callback1, backdropChildren: memo, children: closure_9(closure_4, obj2) };
  obj2 = { style: tmp.container, children: items3 };
  BottomSheet = markAsDismissed(6829).BottomSheet;
  const obj3 = { source: obj4, style: tmp.framePreviewImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj4 = { uri: _modDef17437 };
  const tmp7 = FastImageDefault;
  items3 = [closure_8(tmp7, obj3), , , ];
  const obj5 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp.headerText, children: intl.string(markAsDismissed(1126).t.vRCvqo) };
  const Text = markAsDismissed(5086).Text;
  intl = markAsDismissed(1126).intl;
  items3[1] = closure_8(Text, obj5);
  const obj6 = { style: tmp.featureRows, children: items4 };
  const obj7 = { icon: closure_8(markAsDismissed(12481).PaintIllocon, obj8), text: intl2.string(markAsDismissed(1126).t["6ZWB0C"]) };
  obj8 = { size };
  intl2 = markAsDismissed(1126).intl;
  items4 = [closure_8(closure_15, obj7), , ];
  const obj9 = { icon: closure_8(markAsDismissed(12475).HeartIllocon, obj10), text: intl3.string(markAsDismissed(1126).t.MkVbBY) };
  obj10 = { size };
  intl3 = markAsDismissed(1126).intl;
  items4[1] = closure_8(closure_15, obj9);
  const obj11 = { icon: closure_8(markAsDismissed(17438).ShopIllocon, obj12), text: intl4.string(markAsDismissed(1126).t["/4bQuG"]) };
  obj12 = { size };
  intl4 = markAsDismissed(1126).intl;
  items4[2] = closure_8(closure_15, obj11);
  items3[2] = closure_9(closure_4, obj6);
  const obj13 = { size: "lg", text: intl5.string(markAsDismissed(1126).t.S9hXPI), onPress: callback };
  const Button = markAsDismissed(5375).Button;
  intl5 = markAsDismissed(1126).intl;
  items3[3] = closure_8(Button, obj13);
  return closure_8(BottomSheet, obj);
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default tmp7;
