// Module ID: 17349
// Function ID: 17350
// Name: QuestDockExternalCoordinationContext
// Dependencies: [19, 17343, 6919, 17345, 21, 1089, 7381, 1652, 17344, 9838, 1377, 1705, 2]
// Exports: useExternalScrollEventHandler

// Module 17349 (QuestDockExternalCoordinationContext)
import Fragment from "Fragment" /* 21 */;
import DurationsDefault from "Durations" /* 1089 */;
import QuestConstants from "QuestConstants" /* 6919 */;
import QuestActionCreators from "QuestActionCreators" /* 9838 */;
import QuestDockConstants from "QuestDockConstants" /* 17345 */;
import react_mod from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17343 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7381 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let react = react_mod;
const QuestDockMode = QuestConstants.QuestDockMode;
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
let closure_9 = PlatformUtils.isAndroid();
let closure_10 = { code: "(function QuestDockExternalCoordinationContextTsx1(){let[restingQuestDockMode]=this.__closure;return restingQuestDockMode.get();})" };
let closure_11 = { code: "(function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){let[scheduleOnRN,cancelReopenQuestDock]=this.__closure;if(nextMode!==prevMode){scheduleOnRN(cancelReopenQuestDock);}})" };
let closure_12 = { code: "(function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){let[isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,scheduleOnRN,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD]=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){scheduleOnRN(cancelReopenQuestDock);return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){scheduleOnRN(scheduleReopenQuestDock);}else{scheduleOnRN(setRestingQuestDockMode,QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){scheduleOnRN(setRestingQuestDockMode,QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){scheduleOnRN(scheduleReopenQuestDock);}})" };
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx");

export const QuestDockExternalCoordinationContext = context;
export const QuestDockExternalCoordinationContextProvider = memoResult;
export function useExternalScrollEventHandler(id) {
  let ref;
  let tmp10;
  let tmp11;
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
  let tmp7;
  let tmp8;
  let tmp9;
  id = id.id;
  react = undefined;
  let sharedValue1;
  const obj = react;
  context = react.useContext(context);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  const restingQuestDockMode = context.restingQuestDockMode;
  const lastScrollEventSourceId = context.lastScrollEventSourceId;
  react = react.useRef(-1);
  const items = [setRestingQuestDockMode, restingQuestDockMode];
  const callback = react.useCallback(() => {
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
  const callback1 = react.useCallback(() => {
    if (-1 !== ref.current) {
      const _window = window;
      window.clearTimeout(tmp.current);
    }
  }, []);
  const tmp6 = setRestingQuestDockMode(restingQuestDockMode[7]);
  const items1 = [closure_10, restingQuestDockMode];
  let c0;
  [tmp7, tmp8] = items1;
  class QuestDockExternalCoordinationContextTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items2 = [tmp8];
  QuestDockExternalCoordinationContextTsx1.__closure = items2;
  QuestDockExternalCoordinationContextTsx1.__workletHash = 4531016347305;
  QuestDockExternalCoordinationContextTsx1.__initData = tmp7;
  const items3 = [closure_11, , ];
  const useAnimatedReaction = tmp6.useAnimatedReaction;
  items3[1] = setRestingQuestDockMode(restingQuestDockMode[11]).scheduleOnRN;
  items3[2] = callback1;
  c0 = undefined;
  let c1;
  [tmp9, tmp10, tmp11] = items3;
  class QuestDockExternalCoordinationContextTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1);
      }
    }
  }
  const items4 = [tmp10, tmp11];
  QuestDockExternalCoordinationContextTsx2.__closure = items4;
  QuestDockExternalCoordinationContextTsx2.__workletHash = 3450868736561;
  QuestDockExternalCoordinationContextTsx2.__initData = tmp9;
  const animatedReaction = useAnimatedReaction(QuestDockExternalCoordinationContextTsx1, QuestDockExternalCoordinationContextTsx2);
  const tmp4Result = setRestingQuestDockMode(restingQuestDockMode[7]);
  const sharedValue = tmp4Result.useSharedValue(0);
  const tmp4Result2 = setRestingQuestDockMode(restingQuestDockMode[7]);
  sharedValue1 = tmp4Result2.useSharedValue(false);
  const items5 = [sharedValue1];
  const effect = obj.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue1.set(true);
    }, SECOND);
    return () => {
      clearTimeout(closure_0);
    };
  }, items5);
  const items6 = [closure_12, sharedValue1, restingQuestDockMode, QuestDockMode, sharedValue, lastScrollEventSourceId, id, , , , , , ];
  const useCallback = obj.useCallback;
  items6[7] = setRestingQuestDockMode(restingQuestDockMode[11]).scheduleOnRN;
  items6[8] = callback1;
  items6[9] = closure_9;
  items6[10] = callback;
  items6[11] = setRestingQuestDockMode;
  items6[12] = closure_5;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items6;
  class QuestDockExternalCoordinationContextTsx3 {
    constructor(arg0, arg1, arg2) {
      if (_undefined.get()) {
        if (_undefined2.get() !== _undefined3.SOFT_DISMISSED) {
          if (_undefined2.get() !== _undefined3.EXPANDED) {
            const value = _undefined4.get();
            const result = _undefined4.set(arg0);
            if (value !== arg0) {
              const value2 = _undefined5.get();
              const obj2 = _undefined5;
              if ("guilds" !== c5) {
                const result1 = obj2.set(tmp30);
              }
              if ("guilds" === c5) {
                if (arg0 < 0) {
                  if (value < 0) {
                    _undefined6(c7);
                  }
                }
                if (arg0 <= 0) {
                  if (c8) {
                    if (_undefined2.get() === _undefined3.CLOSED) {
                      if (tmp6) {
                        _undefined6(c9);
                      } else {
                        _undefined6(c10, _undefined3.COLLAPSED);
                      }
                    }
                  }
                }
                const _Math = Math;
                const absolute = Math.abs(value - arg0);
                if (arg0 > value) {
                  if (arg0 > 0) {
                    if (value > 0) {
                      if (_undefined2.get() === _undefined3.COLLAPSED) {
                        _undefined6(c10, _undefined3.CLOSED);
                      }
                    }
                  }
                }
                const tmp9 = arg0 < value && obj.get() === tmp.CLOSED && absolute >= c11;
                if (tmp9) {
                  _undefined6(c9);
                }
              }
            }
          }
        }
      }
    }
  }
  const items7 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  QuestDockExternalCoordinationContextTsx3.__closure = items7;
  QuestDockExternalCoordinationContextTsx3.__workletHash = 5916985737194;
  QuestDockExternalCoordinationContextTsx3.__initData = tmp16;
  const items8 = [id, sharedValue, lastScrollEventSourceId, restingQuestDockMode, callback, setRestingQuestDockMode, callback1, sharedValue1];
  return useCallback(QuestDockExternalCoordinationContextTsx3, items8);
}
