// Module ID: 12977
// Function ID: 98776
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12977 (_isNativeReflectConstruct)
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
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[7]);
({ Platform, View: closure_9 } = tmp2);
const jsx = arg1(dependencyMap[8]).jsx;
const isRTL = tmp2.I18nManager.isRTL;
const tmp3 = (PureComponent) => {
  class Pagination {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, Pagination);
      items = [];
      items[0] = PureComponent;
      obj = closure_6(Pagination);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      dotColor = PureComponent.dotColor;
      tmp2Result = tmp2(self, constructResult);
      if (dotColor) {
        dotColor = !PureComponent.inactiveDotColor;
      }
      if (!dotColor) {
        tmp7 = !PureComponent.dotColor && PureComponent.inactiveDotColor;
        dotColor = tmp7;
      }
      if (dotColor) {
        tmp8 = globalThis;
        _console = console;
        str = "react-native-snap-carousel | Pagination: You need to specify both `dotColor` and `inactiveDotColor`";
        warnResult = console.warn("react-native-snap-carousel | Pagination: You need to specify both `dotColor` and `inactiveDotColor`");
      }
      tmp10 = PureComponent.dotElement && !PureComponent.inactiveDotElement;
      if (!tmp10) {
        tmp11 = !PureComponent.dotElement && PureComponent.inactiveDotElement;
        tmp10 = tmp11;
      }
      if (tmp10) {
        tmp12 = globalThis;
        _console2 = console;
        str2 = "react-native-snap-carousel | Pagination: You need to specify both `dotElement` and `inactiveDotElement`";
        warnResult1 = console.warn("react-native-snap-carousel | Pagination: You need to specify both `dotElement` and `inactiveDotElement`");
      }
      tmp14 = PureComponent.tappableDots && undefined === PureComponent.carouselRef;
      if (tmp14) {
        tmp15 = globalThis;
        _console3 = console;
        str3 = "react-native-snap-carousel | Pagination: You must specify prop `carouselRef` when setting `tappableDots` to `true`";
        warnResult2 = console.warn("react-native-snap-carousel | Pagination: You must specify prop `carouselRef` when setting `tappableDots` to `true`");
      }
      return tmp2Result;
    }
  }
  const importDefault = Pagination;
  callback2(Pagination, PureComponent);
  let obj = {
    key: "_needsRTLAdaptations",
    value: function _needsRTLAdaptations() {
      let tmp = closure_11;
      if (closure_11) {
        tmp = !this.props.vertical;
      }
      return tmp;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "_activeDotIndex",
    get() {
      let activeDotIndex;
      let dotsLength;
      ({ activeDotIndex, dotsLength } = this.props);
      let diff = activeDotIndex;
      if (this._needsRTLAdaptations()) {
        diff = dotsLength - activeDotIndex - 1;
      }
      return diff;
    }
  };
  items[1] = obj;
  obj = {
    key: "dots",
    get() {
      let carouselRef;
      let dotsLength;
      let renderDots;
      let tappableDots;
      const self = this;
      const Pagination = this;
      ({ carouselRef, dotsLength, dotElement: closure_1, inactiveDotElement: closure_2, renderDots, tappableDots } = this.props);
      if (renderDots) {
        return renderDots(self._activeDotIndex, dotsLength, self);
      } else {
        const obj = { carouselRef };
        if (tappableDots) {
          tappableDots = undefined !== carouselRef;
        }
        obj.tappable = tappableDots;
        obj.activeOpacity = tmp;
        obj.color = tmp2;
        obj.containerStyle = tmp3;
        obj.style = tmp4;
        obj.inactiveColor = tmp5;
        obj.inactiveOpacity = tmp6;
        obj.inactiveScale = tmp7;
        obj.inactiveStyle = tmp8;
        obj.animatedDuration = tmp9;
        obj.animatedFriction = tmp10;
        obj.animatedTension = tmp11;
        obj.delayPressInDot = tmp12;
        let closure_3 = closure_10(Pagination(closure_1[9]), obj);
        const _Array = Array;
        const tmp13 = closure_10;
        const tmp16 = Pagination(closure_1[9]);
        const ArrayResult = Array(dotsLength);
        return callback(Array(dotsLength).keys()).map((index) => {
          let tmp3 = tmp ? closure_1 : closure_2;
          if (!tmp3) {
            tmp3 = closure_3;
          }
          return closure_8.cloneElement(tmp3, { key: "pagination-dot-" + index, active: index === self._activeDotIndex, index });
        });
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      let accessibilityLabel;
      let containerStyle;
      let dotsLength;
      const self = this;
      ({ dotsLength, containerStyle, accessibilityLabel } = this.props);
      if (dotsLength) {
        if (dotsLength >= 2) {
          const items = [Pagination(closure_1[10]).sliderPagination, , ];
          let obj = {};
          let str2 = "column";
          if (!tmp) {
            let str = "row";
            if (self._needsRTLAdaptations()) {
              str = "row-reverse";
            }
            str2 = str;
          }
          obj.flexDirection = str2;
          items[1] = obj;
          if (!containerStyle) {
            containerStyle = {};
          }
          items[2] = containerStyle;
          obj = { pointerEvents: "box-none", style: items, accessible: accessibilityLabel, accessibilityLabel, children: self.dots };
          return callback4(closure_9, obj);
        }
      }
      return false;
    }
  };
  return callback(Pagination, items);
}(arg1(dependencyMap[6]).PureComponent);
tmp3.propTypes = { activeDotIndex: importDefault(dependencyMap[11]).number.isRequired, dotsLength: importDefault(dependencyMap[11]).number.isRequired, activeOpacity: importDefault(dependencyMap[11]).number, carouselRef: importDefault(dependencyMap[11]).object, containerStyle: arg1(dependencyMap[12]).ViewPropTypes.style, dotColor: importDefault(dependencyMap[11]).string, dotContainerStyle: arg1(dependencyMap[12]).ViewPropTypes.style, dotElement: importDefault(dependencyMap[11]).element, dotStyle: arg1(dependencyMap[12]).ViewPropTypes.style, inactiveDotColor: importDefault(dependencyMap[11]).string, inactiveDotElement: importDefault(dependencyMap[11]).element, inactiveDotOpacity: importDefault(dependencyMap[11]).number, inactiveDotScale: importDefault(dependencyMap[11]).number, inactiveDotStyle: arg1(dependencyMap[12]).ViewPropTypes.style, renderDots: importDefault(dependencyMap[11]).func, tappableDots: importDefault(dependencyMap[11]).bool, vertical: importDefault(dependencyMap[11]).bool, accessibilityLabel: importDefault(dependencyMap[11]).string, animatedDuration: importDefault(dependencyMap[11]).number, animatedFriction: importDefault(dependencyMap[11]).number, animatedTension: importDefault(dependencyMap[11]).number, delayPressInDot: importDefault(dependencyMap[11]).number };
tmp3.defaultProps = { 0: true, -9223372036854775808: true, 9223372036854775807: true, 0: true, 0: true, 0: true, 0: true, 9223372036854775807: true };

export default tmp3;
