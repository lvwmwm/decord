// Module ID: 17212
// Function ID: 17213
// Name: QuestDockHooks
// Dependencies: [32, 19, 17213, 6901, 17215, 504, 17216, 17219, 11381, 17217, 17220, 1652, 10219, 1705, 17214, 1089, 9849, 9816, 9819, 17222, 7995, 6904, 5381, 17223, 2123, 1493, 9827, 9952, 5719, 575, 2]
// Exports: useActionSheetPressHandler, useBountyPreviewImageUrl, useIsQuestDockExpanded, useQuestDockAppThemedBackgroundColor, useQuestDockDismissalReset, useQuestDockExpandHandler, useQuestDockExternalOffset, useQuestDockModeAnimatedReaction

// Module 17212 (QuestDockHooks)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import useToken from "useToken" /* 5719 */;
import QuestTypes from "QuestTypes" /* 6904 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7995 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9816 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9819 */;
import AssetUtils from "AssetUtils" /* 9827 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9952 */;
import useSafeAreaInsetsSharedValueDefault from "useSafeAreaInsetsSharedValue" /* 11381 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17216 */;
import useYouBarMargins from "useYouBarMargins" /* 17217 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 17219 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 17220 */;
import AdCreativeUtils from "AdCreativeUtils" /* 17222 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17213 */;
import QuestConstants from "QuestConstants" /* 6901 */;
import QuestDockConstants from "QuestDockConstants" /* 17215 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, maxHeight, merged1, merged2, minHeight, num, num2, num3, obj1, obj5, restingQuestDockMode1, result1, result2, result3, set, set2, set2Result, set3, set3Result, tmp30, tmp32, tmp34, tmp34Result, tmp35, tmp38, tmp39, tmp4, tmp40, tmp6, tmp7;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
let unpackModuleId;
const _mod1705 = tmp(1705);
const cheapWorkletShallowEqual = tmp(10219);
const QuestDockUtils = tmp(17214);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: metroRequire, QuestDockMode: metroImportDefault } = QuestConstants);
({ QUEST_DOCK_CLOSED_HEIGHT: metroImportAll, QUEST_DOCK_COLLAPSED_HEIGHT: c9, QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: c10, QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: unpackModuleId, QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: closure_12, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: map1 } = QuestDockConstants);
let closure_14 = { code: "(function QuestDockHooksTsx1(){let[restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea]=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};})" };
let closure_15 = { code: "(function QuestDockHooksTsx2(props,previous){let[cheapWorkletShallowEqual,QuestDockMode,scheduleOnRN,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth]=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:scheduleOnRN(setRestingQuestDockMode,(_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,safeArea.left,safeArea.right,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,safeArea.left,safeArea.right,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export function useIsQuestDockExpanded() {
  const items = [QuestDockStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode === constants.EXPANDED);
}
export function useQuestDockModeAnimatedReaction() {
  let activeQuestDockMode;
  let minExpandedContentHeight;
  let questDockWrapperSpecs;
  let restingQuestDockMode;
  let setRestingQuestDockMode;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
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
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp9;
  let windowDimensions;
  let tmp = require;
  let tmp2 = dependencyMap;
  const context = react.useContext(QuestDockGestureContext.QuestDockGestureContext);
  ({ questDockWrapperSpecs, windowDimensions, activeQuestDockMode, minExpandedContentHeight } = context);
  const context1 = react.useContext(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContext);
  ({ restingQuestDockMode, setRestingQuestDockMode } = context1);
  let tmp5 = useSafeAreaInsetsSharedValueDefault();
  let obj = useYouBarMargins;
  const youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  let obj2 = useYouBarTotalHeight;
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  const items = [closure_14, restingQuestDockMode, minExpandedContentHeight, windowDimensions, tmp5];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items;
  const tmp8 = _mod1652;
  class QuestDockHooksTsx1 {
    constructor() {
      obj = { restingQuestDockMode: closure_0.get(), minExpandedContentHeight: closure_1.get(), windowWidth: closure_2.get().width, windowHeight: closure_2.get().height, safeArea: closure_3.get() };
      return obj;
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13];
  QuestDockHooksTsx1.__closure = items1;
  QuestDockHooksTsx1.__workletHash = 13936751394400;
  QuestDockHooksTsx1.__initData = tmp9;
  const items2 = [closure_15, , , , , , , , , , , , , , , ];
  const useAnimatedReaction = tmp8.useAnimatedReaction;
  items2[1] = cheapWorkletShallowEqual.cheapWorkletShallowEqual;
  items2[2] = metroImportDefault;
  items2[3] = _mod1705.scheduleOnRN;
  items2[4] = setRestingQuestDockMode;
  items2[5] = questDockWrapperSpecs;
  items2[6] = QuestDockUtils.getQuestDockCollapsedWidth;
  items2[7] = youBarHorizontalMargin;
  items2[8] = React4;
  items2[9] = activeQuestDockMode;
  items2[10] = QuestDockUtils.getQuestDockClosedWidth;
  items2[11] = metroImportAll;
  items2[12] = QuestDockUtils.getQuestDockExpandedHeightLimits;
  items2[13] = youBarTotalHeight;
  items2[14] = map1;
  items2[15] = QuestDockUtils.getQuestDockExpandedWidth;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items2;
  class QuestDockHooksTsx2 {
    constructor(arg0, arg1) {
      tmp2 = arg1;
      tmp = closure_0;
      if (!tmp(arg0, tmp2)) {
        ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = arg0);
        tmp4 = closure_1;
        if (closure_1.RESET_TO_PREVIOUS === restingQuestDockMode) {
          restingQuestDockMode1 = undefined;
          tmp34 = closure_2;
          tmp35 = closure_3;
          if (arg1 != null) {
            restingQuestDockMode1 = arg1.restingQuestDockMode;
          }
          if (restingQuestDockMode1 == null) {
            restingQuestDockMode1 = tmp4.COLLAPSED;
          }
          tmp34Result = tmp34(tmp35, restingQuestDockMode1);
          return;
        } else if (tmp4.COLLAPSED === restingQuestDockMode) {
          tmp24 = closure_4;
          obj1 = {};
          set3 = closure_4.set;
          tmp25 = obj1;
          merged = Object.assign(closure_4.get());
          num3 = 0;
          obj1.x = 0;
          obj1.y = 0;
          tmp27 = closure_5;
          tmp28 = closure_6;
          tmp29 = windowWidth;
          obj1.width = closure_5(windowWidth, safeArea.left, safeArea.right, closure_6);
          tmp30 = closure_7;
          obj1.height = closure_7;
          set3Result = set3(obj1);
          tmp32 = closure_8;
          result = closure_8.set(tmp4.COLLAPSED);
        } else {
          if (tmp4.CLOSED !== restingQuestDockMode) {
            if (tmp4.SOFT_DISMISSED !== restingQuestDockMode) {
              if (tmp4.EXPANDED === restingQuestDockMode) {
                tmp38 = closure_11;
                tmp39 = closure_11(tmp3, safeArea.top, minExpandedContentHeight);
                minHeight = tmp39.minHeight;
                obj4 = closure_4;
                maxHeight = tmp39.maxHeight;
                tmp40 = closure_7;
                tmp6 = closure_4.get().height <= closure_7;
                if (!tmp6) {
                  tmp5 = null != arg1;
                  if (tmp5) {
                    tmp5 = obj4.get().height === tmp38(arg1.windowHeight, arg1.safeArea.top, minExpandedContentHeight).maxHeight;
                  }
                  tmp6 = tmp5;
                }
                if (!tmp6) {
                  height = obj4.get().height;
                }
                obj = {};
                set = obj4.set;
                tmp7 = obj;
                merged1 = Object.assign(obj4.get());
                num = 0;
                obj.x = 0;
                tmp9 = closure_12;
                if (closure_12 <= 0) {
                  tmp9 = closure_13;
                }
                obj.y = tmp9;
                tmp10 = closure_14;
                obj.width = closure_14(windowWidth, safeArea.left, safeArea.right);
                obj.height = maxHeight;
                result1 = set(obj);
                tmp12 = closure_8;
                result2 = closure_8.set(tmp4.EXPANDED);
              }
            }
          }
          tmp14 = closure_4;
          obj5 = {};
          set2 = closure_4.set;
          tmp15 = obj5;
          merged2 = Object.assign(closure_4.get());
          num2 = 0;
          obj5.x = 0;
          obj5.y = 0;
          tmp17 = closure_9;
          tmp18 = closure_6;
          tmp19 = windowWidth;
          obj5.width = closure_9(windowWidth, safeArea.left, safeArea.right, closure_6);
          tmp20 = closure_10;
          obj5.height = closure_10;
          set2Result = set2(obj5);
          tmp22 = closure_8;
          result3 = closure_8.set(restingQuestDockMode);
        }
      }
      return;
    }
  }
  const items3 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  QuestDockHooksTsx2.__closure = items3;
  QuestDockHooksTsx2.__workletHash = 15593308101479;
  QuestDockHooksTsx2.__initData = tmp14;
  const animatedReaction = useAnimatedReaction(QuestDockHooksTsx1, QuestDockHooksTsx2);
}
export function useQuestDockExternalOffset() {
  let first;
  let tmp3;
  let items = [QuestDockStore];
  const obj = first(504);
  [first, tmp3] = obj.useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ prevRestingQuestDockMode: arr[0], isEligibleToBeVisible: arr[1] } = QuestDockStore);
    return items;
  });
  let closure_1 = tmp3;
  const items1 = [tmp3, first];
  return react.useMemo(() => {
    const tmp = closure_1;
    if (tmp) {
      if (metroImportDefault.COLLAPSED === first) {
        return unpackModuleId;
      } else if (metroImportDefault.EXPANDED === first) {
        return authStore2;
      } else {
        if (metroImportDefault.CLOSED !== first) {
          if (metroImportDefault.SOFT_DISMISSED !== first) {
            return 0;
          }
        }
        return c10;
      }
    } else {
      return 0;
    }
  }, items1);
}
export function useQuestDockDismissalReset() {
  let setRestingQuestDockMode;
  setRestingQuestDockMode = react.useContext(setRestingQuestDockMode(17219).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const activeQuestDockMode = react.useContext(setRestingQuestDockMode(17216).QuestDockGestureContext).activeQuestDockMode;
  const items = [setRestingQuestDockMode, activeQuestDockMode];
  const effect = react.useEffect(() => {
    let closure_0;
    let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
    let tmp = constants;
    if (!isSoftDismissedResult) {
      let obj = setRestingQuestDockMode(dependencyMap[14]);
      isSoftDismissedResult = obj.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
    }
    if (!isSoftDismissedResult) {
      setRestingQuestDockMode(tmp.COLLAPSED);
    }
    function maybeResetSoftDismissal() {
      let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
      const tmp = constants;
      if (!isSoftDismissedResult) {
        const obj = setRestingQuestDockMode(dependencyMap[14]);
        isSoftDismissedResult = obj.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
      }
      if (!isSoftDismissedResult) {
        closure_0(tmp.COLLAPSED);
      }
    }
    setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(dependencyMap[15]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, items);
}
export function useActionSheetPressHandler(questCreative) {
  let creative;
  _require = questCreative;
  let obj = require("ContentImpressionTrackerHooks");
  const questImpressionId = obj.useQuestImpressionId();
  const items = [questCreative, questImpressionId];
  return react.useCallback(() => {
    const tmp = captureAdUserAction2;
    const captureAdUserAction = tmp.captureAdUserAction;
    const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: questImpressionId };
    const obj2 = AdCreativeUtils;
    const merged = Object.assign(obj2.getCreativeAnalyticsParams(creative));
    captureAdUserAction(obj);
    const obj3 = ActionSheetActionCreatorsDefault;
    const obj4 = { creative, impressionId: questImpressionId };
    obj3.openLazy(asyncRequire(17223, dependencyMap.paths), "QuestDockContextMenuActionSheet", obj4);
  }, items);
}
export function useQuestDockExpandHandler(questDockCreative) {
  _require = questDockCreative;
  let obj = require("ContentImpressionTrackerHooks");
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [questDockCreative, getQuestImpressionId];
  return react.useCallback(() => {
    const tmp = captureAdUserAction2;
    const captureAdUserAction = tmp.captureAdUserAction;
    const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, questContentCTA: AnalyticsTypes.QuestContentCTA.EXPAND, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    const obj2 = AdCreativeUtils;
    const merged = Object.assign(obj2.getCreativeAnalyticsParams(questDockCreative));
    captureAdUserAction(obj);
  }, items);
}
export function useBountyPreviewImageUrl(bounty) {
  let scaledImageUrl;
  const width = useWindowDimensionsDefault().width;
  const result = width / metroRequire;
  if (null != bounty.imagePreview) {
    size = { assetUrl: bounty.imagePreview, width, height: result };
    const obj3 = AssetUtils;
    scaledImageUrl = obj3.getScaledImageUrl(size);
  } else {
    scaledImageUrl = null;
    if (null != bounty.videoPreview) {
      const size1 = { assetUrl: bounty.videoPreview, width, height: result };
      const obj = AssetUtils;
      scaledImageUrl = obj.getScaledFirstFrameImageUrl(size1);
    }
  }
  return scaledImageUrl;
}
export function useQuestDockAppThemedBackgroundColor() {
  const obj = ClientThemesOverrides;
  const gradientBottom = obj.useGradientBottom();
  let backgroundColor;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = token;
  }
  return backgroundColor;
}
