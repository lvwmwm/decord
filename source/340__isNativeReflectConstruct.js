// Module ID: 340
// Function ID: 4991
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 340 (_isNativeReflectConstruct)
let jsxs;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createRefForwarder(arg0) {
  const global = arg0;
  const obj = {
    isArray: false,
    displayName: false,
    string: null,
    getForwardingRef: importDefault(dependencyMap[28])((arg0) => (nativeInstance) => {
      let tmp = null;
      if (null != nativeInstance) {
        tmp = nativeInstance(nativeInstance);
      }
      closure_1.nativeInstance = nativeInstance;
      closure_1.publicInstance = tmp;
      if (null != nativeInstance) {
        if ("function" === typeof nativeInstance) {
          nativeInstance(tmp);
        } else {
          nativeInstance.current = tmp;
        }
      }
    })
  };
  const arg1 = obj;
  return obj;
}
let closure_4 = ["cancelable"];
let closure_5 = [null];
let closure_6 = importDefault(dependencyMap[0]);
let closure_7 = importDefault(dependencyMap[1]);
let closure_8 = importDefault(dependencyMap[2]);
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
const cloneElement = arg1(dependencyMap[6]).cloneElement;
({ jsx: closure_14, jsxs } = arg1(dependencyMap[7]));
const tmp4 = (Component) => {
  class ScrollView {
    constructor(arg0) {
      self = this;
      tmp = closure_7(this, ScrollView);
      items = [];
      items[0] = Component;
      obj = closure_10(ScrollView);
      tmp2 = closure_9;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_10;
        constructResult = Reflect.construct(obj, items, closure_10(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      ScrollView = tmp2Result;
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
      tmp2Result.getScrollResponder = () => tmp2Result;
      tmp2Result.getScrollableNode = () => callback(closure_3[8]).findNodeHandle(tmp2Result.getNativeScrollRef());
      tmp2Result.getInnerViewNode = () => callback(closure_3[8]).findNodeHandle(tmp2Result._innerView.nativeInstance);
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
          const obj = callback2(closure_3[9]);
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
          callback2(closure_3[9]).scrollToEnd(nativeScrollRef, false !== animated);
          const obj = callback2(closure_3[9]);
        }
      };
      tmp2Result.flashScrollIndicators = () => {
        const nativeScrollRef = tmp2Result.getNativeScrollRef();
        if (null != nativeScrollRef) {
          const result = callback2(closure_3[9]).flashScrollIndicators(nativeScrollRef);
          const obj = callback2(closure_3[9]);
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
            const obj = callback2(closure_3[10]);
            const tmp6 = callback2(closure_3[11]);
            obj.measureLayout(measureLayout, tmp6(callback(closure_3[8]).findNodeHandle(tmp2Result)), tmp2Result._textInputFocusError, tmp2Result._inputMeasureAndScrollToKeyboard);
            const obj2 = callback(closure_3[8]);
          } else {
            measureLayout.measureLayout(tmp2Result._innerView.nativeInstance, tmp2Result._inputMeasureAndScrollToKeyboard, tmp2Result._textInputFocusError);
          }
        }
      };
      tmp2Result.scrollResponderZoomTo = (animated) => {
        callback2(closure_3[12])(false, "zoomToRect is not implemented");
        if ("animated" in animated) {
          tmp2Result._animated = animated.animated;
          delete r5.animated;
        } else if (undefined !== arg1) {
          const _console = console;
          console.warn("`scrollResponderZoomTo` `animated` argument is deprecated. Use `options.animated` instead");
        }
        const nativeScrollRef = tmp2Result.getNativeScrollRef();
        if (null != nativeScrollRef) {
          callback2(closure_3[9]).zoomToRect(nativeScrollRef, animated, false !== arg1);
          const obj = callback2(closure_3[9]);
        }
      };
      tmp2Result._inputMeasureAndScrollToKeyboard = (arg0, arg1, arg2, arg3) => {
        const height = height(scrollTextInputIntoVisibleRect[13]).get("window").height;
        function scrollTextInputIntoVisibleRect(arg0, self) {
          if (null != self._keyboardMetrics) {
            const height = self._keyboardMetrics.screenY;
          }
          const sum = self - height + arg3 + self._additionalScrollOffset;
          let bound = sum;
          if (true === self._preventNegativeScrollOffset) {
            const _Math = Math;
            bound = Math.max(0, sum);
          }
          const obj = { y: bound };
          self.scrollTo(obj);
          self._additionalScrollOffset = 0;
          self._preventNegativeScrollOffset = false;
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
      tmp2Result._innerView = closure_18((arg0) => arg0);
      tmp2Result._scrollView = closure_18((arg0) => Object.assign(arg0, { getScrollResponder: tmp2Result.getScrollResponder, getScrollableNode: tmp2Result.getScrollableNode, getInnerViewNode: tmp2Result.getInnerViewNode, getInnerViewRef: tmp2Result.getInnerViewRef, getNativeScrollRef: tmp2Result.getNativeScrollRef, scrollTo: tmp2Result.scrollTo, scrollToEnd: tmp2Result.scrollToEnd, flashScrollIndicators: tmp2Result.flashScrollIndicators, scrollResponderZoomTo: tmp2Result.scrollResponderZoomTo, scrollResponderScrollNativeHandleToKeyboard: tmp2Result.scrollResponderScrollNativeHandleToKeyboard }));
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
        const _performance = tmp2Result.performance;
        tmp2Result._lastMomentumScrollBeginTime = _performance.now();
        if (tmp2Result.props.onMomentumScrollBegin) {
          const props = tmp2Result.props;
          const result = props.onMomentumScrollBegin(arg0);
        }
      };
      tmp2Result._handleMomentumScrollEnd = (nativeEvent) => {
        callback2(closure_3[14]).endScroll();
        const _performance = tmp2Result.performance;
        tmp2Result._lastMomentumScrollEndTime = _performance.now();
        if (tmp2Result.props.onMomentumScrollEnd) {
          const props = tmp2Result.props;
          props.onMomentumScrollEnd(nativeEvent);
        }
      };
      tmp2Result._handleScrollBeginDrag = (arg0) => {
        callback2(closure_3[14]).beginScroll();
        if ("on-drag" === tmp2Result.props.keyboardDismissMode) {
          callback2(closure_3[15])();
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
          callback2(closure_3[14]).endScroll();
          const obj = callback2(closure_3[14]);
        }
        if (tmp2Result.props.onScrollEndDrag) {
          const props = tmp2Result.props;
          props.onScrollEndDrag(nativeEvent);
        }
      };
      tmp2Result._isAnimating = () => {
        const _performance = tmp2Result.performance;
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
          const result = callback2(closure_3[16]).currentlyFocusedInput();
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
            callback2(closure_3[16]).blurTextInput(result);
            const obj = callback2(closure_3[16]);
          }
          const obj2 = callback2(closure_3[16]);
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
          const result = callback2(closure_3[16]).currentlyFocusedInput();
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
                isTextInputResult = callback2(closure_3[16]).isTextInput(target.target);
                const obj = callback2(closure_3[16]);
              }
              tmp5 = !isTextInputResult;
            }
            tmp3 = tmp5;
          }
          return tmp3;
        }
      };
      tmp2Result._keyboardIsDismissible = () => {
        const result = callback2(closure_3[16]).currentlyFocusedInput();
        let isTextInputResult = null != result;
        if (isTextInputResult) {
          isTextInputResult = callback2(closure_3[16]).isTextInput(result);
          const obj2 = callback2(closure_3[16]);
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
      tmp2Result._keyboardEventsAreUnreliable = () => callback2(closure_3[17]).Version < 30;
      tmp2Result._handleTouchEnd = (nativeEvent) => {
        tmp2Result._isTouching = 0 !== nativeEvent.nativeEvent.touches.length;
        const keyboardShouldPersistTaps = tmp2Result.props.keyboardShouldPersistTaps;
        let tmp = !keyboardShouldPersistTaps;
        if (!tmp) {
          tmp = "never" === keyboardShouldPersistTaps;
        }
        const result = callback2(closure_3[16]).currentlyFocusedInput();
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
          callback2(closure_3[16]).blurTextInput(result);
          const obj2 = callback2(closure_3[16]);
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
      value = new closure_2(closure_3[18]).Value(num);
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
  const global = ScrollView;
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
      self._keyboardMetrics = callback(closure_3[19]).metrics();
      self._additionalScrollOffset = 0;
      const obj = callback(closure_3[19]);
      self._subscriptionKeyboardWillShow = callback(closure_3[19]).addListener("keyboardWillShow", self.scrollResponderKeyboardWillShow);
      const obj2 = callback(closure_3[19]);
      self._subscriptionKeyboardWillHide = callback(closure_3[19]).addListener("keyboardWillHide", self.scrollResponderKeyboardWillHide);
      const obj3 = callback(closure_3[19]);
      self._subscriptionKeyboardDidShow = callback(closure_3[19]).addListener("keyboardDidShow", self.scrollResponderKeyboardDidShow);
      const obj4 = callback(closure_3[19]);
      self._subscriptionKeyboardDidHide = callback(closure_3[19]).addListener("keyboardDidHide", self.scrollResponderKeyboardDidHide);
      const result = self._updateAnimatedNodeAttachment();
    }
  };
  const items = [obj, , , , , , , , ];
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
    value: function _getKeyForIndex(arg0, toArrayResult) {
      let key = tmp;
      if (toArrayResult[arg0]) {
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
        let obj = callback(closure_3[18]);
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
    value: function _onStickyHeaderLayout(arg0, nativeEvent, key) {
      const self = this;
      const stickyHeaderIndices = this.props.stickyHeaderIndices;
      if (stickyHeaderIndices) {
        const Children = React.Children;
        const toArrayResult = Children.toArray(self.props.children);
        if (key === self._getKeyForIndex(arg0, toArrayResult)) {
          const y = nativeEvent.nativeEvent.layout.y;
          const _headerLayoutYs = self._headerLayoutYs;
          const result = _headerLayoutYs.set(key, y);
          if (null != stickyHeaderIndices[stickyHeaderIndices.indexOf(stickyHeaderIndices, arg0) - 1]) {
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
      const self = this;
      const ScrollView = this;
      const tmp = true === this.props.horizontal;
      if (tmp) {
        let VScrollViewNativeComponent = tmp2(tmp3[20]).HScrollViewNativeComponent;
      } else {
        VScrollViewNativeComponent = tmp2(tmp3[21]).VScrollViewNativeComponent;
      }
      if (tmp) {
        let VScrollContentViewNativeComponent = tmp4(tmp5[20]).HScrollContentViewNativeComponent;
      } else {
        VScrollContentViewNativeComponent = tmp4(tmp5[21]).VScrollContentViewNativeComponent;
      }
      let contentContainerHorizontal = tmp;
      if (tmp) {
        contentContainerHorizontal = obj.contentContainerHorizontal;
      }
      const items = [contentContainerHorizontal, self.props.contentContainerStyle];
      let tmp7 = null;
      if (null != self.props.onContentSizeChange) {
        let obj = { onLayout: self._handleContentOnLayout };
        tmp7 = obj;
      }
      const stickyHeaderIndices = self.props.stickyHeaderIndices;
      const children = self.props.children;
      let tmp11Result = children;
      const Children = React.Children;
      const toArrayResult = Children.toArray(children);
      tmp11Result = toArrayResult;
      let tmp8 = null != stickyHeaderIndices;
      if (tmp8) {
        tmp8 = stickyHeaderIndices.length > 0;
      }
      let tmp9 = toArrayResult;
      if (tmp8) {
        const mapped = toArrayResult.map((key) => {
          const self = arg1;
          let num = -1;
          if (key) {
            num = stickyHeaderIndices.indexOf(arg1);
          }
          if (num > -1) {
            const stickyHeaderIndices = key;
            let StickyHeaderComponent = self.props.StickyHeaderComponent;
            if (!StickyHeaderComponent) {
              StickyHeaderComponent = tmp11Result(closure_3[22]);
            }
            const obj = {
              ref(arg0) {
                  return arg1._setStickyHeaderRef(key, arg0);
                }
            };
            const _headerLayoutYs = self._headerLayoutYs;
            obj.nextHeaderLayoutY = _headerLayoutYs.get(self._getKeyForIndex(stickyHeaderIndices[num + 1], tmp11Result));
            obj.onLayout = function onLayout(nativeEvent) {
              return arg1._onStickyHeaderLayout(arg1, nativeEvent, key);
            };
            obj.scrollAnimatedValue = self._scrollAnimatedValue;
            obj.inverted = self.props.invertStickyHeaders;
            obj.hiddenOnScroll = self.props.stickyHeaderHiddenOnScroll;
            obj.scrollViewHeight = self.state.layoutHeight;
            obj.children = key;
            return callback(StickyHeaderComponent, obj, key.key);
          } else {
            return key;
          }
        });
        tmp11Result = mapped;
        tmp9 = mapped;
      }
      obj = {};
      const tmp12 = stickyHeaderIndices(closure_3[23]);
      obj.value = tmp ? tmp12.HORIZONTAL : tmp12.VERTICAL;
      obj.children = tmp9;
      tmp11Result = callback6(tmp11Result(closure_3[23]).Provider, obj);
      let isArray = Array.isArray(stickyHeaderIndices);
      if (isArray) {
        isArray = stickyHeaderIndices.length > 0;
      }
      obj = { ref: _innerView.getForwardingRef(self.props.innerViewRef), style: items, removeClippedSubviews: tmp17, collapsable: false, collapsableChildren: !(null != self.props.maintainVisibleContentPosition || null != self.props.snapToAlignment), children: tmp11Result };
      const _innerView = self._innerView;
      const tmp16Result = callback6(VScrollContentViewNativeComponent, Object.assign({}, tmp7, obj));
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
      const tmp20 = tmp ? obj.baseHorizontal : obj.baseVertical;
      const props = self.props;
      const obj1 = { alwaysBounceHorizontal: horizontal, alwaysBounceVertical };
      let obj4 = tmp11Result(closure_3[24]);
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
      const merged = Object.assign({}, callback2(props, closure_4), obj1);
      const decelerationRate = self.props.decelerationRate;
      if (null != decelerationRate) {
        merged.decelerationRate = tmp11Result(closure_3[25])(decelerationRate);
      }
      const refreshControl = self.props.refreshControl;
      const _scrollView = self._scrollView;
      const forwardingRef = _scrollView.getForwardingRef(self.props.scrollViewRef);
      if (null != refreshControl) {
        const tmp30 = tmp11Result(closure_3[26]);
        const obj2 = {};
        ({ outer, inner } = tmp11Result(closure_3[26])(tmp11Result(closure_3[27])(merged.style)));
        const tmp30Result = tmp11Result(closure_3[26])(tmp11Result(closure_3[27])(merged.style));
        obj2.style = tmp11Result(closure_3[24]).compose(tmp20, outer);
        const _Object2 = Object;
        const obj3 = {};
        const obj8 = tmp11Result(closure_3[24]);
        obj3.style = tmp11Result(closure_3[24]).compose(tmp20, inner);
        obj3.ref = forwardingRef;
        obj3.children = tmp16Result;
        return callback5(refreshControl, obj2, callback6(VScrollViewNativeComponent, Object.assign({}, merged, obj3)));
      } else {
        const _Object = Object;
        obj4 = { ref: forwardingRef, children: tmp16Result };
        return callback6(VScrollViewNativeComponent, Object.assign({}, merged, obj4));
      }
      const tmp11 = callback6;
      const tmp15 = null != self.props.maintainVisibleContentPosition || null != self.props.snapToAlignment;
      const tmp16 = callback6;
      const tmp17 = !isArray && self.props.removeClippedSubviews;
      const tmp21 = callback2(props, closure_4);
      const tmp22 = !self.props.onMomentumScrollBegin && !self.props.onMomentumScrollEnd;
    }
  };
  return callback2(ScrollView, items);
}(importAllResult.Component);
tmp4.Context = importDefault(dependencyMap[23]);
const tmp3 = arg1(dependencyMap[7]);
let closure_16 = importDefault(dependencyMap[24]).create({ baseVertical: { isArray: null, diversity: null, string: null, y: null }, baseHorizontal: { isArray: false, diversity: false, string: false, y: false }, contentContainerHorizontal: { flexDirection: "row" } });
class Wrapper {
  constructor(arg0) {
    ref = global.ref;
    tmp = closure_6(global, createRefForwarder);
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
Wrapper.Context = importDefault(dependencyMap[23]);

export default Wrapper;
