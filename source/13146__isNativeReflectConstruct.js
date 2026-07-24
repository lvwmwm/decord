// Module ID: 13146
// Function ID: 101187
// Name: _isNativeReflectConstruct
// Dependencies: [65, 57, 6, 7, 15, 17, 18, 31, 27, 33, 8197, 13147, 13149, 3955]

// Module 13146 (_isNativeReflectConstruct)
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";
import _inherits from "_inherits";
import result from "result";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import closure_9 from "_inherits";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importDefaultResult1 from "emptyFunction";
import importDefaultResult2 from "emptyFunction";

let FlatList;
let I18nManager;
let Platform;
let ScrollView;
let closure_11;
let closure_12;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const Animated = get_ActivityIndicator.Animated;
({ Easing: closure_11, FlatList, Platform, View: closure_12 } = get_ActivityIndicator);
({ I18nManager, ScrollView } = get_ActivityIndicator);
let animatedComponent = null;
if (FlatList) {
  animatedComponent = Animated.createAnimatedComponent(FlatList);
}
let closure_15 = Animated.createAnimatedComponent(ScrollView);
const isRTL = I18nManager.isRTL;
let tmp5 = ((Component) => {
  class Carousel {
    constructor(arg0) {
      self = this;
      tmp = outer1_5(this, Carousel);
      items = [];
      items[0] = Component;
      obj = outer1_8(Carousel);
      tmp2 = outer1_7;
      if (outer1_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, items, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.state = { hideCarousel: true, interpolators: [] };
      _getFirstItemResult = tmp2Result._getFirstItem(Component.firstItem);
      tmp2Result._activeItem = _getFirstItemResult;
      tmp2Result._previousActiveItem = _getFirstItemResult;
      tmp2Result._previousFirstItem = _getFirstItemResult;
      tmp2Result._previousItemsLength = _getFirstItemResult;
      tmp2Result._mounted = false;
      tmp2Result._positions = [];
      tmp2Result._currentContentOffset = 0;
      tmp2Result._canFireBeforeCallback = false;
      tmp2Result._canFireCallback = false;
      tmp2Result._scrollOffsetRef = null;
      tmp2Result._onScrollTriggered = true;
      tmp2Result._lastScrollDate = 0;
      tmp2Result._scrollEnabled = false !== Component.scrollEnabled;
      _initPositionsAndInterpolators = tmp2Result._initPositionsAndInterpolators;
      tmp2Result._initPositionsAndInterpolators = _initPositionsAndInterpolators.bind(tmp2Result);
      _renderItem = tmp2Result._renderItem;
      tmp2Result._renderItem = _renderItem.bind(tmp2Result);
      _onSnap = tmp2Result._onSnap;
      tmp2Result._onSnap = _onSnap.bind(tmp2Result);
      _onLayout = tmp2Result._onLayout;
      tmp2Result._onLayout = _onLayout.bind(tmp2Result);
      _onScroll = tmp2Result._onScroll;
      tmp2Result._onScroll = _onScroll.bind(tmp2Result);
      bindResult = undefined;
      if (Component.enableSnap) {
        _onScrollBeginDrag = tmp2Result._onScrollBeginDrag;
        bindResult = _onScrollBeginDrag.bind(tmp2Result);
      }
      tmp2Result._onScrollBeginDrag = bindResult;
      if (Component.enableSnap) {
        _onScrollEnd = tmp2Result._onScrollEnd;
        bindResult1 = _onScrollEnd.bind(tmp2Result);
      }
      tmp2Result._onScrollEnd = bindResult1;
      bindResult2 = undefined;
      if (!Component.enableMomentum) {
        _onScrollEndDrag = tmp2Result._onScrollEndDrag;
        bindResult2 = _onScrollEndDrag.bind(tmp2Result);
      }
      tmp2Result._onScrollEndDrag = bindResult2;
      bindResult3 = undefined;
      if (Component.enableMomentum) {
        _onMomentumScrollEnd = tmp2Result._onMomentumScrollEnd;
        bindResult3 = _onMomentumScrollEnd.bind(tmp2Result);
      }
      tmp2Result._onMomentumScrollEnd = bindResult3;
      _onTouchStart = tmp2Result._onTouchStart;
      tmp2Result._onTouchStart = _onTouchStart.bind(tmp2Result);
      _onTouchEnd = tmp2Result._onTouchEnd;
      tmp2Result._onTouchEnd = _onTouchEnd.bind(tmp2Result);
      _onTouchRelease = tmp2Result._onTouchRelease;
      tmp2Result._onTouchRelease = _onTouchRelease.bind(tmp2Result);
      _getKeyExtractor = tmp2Result._getKeyExtractor;
      tmp2Result._getKeyExtractor = _getKeyExtractor.bind(tmp2Result);
      _setScrollHandlerResult = tmp2Result._setScrollHandler(Component);
      tmp2Result._ignoreNextMomentum = false;
      if (!Carousel(outer1_2[10]).ViewPropTypes) {
        tmp12 = globalThis;
        _console = console;
        str = "react-native-snap-carousel: It is recommended to use at least version 0.44 of React Native with the plugin";
        warnResult = console.warn("react-native-snap-carousel: It is recommended to use at least version 0.44 of React Native with the plugin");
      }
      vertical = Component.vertical;
      if (!vertical) {
        tmp14 = Component.sliderWidth && Component.itemWidth;
        vertical = tmp14;
      }
      if (!vertical) {
        tmp15 = globalThis;
        _console2 = console;
        str2 = "react-native-snap-carousel: You need to specify both `sliderWidth` and `itemWidth` for horizontal carousels";
        errorResult = console.error("react-native-snap-carousel: You need to specify both `sliderWidth` and `itemWidth` for horizontal carousels");
      }
      tmp17 = !Component.vertical;
      if (!tmp17) {
        tmp18 = Component.sliderHeight && Component.itemHeight;
        tmp17 = tmp18;
      }
      if (!tmp17) {
        tmp19 = globalThis;
        _console3 = console;
        str3 = "react-native-snap-carousel: You need to specify both `sliderHeight` and `itemHeight` for vertical carousels";
        errorResult1 = console.error("react-native-snap-carousel: You need to specify both `sliderHeight` and `itemHeight` for vertical carousels");
      }
      tmp21 = Component.apparitionDelay && !Component.useScrollView;
      if (tmp21) {
        tmp22 = globalThis;
        _console4 = console;
        str4 = "react-native-snap-carousel: Using `apparitionDelay` on Android is not recommended since it can lead to rendering issues";
        warnResult1 = console.warn("react-native-snap-carousel: Using `apparitionDelay` on Android is not recommended since it can lead to rendering issues");
      }
      tmp24 = Component.customAnimationType || Component.customAnimationOptions;
      if (tmp24) {
        tmp25 = globalThis;
        _console5 = console;
        str5 = "react-native-snap-carousel: Props `customAnimationType` and `customAnimationOptions` have been renamed to `activeAnimationType` and `activeAnimationOptions`";
        warnResult2 = console.warn("react-native-snap-carousel: Props `customAnimationType` and `customAnimationOptions` have been renamed to `activeAnimationType` and `activeAnimationOptions`");
      }
      if (Component.onScrollViewScroll) {
        tmp27 = globalThis;
        _console6 = console;
        str6 = "react-native-snap-carousel: Prop `onScrollViewScroll` has been removed. Use `onScroll` instead";
        errorResult2 = console.error("react-native-snap-carousel: Prop `onScrollViewScroll` has been removed. Use `onScroll` instead");
      }
      return tmp2Result;
    }
  }
  callback2(Carousel, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      let closure_1;
      let closure_2;
      const self = this;
      const props = this.props;
      ({ apparitionDelay: closure_1, autoplay: closure_2 } = props);
      let _toConsumableArray = this._getFirstItem(props.firstItem);
      function apparitionCallback() {
        self.setState({ hideCarousel: false });
        if (closure_2) {
          self.startAutoplay();
        }
      }
      this._mounted = true;
      let result = this._initPositionsAndInterpolators();
      const animationFrame = requestAnimationFrame(() => {
        if (self._mounted) {
          self._snapToItem(_toConsumableArray, false, false, true, false);
          const result = self._hackActiveSlideAnimation(_toConsumableArray, "start", true);
          if (closure_1) {
            const _setTimeout = setTimeout;
            self._apparitionTimeout = setTimeout(() => {
              outer1_4();
            }, closure_1);
          } else {
            apparitionCallback();
          }
        }
      });
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(arg0, arg1) {
      let tmp2 = false === this.props.shouldOptimizeUpdates;
      if (!tmp2) {
        tmp2 = outer1_1(outer1_2[11])(tmp, arg0, arg1);
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(sliderWidth) {
      let itemHeight;
      let itemWidth;
      let scrollEnabled;
      let sliderHeight;
      const self = this;
      const props = this.props;
      ({ itemHeight, itemWidth, scrollEnabled, sliderHeight, sliderWidth } = props);
      const _getCustomDataLengthResult = this._getCustomDataLength(this.props);
      if (_getCustomDataLengthResult) {
        const _getFirstItemResult = self._getFirstItem(props.firstItem, self.props);
        if (self._activeItem) {
          let _activeItem = self._activeItem;
        } else {
          _activeItem = _getFirstItemResult;
        }
        let tmp3 = sliderWidth;
        if (sliderWidth) {
          tmp3 = sliderWidth !== sliderWidth.sliderWidth;
        }
        let tmp4 = sliderHeight;
        if (sliderHeight) {
          tmp4 = sliderHeight !== sliderWidth.sliderHeight;
        }
        let tmp5 = itemWidth;
        if (itemWidth) {
          tmp5 = itemWidth !== sliderWidth.itemWidth;
        }
        let tmp6 = itemHeight;
        if (itemHeight) {
          tmp6 = itemHeight !== sliderWidth.itemHeight;
        }
        if (_activeItem > _getCustomDataLengthResult - 1) {
          _activeItem = _getCustomDataLengthResult - 1;
        }
        if (scrollEnabled !== sliderWidth.scrollEnabled) {
          self._setScrollEnabled(scrollEnabled);
        }
        if (this.state.interpolators.length === _getCustomDataLengthResult) {
          if (!tmp3) {
            if (!tmp4) {
              if (!tmp5) {
                if (!tmp6) {
                  if (tmp8) {
                    self._activeItem = _getFirstItemResult;
                    self._previousFirstItem = _getFirstItemResult;
                    self._snapToItem(_getFirstItemResult, false, true, false, false);
                  }
                  tmp8 = _getFirstItemResult !== self._previousFirstItem && _getFirstItemResult !== self._activeItem;
                }
                if (self.props.onScroll !== sliderWidth.onScroll) {
                  self._setScrollHandler(self.props);
                }
              }
            }
          }
        }
        self._activeItem = _activeItem;
        self._previousItemsLength = _getCustomDataLengthResult;
        const result = self._initPositionsAndInterpolators(self.props);
        if (self._previousItemsLength > _getCustomDataLengthResult) {
          const result1 = self._hackActiveSlideAnimation(_activeItem, null, true);
        }
        if (!tmp3) {
          tmp3 = tmp4;
        }
        if (!tmp3) {
          tmp3 = tmp5;
        }
        if (!tmp3) {
          tmp3 = tmp6;
        }
        if (tmp3) {
          self._snapToItem(_activeItem, false, false, false, false);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
      this.stopAutoplay();
      clearTimeout(this._apparitionTimeout);
      clearTimeout(this._hackSlideAnimationTimeout);
      clearTimeout(this._enableAutoplayTimeout);
      clearTimeout(this._autoplayTimeout);
      clearTimeout(this._snapNoMomentumTimeout);
      clearTimeout(this._edgeItemTimeout);
      clearTimeout(this._lockScrollTimeout);
    }
  };
  items[4] = {
    key: "realIndex",
    get() {
      return this._activeItem;
    }
  };
  items[5] = {
    key: "currentIndex",
    get() {
      return this._getDataIndex(this._activeItem);
    }
  };
  items[6] = {
    key: "currentScrollPosition",
    get() {
      return this._currentContentOffset;
    }
  };
  items[7] = {
    key: "_setScrollHandler",
    value: function _setScrollHandler(props) {
      const self = this;
      let obj = { listener: this._onScroll, useNativeDriver: true };
      const value = new outer1_10.Value(0);
      this._scrollPos = value;
      obj = {};
      obj = {};
      const obj1 = {};
      const _scrollPos = this._scrollPos;
      if (props.vertical) {
        obj1.y = _scrollPos;
        obj.contentOffset = obj1;
        obj.nativeEvent = obj;
        const items = [obj];
        let items1 = items;
      } else {
        obj1.x = _scrollPos;
        obj.contentOffset = obj1;
        obj.nativeEvent = obj;
        items1 = [obj];
      }
      if (props.onScroll) {
        const _Array = Array;
        if (Array.isArray(props.onScroll._argMapping)) {
          items1.pop();
          const first = outer1_4(props.onScroll._argMapping, 1)[0];
          let contentOffset = first;
          if (first) {
            contentOffset = first.nativeEvent;
          }
          if (contentOffset) {
            contentOffset = first.nativeEvent.contentOffset;
          }
          if (contentOffset) {
            self._scrollPos = first.nativeEvent.contentOffset.x || first.nativeEvent.contentOffset.y || self._scrollPos;
          }
          const push = items1.push;
          push.apply(items1, outer1_3(props.onScroll._argMapping));
        }
      }
      self._onScrollHandler = outer1_10.event(items1, obj);
    }
  };
  items[8] = {
    key: "_needsScrollView",
    value: function _needsScrollView() {
      const self = this;
      let useScrollView = this.props.useScrollView;
      if (!useScrollView) {
        useScrollView = !outer1_14;
      }
      if (!useScrollView) {
        useScrollView = self._shouldUseStackLayout();
      }
      if (!useScrollView) {
        useScrollView = self._shouldUseTinderLayout();
      }
      return useScrollView;
    }
  };
  items[9] = {
    key: "_needsRTLAdaptations",
    value: function _needsRTLAdaptations() {
      let tmp = outer1_16;
      if (outer1_16) {
        tmp = !this.props.vertical;
      }
      return tmp;
    }
  };
  items[10] = {
    key: "_canLockScroll",
    value: function _canLockScroll() {
      let lockScrollWhileSnapping;
      let scrollEnabled;
      const props = this.props;
      ({ scrollEnabled, lockScrollWhileSnapping } = props);
      if (scrollEnabled) {
        scrollEnabled = !props.enableMomentum;
      }
      if (scrollEnabled) {
        scrollEnabled = lockScrollWhileSnapping;
      }
      return scrollEnabled;
    }
  };
  items[11] = {
    key: "_enableLoop",
    value: function _enableLoop() {
      const props = this.props;
      const data = props.data;
      let tmp = props.enableSnap && props.loop && data && data.length;
      if (tmp) {
        tmp = data.length > 1;
      }
      return tmp;
    }
  };
  items[12] = {
    key: "_shouldAnimateSlides",
    value: function _shouldAnimateSlides(props) {
      let scrollInterpolator;
      let slideInterpolatedStyle;
      const self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          props = arguments[0];
        }
        let result = props.inactiveSlideOpacity < 1;
        ({ scrollInterpolator, slideInterpolatedStyle } = props);
        if (!result) {
          result = props.inactiveSlideScale < 1;
        }
        if (!result) {
          result = scrollInterpolator;
        }
        if (!result) {
          result = slideInterpolatedStyle;
        }
        if (!result) {
          result = self._shouldUseShiftLayout();
        }
        if (!result) {
          result = self._shouldUseStackLayout();
        }
        if (!result) {
          result = self._shouldUseTinderLayout();
        }
        return result;
      }
      props = self.props;
    }
  };
  items[13] = {
    key: "_shouldUseCustomAnimation",
    value: function _shouldUseCustomAnimation() {
      const self = this;
      let tmp2 = !tmp;
      if (!!this.props.activeAnimationOptions) {
        tmp2 = !self._shouldUseStackLayout();
      }
      if (tmp2) {
        tmp2 = !self._shouldUseTinderLayout();
      }
      return tmp2;
    }
  };
  items[14] = {
    key: "_shouldUseShiftLayout",
    value: function _shouldUseShiftLayout() {
      let tmp2 = "default" === this.props.layout;
      if (tmp2) {
        tmp2 = 0 !== tmp;
      }
      return tmp2;
    }
  };
  items[15] = {
    key: "_shouldUseStackLayout",
    value: function _shouldUseStackLayout() {
      return "stack" === this.props.layout;
    }
  };
  items[16] = {
    key: "_shouldUseTinderLayout",
    value: function _shouldUseTinderLayout() {
      return "tinder" === this.props.layout;
    }
  };
  items[17] = {
    key: "_getCustomData",
    value: function _getCustomData(props) {
      let data;
      let loopClonesPerSide;
      const self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          props = arguments[0];
        }
        ({ data, loopClonesPerSide } = props);
        let length = data;
        if (data) {
          length = data.length;
        }
        if (length) {
          if (self._enableLoop()) {
            const items = [];
            const items1 = [];
            if (loopClonesPerSide > length) {
              const _Math = Math;
              const rounded = Math.floor(loopClonesPerSide / length);
              const result = loopClonesPerSide % length;
              for (let num = 0; num < rounded; num = num + 1) {
                let push = items.push;
                let tmp5 = outer1_3;
                let applyResult = push.apply(items, outer1_3(data));
                let push2 = items1.push;
                let applyResult1 = push2.apply(items1, outer1_3(data));
              }
              const unshift = items.unshift;
              unshift.apply(items, outer1_3(data.slice(-result)));
              const push3 = items1.push;
              push3.apply(items1, outer1_3(data.slice(0, result)));
              let substr = items;
              let substr1 = items1;
            } else {
              substr = data.slice(-loopClonesPerSide);
              substr1 = data.slice(0, loopClonesPerSide);
            }
            return substr.concat(data, substr1);
          } else {
            return data;
          }
        } else {
          return [];
        }
      }
      props = self.props;
    }
  };
  items[18] = {
    key: "_getCustomDataLength",
    value: function _getCustomDataLength(props) {
      const self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          props = arguments[0];
        }
        const data = props.data;
        let length = data;
        if (data) {
          length = data.length;
        }
        let num = 0;
        if (length) {
          let sum = length;
          if (self._enableLoop()) {
            sum = length + 2 * props.loopClonesPerSide;
          }
          num = sum;
        }
        return num;
      }
      props = self.props;
    }
  };
  items[19] = {
    key: "_getCustomIndex",
    value: function _getCustomIndex(_activeItem, props) {
      const self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          props = arguments[1];
        }
        const _getCustomDataLengthResult = self._getCustomDataLength(props);
        let num = 0;
        if (_getCustomDataLengthResult) {
          if (_activeItem) {
            let diff = _activeItem;
            if (self._needsRTLAdaptations()) {
              diff = _getCustomDataLengthResult - _activeItem - 1;
            }
            num = diff;
          } else {
            num = 0;
          }
        }
        return num;
      }
      props = self.props;
    }
  };
  items[20] = {
    key: "_getDataIndex",
    value: function _getDataIndex(_getActiveItemResult) {
      let data;
      let loopClonesPerSide;
      const self = this;
      ({ data, loopClonesPerSide } = this.props);
      let length = data;
      if (data) {
        length = data.length;
      }
      if (self._enableLoop()) {
        if (length) {
          if (_getActiveItemResult >= length + loopClonesPerSide) {
            if (loopClonesPerSide > length) {
              let result = (_getActiveItemResult - loopClonesPerSide) % length;
            } else {
              result = _getActiveItemResult - length - loopClonesPerSide;
            }
            return result;
          } else if (_getActiveItemResult < loopClonesPerSide) {
            if (loopClonesPerSide > length) {
              const items = [];
              const items1 = [];
              const _Math = Math;
              const rounded = Math.floor(loopClonesPerSide / length);
              let num2 = 0;
              const result1 = loopClonesPerSide % length;
              if (0 < length) {
                do {
                  let arr = items.push(num2);
                  num2 = num2 + 1;
                } while (num2 < length);
              }
              for (let num3 = 0; num3 < rounded; num3 = num3 + 1) {
                let push = items1.push;
                let applyResult = push.apply(items1, items);
              }
              const unshift = items1.unshift;
              unshift.apply(items1, outer1_3(items.slice(-result1)));
              return items1[_getActiveItemResult];
            } else {
              return _getActiveItemResult + length - loopClonesPerSide;
            }
          } else {
            return _getActiveItemResult - loopClonesPerSide;
          }
        }
      }
      return _getActiveItemResult;
    }
  };
  items[21] = {
    key: "_getPositionIndex",
    value: function _getPositionIndex(closure_1) {
      const props = this.props;
      let sum = closure_1;
      if (props.loop) {
        sum = closure_1 + props.loopClonesPerSide;
      }
      return sum;
    }
  };
  items[22] = {
    key: "_getFirstItem",
    value: function _getFirstItem(firstItem, props) {
      const self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          props = arguments[1];
        }
        const _getCustomDataLengthResult = self._getCustomDataLength(props);
        let num2 = 0;
        if (_getCustomDataLengthResult) {
          num2 = 0;
          if (firstItem <= _getCustomDataLengthResult - 1) {
            num2 = 0;
            if (firstItem >= 0) {
              let sum = firstItem;
              if (self._enableLoop()) {
                sum = firstItem + props.loopClonesPerSide;
              }
              num2 = sum;
            }
          }
        }
        return num2;
      }
      props = self.props;
    }
  };
  items[23] = {
    key: "_getWrappedRef",
    value: function _getWrappedRef() {
      const self = this;
      if (this._carouselRef) {
        if (!self._needsScrollView()) {
          if (!self._needsScrollView()) {
            return self._carouselRef;
          }
        }
      }
      let node = self._carouselRef && self._carouselRef.getNode;
      if (node) {
        const _carouselRef = self._carouselRef;
        node = _carouselRef.getNode();
      }
    }
  };
  items[24] = {
    key: "_getScrollEnabled",
    value: function _getScrollEnabled() {
      return this._scrollEnabled;
    }
  };
  items[25] = {
    key: "_setScrollEnabled",
    value: function _setScrollEnabled(scrollEnabled) {
      const self = this;
      const tmp = arguments.length > 0 && undefined !== arguments[0];
      let first = !tmp;
      if (tmp) {
        first = arguments[0];
      }
      const _getWrappedRefResult = self._getWrappedRef();
      let setNativeProps = _getWrappedRefResult;
      if (_getWrappedRefResult) {
        setNativeProps = _getWrappedRefResult.setNativeProps;
      }
      if (setNativeProps) {
        const obj = { scrollEnabled: first };
        _getWrappedRefResult.setNativeProps(obj);
        self._scrollEnabled = first;
      }
    }
  };
  items[26] = {
    key: "_getKeyExtractor",
    value: function _getKeyExtractor(item, index) {
      if (this._needsScrollView()) {
        let combined = concat(index);
      } else {
        combined = concat(index);
      }
      return combined;
    }
  };
  items[27] = {
    key: "_getScrollOffset",
    value: function _getScrollOffset(nativeEvent) {
      let num = nativeEvent;
      if (nativeEvent) {
        num = nativeEvent.nativeEvent;
      }
      if (num) {
        num = nativeEvent.nativeEvent.contentOffset;
      }
      if (num) {
        let str = "x";
        if (this.props.vertical) {
          str = "y";
        }
        num = nativeEvent.nativeEvent.contentOffset[str];
      }
      if (!num) {
        num = 0;
      }
      return num;
    }
  };
  items[28] = {
    key: "_getContainerInnerMargin",
    value: function _getContainerInnerMargin(arg0) {
      let activeSlideAlignment;
      let itemHeight;
      let itemWidth;
      let sliderHeight;
      let sliderWidth;
      let vertical;
      const tmp = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
      ({ sliderWidth, sliderHeight, itemWidth, itemHeight, vertical, activeSlideAlignment } = this.props);
      if ("start" !== activeSlideAlignment) {
        if ("end" === activeSlideAlignment) {
          let num = 0;
        }
        if ("end" !== activeSlideAlignment) {
          if (!tmp2) {
            if (vertical) {
              let result = (sliderHeight - itemHeight) / 2;
            } else {
              result = (sliderWidth - itemWidth) / 2;
            }
          }
        }
      } else {
        num = 0;
      }
      return num;
    }
  };
  items[29] = {
    key: "_getViewportOffset",
    value: function _getViewportOffset() {
      let activeSlideAlignment;
      let itemHeight;
      let itemWidth;
      let sliderHeight;
      let sliderWidth;
      let vertical;
      ({ sliderWidth, sliderHeight, itemWidth, itemHeight, vertical, activeSlideAlignment } = this.props);
      if ("start" !== activeSlideAlignment) {
        if ("end" === activeSlideAlignment) {
          let num2 = 2;
          if (vertical) {
            num2 = itemHeight / num2;
            let diff = sliderHeight - num2;
          } else {
            diff = sliderWidth - itemWidth / num2;
          }
        } else {
          return vertical ? sliderHeight / 2 : sliderWidth / 2;
        }
      }
    }
  };
  items[30] = {
    key: "_getCenter",
    value: function _getCenter(_currentContentOffset) {
      const sum = _currentContentOffset + this._getViewportOffset();
      return sum - this._getContainerInnerMargin();
    }
  };
  items[31] = {
    key: "_getActiveItem",
    value: function _getActiveItem(_currentContentOffset) {
      const self = this;
      const props = this.props;
      let swipeThreshold = props.activeSlideOffset;
      const _getCenterResult = this._getCenter(_currentContentOffset);
      if (!swipeThreshold) {
        swipeThreshold = props.swipeThreshold;
      }
      let num = 0;
      if (0 < self._positions.length) {
        while (true) {
          let tmp3 = num;
          if (_getCenterResult + swipeThreshold >= self._positions[num].start) {
            if (_getCenterResult - swipeThreshold <= tmp2) {
              break;
            }
          }
          num = num + 1;
        }
        return num;
      }
      const diff = self._positions.length - 1;
      let num2 = 0;
      if (self._positions[diff]) {
        num2 = 0;
        if (_getCenterResult - swipeThreshold > self._positions[diff].end) {
          num2 = diff;
        }
      }
      return num2;
    }
  };
  items[32] = {
    key: "_initPositionsAndInterpolators",
    value: function _initPositionsAndInterpolators(props) {
      let closure_2;
      let data;
      let itemWidth;
      let self = this;
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          props = arguments[0];
        }
        ({ data, itemWidth, scrollInterpolator: closure_2 } = props);
        if (props.vertical) {
          itemWidth = props.itemHeight;
        }
        if (data) {
          if (data.length) {
            const items = [];
            self._positions = [];
            const item = self._getCustomData(props).forEach((arg0, _activeItem) => {
              const _getCustomIndexResult = self._getCustomIndex(_activeItem, props);
              let obj = { start: _activeItem * itemWidth, end: _activeItem * itemWidth + itemWidth };
              self._positions[_activeItem] = obj;
              if (self._shouldAnimateSlides(props)) {
                if (self._shouldUseCustomAnimation()) {
                  const Value2 = outer2_10.Value;
                  let num5 = 0;
                  if (_getCustomIndexResult === self._activeItem) {
                    num5 = 1;
                  }
                  const prototype2 = Value2.prototype;
                  let interpolateResult = new Value2(num5);
                } else {
                  if (callback) {
                    let result = callback(_getCustomIndexResult, props);
                  } else if (self._shouldUseStackLayout()) {
                    result = Carousel(outer2_2[12]).stackScrollInterpolator(_getCustomIndexResult, props);
                    const obj3 = Carousel(outer2_2[12]);
                  } else if (self._shouldUseTinderLayout()) {
                    result = Carousel(outer2_2[12]).tinderScrollInterpolator(_getCustomIndexResult, props);
                    const obj2 = Carousel(outer2_2[12]);
                  }
                  let outputRange = result;
                  if (result) {
                    outputRange = result.inputRange;
                  }
                  if (outputRange) {
                    outputRange = result.outputRange;
                  }
                  if (!outputRange) {
                    result = Carousel(outer2_2[12]).defaultScrollInterpolator(_getCustomIndexResult, props);
                    const obj4 = Carousel(outer2_2[12]);
                  }
                  const _scrollPos = self._scrollPos;
                  const _Object = Object;
                  obj = { extrapolate: "clamp" };
                  interpolateResult = _scrollPos.interpolate(Object.assign({}, result, obj));
                }
              } else {
                const Value = outer2_10.Value;
                const prototype = Value.prototype;
                interpolateResult = new Value(1);
              }
              items.push(interpolateResult);
            });
            let obj = { interpolators: items };
            self.setState(obj);
            const _getCustomDataResult = self._getCustomData(props);
          }
        }
      }
      props = self.props;
    }
  };
  items[33] = {
    key: "_getSlideAnimation",
    value: function _getSlideAnimation(_activeItem, toValue) {
      let activeAnimationOptions;
      let activeAnimationType;
      let parallel;
      let timing;
      const interpolators = this.state.interpolators;
      let tmp = interpolators;
      ({ activeAnimationType, activeAnimationOptions } = this.props);
      if (interpolators) {
        tmp = interpolators[_activeItem];
      }
      if (!tmp) {
        if (0 !== tmp) {
          return null;
        }
      }
      let obj = { toValue };
      const merged = Object.assign({ isInteraction: false, useNativeDriver: true }, activeAnimationOptions, obj);
      obj = { easing: outer1_11.linear };
      ({ parallel, timing } = outer1_10);
      const items = [timing(tmp, Object.assign({}, merged, obj)), outer1_10[activeAnimationType](tmp, Object.assign({}, merged))];
      return parallel(items);
    }
  };
  items[34] = {
    key: "_playCustomSlideAnimation",
    value: function _playCustomSlideAnimation(_activeItem, _getActiveItemResult) {
      const self = this;
      const interpolators = this.state.interpolators;
      const _getCustomDataLengthResult = this._getCustomDataLength();
      const items = [];
      const _getDataIndexResult = this._getDataIndex(this._getCustomIndex(_activeItem));
      if (this._enableLoop()) {
        let num5 = 0;
        if (0 < _getCustomDataLengthResult) {
          while (true) {
            let tmp6 = num5;
            if (self._getDataIndex(num5) === _getDataIndexResult) {
              if (interpolators[num5]) {
                let arr = items.push(self._getSlideAnimation(num5, 0));
                num5 = num5 + 1;
                if (num5 >= _getCustomDataLengthResult) {
                  break;
                }
              }
            }
            let tmp7 = self._getDataIndex(num5) === _getDataIndexResult1 && interpolators[num5];
            if (tmp7) {
              arr = items.push(self._getSlideAnimation(num5, 1));
            }
          }
        }
      } else {
        if (interpolators[_activeItem]) {
          items.push(self._getSlideAnimation(_activeItem, 0));
        }
        if (interpolators[_getActiveItemResult]) {
          items.push(self._getSlideAnimation(_getActiveItemResult, 1));
        }
      }
      _getDataIndexResult1 = this._getDataIndex(this._getCustomIndex(_getActiveItemResult));
      outer1_10.parallel(items, { stopTogether: false }).start();
    }
  };
  items[35] = {
    key: "_hackActiveSlideAnimation",
    value: function _hackActiveSlideAnimation(_activeItem, start, arg2) {
      let self = this;
      self = this;
      const data = self.props.data;
      if (self._mounted) {
        if (self._carouselRef) {
          if (self._positions[_activeItem]) {
            if (tmp) {
              let closure_1 = tmp2;
              if (self._positions[_activeItem] && self._positions[_activeItem].start) {
                let length = data;
                if (data) {
                  length = data.length;
                }
                if (start) {
                  let str = "start";
                } else {
                  str = "end";
                }
                let num3 = 1;
                if ("start" === str) {
                  num3 = -1;
                }
                self._scrollTo(tmp2 + num3, false);
                const _clearTimeout = clearTimeout;
                clearTimeout(self._hackSlideAnimationTimeout);
                const _setTimeout = setTimeout;
                self._hackSlideAnimationTimeout = setTimeout(() => {
                  self._scrollTo(closure_1, false);
                }, 50);
              }
            }
          }
        }
      }
    }
  };
  items[36] = {
    key: "_lockScroll",
    value: function _lockScroll() {
      const self = this;
      clearTimeout(this._lockScrollTimeout);
      this._lockScrollTimeout = setTimeout(() => {
        self._releaseScroll();
      }, this.props.lockScrollTimeoutDuration);
      this._setScrollEnabled(false);
    }
  };
  items[37] = {
    key: "_releaseScroll",
    value: function _releaseScroll() {
      clearTimeout(this._lockScrollTimeout);
      this._setScrollEnabled(true);
    }
  };
  items[38] = {
    key: "_repositionScroll",
    value: function _repositionScroll(_getActiveItemResult) {
      let data;
      let loopClonesPerSide;
      let _snapToItem = _getActiveItemResult;
      const self = this;
      ({ data, loopClonesPerSide } = this.props);
      let length = data;
      if (data) {
        length = data.length;
      }
      if (self._enableLoop()) {
        if (length) {
          if (_snapToItem >= length + loopClonesPerSide) {
            let diff = _snapToItem - length;
          } else {
            diff = _snapToItem;
            if (_snapToItem < loopClonesPerSide) {
              diff = _snapToItem + length;
            }
          }
          _snapToItem = self._snapToItem;
          length = _snapToItem(diff, false, false, false, false);
        }
      }
    }
  };
  items[39] = {
    key: "_scrollTo",
    value: function _scrollTo(_scrollOffsetRef, arg1) {
      const self = this;
      const tmp = arguments.length > 1 && undefined !== arguments[1];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[1];
      }
      const vertical = self.props.vertical;
      const _getWrappedRefResult = self._getWrappedRef();
      if (self._mounted) {
        if (_getWrappedRefResult) {
          if (self._needsScrollView()) {
            let obj = {};
            let num = 0;
            if (!vertical) {
              num = _scrollOffsetRef;
            }
            obj.x = num;
            let num2 = 0;
            if (vertical) {
              num2 = _scrollOffsetRef;
            }
            obj.y = num2;
          } else {
            obj = { offset: _scrollOffsetRef };
          }
          const _Object = Object;
          const obj1 = { animated: tmp2 };
          const merged = Object.assign({}, obj, obj1);
          if (self._needsScrollView()) {
            _getWrappedRefResult.scrollTo(merged);
          } else {
            _getWrappedRefResult.scrollToOffset(merged);
          }
        }
      }
    }
  };
  items[40] = {
    key: "_onScroll",
    value: function _onScroll(nativeEvent) {
      let callbackOffsetMargin;
      let enableMomentum;
      let onScroll;
      const self = this;
      ({ callbackOffsetMargin, onScroll, enableMomentum } = this.props);
      if (nativeEvent) {
        let _currentContentOffset = self._getScrollOffset(nativeEvent);
      } else {
        _currentContentOffset = self._currentContentOffset;
      }
      const _getActiveItemResult = self._getActiveItem(_currentContentOffset);
      let _canFireCallback = _currentContentOffset >= self._scrollOffsetRef - callbackOffsetMargin && _currentContentOffset <= self._scrollOffsetRef + callbackOffsetMargin;
      self._currentContentOffset = _currentContentOffset;
      self._onScrollTriggered = true;
      self._lastScrollDate = Date.now();
      if (tmp3) {
        const result = self._playCustomSlideAnimation(self._activeItem, _getActiveItemResult);
      }
      if (enableMomentum) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._snapNoMomentumTimeout);
        if (self._activeItem !== _getActiveItemResult) {
          self._activeItem = _getActiveItemResult;
        }
        if (tmp2) {
          if (self._canFireBeforeCallback) {
            self._onBeforeSnap(self._getDataIndex(_getActiveItemResult));
          }
          if (_canFireCallback) {
            _canFireCallback = self._canFireCallback;
          }
          if (_canFireCallback) {
            self._onSnap(self._getDataIndex(_getActiveItemResult));
          }
        }
      } else {
        if (tmp5) {
          if (self._canFireBeforeCallback) {
            self._onBeforeSnap(self._getDataIndex(_getActiveItemResult));
          }
          if (_canFireCallback) {
            self._activeItem = _getActiveItemResult;
            if (self._canLockScroll()) {
              self._releaseScroll();
            }
            if (self._canFireCallback) {
              self._onSnap(self._getDataIndex(_getActiveItemResult));
            }
          }
        }
        tmp5 = self._activeItem !== _getActiveItemResult && tmp2;
      }
      if (tmp12) {
        self._repositionScroll(_getActiveItemResult);
      }
      if (tmp14) {
        onScroll(nativeEvent);
      }
    }
  };
  items[41] = {
    key: "_onStartShouldSetResponderCapture",
    value: function _onStartShouldSetResponderCapture(arg0) {
      const self = this;
      const onStartShouldSetResponderCapture = this.props.onStartShouldSetResponderCapture;
      if (onStartShouldSetResponderCapture) {
        const result = onStartShouldSetResponderCapture(arg0);
      }
      return self._getScrollEnabled();
    }
  };
  items[42] = {
    key: "_onTouchStart",
    value: function _onTouchStart() {
      const self = this;
      const onTouchStart = this.props.onTouchStart;
      if (tmp) {
        self.pauseAutoPlay();
      }
      if (onTouchStart) {
        onTouchStart();
      }
    }
  };
  items[43] = {
    key: "_onTouchEnd",
    value: function _onTouchEnd() {
      const self = this;
      const onTouchEnd = this.props.onTouchEnd;
      if (tmp) {
        self.startAutoplay();
      }
      if (onTouchEnd) {
        onTouchEnd();
      }
    }
  };
  items[44] = {
    key: "_onScrollBeginDrag",
    value: function _onScrollBeginDrag(closure_0) {
      const self = this;
      const onScrollBeginDrag = this.props.onScrollBeginDrag;
      if (this._getScrollEnabled()) {
        self._scrollStartOffset = self._getScrollOffset(closure_0);
        self._scrollStartActive = self._getActiveItem(self._scrollStartOffset);
        self._ignoreNextMomentum = false;
        if (onScrollBeginDrag) {
          onScrollBeginDrag(closure_0);
        }
      }
    }
  };
  items[45] = {
    key: "_onScrollEndDrag",
    value: function _onScrollEndDrag(closure_0) {
      const self = this;
      const onScrollEndDrag = this.props.onScrollEndDrag;
      if (tmp) {
        self._onScrollEnd();
      }
      if (onScrollEndDrag) {
        onScrollEndDrag(closure_0);
      }
    }
  };
  items[46] = {
    key: "_onMomentumScrollEnd",
    value: function _onMomentumScrollEnd(closure_0) {
      const self = this;
      const onMomentumScrollEnd = this.props.onMomentumScrollEnd;
      if (tmp) {
        self._onScrollEnd();
      }
      if (onMomentumScrollEnd) {
        onMomentumScrollEnd(closure_0);
      }
    }
  };
  items[47] = {
    key: "_onScrollEnd",
    value: function _onScrollEnd(arg0) {
      let self = this;
      self = this;
      if (this._ignoreNextMomentum) {
        self._ignoreNextMomentum = false;
      } else if (self._currentContentOffset !== self._scrollEndOffset) {
        self._scrollEndOffset = self._currentContentOffset;
        self._scrollEndActive = self._getActiveItem(self._scrollEndOffset);
        if (tmp2) {
          self._snapScroll(self._scrollEndOffset - self._scrollStartOffset);
        }
        if (tmp4) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._enableAutoplayTimeout);
          const _setTimeout = setTimeout;
          self._enableAutoplayTimeout = setTimeout(() => {
            self.startAutoplay();
          }, tmp + 50);
        }
        tmp4 = self._autoplay && !self._autoplaying;
      }
    }
  };
  items[48] = {
    key: "_onTouchRelease",
    value: function _onTouchRelease(arg0) {

    }
  };
  items[49] = {
    key: "_onLayout",
    value: function _onLayout(arg0) {
      const self = this;
      const onLayout = this.props.onLayout;
      if (this._onLayoutInitDone) {
        const result = self._initPositionsAndInterpolators();
        self._snapToItem(self._activeItem, false, false, false, false);
      } else {
        self._onLayoutInitDone = true;
      }
      if (onLayout) {
        onLayout(arg0);
      }
    }
  };
  items[50] = {
    key: "_snapScroll",
    value: function _snapScroll(arg0) {
      const self = this;
      const swipeThreshold = this.props.swipeThreshold;
      if (!this._scrollEndActive) {
        const _scrollEndActive = self._scrollEndActive;
      }
      if (self._scrollStartActive !== self._scrollEndActive) {
        self._snapToItem(self._scrollEndActive);
      } else if (arg0 > 0) {
        if (arg0 > swipeThreshold) {
          self._snapToItem(self._scrollStartActive + 1);
        } else {
          self._snapToItem(self._scrollEndActive);
        }
      } else {
        if (arg0 < 0) {
          if (arg0 < -swipeThreshold) {
            self._snapToItem(self._scrollStartActive - 1);
          }
        }
        self._snapToItem(self._scrollEndActive);
      }
    }
  };
  items[51] = {
    key: "_snapToItem",
    value: function _snapToItem(_scrollEndActive, first, arg2, arg3, arg4) {
      let enableMomentum;
      let onBeforeSnapToItem;
      let onSnapToItem;
      let num = _scrollEndActive;
      let self = this;
      let c0 = _scrollEndActive;
      self = this;
      const tmp = arguments.length > 1 && undefined !== arguments[1];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[1];
      }
      const tmp3 = arguments.length > 2 && undefined !== arguments[2];
      let tmp4 = !tmp3;
      if (tmp3) {
        tmp4 = arguments[2];
      }
      const tmp5 = arguments.length > 3 && undefined !== arguments[3] && arguments[3];
      let closure_2 = tmp5;
      const tmp6 = arguments.length > 4 && undefined !== arguments[4];
      let _canLockScrollResult = !tmp6;
      if (tmp6) {
        _canLockScrollResult = arguments[4];
      }
      ({ enableMomentum, onSnapToItem, onBeforeSnapToItem } = self.props);
      const _getCustomDataLengthResult = self._getCustomDataLength();
      let _getWrappedRefResult = _getCustomDataLengthResult;
      if (_getCustomDataLengthResult) {
        _getWrappedRefResult = self._getWrappedRef();
      }
      if (_getWrappedRefResult) {
        if (num) {
          if (num >= 0) {
            if (tmp10) {
              const diff = _getCustomDataLengthResult - 1;
              c0 = diff;
              num = diff;
            }
            tmp10 = _getCustomDataLengthResult > 0 && num >= _getCustomDataLengthResult;
          }
          if (num !== self._previousActiveItem) {
            self._previousActiveItem = num;
            if (_canLockScrollResult) {
              _canLockScrollResult = self._canLockScroll();
            }
            if (_canLockScrollResult) {
              self._lockScroll();
            }
            if (tmp4) {
              if (onBeforeSnapToItem) {
                self._canFireBeforeCallback = true;
              }
              if (onSnapToItem) {
                self._canFireCallback = true;
              }
            }
          }
          self._itemToSnapTo = num;
          self._scrollOffsetRef = self._positions[num] && self._positions[num].start;
          self._onScrollTriggered = false;
          let _scrollOffsetRef = self._scrollOffsetRef;
          if (!_scrollOffsetRef) {
            _scrollOffsetRef = 0 === self._scrollOffsetRef;
          }
          if (_scrollOffsetRef) {
            self._scrollTo(self._scrollOffsetRef, tmp2);
            self._scrollEndOffset = self._currentContentOffset;
            if (enableMomentum) {
              if (!tmp5) {
                self._ignoreNextMomentum = true;
              }
              if (!tmp14) {
                const _clearTimeout = clearTimeout;
                clearTimeout(self._edgeItemTimeout);
                const _setTimeout = setTimeout;
                self._edgeItemTimeout = setTimeout(() => {
                  let _onScrollTriggered = closure_2;
                  if (!closure_2) {
                    _onScrollTriggered = c0 !== self._activeItem;
                  }
                  if (!_onScrollTriggered) {
                    _onScrollTriggered = self._onScrollTriggered;
                  }
                  if (!_onScrollTriggered) {
                    self._onScroll();
                  }
                }, 250);
              }
              tmp14 = 0 !== num && num !== _getCustomDataLengthResult - 1;
            }
          }
        }
        c0 = 0;
        num = 0;
      }
    }
  };
  items[52] = {
    key: "_onBeforeSnap",
    value: function _onBeforeSnap(self) {
      const onBeforeSnapToItem = this.props.onBeforeSnapToItem;
      if (this._carouselRef) {
        tmp._canFireBeforeCallback = false;
        if (onBeforeSnapToItem) {
          onBeforeSnapToItem(self);
        }
      }
    }
  };
  items[53] = {
    key: "_onSnap",
    value: function _onSnap(self) {
      const onSnapToItem = this.props.onSnapToItem;
      if (this._carouselRef) {
        tmp._canFireCallback = false;
        if (onSnapToItem) {
          onSnapToItem(self);
        }
      }
    }
  };
  items[54] = {
    key: "startAutoplay",
    value: function startAutoplay() {
      let self = this;
      self = this;
      const autoplayInterval = this.props.autoplayInterval;
      this._autoplay = true;
      if (!this._autoplaying) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._autoplayTimeout);
        const _setTimeout = setTimeout;
        self._autoplayTimeout = setTimeout(() => {
          self._autoplaying = true;
          self._autoplayInterval = setInterval(() => {
            if (outer1_0._autoplaying) {
              outer1_0.snapToNext();
            }
          }, autoplayInterval);
        }, tmp);
      }
    }
  };
  items[55] = {
    key: "pauseAutoPlay",
    value: function pauseAutoPlay() {
      this._autoplaying = false;
      clearTimeout(this._autoplayTimeout);
      clearTimeout(this._enableAutoplayTimeout);
      clearInterval(this._autoplayInterval);
    }
  };
  items[56] = {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      this._autoplay = false;
      this.pauseAutoPlay();
    }
  };
  items[57] = {
    key: "snapToItem",
    value: function snapToItem(rounded, arg1) {
      let num = rounded;
      const self = this;
      const tmp = arguments.length > 1 && undefined !== arguments[1];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[1];
      }
      const tmp3 = arguments.length > 2 && undefined !== arguments[2];
      let tmp4 = !tmp3;
      if (tmp3) {
        tmp4 = arguments[2];
      }
      let tmp5 = !num;
      if (!tmp5) {
        tmp5 = num < 0;
      }
      if (tmp5) {
        num = 0;
      }
      const _getPositionIndexResult = self._getPositionIndex(num);
      if (_getPositionIndexResult !== self._activeItem) {
        self._snapToItem(_getPositionIndexResult, tmp2, tmp4);
      }
    }
  };
  items[58] = {
    key: "snapToNext",
    value: function snapToNext() {
      const self = this;
      const tmp = arguments.length > 0 && undefined !== arguments[0];
      let first = !tmp;
      if (tmp) {
        first = arguments[0];
      }
      const tmp3 = arguments.length > 1 && undefined !== arguments[1];
      let tmp4 = !tmp3;
      if (tmp3) {
        tmp4 = arguments[1];
      }
      let num = self._activeItem + 1;
      if (num > self._getCustomDataLength() - 1) {
        num = 0;
      }
      self._snapToItem(num, first, tmp4);
    }
  };
  items[59] = {
    key: "snapToPrev",
    value: function snapToPrev() {
      const self = this;
      const tmp = arguments.length > 0 && undefined !== arguments[0];
      let first = !tmp;
      if (tmp) {
        first = arguments[0];
      }
      const tmp3 = arguments.length > 1 && undefined !== arguments[1];
      let tmp4 = !tmp3;
      if (tmp3) {
        tmp4 = arguments[1];
      }
      let diff = self._activeItem - 1;
      if (diff < 0) {
        if (self._enableLoop()) {
          diff = tmp5 - 1;
        }
      }
      self._snapToItem(diff, first, tmp4);
    }
  };
  items[60] = {
    key: "triggerRenderingHack",
    value: function triggerRenderingHack(arg0) {
      let tmp = arg0;
      const self = this;
      if (Date.now() - this._lastScrollDate >= 500) {
        const _currentContentOffset = self._currentContentOffset;
        if (_currentContentOffset) {
          if (!tmp) {
            let num2 = -1;
            if (0 === _currentContentOffset) {
              num2 = 1;
            }
            tmp = num2;
          }
          self._scrollTo(_currentContentOffset + tmp, false);
        }
      }
    }
  };
  items[61] = {
    key: "_getSlideInterpolatedStyle",
    value: function _getSlideInterpolatedStyle(index, interpolate) {
      let layoutCardOffset;
      let slideInterpolatedStyle;
      const self = this;
      ({ layoutCardOffset, slideInterpolatedStyle } = this.props);
      if (slideInterpolatedStyle) {
        let result = slideInterpolatedStyle(index, interpolate, self.props);
      } else if (self._shouldUseTinderLayout()) {
        const obj3 = Carousel(outer1_2[12]);
        result = obj3.tinderAnimatedStyles(index, interpolate, self.props, layoutCardOffset);
      } else if (self._shouldUseStackLayout()) {
        const obj2 = Carousel(outer1_2[12]);
        result = obj2.stackAnimatedStyles(index, interpolate, self.props, layoutCardOffset);
      } else {
        const result1 = self._shouldUseShiftLayout();
        const obj = Carousel(outer1_2[12]);
        if (result1) {
          result = obj.shiftAnimatedStyles(index, interpolate, self.props);
        } else {
          result = obj.defaultAnimatedStyles(index, interpolate, self.props);
        }
      }
      return result;
    }
  };
  items[62] = {
    key: "_renderItem",
    value: function _renderItem(arg0) {
      let hasParallaxImages;
      let index;
      let item;
      let itemHeight;
      let itemWidth;
      let keyExtractor;
      let renderItem;
      let slideStyle;
      let sliderHeight;
      let sliderWidth;
      let vertical;
      const self = this;
      ({ item, index } = arg0);
      const interpolators = this.state.interpolators;
      const props = this.props;
      ({ itemWidth, itemHeight, keyExtractor, vertical } = props);
      let tmp = interpolators;
      ({ hasParallaxImages, renderItem, sliderHeight, sliderWidth, slideStyle } = props);
      if (interpolators) {
        tmp = interpolators[index];
      }
      if (!tmp) {
        if (0 !== tmp) {
          return null;
        }
      }
      const _shouldAnimateSlidesResult = self._shouldAnimateSlides();
      if (_shouldAnimateSlidesResult) {
        let View = outer1_10.View;
      } else {
        View = outer1_12;
      }
      if (_shouldAnimateSlidesResult) {
        let result = self._getSlideInterpolatedStyle(index, tmp);
      } else {
        result = {};
      }
      if (hasParallaxImages) {
        let obj = {};
        ({ _scrollPos: obj2.scrollPosition, _carouselRef: obj2.carouselRef } = self);
        obj.vertical = vertical;
        obj.sliderWidth = sliderWidth;
        obj.sliderHeight = sliderHeight;
        obj.itemWidth = itemWidth;
        obj.itemHeight = itemHeight;
        const tmp5 = obj;
      }
      obj = {};
      if (vertical) {
        obj.height = itemHeight;
        let tmp6 = obj;
      } else {
        obj.width = itemWidth;
        tmp6 = obj;
      }
      if (self._needsScrollView()) {
        const obj1 = {};
        if (keyExtractor) {
          let keyExtractorResult = keyExtractor(item, index);
        } else {
          keyExtractorResult = self._getKeyExtractor(item, index);
        }
        obj1.key = keyExtractorResult;
      } else {
        const _Object = Object;
        const obj2 = {};
        const items = [tmp6, slideStyle, result];
        obj2.style = items;
        obj2.pointerEvents = "box-none";
        const obj3 = {};
        const obj4 = { item, index };
        obj3.children = renderItem(obj4, tmp5);
        return outer1_13(View, Object.assign(obj2, {}, obj3));
      }
    }
  };
  items[63] = {
    key: "_getComponentOverridableProps",
    value: function _getComponentOverridableProps() {
      let enableMomentum;
      let loopClonesPerSide;
      const self = this;
      const props = this.props;
      ({ enableMomentum, loopClonesPerSide } = props);
      const sum = Math.ceil(props.vertical ? props.sliderHeight / props.itemHeight : props.sliderWidth / props.itemWidth) + 1;
      let num = 2;
      if (self._enableLoop()) {
        num = loopClonesPerSide;
      }
      const sum1 = sum + 2 * num;
      const sum2 = 1 + 2 * sum1;
      if (self._needsScrollView()) {
        let obj = {};
      } else {
        obj = { initialNumToRender: sum1, maxToRenderPerBatch: sum2, windowSize: sum2 };
      }
      obj = { decelerationRate: null, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, overScrollMode: "never", automaticallyAdjustContentInsets: false, directionalLockEnabled: true, pinchGestureEnabled: false, scrollsToTop: false };
      let num2 = "fast";
      if (enableMomentum) {
        num2 = 0.9;
      }
      obj.decelerationRate = num2;
      obj.removeClippedSubviews = !self._needsScrollView();
      obj.inverted = self._needsRTLAdaptations();
      return Object.assign(obj, obj);
    }
  };
  items[64] = {
    key: "_getComponentStaticProps",
    value: function _getComponentStaticProps() {
      let containerCustomStyle;
      let contentContainerCustomStyle;
      let keyExtractor;
      let sliderHeight;
      let sliderWidth;
      let vertical;
      let self = this;
      self = this;
      const props = this.props;
      ({ containerCustomStyle, contentContainerCustomStyle, keyExtractor, vertical } = props);
      ({ sliderWidth, sliderHeight } = props);
      if (!containerCustomStyle) {
        containerCustomStyle = props.style;
      }
      if (!containerCustomStyle) {
        containerCustomStyle = {};
      }
      const items = [containerCustomStyle, , ];
      if (this.state.hideCarousel) {
        let obj = { opacity: 0 };
      } else {
        obj = {};
      }
      items[1] = obj;
      obj = {};
      if (vertical) {
        obj.height = sliderHeight;
        obj.flexDirection = "column";
        let tmp = obj;
      } else {
        obj.width = sliderWidth;
        let str = "row";
        if (self._needsRTLAdaptations()) {
          str = "row-reverse";
        }
        obj.flexDirection = str;
        tmp = obj;
      }
      items[2] = tmp;
      const obj1 = {};
      const result = self._getContainerInnerMargin();
      if (vertical) {
        obj1.paddingTop = result;
        obj1.paddingBottom = self._getContainerInnerMargin(true);
        let tmp3 = obj1;
      } else {
        obj1.paddingLeft = result;
        obj1.paddingRight = self._getContainerInnerMargin(true);
        tmp3 = obj1;
      }
      const items1 = [tmp3, ];
      if (!contentContainerCustomStyle) {
        contentContainerCustomStyle = {};
      }
      items1[1] = contentContainerCustomStyle;
      if (self._needsScrollView()) {
        let obj2 = {};
      } else {
        obj2 = { renderItem: self._renderItem, numColumns: 1 };
        if (!keyExtractor) {
          keyExtractor = self._getKeyExtractor;
        }
        obj2.keyExtractor = keyExtractor;
      }
      return Object.assign({
        ref(_carouselRef) {
          self._carouselRef = _carouselRef;
          return _carouselRef;
        },
        data: self._getCustomData(),
        style: items,
        contentContainerStyle: items1,
        horizontal: !vertical,
        scrollEventThrottle: 1,
        onScroll: self._onScrollHandler,
        onScrollBeginDrag: self._onScrollBeginDrag,
        onScrollEndDrag: self._onScrollEndDrag,
        onMomentumScrollEnd: self._onMomentumScrollEnd,
        onResponderRelease: self._onTouchRelease,
        onStartShouldSetResponderCapture: self._onStartShouldSetResponderCapture,
        onTouchStart: self._onTouchStart,
        onTouchEnd: self._onScrollEnd,
        onLayout: self._onLayout
      }, obj2);
    }
  };
  items[65] = {
    key: "render",
    value: function render() {
      let self = this;
      self = this;
      const props = this.props;
      let useScrollView = props.useScrollView;
      if (props.data) {
        if (props.renderItem) {
          const _Object = Object;
          const result = self._getComponentOverridableProps();
          const _Object2 = Object;
          const merged = Object.assign({}, result, self.props, self._getComponentStaticProps());
          if ("function" !== typeof useScrollView) {
            useScrollView = outer1_15;
          }
          if (self._needsScrollView()) {
            const _Object4 = Object;
            const obj = { children: self._getCustomData().map((item, index) => self._renderItem({ item, index })) };
            let tmp4Result = tmp4(useScrollView, Object.assign({}, merged, obj));
            const _getCustomDataResult = self._getCustomData();
          } else {
            const _Object3 = Object;
            tmp4Result = tmp4(outer1_14, Object.assign({}, merged));
          }
          return tmp4Result;
        }
      }
      return null;
    }
  };
  return callback(Carousel, items);
})(require("result").Component);
let obj = { data: require("emptyFunction").array.isRequired, renderItem: require("emptyFunction").func.isRequired, itemWidth: require("emptyFunction").number, itemHeight: require("emptyFunction").number, sliderWidth: require("emptyFunction").number, sliderHeight: require("emptyFunction").number, activeAnimationType: require("emptyFunction").string, activeAnimationOptions: require("emptyFunction").object, activeSlideAlignment: require("emptyFunction").oneOf(["center", "end", "start"]), activeSlideOffset: require("emptyFunction").number, apparitionDelay: require("emptyFunction").number, autoplay: require("emptyFunction").bool, autoplayDelay: require("emptyFunction").number, autoplayInterval: require("emptyFunction").number, callbackOffsetMargin: require("emptyFunction").number, containerCustomStyle: require("get ColorPropType").ViewPropTypes.style, contentContainerCustomStyle: require("get ColorPropType").ViewPropTypes.style, enableMomentum: require("emptyFunction").bool, enableSnap: require("emptyFunction").bool, firstItem: require("emptyFunction").number, hasParallaxImages: require("emptyFunction").bool, inactiveSlideOpacity: require("emptyFunction").number, inactiveSlideScale: require("emptyFunction").number, inactiveSlideShift: require("emptyFunction").number };
obj.layout = require("emptyFunction").oneOf(["default", "stack", "tinder"]);
obj.layoutCardOffset = require("emptyFunction").number;
obj.lockScrollTimeoutDuration = require("emptyFunction").number;
obj.lockScrollWhileSnapping = require("emptyFunction").bool;
obj.loop = require("emptyFunction").bool;
obj.loopClonesPerSide = require("emptyFunction").number;
obj.scrollEnabled = require("emptyFunction").bool;
obj.scrollInterpolator = require("emptyFunction").func;
obj.slideInterpolatedStyle = require("emptyFunction").func;
obj.slideStyle = require("get ColorPropType").ViewPropTypes.style;
obj.shouldOptimizeUpdates = require("emptyFunction").bool;
obj.swipeThreshold = require("emptyFunction").number;
let items = [require("emptyFunction").bool, require("emptyFunction").func];
obj.useScrollView = require("emptyFunction").oneOfType(items);
obj.vertical = require("emptyFunction").bool;
obj.onBeforeSnapToItem = require("emptyFunction").func;
obj.onSnapToItem = require("emptyFunction").func;
tmp5.propTypes = obj;
obj = { activeAnimationType: "timing", activeAnimationOptions: null, activeSlideAlignment: "center", activeSlideOffset: 20, apparitionDelay: 0, autoplay: false, autoplayDelay: 1000, autoplayInterval: 3000, callbackOffsetMargin: 5, containerCustomStyle: {}, contentContainerCustomStyle: {}, enableMomentum: false, enableSnap: true, firstItem: 0, hasParallaxImages: false, inactiveSlideOpacity: 0.7, inactiveSlideScale: 0.9, inactiveSlideShift: 0, layout: "default", lockScrollTimeoutDuration: 1000, lockScrollWhileSnapping: false, loop: false, loopClonesPerSide: 3, scrollEnabled: true, slideStyle: {}, shouldOptimizeUpdates: true, swipeThreshold: 20, useScrollView: !animatedComponent, vertical: false };
tmp5.defaultProps = obj;

export default tmp5;
