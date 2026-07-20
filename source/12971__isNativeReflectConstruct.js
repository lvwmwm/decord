// Module ID: 12971
// Function ID: 98755
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12971 (_isNativeReflectConstruct)
let Animated;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["<string:3664904194>", "<string:222494721>", "<string:306249730>", "<string:464125954>", "<string:2052718594>", "<string:2052653057>", "<string:631701505>", "<string:2971402242>"];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
importDefault(dependencyMap[6]);
const tmp3 = arg1(dependencyMap[7]);
({ View: closure_9, Animated } = tmp3);
({ Easing: closure_11, ActivityIndicator: closure_12, findNodeHandle: closure_13 } = tmp3);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[8]));
const tmp5 = (Component) => {
  class ParallaxImage {
    constructor(arg0) {
      self = this;
      tmp = closure_4(this, ParallaxImage);
      items = [];
      items[0] = Component;
      obj = closure_7(ParallaxImage);
      tmp2 = closure_6;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { "Null": 167119349, "Null": 167119350, "Null": 167119350, "Null": -13959178 };
      value = new closure_10.Value(0);
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
  const importDefault = ParallaxImage;
  callback2(ParallaxImage, Component);
  let obj = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const _container = this._container;
      _container.setNativeProps(arg0);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const ParallaxImage = this;
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
      const self = this;
      const ParallaxImage = this;
      if (this._container) {
        ({ dimensions: closure_1, vertical: closure_2, carouselRef, sliderWidth: closure_3, sliderHeight: closure_4, itemWidth: closure_5, itemHeight: closure_6 } = self.props);
        if (carouselRef) {
          const _container = self._container;
          _container.measureLayout(callback4(carouselRef), (arg0, arg1, endImportTime, endImportTime) => {
            if (closure_2) {
              let diff = arg1 - (closure_4 - closure_6) / 2;
            } else {
              diff = arg0 - (closure_3 - closure_5) / 2;
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
      const self = this;
      const ParallaxImage = this;
      const onLoad = this.props.onLoad;
      if (this._mounted) {
        let obj = { status: 2 };
        self.setState(obj);
        if (onLoad) {
          onLoad(arg0);
        }
        obj = { 875888644: "100%", 1583218692: "hidden", 1511522308: "flex-end", -1836384252: "row", 1576796164: "center", duration: tmp2, easing: closure_11.out(closure_11.quad) };
        closure_10.timing(tmp, obj).start(() => {
          self.setState({ status: 3 });
        });
        const timingResult = closure_10.timing(tmp, obj);
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
      const items6 = [ParallaxImage(closure_1[9]).image, style, { position: "relative" }, obj];
      obj3.style = items6;
      obj3.onLoad = self._onLoad;
      let _onError;
      if (3 !== status) {
        _onError = self._onError;
      }
      obj3.onError = _onError;
      return closure_14(AnimatedImageComponent, Object.assign({}, callback(props, closure_2), obj3));
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
        let obj = { style: ParallaxImage(closure_1[9]).loaderContainer };
        obj = { "Bool(true)": 9090, "Bool(true)": "reactotron-core-client", "Bool(true)": false, color: props.spinnerColor };
        obj.children = callback5(closure_12, obj);
        tmp2 = callback5(closure_9, obj);
      }
      return tmp2;
    }
  };
  items[8] = {
    key: "render",
    value: function render() {
      const ParallaxImage = this;
      const obj = {
        ref(_container) {
          self._container = _container;
        },
        pointerEvents: "none"
      };
      const items = [this.props.containerStyle, ParallaxImage(closure_1[9]).container];
      obj.style = items;
      obj.onLayout = this._measureLayout;
      const items1 = [, ];
      ({ image: arr2[0], spinner: arr2[1] } = this);
      obj.children = items1;
      return callback6(closure_9, obj);
    }
  };
  return callback(ParallaxImage, items);
}(arg1(dependencyMap[6]).Component);
let obj = { carouselRef: importDefault(dependencyMap[11]).object, itemHeight: importDefault(dependencyMap[11]).number, itemWidth: importDefault(dependencyMap[11]).number, scrollPosition: importDefault(dependencyMap[11]).object, sliderHeight: importDefault(dependencyMap[11]).number, sliderWidth: importDefault(dependencyMap[11]).number, vertical: importDefault(dependencyMap[11]).bool, containerStyle: arg1(dependencyMap[10]).ViewPropTypes.style };
const tmp4 = arg1(dependencyMap[8]);
obj = { width: importDefault(dependencyMap[11]).number, height: importDefault(dependencyMap[11]).number };
obj.dimensions = importDefault(dependencyMap[11]).shape(obj);
obj.fadeDuration = importDefault(dependencyMap[11]).number;
obj.parallaxFactor = importDefault(dependencyMap[11]).number;
obj.showSpinner = importDefault(dependencyMap[11]).bool;
obj.spinnerColor = importDefault(dependencyMap[11]).string;
const importDefaultResult1 = importDefault(dependencyMap[11]);
const items = [importDefault(dependencyMap[11]).func, importDefault(dependencyMap[11]).object];
obj.AnimatedImageComponent = importDefault(dependencyMap[11]).oneOfType(items);
tmp5.propTypes = Object.assign({}, arg1(dependencyMap[10]).ImagePropTypes, obj);
tmp5.defaultProps = { containerStyle: {}, AnimatedImageComponent: Animated.Image };

export default tmp5;
