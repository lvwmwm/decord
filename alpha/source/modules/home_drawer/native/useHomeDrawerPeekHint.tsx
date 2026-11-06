// Module ID: 18359
// Function ID: 18360
// Name: useHomeDrawerPeekHint
// Dependencies: [32, 19, 5171, 18351, 1072, 5016, 1652, 5003, 1500, 18360, 504, 18353, 5200, 7664, 5400, 5791, 18357, 1705, 2]
// Exports: useHomeDrawerPeekHint

// Module 18359 (useHomeDrawerPeekHint)
import Constants from "Constants" /* 1072 */;
import _mod1652 from "module_1652" /* 1652 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import timing_timing from "timing/timing" /* 5400 */;
import spring_spring from "spring/spring" /* 5791 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18357 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import HomeDrawerStore_mod from "HomeDrawerStore" /* 18351 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let HomeDrawerStore = HomeDrawerStore_mod;
const ME = Constants.ME;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let c8 = 2000;
const Easing = _mod1652.Easing;
let closure_9 = Easing.inOut(_mod1652.Easing.cubic);
let closure_10 = [];
let items = [dismissible_content.DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let closure_12 = { code: "(function useHomeDrawerPeekHintTsx1(){let[gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD]=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;})" };
let closure_13 = { code: "(function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){let[isPeekGranted,scheduleOnRN,handleDrawerDragged]=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){scheduleOnRN(handleDrawerDragged);}})" };
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export function useHomeDrawerPeekHint(enablePeekHint, sharedValue8) {
  let closure_5;
  let gestureState;
  let panelX;
  let ref;
  let ref2;
  let ref3;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp = enablePeekHint;
  _require = sharedValue8;
  let tmp2 = HomeDrawerStore();
  const lastInteractionAt = tmp2.lastInteractionAt;
  const isPanelTouchActive = tmp2.isPanelTouchActive;
  const noteInteraction = tmp2.noteInteraction;
  const tmp4 = lastInteractionAt;
  ({ panelX, gestureState } = tmp2);
  let obj = require("Link");
  const isFocused = obj.useIsFocused();
  let obj2 = require("useDrawerState");
  const drawerOpen = obj2.useDrawerOpen(enablePeekHint);
  items = [drawerOpen];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => drawerOpen.useReducedMotion);
  const obj4 = require("useGuildsRouteGuildId");
  const first = isPanelTouchActive(obj4.useGuildsRouteGuildAndChannelId(), 1)[0];
  const obj5 = require("DismissibleContentUnsafeUtils");
  const tmp10 = !obj5.useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX);
  if (enablePeekHint) {
    tmp = isFocused;
  }
  if (tmp) {
    tmp = null != first;
  }
  if (tmp) {
    tmp = first !== ref;
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
  HomeDrawerStore = tmp;
  ref = noteInteraction.useRef(false);
  const tmp8Result = isPanelTouchActive(noteInteraction.useState(false), 2);
  const first1 = tmp8Result[0];
  let closure_8 = tmp15;
  const tmp16 = first1 && !tmp;
  if (tmp16) {
    tmp8Result[1](false);
  }
  require("useSelectedDismissibleContent");
  if (first1) {
    let tmp20;
    if (tmp) {
      tmp20 = ref3;
    }
    const tmp8Result2 = isPanelTouchActive(tmp19(tmp20, { bypassAutoDismiss: true }), 2);
    closure_9 = tmp23;
    const first2 = tmp8Result2[0];
    ref2 = obj6.useRef(null);
    ref3 = obj6.useRef(null);
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
      let obj = timing_timing;
      const obj2 = { duration: 1500, easing };
      let result = set(obj.withTiming(40, obj2));
      ref3.current = setTimeout(() => {
        ref3.current = null;
        ref4.current = false;
        set = closure_1_0.set;
        const obj = closure_0(lastInteractionAt[15]);
        const result = set(obj.withSpring(0, closure_0(lastInteractionAt[16]).HOME_DRAWER_FLING_PHYSICS));
        const current = ref.current;
        if (current != null) {
          current(first1.AUTO_DISMISS);
        }
        closure_1_8(false);
      }, 2500);
    }, items1);
    const tmp26 = first2 === require("dismissible_content").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
    let closure_15 = tmp26;
    const items2 = [tmp26, callback, tmp8Result2[1]];
    const effect = obj6.useEffect(() => {
      const tmp = closure_15 && !ref4.current;
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
        const obj = spring_spring;
        const result = set(obj.withSpring(0, useHomeDrawerGesture.HOME_DRAWER_FLING_PHYSICS));
      }
    }, items3);
    const items4 = [tmp, first1, noteInteraction, lastInteractionAt, isPanelTouchActive];
    const effect1 = obj6.useEffect(() => {
      let tmp = closure_5;
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
                  closure_8(true);
                }
              }
              const _setTimeout = setTimeout;
              const tmp6 = checkIdle;
              if (0 >= diff) {
                diff = tmp2;
              }
              tmp.current = _setTimeout(tmp6, diff);
            }
            ref.current = setTimeout(checkIdle, closure_8);
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
      const current = !closure_5 && ref4.current;
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
      const current = ref5.current;
      if (current != null) {
        current(ContentDismissActionType.INDIRECT_ACTION);
      }
      closure_8(false);
    }, items7);
    const items8 = [ref4, gestureState, panelX, ];
    items8[3] = 8;
    [tmp36, tmp37, tmp38, tmp39] = items8;
    function useHomeDrawerPeekHintTsx1() {
      const active = _undefined.get().active && _undefined2.get() > c2;
      return active;
    }
    const items9 = [tmp37, tmp38, tmp39];
    useHomeDrawerPeekHintTsx1.__closure = items9;
    useHomeDrawerPeekHintTsx1.__workletHash = 12843932440959;
    useHomeDrawerPeekHintTsx1.__initData = tmp36;
    const items10 = [ref5, tmp26, , ];
    const useAnimatedReaction = tmp3(tmp4[6]).useAnimatedReaction;
    require("module_1652");
    items10[2] = require("module_1705").scheduleOnRN;
    items10[3] = callback2;
    let c0;
    let c1;
    let c2;
    [tmp42, tmp43, tmp44, tmp45] = items10;
    function useHomeDrawerPeekHintTsx2(arg0, arg1) {
      const tmp = c0 && null != arg1 && arg0 && !arg1;
      if (tmp) {
        _undefined(c2);
      }
    }
    const items11 = [tmp43, tmp44, tmp45];
    useHomeDrawerPeekHintTsx2.__closure = items11;
    useHomeDrawerPeekHintTsx2.__workletHash = 16017025377880;
    useHomeDrawerPeekHintTsx2.__initData = tmp42;
    const animatedReaction = useAnimatedReaction(useHomeDrawerPeekHintTsx1, useHomeDrawerPeekHintTsx2);
  }
  tmp20 = ref2;
}
