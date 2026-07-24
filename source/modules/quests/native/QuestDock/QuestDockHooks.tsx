// Module ID: 14041
// Function ID: 107454
// Name: useQuestDockModeAnimatedReaction
// Dependencies: [57, 31, 14042, 4976, 14044, 14045, 14048, 10423, 14046, 14049, 3991, 9459, 14043, 566, 664, 10952, 10497, 9485, 9486, 9487, 6969, 6968, 4979, 4098, 14051, 1934, 2]
// Exports: useActionSheetPressHandler, useQuestDockDismissalReset, useQuestDockExternalOffset, useQuestDockModeAnimatedReaction

// Module 14041 (useQuestDockModeAnimatedReaction)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";

let closure_10;
let closure_11;
let closure_12;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ QUEST_DOCK_CLOSED_HEIGHT: closure_7, QUEST_DOCK_COLLAPSED_HEIGHT: closure_8, QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: closure_9, QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: closure_10, QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: closure_11, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_12 } = QUEST_DOCK_COLLAPSED_HEIGHT);
let closure_13 = { code: "function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}" };
let closure_14 = { code: "function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export const useQuestDockModeAnimatedReaction = function useQuestDockModeAnimatedReaction() {
  const context = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[5]).QuestDockGestureContext);
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  activeQuestDockMode = context.activeQuestDockMode;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const context1 = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[6]).QuestDockExternalCoordinationContext);
  restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const tmp3 = windowDimensions(activeQuestDockMode[7])();
  const QuestDockMode = tmp3;
  let obj = questDockWrapperSpecs(activeQuestDockMode[8]);
  const youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  const youBarTotalHeight = questDockWrapperSpecs(activeQuestDockMode[9]).useYouBarTotalHeight();
  const obj2 = questDockWrapperSpecs(activeQuestDockMode[9]);
  const fn = function o() {
    return { restingQuestDockMode: restingQuestDockMode.get(), minExpandedContentHeight: minExpandedContentHeight.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: tmp3.get() };
  };
  fn.__closure = { restingQuestDockMode, minExpandedContentHeight, windowDimensions, safeArea: tmp3 };
  fn.__workletHash = 9502251090521;
  fn.__initData = closure_13;
  const fn2 = function t(safeAreaState, restingQuestDockMode) {
    let minExpandedContentHeight;
    let safeArea;
    let windowWidth;
    let obj = questDockWrapperSpecs(activeQuestDockMode[11]);
    let tmp;
    if (null != restingQuestDockMode) {
      tmp = restingQuestDockMode;
    }
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
      ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = safeAreaState);
      if (tmp3.RESET_TO_PREVIOUS === restingQuestDockMode) {
        restingQuestDockMode = undefined;
        const obj9 = questDockWrapperSpecs(activeQuestDockMode[10]);
        if (null != restingQuestDockMode) {
          restingQuestDockMode = restingQuestDockMode.restingQuestDockMode;
        }
        if (null == restingQuestDockMode) {
          restingQuestDockMode = tmp3.COLLAPSED;
        }
        questDockWrapperSpecs(activeQuestDockMode[10]).runOnJS(setRestingQuestDockMode)(restingQuestDockMode);
      } else if (tmp3.COLLAPSED === restingQuestDockMode) {
        obj = {};
        const merged = Object.assign(questDockWrapperSpecs.get());
        obj["x"] = 0;
        obj["y"] = 0;
        obj["width"] = questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockCollapsedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin);
        obj["height"] = youBarTotalHeight;
        const result = questDockWrapperSpecs.set(obj);
        const result1 = activeQuestDockMode.set(tmp3.COLLAPSED);
        const obj8 = questDockWrapperSpecs(activeQuestDockMode[12]);
      } else {
        if (tmp3.CLOSED !== restingQuestDockMode) {
          if (tmp3.SOFT_DISMISSED !== restingQuestDockMode) {
            if (tmp3.EXPANDED === restingQuestDockMode) {
              const questDockExpandedHeightLimits = questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockExpandedHeightLimits(tmp2, safeArea.top, minExpandedContentHeight);
              const minHeight = questDockExpandedHeightLimits.minHeight;
              let tmp8 = questDockWrapperSpecs.get().height <= youBarTotalHeight;
              if (!tmp8) {
                let tmp4 = null != restingQuestDockMode;
                if (tmp4) {
                  let obj1 = questDockWrapperSpecs(activeQuestDockMode[12]);
                  tmp4 = questDockWrapperSpecs.get().height === obj1.getQuestDockExpandedHeightLimits(restingQuestDockMode.windowHeight, restingQuestDockMode.safeArea.top, minExpandedContentHeight).maxHeight;
                }
                tmp8 = tmp4;
              }
              if (!tmp8) {
                const height = questDockWrapperSpecs.get().height;
              }
              obj = {};
              const merged1 = Object.assign(questDockWrapperSpecs.get());
              obj["x"] = 0;
              obj["y"] = youBarTotalHeight > 0 ? youBarTotalHeight : outer1_12;
              const obj10 = questDockWrapperSpecs(activeQuestDockMode[12]);
              obj["width"] = questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockExpandedWidth(windowWidth, safeArea.left, safeArea.right);
              obj["height"] = questDockExpandedHeightLimits.maxHeight;
              const result2 = questDockWrapperSpecs.set(obj);
              const result3 = activeQuestDockMode.set(tmp3.EXPANDED);
              const obj4 = questDockWrapperSpecs(activeQuestDockMode[12]);
            }
          }
        }
        obj1 = {};
        const merged2 = Object.assign(questDockWrapperSpecs.get());
        obj1["x"] = 0;
        obj1["y"] = 0;
        obj1["width"] = questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockClosedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin);
        obj1["height"] = youBarHorizontalMargin;
        const result4 = questDockWrapperSpecs.set(obj1);
        const result5 = activeQuestDockMode.set(restingQuestDockMode);
        const obj6 = questDockWrapperSpecs(activeQuestDockMode[12]);
      }
    }
  };
  obj = { cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[11]).cheapWorkletShallowEqual, QuestDockMode, runOnJS: questDockWrapperSpecs(activeQuestDockMode[10]).runOnJS, setRestingQuestDockMode, questDockWrapperSpecs, getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockCollapsedWidth, youBarHorizontalMargin, QUEST_DOCK_COLLAPSED_HEIGHT: youBarTotalHeight, activeQuestDockMode, getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockClosedWidth, QUEST_DOCK_CLOSED_HEIGHT: youBarHorizontalMargin, getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockExpandedHeightLimits, youBarHeight: youBarTotalHeight, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_12, getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockExpandedWidth };
  fn2.__closure = obj;
  fn2.__workletHash = 2510234714195;
  fn2.__initData = closure_14;
  const animatedReaction = questDockWrapperSpecs(activeQuestDockMode[10]).useAnimatedReaction(fn, fn2);
};
export const useQuestDockExternalOffset = function useQuestDockExternalOffset() {
  let items = [_isNativeReflectConstruct];
  const tmp = callback(first(566).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ prevRestingQuestDockMode: arr[0], isEligibleToBeVisible: arr[1] } = outer1_5);
    return items;
  }), 2);
  first = tmp[0];
  const importDefault = tmp3;
  const items1 = [tmp[1], first];
  return React.useMemo(() => {
    if (closure_1) {
      if (outer1_6.COLLAPSED === first) {
        return outer1_10;
      } else if (outer1_6.EXPANDED === tmp) {
        return outer1_11;
      } else {
        if (outer1_6.CLOSED !== tmp) {
          if (outer1_6.SOFT_DISMISSED !== tmp) {
            return 0;
          }
        }
        return outer1_9;
      }
    } else {
      return 0;
    }
  }, items1);
};
export const useQuestDockDismissalReset = function useQuestDockDismissalReset() {
  setRestingQuestDockMode = React.useContext(setRestingQuestDockMode(14048).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const activeQuestDockMode = React.useContext(setRestingQuestDockMode(14045).QuestDockGestureContext).activeQuestDockMode;
  const items = [setRestingQuestDockMode, activeQuestDockMode];
  const effect = React.useEffect(() => {
    function maybeResetSoftDismissal() {
      let isSoftDismissedResult = outer1_1.get() !== outer2_6.SOFT_DISMISSED;
      if (!isSoftDismissedResult) {
        isSoftDismissedResult = setRestingQuestDockMode(outer2_2[12]).isSoftDismissed(outer2_5.questDockSoftDismissedAt);
        const obj = setRestingQuestDockMode(outer2_2[12]);
      }
      if (!isSoftDismissedResult) {
        callback(outer2_6.COLLAPSED);
      }
    }
    const result = maybeResetSoftDismissal();
    const interval = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(outer1_2[14]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, items);
};
export const useActionSheetPressHandler = function useActionSheetPressHandler(quest) {
  const _require = quest;
  const trackQuestContentClickedWithImpression = _require(questImpressionId[15]).useTrackQuestContentClickedWithImpression();
  let obj = _require(questImpressionId[15]);
  questImpressionId = _require(questImpressionId[16]).useQuestImpressionId();
  const items = [quest, trackQuestContentClickedWithImpression, questImpressionId];
  return React.useCallback(() => {
    let obj = quest(questImpressionId[17]);
    if (obj.shouldMigrateToAdAnalyticsInterface(quest(questImpressionId[17]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_action_sheet")) {
      obj = { type: quest(questImpressionId[19]).AdUserActionType.CLICK_INTERNAL, adCreativeType: quest(questImpressionId[20]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: quest(questImpressionId[21]).QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: quest(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: quest(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE, impressionId: questImpressionId };
      quest(questImpressionId[18]).captureAdUserAction(obj);
      const obj3 = quest(questImpressionId[18]);
    } else {
      obj = { questId: quest.id, questContent: quest(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE, questContentCTA: quest(questImpressionId[21]).QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent: quest(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE };
      trackQuestContentClickedWithImpression(obj);
    }
    trackQuestContentClickedWithImpression(questImpressionId[23]).openLazy(quest(questImpressionId[25])(questImpressionId[24], questImpressionId.paths), "QuestDockContextMenuActionSheet", { quest });
  }, items);
};
