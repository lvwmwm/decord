// Module ID: 1171
// Function ID: 13310
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1171 (_isNativeReflectConstruct)
let Platform;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ Animated: closure_8, Appearance: closure_9, Dimensions: closure_10, Easing: closure_11, Modal: closure_12, PanResponder: closure_13, Platform, ScrollView: closure_14, View: closure_15 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
let closure_16 = arg1(dependencyMap[7]).isNativeDriverSupportedForColorAnimations();

export const FeedbackWidgetProvider = (Component) => {
  class FeedbackWidgetProvider {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, FeedbackWidgetProvider);
      items = [];
      items[0] = Component;
      obj = closure_5(FeedbackWidgetProvider);
      tmp2 = closure_4;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      FeedbackWidgetProvider = tmp2Result;
      obj = {};
      value = new closure_8.Value(0);
      obj.backgroundOpacity = value;
      value1 = new closure_8.Value(closure_10.get("screen").height);
      obj.panY = value1;
      tmp2Result.state = obj;
      obj1 = {
        onStartShouldSetPanResponder(arg0, dy) {
              let isScrollAtTop = tmp2Result(closure_1[8]).notWeb();
              if (isScrollAtTop) {
                isScrollAtTop = tmp2Result.state.isScrollAtTop;
              }
              if (isScrollAtTop) {
                isScrollAtTop = dy.dy > 0;
              }
              return isScrollAtTop;
            },
        onMoveShouldSetPanResponder(arg0, dy) {
              let isScrollAtTop = tmp2Result(closure_1[8]).notWeb();
              if (isScrollAtTop) {
                isScrollAtTop = tmp2Result.state.isScrollAtTop;
              }
              if (isScrollAtTop) {
                isScrollAtTop = dy.dy > 0;
              }
              return isScrollAtTop;
            },
        onPanResponderMove(arg0, dy) {
              if (dy.dy > 0) {
                const panY = tmp2Result.state.panY;
                panY.setValue(dy.dy);
              }
            },
        onPanResponderRelease(arg0, dy) {
              if (dy.dy > tmp2Result(closure_1[9]).PULL_DOWN_CLOSE_THRESHOLD) {
                const obj = { toValue: store.get("screen").height, duration: tmp2Result(closure_1[9]).SLIDE_ANIMATION_DURATION, useNativeDriver: true };
                closure_8.timing(tmp2Result.state.panY, obj).start(() => {
                  closure_0._handleClose();
                });
                const timingResult = closure_8.timing(tmp2Result.state.panY, obj);
              } else {
                closure_8.spring(tmp2Result.state.panY, { Text: "isArray", h: "isArray" }).start();
                const springResult = closure_8.spring(tmp2Result.state.panY, { Text: "isArray", h: "isArray" });
              }
            }
      };
      tmp2Result._panResponder = closure_13.create(obj1);
      tmp2Result._handleScroll = (nativeEvent) => {
        tmp2Result.setState({ isScrollAtTop: nativeEvent.nativeEvent.contentOffset.y <= 0 });
      };
      tmp2Result._setVisibilityFunction = (arg0) => {
        let parallel;
        let timing;
        function updateState() {
          arg0.setState({ isVisible: arg0 });
        }
        if (arg0) {
          updateState();
        } else {
          let obj = {};
          ({ parallel, timing } = closure_8);
          obj.toValue = store.get("screen").height;
          obj.duration = tmp2Result(updateState[9]).SLIDE_ANIMATION_DURATION;
          obj.useNativeDriver = true;
          obj.easing = closure_11.out(closure_11.quad);
          const items = [timing(tmp2Result.state.panY, obj), ];
          obj = { toValue: 0, duration: tmp2Result(updateState[9]).BACKGROUND_ANIMATION_DURATION, useNativeDriver: closure_16, easing: closure_11.out(closure_11.quad) };
          items[1] = closure_8.timing(tmp2Result.state.backgroundOpacity, obj);
          parallel(items).start(() => {
            updateState();
          });
          const parallelResult = parallel(items);
        }
      };
      tmp2Result._setButtonVisibilityFunction = (isButtonVisible) => {
        tmp2Result.setState({ isButtonVisible });
      };
      tmp2Result._setScreenshotButtonVisibilityFunction = (isScreenshotButtonVisible) => {
        tmp2Result.setState({ isScreenshotButtonVisible });
      };
      tmp2Result._handleClose = () => {
        const FeedbackWidgetManager = tmp2Result(closure_1[9]).FeedbackWidgetManager;
        FeedbackWidgetManager.hide();
      };
      FeedbackButtonManager = FeedbackWidgetProvider(closure_1[9]).FeedbackButtonManager;
      initializeResult = FeedbackButtonManager.initialize(tmp2Result._setButtonVisibilityFunction);
      ScreenshotButtonManager = FeedbackWidgetProvider(closure_1[9]).ScreenshotButtonManager;
      initializeResult1 = ScreenshotButtonManager.initialize(tmp2Result._setScreenshotButtonVisibilityFunction);
      FeedbackWidgetManager = FeedbackWidgetProvider(closure_1[9]).FeedbackWidgetManager;
      initializeResult2 = FeedbackWidgetManager.initialize(tmp2Result._setVisibilityFunction);
      return tmp2Result;
    }
  }
  const arg1 = FeedbackWidgetProvider;
  callback2(FeedbackWidgetProvider, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const FeedbackWidgetProvider = this;
      this._themeListener = closure_9.addChangeListener(() => {
        self.forceUpdate();
      });
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._themeListener) {
        const _themeListener = this._themeListener;
        _themeListener.remove();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, isVisible) {
      let parallel;
      let timing;
      const self = this;
      if (!isVisible.isVisible) {
        if (self.state.isVisible) {
          let obj = { toValue: 1 };
          ({ parallel, timing } = RN);
          obj.duration = FeedbackWidgetProvider(closure_1[9]).BACKGROUND_ANIMATION_DURATION;
          obj.useNativeDriver = closure_16;
          obj.easing = closure_11.in(closure_11.quad);
          const items = [timing(self.state.backgroundOpacity, obj), ];
          obj = { duration: FeedbackWidgetProvider(closure_1[9]).SLIDE_ANIMATION_DURATION, easing: closure_11.in(closure_11.quad) };
          items[1] = RN.timing(self.state.panY, obj);
          parallel(items).start(() => {
            const debug = callback(closure_1[10]).debug;
            debug.log("FeedbackWidgetProvider componentDidUpdate");
          });
          const parallelResult = parallel(items);
        }
      }
      if (tmp7) {
        const backgroundOpacity = self.state.backgroundOpacity;
        backgroundOpacity.setValue(0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      let backgroundOpacity;
      let createElement;
      let createElement2;
      let createElement3;
      let createElement4;
      let isButtonVisible;
      let isScreenshotButtonVisible;
      let isVisible;
      const self = this;
      let obj = FeedbackWidgetProvider(closure_1[7]);
      if (obj.isModalSupported()) {
        ({ isButtonVisible, isScreenshotButtonVisible, isVisible, backgroundOpacity } = self.state);
        obj = { inputRange: ["Text", "lc"], outputRange: ["discord_protos.discord_users.v1.VideoFilterBackgroundBlur", "discord_protos.discord_users.v1.VoiceAndVideoSettings"] };
        const theme = tmp(tmp2[11]).getTheme();
        const Fragment = React.Fragment;
        const children = self.props.children;
        const tmp8 = React;
        const tmpResult = tmp(tmp2[11]);
        if (isButtonVisible) {
          const _Object = Object;
          let obj3 = FeedbackWidgetProvider(closure_1[13]);
          isButtonVisible = React.createElement(FeedbackWidgetProvider(closure_1[12]).FeedbackButton, Object.assign({}, obj3.getFeedbackButtonOptions()));
        }
        if (isScreenshotButtonVisible) {
          const _Object2 = Object;
          let obj4 = FeedbackWidgetProvider(closure_1[13]);
          isScreenshotButtonVisible = React.createElement(FeedbackWidgetProvider(closure_1[14]).ScreenshotButton, Object.assign({}, obj4.getScreenshotButtonOptions()));
        }
        let element = isVisible;
        if (isVisible) {
          obj = {};
          const items = [FeedbackWidgetProvider(closure_1[15]).modalWrapper, ];
          const obj1 = { backgroundColor: interpolateResult };
          items[1] = obj1;
          obj.style = items;
          const obj2 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, visible: isVisible, onRequestClose: self._handleClose };
          obj3 = {};
          ({ createElement, createElement: createElement2 } = React);
          obj3.style = FeedbackWidgetProvider(closure_1[15]).topSpacer;
          const element2 = createElement2(closure_15, obj3);
          const _Object3 = Object;
          obj4 = {};
          const items1 = [FeedbackWidgetProvider(closure_1[15]).modalSheetContainer(theme), ];
          const obj5 = {};
          const obj6 = { translateY: self.state.panY };
          const items2 = [obj6];
          obj5.transform = items2;
          items1[1] = obj5;
          obj4.style = items1;
          const obj7 = { start: "NOT_RESPONDER", category: "RESPONDER_INACTIVE_PRESS_IN", flexDirection: "NOT_RESPONDER", onScroll: self._handleScroll };
          const merged = Object.assign(obj4, self._panResponder.panHandlers);
          ({ createElement: createElement3, createElement: createElement4 } = React);
          const _Object4 = Object;
          const obj11 = FeedbackWidgetProvider(closure_1[15]);
          ({ _handleClose: obj16.onFormClose, _handleClose: obj16.onFormSubmitted } = self);
          element = <RN.View {......obj}><closure_12 {......obj2}>{element2}<RN.View {......merged}>{createElement3(closure_14, obj7, createElement4(FeedbackWidgetProvider(closure_1[16]).FeedbackWidget, Object.assign({}, FeedbackWidgetProvider(closure_1[13]).getFeedbackOptions(), {})))}</RN.View></closure_12></RN.View>;
          const obj15 = FeedbackWidgetProvider(closure_1[13]);
          const obj8 = {};
        }
        return <>{children}{isButtonVisible}{isScreenshotButtonVisible}{element}</>;
      } else {
        const debug = tmp(tmp2[10]).debug;
        debug.error("FeedbackWidget Modal is not supported in React Native < 0.71 with Fabric renderer.");
        return <>{self.props.children}</>;
      }
    }
  };
  return callback(FeedbackWidgetProvider, items);
}(importAllResult.Component);
