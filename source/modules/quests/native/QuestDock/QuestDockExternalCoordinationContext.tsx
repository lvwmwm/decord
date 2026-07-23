// Module ID: 13998
// Function ID: 107182
// Name: QuestDockMode
// Dependencies: [31, 13992, 4976, 13994, 33, 664, 7590, 3991, 13993, 9444, 477, 2]
// Exports: useExternalScrollEventHandler

// Module 13998 (QuestDockMode)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { QuestDockMode } from "QuestsExperimentLocations";
import { QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD as closure_5 } from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { jsx } from "jsxProd";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import set from "set";
import set from "QuestsExperimentLocations";

const require = arg1;
const SECOND = require("set").Millis.SECOND;
let obj = {};
obj.restingQuestDockMode = createFakeSharedValue.createFakeSharedValue(QuestDockMode.COLLAPSED);
obj.setRestingQuestDockMode = function setRestingQuestDockMode(COLLAPSED) {

};
obj.lastScrollEventSourceId = createFakeSharedValue.createFakeSharedValue(null);
obj.questDockOffset = require("result");
let context = importAllResult.createContext(obj);
set = set.isAndroid();
let closure_10 = { code: "function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}" };
let closure_11 = { code: "function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}" };
let closure_12 = { code: "function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}" };
let result = set.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx");

