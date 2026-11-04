// Module ID: 17392
// Function ID: 17393
// Name: QuestDockGestureDetector
// Dependencies: [19, 6916, 17307, 21, 17335, 17304, 17308, 11431, 17311, 17389, 1652, 17312, 17309, 5428, 17306, 1705, 5384, 2]

// Module 17392 (QuestDockGestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod1705 from "module_1705" /* 1705 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import QuestConstants from "QuestConstants" /* 6916 */;
import QuestDockUtils from "QuestDockUtils" /* 17306 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 17307 */;
import size from "module_2" /* 2 */;

let SOFT_DISMISSED, _Math, _Math2, _Math3, _Math4, _Math5, absolute, absoluteX, bound, bound1, diff, diff1, first, flag, flag2, left, left2, merged, merged1, merged2, merged3, merged4, num, num2, num3, num4, num5, num6, num7, num8, obj1, obj10, obj11, obj12, obj13, obj4, result1, result2, result3, result4, result5, result6, right, right2, set, set2, set2Result, set3, set3Result, set4, set4Result, set5, set5Result, set6, set6Result, sum, tmp14, tmp25, tmp3, tmp52, tmp62, tmp63, tmp64, tmp66, tmp67, tmp69, tmp70, tmp71, tmp73, tmp74, tmp75, tmp76, tmp78, tmp79, value, width, width2, width3;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function useQuestDockSwipeGesture() {
  let activeQuestDockMode;
  let questDockExpandHandler;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let windowDimensions;
  const tmp = questDockExpandHandler;
  let tmp2 = activeQuestDockMode;
  let obj = questDockExpandHandler(activeQuestDockMode[4]);
  const questDockCreative = obj.useQuestDockCreative();
  let obj2 = questDockExpandHandler(activeQuestDockMode[5]);
  questDockExpandHandler = obj2.useQuestDockExpandHandler(questDockCreative);
  const context = windowDimensions.useContext(questDockExpandHandler(activeQuestDockMode[6]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const tmp6 = questDockWrapperSpecs(activeQuestDockMode[7])();
  let closure_5 = tmp6;
  const context1 = windowDimensions.useContext(questDockExpandHandler(activeQuestDockMode[8]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const questDockOffset = context1.questDockOffset;
  const isVisibleToUser = windowDimensions.useContext(questDockWrapperSpecs(activeQuestDockMode[9])).isVisibleToUser;
  let obj3 = questDockExpandHandler(activeQuestDockMode[10]);
  let point = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED, active: false };
  let tmp8 = minExpandedContentHeight;
  const sharedValue = obj3.useSharedValue(point);
  let obj5 = questDockExpandHandler(activeQuestDockMode[10]);
  const sharedValue1 = obj5.useSharedValue(0);
  let obj6 = questDockExpandHandler(activeQuestDockMode[10]);
  const sharedValue2 = obj6.useSharedValue(isVisibleToUser);
  let obj7 = questDockExpandHandler(activeQuestDockMode[11]);
  const youBarTotalHeight = obj7.useYouBarTotalHeight();
  let obj8 = questDockExpandHandler(activeQuestDockMode[12]);
  const youBarHorizontalMargin = obj8.useYouBarHorizontalMargin();
  let items = [isVisibleToUser, sharedValue2];
  const effect = windowDimensions.useEffect(() => {
    const result = sharedValue2.set(isVisibleToUser);
  }, items);
  let items1 = [restingQuestDockMode, sharedValue, tmp6, sharedValue1, windowDimensions, questDockWrapperSpecs, setRestingQuestDockMode, activeQuestDockMode, minExpandedContentHeight, youBarTotalHeight, youBarHorizontalMargin, questDockOffset, questDockExpandHandler];
  const memo = windowDimensions.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp34;
    let tmp35;
    let tmp36;
    let tmp37;
    let tmp38;
    let tmp39;
    let tmp40;
    let tmp41;
    let tmp42;
    let tmp43;
    let tmp44;
    let tmp45;
    let tmp46;
    let tmp47;
    let tmp48;
    let tmp49;
    let tmp50;
    let tmp51;
    let tmp53;
    let tmp54;
    let tmp55;
    let tmp56;
    let tmp57;
    let tmp58;
    let tmp59;
    let tmp60;
    let tmp61;
    let tmp8;
    let tmp9;
    const tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = PanResult.manualActivation(false);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    let result = maxPointersResult.shouldCancelWhenOutside(false);
    const items = [set, sharedValue1, , , , ];
    let tmp4 = sharedValue;
    items[2] = sharedValue;
    let tmp5 = questDockWrapperSpecs;
    items[3] = questDockWrapperSpecs;
    items[4] = restingQuestDockMode;
    const tmp7 = QuestDockMode;
    items[5] = QuestDockMode;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
    class QuestDockGestureDetectorTsx1 {
      constructor(arg0) {
        result = closure_0.set(0);
        point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: closure_2.get().x, y: closure_2.get().y, height: closure_2.get().height, isDrawer: closure_3.get() === closure_4.EXPANDED, active: false };
        result1 = closure_1.set(point);
        return;
      }
    }
    const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13];
    QuestDockGestureDetectorTsx1.__closure = items1;
    QuestDockGestureDetectorTsx1.__workletHash = 4233460640567;
    QuestDockGestureDetectorTsx1.__initData = tmp8;
    const items2 = [closure_19, , , , , , , , , ];
    const onTouchesMove = result.onTouchesDown(QuestDockGestureDetectorTsx1).onTouchesMove;
    result.onTouchesDown(QuestDockGestureDetectorTsx1);
    items2[1] = LegacyBaseButton.State;
    items2[2] = tmp4;
    items2[3] = sharedValue1;
    items2[4] = map1;
    items2[5] = restingQuestDockMode;
    items2[6] = tmp7;
    items2[7] = metroImportAll;
    items2[8] = React4;
    items2[9] = tmp5;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    let c5;
    let c6;
    let c7;
    let c8;
    [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items2;
    class QuestDockGestureDetectorTsx2 {
      constructor(arg0) {
        if (arg0.state === closure_0.BEGAN) {
          obj3 = closure_1;
          if (!closure_1.get().active) {
            tmp = closure_2;
            num = 1;
            result = closure_2.set(closure_2.get() + 1);
            tmp3 = closure_3;
            first = arg0.changedTouches[0];
            absoluteY = first.absoluteY;
            tmp4 = closure_2.get() <= closure_3;
            absoluteX = first.absoluteX;
            diff = obj3.get().absoluteY - absoluteY;
            tmp7 = globalThis;
            _Math = Math;
            absolute = Math.abs(diff);
            obj = closure_4;
            tmp9 = closure_5;
            tmp10 = closure_4.get() === closure_5.EXPANDED && tmp4;
            if (tmp10) {
              num2 = 0;
              tmp10 = diff >= 0;
            }
            if (!tmp10) {
              tmp11 = obj.get() === tmp9.COLLAPSED;
              if (tmp11) {
                tmp12 = closure_6;
                tmp11 = diff > closure_6;
              }
              if (!tmp11) {
                tmp13 = obj.get() === tmp9.EXPANDED;
                if (tmp13) {
                  tmp14 = diff < -closure_6 || diff > closure_6;
                  tmp13 = tmp14;
                }
                tmp11 = tmp13;
              }
              if (!tmp11) {
                tmp15 = obj.get() === tmp9.COLLAPSED;
                if (tmp15) {
                  num3 = 0;
                  tmp15 = diff < 0;
                }
                if (tmp15) {
                  tmp16 = closure_7;
                  tmp15 = absolute > closure_7;
                }
                tmp11 = tmp15;
              }
              if (!tmp11) {
                tmp17 = obj.get() === tmp9.CLOSED;
                if (tmp17) {
                  num4 = 0;
                  tmp17 = diff > 0;
                }
                if (tmp17) {
                  tmp18 = closure_7;
                  tmp17 = diff > closure_7;
                }
                tmp11 = tmp17;
              }
              if (!tmp11) {
                tmp19 = obj.get() === tmp9.CLOSED;
                if (tmp19) {
                  num5 = 0;
                  tmp19 = diff < 0;
                }
                if (tmp19) {
                  tmp20 = closure_7;
                  tmp19 = absolute > closure_7;
                }
                tmp11 = tmp19;
              }
              if (tmp11) {
                point = { absoluteX: null, absoluteY: null, x: null, y: null, height: null, isDrawer: null, active: true };
                point.absoluteX = absoluteX;
                point.absoluteY = absoluteY;
                tmp21 = closure_8;
                set = obj3.set;
                point.x = closure_8.get().x;
                point.y = closure_8.get().y;
                point.height = closure_8.get().height;
                point.isDrawer = obj.get() === tmp9.EXPANDED;
                result1 = set(point);
              }
            }
          }
        }
        return;
      }
    }
    const items3 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
    QuestDockGestureDetectorTsx2.__closure = items3;
    QuestDockGestureDetectorTsx2.__workletHash = 3431492154013;
    QuestDockGestureDetectorTsx2.__initData = tmp15;
    const items4 = [closure_20, tmp4, minExpandedContentHeight, activeQuestDockMode, tmp7, authStore4, authStore, tmp5, youBarTotalHeight, , , , , , , , , , , , , , , , ];
    const onChange = onTouchesMove(QuestDockGestureDetectorTsx2).onChange;
    onTouchesMove(QuestDockGestureDetectorTsx2);
    items4[9] = QuestDockUtils.getQuestDockExpandedWidth;
    items4[10] = windowDimensions;
    items4[11] = hasOwnProperty;
    items4[12] = unpackModuleId;
    items4[13] = metroRequire;
    items4[14] = closure_15;
    items4[15] = QuestDockUtils.getQuestDockClosedWidth;
    items4[16] = youBarHorizontalMargin;
    items4[17] = hasOwnProperty;
    items4[18] = authStore3;
    items4[19] = questDockOffset;
    items4[20] = _mod1705.scheduleOnRN;
    items4[21] = HapticUtils.triggerHapticFeedback;
    items4[22] = HapticUtils.HapticFeedbackTypes;
    items4[23] = metroImportDefault;
    items4[24] = QuestDockUtils.getQuestDockCollapsedWidth;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    let c9;
    let c10;
    let c11;
    let c12;
    let c13;
    let c14;
    let c15;
    let c16;
    let c17;
    let c18;
    let c19;
    let c20;
    let c21;
    let c22;
    let c23;
    [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items4;
    const tmp26 = unpackModuleId;
    class QuestDockGestureDetectorTsx3 {
      constructor(arg0) {
        obj = closure_0;
        diff = arg0.absoluteY - closure_0.get().absoluteY;
        obj2 = closure_1;
        value = closure_1.get();
        diff1 = closure_0.get().height - diff;
        tmp4 = diff1 > value;
        if (tmp4) {
          tmp5 = closure_2;
          tmp6 = closure_3;
          tmp4 = closure_2.get() === closure_3.EXPANDED;
        }
        sum = diff1;
        if (tmp4) {
          tmp8 = closure_4;
          sum = value + (diff1 - value) * closure_4;
        }
        if (obj2.get() > 0) {
          tmp11 = globalThis;
          _Math = Math;
          tmp12 = closure_5;
          bound = Math.min(obj2.get(), closure_5);
          tmp9 = closure_5;
        } else {
          tmp9 = closure_5;
          bound = closure_5;
        }
        if (sum >= bound) {
          if (!obj.get().isDrawer) {
            obj1 = {};
            set3 = obj.set;
            tmp55 = obj1;
            merged = Object.assign(obj.get());
            flag2 = true;
            obj1.isDrawer = true;
            set3Result = set3(obj1);
          }
          obj10 = {};
          tmp58 = closure_6;
          set4 = closure_6.set;
          tmp59 = obj10;
          merged1 = Object.assign(closure_6.get());
          obj10.x = 0;
          num5 = 0;
          if (closure_7 > 0) {
            num5 = closure_7;
          }
          obj10.y = num5;
          tmp61 = closure_8;
          tmp62 = closure_9;
          tmp63 = closure_10;
          width3 = closure_9.get().width;
          obj10.width = closure_8(width3, closure_10.get().left, closure_10.get().right);
          tmp64 = globalThis;
          _Math4 = Math;
          obj10.height = Math.min(sum, closure_9.get().height);
          obj10.prevDeltaY = diff;
          set4Result = set4(obj10);
          tmp66 = closure_2;
          tmp67 = closure_3;
          result = closure_2.set(closure_3.EXPANDED);
        } else {
          tmp69 = closure_11;
          if (sum < closure_11) {
            obj6 = closure_2;
            if (closure_2.get() === closure_3.CLOSED) {
              tmp75 = globalThis;
              _Math5 = Math;
              num8 = 1;
              result1 = (1 - Math.min(sum, 0) / closure_12) * (closure_12 - sum);
              obj11 = {};
              tmp76 = closure_12;
              tmp78 = closure_6;
              set6 = closure_6.set;
              tmp79 = obj11;
              merged2 = Object.assign(closure_6.get());
              obj11.x = 0;
              num3 = 0;
              if (0 < result1) {
                tmp43 = closure_13;
                num3 = result1 * closure_13;
              }
              obj11.y = num3;
              tmp45 = closure_9;
              tmp44 = closure_14;
              width2 = closure_9.get().width;
              tmp46 = closure_10;
              left2 = closure_10.get().left;
              right2 = closure_10.get().right;
              tmp47 = closure_7;
              num4 = 0;
              if (closure_7 > 0) {
                num4 = closure_15;
              }
              tmp48 = width2;
              tmp49 = left2;
              tmp50 = right2;
              tmp51 = num4;
              obj11.width = tmp44(width2, left2, right2, num4);
              tmp52 = sum;
              if (0 < result1) {
                tmp52 = tmp76;
              }
              obj11.height = tmp52;
              obj11.prevDeltaY = diff;
              set6Result = set6(obj11);
              result2 = obj6.set(tmp42.CLOSED);
            }
          } else {
            tmp70 = closure_16;
            num6 = -1;
            tmp71 = closure_17;
            num7 = 1;
            result3 = -1 * (sum - closure_16) * (1 - sum / tmp9 / closure_17);
            tmp74 = closure_7;
            num = 0;
            tmp73 = closure_18;
            set5 = closure_18.set;
            if (closure_7 > 0) {
              tmp13 = globalThis;
              _Math2 = Math;
              num = -Math.min(result3, 0);
            }
            set5Result = set5(num);
            if (obj.get().isDrawer) {
              obj12 = {};
              set = obj.set;
              tmp15 = obj12;
              merged3 = Object.assign(obj.get());
              flag = false;
              obj12.isDrawer = false;
              result4 = set(obj12);
            }
            obj4 = closure_6;
            tmp18 = tmp70 !== closure_6.get().height;
            if (tmp18) {
              tmp19 = closure_2;
              tmp20 = closure_3;
              tmp18 = closure_2.get() !== closure_3.EXPANDED;
            }
            if (tmp18) {
              tmp21 = closure_19;
              tmp22 = closure_20;
              tmp23 = closure_21;
              tmp24 = closure_19(closure_20, closure_21.IMPACT_MEDIUM);
            }
            obj13 = {};
            set2 = obj4.set;
            tmp25 = obj13;
            merged4 = Object.assign(obj4.get());
            obj13.x = 0;
            tmp27 = closure_22;
            bound1 = result3;
            result5 = -1 * closure_22;
            if (tmp74 > 0) {
              tmp30 = globalThis;
              _Math3 = Math;
              bound1 = Math.min(result3, 0);
            }
            obj13.y = result5 + bound1;
            tmp32 = closure_9;
            tmp31 = closure_23;
            width = closure_9.get().width;
            tmp33 = closure_10;
            left = closure_10.get().left;
            right = closure_10.get().right;
            num2 = 0;
            if (tmp74 > 0) {
              num2 = closure_15;
            }
            tmp34 = width;
            tmp35 = left;
            tmp36 = right;
            tmp37 = num2;
            obj13.width = tmp31(width, left, right, num2);
            obj13.height = tmp70;
            obj13.prevDeltaY = diff;
            set2Result = set2(obj13);
            tmp39 = closure_2;
            tmp40 = closure_3;
            result6 = closure_2.set(closure_3.COLLAPSED);
          }
        }
        return;
      }
    }
    const items5 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
    QuestDockGestureDetectorTsx3.__closure = items5;
    QuestDockGestureDetectorTsx3.__workletHash = 16327529222102;
    QuestDockGestureDetectorTsx3.__initData = tmp27;
    const items6 = [constants, authStore2, tmp6, tmp7, tmp4, tmp26, , , ];
    const onEnd = onChange(QuestDockGestureDetectorTsx3).onEnd;
    onChange(QuestDockGestureDetectorTsx3);
    items6[6] = _mod1705.scheduleOnRN;
    items6[7] = questDockExpandHandler;
    items6[8] = setRestingQuestDockMode;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61] = items6;
    class QuestDockGestureDetectorTsx4 {
      constructor(arg0) {
        ({ velocityY, y } = arg0);
        absolute = Math.abs(velocityY);
        tmp3 = closure_0;
        if (absolute <= closure_0) {
          if (absolute < tmp3) {
            tmp4 = closure_3;
            tmp8 = obj2.get() === tmp5.CLOSED && SOFT_DISMISSED !== tmp5.EXPANDED;
            if (tmp8) {
              num3 = 0;
              tmp8 = y < 0;
            }
            if (tmp8) {
              tmp9 = closure_4;
              tmp8 = tmp2 > closure_4;
            }
            if (tmp8) {
              SOFT_DISMISSED = tmp5.COLLAPSED;
            }
            if (SOFT_DISMISSED === tmp5.EXPANDED) {
              tmp10 = closure_5;
              tmp11 = closure_6;
              tmp12 = closure_5(closure_6);
            }
            tmp13 = closure_5;
            tmp14 = closure_7;
            tmp15 = closure_5(closure_7, SOFT_DISMISSED);
            return;
          }
          obj = closure_1;
          tmp5 = closure_2;
          if (closure_1.get() !== closure_2.COLLAPSED) {
            if (velocityY <= tmp3) {
              num2 = 0;
              if (velocityY < 0) {
                if (absolute > tmp3) {
                }
              }
              if (obj.get() !== tmp5.COLLAPSED) {
                if (obj.get() !== tmp5.CLOSED) {
                  SOFT_DISMISSED = tmp5.COLLAPSED;
                }
              }
              SOFT_DISMISSED = tmp5.RESET_TO_PREVIOUS;
            }
            SOFT_DISMISSED = tmp5.COLLAPSED;
          } else {
            if (velocityY <= tmp3) {
              tmp16 = closure_4;
            }
            SOFT_DISMISSED = tmp5.SOFT_DISMISSED;
          }
          obj2 = obj;
        } else {
          num = 0;
        }
        tmp6 = closure_1;
        tmp7 = closure_2;
        SOFT_DISMISSED = closure_1.get() === closure_2.EXPANDED ? tmp7.RESET_TO_PREVIOUS : tmp7.EXPANDED;
        obj2 = tmp6;
        tmp5 = tmp7;
        return;
      }
    }
    const items7 = [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61];
    QuestDockGestureDetectorTsx4.__closure = items7;
    QuestDockGestureDetectorTsx4.__workletHash = 4967970078788;
    QuestDockGestureDetectorTsx4.__initData = tmp53;
    return onEnd(QuestDockGestureDetectorTsx4);
  }, items1);
  const tmp16 = questDockExpandHandler(activeQuestDockMode[10]);
  let items2 = [closure_22, activeQuestDockMode, sharedValue2];
  let c0;
  let c1;
  [tmp17, tmp18, tmp19] = items2;
  class QuestDockGestureDetectorTsx5 {
    constructor() {
      const obj = { mode: _undefined.get(), isVisible: _undefined2.get() };
      return obj;
    }
  }
  let items3 = [tmp18, tmp19];
  QuestDockGestureDetectorTsx5.__closure = items3;
  QuestDockGestureDetectorTsx5.__workletHash = 4342354480469;
  QuestDockGestureDetectorTsx5.__initData = tmp17;
  let items4 = [closure_23, tmp8, , , ];
  const useAnimatedReaction = tmp16.useAnimatedReaction;
  items4[2] = tmp(tmp2[15]).scheduleOnRN;
  items4[3] = tmp(tmp2[16]).triggerHapticFeedback;
  items4[4] = tmp(tmp2[16]).HapticFeedbackTypes;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  [tmp20, tmp21, tmp22, tmp23, tmp24] = items4;
  class QuestDockGestureDetectorTsx6 {
    constructor(mode, mode2) {
      let mode1;
      mode = mode.mode;
      if (mode2 != null) {
        mode1 = mode2.mode;
      }
      let isVisible = mode !== mode1 && mode.mode !== _undefined.CLOSED;
      if (isVisible) {
        mode2 = undefined;
        if (mode2 != null) {
          mode2 = mode2.mode;
        }
        isVisible = mode2 !== _undefined.CLOSED;
      }
      if (isVisible) {
        isVisible = mode.isVisible;
      }
      if (isVisible) {
        _undefined2(c2, _undefined3.IMPACT_MEDIUM);
      }
    }
  }
  let items5 = [tmp21, tmp22, tmp23, tmp24];
  QuestDockGestureDetectorTsx6.__closure = items5;
  QuestDockGestureDetectorTsx6.__workletHash = 6602612210534;
  QuestDockGestureDetectorTsx6.__initData = tmp20;
  const animatedReaction = useAnimatedReaction(QuestDockGestureDetectorTsx5, QuestDockGestureDetectorTsx6);
  return memo;
}
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_COLLAPSED_HEIGHT: hasOwnProperty, QUEST_DOCK_CLOSED_HEIGHT: metroRequire, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: metroImportDefault, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: metroImportAll, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: c9, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: c10, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: unpackModuleId, QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: closure_12, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: map1, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: closure_14, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16 } = QuestDockConstants);
const jsx = Fragment.jsx;
let closure_18 = { code: "(function QuestDockGestureDetectorTsx1(event){let[touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode]=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});})" };
let closure_19 = { code: "(function QuestDockGestureDetectorTsx2(event){let[State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs]=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}})" };
let closure_20 = { code: "(function QuestDockGestureDetectorTsx3(event){let[initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,youBarHeight,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,questDockOffset,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth]=this.__closure;const deltaY=event.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right,youBarHeight>0?youBarHorizontalMargin:0),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange=yOffset*(1-progress/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);questDockOffset.set(youBarHeight>0?-Math.min(newChange,0):0);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+(youBarHeight>0?Math.min(newChange,0):newChange),width:getQuestDockCollapsedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right,youBarHeight>0?youBarHorizontalMargin:0),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}})" };
let closure_21 = { code: "(function QuestDockGestureDetectorTsx4(event){let[QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,scheduleOnRN,onExpand,setRestingQuestDockMode]=this.__closure;const{velocityY:velocityY,y:y}=event;const absoluteVelocityY=Math.abs(velocityY);const absoluteY=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}if(resultingDockMode===QuestDockMode.EXPANDED){scheduleOnRN(onExpand);}scheduleOnRN(setRestingQuestDockMode,resultingDockMode);})" };
let closure_22 = { code: "(function QuestDockGestureDetectorTsx5(){let[activeQuestDockMode,isVisibleSharedValue]=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};})" };
let closure_23 = { code: "(function QuestDockGestureDetectorTsx6(current,previous){let[QuestDockMode,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);})" };
const memoResult = react.memo(function QuestDockGestureDetector(children) {
  return jsx(LegacyBaseButton.GestureDetector, { gesture: useQuestDockSwipeGesture(), children: children.children });
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureDetector.tsx");

export default memoResult;
export { useQuestDockSwipeGesture };
