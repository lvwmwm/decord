// Module ID: 16436
// Function ID: 16437
// Name: useHomeDrawerPeekHint
// Dependencies: [32, 19, 5081, 16429, 1085, 2062, 4850, 2049, 558, 576, 1504, 16437, 504, 16431, 4938, 7099, 5093, 5378, 16434, 2]

// Module 16436 (useHomeDrawerPeekHint)
import Constants from "Constants" /* 1085 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import timing from "timing" /* 5093 */;
import spring from "spring" /* 5378 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16434 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16429 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, current, set;

const ME = Constants.ME;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let c8 = 2000;
const Easing = ReanimatedRexport.Easing;
let closure_9 = Easing.inOut(ReanimatedRexport.Easing.cubic);
let closure_10 = [];
let items = [dismissible_content.DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let __initData = { code: "function useHomeDrawerPeekHintTsx1(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}" };
let __initData2 = { code: "function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null){return;}if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}" };
let __initData3 = { code: "function useHomeDrawerPeekHintTsx3(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}" };
let __initData4 = { code: "function useHomeDrawerPeekHintTsx4(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHomeDrawerPeekHint(arg0, arg1) {
  let closure_0;
  let easing;
  let items;
  let noteInteraction;
  let panelX;
  let ref2;
  let ref3;
  let ref4;
  let tmp22;
  let tmp8;
  let tmp9;
  let tmp = arg0;
  _require = arg1;
  let tmp2 = _require;
  let obj = require("react");
  const cResult = obj.c(27);
  const tmp5 = noteInteraction();
  panelX = tmp5.panelX;
  const gestureState = tmp5.gestureState;
  const lastInteractionAt = tmp5.lastInteractionAt;
  const isPanelTouchActive = tmp5.isPanelTouchActive;
  noteInteraction = tmp5.noteInteraction;
  let obj2 = require("Link");
  const isFocused = obj2.useIsFocused();
  const obj3 = require("useDrawerState");
  const drawerOpen = obj3.useDrawerOpen(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [isPanelTouchActive];
    class T {
      constructor() {
        return isPanelTouchActive.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp8 = items;
    tmp9 = T;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmp2Result = tmp2(panelX[12]);
  const stateFromStores = tmp2Result.useStateFromStores(tmp8, tmp9);
  const tmp2Result5 = tmp2(panelX[13]);
  const first = gestureState(tmp2Result5.useGuildsRouteGuildAndChannelId(), 1)[0];
  const tmp2Result6 = tmp2(panelX[14]);
  const tmp14 = !tmp2Result6.useIsDismissibleContentDismissed_UNSAFE(tmp2(panelX[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX);
  if (tmp) {
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
    tmp = tmp14;
  }
  let closure_7 = tmp;
  const ref = lastInteractionAt.useRef(false);
  const tmp12Result = gestureState(lastInteractionAt.useState(false), 2);
  const first1 = tmp12Result[0];
  closure_10 = tmp19;
  const tmp20 = first1 && !tmp;
  if (tmp20) {
    tmp12Result[1](false);
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { bypassAutoDismiss: true };
    cResult[2] = obj4;
    tmp22 = obj4;
  } else {
    tmp22 = cResult[2];
  }
  tmp2(panelX[15]);
  if (first1) {
    let tmp25;
    let tmp30;
    if (tmp) {
      tmp25 = items;
    }
    const tmp12Result2 = gestureState(tmp24(tmp25, tmp22), 2);
    class T {
      constructor() {
        return isPanelTouchActive.useReducedMotion;
      }
    }
    const first2 = tmp12Result2[0];
    __initData = obj7.useRef(null);
    __initData2 = obj7.useRef(null);
    __initData3 = obj7.useRef(false);
    const ref5 = obj7.useRef(null);
    if (cResult[3] !== arg1) {
      const fn = function x() {
        if (null != ref2.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref2.current);
          ref2.current = null;
        }
        ref4.current = true;
        set = closure_0.set;
        let obj = timing;
        const obj2 = { duration: 1500, easing };
        let result = set(obj.withTiming(40, obj2));
        ref3.current = setTimeout(() => {
          ref3.current = null;
          ref4.current = false;
          set = closure_1_0.set;
          const obj = closure_0(panelX[17]);
          const result = set(obj.withSpring(0, closure_0(panelX[18]).HOME_DRAWER_FLING_PHYSICS));
          current = ref.current;
          if (current != null) {
            current(constants.AUTO_DISMISS);
          }
          closure_1_10(false);
        }, 2500);
      };
      cResult[3] = arg1;
      class T {
        constructor() {
          return isPanelTouchActive.useReducedMotion;
        }
      }
      cResult[4] = fn;
      tmp30 = fn;
    } else {
      tmp30 = cResult[4];
    }
    let closure_16 = tmp30;
    const tmp31 = first2 === tmp2(panelX[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
    let closure_17 = tmp31;
    if (cResult[5] === tmp31) {
      if (cResult[6] === tmp12Result2[1]) {
        let tmp32;
        let tmp33;
        let tmp35;
        if (cResult[7] === tmp30) {
          tmp32 = cResult[8];
          tmp33 = cResult[9];
        }
        const effect = obj7.useEffect(tmp32, tmp33);
        if (cResult[10] !== arg1) {
          function ee() {
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
              set = closure_0.set;
              const obj = spring;
              const result = set(obj.withSpring(0, useHomeDrawerGesture.HOME_DRAWER_FLING_PHYSICS));
            }
          }
          cResult[10] = arg1;
          class T {
            constructor() {
              return isPanelTouchActive.useReducedMotion;
            }
          }
          cResult[11] = ee;
          tmp35 = ee;
        } else {
          tmp35 = cResult[11];
        }
        class T {
          constructor() {
            return isPanelTouchActive.useReducedMotion;
          }
        }
        if (cResult[12] === tmp) {
          if (cResult[13] === isPanelTouchActive) {
            if (cResult[14] === lastInteractionAt) {
              if (cResult[15] === noteInteraction) {
                let tmp36;
                let tmp37;
                if (cResult[16] === first1) {
                  tmp36 = cResult[17];
                  tmp37 = cResult[18];
                }
                const effect1 = obj7.useEffect(tmp36, tmp37);
                if (cResult[19] === drawerOpen) {
                  let tmp39;
                  let tmp40;
                  if (cResult[20] === tmp35) {
                    tmp39 = cResult[21];
                    tmp40 = cResult[22];
                  }
                  const effect2 = obj7.useEffect(tmp40, tmp39);
                  if (cResult[23] === tmp) {
                    let tmp43;
                    let tmp44;
                    if (cResult[24] === tmp35) {
                      tmp43 = cResult[25];
                      tmp44 = cResult[26];
                    }
                    const effect3 = obj7.useEffect(tmp43, tmp44);
                    function handleDrawerDragged() {
                      closure_1_18();
                      current = ref5.current;
                      if (current != null) {
                        current(ContentDismissActionType.INDIRECT_ACTION);
                      }
                      closure_10(false);
                    }
                    class T {
                      constructor() {
                        return isPanelTouchActive.useReducedMotion;
                      }
                    }
                    function oe() {
                      const active = gestureState.get().active && panelX.get() > 8;
                      return active;
                    }
                    const obj5 = { gestureState, panelX, PEEK_HINT_DRAWER_DRAG_THRESHOLD: 8 };
                    oe.__closure = obj5;
                    oe.__workletHash = 15765003051494;
                    oe.__initData = __initData;
                    function _e(arg0, arg1) {
                      const tmp = closure_17 && null != arg1 && arg0 && !arg1;
                      if (tmp) {
                        const obj = ReanimatedRexport;
                        obj.runOnJS(closure_1_19)();
                      }
                    }
                    const tmp2Result8 = tmp2(panelX[6]);
                    class Z {
                      constructor() {
                        const tmp = closure_17 && !ref4.current;
                        if (tmp) {
                          ref5.current = items;
                          closure_16();
                        }
                      }
                    }
                    tmp49[0] = tmp31;
                    const useAnimatedReaction = tmp2Result8.useAnimatedReaction;
                    tmp49[1] = tmp2(panelX[6]).runOnJS;
                    tmp49[2] = handleDrawerDragged;
                    _e.__closure = tmp49;
                    _e.__workletHash = 7455736075430;
                    _e.__initData = __initData2;
                    const animatedReaction = useAnimatedReaction(oe, _e);
                  }
                  class T {
                    constructor() {
                      return isPanelTouchActive.useReducedMotion;
                    }
                  }
                  const items1 = [tmp, tmp35];
                  cResult[23] = tmp;
                  cResult[24] = tmp35;
                  cResult[25] = tmp45;
                  cResult[26] = items1;
                  class Z {
                    constructor() {
                      const tmp = closure_17 && !ref4.current;
                      if (tmp) {
                        ref5.current = items;
                        closure_16();
                      }
                    }
                  }
                  tmp43 = tmp45;
                }
                class T {
                  constructor() {
                    return isPanelTouchActive.useReducedMotion;
                  }
                }
                const items2 = [drawerOpen, tmp35];
                cResult[19] = drawerOpen;
                cResult[20] = tmp35;
                cResult[21] = items2;
                cResult[22] = tmp41;
                class Z {
                  constructor() {
                    const tmp = closure_17 && !ref4.current;
                    if (tmp) {
                      ref5.current = items;
                      closure_16();
                    }
                  }
                }
                tmp39 = items2;
              }
            }
          }
        }
        function ne() {
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
        }
        const items3 = [tmp, first1, noteInteraction, lastInteractionAt, isPanelTouchActive];
        cResult[12] = tmp;
        class Z {
          constructor() {
            const tmp = closure_17 && !ref4.current;
            if (tmp) {
              ref5.current = items;
              closure_16();
            }
          }
        }
        cResult[14] = lastInteractionAt;
        cResult[15] = noteInteraction;
        cResult[16] = first1;
        cResult[17] = ne;
        cResult[18] = items3;
        tmp37 = items3;
        tmp36 = ne;
      }
    }
    class Z {
      constructor() {
        const tmp = closure_17 && !ref4.current;
        if (tmp) {
          ref5.current = items;
          closure_16();
        }
      }
    }
    const items4 = [tmp31, tmp30, tmp12Result2[1]];
    cResult[5] = tmp31;
    cResult[6] = tmp12Result2[1];
    cResult[7] = tmp30;
    cResult[8] = Z;
    cResult[9] = items4;
    tmp33 = items4;
    tmp32 = Z;
  }
  tmp25 = closure_10;
}) : (function useHomeDrawerPeekHint(arg0, arg1) {
  let closure_0;
  let easing;
  let noteInteraction;
  let ref4;
  let ref5;
  let tmp = arg0;
  _require = arg1;
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
  const drawerOpen = obj2.useDrawerOpen(arg0);
  const items = [isPanelTouchActive];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => isPanelTouchActive.useReducedMotion);
  const obj4 = require("useGuildsRouteGuildId");
  const first = gestureState(obj4.useGuildsRouteGuildAndChannelId(), 1)[0];
  const obj5 = require("DismissibleContentUnsafeUtils");
  const tmp10 = !obj5.useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX);
  if (arg0) {
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
    const tmp8Result2 = gestureState(tmp19(tmp20, { bypassAutoDismiss: true }), 2);
    current = tmp23;
    const first2 = tmp8Result2[0];
    const ref2 = obj6.useRef(null);
    const ref3 = obj6.useRef(null);
    __initData3 = obj6.useRef(false);
    __initData4 = obj6.useRef(null);
    const items1 = [arg1];
    const callback = obj6.useCallback(() => {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      ref4.current = true;
      set = closure_0.set;
      let obj = timing;
      const obj2 = { duration: 1500, easing };
      let result = set(obj.withTiming(40, obj2));
      ref3.current = setTimeout(() => {
        ref3.current = null;
        ref4.current = false;
        set = closure_1_0.set;
        const obj = closure_0(panelX[17]);
        const result = set(obj.withSpring(0, closure_0(panelX[18]).HOME_DRAWER_FLING_PHYSICS));
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
    const items3 = [arg1];
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
        set = closure_0.set;
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
    V.__workletHash = 13898630050852;
    V.__initData = __initData3;
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
    Q.__workletHash = 10590232595782;
    Q.__initData = __initData4;
    const obj8 = { isPeekGranted: tmp26, runOnJS: require("ReanimatedRexport").runOnJS, handleDrawerDragged: callback2 };
    const animatedReaction = useAnimatedReaction(V, Q);
  }
  tmp20 = closure_10;
});
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export const useHomeDrawerPeekHint = tmp2;
