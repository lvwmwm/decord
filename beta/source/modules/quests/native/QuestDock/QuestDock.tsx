// Module ID: 17511
// Function ID: 17512
// Name: QuestDock
// Dependencies: [5, 32, 109, 19, 17, 17425, 6869, 17427, 1072, 1083, 21, 5170, 575, 1377, 17456, 17424, 17428, 17431, 5422, 1652, 8948, 1627, 17432, 5756, 17512, 5793, 17426, 5794, 6182, 17513, 1113, 17514, 17515, 17516, 5758, 9805, 6872, 17517, 6626, 6631, 6876, 7981, 17510, 504, 9797, 9806, 5231, 17422, 1252, 17518, 17519, 17526, 17527, 17529, 14964, 17532, 17538, 17541, 17543, 17544, 17545, 17546, 17547, 7216, 17549, 2]

// Module 17511 (QuestDock)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import native from "native" /* 5231 */;
import springPresets from "springPresets" /* 5794 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6626 */;
import MetricEvents from "MetricEvents" /* 6631 */;
import QuestTypes from "QuestTypes" /* 6872 */;
import AdCreativeType from "AdCreativeType" /* 6876 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9805 */;
import QuestActionCreators from "QuestActionCreators" /* 9806 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 14964 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17428 */;
import QuestDockBountyHeaderDefault from "QuestDockBountyHeader" /* 17538 */;
import QuestDockBountyBodyDefault from "QuestDockBountyBody" /* 17541 */;
import QuestDockBountyBackgroundDefault from "QuestDockBountyBackground" /* 17543 */;
import QuestDockPlayableHeaderDefault from "QuestDockPlayableHeader" /* 17544 */;
import QuestDockPlayableBodyDefault from "QuestDockPlayableBody" /* 17545 */;
import QuestDockPlayableBackgroundDefault from "QuestDockPlayableBackground" /* 17546 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestDockStore from "QuestDockStore" /* 17425 */;
import QuestConstants from "QuestConstants" /* 6869 */;
import QuestDockConstants from "QuestDockConstants" /* 17427 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let expandedHeight;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_23;
let closure_24;
let closure_25;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
function QuestDockWithGestureAnimation(arg0) {
  let AccessibilityViewAnimated;
  let View2;
  let activeQuestDockMode;
  let backgroundContent;
  let collapsedContent;
  let expandedContent;
  let intl;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let layoutVariant;
  let obj10;
  let obj12;
  let obj16;
  let obj21;
  let questDockExpandHandler;
  let questDockWrapperSpecs;
  let sharedValue;
  let str3;
  let str4;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22Result;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp58;
  let tmp59;
  let tmp60;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp80;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp93;
  let windowDimensions;
  let withAndroidOffscreenAlphaCompositingWorkaround;
  ({ layoutVariant, withAndroidOffscreenAlphaCompositingWorkaround } = arg0);
  let isAndroidResult = undefined !== withAndroidOffscreenAlphaCompositingWorkaround;
  ({ backgroundColor, expandedHeight, collapsedContent, expandedContent, backgroundContent } = arg0);
  if (isAndroidResult) {
    isAndroidResult = withAndroidOffscreenAlphaCompositingWorkaround;
  }
  if (isAndroidResult) {
    let obj = questDockExpandHandler(sharedValue[13]);
    isAndroidResult = obj.isAndroid();
  }
  let tmp4 = "flush" === layoutVariant;
  let str = "fixed";
  if (tmp4) {
    str = "content";
  }
  let str2 = "overlay";
  if (tmp4) {
    str2 = "default";
  }
  let obj2 = questDockExpandHandler(sharedValue[14]);
  const questDockCreative = obj2.useQuestDockCreative();
  let obj3 = questDockExpandHandler(sharedValue[15]);
  questDockExpandHandler = obj3.useQuestDockExpandHandler(questDockCreative);
  const tmp9 = closure_26();
  const context = react.useContext(questDockExpandHandler(sharedValue[16]).QuestDockGestureContext);
  ({ questDockWrapperSpecs, activeQuestDockMode, windowDimensions } = context);
  const context1 = react.useContext(questDockExpandHandler(sharedValue[17]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const restingQuestDockMode = context1.restingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = react.useId();
  const callback = react.useCallback(() => {
    setRestingQuestDockMode(constants.COLLAPSED);
  }, items);
  const obj5 = questDockExpandHandler(sharedValue[15]);
  const questDockModeAnimatedReaction = obj5.useQuestDockModeAnimatedReaction();
  obj6 = questDockExpandHandler(sharedValue[15]);
  const questDockDismissalReset = obj6.useQuestDockDismissalReset();
  const obj7 = questDockExpandHandler(sharedValue[18]);
  const isScreenReaderEnabled = obj7.useIsScreenReaderEnabled();
  const items1 = [closure_27, restingQuestDockMode, ];
  items1[2] = constants;
  let c0;
  let c1;
  [tmp18, tmp19, tmp20] = items1;
  const obj8 = questDockExpandHandler(sharedValue[19]);
  class QuestDockTsx1 {
    constructor() {
      return _undefined.get() === _undefined2.EXPANDED;
    }
  }
  const items2 = [tmp19, tmp20];
  QuestDockTsx1.__closure = items2;
  QuestDockTsx1.__workletHash = 9923018697916;
  QuestDockTsx1.__initData = tmp18;
  const derivedValue = obj8.useDerivedValue(QuestDockTsx1);
  const tmp23 = setRestingQuestDockMode(sharedValue[20])(derivedValue);
  const top = setRestingQuestDockMode(tmp6[21])().top;
  const tmp5Result = questDockExpandHandler(sharedValue[22]);
  const youBarTotalHeight = tmp5Result.useYouBarTotalHeight();
  const tmp5Result10 = questDockExpandHandler(sharedValue[23]);
  const token = tmp5Result10.useToken(setRestingQuestDockMode(tmp6[12]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp26 = setRestingQuestDockMode(sharedValue[24])(token);
  const items3 = [closure_28, backgroundColor, , , , , , ];
  const useAnimatedStyle = tmp5(tmp6[19]).useAnimatedStyle;
  questDockExpandHandler(sharedValue[19]);
  items3[2] = questDockExpandHandler(sharedValue[25]).withSpring;
  items3[3] = tmp26;
  items3[4] = closure_15;
  items3[5] = questDockWrapperSpecs;
  items3[6] = closure_14;
  items3[7] = questDockExpandHandler(sharedValue[26]).roundToNearestPixel;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items3;
  const tmp28 = closure_15;
  class QuestDockTsx2 {
    constructor() {
      let items;
      size = { backgroundColor, borderBottomRightRadius: _undefined(_undefined2.get(), c3), borderBottomLeftRadius: _undefined(_undefined2.get(), c3), height: _undefined3.get().height, width: _undefined3.get().width, opacity: _undefined(1, c5), transform: items };
      items = [{ translateX: _undefined(_undefined3.get().x + -1 * _undefined4(_undefined3.get().width / 2), c5) }, ];
      ({ translateX: _undefined(_undefined3.get().x + -1 * _undefined4(_undefined3.get().width / 2), c5) });
      items[1] = { translateY: _undefined(_undefined3.get().y, c5) };
      ({ translateY: _undefined(_undefined3.get().y, c5) });
      return size;
    }
  }
  const items4 = [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37];
  QuestDockTsx2.__closure = items4;
  QuestDockTsx2.__workletHash = 13174299505860;
  QuestDockTsx2.__initData = tmp30;
  const animatedStyle = useAnimatedStyle(QuestDockTsx2);
  const tmp5Result12 = questDockExpandHandler(sharedValue[19]);
  sharedValue = tmp5Result12.useSharedValue(0);
  const items5 = [closure_29, , , , ];
  const useAnimatedStyle2 = tmp5(tmp6[19]).useAnimatedStyle;
  questDockExpandHandler(sharedValue[19]);
  items5[1] = questDockExpandHandler(sharedValue[25]).withSpring;
  items5[2] = questDockExpandHandler(sharedValue[19]).interpolate;
  items5[3] = sharedValue;
  items5[4] = questDockExpandHandler(sharedValue[27]).springStandard;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp41, tmp42, tmp43, tmp44, tmp45] = items5;
  class QuestDockTsx3 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined(_undefined2(_undefined3.get(), [1, 0], [1, 1]), c3) }];
      ({ scale: _undefined(_undefined2(_undefined3.get(), [1, 0], [1, 1]), c3) });
      return obj;
    }
  }
  const items6 = [tmp42, tmp43, tmp44, tmp45];
  QuestDockTsx3.__closure = items6;
  QuestDockTsx3.__workletHash = 6545557591925;
  QuestDockTsx3.__initData = tmp41;
  const items7 = [setRestingQuestDockMode, questDockExpandHandler];
  const animatedStyle2 = useAnimatedStyle2(QuestDockTsx3);
  const items8 = [sharedValue];
  const callback1 = obj4.useCallback(() => {
    setRestingQuestDockMode(constants.EXPANDED);
    questDockExpandHandler();
  }, items7);
  const items9 = [sharedValue];
  const callback2 = obj4.useCallback(() => {
    const result = sharedValue.set(1);
  }, items8);
  const callback3 = obj4.useCallback(() => {
    const result = sharedValue.set(0);
  }, items9);
  const items10 = [closure_30, , , , , ];
  const useAnimatedStyle3 = tmp5(tmp6[19]).useAnimatedStyle;
  questDockExpandHandler(sharedValue[19]);
  items10[1] = questDockExpandHandler(sharedValue[25]).withSpring;
  items10[2] = activeQuestDockMode;
  items10[3] = constants;
  items10[4] = closure_14;
  items10[5] = windowDimensions;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp51, tmp52, tmp53, tmp54, tmp55, tmp56] = items10;
  class QuestDockTsx4 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (_undefined.get() === _undefined2.EXPANDED) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c3), height: _undefined3.get().height };
      return obj;
    }
  }
  const items11 = [tmp52, tmp53, tmp54, tmp55, tmp56];
  QuestDockTsx4.__closure = items11;
  QuestDockTsx4.__workletHash = 1480244273080;
  QuestDockTsx4.__initData = tmp51;
  const animatedStyle3 = useAnimatedStyle3(QuestDockTsx4);
  const items12 = [closure_31, activeQuestDockMode, tmp17];
  c0 = undefined;
  c1 = undefined;
  [tmp58, tmp59, tmp60] = items12;
  const tmp5Result15 = questDockExpandHandler(sharedValue[19]);
  class QuestDockTsx5 {
    constructor() {
      let pointerEvents = "none";
      if (_undefined.get() === _undefined2.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  const items13 = [tmp59, tmp60];
  QuestDockTsx5.__closure = items13;
  QuestDockTsx5.__workletHash = 16280207829696;
  QuestDockTsx5.__initData = tmp58;
  const animatedProps = tmp5Result15.useAnimatedProps(QuestDockTsx5);
  const items14 = [closure_32, questDockWrapperSpecs, windowDimensions, top];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp62, tmp63, tmp64, tmp65] = items14;
  const tmp5Result16 = questDockExpandHandler(sharedValue[19]);
  class QuestDockTsx6 {
    constructor() {
      const value = _undefined.get();
      return _undefined2.get().height - c2 - value.height;
    }
  }
  const items15 = [tmp63, tmp64, tmp65];
  QuestDockTsx6.__closure = items15;
  QuestDockTsx6.__workletHash = 14232802848762;
  QuestDockTsx6.__initData = tmp62;
  const derivedValue1 = tmp5Result16.useDerivedValue(QuestDockTsx6);
  const items16 = [closure_33, , , , ];
  const tmp67 = setRestingQuestDockMode(sharedValue[20])(derivedValue1);
  const useAnimatedStyle4 = tmp5(tmp6[19]).useAnimatedStyle;
  questDockExpandHandler(sharedValue[19]);
  items16[1] = questDockExpandHandler(sharedValue[25]).withSpring;
  items16[2] = activeQuestDockMode;
  items16[3] = constants;
  items16[4] = closure_14;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp69, tmp70, tmp71, tmp72, tmp73] = items16;
  class QuestDockTsx7 {
    constructor() {
      let num;
      const tmp = c0;
      if (_undefined.get() === _undefined2.CLOSED) {
        num = 0;
      } else {
        num = 1;
      }
      const obj2 = { opacity: tmp(num, c3) };
      return obj2;
    }
  }
  const items17 = [tmp70, tmp71, tmp72, tmp73];
  QuestDockTsx7.__closure = items17;
  QuestDockTsx7.__workletHash = 13838986608047;
  QuestDockTsx7.__initData = tmp69;
  const animatedStyle4 = useAnimatedStyle4(QuestDockTsx7);
  const items18 = [closure_34, "insetHeader" === layoutVariant, activeQuestDockMode, tmp17, closure_16, token, tmp26, , , , , ];
  const useAnimatedStyle5 = tmp5(tmp6[19]).useAnimatedStyle;
  questDockExpandHandler(sharedValue[19]);
  items18[7] = questDockExpandHandler(sharedValue[25]).withSpring;
  items18[8] = tmp28;
  items18[9] = closure_18;
  items18[10] = questDockWrapperSpecs;
  items18[11] = closure_17;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87] = items18;
  class QuestDockTsx8 {
    constructor() {
      if (c0) {
        let tmp4;
        if (_undefined.get() === _undefined2.EXPANDED) {
          tmp4 = c3;
        }
        size = { borderTopLeftRadius: tmp4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
        if (c0) {
          let tmp7;
          if (_undefined.get() === _undefined2.EXPANDED) {
            tmp7 = c3;
          }
          size.borderTopRightRadius = tmp7;
          if (c0) {
            let value2;
            if (_undefined.get() === _undefined2.EXPANDED) {
              value2 = c3;
            }
            size.borderBottomLeftRadius = value2;
            if (c0) {
              let value;
              if (_undefined.get() === _undefined2.EXPANDED) {
                value = c3;
              }
              size.borderBottomRightRadius = value;
              let num2 = 1;
              if (_undefined.get() === _undefined2.EXPANDED) {
                num2 = 0;
              }
              size.opacity = _undefined(num2, c7);
              if (_undefined.get() === _undefined2.EXPANDED) {
                let height;
                if (c0) {
                  height = c8;
                }
                size.height = height;
                if (_undefined.get() === _undefined2.EXPANDED) {
                  let width;
                  if (c0) {
                    width = _undefined4.get().width - 2 * c10;
                  }
                  size.width = width;
                  let num5 = 0;
                  if (c0) {
                    let num6 = 0;
                    if (_undefined.get() === _undefined2.EXPANDED) {
                      num6 = c10;
                    }
                    num5 = tmp16(num6, tmp18);
                  }
                  const items = [{ translateX: num5 }, ];
                  let num7 = 0;
                  const obj = { translateX: num5 };
                  if (c0) {
                    let num8 = 0;
                    if (_undefined.get() === _undefined2.EXPANDED) {
                      num8 = c10;
                    }
                    num7 = tmp16(num8, tmp18);
                  }
                  const obj3 = { translateY: num7 };
                  items[1] = obj3;
                  size.transform = items;
                  let num9 = 0;
                  if (_undefined3.get() > 0) {
                    num9 = 1;
                  }
                  size.borderBottomWidth = num9;
                  return size;
                }
                width = _undefined4.get().width;
              }
              height = _undefined4.get().height;
            }
            value = _undefined3.get();
          }
          value2 = _undefined3.get();
        }
        tmp7 = c4;
      }
      tmp4 = c4;
    }
  }
  const items19 = [tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87];
  QuestDockTsx8.__closure = items19;
  QuestDockTsx8.__workletHash = 11829674658399;
  QuestDockTsx8.__initData = tmp76;
  const obj9 = { style: tmp9.wrapper, pointerEvents: "auto", children: closure_23(AccessibilityViewAnimated, obj10) };
  const animatedStyle5 = useAnimatedStyle5(QuestDockTsx8);
  obj10 = { nativeID: id, style: tmp9.accessibilityWrapper, accessibilityViewIsModal: tmp93, onAccessibilityEscape: callback, pointerEvents: "box-none", children: closure_23(tmp22Result, obj16) };
  tmp93 = isScreenReaderEnabled;
  AccessibilityViewAnimated = tmp5(tmp6[28]).AccessibilityViewAnimated;
  const tmp90 = closure_25;
  if (tmp93) {
    tmp93 = tmp23;
  }
  const obj11 = { style: animatedStyle2, children: closure_24(View2, obj12) };
  tmp22Result = setRestingQuestDockMode(sharedValue[29]);
  const View = tmp22(tmp6[19]).View;
  obj12 = { style: items20, layout: questDockExpandHandler(sharedValue[26]).dimensionsLayoutTransition, children: items21 };
  items20 = [tmp9.questDockWrapper, , ];
  const obj13 = { bottom: youBarTotalHeight - 1 };
  items20[1] = obj13;
  items20[2] = animatedStyle;
  View2 = tmp22(tmp6[19]).View;
  const obj14 = { style: tmp9.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: str3, accessibilityRole: "button", accessibilityLabel: intl.string(questDockExpandHandler(sharedValue[30]).t.rjVPdM), accessibilityHint: str4 };
  str3 = "auto";
  const tmp95 = closure_9;
  if (tmp23) {
    str3 = "none";
  }
  intl = tmp5(tmp6[30]).intl;
  str4 = "";
  if (!tmp23) {
    const intl2 = tmp5(tmp6[30]).intl;
    str4 = intl2.string(tmp5(tmp6[30]).t.n0MlOB);
  }
  const obj15 = { children: items26 };
  obj16 = { children: closure_23(View, obj11) };
  items21 = [closure_23(tmp95, obj14), , , ];
  const obj17 = { style: items22, layout: questDockExpandHandler(sharedValue[26]).dimensionsLayoutTransition, pointerEvents: "none" };
  items22 = [tmp9.questDockHeaderBorder, animatedStyle5];
  const View3 = tmp22(tmp6[19]).View;
  items21[1] = closure_23(View3, obj17);
  const obj18 = { style: items23, needsOffscreenAlphaCompositing: isAndroidResult, children: items25 };
  items23 = [tmp9.questDockContentWrapper, animatedStyle4];
  const obj19 = { style: tmp9.questDockContentWrapper, children: items24 };
  const View4 = tmp22(tmp6[19]).View;
  items24 = [closure_23(tmp22(tmp6[31]), { hideOnExpand: tmp4, children: collapsedContent }), closure_23(tmp22(tmp6[32]), { expandedHeightMode: str, expandedHeight, children: expandedContent })];
  items25 = [closure_24(closure_8, obj19), backgroundContent];
  items21[2] = closure_24(View4, obj18);
  items21[3] = closure_23(setRestingQuestDockMode(sharedValue[33]), { isExpanded: tmp23, variant: str2 });
  items26 = [closure_23(closure_8, obj9), ];
  const obj20 = { style: animatedStyle3, animatedProps, children: closure_23(questDockExpandHandler(sharedValue[34]).Backdrop, obj21) };
  const View5 = tmp22(tmp6[19]).View;
  obj21 = { onDismiss: callback, accessibleDismissStyle: { height: tmp67 } };
  items26[1] = closure_23(View5, obj20);
  return closure_24(tmp90, obj15);
}
function QuestDockModeChangeTracker(mode) {
  mode = mode.mode;
  const tmp = _objectWithoutProperties(mode, styles);
  const obj = { mode, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const useQuestBarOrDockModeChangeTracking = hooks_QuestHooks.useQuestBarOrDockModeChangeTracking;
  hooks_QuestHooks;
  const merged = Object.assign(tmp);
  const questBarOrDockModeChangeTracking = useQuestBarOrDockModeChangeTracking(obj);
  return null;
}
function QuestBarRenderedTriggerPointWrapper() {
  const effect = react.useEffect(() => {
    const QuestBarRenderedTriggerPoint = require("QuestBarRenderedTriggerPoint").QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
}
function QuestDockWithEntranceAnimation(adCreativeType) {
  let adCreativeId;
  let backgroundContent;
  let backgroundImageUrl;
  let closure_10;
  let closure_14;
  let closure_3;
  let closure_8;
  let closure_9;
  let expandedContent;
  let iconUrl;
  let isRendered;
  let isVisibleToUser;
  let items6;
  let layoutVariant;
  let mode;
  let obj5;
  let renderImpressionTracker;
  let require;
  let theme;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp7;
  let trackAssetLoadingFailure;
  ({ renderModeChangeTracker: require, adCreativeId } = adCreativeType);
  adCreativeType = adCreativeType.adCreativeType;
  ({ backgroundImageUrl, iconUrl, layoutVariant: closure_3, theme: _asyncToGenerator, backgroundColor: _slicedToArray, expandedHeight: _objectWithoutProperties, collapsedContent: react, expandedContent: closure_8, backgroundContent: closure_9, withAndroidOffscreenAlphaCompositingWorkaround: closure_10 } = adCreativeType);
  let obj = react;
  ({ renderImpressionTracker, trackAssetLoadingFailure } = adCreativeType);
  let tmp = adCreativeId;
  const tmp2 = adCreativeType;
  const context = react.useContext(adCreativeId(adCreativeType[42]));
  ({ isRendered, isVisibleToUser } = context);
  let obj2 = require("get initialized");
  let items = [mode];
  mode = obj2.useStateFromStores(items, () => mode.prevRestingQuestDockMode);
  const tmp4 = _slicedToArray;
  let closure_12 = _slicedToArray(react.useState(() => performance.now()), 1)[0];
  const ref = react.useRef(false);
  const tmp5 = closure_38();
  [tmp7, closure_14] = _slicedToArray(react.useState({ width: 0, height: 0 }), 2);
  const tmp6 = _slicedToArray(react.useState({ width: 0, height: 0 }), 2);
  let obj3 = require("QuestsEligibility");
  const isEligibleForQuests = obj3.getIsEligibleForQuests();
  const items1 = [closure_41, , , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  const tmp9 = require("module_1652");
  items1[1] = require("spring/spring").withSpring;
  items1[2] = isRendered;
  items1[3] = obj6;
  items1[4] = tmp7;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items1;
  class QuestDockTsx9 {
    constructor() {
      let items;
      let num = 0;
      if (c1) {
        num = 1;
      }
      let num2 = 0;
      const obj = { opacity: _undefined(num, c2, "animate-always"), transform: items };
      if (!c1) {
        num2 = _undefined.height;
      }
      items = [{ translateY: _undefined(num2, tmp3) }];
      ({ translateY: _undefined(num2, c2) });
      return obj;
    }
  }
  const items2 = [tmp11, tmp12, tmp13, tmp14];
  QuestDockTsx9.__closure = items2;
  QuestDockTsx9.__workletHash = 10691310740750;
  QuestDockTsx9.__initData = tmp10;
  const animatedStyle = useAnimatedStyle(QuestDockTsx9);
  const tmp4Result = tmp4(obj.useState(constants3.PENDING), 2);
  const first = tmp4Result[0];
  expandedHeight = tmp4Result[1];
  const collapsedContent = obj.useEffectEvent((arg0) => {
    if (trackAssetLoadingFailure != null) {
      tmp(arg0);
    }
  });
  const items3 = [backgroundImageUrl, iconUrl];
  const effect = obj.useEffect(() => {
    function preloadQuestDockAssets() {
      obj(...arguments);
    }
    function prefetchWithErrorReporting(arg0) {
      return obj(...arguments);
    }
    let obj = function _prefetchWithErrorReporting() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0 = arg0;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c4;
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_2 = tmp;
                let closure_1 = tmp4;
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj4 = { value: closure_2_10.prefetch(closure_0), done: false };
                return obj4;
              }
            } else if (1 === c5) {
              c4 = 0;
              closure_1_7(closure_0);
              c6 = 3;
              return { value: false, done: true };
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
              c6 = 3;
              return { value: true, done: true };
            }
          } catch (tmp13) {
            let closure_3 = tmp13;
            if (0 === c4) {
              c6 = 3;
              throw tmp13;
            } else {
              c5 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    obj = function _preloadQuestDockAssets() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let tmp;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp4;
                tmp = undefined;
                const items = [];
                if (null != c2) {
                  items.push(prefetchWithErrorReporting(tmp22));
                }
                if (null != c3) {
                  items.push(prefetchWithErrorReporting(tmp14));
                }
                c2 = 1;
                c3 = 1;
                const obj4 = { value: Promise.all(items), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let FAILED;
              tmp = value;
              const tmp7 = closure_1_6;
              if (tmp.every((item) => true === item)) {
                FAILED = tmp10.SUCCEEDED;
              } else {
                FAILED = tmp10.FAILED;
              }
              tmp7(FAILED);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp18) {
            c3 = 3;
            throw tmp18;
          }
        }
      });
      return obj(...arguments);
    };
    let tmp = preloadQuestDockAssets();
  }, items3);
  const items4 = [first, adCreativeId, adCreativeType];
  const effect1 = obj.useEffect(() => {
    let items;
    if (first === constants.FAILED) {
      const obj = { name: require("MetricEvents").MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: items };
      const increment = adCreativeId(adCreativeType[38]).increment;
      adCreativeId(adCreativeType[38]);
      const _HermesInternal = HermesInternal;
      items = ["ad_creative_id:" + adCreativeId, , , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "ad_creative_type:" + require("AdCreativeType").AdCreativeType[adCreativeType];
      const _HermesInternal3 = HermesInternal;
      const obj2 = require("AnalyticsTypes");
      items[2] = "quest_content:" + obj2.getQuestContentName(require("QuestTypes").QuestContent.QUEST_BAR_MOBILE);
      items[3] = "reason:asset_loading_error";
      increment(obj);
    }
  }, items4);
  let tmp21 = !isEligibleForQuests;
  const tmp16 = constants3;
  if (isEligibleForQuests) {
    tmp21 = first !== tmp16.SUCCEEDED;
  }
  let closure_15 = tmp21;
  const items5 = [tmp21];
  const effect2 = obj.useEffect(() => {
    let obj = QuestActionCreators;
    const obj2 = { isEligibleToBeVisible: !closure_15 };
    let result = obj.updateQuestDockVisibilityEligibility(obj2);
    return () => {
      const obj = closure_1_0(adCreativeType[45]);
      const result = obj.updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
    };
  }, items5);
  let tmp23 = null;
  if (!tmp21) {
    let obj4 = {
      pointerEvents: "box-none",
      style: items6,
      onLayout(height) {
          let items;
          size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
          closure_14(size);
          if (!ref.current) {
            tmp2.current = true;
            const _Math = Math;
            if (Math.random() < 0.1) {
              const _Math2 = Math;
              const _performance = performance;
              const rounded = Math.round(performance.now() - closure_12);
              const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT, tags: items };
              const distribution = MonitoringAgentDefault.distribution;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["ad_creative_id:" + adCreativeId, ];
              const _HermesInternal2 = HermesInternal;
              items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[adCreativeType];
              distribution(obj, rounded);
            }
          }
        },
      children: renderImpressionTracker(obj5)
    };
    items6 = [tmp5.wrapperAnimated, animatedStyle];
    obj5 = {
      children() {
          let ThemeContextProvider;
          let items;
          let obj4;
          let obj5;
          const obj = { children: items };
          items = [, , ];
          const obj2 = { mode };
          items[0] = _require(obj2);
          items[1] = sidebars(QuestBarRenderedTriggerPointWrapper, {});
          const obj3 = { expandedHeight: _objectWithoutProperties, children: sidebars(ThemeContextProvider, obj4) };
          const QuestDockGestureContextProvider = QuestDockGestureContext.QuestDockGestureContextProvider;
          obj4 = { theme: _asyncToGenerator, children: sidebars(QuestDockWithGestureAnimation, obj5) };
          obj5 = { backgroundColor: _slicedToArray, layoutVariant, expandedHeight: _objectWithoutProperties, collapsedContent: react, expandedContent, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround: closure_10 };
          ThemeContextProvider = native.ThemeContextProvider;
          items[2] = sidebars(QuestDockGestureContextProvider, obj3);
          return closure_24(closure_25, obj);
        },
      overrideVisibility: isVisibleToUser
    };
    const View = tmp(tmp2[19]).View;
    tmp23 = closure_23(View, obj4);
  }
  return tmp23;
}
class QuestDockQuestContent {
  constructor(quest) {
    let DARK;
    let str;
    let tmp7Result;
    let tmp8;
    quest = quest.quest;
    let obj = quest(9805);
    const onImpression = obj.useQuestBarImpressionSurvey(quest);
    let obj2 = quest(17424);
    const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
    const obj3 = quest(17422);
    const staticUrl = obj3.useQuestDockHeroAsset(quest).staticUrl;
    const userStatus = quest.userStatus;
    let enrolledAt;
    const obj4 = quest(17422);
    const questGameLogotypeAssetUrl = obj4.useQuestGameLogotypeAssetUrl(quest);
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    const obj5 = { quest, children: closure_23(tmp8, obj6) };
    obj6 = {
      adCreativeId: quest.id,
      adCreativeType: quest(6876).AdCreativeType.QUEST,
      backgroundImageUrl: staticUrl,
      iconUrl: questGameLogotypeAssetUrl,
      trackAssetLoadingFailure(asset_id) {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { quest_id: quest.id, source: map1.QUESTS_BAR_MOBILE, asset_id };
        obj.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, obj2);
      },
      layoutVariant: str,
      theme: DARK,
      backgroundColor: questDockAppThemedBackgroundColor,
      expandedHeight,
      collapsedContent: closure_23(onImpression(null != enrolledAt ? 17518 : 17519), {}),
      expandedContent: closure_23(onImpression(null != enrolledAt ? 17526 : 17527), {}),
      backgroundContent: tmp7Result,
      renderImpressionTracker(arg0) {
        let children;
        let overrideVisibility;
        ({ children, overrideVisibility } = arg0);
        const obj = { questOrQuests: quest, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, onImpression, children };
        const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
        return sidebars(BillableAdPlacementImpressionTrackerNative, obj);
      },
      renderModeChangeTracker(mode) {
        const obj = { questId: quest.id, mode: mode.mode };
        return sidebars(QuestDockModeChangeTracker, obj);
      }
    };
    const QuestDockQuestProvider = tmp(17456).QuestDockQuestProvider;
    str = "insetHeader";
    tmp8 = QuestDockWithEntranceAnimation;
    if (null != enrolledAt) {
      str = "flush";
    }
    DARK = undefined;
    if (null == enrolledAt) {
      DARK = ThemeTypes.DARK;
    }
    tmp7Result = null;
    if (null == enrolledAt) {
      tmp7Result = tmp7(tmp11(17529), {});
    }
    return closure_23(QuestDockQuestProvider, obj5);
  }
}
function QuestDockBountyContent(bounty) {
  let obj5;
  bounty = bounty.bounty;
  let obj = bounty(17424);
  const bountyPreviewImageUrl = obj.useBountyPreviewImageUrl(bounty);
  let obj2 = bounty(17424);
  const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
  const obj3 = bounty(17532);
  const questDockBountySmokeCollapsedPlaceholderUrl = obj3.getQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = { bounty, children: closure_23(QuestDockWithEntranceAnimation, obj5) };
  obj5 = {
    adCreativeId: bounty.id,
    adCreativeType: bounty(6876).AdCreativeType.BOUNTY,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: bounty.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source: map1.QUESTS_BAR_MOBILE, ad_creative_id: bounty.id, ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY, asset_id };
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, obj2);
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_23(QuestDockBountyHeaderDefault, {}),
    expandedContent: closure_23(QuestDockBountyBodyDefault, {}),
    backgroundContent: closure_23(QuestDockBountyBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: true,
    renderImpressionTracker(arg0) {
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return sidebars(BillableAdPlacementImpressionTrackerNative, obj);
    },
    renderModeChangeTracker(mode) {
      const obj = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode };
      return sidebars(QuestDockModeChangeTracker, obj);
    }
  };
  const QuestDockBountyProvider = bounty(17456).QuestDockBountyProvider;
  return closure_23(QuestDockBountyProvider, obj4);
}
function QuestDockPlayableContent(playable) {
  let obj5;
  playable = playable.playable;
  let obj = playable(17424);
  const bountyPreviewImageUrl = obj.useBountyPreviewImageUrl(playable);
  let obj2 = playable(17424);
  const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
  const obj3 = playable(17532);
  const questDockBountySmokeCollapsedPlaceholderUrl = obj3.getQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = { playable, children: closure_23(QuestDockWithEntranceAnimation, obj5) };
  obj5 = {
    adCreativeId: playable.id,
    adCreativeType: playable(6876).AdCreativeType.PLAYABLE,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: playable.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source: map1.QUESTS_BAR_MOBILE, ad_creative_id: playable.id, ad_creative_type: AdCreativeType.AdCreativeType.PLAYABLE, asset_id };
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, obj2);
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_23(QuestDockPlayableHeaderDefault, {}),
    expandedContent: closure_23(QuestDockPlayableBodyDefault, {}),
    backgroundContent: closure_23(QuestDockPlayableBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: true,
    renderImpressionTracker(arg0) {
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { adContentId: playable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return sidebars(BillableAdPlacementImpressionTrackerNative, obj);
    },
    renderModeChangeTracker(mode) {
      const obj = { adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, adContentId: playable.id, mode: mode.mode };
      return sidebars(QuestDockModeChangeTracker, obj);
    }
  };
  const QuestDockPlayableProvider = playable(17456).QuestDockPlayableProvider;
  return closure_23(QuestDockPlayableProvider, obj4);
}
const styles = ["mode"];
({ View: metroImportAll, StyleSheet, Pressable: c9, Image: c10 } = react_native);
({ QuestDockMode: closure_12, QuestsExperimentLocations: map1 } = QuestConstants);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15, QUEST_DOCK_CONTENT_BORDER_RADII: closure_16, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17, QUEST_DOCK_COLLAPSED_HEIGHT: closure_18, QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: closure_19, QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT: closure_20 } = QuestDockConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { position: "absolute", left: "50%", bottom: 0, zIndex: 1 }, accessibilityWrapper: obj2, questDockWrapper: rect, questDockContentWrapper: obj3, questDockHeaderBorder: obj4, nestedPressable: obj5 };
obj2 = { zIndex: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, zIndex: 1 };
obj3 = { justifyContent: "flex-end", zIndex: 4 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { bottom: undefined, right: undefined, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, zIndex: 5 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { zIndex: 6 };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_26 = createStyles(obj);
let closure_27 = { code: "(function QuestDockTsx1(){let[restingQuestDockMode,QuestDockMode]=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;})" };
let closure_28 = { code: "(function QuestDockTsx2(){let[backgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel]=this.__closure;return{backgroundColor:backgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};})" };
let closure_29 = { code: "(function QuestDockTsx3(){let[withSpring,interpolate,isPressed,springStandard]=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};})" };
let closure_30 = { code: "(function QuestDockTsx4(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};})" };
let closure_31 = { code: "(function QuestDockTsx5(){let[activeQuestDockMode,QuestDockMode]=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};})" };
let closure_32 = { code: "(function QuestDockTsx6(){let[questDockWrapperSpecs,windowDimensions,safeAreaTop]=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;})" };
let closure_33 = { code: "(function QuestDockTsx7(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};})" };
let closure_34 = { code: "(function QuestDockTsx8(){let[hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED]=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};})" };
createStyles = createStyles_mod;
let closure_38 = createStyles.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj6 = { overshootClamping: true, damping: 54 };
const merged4 = Object.assign(springPresets.SUBTLE_SPRING);
const constants3 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
let closure_41 = { code: "(function QuestDockTsx9(){let[withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions]=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};})" };
const memoResult = react.memo(function QuestDockWithVisibilityContext() {
  let isMobileQuestDockVisibleToUser;
  let mobileQuestDock;
  let tmp14;
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  mobileQuestDock = obj.useMobileQuestDock();
  let obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  const isMobileQuestDockRenderedBase = obj2.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj3 = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  isMobileQuestDockVisibleToUser = obj3.useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const memo = react.useMemo(() => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }), items);
  const tmp7 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[62]);
  const tmp7Result = tmp7(mobileQuestDock(isMobileQuestDockVisibleToUser[36]).AdPlacement.MOBILE_HOME_DOCK_AREA, "QuestDockWithVisibilityContext");
  const tmp9 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[63])();
  const items1 = [mobileQuestDock];
  const tmp10 = !tmp9;
  const obj4 = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  const isMobileQuestDockVisibleToUser1 = obj4.useIsMobileQuestDockVisibleToUser(mobileQuestDock, tmp10);
  const memo1 = react.useMemo(() => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj2 = { bounty: mobileQuestDock.bounty };
      return sidebars(QuestDockBountyContent, obj2);
    } else if (AdCreativeType.AdCreativeType.PLAYABLE === type) {
      const obj3 = { playable: mobileQuestDock.playable };
      return sidebars(QuestDockPlayableContent, obj3);
    } else if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj = { quest: mobileQuestDock.quest };
      return sidebars(QuestDockQuestContent, obj);
    } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  if (mobileQuestDock.type === mobileQuestDock(isMobileQuestDockVisibleToUser[40]).AdCreativeType.NO_FILL) {
    let tmp16 = null;
    if (null != tmp7Result) {
      tmp16 = null;
      if (!tmp9) {
        const obj5 = { noFillDecision: tmp7Result, visible: isMobileQuestDockVisibleToUser1 };
        tmp16 = closure_23(tmp6(tmp[64]), obj5, tmp7Result.decisionId);
      }
    }
    tmp14 = tmp16;
  } else {
    obj6 = { value: memo, children: memo1 };
    tmp14 = closure_23(tmp6(tmp[42]).Provider, obj6);
  }
  return tmp14;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default memoResult;
export { QuestDockQuestContent };
