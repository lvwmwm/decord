// Module ID: 16512
// Function ID: 16513
// Name: QuestDockExternalCoordinationContext
// Dependencies: [19, 16506, 6745, 16508, 21, 1088, 7303, 1653, 16507, 9753, 1378, 16513, 1706, 2]
// Exports: useExternalScrollEventHandler

// Module 16512 (QuestDockExternalCoordinationContext)
import Fragment from "Fragment" /* 21 */;
import DurationsDefault from "Durations" /* 1088 */;
import QuestActionCreators from "QuestActionCreators" /* 9753 */;
import QuestDockConstants from "QuestDockConstants" /* 16508 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16506 */;
import QuestConstants from "QuestConstants" /* 6745 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7303 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let QuestDockMode = QuestConstants.QuestDockMode;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
let closure_6 = QuestDockConstants.QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
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
let closure_10 = PlatformUtils.isAndroid();
let closure_11 = { code: "(function QuestDockExternalCoordinationContextTsx1(){let[restingQuestDockMode]=this.__closure;return restingQuestDockMode.get();})" };
let closure_12 = { code: "(function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){let[scheduleOnRN,cancelReopenQuestDock]=this.__closure;if(nextMode!==prevMode){scheduleOnRN(cancelReopenQuestDock);}})" };
let closure_13 = { code: "(function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){let[isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,scheduleOnRN,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,autoCloseEnabledSharedValue,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD]=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){scheduleOnRN(cancelReopenQuestDock);return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){scheduleOnRN(scheduleReopenQuestDock);}else{scheduleOnRN(setRestingQuestDockMode,QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(autoCloseEnabledSharedValue.get()&&isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){scheduleOnRN(setRestingQuestDockMode,QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){scheduleOnRN(scheduleReopenQuestDock);}})" };
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx");

export const QuestDockExternalCoordinationContext = context;
export const QuestDockExternalCoordinationContextProvider = memoResult;
export function useExternalScrollEventHandler(id) {
  let ref;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
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
  let tmp30;
  let tmp31;
  let tmp9;
  id = id.id;
  let autoCloseEnabled;
  let sharedValue2;
  const obj = autoCloseEnabled;
  context = autoCloseEnabled.useContext(context);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  const restingQuestDockMode = context.restingQuestDockMode;
  const lastScrollEventSourceId = context.lastScrollEventSourceId;
  const tmp2 = setRestingQuestDockMode;
  const MobileQuestDockClosedStateExperiment = setRestingQuestDockMode(restingQuestDockMode[11]).MobileQuestDockClosedStateExperiment;
  let obj2 = { location: sharedValue2.QUESTS_BAR_MOBILE };
  autoCloseEnabled = MobileQuestDockClosedStateExperiment.useConfig(obj2, { autoTrackExposure: false }).autoCloseEnabled;
  const obj3 = setRestingQuestDockMode(restingQuestDockMode[7]);
  const sharedValue = obj3.useSharedValue(autoCloseEnabled);
  const items = [autoCloseEnabled, sharedValue];
  const effect = autoCloseEnabled.useEffect(() => {
    const result = sharedValue.set(autoCloseEnabled);
  }, items);
  QuestDockMode = autoCloseEnabled.useRef(-1);
  const items1 = [setRestingQuestDockMode, restingQuestDockMode];
  const callback = autoCloseEnabled.useCallback(() => {
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
  }, items1);
  const callback1 = autoCloseEnabled.useCallback(() => {
    if (-1 !== ref.current) {
      const _window = window;
      window.clearTimeout(tmp.current);
    }
  }, []);
  const items2 = [closure_11, restingQuestDockMode];
  let c0;
  [tmp9, tmp10] = items2;
  const tmp8 = setRestingQuestDockMode(restingQuestDockMode[7]);
  class QuestDockExternalCoordinationContextTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items3 = [tmp10];
  QuestDockExternalCoordinationContextTsx1.__closure = items3;
  QuestDockExternalCoordinationContextTsx1.__workletHash = 4531016347305;
  QuestDockExternalCoordinationContextTsx1.__initData = tmp9;
  const items4 = [closure_12, , ];
  const useAnimatedReaction = tmp8.useAnimatedReaction;
  items4[1] = tmp2(restingQuestDockMode[12]).scheduleOnRN;
  items4[2] = callback1;
  c0 = undefined;
  let c1;
  [tmp11, tmp12, tmp13] = items4;
  class QuestDockExternalCoordinationContextTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1);
      }
    }
  }
  const items5 = [tmp12, tmp13];
  QuestDockExternalCoordinationContextTsx2.__closure = items5;
  QuestDockExternalCoordinationContextTsx2.__workletHash = 3450868736561;
  QuestDockExternalCoordinationContextTsx2.__initData = tmp11;
  const animatedReaction = useAnimatedReaction(QuestDockExternalCoordinationContextTsx1, QuestDockExternalCoordinationContextTsx2);
  const tmp2Result = tmp2(restingQuestDockMode[7]);
  const sharedValue1 = tmp2Result.useSharedValue(0);
  const tmp2Result2 = tmp2(restingQuestDockMode[7]);
  sharedValue2 = tmp2Result2.useSharedValue(false);
  const items6 = [sharedValue2];
  const effect1 = obj.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue2.set(true);
    }, SECOND);
    return () => {
      clearTimeout(closure_0);
    };
  }, items6);
  const items7 = [closure_13, sharedValue2, restingQuestDockMode, QuestDockMode, sharedValue1, lastScrollEventSourceId, id, , , , , , , ];
  const useCallback = obj.useCallback;
  items7[7] = tmp2(restingQuestDockMode[12]).scheduleOnRN;
  items7[8] = callback1;
  items7[9] = closure_10;
  items7[10] = callback;
  items7[11] = setRestingQuestDockMode;
  items7[12] = sharedValue;
  items7[13] = closure_6;
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
  let c12;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items7;
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
                const result1 = obj2.set(tmp31);
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
                if (_undefined7.get()) {
                  if (arg0 > value) {
                    if (arg0 > 0) {
                      if (value > 0) {
                        if (_undefined2.get() === _undefined3.COLLAPSED) {
                          _undefined6(c10, _undefined3.CLOSED);
                        }
                      }
                    }
                  }
                }
                const tmp10 = arg0 < value && obj.get() === tmp.CLOSED && absolute >= c12;
                if (tmp10) {
                  _undefined6(c9);
                }
              }
            }
          }
        }
      }
    }
  }
  const items8 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31];
  QuestDockExternalCoordinationContextTsx3.__closure = items8;
  QuestDockExternalCoordinationContextTsx3.__workletHash = 13582936980959;
  QuestDockExternalCoordinationContextTsx3.__initData = tmp18;
  const items9 = [id, sharedValue, sharedValue1, lastScrollEventSourceId, restingQuestDockMode, callback, setRestingQuestDockMode, callback1, sharedValue2];
  return useCallback(QuestDockExternalCoordinationContextTsx3, items9);
}
