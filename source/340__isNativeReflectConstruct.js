// Module ID: 340
// Function ID: 4991
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 33, 117, 341, 46, 48, 44, 97, 342, 294, 143, 262, 345, 334, 384, 387, 389, 402, 253, 403, 396, 147, 318]

// Module 340 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import closure_8 from "jsxProd";
import dismissKeyboard from "dismissKeyboard";
import getVersion from "get Version";
import _combineCallbacks from "_combineCallbacks";
import importAllResult from "result";
import { cloneElement } from "result";
import jsxProd from "jsxProd";

let closure_14;
let jsxs;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createRefForwarder(arg0) {
  let closure_0 = arg0;
  const obj = {
    getForwardingRef: importDefault(318)((arg0) => {
      let closure_0 = arg0;
      return (nativeInstance) => {
        let tmp = null;
        if (null != nativeInstance) {
          tmp = callback(nativeInstance);
        }
        outer1_1.nativeInstance = nativeInstance;
        outer1_1.publicInstance = tmp;
        if (null != callback) {
          if ("function" === typeof callback) {
            callback(tmp);
          } else {
            callback.current = tmp;
          }
        }
      };
    }),
    nativeInstance: null,
    publicInstance: null
  };
  return obj;
}
let closure_4 = ["experimental_endDraggingSensitivityMultiplier"];
let closure_5 = ["ref"];
({ jsx: closure_14, jsxs } = jsxProd);
const tmp4 = ((Component) => {
  class ScrollView {
    constructor(arg0) {
      self = this;
      tmp = outer1_7(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_10(apply);
      tmp2 = outer1_9;
      if (outer1_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_10;
        constructResult = Reflect.construct(obj, items, outer1_10(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result._scrollAnimatedValueAttachment = null;
      map = new Map();
      tmp2Result._stickyHeaderRefs = map;
      map1 = new Map();
      tmp2Result._headerLayoutYs = map1;
      tmp2Result._keyboardMetrics = null;
      tmp2Result._additionalScrollOffset = 0;
      tmp2Result._isTouching = false;
      tmp2Result._lastMomentumScrollBeginTime = 0;
      tmp2Result._lastMomentumScrollEndTime = 0;
      tmp2Result._observedScrollSinceBecomingResponder = false;
      tmp2Result._becameResponderWhileAnimating = false;
      tmp2Result._preventNegativeScrollOffset = null;
      tmp2Result._animated = null;
      tmp2Result._subscriptionKeyboardWillShow = null;
      tmp2Result._subscriptionKeyboardWillHide = null;
      tmp2Result._subscriptionKeyboardDidShow = null;
      tmp2Result._subscriptionKeyboardDidHide = null;
      tmp2Result.state = { layoutHeight: null };
      tmp2Result.getScrollResponder = () => closure_0;
      tmp2Result.getScrollableNode = () => outer2_1(outer2_3[8]).findNodeHandle(tmp2Result.getNativeScrollRef());
      tmp2Result.getInnerViewNode = () => outer2_1(outer2_3[8]).findNodeHandle(tmp2Result._innerView.nativeInstance);
      tmp2Result.getInnerViewRef = () => tmp2Result._innerView.nativeInstance;
      tmp2Result.getNativeScrollRef = () => tmp2Result._scrollView.nativeInstance;
      tmp2Result.scrollTo = (arg0, arg1, arg2) => {
        let animated;
        let x;
        let y;
        if ("number" === typeof arg0) {
          const _console = console;
          console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");
          x = arg1;
          y = arg0;
          animated = arg2;
        } else if (arg0) {
          ({ y, x, animated } = arg0);
        }
        const nativeScrollRef = tmp2Result.getNativeScrollRef();
        if (null != nativeScrollRef) {
          const obj = outer2_2(outer2_3[9]);
          if (!x) {
            x = 0;
          }
          if (!y) {
            y = 0;
          }
          obj.scrollTo(nativeScrollRef, x, y, false !== animated);
        }
      };
      tmp2Result.scrollToEnd = (animated) => {
        if (animated) {
          animated = animated.animated;
        }
        const nativeScrollRef = tmp2Result.getNativeScrollRef();
        if (null != nativeScrollRef) {
          outer2_2(outer2_3[9]).scrollToEnd(nativeScrollRef, false !== animated);
          const obj = outer2_2(outer2_3[9]);
        }
      };
      tmp2Result.flashScrollIndicators = () => {
        const nativeScrollRef = tmp2Result.getNativeScrollRef();
        if (null != nativeScrollRef) {
          const result = outer2_2(outer2_3[9]).flashScrollIndicators(nativeScrollRef);
          const obj = outer2_2(outer2_3[9]);
        }
      };
      tmp2Result.scrollResponderScrollNativeHandleToKeyboard = (measureLayout, arg1, _preventNegativeScrollOffset) => {
        let num = arg1;
        if (!arg1) {
          num = 0;
        }
        tmp2Result._additionalScrollOffset = num;
        tmp2Result._preventNegativeScrollOffset = _preventNegativeScrollOffset;
        if (null != tmp2Result._innerView.nativeInstance) {
          if ("number" === typeof measureLayout) {
            const obj = outer2_2(outer2_3[10]);
            const tmp6 = outer2_2(outer2_3[11]);
            obj.measureLayout(measureLayout, tmp6(outer2_1(outer2_3[8]).findNodeHandle(tmp2Result)), tmp2Result._textInputFocusError, tmp2Result._inputMeasureAndScrollToKeyboard);
            const obj2 = outer2_1(outer2_3[8]);
          } else {
            measureLayout.measureLayout(tmp2Result._innerView.nativeInstance, tmp2Result._inputMeasureAndScrollToKeyboard, tmp2Result._textInputFocusError);
          }
        }
      };
      tmp2Result.scrollResponderZoomTo = (animated) => {
        outer2_2(outer2_3[12])(false, "zoomToRect is not implemented");
        if ("animated" in animated) {
          tmp2Result._animated = animated.animated;
          delete tmp.animated;
        } else if (undefined !== arg1) {
          const _console = console;
          console.warn("`scrollResponderZoomTo` `animated` argument is deprecated. Use `options.animated` instead");
        }
        const nativeScrollRef = tmp2Result.getNativeScrollRef();
        if (null != nativeScrollRef) {
          outer2_2(outer2_3[9]).zoomToRect(nativeScrollRef, animated, false !== arg1);
          const obj = outer2_2(outer2_3[9]);
        }
      };
      tmp2Result._inputMeasureAndScrollToKeyboard = (arg0, arg1, arg2, arg3) => {
        let closure_1 = arg3;
        const height = outer2_2(outer2_3[13]).get("window").height;
        function scrollTextInputIntoVisibleRect() {
          if (null != closure_0._keyboardMetrics) {
            const screenY = closure_0._keyboardMetrics.screenY;
          }
          const sum = closure_0 - screenY + closure_1 + closure_0._additionalScrollOffset;
          let bound = sum;
          if (true === closure_0._preventNegativeScrollOffset) {
            const _Math = Math;
            bound = Math.max(0, sum);
          }
          const obj = { x: 0, y: bound, animated: true };
          closure_0.scrollTo(obj);
          closure_0._additionalScrollOffset = 0;
          closure_0._preventNegativeScrollOffset = false;
        }
        if (null == arg1._keyboardMetrics) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            scrollTextInputIntoVisibleRect();
          }, 0);
        } else {
          const result = scrollTextInputIntoVisibleRect();
        }
      };
      tmp2Result._handleScroll = (arg0) => {
        tmp2Result._observedScrollSinceBecomingResponder = true;
        if (tmp2Result.props.onScroll) {
          const props = tmp2Result.props;
          props.onScroll(arg0);
        }
      };
      tmp2Result._handleLayout = (nativeEvent) => {
        if (true === tmp2Result.props.invertStickyHeaders) {
          const obj = { layoutHeight: nativeEvent.nativeEvent.layout.height };
          tmp2Result.setState(obj);
        }
        if (tmp2Result.props.onLayout) {
          const props = tmp2Result.props;
          props.onLayout(nativeEvent);
        }
      };
      tmp2Result._handleContentOnLayout = (arg0) => {
        if (tmp2Result.props.onContentSizeChange) {
          const props = tmp2Result.props;
          props.onContentSizeChange(tmp, tmp2);
        }
      };
      tmp2Result._innerView = outer1_18((arg0) => arg0);
      tmp2Result._scrollView = outer1_18((arg0) => Object.assign(arg0, { getScrollResponder: tmp2Result.getScrollResponder, getScrollableNode: tmp2Result.getScrollableNode, getInnerViewNode: tmp2Result.getInnerViewNode, getInnerViewRef: tmp2Result.getInnerViewRef, getNativeScrollRef: tmp2Result.getNativeScrollRef, scrollTo: tmp2Result.scrollTo, scrollToEnd: tmp2Result.scrollToEnd, flashScrollIndicators: tmp2Result.flashScrollIndicators, scrollResponderZoomTo: tmp2Result.scrollResponderZoomTo, scrollResponderScrollNativeHandleToKeyboard: tmp2Result.scrollResponderScrollNativeHandleToKeyboard }));
      tmp2Result.scrollResponderKeyboardWillShow = (endCoordinates) => {
        tmp2Result._keyboardMetrics = endCoordinates.endCoordinates;
        if (tmp2Result.props.onKeyboardWillShow) {
          const props = tmp2Result.props;
          props.onKeyboardWillShow(endCoordinates);
        }
      };
      tmp2Result.scrollResponderKeyboardWillHide = (arg0) => {
        tmp2Result._keyboardMetrics = null;
        if (tmp2Result.props.onKeyboardWillHide) {
          const props = tmp2Result.props;
          props.onKeyboardWillHide(arg0);
        }
      };
      tmp2Result.scrollResponderKeyboardDidShow = (endCoordinates) => {
        tmp2Result._keyboardMetrics = endCoordinates.endCoordinates;
        if (tmp2Result.props.onKeyboardDidShow) {
          const props = tmp2Result.props;
          props.onKeyboardDidShow(endCoordinates);
        }
      };
      tmp2Result.scrollResponderKeyboardDidHide = (arg0) => {
        tmp2Result._keyboardMetrics = null;
        if (tmp2Result.props.onKeyboardDidHide) {
          const props = tmp2Result.props;
          props.onKeyboardDidHide(arg0);
        }
      };
      tmp2Result._handleMomentumScrollBegin = (arg0) => {
        const _performance = ScrollView.performance;
        tmp2Result._lastMomentumScrollBeginTime = _performance.now();
        if (tmp2Result.props.onMomentumScrollBegin) {
          const props = tmp2Result.props;
          const result = props.onMomentumScrollBegin(arg0);
        }
      };
      tmp2Result._handleMomentumScrollEnd = (closure_0) => {
        outer2_2(outer2_3[14]).endScroll();
        const _performance = ScrollView.performance;
        tmp2Result._lastMomentumScrollEndTime = _performance.now();
        if (tmp2Result.props.onMomentumScrollEnd) {
          const props = tmp2Result.props;
          props.onMomentumScrollEnd(closure_0);
        }
      };
      tmp2Result._handleScrollBeginDrag = (arg0) => {
        outer2_2(outer2_3[14]).beginScroll();
        if ("on-drag" === tmp2Result.props.keyboardDismissMode) {
          outer2_2(outer2_3[15])();
        }
        if (tmp2Result.props.onScrollBeginDrag) {
          const props = tmp2Result.props;
          props.onScrollBeginDrag(arg0);
        }
      };
      tmp2Result._handleScrollEndDrag = (nativeEvent) => {
        const velocity = nativeEvent.nativeEvent.velocity;
        let _isAnimatingResult = tmp2Result._isAnimating();
        if (!_isAnimatingResult) {
          let tmp2 = velocity;
          if (velocity) {
            tmp2 = 0 !== velocity.x || 0 !== velocity.y;
            const tmp3 = 0 !== velocity.x || 0 !== velocity.y;
          }
          _isAnimatingResult = tmp2;
        }
        if (!_isAnimatingResult) {
          outer2_2(outer2_3[14]).endScroll();
          const obj = outer2_2(outer2_3[14]);
        }
        if (tmp2Result.props.onScrollEndDrag) {
          const props = tmp2Result.props;
          props.onScrollEndDrag(nativeEvent);
        }
      };
      tmp2Result._isAnimating = () => {
        const _performance = ScrollView.performance;
        let tmp = _performance.now() - tmp2Result._lastMomentumScrollEndTime < 16;
        if (!tmp) {
          tmp = tmp2Result._lastMomentumScrollEndTime < tmp2Result._lastMomentumScrollBeginTime;
        }
        return tmp;
      };
      tmp2Result._handleResponderGrant = (arg0) => {
        tmp2Result._observedScrollSinceBecomingResponder = false;
        if (tmp2Result.props.onResponderGrant) {
          const props = tmp2Result.props;
          props.onResponderGrant(arg0);
        }
        tmp2Result._becameResponderWhileAnimating = tmp2Result._isAnimating();
      };
      tmp2Result._handleResponderReject = () => {

      };
      tmp2Result._handleResponderRelease = (nativeEvent) => {
        tmp2Result._isTouching = 0 !== nativeEvent.nativeEvent.touches.length;
        if (tmp2Result.props.onResponderRelease) {
          const props = tmp2Result.props;
          props.onResponderRelease(nativeEvent);
        }
        if ("number" !== typeof nativeEvent.target) {
          const result = outer2_2(outer2_3[16]).currentlyFocusedInput();
          let _becameResponderWhileAnimating = null == result;
          if (!_becameResponderWhileAnimating) {
            _becameResponderWhileAnimating = true === tmp2Result.props.keyboardShouldPersistTaps;
          }
          if (!_becameResponderWhileAnimating) {
            _becameResponderWhileAnimating = "always" === tmp2Result.props.keyboardShouldPersistTaps;
          }
          if (!_becameResponderWhileAnimating) {
            _becameResponderWhileAnimating = !tmp2Result._keyboardIsDismissible();
          }
          if (!_becameResponderWhileAnimating) {
            _becameResponderWhileAnimating = nativeEvent.target === result;
          }
          if (!_becameResponderWhileAnimating) {
            _becameResponderWhileAnimating = tmp2Result._observedScrollSinceBecomingResponder;
          }
          if (!_becameResponderWhileAnimating) {
            _becameResponderWhileAnimating = tmp2Result._becameResponderWhileAnimating;
          }
          if (!_becameResponderWhileAnimating) {
            outer2_2(outer2_3[16]).blurTextInput(result);
            const obj = outer2_2(outer2_3[16]);
          }
          const obj2 = outer2_2(outer2_3[16]);
        }
      };
      tmp2Result._handleResponderTerminationRequest = () => !tmp2Result._observedScrollSinceBecomingResponder;
      tmp2Result._handleScrollShouldSetResponder = () => {
        let _isTouching = true !== tmp2Result.props.disableScrollViewPanResponder;
        if (_isTouching) {
          _isTouching = tmp2Result._isTouching;
        }
        return _isTouching;
      };
      tmp2Result._handleStartShouldSetResponder = (target) => {
        if (true === tmp2Result.props.disableScrollViewPanResponder) {
          return false;
        } else {
          let tmp5 = "handled" !== tmp2Result.props.keyboardShouldPersistTaps;
          const result = outer2_2(outer2_3[16]).currentlyFocusedInput();
          if (!tmp5) {
            tmp5 = !tmp2Result._keyboardIsDismissible();
          }
          if (!tmp5) {
            tmp5 = target.target === result;
          }
          return !tmp5;
        }
      };
      tmp2Result._handleStartShouldSetResponderCapture = (target) => {
        if (tmp2Result._isAnimating()) {
          return true;
        } else if (true === tmp2Result.props.disableScrollViewPanResponder) {
          return false;
        } else {
          const keyboardShouldPersistTaps = tmp2Result.props.keyboardShouldPersistTaps;
          let tmp2 = !keyboardShouldPersistTaps;
          if (!tmp2) {
            tmp2 = "never" === keyboardShouldPersistTaps;
          }
          let tmp3 = "number" !== typeof target.target;
          if (tmp3) {
            let tmp5 = !tmp2Result._softKeyboardIsDetached();
            if (tmp5) {
              let isTextInputResult = !tmp2;
              if (tmp2) {
                isTextInputResult = !tmp2Result._keyboardIsDismissible();
              }
              if (!isTextInputResult) {
                isTextInputResult = null == target.target;
              }
              if (!isTextInputResult) {
                isTextInputResult = outer2_2(outer2_3[16]).isTextInput(target.target);
                const obj = outer2_2(outer2_3[16]);
              }
              tmp5 = !isTextInputResult;
            }
            tmp3 = tmp5;
          }
          return tmp3;
        }
      };
      tmp2Result._keyboardIsDismissible = () => {
        const result = outer2_2(outer2_3[16]).currentlyFocusedInput();
        let isTextInputResult = null != result;
        if (isTextInputResult) {
          isTextInputResult = outer2_2(outer2_3[16]).isTextInput(result);
          const obj2 = outer2_2(outer2_3[16]);
        }
        let result1 = null != tmp2Result._keyboardMetrics;
        if (!result1) {
          result1 = tmp2Result._keyboardEventsAreUnreliable();
        }
        if (isTextInputResult) {
          isTextInputResult = result1;
        }
        return isTextInputResult;
      };
      tmp2Result._softKeyboardIsDetached = () => {
        let tmp = null != tmp2Result._keyboardMetrics;
        if (tmp) {
          tmp = 0 === tmp2Result._keyboardMetrics.height;
        }
        return tmp;
      };
      tmp2Result._keyboardEventsAreUnreliable = () => outer2_2(outer2_3[17]).Version < 30;
      tmp2Result._handleTouchEnd = (nativeEvent) => {
        tmp2Result._isTouching = 0 !== nativeEvent.nativeEvent.touches.length;
        const keyboardShouldPersistTaps = tmp2Result.props.keyboardShouldPersistTaps;
        let tmp = !keyboardShouldPersistTaps;
        if (!tmp) {
          tmp = "never" === keyboardShouldPersistTaps;
        }
        const result = outer2_2(outer2_3[16]).currentlyFocusedInput();
        let result1 = null != result && nativeEvent.target !== result;
        if (result1) {
          result1 = tmp2Result._softKeyboardIsDetached();
        }
        if (result1) {
          result1 = tmp2Result._keyboardIsDismissible();
        }
        if (result1) {
          result1 = tmp;
        }
        if (result1) {
          outer2_2(outer2_3[16]).blurTextInput(result);
          const obj2 = outer2_2(outer2_3[16]);
        }
        if (tmp2Result.props.onTouchEnd) {
          const props = tmp2Result.props;
          props.onTouchEnd(nativeEvent);
        }
      };
      tmp2Result._handleTouchCancel = (arg0) => {
        tmp2Result._isTouching = false;
        if (tmp2Result.props.onTouchCancel) {
          const props = tmp2Result.props;
          props.onTouchCancel(arg0);
        }
      };
      tmp2Result._handleTouchStart = (arg0) => {
        tmp2Result._isTouching = true;
        if (tmp2Result.props.onTouchStart) {
          const props = tmp2Result.props;
          props.onTouchStart(arg0);
        }
      };
      tmp2Result._handleTouchMove = (arg0) => {
        if (tmp2Result.props.onTouchMove) {
          const props = tmp2Result.props;
          props.onTouchMove(arg0);
        }
      };
      contentOffset = tmp2Result.props.contentOffset;
      y = undefined;
      if (null != contentOffset) {
        y = contentOffset.y;
      }
      num = 0;
      if (null != y) {
        num = y;
      }
      value = new outer1_2(outer1_3[18]).Value(num);
      tmp2Result._scrollAnimatedValue = value;
      _scrollAnimatedValue = tmp2Result._scrollAnimatedValue;
      contentInset = tmp2Result.props.contentInset;
      top = undefined;
      if (null != contentInset) {
        top = contentInset.top;
      }
      num2 = 0;
      if (null != top) {
        num2 = top;
      }
      setOffsetResult = _scrollAnimatedValue.setOffset(num2);
      return tmp2Result;
    }
  }
  callback3(ScrollView, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if ("boolean" === typeof this.props.keyboardShouldPersistTaps) {
        let str = "false";
        if (true === self.props.keyboardShouldPersistTaps) {
          str = "true";
        }
        let str2 = "never";
        if (self.props.keyboardShouldPersistTaps) {
          str2 = "always";
        }
        const _HermesInternal = HermesInternal;
        console.warn("'keyboardShouldPersistTaps={" + str + "}' is deprecated. Use 'keyboardShouldPersistTaps=\"" + str2 + "\"' instead");
      }
      self._keyboardMetrics = outer1_2(outer1_3[19]).metrics();
      self._additionalScrollOffset = 0;
      const obj = outer1_2(outer1_3[19]);
      self._subscriptionKeyboardWillShow = outer1_2(outer1_3[19]).addListener("keyboardWillShow", self.scrollResponderKeyboardWillShow);
      const obj2 = outer1_2(outer1_3[19]);
      self._subscriptionKeyboardWillHide = outer1_2(outer1_3[19]).addListener("keyboardWillHide", self.scrollResponderKeyboardWillHide);
      const obj3 = outer1_2(outer1_3[19]);
      self._subscriptionKeyboardDidShow = outer1_2(outer1_3[19]).addListener("keyboardDidShow", self.scrollResponderKeyboardDidShow);
      const obj4 = outer1_2(outer1_3[19]);
      self._subscriptionKeyboardDidHide = outer1_2(outer1_3[19]).addListener("keyboardDidHide", self.scrollResponderKeyboardDidHide);
      const result = self._updateAnimatedNodeAttachment();
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(contentInset) {
      const self = this;
      let num = 0;
      if (contentInset.contentInset) {
        num = contentInset.contentInset.top;
      }
      let num2 = 0;
      if (self.props.contentInset) {
        num2 = self.props.contentInset.top;
      }
      if (num !== num2) {
        const _scrollAnimatedValue = self._scrollAnimatedValue;
        if (!num2) {
          num2 = 0;
        }
        _scrollAnimatedValue.setOffset(num2);
      }
      const result = self._updateAnimatedNodeAttachment();
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (null != this._subscriptionKeyboardWillShow) {
        const _subscriptionKeyboardWillShow = self._subscriptionKeyboardWillShow;
        _subscriptionKeyboardWillShow.remove();
      }
      if (null != self._subscriptionKeyboardWillHide) {
        const _subscriptionKeyboardWillHide = self._subscriptionKeyboardWillHide;
        _subscriptionKeyboardWillHide.remove();
      }
      if (null != self._subscriptionKeyboardDidShow) {
        const _subscriptionKeyboardDidShow = self._subscriptionKeyboardDidShow;
        _subscriptionKeyboardDidShow.remove();
      }
      if (null != self._subscriptionKeyboardDidHide) {
        const _subscriptionKeyboardDidHide = self._subscriptionKeyboardDidHide;
        _subscriptionKeyboardDidHide.remove();
      }
      if (self._scrollAnimatedValueAttachment) {
        const _scrollAnimatedValueAttachment = self._scrollAnimatedValueAttachment;
        _scrollAnimatedValueAttachment.detach();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_textInputFocusError",
    value: function _textInputFocusError() {
      console.warn("Error measuring text field.");
    }
  };
  items[4] = {
    key: "_getKeyForIndex",
    value: function _getKeyForIndex(closure_0, toArrayResult) {
      let key = tmp;
      if (toArrayResult[closure_0]) {
        key = tmp.key;
      }
      return key;
    }
  };
  items[5] = {
    key: "_updateAnimatedNodeAttachment",
    value: function _updateAnimatedNodeAttachment() {
      const self = this;
      if (this._scrollAnimatedValueAttachment) {
        const _scrollAnimatedValueAttachment = self._scrollAnimatedValueAttachment;
        _scrollAnimatedValueAttachment.detach();
      }
      let stickyHeaderIndices = self.props.stickyHeaderIndices;
      if (stickyHeaderIndices) {
        stickyHeaderIndices = self.props.stickyHeaderIndices.length > 0;
      }
      if (stickyHeaderIndices) {
        let obj = outer1_2(outer1_3[18]);
        obj = {};
        obj = {};
        const obj1 = { y: self._scrollAnimatedValue };
        obj.contentOffset = obj1;
        obj.nativeEvent = obj;
        const items = [obj];
        self._scrollAnimatedValueAttachment = obj.attachNativeEvent(self.getNativeScrollRef(), "onScroll", items);
      }
    }
  };
  items[6] = {
    key: "_setStickyHeaderRef",
    value: function _setStickyHeaderRef(key, arg1) {
      const _stickyHeaderRefs = this._stickyHeaderRefs;
      if (arg1) {
        const result = _stickyHeaderRefs.set(key, arg1);
      } else {
        _stickyHeaderRefs.delete(key);
      }
    }
  };
  items[7] = {
    key: "_onStickyHeaderLayout",
    value: function _onStickyHeaderLayout(closure_0, nativeEvent, key) {
      const self = this;
      const stickyHeaderIndices = this.props.stickyHeaderIndices;
      if (stickyHeaderIndices) {
        const Children = outer1_12.Children;
        const toArrayResult = Children.toArray(self.props.children);
        if (key === self._getKeyForIndex(closure_0, toArrayResult)) {
          const y = nativeEvent.nativeEvent.layout.y;
          const _headerLayoutYs = self._headerLayoutYs;
          const result = _headerLayoutYs.set(key, y);
          const tmp5 = stickyHeaderIndices[stickyHeaderIndices.indexOf(stickyHeaderIndices, closure_0) - 1];
          if (null != tmp5) {
            const _stickyHeaderRefs = self._stickyHeaderRefs;
            const value = _stickyHeaderRefs.get(self._getKeyForIndex(tmp5, toArrayResult));
            let setNextHeaderY = value;
            if (value) {
              setNextHeaderY = value.setNextHeaderY;
            }
            if (setNextHeaderY) {
              value.setNextHeaderY(y);
            }
          }
        }
      }
    }
  };
  items[8] = {
    key: "render",
    value: function render() {
      let inner;
      let outer;
      let self = this;
      self = this;
      if (true === this.props.horizontal) {
        let VScrollViewNativeComponent = tmp2(tmp3[20]).HScrollViewNativeComponent;
      } else {
        VScrollViewNativeComponent = tmp2(tmp3[21]).VScrollViewNativeComponent;
      }
      if (true === this.props.horizontal) {
        let VScrollContentViewNativeComponent = tmp4(tmp5[20]).HScrollContentViewNativeComponent;
      } else {
        VScrollContentViewNativeComponent = tmp4(tmp5[21]).VScrollContentViewNativeComponent;
      }
      let contentContainerHorizontal = tmp;
      if (true === this.props.horizontal) {
        contentContainerHorizontal = outer1_16.contentContainerHorizontal;
      }
      const items = [contentContainerHorizontal, self.props.contentContainerStyle];
      let tmp7 = null;
      if (null != self.props.onContentSizeChange) {
        let obj = { onLayout: self._handleContentOnLayout };
        tmp7 = obj;
      }
      const stickyHeaderIndices = self.props.stickyHeaderIndices;
      const children = self.props.children;
      let mapped = children;
      const Children = outer1_12.Children;
      const toArrayResult = Children.toArray(children);
      mapped = toArrayResult;
      let tmp8 = null != stickyHeaderIndices;
      if (tmp8) {
        tmp8 = stickyHeaderIndices.length > 0;
      }
      let tmp9 = toArrayResult;
      if (tmp8) {
        mapped = toArrayResult.map((key) => {
          const _self = arg1;
          let num = -1;
          if (key) {
            num = key.indexOf(arg1);
          }
          if (num > -1) {
            key = key.key;
            let StickyHeaderComponent = _self.props.StickyHeaderComponent;
            if (!StickyHeaderComponent) {
              StickyHeaderComponent = outer2_2(outer2_3[22]);
            }
            const obj = {
              ref(arg0) {
                  return closure_0._setStickyHeaderRef(key, arg0);
                }
            };
            const _headerLayoutYs = _self._headerLayoutYs;
            obj.nextHeaderLayoutY = _headerLayoutYs.get(_self._getKeyForIndex(key[num + 1], mapped));
            obj.onLayout = function onLayout(nativeEvent) {
              return closure_0._onStickyHeaderLayout(closure_0, nativeEvent, key);
            };
            obj.scrollAnimatedValue = _self._scrollAnimatedValue;
            obj.inverted = _self.props.invertStickyHeaders;
            obj.hiddenOnScroll = _self.props.stickyHeaderHiddenOnScroll;
            obj.scrollViewHeight = _self.state.layoutHeight;
            obj.children = key;
            return outer2_14(StickyHeaderComponent, obj, key);
          } else {
            return key;
          }
        });
        tmp9 = mapped;
      }
      obj = {};
      const tmp12 = outer1_1(outer1_3[23]);
      obj.value = true === this.props.horizontal ? tmp12.HORIZONTAL : tmp12.VERTICAL;
      obj.children = tmp9;
      const tmp11Result = outer1_14(outer1_2(outer1_3[23]).Provider, obj);
      mapped = tmp11Result;
      let isArray = Array.isArray(stickyHeaderIndices);
      if (isArray) {
        isArray = stickyHeaderIndices.length > 0;
      }
      obj = { ref: _innerView.getForwardingRef(self.props.innerViewRef), style: items, removeClippedSubviews: tmp17, collapsable: false, collapsableChildren: !(null != self.props.maintainVisibleContentPosition || null != self.props.snapToAlignment), children: tmp11Result };
      _innerView = self._innerView;
      const tmp16Result = outer1_14(VScrollContentViewNativeComponent, Object.assign({}, tmp7, obj));
      if (undefined !== self.props.alwaysBounceHorizontal) {
        let horizontal = self.props.alwaysBounceHorizontal;
      } else {
        horizontal = self.props.horizontal;
      }
      if (undefined !== self.props.alwaysBounceVertical) {
        let alwaysBounceVertical = self.props.alwaysBounceVertical;
      } else {
        alwaysBounceVertical = !self.props.horizontal;
      }
      const tmp20 = true === this.props.horizontal ? outer1_16.baseHorizontal : outer1_16.baseVertical;
      const props = self.props;
      const obj1 = { alwaysBounceHorizontal: horizontal, alwaysBounceVertical };
      let obj4 = outer1_2(outer1_3[24]);
      obj1.style = obj4.compose(tmp20, self.props.style);
      obj1.onContentSizeChange = null;
      ({ _handleLayout: obj4.onLayout, _handleMomentumScrollBegin: obj4.onMomentumScrollBegin, _handleMomentumScrollEnd: obj4.onMomentumScrollEnd, _handleResponderGrant: obj4.onResponderGrant, _handleResponderReject: obj4.onResponderReject, _handleResponderRelease: obj4.onResponderRelease, _handleResponderTerminationRequest: obj4.onResponderTerminationRequest, _handleScrollBeginDrag: obj4.onScrollBeginDrag, _handleScrollEndDrag: obj4.onScrollEndDrag, _handleScrollShouldSetResponder: obj4.onScrollShouldSetResponder, _handleStartShouldSetResponder: obj4.onStartShouldSetResponder, _handleStartShouldSetResponderCapture: obj4.onStartShouldSetResponderCapture, _handleTouchEnd: obj4.onTouchEnd, _handleTouchMove: obj4.onTouchMove, _handleTouchStart: obj4.onTouchStart, _handleTouchCancel: obj4.onTouchCancel, _handleScroll: obj4.onScroll } = self);
      obj1.endDraggingSensitivityMultiplier = props.experimental_endDraggingSensitivityMultiplier;
      let num7 = 1;
      if (!isArray) {
        num7 = self.props.scrollEventThrottle;
      }
      obj1.scrollEventThrottle = num7;
      obj1.sendMomentumEvents = !(!self.props.onMomentumScrollBegin && !self.props.onMomentumScrollEnd);
      obj1.snapToStart = false !== self.props.snapToStart;
      obj1.snapToEnd = false !== self.props.snapToEnd;
      obj1.pagingEnabled = true === self.props.pagingEnabled || null != self.props.snapToInterval || null != self.props.snapToOffsets;
      const merged = Object.assign({}, outer1_6(props, outer1_4), obj1);
      const decelerationRate = self.props.decelerationRate;
      if (null != decelerationRate) {
        merged.decelerationRate = outer1_2(outer1_3[25])(decelerationRate);
      }
      const refreshControl = self.props.refreshControl;
      const _scrollView = self._scrollView;
      const forwardingRef = _scrollView.getForwardingRef(self.props.scrollViewRef);
      if (null != refreshControl) {
        const tmp30 = outer1_2(outer1_3[26]);
        const obj2 = {};
        ({ outer, inner } = outer1_2(outer1_3[26])(outer1_2(outer1_3[27])(merged.style)));
        const tmp30Result = outer1_2(outer1_3[26])(outer1_2(outer1_3[27])(merged.style));
        obj2.style = outer1_2(outer1_3[24]).compose(tmp20, outer);
        const _Object2 = Object;
        const obj3 = {};
        const obj8 = outer1_2(outer1_3[24]);
        obj3.style = outer1_2(outer1_3[24]).compose(tmp20, inner);
        obj3.ref = forwardingRef;
        obj3.children = tmp16Result;
        return outer1_13(refreshControl, obj2, outer1_14(VScrollViewNativeComponent, Object.assign({}, merged, obj3)));
      } else {
        const _Object = Object;
        obj4 = { ref: forwardingRef, children: tmp16Result };
        return outer1_14(VScrollViewNativeComponent, Object.assign({}, merged, obj4));
      }
      const tmp11 = outer1_14;
      const tmp15 = null != self.props.maintainVisibleContentPosition || null != self.props.snapToAlignment;
      const tmp16 = outer1_14;
      tmp17 = !isArray && self.props.removeClippedSubviews;
      const tmp21 = outer1_6(props, outer1_4);
      const tmp22 = !self.props.onMomentumScrollBegin && !self.props.onMomentumScrollEnd;
    }
  };
  return callback2(ScrollView, items);
})(importAllResult.Component);
let closure_15 = tmp4;
tmp4.Context = require("context");
let closure_16 = require("setStyleAttributePreprocessor").create({ baseVertical: { flexGrow: 1, flexShrink: 1, flexDirection: "column", overflow: "scroll" }, baseHorizontal: { flexGrow: 1, flexShrink: 1, flexDirection: "row", overflow: "scroll" }, contentContainerHorizontal: { flexDirection: "row" } });
class Wrapper {
  constructor(arg0) {
    ref = global.ref;
    tmp = _objectWithoutProperties(global, createRefForwarder);
    tmp2 = jsx;
    tmp3 = jsx;
    if (null == ref) {
      tmp6 = globalThis;
      _Object2 = Object;
      merged = Object.assign({}, tmp);
    } else {
      tmp4 = globalThis;
      _Object = Object;
      obj = {};
      obj.scrollViewRef = ref;
      merged = Object.assign({}, tmp, obj);
    }
    return tmp2(tmp3, merged);
  }
}
Wrapper.displayName = "ScrollView";
Wrapper.Context = require("context");

export default Wrapper;
