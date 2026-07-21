// Module ID: 13874
// Function ID: 104954
// Name: QuestDockMode
// Dependencies: []
// Exports: useExternalScrollEventHandler

// Module 13874 (QuestDockMode)
const importAllResult = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const QuestDockMode = arg1(dependencyMap[2]).QuestDockMode;
let closure_5 = arg1(dependencyMap[3]).QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
const jsx = arg1(dependencyMap[4]).jsx;
const SECOND = importDefault(dependencyMap[5]).Millis.SECOND;
const obj = {
  restingQuestDockMode: arg1(dependencyMap[6]).createFakeSharedValue(QuestDockMode.COLLAPSED),
  setRestingQuestDockMode(COLLAPSED) {

  }
};
const obj3 = arg1(dependencyMap[6]);
obj.lastScrollEventSourceId = arg1(dependencyMap[6]).createFakeSharedValue(null);
const obj4 = arg1(dependencyMap[6]);
obj.questDockOffset = require("module_0");
const context = importAllResult.createContext(obj);
const obj5 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function QuestDockExternalCoordinationContextProviderInner(children) {
  let obj = arg1(dependencyMap[7]);
  const sharedValue = obj.useSharedValue(null);
  const arg1 = sharedValue;
  const sharedValue1 = arg1(dependencyMap[7]).useSharedValue(0);
  const dependencyMap = sharedValue1;
  const obj2 = arg1(dependencyMap[7]);
  const obj3 = arg1(dependencyMap[7]);
  const sharedValue2 = obj3.useSharedValue(arg1(dependencyMap[8]).isSoftDismissed(obj.questDockSoftDismissedAt) ? tmp3.SOFT_DISMISSED : tmp3.COLLAPSED);
  const items = [sharedValue2, sharedValue1];
  const callback = importAllResult.useCallback((mode) => {
    const result = sharedValue1.set(0);
    if (sharedValue2.get() !== mode) {
      const result1 = sharedValue2.set(mode);
    }
    if (mode !== constants.RESET_TO_PREVIOUS) {
      const result2 = sharedValue(sharedValue1[9]).updatePrevRestingQuestDockMode(mode);
      const obj = sharedValue(sharedValue1[9]);
    }
  }, items);
  obj = callback;
  const items1 = [sharedValue, sharedValue2, callback, sharedValue1];
  obj = { value: importAllResult.useMemo(() => ({ lastScrollEventSourceId: sharedValue, restingQuestDockMode: sharedValue2, setRestingQuestDockMode: callback, questDockOffset: sharedValue1 }), items1), children: children.children };
  return <context.Provider {...obj} />;
});
let closure_9 = arg1(dependencyMap[10]).isAndroid();
let closure_10 = { code: "function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}" };
let closure_11 = { code: "function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}" };
let closure_12 = { code: "function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}" };
const obj6 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx");

