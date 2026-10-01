// Module ID: 14628
// Function ID: 14629
// Name: QuestDockExternalCoordinationContext
// Dependencies: [19, 14622, 5756, 14624, 21, 1091, 6495, 4566, 14623, 10683, 1364, 2]
// Exports: useExternalScrollEventHandler

// Module 14628 (QuestDockExternalCoordinationContext)
import Fragment from "Fragment" /* 21 */;
import DurationsDefault from "Durations" /* 1091 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestActionCreators from "QuestActionCreators" /* 10683 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 14622 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6495 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let QuestDockMode = QuestConstants.QuestDockMode;
let closure_5 = QuestDockConstants.QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
const jsx = Fragment.jsx;
const SECOND = DurationsDefault.Millis.SECOND;
let obj = {
  restingQuestDockMode: ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED),
  setRestingQuestDockMode() {

  },
  lastScrollEventSourceId: ReanimatedHelperTypes.createFakeSharedValue(null),
  questDockOffset: ReanimatedHelperTypes.createFakeSharedValue(0)
};
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
let context = createContext(obj);
const memoResult = react.memo(function QuestDockExternalCoordinationContextProviderInner(children) {
  let setRestingQuestDockMode;
  let sharedValue;
  let sharedValue1;
  let obj = sharedValue(sharedValue1[7]);
  sharedValue = obj.useSharedValue(null);
  let obj2 = sharedValue(sharedValue1[7]);
  sharedValue1 = obj2.useSharedValue(0);
  const useSharedValue = sharedValue(sharedValue1[7]).useSharedValue;
  const tmp3 = sharedValue(sharedValue1[7]);
  const obj3 = sharedValue(sharedValue1[8]);
  const sharedValue2 = useSharedValue(obj3.isSoftDismissed(setRestingQuestDockMode.questDockSoftDismissedAt) ? tmp4.SOFT_DISMISSED : tmp4.COLLAPSED);
  const items = [sharedValue2, sharedValue1];
  setRestingQuestDockMode = sharedValue2.useCallback((mode) => {
    const result = sharedValue1.set(0);
    const obj = sharedValue2;
    if (sharedValue2.get() !== mode) {
      const result1 = obj.set(mode);
    }
    if (mode !== QuestDockMode.RESET_TO_PREVIOUS) {
      const obj2 = QuestActionCreators;
      const result2 = obj2.updatePrevRestingQuestDockMode(mode);
    }
  }, items);
  const items1 = [sharedValue, sharedValue2, setRestingQuestDockMode, sharedValue1];
  return <context.Provider value={sharedValue2.useMemo(() => ({ lastScrollEventSourceId: sharedValue, restingQuestDockMode: sharedValue2, setRestingQuestDockMode, questDockOffset: sharedValue1 }), items1)}>{arg0.children}</context.Provider>;
});
const IS_ANDROID = PlatformUtils.isAndroid();
const __initData = { code: "function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}" };
const __initData2 = { code: "function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}" };
const __initData3 = { code: "function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}" };
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx");

export const QuestDockExternalCoordinationContext = context;
export const QuestDockExternalCoordinationContextProvider = memoResult;
export const useExternalScrollEventHandler = function useExternalScrollEventHandler(id) {
  let ref;
  id = id.id;
  let restingQuestDockMode;
  let sharedValue;
  let sharedValue1;
  context = restingQuestDockMode.useContext(sharedValue1);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  restingQuestDockMode = context.restingQuestDockMode;
  const lastScrollEventSourceId = context.lastScrollEventSourceId;
  QuestDockMode = restingQuestDockMode.useRef(-1);
  const items = [setRestingQuestDockMode, restingQuestDockMode];
  const scheduleReopenQuestDock = restingQuestDockMode.useCallback(() => {
    const tmp = ref;
    if (-1 !== ref.current) {
      const _window = window;
      window.clearTimeout(tmp.current);
    }
    tmp.current = window.setTimeout(() => {
      if (restingQuestDockMode.get() !== constants.EXPANDED) {
        setRestingQuestDockMode(tmp.COLLAPSED);
      }
    }, 500);
  }, items);
  const callback1 = restingQuestDockMode.useCallback(() => {
    if (-1 !== ref.current) {
      const _window = window;
      window.clearTimeout(tmp.current);
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
  D.__initData = __initData;
  const fn = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback1)();
    }
  };
  let obj2 = { runOnJS: id(setRestingQuestDockMode[7]).runOnJS, cancelReopenQuestDock: callback1 };
  fn.__closure = obj2;
  fn.__workletHash = 1848909508809;
  fn.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(D, fn);
  let obj3 = id(setRestingQuestDockMode[7]);
  sharedValue = obj3.useSharedValue(0);
  let obj4 = id(setRestingQuestDockMode[7]);
  sharedValue1 = obj4.useSharedValue(false);
  const items1 = [sharedValue1];
  const effect = restingQuestDockMode.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue1.set(true);
    }, sharedValue);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  class T {
    constructor(arg0, arg1, arg2) {
      if (sharedValue1.get()) {
        if (restingQuestDockMode.get() !== QuestDockMode.SOFT_DISMISSED) {
          if (restingQuestDockMode.get() !== QuestDockMode.EXPANDED) {
            const value = sharedValue.get();
            const result = sharedValue.set(arg0);
            if (value !== arg0) {
              const value2 = lastScrollEventSourceId.get();
              const obj5 = lastScrollEventSourceId;
              if ("guilds" !== id) {
                const result1 = obj5.set(tmp35);
              }
              if ("guilds" === id) {
                if (arg0 < 0) {
                  if (value < 0) {
                    const obj4 = ReanimatedRexport;
                    obj4.runOnJS(callback1)();
                  }
                }
                if (arg0 <= 0) {
                  if (IS_ANDROID) {
                    if (restingQuestDockMode.get() === QuestDockMode.CLOSED) {
                      const runOnJS = ReanimatedRexport.runOnJS;
                      ReanimatedRexport;
                      if (tmp6) {
                        runOnJS(callback)();
                      } else {
                        runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);
                      }
                    }
                  }
                }
                const _Math = Math;
                const absolute = Math.abs(value - arg0);
                if (arg0 > value) {
                  if (arg0 > 0) {
                    if (value > 0) {
                      if (restingQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                        const obj3 = ReanimatedRexport;
                        obj3.runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);
                      }
                    }
                  }
                }
                const tmp9 = arg0 < value && obj.get() === tmp.CLOSED && absolute >= closure_5;
                if (tmp9) {
                  const obj2 = ReanimatedRexport;
                  obj2.runOnJS(callback)();
                }
              }
            }
          }
        }
      }
    }
  }
  let obj5 = { isScrollHandlerEnabled: sharedValue1, restingQuestDockMode, QuestDockMode, lastContentOffsetY: sharedValue, lastScrollEventSourceId, id, runOnJS: id(setRestingQuestDockMode[7]).runOnJS, cancelReopenQuestDock: callback1, IS_ANDROID, scheduleReopenQuestDock, setRestingQuestDockMode, QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: scheduleReopenQuestDock };
  T.__closure = obj5;
  T.__workletHash = 9824540806898;
  T.__initData = __initData3;
  const items2 = [id, sharedValue, lastScrollEventSourceId, restingQuestDockMode, scheduleReopenQuestDock, setRestingQuestDockMode, callback1, sharedValue1];
  return restingQuestDockMode.useCallback(T, items2);
};
