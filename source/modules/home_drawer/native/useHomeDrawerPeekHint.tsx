// Module ID: 14805
// Function ID: 112933
// Name: items
// Dependencies: [57, 31, 4122, 14803, 653, 1345, 3991, 1334, 1457, 14806, 566, 14801, 3946, 5802, 4131, 4542, 14802, 2]
// Exports: useHomeDrawerPeekHint

// Module 14805 (items)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import computeMaxX from "computeMaxX";
import { ME } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { Easing } from "module_3991";

const require = arg1;
let closure_8 = Easing.inOut(require("module_3991").Easing.cubic);
let closure_9 = [];
let items = [require("DismissibleContent").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let closure_11 = { code: "function useHomeDrawerPeekHintTsx1(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}" };
let closure_12 = { code: "function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export const useHomeDrawerPeekHint = function useHomeDrawerPeekHint(enablePeekHint, sharedValue2) {
  let tmp = enablePeekHint;
  const _require = sharedValue2;
  const tmp2 = noteInteraction();
  const panelX = tmp2.panelX;
  const gestureState = tmp2.gestureState;
  const lastInteractionAt = tmp2.lastInteractionAt;
  const isPanelTouchActive = tmp2.isPanelTouchActive;
  noteInteraction = tmp2.noteInteraction;
  let obj = _require(panelX[8]);
  const isFocused = obj.useIsFocused();
  const drawerOpen = _require(panelX[9]).useDrawerOpen(enablePeekHint);
  const obj2 = _require(panelX[9]);
  let items = [isPanelTouchActive];
  const stateFromStores = _require(panelX[10]).useStateFromStores(items, () => isPanelTouchActive.useReducedMotion);
  const obj3 = _require(panelX[10]);
  const first = gestureState(_require(panelX[11]).useGuildsRouteGuildAndChannelId(), 1)[0];
  const obj4 = _require(panelX[11]);
  const obj5 = _require(panelX[12]);
  if (enablePeekHint) {
    tmp = isFocused;
  }
  if (tmp) {
    tmp = null != first;
  }
  if (tmp) {
    tmp = first !== drawerOpen;
  }
  if (tmp) {
    tmp = !drawerOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  if (tmp) {
    tmp = tmp7;
  }
  const ContentDismissActionType = tmp;
  let closure_8 = lastInteractionAt.useRef(false);
  const tmp10 = gestureState(lastInteractionAt.useState(false), 2);
  const first1 = tmp10[0];
  items = tmp12;
  let tmp13 = first1;
  if (first1) {
    tmp13 = !tmp;
  }
  if (tmp13) {
    tmp12(false);
  }
  _require(panelX[13]);
  if (first1) {
    if (tmp) {
      let tmp17 = items;
    }
    const tmp19 = gestureState(tmp16(tmp17, undefined, true), 2);
    let closure_11 = tmp20;
    let closure_12 = lastInteractionAt.useRef(null);
    let closure_13 = lastInteractionAt.useRef(null);
    let closure_14 = lastInteractionAt.useRef(false);
    let closure_15 = lastInteractionAt.useRef(null);
    const items1 = [sharedValue2];
    const callback = lastInteractionAt.useCallback(() => {
      if (null != closure_12.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_12.current);
        closure_12.current = null;
      }
      closure_14.current = true;
      let obj = sharedValue2(panelX[14]);
      obj = { duration: 1500, easing: closure_8 };
      let result = sharedValue2.set(obj.withTiming(40, obj));
      closure_13.current = setTimeout(() => {
        outer1_13.current = null;
        outer1_14.current = false;
        const result = outer1_0.set(callback(panelX[15]).withSpring(0, callback(panelX[16]).HOME_DRAWER_FLING_PHYSICS));
        if (null != outer1_15.current) {
          outer1_15.current(constants.AUTO_DISMISS);
        }
        outer1_10(false);
      }, 2500);
    }, items1);
    const tmp26 = tmp19[0] === _require(panelX[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
    let closure_17 = tmp26;
    const items2 = [tmp26, callback, tmp19[1]];
    const effect = lastInteractionAt.useEffect(() => {
      let tmp = closure_17;
      if (closure_17) {
        tmp = !ref3.current;
      }
      if (tmp) {
        closure_15.current = closure_11;
        callback();
      }
    }, items2);
    const items3 = [sharedValue2];
    const callback1 = lastInteractionAt.useCallback(() => {
      if (null != closure_12.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_12.current);
        closure_12.current = null;
      }
      if (null != ref2.current) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      if (ref3.current) {
        ref3.current = false;
        const result = sharedValue2.set(sharedValue2(panelX[15]).withSpring(0, sharedValue2(panelX[16]).HOME_DRAWER_FLING_PHYSICS));
        const obj = sharedValue2(panelX[15]);
      }
    }, items3);
    const items4 = [tmp, first1, noteInteraction, lastInteractionAt, isPanelTouchActive];
    const effect1 = lastInteractionAt.useEffect(() => {
      if (closure_7) {
        if (!first1) {
          if (!ref.current) {
            noteInteraction();
            const _setTimeout = setTimeout;
            function checkIdle() {
              outer1_12.current = null;
              let num = 2000;
              const diff = 2000 - (Date.now() - outer1_3.current);
              if (!outer1_4.get()) {
                if (diff <= 0) {
                  outer1_10(true);
                }
              }
              if (diff > 0) {
                num = diff;
              }
              outer1_12.current = setTimeout(checkIdle, num);
            }
            closure_12.current = setTimeout(checkIdle, 2000);
            return () => {
              if (null != outer1_12.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(outer1_12.current);
                outer1_12.current = null;
              }
            };
          }
        }
      }
    }, items4);
    const items5 = [drawerOpen, callback1];
    const effect2 = lastInteractionAt.useEffect(() => {
      if (drawerOpen) {
        closure_8.current = true;
        callback1();
      }
    }, items5);
    const items6 = [tmp, callback1];
    const effect3 = lastInteractionAt.useEffect(() => {
      let current = !tmp;
      if (current) {
        current = ref3.current;
      }
      if (current) {
        callback1();
        if (null != closure_15.current) {
          closure_15.current(tmp.AUTO_DISMISS);
        }
      }
    }, items6);
    const items7 = [callback1];
    const callback2 = lastInteractionAt.useCallback(() => {
      const tmp = callback1();
      if (null != closure_15.current) {
        closure_15.current(tmp.INDIRECT_ACTION);
      }
      tmp12(false);
    }, items7);
    class V {
      constructor() {
        active = gestureState.get().active;
        if (active) {
          tmp = panelX;
          num = 8;
          active = panelX.get() > 8;
        }
        return active;
      }
    }
    obj = { gestureState, panelX, PEEK_HINT_DRAWER_DRAG_THRESHOLD: 8 };
    V.__closure = obj;
    V.__workletHash = 15765003051494;
    V.__initData = closure_11;
    class Q {
      constructor(arg0, arg1) {
        tmp = DismissibleContent;
        if (DismissibleContent) {
          tmp2 = null;
          tmp = null != sharedValue2;
        }
        if (tmp) {
          tmp = enablePeekHint;
        }
        if (tmp) {
          tmp = !sharedValue2;
        }
        if (tmp) {
          tmp3 = closure_0;
          tmp4 = panelX;
          num = 6;
          obj = closure_0(panelX[6]);
          tmp5 = useEffect;
          tmp6 = obj.runOnJS(useEffect)();
        }
        return;
      }
    }
    obj = { isPeekGranted: tmp26, runOnJS: _require(panelX[6]).runOnJS, handleDrawerDragged: callback2 };
    Q.__closure = obj;
    Q.__workletHash = 10054961085184;
    Q.__initData = closure_12;
    const animatedReaction = _require(panelX[6]).useAnimatedReaction(V, Q);
  }
  tmp17 = first1;
};
