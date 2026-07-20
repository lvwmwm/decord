// Module ID: 4474
// Function ID: 39501
// Name: Animated
// Dependencies: []

// Module 4474 (Animated)
let closure_3 = [595040187689579500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 9488053126397784000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011570867733742901];
let closure_4 = ["<string:1190556884>", "<string:385057142>", "<string:1676108229>", "<string:1418489705>", "<string:2616239615>", "<string:2738070324>", "<string:1105716066>", " ", "<string:1107289169>"];
let closure_5 = [true, true, true, true];
let closure_6 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
const Animated = arg1(dependencyMap[2]).Animated;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_10 = Animated.createAnimatedComponent(importDefault(dependencyMap[4]));
const animatedComponent = Animated.createAnimatedComponent(importDefault(dependencyMap[5]));
const forwardRefResult = importDefaultResult.forwardRef(function InnerScreen(activityState) {
  let active;
  let active2;
  let activityState2;
  let children;
  let fullScreenSwipeEnabled;
  let gestureResponseDistance;
  let isNativeStack;
  let onComponentRef;
  let onGestureCancel;
  let scrollEdgeEffects;
  let style;
  const arg1 = activityState;
  const importDefault = importDefaultResult.useRef(null);
  const imperativeHandle = importDefaultResult.useImperativeHandle(arg1, () => ref.current, []);
  let obj = arg1(dependencyMap[6]);
  const previous = obj.usePrevious(activityState.activityState);
  function setRef(current) {
    closure_1.current = current;
    if (null != current.onComponentRef) {
      current.onComponentRef(current);
    }
  }
  const dependencyMap = setRef;
  let value = new Animated.Value(0);
  const current = importDefaultResult.useRef(value).current;
  value = new Animated.Value(0);
  const current2 = importDefaultResult.useRef(value).current;
  const value1 = new Animated.Value(0);
  const current3 = importDefaultResult.useRef(value1).current;
  let enabled = activityState.enabled;
  if (undefined === enabled) {
    let obj1 = arg1(dependencyMap[7]);
    enabled = obj1.screensEnabled();
  }
  let freezeOnBlur = activityState.freezeOnBlur;
  if (undefined === freezeOnBlur) {
    let obj2 = arg1(dependencyMap[7]);
    freezeOnBlur = obj2.freezeEnabled();
  }
  let shouldFreeze = activityState.shouldFreeze;
  const tmp10 = callback(activityState, closure_3);
  let sheetAllowedDetents = tmp10.sheetAllowedDetents;
  if (undefined === sheetAllowedDetents) {
    sheetAllowedDetents = [24573934974154670000000000000000000000000000000000000000000000000000000000000];
  }
  let SHEET_DIMMED_ALWAYS = tmp10.sheetLargestUndimmedDetentIndex;
  if (undefined === SHEET_DIMMED_ALWAYS) {
    SHEET_DIMMED_ALWAYS = arg1(dependencyMap[8]).SHEET_DIMMED_ALWAYS;
  }
  const sheetGrabberVisible = tmp10.sheetGrabberVisible;
  const sheetCornerRadius = tmp10.sheetCornerRadius;
  let num4 = -1;
  let num5 = -1;
  if (undefined !== sheetCornerRadius) {
    num5 = sheetCornerRadius;
  }
  const sheetExpandsWhenScrolledToEdge = tmp10.sheetExpandsWhenScrolledToEdge;
  const sheetElevation = tmp10.sheetElevation;
  let num6 = 24;
  if (undefined !== sheetElevation) {
    num6 = sheetElevation;
  }
  let sheetInitialDetentIndex = tmp10.sheetInitialDetentIndex;
  let num7 = 0;
  if (undefined !== sheetInitialDetentIndex) {
    num7 = sheetInitialDetentIndex;
  }
  const sheetShouldOverflowTopInset = tmp10.sheetShouldOverflowTopInset;
  const sheetDefaultResizeAnimationEnabled = tmp10.sheetDefaultResizeAnimationEnabled;
  if (enabled) {
    if (arg1(dependencyMap[7]).isNativePlatformSupported) {
      let obj5 = arg1(dependencyMap[8]);
      const sheetAllowedDetents1 = obj5.resolveSheetAllowedDetents(sheetAllowedDetents);
      let obj6 = arg1(dependencyMap[8]);
      const sheetLargestUndimmedDetent = obj6.resolveSheetLargestUndimmedDetent(SHEET_DIMMED_ALWAYS, sheetAllowedDetents1.length - 1);
      let obj7 = arg1(dependencyMap[8]);
      ({ active: active2, activityState: activityState2, children, isNativeStack, gestureResponseDistance, scrollEdgeEffects, onGestureCancel } = tmp10);
      sheetInitialDetentIndex = obj7.resolveSheetInitialDetentIndex(num7, sheetAllowedDetents1.length - 1);
      ({ fullScreenSwipeEnabled, style } = tmp10);
      let tmp35 = undefined !== active2;
      if (tmp35) {
        tmp35 = undefined === activityState2;
      }
      if (tmp35) {
        const _console = console;
        console.warn("It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens");
        let num12 = 0;
        if (0 !== active2) {
          num12 = 2;
        }
        activityState2 = num12;
      }
      importDefault(dependencyMap[9])(false, "[RNScreens] Using featureFlags `ios26AllowInteractionsDuringTransition` with `iosPreventReattachmentOfDismissedScreens` disabled is discouraged and will result in visual bugs on screen transitions. See flags description for details.");
      if (isNativeStack) {
        if (undefined !== previous) {
          if (undefined !== activityState2) {
            if (previous > activityState2) {
              const _Error = Error;
              const error = new Error("[RNScreens] activityState cannot be decreased in NativeStack");
              throw error;
            }
          }
        }
      }
      if (freezeOnBlur) {
        if (undefined === shouldFreeze) {
          shouldFreeze = 0 === activityState2;
        }
        freezeOnBlur = shouldFreeze;
      }
      obj = { freeze: freezeOnBlur };
      obj = { onAppear: tmp18, onDisappear: tmp19, onWillAppear: tmp20, onWillDisappear: tmp21 };
      const tmp31 = closure_10;
      const tmp34 = callback(tmp10, closure_4);
      if (null == onGestureCancel) {
        onGestureCancel = () => {

        };
      }
      obj.onGestureCancel = onGestureCancel;
      const items = [style, ];
      obj1 = { zIndex: undefined };
      items[1] = obj1;
      obj.style = items;
      obj.activityState = activityState2;
      obj.screenId = tmp17;
      obj.sheetAllowedDetents = sheetAllowedDetents1;
      obj.sheetLargestUndimmedDetent = sheetLargestUndimmedDetent;
      obj.sheetElevation = num6;
      obj.sheetShouldOverflowTopInset = tmp15;
      obj.sheetDefaultResizeAnimationEnabled = tmp16;
      obj.sheetGrabberVisible = tmp13;
      obj.sheetCornerRadius = num5;
      obj.sheetExpandsWhenScrolledToEdge = tmp14;
      obj.sheetInitialDetent = sheetInitialDetentIndex;
      const tmp44 = importDefault(dependencyMap[10]);
      obj.fullScreenSwipeEnabled = arg1(dependencyMap[11]).parseBooleanToOptionalBooleanNativeProp(fullScreenSwipeEnabled);
      obj2 = {};
      let start;
      if (null != gestureResponseDistance) {
        start = gestureResponseDistance.start;
      }
      let tmp49 = num4;
      if (null != start) {
        tmp49 = start;
      }
      obj2.start = tmp49;
      let end;
      if (null != gestureResponseDistance) {
        end = gestureResponseDistance.end;
      }
      let tmp51 = num4;
      if (null != end) {
        tmp51 = end;
      }
      obj2.end = tmp51;
      let top;
      if (null != gestureResponseDistance) {
        top = gestureResponseDistance.top;
      }
      let tmp53 = num4;
      if (null != top) {
        tmp53 = top;
      }
      obj2.top = tmp53;
      let bottom;
      if (null != gestureResponseDistance) {
        bottom = gestureResponseDistance.bottom;
      }
      if (null != bottom) {
        num4 = bottom;
      }
      obj2.bottom = num4;
      obj.gestureResponseDistance = obj2;
      obj.ref = function handleRef(viewConfig) {
        if (null != viewConfig) {
          viewConfig = viewConfig.viewConfig;
          if (null != viewConfig) {
            let validAttributes = viewConfig.validAttributes;
            if (null != validAttributes) {
              if (validAttributes.style) {
                const _Object3 = Object;
                let obj = { display: null };
                viewConfig.viewConfig.validAttributes.style = Object.assign({}, viewConfig.viewConfig.validAttributes.style, obj);
              }
              setRef(viewConfig);
            }
          }
        }
        if (null != viewConfig) {
          const _viewConfig = viewConfig._viewConfig;
          if (null != _viewConfig) {
            validAttributes = _viewConfig.validAttributes;
            if (null != validAttributes) {
              if (validAttributes.style) {
                const _Object2 = Object;
                obj = { display: null };
                viewConfig._viewConfig.validAttributes.style = Object.assign({}, viewConfig._viewConfig.validAttributes.style, obj);
              }
            }
          }
        }
        let style = null != viewConfig;
        let tmp;
        if (style) {
          const __viewConfig = viewConfig.__viewConfig;
          style = null != __viewConfig;
          tmp = __viewConfig;
        }
        let tmp2 = tmp;
        if (style) {
          validAttributes = tmp.validAttributes;
          style = null != validAttributes;
          tmp2 = validAttributes;
        }
        if (style) {
          style = tmp2.style;
        }
        if (style) {
          const _Object = Object;
          obj = { display: null };
          viewConfig.__viewConfig.validAttributes.style = Object.assign({}, viewConfig.__viewConfig.validAttributes.style, obj);
        }
      };
      let eventResult;
      if (isNativeStack) {
        const obj3 = {};
        const obj4 = { progress: current2, closing: current, goingForward: current3 };
        obj3.nativeEvent = obj4;
        const items1 = [obj3];
        obj5 = { useNativeDriver: true };
        eventResult = Animated.event(items1, obj5);
      }
      obj.onTransitionProgress = eventResult;
      let bottom1;
      if (null != scrollEdgeEffects) {
        bottom1 = scrollEdgeEffects.bottom;
      }
      obj.bottomScrollEdgeEffect = bottom1;
      let left;
      if (null != scrollEdgeEffects) {
        left = scrollEdgeEffects.left;
      }
      obj.leftScrollEdgeEffect = left;
      let right;
      if (null != scrollEdgeEffects) {
        right = scrollEdgeEffects.right;
      }
      obj.rightScrollEdgeEffect = right;
      let top1;
      if (null != scrollEdgeEffects) {
        top1 = scrollEdgeEffects.top;
      }
      obj.topScrollEdgeEffect = top1;
      obj.synchronousShadowStateUpdatesEnabled = importDefault(dependencyMap[12]).experiment.synchronousScreenUpdatesEnabled;
      obj.androidResetScreenShadowStateOnOrientationChangeEnabled = importDefault(dependencyMap[12]).experiment.androidResetScreenShadowStateOnOrientationChangeEnabled;
      obj.ios26AllowInteractionsDuringTransition = importDefault(dependencyMap[12]).experiment.ios26AllowInteractionsDuringTransition;
      let tmp63 = children;
      if (isNativeStack) {
        obj6 = {};
        obj7 = { progress: current2, closing: current, goingForward: current3 };
        obj6.value = obj7;
        obj6.children = children;
        tmp63 = jsx(importDefault(dependencyMap[13]).Provider, obj6);
      }
      obj.children = tmp63;
      obj.children = <tmp31 {...Object.assign({}, tmp34, obj)} />;
      return <tmp44 {...obj} />;
    }
  }
  ({ active, activityState, onComponentRef } = tmp10);
  let tmp25 = undefined !== active;
  if (tmp25) {
    tmp25 = undefined === activityState;
  }
  if (tmp25) {
    let num9 = 0;
    if (0 !== active) {
      num9 = 2;
    }
    activityState = num9;
  }
  const obj8 = {};
  const items2 = [tmp10.style, ];
  const obj9 = {};
  let str = "none";
  if (0 !== activityState) {
    str = "flex";
  }
  obj9.display = str;
  items2[1] = obj9;
  obj8.style = items2;
  obj8.ref = setRef;
  return <Animated.View {...Object.assign(obj8, callback(tmp10, closure_5))} />;
});
const context = importDefaultResult.createContext(forwardRefResult);
const forwardRefResult1 = importDefaultResult.forwardRef((arg0, ref) => jsx(importDefaultResult.useContext(context) || forwardRefResult, Object.assign({}, arg0, { ref })));
forwardRefResult1.displayName = "Screen";

export default forwardRefResult1;
export const InnerScreen = forwardRefResult;
export const ScreenContext = context;
