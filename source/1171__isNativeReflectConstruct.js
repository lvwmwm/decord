// Module ID: 1171
// Function ID: 13315
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 1172, 978, 1173, 794, 1175, 1176, 1109, 1180, 1178, 1181]

// Module 1171 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import closure_3 from "isModalSupported";
import defaultButtonStyles from "defaultButtonStyles";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import isModalSupported from "isModalSupported";

let Platform;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Animated: closure_8, Appearance: closure_9, Dimensions: closure_10, Easing: closure_11, Modal: closure_12, PanResponder: closure_13, Platform, ScrollView: closure_14, View: closure_15 } = get_ActivityIndicator);
isModalSupported = isModalSupported.isNativeDriverSupportedForColorAnimations();

export const FeedbackWidgetProvider = ((Component) => {
  class FeedbackWidgetProvider {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      obj = { isButtonVisible: false, isScreenshotButtonVisible: false, isVisible: false, backgroundOpacity: null, panY: null, isScrollAtTop: true };
      value = new outer1_8.Value(0);
      obj.backgroundOpacity = value;
      value1 = new outer1_8.Value(outer1_10.get("screen").height);
      obj.panY = value1;
      tmp2Result.state = obj;
      obj1 = {
        onStartShouldSetPanResponder(arg0, dy) {
              let isScrollAtTop = FeedbackWidgetProvider(outer2_1[8]).notWeb();
              if (isScrollAtTop) {
                isScrollAtTop = tmp2Result.state.isScrollAtTop;
              }
              if (isScrollAtTop) {
                isScrollAtTop = dy.dy > 0;
              }
              return isScrollAtTop;
            },
        onMoveShouldSetPanResponder(arg0, dy) {
              let isScrollAtTop = FeedbackWidgetProvider(outer2_1[8]).notWeb();
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
              if (dy.dy > FeedbackWidgetProvider(outer2_1[9]).PULL_DOWN_CLOSE_THRESHOLD) {
                const obj = { toValue: outer2_10.get("screen").height, duration: FeedbackWidgetProvider(outer2_1[9]).SLIDE_ANIMATION_DURATION, useNativeDriver: true };
                outer2_8.timing(tmp2Result.state.panY, obj).start(() => {
                  outer1_0._handleClose();
                });
                const timingResult = outer2_8.timing(tmp2Result.state.panY, obj);
              } else {
                outer2_8.spring(tmp2Result.state.panY, { toValue: 0, useNativeDriver: true }).start();
                const springResult = outer2_8.spring(tmp2Result.state.panY, { toValue: 0, useNativeDriver: true });
              }
            }
      };
      tmp2Result._panResponder = outer1_13.create(obj1);
      tmp2Result._handleScroll = (nativeEvent) => {
        tmp2Result.setState({ isScrollAtTop: nativeEvent.nativeEvent.contentOffset.y <= 0 });
      };
      tmp2Result._setVisibilityFunction = (arg0) => {
        let parallel;
        let timing;
        function updateState() {
          state.setState({ isVisible: state });
        }
        if (arg0) {
          updateState();
        } else {
          let obj = {};
          ({ parallel, timing } = outer2_8);
          obj.toValue = outer2_10.get("screen").height;
          obj.duration = FeedbackWidgetProvider(outer2_1[9]).SLIDE_ANIMATION_DURATION;
          obj.useNativeDriver = true;
          obj.easing = outer2_11.out(outer2_11.quad);
          const items = [timing(tmp2Result.state.panY, obj), ];
          obj = { toValue: 0, duration: FeedbackWidgetProvider(outer2_1[9]).BACKGROUND_ANIMATION_DURATION, useNativeDriver: outer2_16, easing: outer2_11.out(outer2_11.quad) };
          items[1] = outer2_8.timing(tmp2Result.state.backgroundOpacity, obj);
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
        const FeedbackWidgetManager = FeedbackWidgetProvider(outer2_1[9]).FeedbackWidgetManager;
        FeedbackWidgetManager.hide();
      };
      FeedbackButtonManager = FeedbackWidgetProvider(outer1_1[9]).FeedbackButtonManager;
      initializeResult = FeedbackButtonManager.initialize(tmp2Result._setButtonVisibilityFunction);
      ScreenshotButtonManager = FeedbackWidgetProvider(outer1_1[9]).ScreenshotButtonManager;
      initializeResult1 = ScreenshotButtonManager.initialize(tmp2Result._setScreenshotButtonVisibilityFunction);
      FeedbackWidgetManager = FeedbackWidgetProvider(outer1_1[9]).FeedbackWidgetManager;
      initializeResult2 = FeedbackWidgetManager.initialize(tmp2Result._setVisibilityFunction);
      return tmp2Result;
    }
  }
  callback2(FeedbackWidgetProvider, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      this._themeListener = outer1_9.addChangeListener(() => {
        self.forceUpdate();
      });
    }
  };
  let items = [obj, , , ];
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
          ({ parallel, timing } = outer1_8);
          obj.duration = FeedbackWidgetProvider(outer1_1[9]).BACKGROUND_ANIMATION_DURATION;
          obj.useNativeDriver = outer1_16;
          obj.easing = outer1_11.in(outer1_11.quad);
          const items = [timing(self.state.backgroundOpacity, obj), ];
          obj = { toValue: 0, duration: FeedbackWidgetProvider(outer1_1[9]).SLIDE_ANIMATION_DURATION, useNativeDriver: true, easing: outer1_11.in(outer1_11.quad) };
          items[1] = outer1_8.timing(self.state.panY, obj);
          parallel(items).start(() => {
            const debug = FeedbackWidgetProvider(outer2_1[10]).debug;
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
      let obj = FeedbackWidgetProvider(outer1_1[7]);
      if (obj.isModalSupported()) {
        ({ isButtonVisible, isScreenshotButtonVisible, isVisible, backgroundOpacity } = self.state);
        obj = { inputRange: [0, 1], outputRange: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"] };
        const theme = tmp(tmp2[11]).getTheme();
        const Fragment = outer1_7.Fragment;
        const children = self.props.children;
        const tmp8 = outer1_7;
        const tmpResult = tmp(tmp2[11]);
        if (isButtonVisible) {
          const _Object = Object;
          let obj3 = FeedbackWidgetProvider(outer1_1[13]);
          isButtonVisible = outer1_7.createElement(FeedbackWidgetProvider(outer1_1[12]).FeedbackButton, Object.assign({}, obj3.getFeedbackButtonOptions()));
        }
        if (isScreenshotButtonVisible) {
          const _Object2 = Object;
          let obj4 = FeedbackWidgetProvider(outer1_1[13]);
          isScreenshotButtonVisible = outer1_7.createElement(FeedbackWidgetProvider(outer1_1[14]).ScreenshotButton, Object.assign({}, obj4.getScreenshotButtonOptions()));
        }
        let element = isVisible;
        if (isVisible) {
          obj = {};
          const items = [FeedbackWidgetProvider(outer1_1[15]).modalWrapper, ];
          const obj1 = { backgroundColor: interpolateResult };
          items[1] = obj1;
          obj.style = items;
          const obj2 = { visible: isVisible, transparent: true, animationType: "none", onRequestClose: self._handleClose, testID: "feedback-form-modal" };
          obj3 = {};
          ({ createElement, createElement: createElement2 } = outer1_7);
          obj3.style = FeedbackWidgetProvider(outer1_1[15]).topSpacer;
          const element2 = createElement2(outer1_15, obj3);
          const _Object3 = Object;
          obj4 = {};
          const items1 = [FeedbackWidgetProvider(outer1_1[15]).modalSheetContainer(theme), ];
          const obj5 = {};
          const obj6 = { translateY: self.state.panY };
          const items2 = [obj6];
          obj5.transform = items2;
          items1[1] = obj5;
          obj4.style = items1;
          const obj7 = { bounces: false, keyboardShouldPersistTaps: "handled", automaticallyAdjustKeyboardInsets: false, onScroll: self._handleScroll };
          const merged = Object.assign(obj4, self._panResponder.panHandlers);
          ({ createElement: createElement3, createElement: createElement4 } = outer1_7);
          const _Object4 = Object;
          const obj11 = FeedbackWidgetProvider(outer1_1[15]);
          ({ _handleClose: obj16.onFormClose, _handleClose: obj16.onFormSubmitted } = self);
          element = <outer1_8.View><outer1_12 visible={isVisible} transparent animationType="none" onRequestClose={self._handleClose} testID="feedback-form-modal">{element2}<outer1_8.View {......merged}>{createElement3(outer1_14, obj7, createElement4(FeedbackWidgetProvider(outer1_1[16]).FeedbackWidget, Object.assign({}, FeedbackWidgetProvider(outer1_1[13]).getFeedbackOptions(), {})))}</outer1_8.View></outer1_12></outer1_8.View>;
          const obj15 = FeedbackWidgetProvider(outer1_1[13]);
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
})(importAllResult.Component);
