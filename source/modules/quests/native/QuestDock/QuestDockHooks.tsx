// Module ID: 13877
// Function ID: 104975
// Name: useQuestDockModeAnimatedReaction
// Dependencies: []
// Exports: useActionSheetPressHandler, useQuestDockDismissalReset, useQuestDockExternalOffset, useQuestDockModeAnimatedReaction

// Module 13877 (useQuestDockModeAnimatedReaction)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const QuestDockMode = arg1(dependencyMap[3]).QuestDockMode;
({ QUEST_DOCK_CLOSED_HEIGHT: closure_7, QUEST_DOCK_COLLAPSED_HEIGHT: closure_8, QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: closure_9, QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: closure_10, QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: closure_11, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_12 } = arg1(dependencyMap[4]));
let closure_13 = { code: "function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}" };
let closure_14 = { code: "function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}" };
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export const useQuestDockModeAnimatedReaction = function useQuestDockModeAnimatedReaction() {
  const context = React.useContext(arg1(dependencyMap[5]).QuestDockGestureContext);
  const arg1 = questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  const importDefault = windowDimensions;
  const activeQuestDockMode = context.activeQuestDockMode;
  const dependencyMap = activeQuestDockMode;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  let closure_3 = minExpandedContentHeight;
  const context1 = React.useContext(arg1(dependencyMap[6]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const React = restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let closure_5 = setRestingQuestDockMode;
  const tmp3 = importDefault(dependencyMap[7])();
  const QuestDockMode = tmp3;
  let obj = arg1(dependencyMap[8]);
  const youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  const youBarTotalHeight = arg1(dependencyMap[9]).useYouBarTotalHeight();
  const obj2 = arg1(dependencyMap[9]);
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
              obj["y"] = youBarTotalHeight > 0 ? youBarTotalHeight : closure_12;
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
  obj = { cheapWorkletShallowEqual: arg1(dependencyMap[11]).cheapWorkletShallowEqual, QuestDockMode, runOnJS: arg1(dependencyMap[10]).runOnJS, setRestingQuestDockMode, questDockWrapperSpecs, getQuestDockCollapsedWidth: arg1(dependencyMap[12]).getQuestDockCollapsedWidth, youBarHorizontalMargin, QUEST_DOCK_COLLAPSED_HEIGHT: youBarTotalHeight, activeQuestDockMode, getQuestDockClosedWidth: arg1(dependencyMap[12]).getQuestDockClosedWidth, QUEST_DOCK_CLOSED_HEIGHT: youBarHorizontalMargin, getQuestDockExpandedHeightLimits: arg1(dependencyMap[12]).getQuestDockExpandedHeightLimits, youBarHeight: youBarTotalHeight, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_12, getQuestDockExpandedWidth: arg1(dependencyMap[12]).getQuestDockExpandedWidth };
  fn2.__closure = obj;
  fn2.__workletHash = 2510234714195;
  fn2.__initData = closure_14;
  const animatedReaction = arg1(dependencyMap[10]).useAnimatedReaction(fn, fn2);
};
export const useQuestDockExternalOffset = function useQuestDockExternalOffset() {
  const items = [closure_5];
  const tmp = callback(arg1(dependencyMap[13]).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ prevRestingQuestDockMode: arr[0], isEligibleToBeVisible: arr[1] } = closure_5);
    return items;
  }), 2);
  const first = tmp[0];
  const arg1 = first;
  const importDefault = tmp3;
  const items1 = [tmp[1], first];
  return React.useMemo(() => {
    if (tmp3) {
      if (constants.COLLAPSED === first) {
        return closure_10;
      } else {
        if (constants.EXPANDED === tmp) {
          return closure_11;
        } else {
          if (constants.CLOSED !== tmp) {
            if (constants.SOFT_DISMISSED !== tmp) {
              return 0;
            }
          }
          return closure_9;
        }
        const tmp3 = constants;
      }
    } else {
      return 0;
    }
  }, items1);
};
export const useQuestDockDismissalReset = function useQuestDockDismissalReset() {
  const setRestingQuestDockMode = React.useContext(arg1(dependencyMap[6]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const arg1 = setRestingQuestDockMode;
  const activeQuestDockMode = React.useContext(arg1(dependencyMap[5]).QuestDockGestureContext).activeQuestDockMode;
  const importDefault = activeQuestDockMode;
  const items = [setRestingQuestDockMode, activeQuestDockMode];
  const effect = React.useEffect(() => {
    function maybeResetSoftDismissal() {
      let isSoftDismissedResult = closure_1.get() !== constants.SOFT_DISMISSED;
      if (!isSoftDismissedResult) {
        const obj = callback(closure_2[12]);
        isSoftDismissedResult = obj.isSoftDismissed(obj.questDockSoftDismissedAt);
      }
      if (!isSoftDismissedResult) {
        callback(constants.COLLAPSED);
      }
    }
    const result = maybeResetSoftDismissal();
    const interval = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(closure_2[14]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, items);
};
export const useActionSheetPressHandler = function useActionSheetPressHandler(quest) {
  const arg1 = quest;
  const trackQuestContentClickedWithImpression = arg1(dependencyMap[15]).useTrackQuestContentClickedWithImpression();
  const importDefault = trackQuestContentClickedWithImpression;
  const obj = arg1(dependencyMap[15]);
  const questImpressionId = arg1(dependencyMap[16]).useQuestImpressionId();
  const dependencyMap = questImpressionId;
  const items = [quest, trackQuestContentClickedWithImpression, questImpressionId];
  return React.useCallback(() => {
    let obj = arg0(questImpressionId[17]);
    if (obj.shouldMigrateToAdAnalyticsInterface(arg0(questImpressionId[17]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_action_sheet")) {
      obj = { type: arg0(questImpressionId[19]).AdUserActionType.CLICK_INTERNAL, adCreativeType: arg0(questImpressionId[20]).AdCreativeType.QUEST, adCreativeId: arg0.id, questContentCTA: arg0(questImpressionId[21]).QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: arg0(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: arg0(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE, impressionId: questImpressionId };
      arg0(questImpressionId[18]).captureAdUserAction(obj);
      const obj3 = arg0(questImpressionId[18]);
    } else {
      obj = { questId: arg0.id, questContent: arg0(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE, questContentCTA: arg0(questImpressionId[21]).QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent: arg0(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE };
      trackQuestContentClickedWithImpression(obj);
    }
    trackQuestContentClickedWithImpression(questImpressionId[23]).openLazy(arg0(questImpressionId[25])(questImpressionId[24], questImpressionId.paths), "QuestDockContextMenuActionSheet", { quest: arg0 });
  }, items);
};
