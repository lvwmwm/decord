// Module ID: 9115
// Function ID: 71400
// Name: NativeStackViewInner
// Dependencies: [57, 31, 27, 33, 1457, 4487, 9116, 4478, 1560, 5528, 9117, 9120, 9121]
// Exports: default

// Module 9115 (NativeStackViewInner)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Platform;
let StyleSheet;
let closure_7;
let closure_8;
const require = arg1;
function NativeStackViewInner(state) {
  let descriptors;
  let importDefault;
  state = state.state;
  ({ navigation: importDefault, descriptors } = state);
  const setNextDismissedKey = importDefault(descriptors[11])(state).setNextDismissedKey;
  importDefault(descriptors[12])(descriptors);
  let obj = { style: closure_11.container };
  const routes = state.routes;
  obj.children = routes.map((key, index) => {
    const state = key;
    key = undefined;
    if (null != state.routes[index - 1]) {
      key = tmp.key;
    }
    let key1;
    if (null != state.routes[index + 1]) {
      key1 = tmp3.key;
    }
    let tmp5;
    if (key) {
      tmp5 = descriptors[key];
    }
    let tmp7;
    if (key1) {
      tmp7 = descriptors[key1];
    }
    const obj = {
      index,
      focused: state.index === index,
      descriptor: descriptors[key.key],
      previousDescriptor: tmp5,
      nextDescriptor: tmp7,
      onWillDisappear(onDidDisappear, arg1) {
        outer1_1.emit({ type: "transitionStart", data: { closing: true }, target: key.key });
      },
      onWillAppear(arg0) {
        outer1_1.emit({ type: "transitionStart", data: { closing: false }, target: key.key });
      },
      onAppear() {
        outer1_1.emit({ type: "transitionEnd", data: { closing: false }, target: key.key });
      },
      onDisappear() {
        outer1_1.emit({ type: "transitionEnd", data: { closing: true }, target: key.key });
      },
      onDismissed(nativeEvent) {
        const StackActions = state(descriptors[4]).StackActions;
        outer1_1.dispatch(Object.assign({}, StackActions.pop(nativeEvent.nativeEvent.dismissCount), { source: key.key, target: key.key }));
        outer1_3(key.key);
      },
      onHeaderBackButtonClicked() {
        const StackActions = state(descriptors[4]).StackActions;
        outer1_1.dispatch(Object.assign({}, StackActions.pop(), { source: key.key, target: key.key }));
      },
      onNativeDismissCancelled(nativeEvent) {
        const StackActions = state(descriptors[4]).StackActions;
        outer1_1.dispatch(Object.assign({}, StackActions.pop(nativeEvent.nativeEvent.dismissCount), { source: key.key, target: key.key }));
      },
      onGestureCancel() {
        outer1_1.emit({ type: "gestureCancel", target: key.key });
      }
    };
    return outer1_7(outer1_10, obj, key.key);
  });
  return callback2(state(descriptors[7]).ScreenStack, obj);
}
({ Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
function MaybeNestedStack(children) {
  let header;
  let headerHeight;
  let headerShown;
  let headerTopInsetEnabled;
  let options;
  let presentation;
  let route;
  ({ options, route } = children);
  ({ presentation, headerHeight, headerTopInsetEnabled } = children);
  let obj = route(1457);
  ({ header, headerShown } = options);
  let tmp = undefined === headerShown;
  if (!tmp) {
    tmp = headerShown;
  }
  const importDefault = tmp;
  const dependencyMap = React.useRef(tmp);
  const items = [tmp, presentation, route.name];
  const effect = React.useEffect(() => {
    tmp = tmp(table[5]);
    tmp(false, "Dynamically changing 'headerShown' in modals will result in remounting the screen and losing all local state. See options for the screen '" + route.name + "'.");
    table.current = tmp;
  }, items);
  obj = {};
  const items1 = [closure_11.container, , ];
  let tmp5 = "transparentModal" !== presentation;
  if (tmp5) {
    tmp5 = "containedTransparentModal" !== presentation;
  }
  if (tmp5) {
    obj = {};
    obj.backgroundColor = obj.useTheme().colors.background;
    tmp5 = obj;
  }
  items1[1] = tmp5;
  items1[2] = options.contentStyle;
  obj.style = items1;
  let str2 = "push";
  if ("card" !== presentation) {
    str2 = presentation;
  }
  obj.stackPresentation = str2;
  obj.children = children.children;
  return closure_7(importDefault(9116), obj);
}
function SceneView(arg0) {
  let animation;
  let autoHideHomeIndicator;
  let customAnimationOnGesture;
  let descriptor;
  let focused;
  let freezeOnBlur;
  let fullScreenGestureEnabled;
  let gestureEnabled;
  let gestureResponseDistance;
  let header;
  let headerBackButtonMenuEnabled;
  let headerBackground;
  let headerShown;
  let headerTransparent;
  let height;
  let index;
  let keyboardHandlingEnabled;
  let navigation;
  let navigationBarColor;
  let navigationBarHidden;
  let nextDescriptor;
  let onAppear;
  let onDisappear;
  let onDismissed;
  let onGestureCancel;
  let onHeaderBackButtonClicked;
  let onNativeDismissCancelled;
  let onWillAppear;
  let onWillDisappear;
  let options;
  let orientation;
  let presentation;
  let previousDescriptor;
  let route;
  let sheetAllowedDetents;
  let statusBarAnimation;
  let statusBarColor;
  let statusBarHidden;
  let statusBarStyle;
  let statusBarTranslucent;
  let width;
  ({ focused, descriptor, previousDescriptor, nextDescriptor } = arg0);
  ({ route, navigation, options } = descriptor);
  ({ index, onWillDisappear, onWillAppear, onAppear, onDisappear, onDismissed, onHeaderBackButtonClicked, onNativeDismissCancelled, onGestureCancel } = arg0);
  let obj = _require(4478);
  const UNSTABLE_headerInsets = options.UNSTABLE_headerInsets;
  let left;
  if (null != UNSTABLE_headerInsets) {
    left = UNSTABLE_headerInsets.left;
  }
  const UNSTABLE_headerInsets2 = options.UNSTABLE_headerInsets;
  let right;
  if (null != UNSTABLE_headerInsets2) {
    right = UNSTABLE_headerInsets2.right;
  }
  const UNSTABLE_headerInsets3 = options.UNSTABLE_headerInsets;
  let bottom;
  if (null != UNSTABLE_headerInsets3) {
    bottom = UNSTABLE_headerInsets3.bottom;
  }
  const animationTypeForReplace = options.animationTypeForReplace;
  let str = "push";
  let str2 = "push";
  if (undefined !== animationTypeForReplace) {
    str2 = animationTypeForReplace;
  }
  const fullScreenGestureShadowEnabled = options.fullScreenGestureShadowEnabled;
  ({ gestureEnabled, header, headerBackButtonMenuEnabled, headerShown, headerBackground, headerTransparent, sheetAllowedDetents } = options);
  let str3 = "large";
  ({ gestureResponseDistance, autoHideHomeIndicator, keyboardHandlingEnabled, navigationBarColor, navigationBarHidden, orientation } = options);
  if (undefined !== sheetAllowedDetents) {
    str3 = sheetAllowedDetents;
  }
  const sheetLargestUndimmedDetent = options.sheetLargestUndimmedDetent;
  let str4 = "all";
  if (undefined !== sheetLargestUndimmedDetent) {
    str4 = sheetLargestUndimmedDetent;
  }
  const sheetGrabberVisible = options.sheetGrabberVisible;
  const sheetCornerRadius = options.sheetCornerRadius;
  let num = -1;
  if (undefined !== sheetCornerRadius) {
    num = sheetCornerRadius;
  }
  const sheetExpandsWhenScrolledToEdge = options.sheetExpandsWhenScrolledToEdge;
  ({ statusBarTranslucent, presentation } = options);
  let str5 = "card";
  ({ statusBarAnimation, statusBarHidden, statusBarStyle, statusBarColor, freezeOnBlur, animation, customAnimationOnGesture, fullScreenGestureEnabled } = options);
  if (undefined !== presentation) {
    str5 = presentation;
  }
  let gestureDirection = options.gestureDirection;
  if (undefined === gestureDirection) {
    let str6 = "vertical";
    if ("card" === str5) {
      str6 = "horizontal";
    }
    gestureDirection = str6;
  }
  gestureDirection = undefined;
  if (null != nextDescriptor) {
    gestureDirection = nextDescriptor.options.gestureDirection;
  }
  if (0 === index) {
    str5 = "card";
  }
  let obj1 = _require(1560);
  const safeAreaInsets = obj1.useSafeAreaInsets();
  let obj2 = _require(1560);
  const safeAreaFrame = obj2.useSafeAreaFrame();
  let tmp10 = "modal" === str5;
  if (!tmp10) {
    tmp10 = "formSheet" === str5;
  }
  ({ width, height } = safeAreaFrame);
  let context = React.useContext(_require(5528).HeaderShownContext);
  const context1 = React.useContext(_require(5528).HeaderHeightContext);
  let num2 = 0;
  const context2 = React.useContext(_require(5528).HeaderBackContext);
  if (!context) {
    num2 = safeAreaInsets.top;
  }
  let obj3 = _require(1457);
  let obj4 = _require(5528);
  let defaultHeaderHeight = obj4.getDefaultHeaderHeight(safeAreaFrame, tmp10, num2);
  const tmp15 = callback(React.useState(defaultHeaderHeight), 2);
  _require = tmp15[1];
  let tmp16 = statusBarTranslucent;
  if ("boolean" !== typeof statusBarTranslucent) {
    tmp16 = 0 !== num2;
  }
  if (header) {
    defaultHeaderHeight = tmp15[0];
  }
  let tmp17 = context2;
  if (previousDescriptor) {
    obj = {};
    let obj6 = _require(5528);
    obj.title = obj6.getHeaderTitle(previousDescriptor.options, previousDescriptor.route.name);
    tmp17 = obj;
  }
  const tmp20 = obj3.usePreventRemoveContext().preventedRoutes[route.key];
  let preventRemove;
  if (null != tmp20) {
    preventRemove = tmp20.preventRemove;
  }
  obj = { enabled: true, isNativeStack: true, style: StyleSheet.absoluteFill };
  const headerLargeTitle = options.headerLargeTitle;
  let tmp23 = null != headerLargeTitle;
  if (tmp23) {
    tmp23 = headerLargeTitle;
  }
  obj.hasLargeHeader = tmp23;
  obj.customAnimationOnSwipe = customAnimationOnGesture;
  obj.fullScreenSwipeEnabled = fullScreenGestureEnabled;
  obj.fullScreenSwipeShadowEnabled = undefined !== fullScreenGestureShadowEnabled && fullScreenGestureShadowEnabled;
  obj.gestureEnabled = false;
  obj.homeIndicatorHidden = autoHideHomeIndicator;
  obj.hideKeyboardOnSwipe = keyboardHandlingEnabled;
  obj.navigationBarColor = navigationBarColor;
  obj.navigationBarHidden = navigationBarHidden;
  obj.replaceAnimation = str2;
  if ("card" !== str5) {
    str = str5;
  }
  obj.stackPresentation = str;
  obj.stackAnimation = animation;
  obj.screenOrientation = orientation;
  obj.sheetAllowedDetents = str3;
  obj.sheetLargestUndimmedDetent = str4;
  obj.sheetGrabberVisible = undefined !== sheetGrabberVisible && sheetGrabberVisible;
  obj.sheetCornerRadius = num;
  obj.sheetExpandsWhenScrolledToEdge = undefined === sheetExpandsWhenScrolledToEdge || sheetExpandsWhenScrolledToEdge;
  obj.statusBarAnimation = statusBarAnimation;
  obj.statusBarHidden = statusBarHidden;
  obj.statusBarStyle = statusBarStyle;
  obj.statusBarColor = statusBarColor;
  obj.statusBarTranslucent = statusBarTranslucent;
  obj.swipeDirection = gestureDirection;
  obj.transitionDuration = options.animationDuration;
  obj.onWillDisappear = onWillDisappear;
  obj.onWillAppear = onWillAppear;
  obj.onAppear = onAppear;
  obj.onDisappear = onDisappear;
  obj.onDismissed = onDismissed;
  obj.onGestureCancel = onGestureCancel;
  obj.gestureResponseDistance = gestureResponseDistance;
  obj.nativeBackButtonDismissalEnabled = false;
  obj.onHeaderBackButtonClicked = onHeaderBackButtonClicked;
  obj.preventNativeDismiss = preventRemove;
  obj.onNativeDismissCancelled = onNativeDismissCancelled;
  obj.freezeOnBlur = freezeOnBlur;
  obj1 = { value: navigation };
  obj2 = { value: route };
  obj3 = {};
  if (!context) {
    context = false !== headerShown;
  }
  obj3.value = context;
  obj4 = {};
  let tmp29 = defaultHeaderHeight;
  if (false === headerShown) {
    let num3 = 0;
    if (null != context1) {
      num3 = context1;
    }
    tmp29 = num3;
  }
  obj4.value = tmp29;
  let tmp31Result = null;
  if (null != headerBackground) {
    const obj5 = {};
    const items = [closure_11.background, , ];
    let translucent = null;
    if (headerTransparent) {
      translucent = closure_11.translucent;
    }
    items[1] = translucent;
    obj6 = { height: defaultHeaderHeight };
    items[2] = obj6;
    obj5.style = items;
    obj5.children = headerBackground();
    tmp31Result = callback2(View, obj5);
    const tmp31 = callback2;
    const tmp32 = View;
  }
  const items1 = [tmp31Result, , ];
  const obj7 = { accessibilityElementsHidden: !focused };
  let str8 = "no-hide-descendants";
  if (focused) {
    str8 = "auto";
  }
  obj7.importantForAccessibility = str8;
  obj7.style = closure_11.scene;
  const obj8 = { options, route, presentation: str5, headerHeight: defaultHeaderHeight, headerTopInsetEnabled: tmp16 };
  const obj9 = { value: tmp17 };
  const obj10 = { value: obj.useEdgeInsetApplication(false === left, false === right, false === bottom).nextContextValue, children: descriptor.render() };
  obj9.children = callback2(_require(4478).EdgeInsetApplicationContext.Provider, obj10);
  obj8.children = callback2(_require(5528).HeaderBackContext.Provider, obj9);
  const items2 = [callback2(MaybeNestedStack, obj8), ];
  let tmp39Result = null;
  if (undefined !== header) {
    tmp39Result = null;
    if (tmp28) {
      const obj11 = {
        onLayout(nativeEvent) {
              callback(nativeEvent.nativeEvent.layout.height);
            }
      };
      let absolute = null;
      if (headerTransparent) {
        absolute = closure_11.absolute;
      }
      obj11.style = absolute;
      const obj12 = { back: tmp17, options, route, navigation };
      obj11.children = header(obj12);
      tmp39Result = callback2(View, obj11);
      const tmp39 = callback2;
      const tmp40 = View;
    }
  }
  items2[1] = tmp39Result;
  obj7.children = items2;
  items1[1] = closure_8(View, obj7);
  const obj13 = { route };
  if (undefined !== preventRemove) {
    headerBackButtonMenuEnabled = !preventRemove;
  }
  obj13.headerBackButtonMenuEnabled = headerBackButtonMenuEnabled;
  obj13.headerShown = undefined === header && headerShown;
  obj13.headerHeight = defaultHeaderHeight;
  let headerBackTitle;
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  }
  obj13.headerBackTitle = headerBackTitle;
  obj13.headerTopInsetEnabled = tmp16;
  obj13.canGoBack = undefined !== tmp17;
  items1[2] = callback2(importDefault(9117), Object.assign({}, options, obj13));
  obj4.children = items1;
  obj3.children = closure_8(_require(5528).HeaderHeightContext.Provider, obj4);
  obj2.children = callback2(_require(5528).HeaderShownContext.Provider, obj3);
  obj1.children = callback2(_require(1457).NavigationRouteContext.Provider, obj2);
  obj.children = callback2(_require(1457).NavigationContext.Provider, obj1);
  return callback2(_require(4478).Screen, obj, route.key);
}
const styles = StyleSheet.create({ container: { flex: 1 }, scene: { flex: 1, flexDirection: "column-reverse" }, absolute: { position: "absolute", top: 0, left: 0, right: 0 }, translucent: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1, elevation: 1 }, background: { overflow: "hidden" } });

export default function NativeStackView(arg0) {
  const obj = { children: callback2(NativeStackViewInner, Object.assign({}, arg0)) };
  return callback2(require(5528) /* Background */.SafeAreaProviderCompat, obj);
};
