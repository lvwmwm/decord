// Module ID: 14596
// Function ID: 14597
// Name: QuestDockHooks
// Dependencies: [32, 19, 14597, 5751, 14599, 504, 14600, 14603, 10882, 14601, 14604, 4563, 8845, 14598, 1091, 10698, 14606, 7148, 7137, 7147, 7136, 5754, 5758, 7126, 4796, 14607, 1980, 1478, 10676, 7292, 4528, 576, 2]
// Exports: useActionSheetPressHandler, useBountyPreviewImageUrl, useIsQuestDockExpanded, useQuestDockAppThemedBackgroundColor, useQuestDockDismissalReset, useQuestDockExpandHandler, useQuestDockExternalOffset, useQuestDockModeAnimatedReaction

// Module 14596 (QuestDockHooks)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import useToken from "useToken" /* 4528 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import QuestTypes from "QuestTypes" /* 5754 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7136 */;
import captureAdUserAction from "captureAdUserAction" /* 7137 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7147 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7148 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 7292 */;
import AssetUtils from "AssetUtils" /* 10676 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 14606 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 14597 */;

const require = globalThis.__r;

require = fn;
const QuestConstants = fn(5751);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: metroRequire, QuestDockMode: closure_7 } = QuestConstants);
const QuestDockConstants = fn(14599);
({ QUEST_DOCK_CLOSED_HEIGHT: closure_8, QUEST_DOCK_COLLAPSED_HEIGHT: closure_9, QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: c10, QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: closure_11, QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: closure_12, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: map1 } = QuestDockConstants);
const __initData = { code: "function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}" };
const __initData2 = { code: "function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export const useIsQuestDockExpanded = function useIsQuestDockExpanded() {
  const items = [QuestDockStore];
  return initialize.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode === constants.EXPANDED);
};
export const useQuestDockModeAnimatedReaction = function useQuestDockModeAnimatedReaction() {
  const context = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[6]).QuestDockGestureContext);
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  activeQuestDockMode = context.activeQuestDockMode;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const context1 = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[7]).QuestDockExternalCoordinationContext);
  restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const tmp3 = windowDimensions(activeQuestDockMode[8])();
  closure_6 = tmp3;
  const youBarHorizontalMargin = questDockWrapperSpecs(activeQuestDockMode[9]).useYouBarHorizontalMargin();
  const obj = questDockWrapperSpecs(activeQuestDockMode[9]);
  const youBarTotalHeight = questDockWrapperSpecs(activeQuestDockMode[10]).useYouBarTotalHeight();
  let obj2 = questDockWrapperSpecs(activeQuestDockMode[10]);
  const fn = function o() {
    return { restingQuestDockMode: restingQuestDockMode.get(), minExpandedContentHeight: minExpandedContentHeight.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: closure_6.get() };
  };
  fn.__closure = { restingQuestDockMode, minExpandedContentHeight, windowDimensions, safeArea: tmp3 };
  fn.__workletHash = 9502251090521;
  fn.__initData = __initData;
  const fn2 = function t(safeAreaState, restingQuestDockMode) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, restingQuestDockMode)) {
      ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = safeAreaState);
      if (constants.RESET_TO_PREVIOUS === restingQuestDockMode) {
        let restingQuestDockMode1;
        const tmpResult = tmp(4563);
        if (restingQuestDockMode != null) {
          restingQuestDockMode1 = restingQuestDockMode.restingQuestDockMode;
        }
        if (restingQuestDockMode1 == null) {
          restingQuestDockMode1 = tmp5.COLLAPSED;
        }
        tmp(4563).runOnJS(setRestingQuestDockMode)(restingQuestDockMode1);
      } else if (tmp5.COLLAPSED === restingQuestDockMode) {
        const obj2 = {};
        const merged = Object.assign(questDockWrapperSpecs.get());
        obj2.x = 0;
        obj2.y = 0;
        obj2.width = tmp(14598).getQuestDockCollapsedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin);
        obj2.height = height;
        const result = questDockWrapperSpecs.set(obj2);
        const result1 = activeQuestDockMode.set(tmp5.COLLAPSED);
        const tmpResult6 = tmp(14598);
      } else {
        if (tmp5.CLOSED !== restingQuestDockMode) {
          if (tmp5.SOFT_DISMISSED !== restingQuestDockMode) {
            if (tmp5.EXPANDED === restingQuestDockMode) {
              const questDockExpandedHeightLimits = tmp(14598).getQuestDockExpandedHeightLimits(tmp4, safeArea.top, minExpandedContentHeight);
              const minHeight = questDockExpandedHeightLimits.minHeight;
              let tmp7 = questDockWrapperSpecs.get().height <= height;
              if (!tmp7) {
                let tmp6 = null != restingQuestDockMode;
                if (tmp6) {
                  tmp6 = obj11.get().height === tmp(14598).getQuestDockExpandedHeightLimits(restingQuestDockMode.windowHeight, restingQuestDockMode.safeArea.top, minExpandedContentHeight).maxHeight;
                  const tmpResult8 = tmp(14598);
                }
                tmp7 = tmp6;
              }
              if (!tmp7) {
                height = obj11.get().height;
              }
              const obj3 = {};
              const merged1 = Object.assign(obj11.get());
              obj3.x = 0;
              let tmp10 = youBarTotalHeight;
              if (youBarTotalHeight <= 0) {
                tmp10 = QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
              }
              obj3.y = tmp10;
              const tmpResult7 = tmp(14598);
              obj3.width = tmp(14598).getQuestDockExpandedWidth(windowWidth, safeArea.left, safeArea.right);
              obj3.height = questDockExpandedHeightLimits.maxHeight;
              const result2 = obj11.set(obj3);
              const result3 = activeQuestDockMode.set(tmp5.EXPANDED);
              const tmpResult9 = tmp(14598);
            }
          }
        }
        const obj4 = {};
        const merged2 = Object.assign(questDockWrapperSpecs.get());
        obj4.x = 0;
        obj4.y = 0;
        obj4.width = tmp(14598).getQuestDockClosedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin);
        obj4.height = height;
        const result4 = questDockWrapperSpecs.set(obj4);
        const result5 = activeQuestDockMode.set(restingQuestDockMode);
        const tmpResult10 = tmp(14598);
      }
    }
  };
  let obj3 = questDockWrapperSpecs(activeQuestDockMode[11]);
  fn2.__closure = { cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[12]).cheapWorkletShallowEqual, QuestDockMode: youBarHorizontalMargin, runOnJS: questDockWrapperSpecs(activeQuestDockMode[11]).runOnJS, setRestingQuestDockMode, questDockWrapperSpecs, getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockCollapsedWidth, youBarHorizontalMargin, QUEST_DOCK_COLLAPSED_HEIGHT, activeQuestDockMode, getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockClosedWidth, QUEST_DOCK_CLOSED_HEIGHT: youBarTotalHeight, getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockExpandedHeightLimits, youBarHeight: youBarTotalHeight, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED, getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockExpandedWidth };
  fn2.__workletHash = 2510234714195;
  fn2.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
};
export const useQuestDockExternalOffset = function useQuestDockExternalOffset() {
  let items = [QuestDockStore];
  const tmp = _slicedToArray(first(504).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ prevRestingQuestDockMode: arr[0], isEligibleToBeVisible: arr[1] } = QuestDockStore);
    return items;
  }), 2);
  first = tmp[0];
  closure_1 = tmp3;
  const items1 = [tmp[1], first];
  return noop.useMemo(() => {
    if (closure_1) {
      if (constants.COLLAPSED === first) {
        return closure_2_11;
      } else if (tmp2.EXPANDED === tmp) {
        return closure_2_12;
      } else {
        if (tmp2.CLOSED !== tmp) {
          if (tmp2.SOFT_DISMISSED !== tmp) {
            return 0;
          }
        }
        return closure_2_10;
      }
    } else {
      return 0;
    }
  }, items1);
};
export const useQuestDockDismissalReset = function useQuestDockDismissalReset() {
  setRestingQuestDockMode = noop.useContext(setRestingQuestDockMode(14603).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const activeQuestDockMode = noop.useContext(setRestingQuestDockMode(14600).QuestDockGestureContext).activeQuestDockMode;
  const items = [setRestingQuestDockMode, activeQuestDockMode];
  const effect = noop.useEffect(() => {
    let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
    if (!isSoftDismissedResult) {
      isSoftDismissedResult = setRestingQuestDockMode(14598).isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
      let obj = setRestingQuestDockMode(14598);
    }
    if (!isSoftDismissedResult) {
      setRestingQuestDockMode(constants.COLLAPSED);
    }
    function maybeResetSoftDismissal() {
      let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
      if (!isSoftDismissedResult) {
        isSoftDismissedResult = setRestingQuestDockMode(14598).isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
        const obj = setRestingQuestDockMode(14598);
      }
      if (!isSoftDismissedResult) {
        closure_0(constants.COLLAPSED);
      }
    }
    setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(1091).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, items);
};
export const useActionSheetPressHandler = function useActionSheetPressHandler(questCreative) {
  _require = questCreative;
  const questImpressionId = require("ContentImpressionTrackerHooks").useQuestImpressionId();
  const items = [questCreative, questImpressionId];
  return noop.useCallback(() => {
    const creativeAnalyticsParams = QuestDockCreativeContext.getCreativeAnalyticsParams(closure_0);
    const tmp2 = dependencyMap;
    const tmp3 = closure_0;
    if (obj2.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_action_sheet")) {
      const obj3 = { type: tmp(7147).AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(creativeAnalyticsParams);
      obj3.questContentCTA = tmp(7136).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj3.surfaceId = tmp(5754).QuestContent.QUEST_BAR_MOBILE;
      obj3.sourceQuestContent = tmp(5754).QuestContent.QUEST_BAR_MOBILE;
      obj3.impressionId = questImpressionId;
      tmp(7137).captureAdUserAction(obj3);
      let tmp7 = questImpressionId;
      const tmpResult = tmp(7137);
    } else if (creativeAnalyticsParams.adCreativeType === tmp(5758).AdCreativeType.QUEST) {
      const obj4 = { questId: creativeAnalyticsParams.adCreativeId, questContent: tmp(5754).QuestContent.QUEST_BAR_MOBILE, questContentCTA: tmp(7136).QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent: tmp(5754).QuestContent.QUEST_BAR_MOBILE, impressionId: questImpressionId };
      const result = tmp(7126).trackQuestContentClicked(obj4);
      tmp7 = questImpressionId;
      const tmpResult3 = tmp(7126);
    } else {
      const obj5 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null, impressionId: null };
      ({ adCreativeId: obj9.adContentId, adCreativeType: obj9.adCreativeType } = creativeAnalyticsParams);
      obj5.questContent = tmp(5754).QuestContent.QUEST_BAR_MOBILE;
      obj5.questContentCTA = tmp(7136).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj5.sourceQuestContent = tmp(5754).QuestContent.QUEST_BAR_MOBILE;
      tmp7 = questImpressionId;
      obj5.impressionId = questImpressionId;
      const result1 = tmp(7126).trackAdContentClicked(obj5);
      const tmpResult4 = tmp(7126);
    }
    obj2 = AdAnalyticsInterfaceExperiment;
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14607, tmp2.paths), "QuestDockContextMenuActionSheet", { creative: tmp3, impressionId: tmp7 });
  }, items);
};
export const useQuestDockExpandHandler = function useQuestDockExpandHandler(questDockCreative) {
  _require = questDockCreative;
  const getQuestImpressionId = require("ContentImpressionTrackerHooks").useGetQuestImpressionId();
  const items = [questDockCreative, getQuestImpressionId];
  return noop.useCallback(() => {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
    const obj = captureAdUserAction;
    const merged = Object.assign(QuestDockCreativeContext.getCreativeAnalyticsParams(closure_0));
    obj2.questContentCTA = AnalyticsTypes.QuestContentCTA.EXPAND;
    obj2.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
    obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
    obj2.impressionId = getQuestImpressionId();
    obj.captureAdUserAction(obj2);
  }, items);
};
export const useBountyPreviewImageUrl = function useBountyPreviewImageUrl(bounty) {
  const width = useWindowDimensionsDefault().width;
  const result = width / timestampProducer;
  if (null != bounty.imagePreview) {
    const size = { assetUrl: bounty.imagePreview, width, height: result };
    let scaledImageUrl = AssetUtils.getScaledImageUrl(size);
  } else {
    scaledImageUrl = null;
    if (null != bounty.videoPreview) {
      const size1 = { assetUrl: bounty.videoPreview, width, height: result };
      scaledImageUrl = AssetUtils.getScaledFirstFrameImageUrl(size1);
    }
  }
  return scaledImageUrl;
};
export const useQuestDockAppThemedBackgroundColor = function useQuestDockAppThemedBackgroundColor() {
  const gradientBottom = ClientThemesOverrides.useGradientBottom();
  let backgroundColor;
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = token;
  }
  return backgroundColor;
};
