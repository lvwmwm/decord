// Module ID: 5573
// Function ID: 47291
// Name: StyleSheet
// Dependencies: []

// Module 5573 (StyleSheet)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const StyleSheet = tmp2.StyleSheet;
const View = tmp2.View;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
const styles = StyleSheet.create({ container: { "Bool(false)": "<string:1874982337>", "Bool(false)": "<string:3226878612>" }, scene: { flex: 1 } });

export default importAllResult.memo(function CardContainer(active) {
  let animationEnabled;
  let cardOverlay;
  let cardOverlayEnabled;
  let cardShadowEnabled;
  let cardStyle;
  let cardStyleInterpolator;
  let closing;
  let detachCurrentScreen;
  let focused;
  let gesture;
  let gestureDirection;
  let gestureEnabled;
  let gestureResponseDistance;
  let gestureVelocityImpact;
  let getFocusedRoute;
  let getPreviousScene;
  let hasAbsoluteFloatHeader;
  let headerDarkContent;
  let headerHeight;
  let headerMode;
  let headerShown;
  let index;
  let interpolationIndex;
  let isNextScreenTransparent;
  let isParentHeaderShown;
  let layout;
  let modal;
  let onHeaderHeightChange;
  let options2;
  let presentation;
  let renderHeader;
  let renderScene;
  let route;
  let safeAreaInsetBottom;
  let safeAreaInsetLeft;
  let safeAreaInsetRight;
  let safeAreaInsetTop;
  let scene;
  let transitionSpec;
  active = active.active;
  const arg1 = active;
  ({ focused, getPreviousScene, headerHeight, isParentHeaderShown, layout, onCloseRoute: closure_1, onOpenRoute: closure_2, onGestureCancel: closure_3, onGestureEnd: closure_4, onGestureStart: closure_5, onTransitionEnd: closure_6, onTransitionStart: closure_7, scene } = active);
  ({ interpolationIndex, index, closing, gesture, modal, getFocusedRoute, headerDarkContent, hasAbsoluteFloatHeader, onHeaderHeightChange, isNextScreenTransparent, detachCurrentScreen, renderHeader, renderScene, safeAreaInsetBottom, safeAreaInsetLeft, safeAreaInsetRight, safeAreaInsetTop } = active);
  const context = importAllResult.useContext(arg1(dependencyMap[4]).HeaderHeightContext);
  const items = [scene.descriptor];
  const tmp2 = importDefault(dependencyMap[5]);
  ({ onPageChangeStart: closure_9, onPageChangeCancel: closure_10, onPageChangeConfirm: closure_11 } = importDefault(dependencyMap[5])(importAllResult.useCallback(() => {
    let navigation;
    let options;
    ({ navigation, options } = scene.descriptor);
    let isFocusedResult = navigation.isFocused();
    if (isFocusedResult) {
      isFocusedResult = false !== options.keyboardHandlingEnabled;
    }
    return isFocusedResult;
  }, items)));
  let obj = arg1(dependencyMap[6]);
  let str = "box-none";
  const tmp4 = callback(importAllResult.useState("box-none"), 2);
  const first = tmp4[0];
  let closure_12 = tmp4[1];
  const items1 = [first, scene.progress.next];
  const effect = importAllResult.useEffect(() => {
    const next = scene.progress.next;
    let addListenerResult;
    if (null != next) {
      if (null != next.addListener) {
        addListenerResult = next.addListener((value) => {
          let str = "none";
          if (value.value <= 0.1) {
            str = "box-none";
          }
          closure_12(str);
        });
      }
    }
    const active = addListenerResult;
    return () => {
      if (addListenerResult) {
        const next = progress.progress.next;
        if (!tmp3) {
          next.removeListener(addListenerResult);
        }
        const tmp3 = null == next || null == next.removeListener;
      }
    };
  }, items1);
  const options = scene.descriptor.options;
  ({ presentation, headerMode, headerShown } = options);
  obj = { route: scene.descriptor.route };
  ({ animationEnabled, cardOverlay, cardOverlayEnabled, cardShadowEnabled, cardStyle, cardStyleInterpolator, gestureDirection, gestureEnabled, gestureResponseDistance, gestureVelocityImpact, transitionSpec } = options);
  const previousScene = getPreviousScene(obj);
  let tmp8;
  if (previousScene) {
    ({ options: options2, route } = previousScene.descriptor);
    let obj2 = arg1(dependencyMap[4]);
    const headerTitle = obj2.getHeaderTitle(options2, route.name);
    tmp8 = headerTitle;
  }
  const items2 = [tmp8];
  const memo = importAllResult.useMemo(() => {
    let tmp;
    if (undefined !== headerTitle) {
      const obj = { title: headerTitle };
      tmp = obj;
    }
    return tmp;
  }, items2);
  obj = {
    interpolationIndex,
    gestureDirection,
    layout,
    insets: { top: safeAreaInsetTop, right: safeAreaInsetRight, bottom: safeAreaInsetBottom, left: safeAreaInsetLeft },
    gesture,
    current: scene.progress.current,
    next: scene.progress.next,
    closing,
    onOpen: function handleOpen() {
      const route = scene.descriptor.route;
      callback6({ route }, false);
      callback2({ route });
    },
    onClose: function handleClose() {
      const route = scene.descriptor.route;
      callback6({ route }, true);
      callback({ route });
    },
    overlay: cardOverlay,
    overlayEnabled: cardOverlayEnabled,
    shadowEnabled: cardShadowEnabled,
    onTransition: function handleTransition(closing) {
      closing = closing.closing;
      if (closing.gesture) {
        if (active) {
          if (closing) {
            if (null != callback10) {
              callback10(false);
            }
          }
        }
        if (null != callback9) {
          callback9();
        }
      } else if (null != callback10) {
        callback10(true);
      }
      if (null != callback7) {
        const obj = { route: scene.descriptor.route };
        callback7(obj, closing);
      }
    },
    onGestureBegin: function handleGestureBegin() {
      callback8();
      callback5({ route: scene.descriptor.route });
    },
    onGestureCanceled: function handleGestureCanceled() {
      callback9();
      callback3({ route: scene.descriptor.route });
    },
    onGestureEnd: function handleGestureEnd() {
      callback4({ route: scene.descriptor.route });
    }
  };
  let tmp15 = 0 !== index;
  const tmp13 = closure_7;
  const tmp2Result = importDefault(dependencyMap[5])(importAllResult.useCallback(() => {
    let navigation;
    let options;
    ({ navigation, options } = scene.descriptor);
    let isFocusedResult = navigation.isFocused();
    if (isFocusedResult) {
      isFocusedResult = false !== options.keyboardHandlingEnabled;
    }
    return isFocusedResult;
  }, items));
  if (tmp15) {
    tmp15 = gestureEnabled;
  }
  obj.gestureEnabled = tmp15;
  obj.gestureResponseDistance = gestureResponseDistance;
  obj.gestureVelocityImpact = gestureVelocityImpact;
  obj.transitionSpec = transitionSpec;
  obj.styleInterpolator = cardStyleInterpolator;
  obj.accessibilityElementsHidden = !focused;
  let str2 = "no-hide-descendants";
  if (focused) {
    str2 = "auto";
  }
  obj.importantForAccessibility = str2;
  if (!active) {
    str = first;
  }
  obj.pointerEvents = str;
  let tmp17 = tmp16;
  if ("float" !== headerMode) {
    tmp17 = "modal" !== presentation;
  }
  obj.pageOverflowEnabled = tmp17;
  obj.headerDarkContent = headerDarkContent;
  let tmp18 = null;
  if (hasAbsoluteFloatHeader) {
    tmp18 = null;
    if ("screen" !== headerMode) {
      const obj1 = { marginTop: headerHeight };
      tmp18 = obj1;
    }
  }
  obj.containerStyle = tmp18;
  obj2 = {};
  let str5 = "transparent";
  if ("transparentModal" !== presentation) {
    str5 = obj.useTheme().colors.background;
  }
  obj2.backgroundColor = str5;
  const items3 = [obj2, cardStyle];
  obj.contentStyle = items3;
  const obj3 = { overflow: "hidden" };
  if (false === animationEnabled) {
    if (false === isNextScreenTransparent) {
      if (false !== detachCurrentScreen) {
        let str7 = "none";
      }
      obj3.display = str7;
      const items4 = [obj3, StyleSheet.absoluteFill];
      obj.style = items4;
      const obj4 = { style: closure_9.container };
      const obj5 = { value: modal };
      const obj6 = { style: closure_9.scene };
      const obj7 = { value: memo };
      const obj8 = {};
      if (!isParentHeaderShown) {
        isParentHeaderShown = false !== headerShown;
      }
      obj8.value = isParentHeaderShown;
      const obj9 = {};
      if (!headerShown) {
        let num2 = 0;
        if (null != context) {
          num2 = context;
        }
        headerHeight = num2;
      }
      obj9.value = headerHeight;
      const obj10 = { route: scene.descriptor.route };
      obj9.children = renderScene(obj10);
      obj8.children = closure_7(arg1(dependencyMap[4]).HeaderHeightContext.Provider, obj9);
      obj7.children = closure_7(arg1(dependencyMap[4]).HeaderShownContext.Provider, obj8);
      obj6.children = closure_7(arg1(dependencyMap[4]).HeaderBackContext.Provider, obj7);
      const items5 = [closure_7(View, obj6), ];
      let renderHeaderResult = null;
      if (tmp16) {
        const obj11 = { mode: "screen", layout };
        const items6 = [previousScene, scene];
        obj11.scenes = items6;
        obj11.getPreviousScene = getPreviousScene;
        obj11.getFocusedRoute = getFocusedRoute;
        obj11.onContentHeightChange = onHeaderHeightChange;
        renderHeaderResult = renderHeader(obj11);
      }
      items5[1] = renderHeaderResult;
      obj5.children = items5;
      obj4.children = scene(importDefault(dependencyMap[8]).Provider, obj5);
      obj.children = closure_7(View, obj4);
      return tmp13(tmp14, obj);
    }
  }
  str7 = "flex";
});
