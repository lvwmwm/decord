// Module ID: 13101
// Function ID: 100989
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 13102, 8153, 3955]

// Module 13101 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult1 from "emptyFunction";

let Animated;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["scrollPosition", "dimensions", "vertical", "sliderWidth", "sliderHeight", "parallaxFactor", "style", "AnimatedImageComponent"];
({ View: closure_9, Animated } = get_ActivityIndicator);
({ Easing: closure_11, ActivityIndicator: closure_12, findNodeHandle: closure_13 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const tmp5 = ((Component) => {
  class ParallaxImage {
    constructor(arg0) {
      self = this;
      tmp = outer1_4(this, ParallaxImage);
      items = [];
      items[0] = Component;
      obj = outer1_7(ParallaxImage);
      tmp2 = outer1_6;
      if (outer1_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { offset: 0, width: 0, height: 0, status: 1 };
      value = new outer1_10.Value(0);
      obj.animOpacity = value;
      tmp2Result.state = obj;
      _onLoad = tmp2Result._onLoad;
      tmp2Result._onLoad = _onLoad.bind(tmp2Result);
      _onError = tmp2Result._onError;
      tmp2Result._onError = _onError.bind(tmp2Result);
      _measureLayout = tmp2Result._measureLayout;
      tmp2Result._measureLayout = _measureLayout.bind(tmp2Result);
      return tmp2Result;
    }
  }
  callback2(ParallaxImage, Component);
  let obj = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const _container = this._container;
      _container.setNativeProps(arg0);
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      this._mounted = true;
      const timerId = setTimeout(() => {
        self._measureLayout();
      }, 0);
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_measureLayout",
    value: function _measureLayout() {
      let carouselRef;
      let closure_1;
      let closure_2;
      let _objectWithoutProperties;
      let result;
      let getActivityIndicator;
      let _possibleConstructorReturn;
      let self = this;
      self = this;
      if (this._container) {
        ({ dimensions: closure_1, vertical: closure_2, carouselRef, sliderWidth: _objectWithoutProperties, sliderHeight: result, itemWidth: getActivityIndicator, itemHeight: _possibleConstructorReturn } = self.props);
        if (carouselRef) {
          const _container = self._container;
          _container.measureLayout(outer1_13(carouselRef), (arg0, arg1, endImportTime, endImportTime) => {
            if (closure_2) {
              let diff = arg1 - (result - _possibleConstructorReturn) / 2;
            } else {
              diff = arg0 - (_objectWithoutProperties - getActivityIndicator) / 2;
            }
            const obj = { offset: diff };
            if (styles) {
              if (styles.width) {
                let width = styles.width;
              }
              obj.width = width;
              if (styles) {
                if (styles.height) {
                  let height = styles.height;
                }
                obj.height = height;
                tmp9(obj);
              }
              const _Math = Math;
              height = Math.ceil(endImportTime);
            }
            width = Math.ceil(endImportTime);
          });
        }
      }
    }
  };
  items[4] = {
    key: "_onLoad",
    value: function _onLoad(arg0) {
      let self = this;
      self = this;
      const onLoad = this.props.onLoad;
      if (this._mounted) {
        let obj = { status: 2 };
        self.setState(obj);
        if (onLoad) {
          onLoad(arg0);
        }
        obj = { toValue: 1, duration: tmp2, easing: outer1_11.out(outer1_11.quad), isInteraction: false, useNativeDriver: true };
        outer1_10.timing(tmp, obj).start(() => {
          self.setState({ status: 3 });
        });
        const timingResult = outer1_10.timing(tmp, obj);
      }
    }
  };
  items[5] = {
    key: "_onError",
    value: function _onError(arg0) {
      const onError = this.props.onError;
      this.setState({ status: 4 });
      if (onError) {
        onError(arg0);
      }
    }
  };
  items[6] = {
    key: "image",
    get() {
      let AnimatedImageComponent;
      let animOpacity;
      let dimensions;
      let height;
      let offset;
      let parallaxFactor;
      let scrollPosition;
      let sliderHeight;
      let sliderWidth;
      let status;
      let style;
      let vertical;
      let width;
      const self = this;
      const state = this.state;
      ({ offset, width, height } = state);
      const props = this.props;
      ({ scrollPosition, dimensions, vertical, sliderWidth, sliderHeight } = props);
      ({ status, animOpacity } = state);
      ({ parallaxFactor, style, AnimatedImageComponent } = props);
      let tmp2 = width;
      if (vertical) {
        tmp2 = height;
      }
      const result = tmp2 * parallaxFactor;
      let obj = {};
      let sum = width;
      if (!vertical) {
        sum = width + 2 * result;
      }
      obj.width = sum;
      let sum1 = height;
      if (vertical) {
        sum1 = height + 2 * result;
      }
      obj.height = sum1;
      obj.opacity = animOpacity;
      if (scrollPosition) {
        obj = {};
        let num3 = 0;
        if (!vertical) {
          obj = {};
          const items = [offset - sliderWidth, offset + sliderWidth];
          obj.inputRange = items;
          const items1 = [-result, result];
          obj.outputRange = items1;
          obj.extrapolate = "clamp";
          num3 = scrollPosition.interpolate(obj);
        }
        obj.translateX = num3;
        const items2 = [obj, ];
        const obj1 = {};
        let num4 = 0;
        if (vertical) {
          const obj2 = {};
          const items3 = [offset - sliderHeight, offset + sliderHeight];
          obj2.inputRange = items3;
          const items4 = [-result, result];
          obj2.outputRange = items4;
          obj2.extrapolate = "clamp";
          num4 = scrollPosition.interpolate(obj2);
        }
        obj1.translateY = num4;
        items2[1] = obj1;
        let items5 = items2;
      } else {
        items5 = [];
      }
      obj.transform = items5;
      const obj3 = {};
      const items6 = [ParallaxImage(outer1_1[9]).image, style, { position: "relative" }, obj];
      obj3.style = items6;
      obj3.onLoad = self._onLoad;
      let _onError;
      if (3 !== status) {
        _onError = self._onError;
      }
      obj3.onError = _onError;
      return outer1_14(AnimatedImageComponent, Object.assign({}, outer1_3(props, outer1_2), obj3));
    }
  };
  items[7] = {
    key: "spinner",
    get() {
      const props = this.props;
      let tmp = 1 !== this.state.status;
      if (!tmp) {
        tmp = !props.showSpinner;
      }
      let tmp2 = !tmp;
      if (!tmp) {
        let obj = { style: ParallaxImage(outer1_1[9]).loaderContainer };
        obj = { size: "small", color: props.spinnerColor, animating: true };
        obj.children = outer1_14(outer1_12, obj);
        tmp2 = outer1_14(outer1_9, obj);
      }
      return tmp2;
    }
  };
  items[8] = {
    key: "render",
    value: function render() {
      const self = this;
      const obj = {
        ref(_container) {
          self._container = _container;
        },
        pointerEvents: "none"
      };
      const items = [this.props.containerStyle, ParallaxImage(outer1_1[9]).container];
      obj.style = items;
      obj.onLayout = this._measureLayout;
      const items1 = [, ];
      ({ image: arr2[0], spinner: arr2[1] } = this);
      obj.children = items1;
      return outer1_15(outer1_9, obj);
    }
  };
  return callback(ParallaxImage, items);
})(require("result").Component);
let obj = { carouselRef: require("emptyFunction").object, itemHeight: require("emptyFunction").number, itemWidth: require("emptyFunction").number, scrollPosition: require("emptyFunction").object, sliderHeight: require("emptyFunction").number, sliderWidth: require("emptyFunction").number, vertical: require("emptyFunction").bool, containerStyle: require("get ColorPropType").ViewPropTypes.style };
obj = { width: require("emptyFunction").number, height: require("emptyFunction").number };
obj.dimensions = require("emptyFunction").shape(obj);
obj.fadeDuration = require("emptyFunction").number;
obj.parallaxFactor = require("emptyFunction").number;
obj.showSpinner = require("emptyFunction").bool;
obj.spinnerColor = require("emptyFunction").string;
let items = [require("emptyFunction").func, require("emptyFunction").object];
obj.AnimatedImageComponent = require("emptyFunction").oneOfType(items);
tmp5.propTypes = Object.assign({}, require("get ColorPropType").ImagePropTypes, obj);
obj = { containerStyle: {}, fadeDuration: 500, parallaxFactor: 0.3, showSpinner: true, spinnerColor: "rgba(0, 0, 0, 0.4)", AnimatedImageComponent: Animated.Image };
tmp5.defaultProps = obj;

export default tmp5;
