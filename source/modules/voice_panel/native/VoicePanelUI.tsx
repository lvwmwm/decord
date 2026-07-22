// Module ID: 15658
// Function ID: 119568
// Name: NOOP
// Dependencies: []

// Module 15658 (NOOP)
let DEFAULT_BORDER_RADIUS;
let DRAWER_SPRING_PHYSICS;
let LAYOUT_PHYSICS;
let MODE_CHANGE_PHYSICS;
function NOOP() {

}
function log(arg0) {
  const items = [...HermesBuiltin.copyRestArgs()];
  importDefaultResult.log.apply(items);
}
function AnimatedWrapper(children) {
  let wrapperRootStyles;
  let wrapperSurfaceStyles;
  let wrapperTransformStyles;
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = function useWrapperStyles(wrapperOffset) {
    let obj = wrapperOffset(tmp[27]);
    const height = obj.useGlobalStatusIndicatorState().height;
    const tmp = callback();
    const context = connected.useContext(height(tmp[17]));
    const wrapperDimensions = context.wrapperDimensions;
    const connected = context.connected;
    const controlsSpecs = context.controlsSpecs;
    const focused = context.focused;
    const mode = context.mode;
    const preJoinContentSize = context.preJoinContentSize;
    const safeArea = context.safeArea;
    const windowDimensions = context.windowDimensions;
    const useReducedMotion = context.useReducedMotion;
    let obj1 = wrapperOffset(tmp[15]);
    const fn = function o() {
      return controlsSpecs.get().height;
    };
    fn.__closure = { controlsSpecs };
    fn.__workletHash = 6243014585347;
    fn.__initData = closure_57;
    const derivedValue = obj1.useDerivedValue(fn);
    let obj2 = wrapperOffset(tmp[28]);
    const pIPState = obj2.usePIPState();
    let obj3 = wrapperOffset(tmp[15]);
    const fn2 = function l() {
      return { modeToSet: mode.get(), connected: connected.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: safeArea.get(), focused: focused.get(), pipState: pIPState, controlsHeight: derivedValue.get(), preJoinContentSize: preJoinContentSize.get(), globalStatusIndicatorHeight: height };
    };
    fn2.__closure = { mode, connected, windowDimensions, safeArea, focused, pipState: pIPState, controlsHeight: derivedValue, preJoinContentSize, globalStatusIndicatorHeight: height };
    fn2.__workletHash = 4592460925374;
    fn2.__initData = closure_58;
    const fn3 = function s(safeAreaState, windowHeight) {
      let connected;
      let drawerX;
      let drawerY;
      let modeToSet;
      let safeArea;
      let windowWidth;
      let obj = safeAreaState(tmp[20]);
      let tmp;
      if (null != windowHeight) {
        tmp = windowHeight;
      }
      if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
        ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = safeAreaState);
        if (modeToSet !== animatedStyle1.PIP) {
          let tmp7 = null == windowHeight;
          if (!tmp7) {
            tmp7 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
            const tmp8 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
          }
          const value = wrapperDimensions.get();
          ({ drawerX, drawerY } = value);
          const diff = windowHeight - tmp5;
          if (modeToSet === animatedStyle1.PANEL) {
            if (connected) {
              obj = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp7, mode: modeToSet };
              height(tmp[21])(wrapperDimensions, obj);
              obj = { gestureActive: false };
              height(tmp[21])(safeAreaState, obj);
            } else {
              let obj3 = safeAreaState(tmp[29]);
              const obj1 = { windowWidth, connected };
              ({ left: obj5.safeAreaLeft, right: obj5.safeAreaRight } = safeArea);
              const maxPanelWidth = obj3.getMaxPanelWidth(obj1);
              const panelX = safeAreaState(tmp[29]).getPanelX(windowWidth, maxPanelWidth);
              const _Math = Math;
              const obj6 = safeAreaState(tmp[29]);
              const tmp22 = height(tmp[30]);
              const obj2 = { drawerWidth: maxPanelWidth, drawerHeight: diff, drawerX: panelX, drawerY: height(tmp[30])(Math.max(diff - tmp4 - tmp3 - safeArea.bottom, diff - 0.8 * diff)), animated: tmp7, mode: modeToSet };
              height(tmp[21])(wrapperDimensions, obj2);
              const tmp22Result = height(tmp[30])(Math.max(diff - tmp4 - tmp3 - safeArea.bottom, diff - 0.8 * diff));
            }
          } else if (modeToSet === animatedStyle1.DISMISSED) {
            const tmp35 = height(tmp[21]);
            if (connected) {
              obj3 = { mode: modeToSet };
              tmp35(tmp36, obj3);
            } else {
              const obj4 = { drawerY: windowDimensions.get().height + 60, mode: modeToSet };
              tmp35(tmp36, obj4);
            }
          }
        }
      }
    };
    obj = { cheapWorkletShallowEqual: wrapperOffset(tmp[20]).cheapWorkletShallowEqual, VoicePanelModes: animatedStyle1, wrapperDimensions, updateSharedValueIfChanged: height(tmp[21]), wrapperOffset, getMaxPanelWidth: wrapperOffset(tmp[29]).getMaxPanelWidth, getPanelX: wrapperOffset(tmp[29]).getPanelX, roundToNearestPixel: height(tmp[30]), windowDimensions };
    fn3.__closure = obj;
    fn3.__workletHash = 3683279660781;
    fn3.__initData = closure_59;
    const animatedReaction = obj3.useAnimatedReaction(fn2, fn3);
    let obj5 = wrapperOffset(tmp[15]);
    class C {
      constructor() {
        gestureActive = !useReducedMotion.get();
        if (gestureActive) {
          tmp = wrapperDimensions;
          gestureActive = wrapperDimensions.get().animated;
        }
        if (!gestureActive) {
          tmp2 = wrapperOffset;
          gestureActive = wrapperOffset.get().gestureActive;
        }
        gestureActive2 = wrapperOffset.get().gestureActive;
        value = wrapperDimensions.get();
        ({ drawerY, drawerX } = value);
        if (gestureActive2) {
          tmp4 = connected;
          gestureActive2 = !connected.get();
        }
        sum = drawerY;
        sum1 = drawerX;
        if (gestureActive2) {
          tmp7 = globalThis;
          _Math = Math;
          tmp8 = wrapperOffset;
          num = 0;
          sum = drawerY + Math.max(wrapperOffset.get().y, 0);
          sum1 = drawerX + wrapperOffset.get().x;
        }
        tmp9 = () => {
          class VoicePanelUITsx29 {
            constructor(arg0) {
              tmp = arg0;
              if (arg0) {
                tmp2 = closure_7;
                tmp3 = closure_15;
                tmp = closure_7.get() !== closure_15.DISMISSED;
              }
              if (tmp) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                num = 15;
                obj = closure_0(closure_2[15]);
                tmp6 = closure_1;
                num2 = 31;
                tmp7 = obj.runOnJS(closure_1(closure_2[31]).updateSourceTrackingView)();
              }
              return;
            }
          }
          VoicePanelUITsx29.__closure = { mode: closure_7, VoicePanelModes: closure_15, runOnJS: callback(closure_2[15]).runOnJS, updateSourceTrackingView: callback2(closure_2[31]).updateSourceTrackingView };
          VoicePanelUITsx29.__workletHash = 10394717541764;
          VoicePanelUITsx29.__initData = closure_61;
          return VoicePanelUITsx29;
        }();
        obj = {};
        obj = {};
        obj3 = wrapperOffset(closure_2[12]);
        tmp10 = wrapperOffset.get().gestureActive ? closure_17 : closure_29;
        str = "animate-never";
        str2 = "animate-never";
        if (gestureActive) {
          str2 = "animate-always";
        }
        obj.translateX = obj3.withSpring(sum1, tmp10, str2, tmp9);
        items = [, ];
        items[0] = obj;
        obj1 = {};
        obj5 = wrapperOffset(closure_2[12]);
        tmp11 = wrapperOffset.get().gestureActive ? closure_17 : closure_29;
        if (gestureActive) {
          str = "animate-always";
        }
        obj1.translateY = obj5.withSpring(sum, tmp11, str, tmp9);
        items[1] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    obj = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: wrapperOffset(tmp[15]).runOnJS, updateSourceTrackingView: height(tmp[31]).updateSourceTrackingView, withSpring: wrapperOffset(tmp[12]).withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_17, DRAWER_SIZE_PHYSICS: closure_29 };
    C.__closure = obj;
    C.__workletHash = 16361132737159;
    C.__initData = closure_60;
    const animatedStyle = obj5.useAnimatedStyle(C);
    class M {
      constructor() {
        obj = { mode: mode.get(), connected: connected.get() };
        obj = {};
        tmp = closure_56(obj);
        obj.width = wrapperDimensions.get().drawerWidth;
        obj.height = wrapperDimensions.get().drawerHeight;
        obj3 = wrapperOffset(closure_2[12]);
        obj.borderRadius = obj3.withSpring(tmp, windowDimensions);
        str = "none";
        if (mode.get() === useAnimatedStyle.PANEL) {
          str = "auto";
        }
        obj.pointerEvents = str;
        str2 = "transparent";
        if (!connected.get()) {
          tmp2 = closure_2;
          str2 = closure_2.maskDefaultBackground.backgroundColor;
        }
        obj.backgroundColor = str2;
        return obj;
      }
    }
    obj1 = { computeBorderRadii: closure_56, mode, connected, wrapperDimensions, withSpring: wrapperOffset(tmp[12]).withSpring, BORDER_RADIUS_PHYSICS: windowDimensions, VoicePanelModes: animatedStyle1, styles: tmp };
    M.__closure = obj1;
    M.__workletHash = 1768699814221;
    M.__initData = closure_62;
    const animatedStyle1 = wrapperOffset(tmp[15]).useAnimatedStyle(M);
    if (!wrapperOffset(tmp[32]).isStable) {
      class Y {
        constructor() {
          return windowDimensions.get();
        }
      }
      obj2 = { windowDimensions };
      Y.__closure = obj2;
      Y.__workletHash = 14100798624471;
      Y.__initData = closure_63;
      const fn4 = function k(arg0) {
        const obj = arg0(tmp[15]);
        arg0(tmp[15]).runOnJS(closure_71)("Window dimensions changed:", JSON.stringify(arg0));
      };
      obj3 = { runOnJS: wrapperOffset(tmp[15]).runOnJS, log: closure_71 };
      fn4.__closure = obj3;
      fn4.__workletHash = 13929796154212;
      fn4.__initData = closure_64;
      const animatedReaction1 = wrapperOffset(tmp[15]).useAnimatedReaction(Y, fn4);
      const obj10 = wrapperOffset(tmp[15]);
      class H {
        constructor() {
          return wrapperDimensions.get();
        }
      }
      const obj4 = { wrapperDimensions };
      H.__closure = obj4;
      H.__workletHash = 14295147321429;
      H.__initData = closure_65;
      class T {
        constructor(arg0) {
          obj = wrapperOffset(closure_2[15]);
          runOnJSResult = obj.runOnJS(closure_71);
          tmpResult = runOnJSResult("Wrapper dimensions changed:", JSON.stringify(wrapperOffset));
          return;
        }
      }
      obj5 = { runOnJS: wrapperOffset(tmp[15]).runOnJS, log: closure_71 };
      T.__closure = obj5;
      T.__workletHash = 1850762619613;
      T.__initData = closure_66;
      const animatedReaction2 = wrapperOffset(tmp[15]).useAnimatedReaction(H, T);
      const obj13 = wrapperOffset(tmp[15]);
    }
    const items = [tmp.wrapper, animatedStyle1, animatedStyle];
    return connected.useMemo(() => ({ wrapperRootStyles: tmp.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle1 }), items);
  }(children.wrapperOffset));
  let obj = { style: wrapperRootStyles, pointerEvents: "box-none" };
  const tmp = function useWrapperStyles(wrapperOffset) {
    let obj = wrapperOffset(tmp[27]);
    const height = obj.useGlobalStatusIndicatorState().height;
    const tmp = callback();
    const context = connected.useContext(height(tmp[17]));
    const wrapperDimensions = context.wrapperDimensions;
    const connected = context.connected;
    const controlsSpecs = context.controlsSpecs;
    const focused = context.focused;
    const mode = context.mode;
    const preJoinContentSize = context.preJoinContentSize;
    const safeArea = context.safeArea;
    const windowDimensions = context.windowDimensions;
    const useReducedMotion = context.useReducedMotion;
    let obj1 = wrapperOffset(tmp[15]);
    const fn = function o() {
      return controlsSpecs.get().height;
    };
    fn.__closure = { controlsSpecs };
    fn.__workletHash = 6243014585347;
    fn.__initData = closure_57;
    const derivedValue = obj1.useDerivedValue(fn);
    let obj2 = wrapperOffset(tmp[28]);
    const pIPState = obj2.usePIPState();
    let obj3 = wrapperOffset(tmp[15]);
    const fn2 = function l() {
      return { modeToSet: mode.get(), connected: connected.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: safeArea.get(), focused: focused.get(), pipState: pIPState, controlsHeight: derivedValue.get(), preJoinContentSize: preJoinContentSize.get(), globalStatusIndicatorHeight: height };
    };
    fn2.__closure = { mode, connected, windowDimensions, safeArea, focused, pipState: pIPState, controlsHeight: derivedValue, preJoinContentSize, globalStatusIndicatorHeight: height };
    fn2.__workletHash = 4592460925374;
    fn2.__initData = closure_58;
    const fn3 = function s(safeAreaState, windowHeight) {
      let connected;
      let drawerX;
      let drawerY;
      let modeToSet;
      let safeArea;
      let windowWidth;
      let obj = safeAreaState(tmp[20]);
      let tmp;
      if (null != windowHeight) {
        tmp = windowHeight;
      }
      if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
        ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = safeAreaState);
        if (modeToSet !== animatedStyle1.PIP) {
          let tmp7 = null == windowHeight;
          if (!tmp7) {
            tmp7 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
            const tmp8 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
          }
          const value = wrapperDimensions.get();
          ({ drawerX, drawerY } = value);
          const diff = windowHeight - tmp5;
          if (modeToSet === animatedStyle1.PANEL) {
            if (connected) {
              obj = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp7, mode: modeToSet };
              height(tmp[21])(wrapperDimensions, obj);
              obj = { gestureActive: false };
              height(tmp[21])(safeAreaState, obj);
            } else {
              let obj3 = safeAreaState(tmp[29]);
              const obj1 = { windowWidth, connected };
              ({ left: obj5.safeAreaLeft, right: obj5.safeAreaRight } = safeArea);
              const maxPanelWidth = obj3.getMaxPanelWidth(obj1);
              const panelX = safeAreaState(tmp[29]).getPanelX(windowWidth, maxPanelWidth);
              const _Math = Math;
              const obj6 = safeAreaState(tmp[29]);
              const tmp22 = height(tmp[30]);
              const obj2 = { drawerWidth: maxPanelWidth, drawerHeight: diff, drawerX: panelX, drawerY: height(tmp[30])(Math.max(diff - tmp4 - tmp3 - safeArea.bottom, diff - 0.8 * diff)), animated: tmp7, mode: modeToSet };
              height(tmp[21])(wrapperDimensions, obj2);
              const tmp22Result = height(tmp[30])(Math.max(diff - tmp4 - tmp3 - safeArea.bottom, diff - 0.8 * diff));
            }
          } else if (modeToSet === animatedStyle1.DISMISSED) {
            const tmp35 = height(tmp[21]);
            if (connected) {
              obj3 = { mode: modeToSet };
              tmp35(tmp36, obj3);
            } else {
              const obj4 = { drawerY: windowDimensions.get().height + 60, mode: modeToSet };
              tmp35(tmp36, obj4);
            }
          }
        }
      }
    };
    obj = { cheapWorkletShallowEqual: wrapperOffset(tmp[20]).cheapWorkletShallowEqual, VoicePanelModes: animatedStyle1, wrapperDimensions, updateSharedValueIfChanged: height(tmp[21]), wrapperOffset, getMaxPanelWidth: wrapperOffset(tmp[29]).getMaxPanelWidth, getPanelX: wrapperOffset(tmp[29]).getPanelX, roundToNearestPixel: height(tmp[30]), windowDimensions };
    fn3.__closure = obj;
    fn3.__workletHash = 3683279660781;
    fn3.__initData = closure_59;
    const animatedReaction = obj3.useAnimatedReaction(fn2, fn3);
    let obj5 = wrapperOffset(tmp[15]);
    class C {
      constructor() {
        gestureActive = !useReducedMotion.get();
        if (gestureActive) {
          tmp = wrapperDimensions;
          gestureActive = wrapperDimensions.get().animated;
        }
        if (!gestureActive) {
          tmp2 = wrapperOffset;
          gestureActive = wrapperOffset.get().gestureActive;
        }
        gestureActive2 = wrapperOffset.get().gestureActive;
        value = wrapperDimensions.get();
        ({ drawerY, drawerX } = value);
        if (gestureActive2) {
          tmp4 = connected;
          gestureActive2 = !connected.get();
        }
        sum = drawerY;
        sum1 = drawerX;
        if (gestureActive2) {
          tmp7 = globalThis;
          _Math = Math;
          tmp8 = wrapperOffset;
          num = 0;
          sum = drawerY + Math.max(wrapperOffset.get().y, 0);
          sum1 = drawerX + wrapperOffset.get().x;
        }
        tmp9 = () => {
          class VoicePanelUITsx29 {
            constructor(arg0) {
              tmp = arg0;
              if (arg0) {
                tmp2 = closure_7;
                tmp3 = closure_15;
                tmp = closure_7.get() !== closure_15.DISMISSED;
              }
              if (tmp) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                num = 15;
                obj = closure_0(closure_2[15]);
                tmp6 = closure_1;
                num2 = 31;
                tmp7 = obj.runOnJS(closure_1(closure_2[31]).updateSourceTrackingView)();
              }
              return;
            }
          }
          VoicePanelUITsx29.__closure = { mode: closure_7, VoicePanelModes: closure_15, runOnJS: callback(closure_2[15]).runOnJS, updateSourceTrackingView: callback2(closure_2[31]).updateSourceTrackingView };
          VoicePanelUITsx29.__workletHash = 10394717541764;
          VoicePanelUITsx29.__initData = closure_61;
          return VoicePanelUITsx29;
        }();
        obj = {};
        obj = {};
        obj3 = wrapperOffset(closure_2[12]);
        tmp10 = wrapperOffset.get().gestureActive ? closure_17 : closure_29;
        str = "animate-never";
        str2 = "animate-never";
        if (gestureActive) {
          str2 = "animate-always";
        }
        obj.translateX = obj3.withSpring(sum1, tmp10, str2, tmp9);
        items = [, ];
        items[0] = obj;
        obj1 = {};
        obj5 = wrapperOffset(closure_2[12]);
        tmp11 = wrapperOffset.get().gestureActive ? closure_17 : closure_29;
        if (gestureActive) {
          str = "animate-always";
        }
        obj1.translateY = obj5.withSpring(sum, tmp11, str, tmp9);
        items[1] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    obj = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: wrapperOffset(tmp[15]).runOnJS, updateSourceTrackingView: height(tmp[31]).updateSourceTrackingView, withSpring: wrapperOffset(tmp[12]).withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_17, DRAWER_SIZE_PHYSICS: closure_29 };
    C.__closure = obj;
    C.__workletHash = 16361132737159;
    C.__initData = closure_60;
    const animatedStyle = obj5.useAnimatedStyle(C);
    class M {
      constructor() {
        obj = { mode: mode.get(), connected: connected.get() };
        obj = {};
        tmp = closure_56(obj);
        obj.width = wrapperDimensions.get().drawerWidth;
        obj.height = wrapperDimensions.get().drawerHeight;
        obj3 = wrapperOffset(closure_2[12]);
        obj.borderRadius = obj3.withSpring(tmp, windowDimensions);
        str = "none";
        if (mode.get() === useAnimatedStyle.PANEL) {
          str = "auto";
        }
        obj.pointerEvents = str;
        str2 = "transparent";
        if (!connected.get()) {
          tmp2 = closure_2;
          str2 = closure_2.maskDefaultBackground.backgroundColor;
        }
        obj.backgroundColor = str2;
        return obj;
      }
    }
    obj1 = { computeBorderRadii: closure_56, mode, connected, wrapperDimensions, withSpring: wrapperOffset(tmp[12]).withSpring, BORDER_RADIUS_PHYSICS: windowDimensions, VoicePanelModes: animatedStyle1, styles: tmp };
    M.__closure = obj1;
    M.__workletHash = 1768699814221;
    M.__initData = closure_62;
    const animatedStyle1 = wrapperOffset(tmp[15]).useAnimatedStyle(M);
    if (!wrapperOffset(tmp[32]).isStable) {
      class Y {
        constructor() {
          return windowDimensions.get();
        }
      }
      obj2 = { windowDimensions };
      Y.__closure = obj2;
      Y.__workletHash = 14100798624471;
      Y.__initData = closure_63;
      const fn4 = function k(arg0) {
        const obj = arg0(tmp[15]);
        arg0(tmp[15]).runOnJS(closure_71)("Window dimensions changed:", JSON.stringify(arg0));
      };
      obj3 = { runOnJS: wrapperOffset(tmp[15]).runOnJS, log: closure_71 };
      fn4.__closure = obj3;
      fn4.__workletHash = 13929796154212;
      fn4.__initData = closure_64;
      const animatedReaction1 = wrapperOffset(tmp[15]).useAnimatedReaction(Y, fn4);
      const obj10 = wrapperOffset(tmp[15]);
      class H {
        constructor() {
          return wrapperDimensions.get();
        }
      }
      const obj4 = { wrapperDimensions };
      H.__closure = obj4;
      H.__workletHash = 14295147321429;
      H.__initData = closure_65;
      class T {
        constructor(arg0) {
          obj = wrapperOffset(closure_2[15]);
          runOnJSResult = obj.runOnJS(closure_71);
          tmpResult = runOnJSResult("Wrapper dimensions changed:", JSON.stringify(wrapperOffset));
          return;
        }
      }
      obj5 = { runOnJS: wrapperOffset(tmp[15]).runOnJS, log: closure_71 };
      T.__closure = obj5;
      T.__workletHash = 1850762619613;
      T.__initData = closure_66;
      const animatedReaction2 = wrapperOffset(tmp[15]).useAnimatedReaction(H, T);
      const obj13 = wrapperOffset(tmp[15]);
    }
    const items = [tmp.wrapper, animatedStyle1, animatedStyle];
    return connected.useMemo(() => ({ wrapperRootStyles: tmp.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle1 }), items);
  }(children.wrapperOffset);
  obj = { style: wrapperTransformStyles, pointerEvents: "box-none" };
  const tmp2 = importDefault(dependencyMap[33]);
  obj = { style: wrapperSurfaceStyles, layout: closure_25, children: children.children };
  obj.children = callback2(importDefault(dependencyMap[33]), obj);
  obj.children = callback2(importDefault(dependencyMap[33]), obj);
  return callback2(tmp2, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const StyleSheet = tmp2.StyleSheet;
const Pressable = tmp2.Pressable;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[6]);
({ BORDER_RADIUS_PHYSICS: closure_10, DEFAULT_BORDER_RADIUS } = tmp3);
({ DEFAULT_BORDER_RADIUS_PIP: closure_12, DRAWER_SPRING_PHYSICS, IS_IOS: closure_13, MODE_CHANGE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR: closure_14, VoicePanelModes: closure_15, LAYOUT_PHYSICS } = tmp3);
let closure_17 = tmp3.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
const VoicePanelControlsModes = arg1(dependencyMap[7]).VoicePanelControlsModes;
const isActivityParticipant = arg1(dependencyMap[8]).isActivityParticipant;
const POP_RESISTANCE = arg1(dependencyMap[9]).POP_RESISTANCE;
({ jsx: closure_21, jsxs: closure_22 } = arg1(dependencyMap[10]));
let importDefaultResult = importDefault(dependencyMap[11]);
importDefaultResult = new importDefaultResult("VoicePanelUI");
let closure_24 = { code: "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let closure_25 = () => {
  function layoutTransition(originX) {
    let obj = {};
    obj = { originX: callback(closure_2[12]).withSpring(originX.targetOriginX, closure_16, "animate-always") };
    const obj3 = callback(closure_2[12]);
    obj.originY = callback(closure_2[12]).withSpring(originX.targetOriginY, closure_16, "animate-always");
    const obj4 = callback(closure_2[12]);
    obj.width = callback(closure_2[12]).withSpring(originX.targetWidth, closure_16, "animate-always");
    const obj5 = callback(closure_2[12]);
    obj.height = callback(closure_2[12]).withSpring(originX.targetHeight, closure_16, "animate-always");
    obj.animations = obj;
    obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
    return obj;
  }
  layoutTransition.__closure = { withSpring: arg1(dependencyMap[12]).withSpring, LAYOUT_PHYSICS };
  layoutTransition.__workletHash = 16454235842679;
  layoutTransition.__initData = closure_24;
  return layoutTransition;
}();
let obj = {};
const merged = Object.assign(LAYOUT_PHYSICS);
obj["damping"] = 0;
let closure_27 = { code: "function scrollViewLayoutTransition_VoicePanelUITsx2(values){const{withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let closure_28 = () => {
  function scrollViewLayoutTransition(originX) {
    let obj = {};
    obj = { originX: callback(closure_2[12]).withSpring(originX.targetOriginX, closure_16, "animate-always") };
    const obj3 = callback(closure_2[12]);
    obj.originY = callback(closure_2[12]).withSpring(originX.targetOriginY, closure_16, "animate-always");
    const obj4 = callback(closure_2[12]);
    obj.width = callback(closure_2[12]).withSpring(originX.targetWidth, closure_26, "animate-always");
    const obj5 = callback(closure_2[12]);
    obj.height = callback(closure_2[12]).withSpring(originX.targetHeight, closure_26, "animate-always");
    obj.animations = obj;
    obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
    return obj;
  }
  const obj = { withSpring: arg1(dependencyMap[12]).withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj };
  scrollViewLayoutTransition.__closure = obj;
  scrollViewLayoutTransition.__workletHash = 11745134918460;
  scrollViewLayoutTransition.__initData = closure_27;
  return scrollViewLayoutTransition;
}();
obj = {};
const merged1 = Object.assign(DRAWER_SPRING_PHYSICS);
obj["mass"] = 0.3;
obj["damping"] = 100;
obj["stiffness"] = 100;
const obj1 = {};
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
obj1["mass"] = 2;
let closure_30 = { code: "function computeViewableChunksFromScrollPosition_VoicePanelUITsx3(scrollPosition,windowHeight,contentHeight,extraChunks=1){const{VOICE_PANEL_CHUNK_DIVISOR}=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};}" };
let closure_31 = () => {
  function computeViewableChunksFromScrollPosition(arg0, arg1, arg2) {
    let num = arg3;
    if (arg3 === undefined) {
      num = 1;
    }
    const rounded = Math.ceil(arg1 / closure_14);
    const sum = Math.max(Math.floor(arg0 / rounded) - num, 0) + closure_14 + 2 * num;
    const bound = Math.min(sum, Math.ceil(arg2 / rounded));
    const obj = { start: Math.max(bound - closure_14 - 2 * num, 0), end: bound };
    return obj;
  }
  computeViewableChunksFromScrollPosition.__closure = { VOICE_PANEL_CHUNK_DIVISOR: closure_14 };
  computeViewableChunksFromScrollPosition.__workletHash = 3008066799757;
  computeViewableChunksFromScrollPosition.__initData = closure_30;
  return computeViewableChunksFromScrollPosition;
}();
let obj4 = arg1(dependencyMap[13]);
const obj2 = {};
const obj3 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj3["overflow"] = "hidden";
obj2.accessibilityView = obj3;
obj4 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj4["alignItems"] = "flex-start";
obj4["zIndex"] = 1;
obj2.wrapper = obj4;
const tmp4 = arg1(dependencyMap[10]);
obj2.maskDefaultBackground = { backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOWER };
const obj6 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj6["borderTopLeftRadius"] = DEFAULT_BORDER_RADIUS;
obj6["borderTopRightRadius"] = DEFAULT_BORDER_RADIUS;
obj2.scrollView = obj6;
obj2.scrollViewContent = { nestedScrollEnabled: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288835093747774, scrollEventThrottle: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005740555781694437 };
const obj5 = { backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOWER };
obj2.shade = { backgroundColor: importDefault(dependencyMap[14]).colors.MOBILE_BACKGROUND_SCRIM_OPAQUE, zIndex: 0 };
obj2.shadePressable = { flexGrow: 1 };
let closure_32 = obj4.createStyles(obj2);
const obj7 = { backgroundColor: importDefault(dependencyMap[14]).colors.MOBILE_BACKGROUND_SCRIM_OPAQUE, zIndex: 0 };
let closure_33 = importDefault(dependencyMap[15]).createAnimatedComponent(tmp2.ScrollView);
const importDefaultResult1 = importDefault(dependencyMap[15]);
let closure_34 = arg1(dependencyMap[16]).isMetaQuest();
let closure_35 = { code: "function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
let closure_36 = { code: "function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
let closure_37 = { code: "function VoicePanelUITsx6(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
let closure_38 = { code: "function VoicePanelUITsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_39 = { code: "function VoicePanelUITsx8(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_40 = { code: "function VoicePanelUITsx9(){const{updateSharedValueIfChanged,gestureState}=this.__closure;updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}" };
let closure_41 = { code: "function VoicePanelUITsx10(event){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}" };
let closure_42 = { code: "function VoicePanelUITsx11(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});console.log('onTouchesCancelled');}" };
let closure_43 = { code: "function VoicePanelUITsx12(event){const{gestureState,mode,VoicePanelModes,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(gestureState.get().cancel)return;if(mode.get()!==VoicePanelModes.PIP){const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});}}" };
let closure_44 = { code: "function VoicePanelUITsx13(event,manager){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
let closure_45 = { code: "function VoicePanelUITsx14(event){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes}=this.__closure;if(gestureState.get().cancel)return;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});}" };
let closure_46 = { code: "function VoicePanelUITsx15(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
let closure_47 = { code: "function onBeginDrag_VoicePanelUITsx16(event){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);}" };
let closure_48 = { code: "function onEndDrag_VoicePanelUITsx17(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
let closure_49 = { code: "function onMomentumEnd_VoicePanelUITsx18(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
let closure_50 = { code: "function onScroll_VoicePanelUITsx19(event){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
let closure_51 = { code: "function VoicePanelUITsx20(){const{mode}=this.__closure;return mode.get();}" };
let closure_52 = { code: "function VoicePanelUITsx21(mode,previous){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}}" };
let closure_53 = { code: "function VoicePanelUITsx22(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
let closure_54 = { code: "function VoicePanelUITsx23(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+(wrapperOffset.get().gestureActive?wrapperOffset.get().y:0);const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
let closure_55 = { code: "function computeBorderRadii_VoicePanelUITsx24({mode:mode,connected:connected}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;}" };
let closure_56 = () => {
  function computeBorderRadii(mode) {
    if (mode.mode === constants.PIP) {
      let num = closure_12;
    } else {
      num = 0;
      if (!tmp) {
        num = closure_11;
      }
    }
    return num;
  }
  computeBorderRadii.__closure = { VoicePanelModes: closure_15, DEFAULT_BORDER_RADIUS_PIP: closure_12, DEFAULT_BORDER_RADIUS };
  computeBorderRadii.__workletHash = 4574399878042;
  computeBorderRadii.__initData = closure_55;
  return computeBorderRadii;
}();
let closure_57 = { code: "function VoicePanelUITsx25(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().height;}" };
let closure_58 = { code: "function VoicePanelUITsx26(){const{mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize,globalStatusIndicatorHeight}=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get(),globalStatusIndicatorHeight:globalStatusIndicatorHeight};}" };
let closure_59 = { code: "function VoicePanelUITsx27(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.DISMISSED){if(connected){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}}}" };
let closure_60 = { code: "function VoicePanelUITsx28(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;let{gestureActive:gestureActive}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();gestureActive=gestureActive&&!connected.get();if(gestureActive){y+=Math.max(wrapperOffset.get().y,0);x+=wrapperOffset.get().x;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)}]};}" };
let closure_61 = { code: "function VoicePanelUITsx29(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}" };
let closure_62 = { code: "function VoicePanelUITsx30(){const{computeBorderRadii,mode,connected,wrapperDimensions,withSpring,BORDER_RADIUS_PHYSICS,VoicePanelModes,styles}=this.__closure;const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none',backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}" };
let closure_63 = { code: "function VoicePanelUITsx31(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_64 = { code: "function VoicePanelUITsx32(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Window dimensions changed:',JSON.stringify(value));}" };
let closure_65 = { code: "function VoicePanelUITsx33(){const{wrapperDimensions}=this.__closure;return wrapperDimensions.get();}" };
let closure_66 = { code: "function VoicePanelUITsx34(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Wrapper dimensions changed:',JSON.stringify(value));}" };
let closure_67 = { marginVertical: null, maxHeight: null, maxWidth: null, minHeight: null };
let closure_68 = { code: "function VoicePanelUITsx35(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};}" };
let closure_69 = importAllResult.memo((onPress) => {
  const opacity = onPress.opacity;
  const arg1 = opacity;
  const tmp = callback4();
  let obj = arg1(dependencyMap[15]);
  const fn = function o() {
    const obj = { opacity: opacity(closure_2[12]).withSpring(opacity.get(), closure_67) };
    let str = "auto";
    if (0 === opacity.get()) {
      str = "none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[12]).withSpring, opacity, DrawerShadeOpacityPhysics: closure_67 };
  fn.__closure = obj;
  fn.__workletHash = 3656047169284;
  fn.__initData = closure_68;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  const items = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  obj.children = callback2(Pressable, { style: tmp.shadePressable, onPress: onPress.onPress });
  return callback2(importDefault(dependencyMap[15]).View, obj);
});
const obj13 = arg1(dependencyMap[16]);
const memoResult = importAllResult.memo(function VoicePanelUI() {
  let dismissPanel;
  let dragScrolling;
  let gesture;
  let gestureState;
  let handleScroll;
  let onContentSizeChange;
  let opacity;
  let scrollNativeGesture;
  let scrollPosition;
  let scrollViewProps;
  let scrollerRef;
  let viewableChunks;
  let wrapperOffset;
  const tmp = callback4();
  const context = importAllResult.useContext(importDefault(closure_2[17]));
  const channelId = context.channelId;
  const arg1 = channelId;
  ({ scrollPosition, dragScrolling, dismissPanel } = context);
  const tmp4 = callback(importAllResult.useState(false), 2);
  const importDefault = tmp4[1];
  closure_2 = importAllResult.useRef(-1);
  const items = [channelId];
  let callback = importAllResult.useCallback((arg0) => {
    const channelId = arg0;
    clearTimeout(ref.current);
    channelId(ref[36]).batchUpdates(() => {
      if (arg0) {
        const _setTimeout = setTimeout;
        closure_2.current = setTimeout(() => {
          const state = state2.getState();
          const result = state.setChannelPanelFullscreen(closure_0, closure_0);
          const state1 = state.getState();
          const freezeLock = state1.requestFreezeLock({ lockEnabled: closure_0, key: "voice-panel-freeze-" + closure_0 });
        }, 1000);
      } else {
        const state = state2.getState();
        const result = state.setChannelPanelFullscreen(arg0, arg0);
        const state1 = state.getState();
        const obj = { lockEnabled: arg0 };
        const _HermesInternal = HermesInternal;
        obj.key = "voice-panel-freeze-" + arg0;
        const freezeLock = state1.requestFreezeLock(obj);
      }
    });
  }, items);
  const layoutEffect = importAllResult.useLayoutEffect(() => () => {
    clearTimeout(ref.current);
  }, []);
  let obj = {
    scrollPosition,
    dragScrolling,
    setPanelFullscreen: callback,
    setPanelOpen: importAllResult.useCallback((arg0) => {
      const state = store.getState();
      state.setChannelPanelOpen(channelId, arg0);
    }, items1),
    setPanelPIP: importAllResult.useCallback((arg0) => {
      const state = store.getState();
      state.setChannelPanelPIP(channelId, arg0);
    }, items2)
  };
  const items1 = [channelId];
  const items2 = [channelId];
  const tmp7 = function usePanelGesture(scrollPosition) {
    scrollPosition = scrollPosition.scrollPosition;
    let channelId = scrollPosition;
    const dragScrolling = scrollPosition.dragScrolling;
    let callback = dragScrolling;
    const setPanelFullscreen = scrollPosition.setPanelFullscreen;
    let closure_2 = setPanelFullscreen;
    const setPanelOpen = scrollPosition.setPanelOpen;
    const setPanelPIP = scrollPosition.setPanelPIP;
    const context = setPanelPIP.useContext(callback(closure_2[17]));
    channelId = context.channelId;
    const connected = context.connected;
    const controlsSpecs = context.controlsSpecs;
    const dismissPanel = context.dismissPanel;
    const dismissToPIPGestureRef = context.dismissToPIPGestureRef;
    const focused = context.focused;
    const hideControls = context.hideControls;
    const isFocusedVideoZoomed = context.isFocusedVideoZoomed;
    const mode = context.mode;
    const safeArea = context.safeArea;
    const setMode = context.setMode;
    const showControls = context.showControls;
    const windowDimensions = context.windowDimensions;
    const wrapperDimensions = context.wrapperDimensions;
    const wrapperOffset = context.wrapperOffset;
    const tmp2 = callback(closure_2[18])();
    let obj = channelId(closure_2[15]);
    const sharedValue = obj.useSharedValue(0);
    let obj1 = channelId(closure_2[15]);
    const sharedValue1 = obj1.useSharedValue(false);
    let obj2 = channelId(closure_2[15]);
    const sharedValue2 = obj2.useSharedValue(false);
    let obj3 = channelId(closure_2[15]);
    obj = { start: 0, end: safeArea };
    const sharedValue3 = obj3.useSharedValue(obj);
    const tmp7 = setPanelOpen(setPanelPIP.useState(true), 2);
    const first = tmp7[0];
    let closure_26 = tmp7[1];
    const memo = setPanelPIP.useMemo(() => {
      const Gesture = scrollPosition(setPanelFullscreen[19]).Gesture;
      return Gesture.Native();
    }, []);
    let obj5 = channelId(closure_2[15]);
    const animatedRef = obj5.useAnimatedRef();
    let obj6 = channelId(closure_2[15]);
    const sharedValue4 = obj6.useSharedValue({ "Null": null, "Null": null, "Null": null, "Null": null, absoluteX: null });
    let obj7 = channelId(closure_2[15]);
    const fn = function f() {
      return { gestureActive: sharedValue4.get().active, connected: connected.get(), mode: mode.get() };
    };
    fn.__closure = { gestureState: sharedValue4, connected, mode };
    fn.__workletHash = 5596084348360;
    fn.__initData = closure_35;
    const fn2 = function h(mode, safeAreaState2) {
      let tmp;
      if (null != safeAreaState2) {
        tmp = safeAreaState2;
      }
      if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
        mode = mode.mode;
        if (mode.connected) {
          if (!mode.gestureActive) {
            if (mode === setMode.PANEL) {
              scrollPosition(setPanelFullscreen[15]).runOnJS(setPanelFullscreen)(true);
              const obj2 = scrollPosition(setPanelFullscreen[15]);
            }
            if (mode === setMode.PANEL) {
              scrollPosition(setPanelFullscreen[15]).runOnJS(setPanelOpen)(true);
              const obj5 = scrollPosition(setPanelFullscreen[15]);
            } else {
              scrollPosition(setPanelFullscreen[15]).runOnJS(setPanelOpen)(false);
              const obj4 = scrollPosition(setPanelFullscreen[15]);
            }
            if (mode === setMode.PIP) {
              scrollPosition(setPanelFullscreen[15]).runOnJS(setPanelPIP)(true);
              const obj7 = scrollPosition(setPanelFullscreen[15]);
            } else {
              scrollPosition(setPanelFullscreen[15]).runOnJS(setPanelPIP)(false);
              const obj6 = scrollPosition(setPanelFullscreen[15]);
            }
          }
        }
        scrollPosition(setPanelFullscreen[15]).runOnJS(setPanelFullscreen)(false);
        const obj3 = scrollPosition(setPanelFullscreen[15]);
      }
    };
    obj = { cheapWorkletShallowEqual: channelId(closure_2[20]).cheapWorkletShallowEqual, VoicePanelModes: setMode, runOnJS: channelId(closure_2[15]).runOnJS, setPanelFullscreen, setPanelOpen, setPanelPIP };
    fn2.__closure = obj;
    fn2.__workletHash = 10989484188294;
    fn2.__initData = closure_36;
    const animatedReaction = obj7.useAnimatedReaction(fn, fn2);
    const items = [channelId];
    callback = setPanelPIP.useCallback((arg0) => {
      let tmp = null != arg0;
      if (tmp) {
        tmp = wrapperOffset(controlsSpecs.getParticipant(channelId, arg0));
      }
      callback(!tmp);
    }, items);
    function me() {
      let tmp;
      if (mode.get() === setMode.PANEL) {
        const value = focused.get();
        let id;
        if (null != value) {
          id = value.id;
        }
        tmp = id;
      }
      return tmp;
    }
    obj1 = { mode, VoicePanelModes: setMode, focused };
    me.__closure = obj1;
    me.__workletHash = 6595654888031;
    me.__initData = closure_37;
    class Pe {
      constructor(arg0, arg1) {
        if (scrollPosition !== arg1) {
          tmp = scrollPosition;
          tmp2 = setPanelFullscreen;
          num = 15;
          obj = scrollPosition(setPanelFullscreen[15]);
          tmp3 = closure_30;
          tmp4 = obj.runOnJS(closure_30)(scrollPosition);
        }
        return;
      }
    }
    obj2 = { runOnJS: channelId(closure_2[15]).runOnJS, handleFocusChange: callback };
    Pe.__closure = obj2;
    Pe.__workletHash = 15236018210415;
    Pe.__initData = closure_38;
    const animatedReaction1 = channelId(closure_2[15]).useAnimatedReaction(me, Pe);
    const items1 = [tmp2, connected, controlsSpecs, dismissPanel, dismissToPIPGestureRef, focused, first, hideControls, sharedValue4, isFocusedVideoZoomed, sharedValue1, mode, safeArea, scrollPosition, memo, setMode, showControls, windowDimensions, wrapperDimensions, wrapperOffset];
    const memo1 = setPanelPIP.useMemo(() => {
      const Gesture = scrollPosition(setPanelFullscreen[19]).Gesture;
      const Gesture2 = scrollPosition(setPanelFullscreen[19]).Gesture;
      let obj = { left: -1 * tmp2.left, right: -1 * tmp2.right };
      const TapResult = Gesture2.Tap();
      const hitSlopResult = Gesture2.Tap().hitSlop(obj);
      const enabledResult = Gesture2.Tap().hitSlop(obj).enabled(first);
      const fn = function h() {
        if (store2.get()) {
          if (store4.get() !== constants.PIP) {
            if (store3.get().mode === store7.HIDDEN) {
              let obj = { debounce: true };
              store(closure_2[15]).runOnJS(closure_16)(obj);
              const obj3 = store(closure_2[15]);
            } else {
              obj = store(closure_2[15]);
              obj = { debounce: true };
              obj.runOnJS(closure_11)(obj);
            }
          }
        }
      };
      obj = { connected, mode, VoicePanelModes: setMode, controlsSpecs, VoicePanelControlsModes: wrapperDimensions, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, showControls, hideControls };
      fn.__closure = obj;
      fn.__workletHash = 15350003421175;
      fn.__initData = closure_39;
      const maxDistanceResult = Gesture2.Tap().hitSlop(obj).enabled(first).maxDistance(30);
      const Gesture3 = scrollPosition(setPanelFullscreen[19]).Gesture;
      const onStartResult = Gesture2.Tap().hitSlop(obj).enabled(first).maxDistance(30).onStart(fn);
      const PanResult = Gesture3.Pan();
      const enabledResult1 = Gesture3.Pan().enabled(first);
      const manualActivationResult = Gesture3.Pan().enabled(first).manualActivation(true);
      const maxPointersResult = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1);
      const obj1 = { left: -1 * tmp2.left, right: -1 * tmp2.right };
      const hitSlopResult1 = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop({ left: -1 * tmp2.left, right: -1 * tmp2.right });
      const result = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop({ left: -1 * tmp2.left, right: -1 * tmp2.right }).withRef(dismissToPIPGestureRef).shouldCancelWhenOutside(false);
      const result1 = result.simultaneousWithExternalGesture(memo);
      class S {
        constructor(arg0, arg1) {
          first = arg0.allTouches[0];
          if (closure_13) {
            tmp2 = null;
            if (null != first) {
              tmp3 = closure_17;
              tmp4 = closure_14;
              if (first.absoluteY > closure_17.get().height - closure_14.get().bottom) {
                tmp16 = closure_29;
                obj = {};
                tmp17 = obj;
                merged = Object.assign(closure_29.get());
                flag2 = true;
                str2 = "cancel";
                obj["cancel"] = true;
                result = closure_29.set(obj);
                activateResult = arg1.activate();
                return;
              }
            }
          }
          value = closure_12.get();
          if (!value) {
            tmp6 = closure_13;
            tmp7 = closure_15;
            tmp8 = closure_13.get() === closure_15.PANEL;
            if (tmp8) {
              tmp9 = closure_7;
              tmp10 = closure_18;
              tmp8 = closure_7.get().mode === closure_18.DRAWER;
            }
            value = tmp8;
          }
          if (value) {
            tmp11 = closure_29;
            obj = {};
            tmp12 = obj;
            merged1 = Object.assign(closure_29.get());
            flag = true;
            str = "cancel";
            obj["cancel"] = true;
            result1 = closure_29.set(obj);
            failResult = arg1.fail();
          }
          return;
        }
      }
      S.__closure = { IS_IOS: mode, windowDimensions, safeArea, gestureState: sharedValue4, isFocusedVideoZoomed, mode, VoicePanelModes: setMode, controlsSpecs, VoicePanelControlsModes: wrapperDimensions };
      S.__workletHash = 13538548264193;
      S.__initData = closure_46;
      const obj2 = { IS_IOS: mode, windowDimensions, safeArea, gestureState: sharedValue4, isFocusedVideoZoomed, mode, VoicePanelModes: setMode, controlsSpecs, VoicePanelControlsModes: wrapperDimensions };
      const withRefResult = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop({ left: -1 * tmp2.left, right: -1 * tmp2.right }).withRef(dismissToPIPGestureRef);
      const fn2 = function u(arg0) {
        if (!store9.get().cancel) {
          callback(closure_2[21])(closure_19, { 0: "%FunctionPrototype%", 0: "paddingStart" });
          const obj = {};
          ({ absoluteX: obj.absoluteXStart, absoluteY: obj.absoluteYStart } = arg0);
          obj.active = false;
          obj.cancel = false;
          let value = store2.get();
          if (value) {
            value = store4.get() === constants.PANEL;
          }
          obj.requiresPop = value;
          const result = store9.set(obj);
        }
      };
      const onTouchesDownResult = result1.onTouchesDown(S);
      fn2.__closure = { gestureState: sharedValue4, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), wrapperOffset, connected, mode, VoicePanelModes: setMode };
      fn2.__workletHash = 11622638269935;
      fn2.__initData = closure_45;
      const obj3 = { gestureState: sharedValue4, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), wrapperOffset, connected, mode, VoicePanelModes: setMode };
      const fn3 = function c(state, fail) {
        let absoluteX;
        let absoluteY;
        if (state.state === store(closure_2[19]).State.BEGAN) {
          if (!store9.get().active) {
            if (!store9.get().cancel) {
              ({ absoluteY, absoluteX } = state.changedTouches[0]);
              const diff = store9.get().absoluteYStart - absoluteY;
              const diff1 = store9.get().absoluteXStart - absoluteX;
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              const absolute = Math.abs(diff);
              const bound = Math.max(absolute, Math.abs(diff1));
              const _Math4 = Math;
              const _Math5 = Math;
              const absolute1 = Math.abs(diff1);
              if (store4.get() === constants.PANEL) {
                const _Math6 = Math;
                if (diff < 0) {
                  if (Math.floor(store.get()) <= 0) {
                    let tmp27 = !closure_34;
                    if (!tmp27) {
                      tmp27 = bound > 10;
                    }
                    let flag = tmp27;
                  }
                }
                const value = closure_10.get();
                let id;
                if (null != value) {
                  id = value.id;
                }
                flag = false;
                if (tmp24) {
                  fail.fail();
                  flag = false;
                }
                const tmp24 = null != id && tmp9;
              } else {
                let tmp14 = store4.get() === constants.PIP;
                if (tmp14) {
                  tmp14 = bound > 10;
                }
                flag = false;
                if (tmp14) {
                  let obj = store(closure_2[15]);
                  obj.runOnJS(callback(closure_2[22]))();
                  flag = true;
                }
              }
              const tmp30 = callback(closure_2[21]);
              if (flag) {
                obj = { gestureActive: true };
                tmp30(closure_19, obj);
                obj = { absoluteXStart: absoluteX, absoluteYStart: absoluteY + store.get(), cancel: false, active: true, requiresPop: store9.get().requiresPop };
                const result = store9.set(obj);
                const result1 = store8.set(true);
                fail.activate();
              } else {
                const obj1 = { absoluteYStart: absoluteY, absoluteXStart: absoluteX };
                tmp30(store9, obj1);
              }
              const tmp9 = absolute1 >= Math.abs(diff) || diff > 0;
            }
          }
        }
      };
      const onBeginResult = onTouchesDownResult.onBegin(fn2);
      fn3.__closure = { State: scrollPosition(setPanelFullscreen[19]).State, gestureState: sharedValue4, mode, VoicePanelModes: setMode, scrollPosition, isQuest: closure_34, MIN_GESTURE_MOVE: 10, focused, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, triggerIOSHaptic: dragScrolling(setPanelFullscreen[22]), updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), wrapperOffset, lockScrolling: sharedValue1 };
      fn3.__workletHash = 262321069191;
      fn3.__initData = closure_44;
      const obj4 = { State: scrollPosition(setPanelFullscreen[19]).State, gestureState: sharedValue4, mode, VoicePanelModes: setMode, scrollPosition, isQuest: closure_34, MIN_GESTURE_MOVE: 10, focused, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, triggerIOSHaptic: dragScrolling(setPanelFullscreen[22]), updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), wrapperOffset, lockScrolling: sharedValue1 };
      const fn4 = function l(absoluteY) {
        if (!store9.get().cancel) {
          if (store4.get() !== constants.PIP) {
            const result = -1 * (store9.get().absoluteYStart - absoluteY.absoluteY);
            let value = store2.get();
            if (value) {
              value = !store9.get().requiresPop;
            }
            if (value) {
              value = result <= 0;
            }
            if (value) {
              let obj = {};
              const merged = Object.assign(store9.get());
              obj["requiresPop"] = true;
              const result1 = store9.set(obj);
            }
            if (store8.get()) {
              if (result < 0) {
                const result2 = store8.set(false);
              }
              let diff = result;
              if (!store9.get().requiresPop) {
                obj = { y: diff, x: 0 };
                callback(closure_2[21])(closure_19, obj);
              } else {
                const _Math = Math;
                const bound = Math.max(result, 0);
                if (bound > 180) {
                  const obj1 = {};
                  const merged1 = Object.assign(store9.get());
                  obj1["requiresPop"] = false;
                  const result3 = store9.set(obj1);
                  const obj5 = store(closure_2[15]);
                  store(closure_2[15]).runOnJS(store(closure_2[23]).triggerHapticFeedback)(store(closure_2[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
                  diff = result;
                  const runOnJSResult = store(closure_2[15]).runOnJS(store(closure_2[23]).triggerHapticFeedback);
                }
              }
              diff = bound - bound * closure_20;
            }
            let tmp20 = !store8.get();
            if (tmp20) {
              tmp20 = store.get() <= 0;
            }
            if (tmp20) {
              const result4 = store8.set(true);
            }
          } else {
            obj = { x: -1 * (store9.get().absoluteXStart - absoluteY.absoluteX), y: -1 * (store9.get().absoluteYStart - absoluteY.absoluteY) };
            callback(closure_2[21])(closure_19, obj);
            const tmp5 = callback(closure_2[21]);
          }
        }
      };
      const onTouchesMoveResult = onBeginResult.onTouchesMove(fn3);
      fn4.__closure = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, connected, lockScrolling: sharedValue1, scrollPosition, POP_RESISTANCE: tmp2, PIP_POP_HEIGHT: 180, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, triggerHapticFeedback: scrollPosition(setPanelFullscreen[23]).triggerHapticFeedback, HapticFeedbackTypes: scrollPosition(setPanelFullscreen[23]).HapticFeedbackTypes, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), wrapperOffset };
      fn4.__workletHash = 2084376677229;
      fn4.__initData = closure_43;
      const obj5 = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, connected, lockScrolling: sharedValue1, scrollPosition, POP_RESISTANCE: tmp2, PIP_POP_HEIGHT: 180, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, triggerHapticFeedback: scrollPosition(setPanelFullscreen[23]).triggerHapticFeedback, HapticFeedbackTypes: scrollPosition(setPanelFullscreen[23]).HapticFeedbackTypes, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), wrapperOffset };
      const fn5 = function s() {
        const result = store8.set(false);
        callback(closure_2[21])(closure_29, { pressed: true, renderRange: true });
        callback(closure_2[21])(closure_19, { gestureActive: false });
      };
      const onChangeResult = onTouchesMoveResult.onChange(fn4);
      fn5.__closure = { lockScrolling: sharedValue1, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), gestureState: sharedValue4, wrapperOffset };
      fn5.__workletHash = 8529626440714;
      fn5.__initData = closure_42;
      const obj6 = { lockScrolling: sharedValue1, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), gestureState: sharedValue4, wrapperOffset };
      const fn6 = function n(velocityY) {
        let absoluteX;
        let absoluteY;
        let pipX;
        let pipY;
        let velocityX;
        if (!store9.get().cancel) {
          velocityY = velocityY.velocityY;
          ({ velocityX, absoluteX, absoluteY } = velocityY);
          if (store4.get() === constants.PIP) {
            let obj = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: store6.get(), safeArea: store5.get() };
            const result = store(closure_2[24]).calculatePIPPositionFromVelocity(obj);
            ({ pipX, pipY } = result);
            obj = { pipX, pipY };
            callback(closure_2[21])(store7, obj);
            let obj1 = { gestureActive: false };
            callback(closure_2[21])(closure_19, obj1);
            const obj4 = store(closure_2[24]);
          } else if (store4.get() === constants.PANEL) {
            if (velocityY > 0) {
              if (store2.get()) {
                if (store9.get().requiresPop) {
                  callback(closure_2[21])(closure_19, { progressViewOffset: true, refreshing: true, id: true });
                  const result1 = store8.set(false);
                } else {
                  store(closure_2[15]).runOnJS(constants)(constants.PIP);
                  callback(closure_2[21])(closure_19, { progressViewOffset: true, refreshing: true, id: true });
                  const obj3 = store(closure_2[15]);
                }
              } else {
                const diff = store7.get().drawerHeight - store7.get().drawerY;
                if (closure_19.get().y > 0.2 * diff) {
                  obj = { gestureActive: false };
                  callback(closure_2[21])(closure_19, obj);
                  obj1 = store(closure_2[15]);
                  obj1.runOnJS(closure_8)();
                } else {
                  callback(closure_2[21])(closure_19, { progressViewOffset: true, refreshing: true, id: true });
                  const result2 = store8.set(false);
                }
              }
            } else {
              callback(closure_2[21])(closure_19, { progressViewOffset: true, refreshing: true, id: true });
              const result3 = store8.set(false);
            }
          }
        }
      };
      const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn5);
      fn6.__closure = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, calculatePIPPositionFromVelocity: scrollPosition(setPanelFullscreen[24]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), wrapperDimensions, wrapperOffset, connected, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE: 0.2, dismissPanel };
      fn6.__workletHash = 10532794222556;
      fn6.__initData = closure_41;
      const obj7 = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, calculatePIPPositionFromVelocity: scrollPosition(setPanelFullscreen[24]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), wrapperDimensions, wrapperOffset, connected, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE: 0.2, dismissPanel };
      const fn7 = function t() {
        callback(closure_2[21])(closure_29, { pressed: true, renderRange: true });
      };
      const onEndResult = onTouchesCancelledResult.onEnd(fn6);
      fn7.__closure = { updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[21]), gestureState: sharedValue4 };
      fn7.__workletHash = 141147937726;
      fn7.__initData = closure_40;
      return Gesture.Race(onStartResult, onEndResult.onFinalize(fn7));
    }, items1);
    const obj10 = channelId(closure_2[15]);
    const tmp8 = setPanelOpen;
    obj3 = {};
    class Ae {
      constructor(arg0) {
        result = scrollPosition.set(scrollPosition.contentOffset.y);
        result1 = dragScrolling.set(true);
        return;
      }
    }
    Ae.__closure = { scrollPosition, dragScrolling };
    Ae.__workletHash = 57033362164;
    Ae.__initData = closure_47;
    obj3.onBeginDrag = Ae;
    class Ve {
      constructor() {
        result = dragScrolling.set(false);
        return;
      }
    }
    Ve.__closure = { dragScrolling };
    Ve.__workletHash = 14366146937201;
    Ve.__initData = closure_48;
    obj3.onEndDrag = Ve;
    function ve() {
      const result = dragScrolling.set(false);
    }
    ve.__closure = { dragScrolling };
    ve.__workletHash = 12919609750790;
    ve.__initData = closure_49;
    obj3.onMomentumEnd = ve;
    class Oe {
      constructor(arg0) {
        if (closure_22.get()) {
          tmp11 = closure_23;
          if (closure_23.get()) {
            return;
          } else {
            tmp12 = scrollPosition;
            num = 0;
            if (scrollPosition.get() < 0) {
              tmp13 = scrollPosition;
              result = scrollPosition.set(0);
            }
            tmp15 = scrollPosition;
            value = scrollPosition.get();
            tmp17 = globalThis;
            _Math = Math;
            num2 = 0.1;
            if (Math.abs(scrollPosition.contentOffset.y - value) < 0.1) {
              return;
            } else {
              tmp18 = closure_23;
              flag = true;
              result1 = closure_23.set(true);
              tmp20 = scrollPosition;
              tmp21 = setPanelFullscreen;
              num3 = 15;
              obj = scrollPosition(setPanelFullscreen[15]);
              tmp22 = closure_28;
              flag2 = false;
              tmp23 = obj;
              num4 = 0;
              tmp24 = value;
              flag3 = false;
              scrollToResult = obj.scrollTo(closure_28, 0, value, false);
              result2 = closure_23.set(false);
            }
          }
        } else {
          tmp = scrollPosition;
          tmp2 = undefined;
          if (scrollPosition.get() !== scrollPosition.contentOffset.y) {
            tmp3 = closure_31;
            tmp4 = scrollPosition;
            tmp6 = windowDimensions;
            value1 = scrollPosition.get();
            tmp7 = useSharedValue;
            tmp2 = closure_31(value1, windowDimensions.get().height, useSharedValue.get());
          }
          tmp8 = scrollPosition;
          result3 = scrollPosition.set(scrollPosition.contentOffset.y);
          tmp10 = null;
          if (null != tmp2) {
            tmp27 = dragScrolling;
            tmp28 = setPanelFullscreen;
            num5 = 21;
            tmp29 = useSharedValue;
            tmp30 = dragScrolling(setPanelFullscreen[21])(useSharedValue, tmp2);
          }
        }
        return;
      }
    }
    const obj13 = channelId(closure_2[15]);
    Oe.__closure = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: channelId(closure_2[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition: token, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: callback(closure_2[21]), viewableChunks: sharedValue3 };
    Oe.__workletHash = 13292683579177;
    Oe.__initData = closure_50;
    obj3.onScroll = Oe;
    const obj4 = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: channelId(closure_2[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition: token, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: callback(closure_2[21]), viewableChunks: sharedValue3 };
    const animatedScrollHandler = obj13.useAnimatedScrollHandler(obj3);
    class Ee {
      constructor() {
        return mode.get();
      }
    }
    Ee.__closure = { mode };
    Ee.__workletHash = 9335671323831;
    Ee.__initData = closure_51;
    class De {
      constructor(arg0, arg1) {
        tmp = null != arg1 && scrollPosition !== arg1;
        if (tmp) {
          tmp2 = setMode;
          if (scrollPosition === setMode.PANEL) {
            tmp3 = setMode;
            if (arg1 === setMode.PIP) {
              tmp7 = closure_22;
              flag2 = false;
              result = closure_22.set(false);
            }
          }
          tmp4 = setMode;
          if (scrollPosition === setMode.PIP) {
            tmp5 = closure_22;
            flag = true;
            result1 = closure_22.set(true);
          }
        }
        return;
      }
    }
    obj5 = { VoicePanelModes: setMode, lockScrolling: sharedValue1 };
    De.__closure = obj5;
    De.__workletHash = 15902278985136;
    De.__initData = closure_52;
    const animatedReaction2 = channelId(closure_2[15]).useAnimatedReaction(Ee, De);
    const obj16 = channelId(closure_2[15]);
    const token = channelId(closure_2[25]).useToken(callback(closure_2[14]).modules.mobile.VOICE_PANEL_GUTTER);
    const obj18 = channelId(closure_2[25]);
    class Me {
      constructor() {
        tmp = mode.get() === setMode.PIP;
        tmp2 = tmp;
        if (!tmp) {
          tmp3 = focused;
          tmp4 = null;
          tmp2 = null != focused.get();
        }
        obj = {};
        str = "auto";
        if (tmp) {
          str = "none";
        }
        obj.pointerEvents = str;
        tmp5 = !tmp2;
        obj.scrollEnabled = tmp5;
        tmp6 = !closure_22.get() && tmp5;
        obj.showsVerticalScrollIndicator = tmp6;
        obj = {};
        tmp7 = dragScrolling(setPanelFullscreen[26]);
        obj.top = tmp7(safeArea.get(), closure_31).height - safeArea.get().top;
        obj.bottom = safeArea.get().bottom;
        obj.scrollIndicatorInsets = obj;
        return obj;
      }
    }
    obj6 = { mode, VoicePanelModes: setMode, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: callback(closure_2[26]), safeArea, edgeGutter: token };
    Me.__closure = obj6;
    Me.__workletHash = 15030832737033;
    Me.__initData = closure_53;
    const items2 = [sharedValue];
    const animatedProps = channelId(closure_2[15]).useAnimatedProps(Me);
    const callback1 = setPanelPIP.useCallback((arg0, arg1) => {
      const result = sharedValue.set(arg1);
    }, items2);
    const obj19 = channelId(closure_2[15]);
    class Te {
      constructor() {
        value = mode.get();
        if (setMode.PIP !== value) {
          tmp10 = setMode;
          if (setMode.DISMISSED !== value) {
            tmp11 = connected;
            if (connected.get()) {
              tmp2 = useAnimatedRef;
              if (useAnimatedRef.get().active) {
                tmp3 = useAnimatedRef;
                if (useAnimatedRef.get().requiresPop) {
                  num4 = 1;
                  return 1;
                }
              }
            }
            tmp4 = wrapperDimensions;
            tmp5 = wrapperOffset;
            num = 0;
            num2 = 0;
            if (wrapperOffset.get().gestureActive) {
              tmp6 = wrapperOffset;
              num2 = wrapperOffset.get().y;
            }
            tmp8 = windowDimensions;
            sum = wrapperDimensions.get().drawerY + num2;
            height = windowDimensions.get().height;
            tmp9 = globalThis;
            _Math = Math;
            _Math2 = Math;
            num3 = 1;
            return Math.min(Math.max((height - sum) / height, 0), 1);
          }
        }
        return 0;
      }
    }
    obj7 = { mode, VoicePanelModes: setMode, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset, windowDimensions };
    Te.__closure = obj7;
    Te.__workletHash = 7328947258749;
    Te.__initData = closure_54;
    const obj21 = channelId(closure_2[15]);
    return { gesture: memo1, scrollerRef: animatedRef, scrollNativeGesture: memo, viewableChunks: sharedValue3, handleScroll: animatedScrollHandler, scrollViewProps: animatedProps, onContentSizeChange: callback1, wrapperOffset, scrollableRegionSize: sharedValue, gestureState: sharedValue4, opacity: channelId(closure_2[15]).useDerivedValue(Te) };
  }(obj);
  ({ gestureState, wrapperOffset } = tmp7);
  ({ gesture, handleScroll, onContentSizeChange, scrollViewProps, scrollerRef, scrollNativeGesture, viewableChunks, opacity } = tmp7);
  const tmp8 = importDefault(closure_2[37])();
  callback = tmp8;
  const items3 = [tmp8];
  const effect = importAllResult.useEffect(() => {
    tmp8.lock();
  }, items3);
  const effect1 = importAllResult.useEffect(() => callback(true), []);
  let tmp11 = null;
  if (tmp4[0]) {
    obj = { value: tmp2(importDefault(closure_2[35]).VOICE_PANEL).analyticsLocations };
    obj = {};
    const items4 = [callback2(importDefault(closure_2[39]), {}), , ];
    const obj1 = { opacity, onPress: dismissPanel };
    items4[1] = callback2(closure_69, obj1);
    const obj2 = { style: tmp.accessibilityView };
    const _HermesInternal = HermesInternal;
    obj2.nativeID = "voice-panel-ui-" + channelId;
    obj2.accessibilityViewIsModal = true;
    obj2.layout = closure_25;
    obj2.onAccessibilityEscape = importDefault(closure_2[41]);
    const items5 = [callback2(importDefault(closure_2[42]), {}), , , ];
    const obj3 = { wrapperOffset };
    const obj4 = { zIndex: 2 };
    const obj5 = { wrapperOffset, gestureState, layout: closure_25 };
    obj4.children = callback2(importDefault(closure_2[43]), obj5);
    const items6 = [callback2(arg1(closure_2[38]).LayerScope, obj4), ];
    const obj6 = { gesture };
    const obj7 = { style: StyleSheet.absoluteFill, layout: closure_25, collapsable: false };
    const tmp20 = importDefault(closure_2[40]);
    const obj8 = { gesture: scrollNativeGesture };
    const obj9 = { layout: closure_28, ref: scrollerRef, onScroll: handleScroll, onMomentumScrollEnd: NOOP, animatedProps: scrollViewProps, style: tmp.scrollView, onContentSizeChange, contentContainerStyle: tmp.scrollViewContent, scrollEventThrottle: 8.333333333333334 };
    const obj10 = { viewableChunks };
    const items7 = [callback2(importDefault(closure_2[44]), obj10), callback2(importDefault(closure_2[45]), {})];
    obj9.children = items7;
    obj8.children = callback3(closure_33, obj9);
    obj7.children = callback2(arg1(closure_2[19]).GestureDetector, obj8);
    obj6.children = callback2(importDefault(closure_2[33]), obj7);
    items6[1] = callback2(arg1(closure_2[19]).GestureDetector, obj6);
    obj3.children = items6;
    items5[1] = callback3(AnimatedWrapper, obj3);
    items5[2] = callback2(importDefault(closure_2[46]), {});
    const obj11 = { gestureState };
    items5[3] = callback2(importDefault(closure_2[47]), obj11);
    obj2.children = items5;
    items4[2] = callback3(tmp20, obj2);
    obj.children = items4;
    obj.children = callback3(arg1(closure_2[38]).LayerScope, obj);
    tmp11 = callback2(arg1(closure_2[34]).AnalyticsLocationProvider, obj);
    const tmp30 = importDefault(closure_2[33]);
  }
  return tmp11;
});
const result = arg1(dependencyMap[48]).fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default memoResult;
export const REDUCED_MOTION_OPACITY_PHYSICS = obj1;
