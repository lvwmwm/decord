// Module ID: 14672
// Function ID: 110668
// Name: items
// Dependencies: []
// Exports: useHomeDrawerPeekHint

// Module 14672 (items)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const ME = arg1(dependencyMap[4]).ME;
const ContentDismissActionType = arg1(dependencyMap[5]).ContentDismissActionType;
const Easing = arg1(dependencyMap[6]).Easing;
let closure_8 = Easing.inOut(arg1(dependencyMap[6]).Easing.cubic);
let closure_9 = [];
const items = [arg1(dependencyMap[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX];
let closure_11 = { code: "function useHomeDrawerPeekHintTsx1(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}" };
let closure_12 = { code: "function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}" };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/home_drawer/native/useHomeDrawerPeekHint.tsx");

export const PEEK_HINT_DISTANCE = 40;
export const useHomeDrawerPeekHint = function useHomeDrawerPeekHint(enablePeekHint, sharedValue2) {
  let tmp = enablePeekHint;
  const tmp2 = callback2();
  const panelX = tmp2.panelX;
  const dependencyMap = panelX;
  const gestureState = tmp2.gestureState;
  let callback = gestureState;
  const lastInteractionAt = tmp2.lastInteractionAt;
  const React = lastInteractionAt;
  const isPanelTouchActive = tmp2.isPanelTouchActive;
  let closure_4 = isPanelTouchActive;
  const noteInteraction = tmp2.noteInteraction;
  let callback2 = noteInteraction;
  let obj = sharedValue2(dependencyMap[8]);
  const isFocused = obj.useIsFocused();
  const drawerOpen = sharedValue2(dependencyMap[9]).useDrawerOpen(enablePeekHint);
  const ME = drawerOpen;
  const obj2 = sharedValue2(dependencyMap[9]);
  let items = [closure_4];
  const stateFromStores = sharedValue2(dependencyMap[10]).useStateFromStores(items, () => isPanelTouchActive.useReducedMotion);
  const obj3 = sharedValue2(dependencyMap[10]);
  const first = callback(sharedValue2(dependencyMap[11]).useGuildsRouteGuildAndChannelId(), 1)[0];
  const obj4 = sharedValue2(dependencyMap[11]);
  const obj5 = sharedValue2(dependencyMap[12]);
  if (enablePeekHint) {
    tmp = isFocused;
  }
  if (tmp) {
    tmp = null != first;
  }
  if (tmp) {
    tmp = first !== ME;
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
  let closure_8 = React.useRef(false);
  const tmp10 = callback(React.useState(false), 2);
  const first1 = tmp10[0];
  let closure_9 = first1;
  items = tmp12;
  let tmp13 = first1;
  if (first1) {
    tmp13 = !tmp;
  }
  if (tmp13) {
    tmp12(false);
  }
  sharedValue2(dependencyMap[13]);
  if (first1) {
    if (tmp) {
      let tmp17 = items;
    }
    const tmp19 = callback(tmp16(tmp17, undefined, true), 2);
    let closure_11 = tmp20;
    let closure_12 = React.useRef(null);
    let closure_13 = React.useRef(null);
    let closure_14 = React.useRef(false);
    let closure_15 = React.useRef(null);
    const items1 = [sharedValue2];
    callback = React.useCallback(() => {
      if (null != closure_12.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_12.current);
        closure_12.current = null;
      }
      closure_14.current = true;
      let obj = arg1(panelX[14]);
      obj = { duration: 1500, easing: closure_8 };
      const result = arg1.set(obj.withTiming(40, obj));
      closure_13.current = setTimeout(() => {
        closure_13.current = null;
        closure_14.current = false;
        const result = lib.set(lib(closure_1[15]).withSpring(0, lib(closure_1[16]).HOME_DRAWER_FLING_PHYSICS));
        if (null != ref.current) {
          ref.current(constants.AUTO_DISMISS);
        }
        callback(false);
      }, 2500);
    }, items1);
    const tmp26 = tmp19[0] === sharedValue2(dependencyMap[7]).DismissibleContent.HOME_DRAWER_SWIPE_PEEK_NUX;
    const items2 = [tmp26, callback, tmp19[1]];
    const effect = React.useEffect(() => {
      let tmp = tmp26;
      if (tmp26) {
        tmp = !ref3.current;
      }
      if (tmp) {
        closure_15.current = tmp20;
        callback();
      }
    }, items2);
    const items3 = [sharedValue2];
    const callback1 = React.useCallback(() => {
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
        const result = arg1.set(arg1(panelX[15]).withSpring(0, arg1(panelX[16]).HOME_DRAWER_FLING_PHYSICS));
        const obj = arg1(panelX[15]);
      }
    }, items3);
    const items4 = [tmp, first1, noteInteraction, lastInteractionAt, isPanelTouchActive];
    const effect1 = React.useEffect(() => {
      if (tmp) {
        if (!first1) {
          if (!ref.current) {
            noteInteraction();
            const _setTimeout = setTimeout;
            function checkIdle() {
              closure_12.current = null;
              let num = 2000;
              const diff = 2000 - (Date.now() - ref.current);
              if (!closure_4.get()) {
                if (diff <= 0) {
                  callback(true);
                }
              }
              if (diff > 0) {
                num = diff;
              }
              closure_12.current = setTimeout(checkIdle, num);
            }
            const arg1 = checkIdle;
            closure_12.current = setTimeout(checkIdle, 2000);
            return () => {
              if (null != ref2.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref2.current);
                ref2.current = null;
              }
            };
          }
        }
        const tmp = first1;
      }
    }, items4);
    const items5 = [drawerOpen, callback1];
    const effect2 = React.useEffect(() => {
      if (drawerOpen) {
        closure_8.current = true;
        callback1();
      }
    }, items5);
    const items6 = [tmp, callback1];
    const effect3 = React.useEffect(() => {
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
    callback2 = React.useCallback(() => {
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
          tmp3 = sharedValue2;
          tmp4 = panelX;
          num = 6;
          obj = sharedValue2(panelX[6]);
          tmp5 = useEffect;
          tmp6 = obj.runOnJS(useEffect)();
        }
        return;
      }
    }
    obj = { isPeekGranted: tmp26, runOnJS: sharedValue2(dependencyMap[6]).runOnJS, handleDrawerDragged: callback2 };
    Q.__closure = obj;
    Q.__workletHash = 10054961085184;
    Q.__initData = closure_12;
    const animatedReaction = sharedValue2(dependencyMap[6]).useAnimatedReaction(V, Q);
  }
  tmp17 = closure_9;
};
