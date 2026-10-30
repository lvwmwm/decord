// Module ID: 16998
// Function ID: 16999
// Name: QuestDockHooks
// Dependencies: [32, 19, 16999, 6775, 17001, 504, 17002, 17005, 11220, 17003, 17006, 5090, 10069, 17000, 1090, 9697, 9664, 9667, 17008, 7864, 6778, 5253, 17009, 1995, 1492, 9675, 9800, 5591, 575, 2]
// Exports: useActionSheetPressHandler, useBountyPreviewImageUrl, useIsQuestDockExpanded, useQuestDockAppThemedBackgroundColor, useQuestDockDismissalReset, useQuestDockExpandHandler, useQuestDockExternalOffset, useQuestDockModeAnimatedReaction

// Module 16998 (QuestDockHooks)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import useToken from "useToken" /* 5591 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9664 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9667 */;
import AssetUtils from "AssetUtils" /* 9675 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9800 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 10069 */;
import QuestDockUtils from "QuestDockUtils" /* 17000 */;
import AdCreativeUtils from "AdCreativeUtils" /* 17008 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16999 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import QuestDockConstants from "QuestDockConstants" /* 17001 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set, set2, set3;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ DEFAULT_PORTRAIT_ASPECT_RATIO: metroRequire, QuestDockMode: metroImportDefault } = QuestConstants);
({ QUEST_DOCK_CLOSED_HEIGHT: metroImportAll, QUEST_DOCK_COLLAPSED_HEIGHT: c9, QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: c10, QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: unpackModuleId, QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: closure_12, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: map1 } = QuestDockConstants);
const __initData = { code: "function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}" };
const __initData2 = { code: "function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,safeArea.left,safeArea.right,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,safeArea.left,safeArea.right,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export function useIsQuestDockExpanded() {
  const items = [QuestDockStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode === constants.EXPANDED);
}
export function useQuestDockModeAnimatedReaction() {
  let activeQuestDockMode;
  let questDockWrapperSpecs;
  let restingQuestDockMode;
  const context = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[6]).QuestDockGestureContext);
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  activeQuestDockMode = context.activeQuestDockMode;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const context1 = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[7]).QuestDockExternalCoordinationContext);
  restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const tmp3 = windowDimensions(activeQuestDockMode[8])();
  let closure_6 = tmp3;
  let obj = questDockWrapperSpecs(activeQuestDockMode[9]);
  const youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  let obj2 = questDockWrapperSpecs(activeQuestDockMode[10]);
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  let obj3 = questDockWrapperSpecs(activeQuestDockMode[11]);
  const fn = function o() {
    const obj = { restingQuestDockMode: restingQuestDockMode.get(), minExpandedContentHeight: minExpandedContentHeight.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: closure_6.get() };
    return obj;
  };
  fn.__closure = { restingQuestDockMode, minExpandedContentHeight, windowDimensions, safeArea: tmp3 };
  fn.__workletHash = 9502251090521;
  fn.__initData = __initData;
  const fn2 = function t(safeAreaState, restingQuestDockMode) {
    let safeArea;
    let tmp11;
    let tmpResult10;
    let tmpResult6;
    let tmpResult9;
    let windowWidth;
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = restingQuestDockMode;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
      ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = safeAreaState);
      if (metroImportDefault.RESET_TO_PREVIOUS === restingQuestDockMode) {
        let restingQuestDockMode1;
        const tmpResult = ReanimatedRexport;
        const runOnJSResult = tmpResult.runOnJS(setRestingQuestDockMode);
        if (restingQuestDockMode != null) {
          restingQuestDockMode1 = restingQuestDockMode.restingQuestDockMode;
        }
        if (restingQuestDockMode1 == null) {
          restingQuestDockMode1 = tmp6.COLLAPSED;
        }
        runOnJSResult(restingQuestDockMode1);
      } else if (metroImportDefault.COLLAPSED === restingQuestDockMode) {
        const obj = { x: 0, y: 0, width: tmpResult6.getQuestDockCollapsedWidth(windowWidth, safeArea.left, safeArea.right, youBarHorizontalMargin), height: metroImportAll };
        set3 = questDockWrapperSpecs.set;
        const merged = Object.assign(questDockWrapperSpecs.get());
        tmpResult6 = QuestDockUtils;
        set3(obj);
        const result = activeQuestDockMode.set(tmp6.COLLAPSED);
      } else {
        if (metroImportDefault.CLOSED !== restingQuestDockMode) {
          if (metroImportDefault.SOFT_DISMISSED !== restingQuestDockMode) {
            if (metroImportDefault.EXPANDED === restingQuestDockMode) {
              const tmpResult7 = QuestDockUtils;
              const questDockExpandedHeightLimits = tmpResult7.getQuestDockExpandedHeightLimits(tmp5, safeArea.top, minExpandedContentHeight);
              const minHeight = questDockExpandedHeightLimits.minHeight;
              const maxHeight = questDockExpandedHeightLimits.maxHeight;
              let tmp8 = questDockWrapperSpecs.get().height <= metroImportAll;
              if (!tmp8) {
                let tmp7 = null != restingQuestDockMode;
                if (tmp7) {
                  metroImportAll = obj10.get().height;
                  const tmpResult8 = QuestDockUtils;
                  tmp7 = metroImportAll === tmpResult8.getQuestDockExpandedHeightLimits(restingQuestDockMode.windowHeight, restingQuestDockMode.safeArea.top, minExpandedContentHeight).maxHeight;
                }
                tmp8 = tmp7;
              }
              if (!tmp8) {
                const height2 = obj10.get().height;
              }
              const obj2 = { x: 0, y: tmp11, width: tmpResult9.getQuestDockExpandedWidth(windowWidth, safeArea.left, safeArea.right), height: maxHeight };
              set = questDockWrapperSpecs.set;
              const merged1 = Object.assign(obj10.get());
              tmp11 = youBarTotalHeight;
              if (youBarTotalHeight <= 0) {
                tmp11 = map1;
              }
              tmpResult9 = QuestDockUtils;
              const result1 = set(obj2);
              const result2 = activeQuestDockMode.set(tmp6.EXPANDED);
            }
          }
        }
        const obj3 = { x: 0, y: 0, width: tmpResult10.getQuestDockClosedWidth(windowWidth, safeArea.left, safeArea.right, youBarHorizontalMargin), height: metroImportAll };
        set2 = questDockWrapperSpecs.set;
        const merged2 = Object.assign(questDockWrapperSpecs.get());
        tmpResult10 = QuestDockUtils;
        set2(obj3);
        const result3 = activeQuestDockMode.set(restingQuestDockMode);
      }
    }
  };
  fn2.__closure = { cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[12]).cheapWorkletShallowEqual, QuestDockMode: youBarHorizontalMargin, runOnJS: questDockWrapperSpecs(activeQuestDockMode[11]).runOnJS, setRestingQuestDockMode, questDockWrapperSpecs, getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockCollapsedWidth, youBarHorizontalMargin, QUEST_DOCK_COLLAPSED_HEIGHT, activeQuestDockMode, getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockClosedWidth, QUEST_DOCK_CLOSED_HEIGHT: youBarTotalHeight, getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockExpandedHeightLimits, youBarHeight: youBarTotalHeight, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED, getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockExpandedWidth };
  fn2.__workletHash = 10131870722291;
  fn2.__initData = __initData2;
  ({ cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[12]).cheapWorkletShallowEqual, QuestDockMode: youBarHorizontalMargin, runOnJS: questDockWrapperSpecs(activeQuestDockMode[11]).runOnJS, setRestingQuestDockMode, questDockWrapperSpecs, getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockCollapsedWidth, youBarHorizontalMargin, QUEST_DOCK_COLLAPSED_HEIGHT, activeQuestDockMode, getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockClosedWidth, QUEST_DOCK_CLOSED_HEIGHT: youBarTotalHeight, getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockExpandedHeightLimits, youBarHeight: youBarTotalHeight, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED, getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockExpandedWidth });
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
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
        return authStore;
      }
    } else {
      return 0;
    }
  }, items1);
}
export function useQuestDockDismissalReset() {
  let setRestingQuestDockMode;
  setRestingQuestDockMode = react.useContext(setRestingQuestDockMode(17005).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const activeQuestDockMode = react.useContext(setRestingQuestDockMode(17002).QuestDockGestureContext).activeQuestDockMode;
  const items = [setRestingQuestDockMode, activeQuestDockMode];
  const effect = react.useEffect(() => {
    let closure_0;
    let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
    let tmp = constants;
    if (!isSoftDismissedResult) {
      let obj = setRestingQuestDockMode(dependencyMap[13]);
      isSoftDismissedResult = obj.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
    }
    if (!isSoftDismissedResult) {
      setRestingQuestDockMode(tmp.COLLAPSED);
    }
    function maybeResetSoftDismissal() {
      let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
      const tmp = constants;
      if (!isSoftDismissedResult) {
        const obj = setRestingQuestDockMode(dependencyMap[13]);
        isSoftDismissedResult = obj.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
      }
      if (!isSoftDismissedResult) {
        closure_0(tmp.COLLAPSED);
      }
    }
    setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(dependencyMap[14]).Millis.MINUTE);
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
    obj3.openLazy(asyncRequire(17009, dependencyMap.paths), "QuestDockContextMenuActionSheet", obj4);
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
