// Module ID: 15657
// Function ID: 15658
// Name: useHomeDrawerPeekHint
// Dependencies: [32, 19, 4825, 15649, 1074, 2042, 4566, 2029, 1486, 15658, 504, 15651, 4654, 6806, 4837, 5280, 15655, 2]
// Exports: useHomeDrawerPeekHint

// Module 15657 (useHomeDrawerPeekHint)
import Constants from "Constants" /* 1074 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 15655 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import HomeDrawerStore from "HomeDrawerStore" /* 15649 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const ME = Constants.ME;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let c8 = 2000;
const Easing = ReanimatedRexport.Easing;
let closure_9 = Easing.inOut(ReanimatedRexport.Easing.cubic);
let closure_10 = [];
let items = [dismissible_content.DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let __initData = { code: "function useHomeDrawerPeekHintTsx1(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}" };
let __initData2 = { code: "function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}" };
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export const useHomeDrawerPeekHint = function useHomeDrawerPeekHint(enablePeekHint, sharedValue8) {
  let current;
  let easing;
  let noteInteraction;
  let ref2;
  let ref3;
  let tmp = enablePeekHint;
  _require = sharedValue8;
  let tmp2 = noteInteraction();
  const panelX = tmp2.panelX;
  const gestureState = tmp2.gestureState;
  const lastInteractionAt = tmp2.lastInteractionAt;
  const isPanelTouchActive = tmp2.isPanelTouchActive;
  noteInteraction = tmp2.noteInteraction;
  const tmp4 = panelX;
  let obj = require("Link");
  const isFocused = obj.useIsFocused();
  let obj2 = require("useDrawerState");
  const drawerOpen = obj2.useDrawerOpen(enablePeekHint);
  items = [isPanelTouchActive];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => isPanelTouchActive.useReducedMotion);
  const obj4 = require("useGuildsRouteGuildId");
  const first = gestureState(obj4.useGuildsRouteGuildAndChannelId(), 1)[0];
  const obj5 = require("DismissibleContentUnsafeUtils");
  const tmp10 = !obj5.useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX);
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
    tmp = tmp10;
  }
  let closure_7 = tmp;
  const ref = lastInteractionAt.useRef(false);
  const tmp8Result = gestureState(lastInteractionAt.useState(false), 2);
  const first1 = tmp8Result[0];
  closure_10 = tmp15;
  const tmp16 = first1 && !tmp;
  if (tmp16) {
    tmp8Result[1](false);
  }
  require("useSelectedDismissibleContent");
  if (first1) {
    let tmp20;
    if (tmp) {
      tmp20 = current;
    }
    const tmp8Result2 = gestureState(tmp19(tmp20, undefined, true), 2);
    current = tmp23;
    const first2 = tmp8Result2[0];
    __initData = obj6.useRef(null);
    __initData2 = obj6.useRef(null);
    const ref4 = obj6.useRef(false);
    const ref5 = obj6.useRef(null);
    const items1 = [sharedValue8];
    const callback = obj6.useCallback(() => {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      ref4.current = true;
      set = sharedValue8.set;
      let obj = timing;
      const obj2 = { duration: 1500, easing };
      let result = set(obj.withTiming(40, obj2));
      ref3.current = setTimeout(() => {
        ref3.current = null;
        ref4.current = false;
        set = closure_1_0.set;
        const obj = closure_0(panelX[15]);
        const result = set(obj.withSpring(0, closure_0(panelX[16]).HOME_DRAWER_FLING_PHYSICS));
        current = ref.current;
        if (current != null) {
          current(constants.AUTO_DISMISS);
        }
        closure_1_10(false);
      }, 2500);
    }, items1);
    const tmp26 = first2 === require("dismissible_content").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
    let closure_17 = tmp26;
    const items2 = [tmp26, callback, tmp8Result2[1]];
    const effect = obj6.useEffect(() => {
      const tmp = closure_17 && !ref4.current;
      if (tmp) {
        ref5.current = current;
        callback();
      }
    }, items2);
    const items3 = [sharedValue8];
    const callback1 = obj6.useCallback(() => {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      if (null != ref3.current) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(ref3.current);
        ref3.current = null;
      }
      if (ref4.current) {
        tmp7.current = false;
        set = sharedValue8.set;
        const obj = spring;
        const result = set(obj.withSpring(0, useHomeDrawerGesture.HOME_DRAWER_FLING_PHYSICS));
      }
    }, items3);
    const items4 = [tmp, first1, noteInteraction, lastInteractionAt, isPanelTouchActive];
    const effect1 = obj6.useEffect(() => {
      let tmp = closure_7;
      if (tmp) {
        let tmp2 = first1;
        if (!tmp2) {
          if (!ref.current) {
            noteInteraction();
            let tmp6 = ref;
            let _setTimeout = setTimeout;
            function checkIdle() {
              ref2.current = null;
              let diff = c8 - (Date.now() - lastInteractionAt.current);
              const tmp = ref2;
              const tmp2 = c8;
              if (!isPanelTouchActive.get()) {
                if (0 >= diff) {
                  closure_10(true);
                }
              }
              const _setTimeout = setTimeout;
              const tmp6 = checkIdle;
              if (0 >= diff) {
                diff = tmp2;
              }
              tmp.current = _setTimeout(tmp6, diff);
            }
            ref.current = setTimeout(checkIdle, ref);
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
            };
          }
        }
      }
    }, items4);
    const items5 = [drawerOpen, callback1];
    const effect2 = obj6.useEffect(() => {
      const tmp = drawerOpen;
      if (tmp) {
        ref.current = true;
        callback1();
      }
    }, items5);
    const items6 = [tmp, callback1];
    const effect3 = obj6.useEffect(() => {
      current = !closure_7 && ref4.current;
      if (current) {
        callback1();
        const current2 = ref5.current;
        if (current2 != null) {
          current2(ContentDismissActionType.AUTO_DISMISS);
        }
      }
    }, items6);
    const items7 = [callback1];
    const callback2 = obj6.useCallback(() => {
      callback1();
      current = ref5.current;
      if (current != null) {
        current(ContentDismissActionType.INDIRECT_ACTION);
      }
      closure_10(false);
    }, items7);
    const tmp3Result2 = require("ReanimatedRexport");
    class V {
      constructor() {
        const active = gestureState.get().active && panelX.get() > 8;
        return active;
      }
    }
    const obj7 = { gestureState, panelX, PEEK_HINT_DRAWER_DRAG_THRESHOLD: 8 };
    V.__closure = obj7;
    V.__workletHash = 15765003051494;
    V.__initData = __initData;
    class Q {
      constructor(arg0, arg1) {
        const tmp = closure_17 && null != arg1 && arg0 && !arg1;
        if (tmp) {
          const obj = ReanimatedRexport;
          obj.runOnJS(callback2)();
        }
      }
    }
    const useAnimatedReaction = tmp3Result2.useAnimatedReaction;
    Q.__closure = { isPeekGranted: tmp26, runOnJS: require("ReanimatedRexport").runOnJS, handleDrawerDragged: callback2 };
    Q.__workletHash = 10054961085184;
    Q.__initData = __initData2;
    const obj8 = { isPeekGranted: tmp26, runOnJS: require("ReanimatedRexport").runOnJS, handleDrawerDragged: callback2 };
    const animatedReaction = useAnimatedReaction(V, Q);
  }
};