export const QuestDockExternalCoordinationContext = context;
export const QuestDockExternalCoordinationContextProvider = memoResult;
export const useExternalScrollEventHandler = function useExternalScrollEventHandler(id) {
  id = id.id;
  const arg1 = id;
  let context = importAllResult.useContext(context);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  const dependencyMap = setRestingQuestDockMode;
  const restingQuestDockMode = context.restingQuestDockMode;
  const lastScrollEventSourceId = context.lastScrollEventSourceId;
  let closure_3 = lastScrollEventSourceId;
  let closure_4 = importAllResult.useRef(-1);
  const items = [setRestingQuestDockMode, restingQuestDockMode];
  const callback = importAllResult.useCallback(() => {
    if (-1 !== closure_4.current) {
      const _window = window;
      window.clearTimeout(closure_4.current);
    }
    closure_4.current = window.setTimeout(() => {
      if (closure_2.get() !== constants.EXPANDED) {
        callback(constants.COLLAPSED);
      }
    }, 500);
  }, items);
  let closure_5 = callback;
  const callback1 = importAllResult.useCallback(() => {
    if (-1 !== closure_4.current) {
      const _window = window;
      window.clearTimeout(closure_4.current);
    }
  }, []);
  const jsx = callback1;
  let obj = arg1(dependencyMap[7]);
  class D {
    constructor() {
      return restingQuestDockMode.get();
    }
  }
  D.__closure = { restingQuestDockMode };
  D.__workletHash = 14040596710288;
  D.__initData = closure_10;
  const fn = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      id(setRestingQuestDockMode[7]).runOnJS(callback1)();
      const obj = id(setRestingQuestDockMode[7]);
    }
  };
  obj = { runOnJS: arg1(dependencyMap[7]).runOnJS, cancelReopenQuestDock: callback1 };
  fn.__closure = obj;
  fn.__workletHash = 1848909508809;
  fn.__initData = closure_11;
  const animatedReaction = obj.useAnimatedReaction(D, fn);
  const sharedValue = arg1(dependencyMap[7]).useSharedValue(0);
  const SECOND = sharedValue;
  const obj3 = arg1(dependencyMap[7]);
  const sharedValue1 = arg1(dependencyMap[7]).useSharedValue(false);
  context = sharedValue1;
  const items1 = [sharedValue1];
  const effect = importAllResult.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_8.set(true);
    }, sharedValue);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  class T {
    constructor(arg0, arg1, arg2) {
      if (useSharedValue.get()) {
        tmp = restingQuestDockMode;
        tmp2 = closure_4;
        if (restingQuestDockMode.get() !== closure_4.SOFT_DISMISSED) {
          tmp42 = restingQuestDockMode;
          tmp43 = closure_4;
          if (restingQuestDockMode.get() !== closure_4.EXPANDED) {
            tmp44 = useAnimatedReaction;
            value = useAnimatedReaction.get();
            result = useAnimatedReaction.set(id);
            if (value !== id) {
              tmp47 = lastScrollEventSourceId;
              tmp49 = id;
              str = "guilds";
              value1 = lastScrollEventSourceId.get();
              if ("guilds" !== id) {
                tmp3 = lastScrollEventSourceId;
                tmp4 = id;
                result1 = lastScrollEventSourceId.set(id);
              }
              tmp6 = id;
              if ("guilds" === id) {
                num = 0;
                if (id < 0) {
                  if (value < 0) {
                    tmp38 = id;
                    tmp39 = setRestingQuestDockMode;
                    num5 = 7;
                    obj3 = id(setRestingQuestDockMode[7]);
                    tmp40 = useCallback;
                    tmp41 = obj3.runOnJS(useCallback)();
                  }
                }
                tmp8 = null;
                if (null != arg2) {
                  if (null != arg1) {
                  }
                }
                if (id <= 0) {
                  tmp9 = closure_9;
                  if (closure_9) {
                    tmp10 = restingQuestDockMode;
                    tmp11 = closure_4;
                    if (restingQuestDockMode.get() === closure_4.CLOSED) {
                      tmp29 = closure_9;
                      tmp30 = id;
                      tmp31 = setRestingQuestDockMode;
                      num4 = 7;
                      tmp32 = id(setRestingQuestDockMode[7]);
                      runOnJS = tmp32.runOnJS;
                      if (closure_9) {
                        tmp36 = closure_5;
                        tmp37 = runOnJS(closure_5)();
                      } else {
                        tmp33 = setRestingQuestDockMode;
                        tmp34 = closure_4;
                        tmp35 = runOnJS(setRestingQuestDockMode)(closure_4.COLLAPSED);
                      }
                    }
                  }
                }
                tmp12 = globalThis;
                _Math = Math;
                absolute = Math.abs(value - id);
                if (id > value) {
                  if (id > 0) {
                    if (value > 0) {
                      tmp14 = restingQuestDockMode;
                      tmp15 = closure_4;
                      if (restingQuestDockMode.get() === closure_4.COLLAPSED) {
                        tmp24 = id;
                        tmp25 = setRestingQuestDockMode;
                        num3 = 7;
                        obj2 = id(setRestingQuestDockMode[7]);
                        tmp26 = setRestingQuestDockMode;
                        tmp27 = closure_4;
                        tmp28 = obj2.runOnJS(setRestingQuestDockMode)(closure_4.CLOSED);
                      }
                    }
                  }
                }
                tmp16 = id < value;
                if (tmp16) {
                  tmp17 = restingQuestDockMode;
                  tmp18 = closure_4;
                  tmp16 = restingQuestDockMode.get() === closure_4.CLOSED;
                }
                if (tmp16) {
                  tmp19 = closure_5;
                  tmp16 = absolute >= closure_5;
                }
                if (tmp16) {
                  tmp20 = id;
                  tmp21 = setRestingQuestDockMode;
                  num2 = 7;
                  obj = id(setRestingQuestDockMode[7]);
                  tmp22 = closure_5;
                  tmp23 = obj.runOnJS(closure_5)();
                }
              } else {
                tmp7 = id;
              }
            }
          }
        }
      }
      return;
    }
  }
  obj = { isScrollHandlerEnabled: sharedValue1, restingQuestDockMode, QuestDockMode: closure_4, lastContentOffsetY: sharedValue, lastScrollEventSourceId, id, runOnJS: arg1(dependencyMap[7]).runOnJS, cancelReopenQuestDock: callback1, IS_ANDROID: closure_9, scheduleReopenQuestDock: callback, setRestingQuestDockMode, QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: closure_5 };
  T.__closure = obj;
  T.__workletHash = 9824540806898;
  T.__initData = closure_12;
  const items2 = [id, sharedValue, lastScrollEventSourceId, restingQuestDockMode, callback, setRestingQuestDockMode, callback1, sharedValue1];
  return restingQuestDockMode.useCallback(T, items2);
};