export const QuestDockExternalCoordinationContext = context;
export const QuestDockExternalCoordinationContextProvider = importAllResult.memo(function QuestDockExternalCoordinationContextProviderInner(children) {
  let obj = sharedValue(sharedValue1[7]);
  sharedValue = obj.useSharedValue(null);
  sharedValue1 = sharedValue(sharedValue1[7]).useSharedValue(0);
  const obj2 = sharedValue(sharedValue1[7]);
  const obj3 = sharedValue(sharedValue1[7]);
  const sharedValue2 = obj3.useSharedValue(sharedValue(sharedValue1[8]).isSoftDismissed(callback.questDockSoftDismissedAt) ? tmp3.SOFT_DISMISSED : tmp3.COLLAPSED);
  const items = [sharedValue2, sharedValue1];
  callback = sharedValue2.useCallback((mode) => {
    const result = sharedValue1.set(0);
    if (sharedValue2.get() !== mode) {
      const result1 = sharedValue2.set(mode);
    }
    if (mode !== outer1_4.RESET_TO_PREVIOUS) {
      const result2 = sharedValue(sharedValue1[9]).updatePrevRestingQuestDockMode(mode);
      const obj = sharedValue(sharedValue1[9]);
    }
  }, items);
  const items1 = [sharedValue, sharedValue2, callback, sharedValue1];
  obj = { value: sharedValue2.useMemo(() => ({ lastScrollEventSourceId: sharedValue, restingQuestDockMode: sharedValue2, setRestingQuestDockMode: callback, questDockOffset: sharedValue1 }), items1), children: children.children };
  return <context.Provider value={sharedValue2.useMemo(() => ({ lastScrollEventSourceId: sharedValue, restingQuestDockMode: sharedValue2, setRestingQuestDockMode: callback, questDockOffset: sharedValue1 }), items1)}>{arg0.children}</context.Provider>;
});
export const useExternalScrollEventHandler = function useExternalScrollEventHandler(id) {
  id = id.id;
  const context = restingQuestDockMode.useContext(sharedValue1);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  restingQuestDockMode = context.restingQuestDockMode;
  const lastScrollEventSourceId = context.lastScrollEventSourceId;
  let closure_4 = restingQuestDockMode.useRef(-1);
  const items = [setRestingQuestDockMode, restingQuestDockMode];
  const callback = restingQuestDockMode.useCallback(() => {
    if (-1 !== closure_4.current) {
      const _window = window;
      window.clearTimeout(closure_4.current);
    }
    closure_4.current = window.setTimeout(() => {
      if (outer1_2.get() !== constants.EXPANDED) {
        outer1_1(constants.COLLAPSED);
      }
    }, 500);
  }, items);
  const callback1 = restingQuestDockMode.useCallback(() => {
    if (-1 !== closure_4.current) {
      const _window = window;
      window.clearTimeout(closure_4.current);
    }
  }, []);
  let obj = id(setRestingQuestDockMode[7]);
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
  obj = { runOnJS: id(setRestingQuestDockMode[7]).runOnJS, cancelReopenQuestDock: callback1 };
  fn.__closure = obj;
  fn.__workletHash = 1848909508809;
  fn.__initData = closure_11;
  const animatedReaction = obj.useAnimatedReaction(D, fn);
  const sharedValue = id(setRestingQuestDockMode[7]).useSharedValue(0);
  let obj3 = id(setRestingQuestDockMode[7]);
  sharedValue1 = id(setRestingQuestDockMode[7]).useSharedValue(false);
  const items1 = [sharedValue1];
  const effect = restingQuestDockMode.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = outer1_8.set(true);
    }, sharedValue);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  class T {
    constructor(arg0, arg1, arg2) {
      if (useSharedValue.get()) {
        tmp = restingQuestDockMode;
        tmp2 = c4;
        if (restingQuestDockMode.get() !== c4.SOFT_DISMISSED) {
          tmp42 = restingQuestDockMode;
          tmp43 = c4;
          if (restingQuestDockMode.get() !== c4.EXPANDED) {
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
                  tmp9 = outer1_9;
                  if (outer1_9) {
                    tmp10 = restingQuestDockMode;
                    tmp11 = c4;
                    if (restingQuestDockMode.get() === c4.CLOSED) {
                      tmp29 = outer1_9;
                      tmp30 = id;
                      tmp31 = setRestingQuestDockMode;
                      num4 = 7;
                      tmp32 = id(setRestingQuestDockMode[7]);
                      runOnJS = tmp32.runOnJS;
                      if (outer1_9) {
                        tmp36 = closure_5;
                        tmp37 = runOnJS(closure_5)();
                      } else {
                        tmp33 = setRestingQuestDockMode;
                        tmp34 = c4;
                        tmp35 = runOnJS(setRestingQuestDockMode)(c4.COLLAPSED);
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
                      tmp15 = c4;
                      if (restingQuestDockMode.get() === c4.COLLAPSED) {
                        tmp24 = id;
                        tmp25 = setRestingQuestDockMode;
                        num3 = 7;
                        obj2 = id(setRestingQuestDockMode[7]);
                        tmp26 = setRestingQuestDockMode;
                        tmp27 = c4;
                        tmp28 = obj2.runOnJS(setRestingQuestDockMode)(c4.CLOSED);
                      }
                    }
                  }
                }
                tmp16 = id < value;
                if (tmp16) {
                  tmp17 = restingQuestDockMode;
                  tmp18 = c4;
                  tmp16 = restingQuestDockMode.get() === c4.CLOSED;
                }
                if (tmp16) {
                  tmp19 = outer1_5;
                  tmp16 = absolute >= outer1_5;
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
  obj = { isScrollHandlerEnabled: sharedValue1, restingQuestDockMode, QuestDockMode: closure_4, lastContentOffsetY: sharedValue, lastScrollEventSourceId, id, runOnJS: id(setRestingQuestDockMode[7]).runOnJS, cancelReopenQuestDock: callback1, IS_ANDROID: set, scheduleReopenQuestDock: callback, setRestingQuestDockMode, QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: callback };
  T.__closure = obj;
  T.__workletHash = 9824540806898;
  T.__initData = closure_12;
  const items2 = [id, sharedValue, lastScrollEventSourceId, restingQuestDockMode, callback, setRestingQuestDockMode, callback1, sharedValue1];
  return restingQuestDockMode.useCallback(T, items2);
};
