// Module ID: 16573
// Function ID: 16574
// Name: QuestDock
// Dependencies: [5, 32, 109, 19, 17, 1386, 16481, 6558, 16483, 1071, 1082, 21, 4913, 575, 1378, 16516, 16480, 16484, 16487, 5143, 1653, 10603, 16572, 9959, 1628, 16488, 5477, 16574, 5514, 16482, 5515, 5920, 16575, 1112, 16576, 16577, 16578, 5479, 9958, 6561, 16579, 6365, 6370, 6565, 8430, 504, 9950, 4974, 9977, 16580, 16477, 9972, 1255, 16581, 16582, 16592, 16593, 16596, 13760, 16601, 16606, 16607, 16609, 16610, 16611, 16613, 16614, 7373, 16616, 2]

// Module 16573 (QuestDock)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 1082 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import native from "native" /* 4974 */;
import springPresets from "springPresets" /* 5515 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6365 */;
import MetricEvents from "MetricEvents" /* 6370 */;
import QuestTypes from "QuestTypes" /* 6561 */;
import AdCreativeType from "AdCreativeType" /* 6565 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9958 */;
import QuestActionCreators from "QuestActionCreators" /* 9959 */;
import QuestRewardUtils from "QuestRewardUtils" /* 9977 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 13760 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 16484 */;
import QuestBarExpandRateV1Experiment from "QuestBarExpandRateV1Experiment" /* 16580 */;
import QuestDockBountyHeaderDefault from "QuestDockBountyHeader" /* 16606 */;
import QuestDockBountyBodyDefault from "QuestDockBountyBody" /* 16607 */;
import QuestDockBountyBackgroundDefault from "QuestDockBountyBackground" /* 16609 */;
import QuestDockPlayableHeaderDefault from "QuestDockPlayableHeader" /* 16610 */;
import QuestDockPlayableBodyDefault from "QuestDockPlayableBody" /* 16611 */;
import QuestDockPlayableBackgroundDefault from "QuestDockPlayableBackground" /* 16613 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1386 */;
import QuestDockStore from "QuestDockStore" /* 16481 */;
import QuestConstants from "QuestConstants" /* 6558 */;
import QuestDockConstants from "QuestDockConstants" /* 16483 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_12, expandedHeight;

let StyleSheet;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_24;
let closure_25;
let closure_26;
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
  let isVisibleToUser;
  let items23;
  let items24;
  let items25;
  let items26;
  let items27;
  let items28;
  let items29;
  let layoutVariant;
  let obj10;
  let obj12;
  let obj16;
  let obj21;
  let questDockExpandHandler;
  let questDockWrapperSpecs;
  let str3;
  let str4;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22Result;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp98;
  let windowDimensions;
  let withAndroidOffscreenAlphaCompositingWorkaround;
  ({ layoutVariant, withAndroidOffscreenAlphaCompositingWorkaround } = arg0);
  let isAndroidResult = undefined !== withAndroidOffscreenAlphaCompositingWorkaround;
  ({ backgroundColor, expandedHeight, collapsedContent, expandedContent, backgroundContent } = arg0);
  if (isAndroidResult) {
    isAndroidResult = withAndroidOffscreenAlphaCompositingWorkaround;
  }
  if (isAndroidResult) {
    let obj = questDockExpandHandler(isVisibleToUser[14]);
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
  let obj2 = questDockExpandHandler(isVisibleToUser[15]);
  const questDockCreative = obj2.useQuestDockCreative();
  let obj3 = questDockExpandHandler(isVisibleToUser[16]);
  questDockExpandHandler = obj3.useQuestDockExpandHandler(questDockCreative);
  const tmp9 = closure_27();
  const context = react.useContext(questDockExpandHandler(isVisibleToUser[17]).QuestDockGestureContext);
  ({ questDockWrapperSpecs, activeQuestDockMode, windowDimensions } = context);
  const context1 = react.useContext(questDockExpandHandler(isVisibleToUser[18]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const restingQuestDockMode = context1.restingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = react.useId();
  const callback = react.useCallback(() => {
    setRestingQuestDockMode(map1.COLLAPSED);
  }, items);
  const obj5 = questDockExpandHandler(isVisibleToUser[16]);
  const questDockModeAnimatedReaction = obj5.useQuestDockModeAnimatedReaction();
  obj6 = questDockExpandHandler(isVisibleToUser[16]);
  const questDockDismissalReset = obj6.useQuestDockDismissalReset();
  const obj7 = questDockExpandHandler(isVisibleToUser[19]);
  const isScreenReaderEnabled = obj7.useIsScreenReaderEnabled();
  const items1 = [closure_28, restingQuestDockMode, ];
  items1[2] = closure_13;
  let c0;
  let c1;
  [tmp18, tmp19, tmp20] = items1;
  const obj8 = questDockExpandHandler(isVisibleToUser[20]);
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
  const tmp23 = setRestingQuestDockMode(isVisibleToUser[21])(derivedValue);
  const items3 = [closure_29, activeQuestDockMode, tmp17];
  c0 = undefined;
  c1 = undefined;
  [tmp24, tmp25, tmp26] = items3;
  const tmp5Result = questDockExpandHandler(isVisibleToUser[20]);
  class QuestDockTsx2 {
    constructor() {
      return _undefined.get() === _undefined2.EXPANDED;
    }
  }
  const items4 = [tmp25, tmp26];
  QuestDockTsx2.__closure = items4;
  QuestDockTsx2.__workletHash = 1853966243711;
  QuestDockTsx2.__initData = tmp24;
  const derivedValue1 = tmp5Result.useDerivedValue(QuestDockTsx2);
  isVisibleToUser = tmp22(tmp6[21])(derivedValue1);
  const useContext = obj4.useContext;
  if (isVisibleToUser) {
    isVisibleToUser = useContext(tmp22(tmp6[22])).isVisibleToUser;
  }
  const items5 = [isVisibleToUser];
  const effect = obj4.useEffect(() => {
    if (isVisibleToUser) {
      let obj = QuestActionCreators;
      const result = obj.updateQuestDockExpandedOnScreen({ isExpandedOnScreen: true });
      return () => {
        const obj = questDockExpandHandler(isVisibleToUser[23]);
        return obj.updateQuestDockExpandedOnScreen({ isExpandedOnScreen: false });
      };
    }
  }, items5);
  const top = tmp22(tmp6[24])().top;
  const tmp5Result11 = questDockExpandHandler(isVisibleToUser[25]);
  const youBarTotalHeight = tmp5Result11.useYouBarTotalHeight();
  const tmp5Result12 = questDockExpandHandler(isVisibleToUser[26]);
  const token = tmp5Result12.useToken(tmp22(tmp6[13]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp31 = setRestingQuestDockMode(isVisibleToUser[27])(token);
  const items6 = [closure_30, backgroundColor, , , , , , ];
  const useAnimatedStyle = tmp5(tmp6[20]).useAnimatedStyle;
  questDockExpandHandler(isVisibleToUser[20]);
  items6[2] = questDockExpandHandler(isVisibleToUser[28]).withSpring;
  items6[3] = tmp31;
  items6[4] = closure_16;
  items6[5] = questDockWrapperSpecs;
  items6[6] = closure_15;
  items6[7] = questDockExpandHandler(isVisibleToUser[29]).roundToNearestPixel;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items6;
  const tmp33 = closure_16;
  class QuestDockTsx3 {
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
  const items7 = [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42];
  QuestDockTsx3.__closure = items7;
  QuestDockTsx3.__workletHash = 6773388487365;
  QuestDockTsx3.__initData = tmp35;
  const animatedStyle = useAnimatedStyle(QuestDockTsx3);
  const tmp5Result14 = questDockExpandHandler(isVisibleToUser[20]);
  const sharedValue = tmp5Result14.useSharedValue(0);
  const items8 = [closure_31, , , , ];
  const useAnimatedStyle2 = tmp5(tmp6[20]).useAnimatedStyle;
  questDockExpandHandler(isVisibleToUser[20]);
  items8[1] = questDockExpandHandler(isVisibleToUser[28]).withSpring;
  items8[2] = questDockExpandHandler(isVisibleToUser[20]).interpolate;
  items8[3] = sharedValue;
  items8[4] = questDockExpandHandler(isVisibleToUser[30]).springStandard;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp46, tmp47, tmp48, tmp49, tmp50] = items8;
  class QuestDockTsx4 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined(_undefined2(_undefined3.get(), [1, 0], [1, 1]), c3) }];
      ({ scale: _undefined(_undefined2(_undefined3.get(), [1, 0], [1, 1]), c3) });
      return obj;
    }
  }
  const items9 = [tmp47, tmp48, tmp49, tmp50];
  QuestDockTsx4.__closure = items9;
  QuestDockTsx4.__workletHash = 8862471858418;
  QuestDockTsx4.__initData = tmp46;
  const items10 = [setRestingQuestDockMode, questDockExpandHandler];
  const animatedStyle2 = useAnimatedStyle2(QuestDockTsx4);
  const items11 = [sharedValue];
  const callback1 = obj4.useCallback(() => {
    setRestingQuestDockMode(map1.EXPANDED);
    questDockExpandHandler();
  }, items10);
  const items12 = [sharedValue];
  const callback2 = obj4.useCallback(() => {
    const result = sharedValue.set(1);
  }, items11);
  const callback3 = obj4.useCallback(() => {
    const result = sharedValue.set(0);
  }, items12);
  const items13 = [closure_32, , , , , ];
  const useAnimatedStyle3 = tmp5(tmp6[20]).useAnimatedStyle;
  questDockExpandHandler(isVisibleToUser[20]);
  items13[1] = questDockExpandHandler(isVisibleToUser[28]).withSpring;
  items13[2] = activeQuestDockMode;
  items13[3] = closure_13;
  items13[4] = closure_15;
  items13[5] = windowDimensions;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp56, tmp57, tmp58, tmp59, tmp60, tmp61] = items13;
  class QuestDockTsx5 {
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
  const items14 = [tmp57, tmp58, tmp59, tmp60, tmp61];
  QuestDockTsx5.__closure = items14;
  QuestDockTsx5.__workletHash = 2620464071737;
  QuestDockTsx5.__initData = tmp56;
  const animatedStyle3 = useAnimatedStyle3(QuestDockTsx5);
  const items15 = [closure_33, activeQuestDockMode, tmp17];
  c0 = undefined;
  c1 = undefined;
  [tmp63, tmp64, tmp65] = items15;
  const tmp5Result17 = questDockExpandHandler(isVisibleToUser[20]);
  class QuestDockTsx6 {
    constructor() {
      let pointerEvents = "none";
      if (_undefined.get() === _undefined2.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  const items16 = [tmp64, tmp65];
  QuestDockTsx6.__closure = items16;
  QuestDockTsx6.__workletHash = 5976546068419;
  QuestDockTsx6.__initData = tmp63;
  const animatedProps = tmp5Result17.useAnimatedProps(QuestDockTsx6);
  const items17 = [closure_34, questDockWrapperSpecs, windowDimensions, top];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp67, tmp68, tmp69, tmp70] = items17;
  const tmp5Result18 = questDockExpandHandler(isVisibleToUser[20]);
  class QuestDockTsx7 {
    constructor() {
      const value = _undefined.get();
      return _undefined2.get().height - c2 - value.height;
    }
  }
  const items18 = [tmp68, tmp69, tmp70];
  QuestDockTsx7.__closure = items18;
  QuestDockTsx7.__workletHash = 15515676447867;
  QuestDockTsx7.__initData = tmp67;
  const derivedValue2 = tmp5Result18.useDerivedValue(QuestDockTsx7);
  const items19 = [closure_35, , , , ];
  const tmp72 = setRestingQuestDockMode(isVisibleToUser[21])(derivedValue2);
  const useAnimatedStyle4 = tmp5(tmp6[20]).useAnimatedStyle;
  questDockExpandHandler(isVisibleToUser[20]);
  items19[1] = questDockExpandHandler(isVisibleToUser[28]).withSpring;
  items19[2] = activeQuestDockMode;
  items19[3] = closure_13;
  items19[4] = closure_15;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp74, tmp75, tmp76, tmp77, tmp78] = items19;
  class QuestDockTsx8 {
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
  const items20 = [tmp75, tmp76, tmp77, tmp78];
  QuestDockTsx8.__closure = items20;
  QuestDockTsx8.__workletHash = 5546765379872;
  QuestDockTsx8.__initData = tmp74;
  const animatedStyle4 = useAnimatedStyle4(QuestDockTsx8);
  const items21 = [closure_36, "insetHeader" === layoutVariant, activeQuestDockMode, tmp17, closure_17, token, tmp31, , , , , ];
  const useAnimatedStyle5 = tmp5(tmp6[20]).useAnimatedStyle;
  questDockExpandHandler(isVisibleToUser[20]);
  items21[7] = questDockExpandHandler(isVisibleToUser[28]).withSpring;
  items21[8] = tmp33;
  items21[9] = closure_19;
  items21[10] = questDockWrapperSpecs;
  items21[11] = closure_18;
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
  [tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92] = items21;
  class QuestDockTsx9 {
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
  const items22 = [tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92];
  QuestDockTsx9.__closure = items22;
  QuestDockTsx9.__workletHash = 12919847392350;
  QuestDockTsx9.__initData = tmp81;
  const obj9 = { style: tmp9.wrapper, pointerEvents: "auto", children: closure_24(AccessibilityViewAnimated, obj10) };
  const animatedStyle5 = useAnimatedStyle5(QuestDockTsx9);
  obj10 = { nativeID: id, style: tmp9.accessibilityWrapper, accessibilityViewIsModal: tmp98, onAccessibilityEscape: callback, pointerEvents: "box-none", children: closure_24(tmp22Result, obj16) };
  tmp98 = isScreenReaderEnabled;
  AccessibilityViewAnimated = tmp5(tmp6[31]).AccessibilityViewAnimated;
  const tmp95 = closure_26;
  if (tmp98) {
    tmp98 = tmp23;
  }
  const obj11 = { style: animatedStyle2, children: closure_25(View2, obj12) };
  tmp22Result = setRestingQuestDockMode(isVisibleToUser[32]);
  const View = tmp22(tmp6[20]).View;
  obj12 = { style: items23, layout: questDockExpandHandler(isVisibleToUser[29]).dimensionsLayoutTransition, children: items24 };
  items23 = [tmp9.questDockWrapper, , ];
  const obj13 = { bottom: youBarTotalHeight - 1 };
  items23[1] = obj13;
  items23[2] = animatedStyle;
  View2 = tmp22(tmp6[20]).View;
  const obj14 = { style: tmp9.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: str3, accessibilityRole: "button", accessibilityLabel: intl.string(questDockExpandHandler(isVisibleToUser[33]).t.rjVPdM), accessibilityHint: str4 };
  str3 = "auto";
  const tmp100 = closure_9;
  if (tmp23) {
    str3 = "none";
  }
  intl = tmp5(tmp6[33]).intl;
  str4 = "";
  if (!tmp23) {
    const intl2 = tmp5(tmp6[33]).intl;
    str4 = intl2.string(tmp5(tmp6[33]).t.n0MlOB);
  }
  const obj15 = { children: items29 };
  obj16 = { children: closure_24(View, obj11) };
  items24 = [closure_24(tmp100, obj14), , , ];
  const obj17 = { style: items25, layout: questDockExpandHandler(isVisibleToUser[29]).dimensionsLayoutTransition, pointerEvents: "none" };
  items25 = [tmp9.questDockHeaderBorder, animatedStyle5];
  const View3 = tmp22(tmp6[20]).View;
  items24[1] = closure_24(View3, obj17);
  const obj18 = { style: items26, needsOffscreenAlphaCompositing: isAndroidResult, children: items28 };
  items26 = [tmp9.questDockContentWrapper, animatedStyle4];
  const obj19 = { style: tmp9.questDockContentWrapper, pointerEvents: "box-none", children: items27 };
  const View4 = tmp22(tmp6[20]).View;
  items27 = [closure_24(tmp22(tmp6[34]), { hideOnExpand: tmp4, children: collapsedContent }), closure_24(tmp22(tmp6[35]), { expandedHeightMode: str, expandedHeight, children: expandedContent })];
  items28 = [closure_25(closure_8, obj19), backgroundContent];
  items24[2] = closure_25(View4, obj18);
  items24[3] = closure_24(setRestingQuestDockMode(isVisibleToUser[36]), { isExpanded: tmp23, variant: str2 });
  items29 = [closure_24(closure_8, obj9), ];
  const obj20 = { style: animatedStyle3, animatedProps, children: closure_24(questDockExpandHandler(isVisibleToUser[37]).Backdrop, obj21) };
  const View5 = tmp22(tmp6[20]).View;
  obj21 = { onDismiss: callback, accessibleDismissStyle: { height: tmp72 } };
  items29[1] = closure_24(View5, obj20);
  return closure_25(tmp95, obj15);
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
  const context = react.useContext(adCreativeId(adCreativeType[22]));
  ({ isRendered, isVisibleToUser } = context);
  let obj2 = require("get initialized");
  let items = [closure_12];
  const mode = obj2.useStateFromStores(items, () => closure_12.prevRestingQuestDockMode);
  const tmp4 = _slicedToArray;
  closure_12 = _slicedToArray(react.useState(() => performance.now()), 1)[0];
  const ref = react.useRef(false);
  const tmp5 = closure_40();
  [tmp7, closure_14] = _slicedToArray(react.useState({ width: 0, height: 0 }), 2);
  const tmp6 = _slicedToArray(react.useState({ width: 0, height: 0 }), 2);
  let obj3 = require("QuestsEligibility");
  const isEligibleForQuests = obj3.getIsEligibleForQuests();
  const items1 = [closure_43, , , , ];
  const useAnimatedStyle = require("module_1653").useAnimatedStyle;
  const tmp9 = require("module_1653");
  items1[1] = require("spring/spring").withSpring;
  items1[2] = isRendered;
  items1[3] = obj6;
  items1[4] = tmp7;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items1;
  class QuestDockTsx10 {
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
  QuestDockTsx10.__closure = items2;
  QuestDockTsx10.__workletHash = 4347997312022;
  QuestDockTsx10.__initData = tmp10;
  const animatedStyle = useAnimatedStyle(QuestDockTsx10);
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
      const increment = adCreativeId(adCreativeType[41]).increment;
      adCreativeId(adCreativeType[41]);
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
      const obj = closure_1_0(adCreativeType[23]);
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
          constants2(size);
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
          items[1] = closure_24(QuestBarRenderedTriggerPointWrapper, {});
          const obj3 = { expandedHeight: _objectWithoutProperties, children: closure_24(ThemeContextProvider, obj4) };
          const QuestDockGestureContextProvider = QuestDockGestureContext.QuestDockGestureContextProvider;
          obj4 = { theme: _asyncToGenerator, children: closure_24(QuestDockWithGestureAnimation, obj5) };
          obj5 = { backgroundColor: _slicedToArray, layoutVariant, expandedHeight: _objectWithoutProperties, collapsedContent: react, expandedContent, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround: closure_10 };
          ThemeContextProvider = native.ThemeContextProvider;
          items[2] = closure_24(QuestDockGestureContextProvider, obj3);
          return closure_25(closure_26, obj);
        },
      overrideVisibility: isVisibleToUser
    };
    const View = tmp(tmp2[20]).View;
    tmp23 = closure_24(View, obj4);
  }
  return tmp23;
}
class QuestDockQuestContent {
  constructor(quest) {
    let currentUser;
    let tmp5;
    quest = quest.quest;
    const items = [UserStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    const obj2 = QuestRewardUtils;
    const questOrbRewardQuantityForUser = obj2.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores);
    if (null != questOrbRewardQuantityForUser) {
      const obj3 = { quest, orbCount: questOrbRewardQuantityForUser };
      tmp5 = closure_24(ExpandRateV1ExperimentEligibleQuestDockQuestContent, obj3, quest.id);
    } else {
      const obj4 = { quest };
      tmp5 = closure_24(QuestDockQuestContentWithAssets, obj4);
    }
    return tmp5;
  }
}
function ExpandRateV1ExperimentEligibleQuestDockQuestContent(arg0) {
  let orbCount;
  let quest;
  ({ quest, orbCount } = arg0);
  const obj = QuestBarExpandRateV1Experiment;
  const questBarExpandRateV1Config = obj.useQuestBarExpandRateV1Config(constants2.QUESTS_BAR_MOBILE);
  const obj2 = { quest, squareAsset: questBarExpandRateV1Config.squareAsset, rewardMessage: questBarExpandRateV1Config.rewardMessage, orbCount };
  return closure_24(QuestDockQuestContentWithAssets, obj2);
}
function QuestDockQuestContentWithAssets(quest) {
  let str3;
  let tmp10Result;
  let tmp10Result2;
  let tmp11;
  let tmp14;
  quest = quest.quest;
  let str = quest.squareAsset;
  if (str === undefined) {
    str = "default";
  }
  let str2 = quest.rewardMessage;
  if (str2 === undefined) {
    str2 = "generic";
  }
  const orbCount = quest.orbCount;
  let obj = quest(9958);
  const onImpression = obj.useQuestBarImpressionSurvey(quest);
  let obj2 = quest(16480);
  const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
  const obj3 = quest(16477);
  const staticUrl = obj3.useQuestDockHeroAsset(quest).staticUrl;
  const userStatus = quest.userStatus;
  let enrolledAt;
  const obj4 = quest(16477);
  const questGameLogotypeAssetUrl = obj4.useQuestGameLogotypeAssetUrl(quest);
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  let DARK;
  if (null == enrolledAt) {
    DARK = ThemeTypes.DARK;
  }
  let url = questGameLogotypeAssetUrl;
  if ("advertiser" === str) {
    const tmpResult = quest(9972);
    url = tmpResult.getQuestAsset(quest, tmp(9972).QuestAssetType.GAME_TILE, ThemeTypes.DARK).url;
  }
  const obj5 = { quest, children: closure_24(tmp11, obj6) };
  obj6 = {
    adCreativeId: quest.id,
    adCreativeType: quest(6565).AdCreativeType.QUEST,
    backgroundImageUrl: staticUrl,
    iconUrl: url,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { quest_id: quest.id, source: constants.QUESTS_BAR_MOBILE, asset_id };
      obj.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, obj2);
    },
    layoutVariant: str3,
    theme: DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight,
    collapsedContent: tmp10Result,
    expandedContent: closure_24(tmp14(null != enrolledAt ? 16592 : 16593), {}),
    backgroundContent: tmp10Result2,
    renderImpressionTracker(arg0) {
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { questOrQuests: quest, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, onImpression, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return closure_24(BillableAdPlacementImpressionTrackerNative, obj);
    },
    renderModeChangeTracker(mode) {
      const obj = { questId: quest.id, mode: mode.mode };
      return closure_24(QuestDockModeChangeTracker, obj);
    }
  };
  const QuestDockQuestProvider = tmp(16516).QuestDockQuestProvider;
  str3 = "insetHeader";
  tmp11 = QuestDockWithEntranceAnimation;
  if (null != enrolledAt) {
    str3 = "flush";
  }
  if (null != enrolledAt) {
    tmp10Result = tmp10(tmp12(16581), {});
    tmp14 = tmp12;
  } else {
    const obj7 = { squareAsset: str, rewardMessage: str2, orbCount };
    tmp10Result = tmp10(tmp12(16582), obj7);
    tmp14 = tmp12;
  }
  tmp10Result2 = null;
  if (null == enrolledAt) {
    tmp10Result2 = tmp10(tmp14(16596), {});
  }
  return closure_24(QuestDockQuestProvider, obj5);
}
function QuestDockBountyContent(bounty) {
  let obj5;
  bounty = bounty.bounty;
  let obj = bounty(16480);
  const bountyPreviewImageUrl = obj.useBountyPreviewImageUrl(bounty);
  let obj2 = bounty(16480);
  const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
  const obj3 = bounty(16601);
  const questDockBountySmokeCollapsedPlaceholderUrl = obj3.getQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = { bounty, children: closure_24(QuestDockWithEntranceAnimation, obj5) };
  obj5 = {
    adCreativeId: bounty.id,
    adCreativeType: bounty(6565).AdCreativeType.BOUNTY,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: bounty.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source: constants.QUESTS_BAR_MOBILE, ad_creative_id: bounty.id, ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY, asset_id };
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, obj2);
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_24(QuestDockBountyHeaderDefault, {}),
    expandedContent: closure_24(QuestDockBountyBodyDefault, {}),
    backgroundContent: closure_24(QuestDockBountyBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: true,
    renderImpressionTracker(arg0) {
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return closure_24(BillableAdPlacementImpressionTrackerNative, obj);
    },
    renderModeChangeTracker(mode) {
      const obj = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode };
      return closure_24(QuestDockModeChangeTracker, obj);
    }
  };
  const QuestDockBountyProvider = bounty(16516).QuestDockBountyProvider;
  return closure_24(QuestDockBountyProvider, obj4);
}
function QuestDockPlayableContent(playable) {
  let obj5;
  playable = playable.playable;
  let obj = playable(16480);
  const bountyPreviewImageUrl = obj.useBountyPreviewImageUrl(playable);
  let obj2 = playable(16480);
  const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
  const obj3 = playable(16601);
  const questDockBountySmokeCollapsedPlaceholderUrl = obj3.getQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = { playable, children: closure_24(QuestDockWithEntranceAnimation, obj5) };
  obj5 = {
    adCreativeId: playable.id,
    adCreativeType: playable(6565).AdCreativeType.PLAYABLE,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: playable.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source: constants.QUESTS_BAR_MOBILE, ad_creative_id: playable.id, ad_creative_type: AdCreativeType.AdCreativeType.PLAYABLE, asset_id };
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, obj2);
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_24(QuestDockPlayableHeaderDefault, {}),
    expandedContent: closure_24(QuestDockPlayableBodyDefault, {}),
    backgroundContent: closure_24(QuestDockPlayableBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: true,
    renderImpressionTracker(arg0) {
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { adContentId: playable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return closure_24(BillableAdPlacementImpressionTrackerNative, obj);
    },
    renderModeChangeTracker(mode) {
      const obj = { adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, adContentId: playable.id, mode: mode.mode };
      return closure_24(QuestDockModeChangeTracker, obj);
    }
  };
  const QuestDockPlayableProvider = playable(16516).QuestDockPlayableProvider;
  return closure_24(QuestDockPlayableProvider, obj4);
}
const styles = ["mode"];
({ View: metroImportAll, StyleSheet, Pressable: c9, Image: c10 } = react_native);
({ QuestDockMode: map1, QuestsExperimentLocations: closure_14 } = QuestConstants);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_16, QUEST_DOCK_CONTENT_BORDER_RADII: closure_17, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18, QUEST_DOCK_COLLAPSED_HEIGHT: closure_19, QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: closure_20, QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT: closure_21 } = QuestDockConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_24, jsxs: closure_25, Fragment: closure_26 } = Fragment);
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
let closure_27 = createStyles(obj);
let closure_28 = { code: "(function QuestDockTsx1(){let[restingQuestDockMode,QuestDockMode]=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;})" };
let closure_29 = { code: "(function QuestDockTsx2(){let[activeQuestDockMode,QuestDockMode]=this.__closure;return activeQuestDockMode.get()===QuestDockMode.EXPANDED;})" };
let closure_30 = { code: "(function QuestDockTsx3(){let[backgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel]=this.__closure;return{backgroundColor:backgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};})" };
let closure_31 = { code: "(function QuestDockTsx4(){let[withSpring,interpolate,isPressed,springStandard]=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};})" };
let closure_32 = { code: "(function QuestDockTsx5(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};})" };
let closure_33 = { code: "(function QuestDockTsx6(){let[activeQuestDockMode,QuestDockMode]=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};})" };
let closure_34 = { code: "(function QuestDockTsx7(){let[questDockWrapperSpecs,windowDimensions,safeAreaTop]=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;})" };
let closure_35 = { code: "(function QuestDockTsx8(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};})" };
let closure_36 = { code: "(function QuestDockTsx9(){let[hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED]=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};})" };
createStyles = createStyles_mod;
let closure_40 = createStyles.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj6 = { overshootClamping: true, damping: 54 };
const merged4 = Object.assign(springPresets.SUBTLE_SPRING);
const constants3 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
let closure_43 = { code: "(function QuestDockTsx10(){let[withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions]=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};})" };
const memoResult = react.memo(function QuestDockWithVisibilityContext() {
  let isMobileQuestDockVisibleToUser;
  let mobileQuestDock;
  let tmp14;
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  mobileQuestDock = obj.useMobileQuestDock();
  let obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  const isMobileQuestDockRenderedBase = obj2.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj3 = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  isMobileQuestDockVisibleToUser = obj3.useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const memo = react.useMemo(() => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }), items);
  const tmp7 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[66]);
  const tmp7Result = tmp7(mobileQuestDock(isMobileQuestDockVisibleToUser[39]).AdPlacement.MOBILE_HOME_DOCK_AREA, "QuestDockWithVisibilityContext");
  const tmp9 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[67])();
  const items1 = [mobileQuestDock];
  const tmp10 = !tmp9;
  const obj4 = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  const isMobileQuestDockVisibleToUser1 = obj4.useIsMobileQuestDockVisibleToUser(mobileQuestDock, tmp10);
  const memo1 = react.useMemo(() => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj2 = { bounty: mobileQuestDock.bounty };
      return closure_24(QuestDockBountyContent, obj2);
    } else if (AdCreativeType.AdCreativeType.PLAYABLE === type) {
      const obj3 = { playable: mobileQuestDock.playable };
      return closure_24(QuestDockPlayableContent, obj3);
    } else if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj = { quest: mobileQuestDock.quest };
      return closure_24(QuestDockQuestContent, obj);
    } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  if (mobileQuestDock.type === mobileQuestDock(isMobileQuestDockVisibleToUser[43]).AdCreativeType.NO_FILL) {
    let tmp16 = null;
    if (null != tmp7Result) {
      tmp16 = null;
      if (!tmp9) {
        const obj5 = { noFillDecision: tmp7Result, visible: isMobileQuestDockVisibleToUser1 };
        tmp16 = closure_24(tmp6(tmp[68]), obj5, tmp7Result.decisionId);
      }
    }
    tmp14 = tmp16;
  } else {
    obj6 = { value: memo, children: memo1 };
    tmp14 = closure_24(tmp6(tmp[22]).Provider, obj6);
  }
  return tmp14;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default memoResult;
export { QuestDockQuestContent };
