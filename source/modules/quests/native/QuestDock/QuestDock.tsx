// Module ID: 13963
// Function ID: 106105
// Name: QuestDockWithGestureAnimation
// Dependencies: []

// Module 13963 (QuestDockWithGestureAnimation)
let StyleSheet;
function QuestDockWithGestureAnimation(appThemedBackgroundColor) {
  appThemedBackgroundColor = appThemedBackgroundColor.appThemedBackgroundColor;
  const arg1 = appThemedBackgroundColor;
  const tmp = callback4();
  const context = importAllResult.useContext(arg1(dependencyMap[13]).QuestDockGestureContext);
  const importDefault = questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  const dependencyMap = activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  let closure_3 = windowDimensions;
  const context1 = importAllResult.useContext(arg1(dependencyMap[14]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  let closure_4 = restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const items = [setRestingQuestDockMode];
  const id = importAllResult.useId();
  const callback = importAllResult.useCallback(() => {
    setRestingQuestDockMode(sharedValue.COLLAPSED);
  }, items);
  let obj = arg1(dependencyMap[15]);
  const questDockModeAnimatedReaction = obj.useQuestDockModeAnimatedReaction();
  let obj1 = arg1(dependencyMap[15]);
  const questDockDismissalReset = obj1.useQuestDockDismissalReset();
  let obj2 = arg1(dependencyMap[16]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = arg1(dependencyMap[17]);
  class K {
    constructor() {
      return restingQuestDockMode.get() === closure_10.EXPANDED;
    }
  }
  obj = { restingQuestDockMode, QuestDockMode: sharedValue };
  K.__closure = obj;
  K.__workletHash = 2415817673061;
  K.__initData = closure_23;
  const derivedValue = obj3.useDerivedValue(K);
  const tmp10 = importDefault(dependencyMap[18])(derivedValue);
  const top = importDefault(dependencyMap[19])().top;
  let obj5 = arg1(dependencyMap[20]);
  const userStatus = importAllResult.useContext(importDefault(dependencyMap[12])).quest.userStatus;
  let enrolledAt;
  const youBarTotalHeight = obj5.useYouBarTotalHeight();
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  const tmp13 = null != enrolledAt;
  let obj6 = arg1(dependencyMap[21]);
  const token = obj6.useToken(importDefault(dependencyMap[11]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp15 = importDefault(dependencyMap[22])(token);
  let closure_9 = tmp15;
  let obj7 = arg1(dependencyMap[17]);
  const fn = function q() {
    let obj = { backgroundColor: appThemedBackgroundColor, borderBottomRightRadius: appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(tmp15.get(), closure_13) };
    const obj2 = appThemedBackgroundColor(activeQuestDockMode[23]);
    obj.borderBottomLeftRadius = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(tmp15.get(), closure_13);
    obj.height = questDockWrapperSpecs.get().height;
    obj.width = questDockWrapperSpecs.get().width;
    const obj3 = appThemedBackgroundColor(activeQuestDockMode[23]);
    obj.opacity = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(1, closure_12);
    obj = {};
    const obj4 = appThemedBackgroundColor(activeQuestDockMode[23]);
    const obj6 = appThemedBackgroundColor(activeQuestDockMode[23]);
    obj.translateX = obj6.withSpring(questDockWrapperSpecs.get().x + -1 * appThemedBackgroundColor(activeQuestDockMode[24]).roundToNearestPixel(questDockWrapperSpecs.get().width / 2), closure_12);
    const items = [obj, ];
    obj = {};
    const obj7 = appThemedBackgroundColor(activeQuestDockMode[24]);
    obj.translateY = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(questDockWrapperSpecs.get().y, closure_12);
    items[1] = obj;
    obj.transform = items;
    return obj;
  };
  obj = { appThemedBackgroundColor, withSpring: arg1(dependencyMap[23]).withSpring, bottomBorderRadius: tmp15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_13, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12, roundToNearestPixel: arg1(dependencyMap[24]).roundToNearestPixel };
  fn.__closure = obj;
  fn.__workletHash = 4228984550973;
  fn.__initData = closure_24;
  const animatedStyle = obj7.useAnimatedStyle(fn);
  let obj9 = arg1(dependencyMap[17]);
  const sharedValue = obj9.useSharedValue(0);
  let obj10 = arg1(dependencyMap[17]);
  class W {
    constructor() {
      obj = {};
      obj = {};
      obj3 = appThemedBackgroundColor(activeQuestDockMode[23]);
      obj4 = appThemedBackgroundColor(activeQuestDockMode[17]);
      interpolateResult = obj4.interpolate(closure_10.get(), [true, true], []);
      obj.scale = obj3.withSpring(interpolateResult, appThemedBackgroundColor(activeQuestDockMode[25]).springStandard);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj1 = { withSpring: arg1(dependencyMap[23]).withSpring, interpolate: arg1(dependencyMap[17]).interpolate, isPressed: sharedValue, springStandard: arg1(dependencyMap[25]).springStandard };
  W.__closure = obj1;
  W.__workletHash = 3373473585356;
  W.__initData = closure_25;
  const items1 = [setRestingQuestDockMode];
  const animatedStyle1 = obj10.useAnimatedStyle(W);
  const items2 = [sharedValue];
  const callback1 = importAllResult.useCallback(() => {
    setRestingQuestDockMode(sharedValue.EXPANDED);
  }, items1);
  const items3 = [sharedValue];
  const callback2 = importAllResult.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const callback3 = importAllResult.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  let obj12 = arg1(dependencyMap[17]);
  class X {
    constructor() {
      obj = {};
      obj2 = appThemedBackgroundColor(activeQuestDockMode[23]);
      num = 0;
      if (activeQuestDockMode.get() === closure_10.EXPANDED) {
        num = 1;
      }
      obj.opacity = obj2.withSpring(num, closure_12);
      obj.height = windowDimensions.get().height;
      return obj;
    }
  }
  obj2 = { withSpring: arg1(dependencyMap[23]).withSpring, activeQuestDockMode, QuestDockMode: sharedValue, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12, windowDimensions };
  X.__closure = obj2;
  X.__workletHash = 6178969276321;
  X.__initData = closure_26;
  const animatedStyle2 = obj12.useAnimatedStyle(X);
  let obj14 = arg1(dependencyMap[17]);
  class Y {
    constructor() {
      obj = {};
      str = "none";
      if (activeQuestDockMode.get() === closure_10.EXPANDED) {
        str = "auto";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  obj3 = { activeQuestDockMode, QuestDockMode: sharedValue };
  Y.__closure = obj3;
  Y.__workletHash = 5416180055289;
  Y.__initData = closure_27;
  const animatedProps = obj14.useAnimatedProps(Y);
  let obj16 = arg1(dependencyMap[17]);
  class F {
    constructor() {
      value = questDockWrapperSpecs.get();
      return windowDimensions.get().height - top - value.height;
    }
  }
  F.__closure = { questDockWrapperSpecs: context.questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  F.__workletHash = 8073454569923;
  F.__initData = closure_28;
  const derivedValue1 = obj16.useDerivedValue(F);
  let obj17 = arg1(dependencyMap[17]);
  class V {
    constructor() {
      obj = {};
      obj2 = appThemedBackgroundColor(activeQuestDockMode[23]);
      if (activeQuestDockMode.get() === closure_10.CLOSED) {
        num = 0;
      } else {
        tmp = activeQuestDockMode;
        tmp2 = closure_10;
        num = 1;
      }
      obj.opacity = obj2.withSpring(num, closure_12);
      return obj;
    }
  }
  const tmp25 = importDefault(dependencyMap[18])(derivedValue1);
  V.__closure = { withSpring: arg1(dependencyMap[23]).withSpring, activeQuestDockMode, QuestDockMode: sharedValue, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12 };
  V.__workletHash = 6468803634518;
  V.__initData = closure_29;
  const animatedStyle3 = obj17.useAnimatedStyle(V);
  const obj4 = { withSpring: arg1(dependencyMap[23]).withSpring, activeQuestDockMode, QuestDockMode: sharedValue, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12 };
  const fn2 = function j() {
    let obj = {};
    if (!tmp13) {
      if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
        let tmp3 = closure_14;
      }
      obj.borderTopLeftRadius = tmp3;
      if (!tmp13) {
        if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
          let tmp7 = closure_14;
        }
        obj.borderTopRightRadius = tmp7;
        if (!tmp13) {
          if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
            let value = closure_14;
          }
          obj.borderBottomLeftRadius = value;
          if (!tmp13) {
            if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
              value = closure_14;
            }
            obj.borderBottomRightRadius = value;
            let num3 = 1;
            if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
              num3 = 0;
            }
            obj.opacity = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(num3, closure_13);
            if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
              if (tmp13) {
                let height = questDockWrapperSpecs.get().height;
              } else {
                height = closure_16;
              }
            } else {
              obj.height = questDockWrapperSpecs.get().height;
              if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
                if (!tmp13) {
                  let width = questDockWrapperSpecs.get().width - 2 * closure_15;
                }
                obj.width = width;
                obj = {};
                let num6 = 0;
                if (!tmp13) {
                  let num7 = 0;
                  if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
                    num7 = closure_15;
                  }
                  num6 = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(num7, closure_13);
                  const obj4 = appThemedBackgroundColor(activeQuestDockMode[23]);
                }
                obj.translateX = num6;
                const items = [obj, ];
                obj = {};
                let num8 = 0;
                if (!tmp13) {
                  let num9 = 0;
                  if (activeQuestDockMode.get() === sharedValue.EXPANDED) {
                    num9 = closure_15;
                  }
                  num8 = appThemedBackgroundColor(activeQuestDockMode[23]).withSpring(num9, closure_13);
                  const obj6 = appThemedBackgroundColor(activeQuestDockMode[23]);
                }
                obj.translateY = num8;
                items[1] = obj;
                obj.transform = items;
                let num10 = 0;
                if (tmp15.get() > 0) {
                  num10 = 1;
                }
                obj.borderBottomWidth = num10;
                return obj;
              }
              width = questDockWrapperSpecs.get().width;
            }
            const obj2 = appThemedBackgroundColor(activeQuestDockMode[23]);
          }
          value = tmp15.get();
        }
        value = tmp15.get();
      }
      tmp7 = token;
    }
    tmp3 = token;
  };
  obj5 = { isEnrolled: tmp13, activeQuestDockMode, QuestDockMode: sharedValue, QUEST_DOCK_CONTENT_BORDER_RADII: closure_14, questDockBorderRadius: token, bottomBorderRadius: tmp15, withSpring: arg1(dependencyMap[23]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_13, questDockWrapperSpecs, QUEST_DOCK_COLLAPSED_HEIGHT: closure_16, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_15 };
  fn2.__closure = obj5;
  fn2.__workletHash = 12859739915134;
  fn2.__initData = closure_30;
  obj6 = {};
  obj7 = { style: tmp.wrapper, pointerEvents: "auto" };
  let str = "auto";
  const animatedStyle4 = arg1(dependencyMap[17]).useAnimatedStyle(fn2);
  const obj8 = { nativeID: id, style: tmp.accessibilityWrapper };
  let tmp34 = !tmp33;
  if (!!isScreenReaderEnabled) {
    tmp34 = tmp10;
  }
  obj8.accessibilityViewIsModal = tmp34;
  obj8.onAccessibilityEscape = callback;
  obj8.pointerEvents = "box-none";
  obj9 = {};
  const obj20 = arg1(dependencyMap[17]);
  const tmp28 = callback3;
  const tmp29 = closure_21;
  const tmp30 = callback2;
  const tmp31 = top;
  const tmp32 = callback2;
  const tmp35 = callback2;
  obj10 = { style: animatedStyle1 };
  const tmp36 = importDefault(dependencyMap[27]);
  const tmp37 = callback2;
  const obj11 = { style: items4 };
  const items4 = [tmp.questDockWrapper, , ];
  obj12 = { bottom: youBarTotalHeight - 1 };
  items4[1] = obj12;
  items4[2] = animatedStyle;
  const tmp38 = importDefault(dependencyMap[28]);
  const tmp39 = callback3;
  obj11.layout = arg1(dependencyMap[24]).dimensionsLayoutTransition;
  const obj13 = { style: tmp.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1 };
  if (tmp10) {
    str = "none";
  }
  obj13.pointerEvents = str;
  obj13.accessibilityRole = "button";
  const intl = arg1(dependencyMap[29]).intl;
  obj13.accessibilityLabel = intl.string(arg1(dependencyMap[29]).t.rjVPdM);
  let str2 = "";
  if (!tmp10) {
    const intl2 = arg1(dependencyMap[29]).intl;
    str2 = intl2.string(arg1(dependencyMap[29]).t.n0MlOB);
  }
  obj13.accessibilityHint = str2;
  const items5 = [callback2(tmp13, obj13), , , ];
  obj14 = { style: items6 };
  const items6 = [tmp.questDockHeaderBorder, animatedStyle4];
  const tmp40 = importDefault(dependencyMap[28]);
  const tmp41 = callback2;
  const tmp42 = tmp13;
  obj14.layout = arg1(dependencyMap[24]).dimensionsLayoutTransition;
  obj14.pointerEvents = "none";
  items5[1] = callback2(importDefault(dependencyMap[28]), obj14);
  const obj15 = { style: items7 };
  const items7 = [tmp.questDockContentWrapper, animatedStyle3];
  obj16 = { style: tmp.questDockContentWrapper };
  const tmp45 = importDefault(dependencyMap[28]);
  const tmp46 = callback3;
  const items8 = [callback2(importDefault(dependencyMap[30]), { hideOnExpand: tmp13 }), callback2(importDefault(dependencyMap[31]), {})];
  obj16.children = items8;
  const items9 = [callback3(top, obj16), ];
  let tmp48 = !tmp13;
  if (!tmp13) {
    tmp48 = callback2(importDefault(dependencyMap[32]), {});
  }
  items9[1] = tmp48;
  obj15.children = items9;
  items5[2] = tmp46(importDefault(dependencyMap[28]), obj15);
  items5[3] = callback2(importDefault(dependencyMap[33]), { isExpanded: tmp10 });
  obj11.children = items5;
  obj10.children = tmp39(tmp40, obj11);
  obj9.children = tmp37(tmp38, obj10);
  obj8.children = tmp35(tmp36, obj9);
  obj7.children = tmp32(arg1(dependencyMap[26]).AccessibilityViewAnimated, obj8);
  const items10 = [tmp30(tmp31, obj7), ];
  obj17 = { style: animatedStyle2, animatedProps };
  const tmp47 = importDefault(dependencyMap[28]);
  obj17.children = callback2(arg1(dependencyMap[34]).Backdrop, { onDismiss: callback, accessibleDismissStyle: { height: tmp25 } });
  items10[1] = callback2(importDefault(dependencyMap[28]), obj17);
  obj6.children = items10;
  return tmp28(tmp29, obj6);
}
function QuestDockModeChangeTracker(arg0) {
  let mode;
  let questId;
  ({ mode, questId } = arg0);
  let obj = arg1(dependencyMap[35]);
  obj = { mode, questContent: arg1(dependencyMap[36]).QuestContent.QUEST_BAR_MOBILE, questId, sourceQuestContent: arg1(dependencyMap[36]).QuestContent.QUEST_BAR_MOBILE };
  const questBarOrDockModeChangeTracking = obj.useQuestBarOrDockModeChangeTracking(obj);
  return null;
}
function QuestBarRenderedTriggerPointWrapper() {
  const effect = importAllResult.useEffect(() => {
    const QuestBarRenderedTriggerPoint = callback(closure_2[37]).QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
}
class QuestDockWithEntranceAnimation {
  constructor() {
    context = closure_5.useContext(importDefault(f106123[12]));
    isRendered = context.isRendered;
    arg1 = isRendered;
    quest = context.quest;
    importDefault = quest;
    f106123 = closure_4(closure_5.useState(() => performance.now()), 1)[0];
    closure_3 = closure_5.useRef(false);
    tmp2 = f106141();
    tmp3 = closure_4(closure_5.useState({ "Null": "%FunctionPrototype%", "Null": "paddingStart" }), 2);
    first = tmp3[0];
    closure_4 = first;
    closure_5 = tmp3[1];
    obj = arg1(f106123[38]);
    items = [];
    items[0] = Image;
    f106124 = obj.useStateFromStores(items, () => staticUrl.prevRestingQuestDockMode);
    obj2 = arg1(f106123[39]);
    isEligibleForQuests = obj2.getIsEligibleForQuests();
    obj3 = arg1(f106123[35]);
    questBarImpressionSurvey = obj3.useQuestBarImpressionSurvey(quest);
    obj4 = arg1(f106123[17]);
    fn = function c() {
      let obj = {};
      let num = 0;
      if (isRendered) {
        num = 1;
      }
      obj.opacity = isRendered(closure_2[23]).withSpring(num, closure_32, "animate-always");
      obj = {};
      const obj2 = isRendered(closure_2[23]);
      let num2 = 0;
      if (!isRendered) {
        num2 = first.height;
      }
      obj.translateY = isRendered(closure_2[23]).withSpring(num2, closure_32);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj = { withSpring: arg1(f106123[23]).withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: f106141, componentDimensions: first };
    fn.__closure = obj;
    fn.__workletHash = 15545726338295;
    fn.__initData = f106141;
    animatedStyle = obj4.useAnimatedStyle(fn);
    tmp8 = closure_4(closure_5.useState(null), 2);
    first1 = tmp8[0];
    closure_7 = first1;
    Image = tmp8[1];
    obj6 = arg1(f106123[40]);
    staticUrl = obj6.useQuestDockHeroAsset(quest).staticUrl;
    Image = staticUrl;
    obj7 = arg1(f106123[40]);
    questGameLogotypeAssetUrl = obj7.useQuestGameLogotypeAssetUrl(quest);
    closure_10 = questGameLogotypeAssetUrl;
    userStatus = quest.userStatus;
    enrolledAt = undefined;
    if (null != userStatus) {
      enrolledAt = userStatus.enrolledAt;
    }
    QuestsExperimentLocations = null != enrolledAt;
    obj8 = arg1(f106123[41]);
    gradientBottom = obj8.useGradientBottom();
    obj9 = arg1(f106123[21]);
    token = obj9.useToken(importDefault(f106123[11]).colors.BACKGROUND_SURFACE_HIGH);
    backgroundColor = undefined;
    if (null != gradientBottom) {
      backgroundColor = gradientBottom.backgroundColor;
    }
    if (null != backgroundColor) {
      token = backgroundColor;
    }
    QuestDockMode = token;
    items1 = [, , ];
    items1[0] = staticUrl;
    items1[1] = questGameLogotypeAssetUrl;
    items1[2] = quest.id;
    effect = closure_5.useEffect(() => {
      function prefetchWithErrorReporting(arg0) {
        return _prefetchWithErrorReporting(...arguments);
      }
      function _prefetchWithErrorReporting() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = callback(tmp);
        const _prefetchWithErrorReporting = obj;
        return obj(...arguments);
      }
      function _preloadQuestDockAssets() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = callback(tmp);
        const _preloadQuestDockAssets = obj;
        return obj(...arguments);
      }
      !function preloadQuestDockAssets() {
        return _preloadQuestDockAssets(...arguments);
      }();
    }, items1);
    items2 = [, ];
    items2[0] = first1;
    items2[1] = quest.id;
    effect1 = closure_5.useEffect(() => {
      if (false === first1) {
        let obj = quest(closure_2[43]);
        obj = { name: isRendered(closure_2[44]).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE };
        const _HermesInternal = HermesInternal;
        const items = ["quest_id:" + quest.id, , ];
        const _HermesInternal2 = HermesInternal;
        items[1] = "quest_content:" + isRendered(closure_2[45]).getQuestContentName(isRendered(closure_2[36]).QuestContent.QUEST_BAR_MOBILE);
        items[2] = "reason:asset_loading_error";
        obj.tags = items;
        obj.increment(obj);
        const obj3 = isRendered(closure_2[45]);
      }
    }, items2);
    tmp17 = null == quest || !isEligibleForQuests || !first1;
    f106136 = tmp17;
    items3 = [];
    items3[0] = tmp17;
    effect2 = closure_5.useEffect(() => {
      let obj = isRendered(closure_2[46]);
      obj = { isEligibleToBeVisible: !tmp17 };
      const result = obj.updateQuestDockVisibilityEligibility(obj);
      return () => {
        const result = callback(closure_2[46]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
      };
    }, items3);
    tmp19 = null;
    if (!tmp17) {
      tmp20 = jsx;
      tmp21 = importDefault;
      tmp22 = f106123;
      obj1 = {};
      str = "box-none";
      obj1.pointerEvents = "box-none";
      items4 = [, ];
      items4[0] = tmp2.wrapperAnimated;
      items4[1] = animatedStyle;
      obj1.style = items4;
      obj1.onLayout = function onLayout(height) {
        let obj = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
        callback(obj);
        if (!ref.current) {
          ref.current = true;
          const _Math = Math;
          if (Math.random() < 0.1) {
            const _Math2 = Math;
            const _performance = performance;
            const rounded = Math.round(performance.now() - closure_2);
            obj = { name: isRendered(closure_2[44]).MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT };
            const _HermesInternal = HermesInternal;
            const items = ["quest_id:" + quest.id];
            obj.tags = items;
            quest(closure_2[43]).distribution(obj, rounded);
            const obj2 = quest(closure_2[43]);
          }
        }
      };
      tmp23 = jsx;
      tmp24 = arg1;
      num = 47;
      obj2 = {};
      obj2.overrideVisibility = context.isVisibleToUser;
      num2 = 36;
      obj2.questContent = arg1(f106123[36]).QuestContent.QUEST_BAR_MOBILE;
      obj2.questOrQuests = quest;
      obj2.onImpression = questBarImpressionSurvey;
      obj2.sourceQuestContent = arg1(f106123[36]).QuestContent.QUEST_BAR_MOBILE;
      obj2.children = function children() {
        let obj = {};
        obj = { questId: quest.id, mode: closure_6 };
        const items = [callback2(closure_35, obj), callback2(closure_36, {}), ];
        obj = {};
        const obj1 = {};
        let DARK;
        if (!closure_11) {
          DARK = constants.DARK;
        }
        obj1.theme = DARK;
        obj1.children = callback2(closure_34, { appThemedBackgroundColor: token });
        obj.children = callback2(isRendered(closure_2[48]).ThemeContextProvider, obj1);
        items[2] = callback2(isRendered(closure_2[13]).QuestDockGestureContextProvider, obj);
        obj.children = items;
        return closure_20(closure_21, obj);
      };
      obj1.children = jsx(arg1(f106123[47]).QuestContentImpressionTrackerNative, obj2);
      tmp19 = jsx(importDefault(f106123[17]).View, obj1);
    }
    return tmp19;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_6, StyleSheet, Pressable: closure_7, Image: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ QuestDockMode: closure_10, QuestsExperimentLocations: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_12, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_13, QUEST_DOCK_CONTENT_BORDER_RADII: closure_14, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_15, QUEST_DOCK_COLLAPSED_HEIGHT: closure_16 } = arg1(dependencyMap[6]));
const AnalyticEvents = arg1(dependencyMap[7]).AnalyticEvents;
const ThemeTypes = arg1(dependencyMap[8]).ThemeTypes;
const tmp4 = arg1(dependencyMap[6]);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = arg1(dependencyMap[9]));
let obj1 = arg1(dependencyMap[10]);
let obj = { wrapper: {} };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["zIndex"] = 1;
obj.accessibilityWrapper = obj;
obj1 = { -1689029725: -1761607108, -1734095635: 1107296545, 1454073334: 83172, 1705048924: 68780, 1449286715: 37992770, 1441227066: 21111040, -1715272316: 1077690880, -112397312: -930086911, -1352424500: null, borderRadius: importDefault(dependencyMap[11]).modules.mobile.QUEST_DOCK_BORDER_RADIUS };
obj.questDockWrapper = obj1;
const obj2 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2["justifyContent"] = "flex-end";
obj2["zIndex"] = 4;
obj.questDockContentWrapper = obj2;
const obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3["bottom"] = undefined;
obj3["right"] = undefined;
obj3["borderWidth"] = 1;
obj3["borderColor"] = importDefault(dependencyMap[11]).colors.BORDER_MUTED;
obj3["zIndex"] = 5;
obj.questDockHeaderBorder = obj3;
const obj4 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj4["zIndex"] = 6;
obj.nestedPressable = obj4;
let closure_22 = obj1.createStyles(obj);
let closure_23 = { code: "function QuestDockTsx1(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}" };
let closure_24 = { code: "function QuestDockTsx2(){const{appThemedBackgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:appThemedBackgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
let closure_25 = { code: "function QuestDockTsx3(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}" };
let closure_26 = { code: "function QuestDockTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}" };
let closure_27 = { code: "function QuestDockTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
let closure_28 = { code: "function QuestDockTsx6(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}" };
let closure_29 = { code: "function QuestDockTsx7(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_30 = { code: "function QuestDockTsx8(){const{isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?isEnrolled?questDockWrapperSpecs.get().height:QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&!isEnrolled?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:isEnrolled?0:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:isEnrolled?0:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}" };
const tmp5 = arg1(dependencyMap[9]);
let closure_31 = arg1(dependencyMap[10]).createStyles(() => ({ wrapperAnimated: {} }));
const obj5 = {};
const merged4 = Object.assign(arg1(dependencyMap[25]).SUBTLE_SPRING);
obj5["overshootClamping"] = true;
obj5["damping"] = 54;
let closure_33 = { code: "function QuestDockTsx9(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
const obj9 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo(function QuestDockWithQuestContext() {
  let obj = arg1(dependencyMap[40]);
  const mobileQuestDock = obj.useMobileQuestDock();
  const isMobileQuestDockRenderedBase = arg1(dependencyMap[40]).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  arg1(dependencyMap[40]);
  let tmp5 = null;
  if (null != mobileQuestDock) {
    obj = {};
    obj = { isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: tmp4, quest: mobileQuestDock };
    obj.value = obj;
    obj.children = callback2(QuestDockWithEntranceAnimation, {});
    tmp5 = callback2(importDefault(dependencyMap[12]).Provider, obj);
  }
  return tmp5;
});
const result = arg1(dependencyMap[49]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default memoResult;
export { QuestDockWithEntranceAnimation };
