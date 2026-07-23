// Module ID: 13098
// Function ID: 100965
// Name: _isNativeReflectConstruct
// Dependencies: [65, 6, 7, 15, 17, 18, 31, 27, 33, 13099, 13100, 3955, 8153]

// Module 13098 (_isNativeReflectConstruct)
import _toConsumableArray from "_toConsumableArray";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let closure_9;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Platform, View: closure_9 } = get_ActivityIndicator);
const isRTL = get_ActivityIndicator.I18nManager.isRTL;
let tmp3 = ((PureComponent) => {
  class Pagination {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, Pagination);
      items = [];
      items[0] = PureComponent;
      obj = outer1_6(Pagination);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
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
  callback2(Pagination, PureComponent);
  let obj = {
    key: "_needsRTLAdaptations",
    value: function _needsRTLAdaptations() {
      let tmp = outer1_11;
      if (outer1_11) {
        tmp = !this.props.vertical;
      }
      return tmp;
    }
  };
  let items = [obj, , , ];
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
      let closure_1;
      let _toConsumableArray;
      let dotsLength;
      let renderDots;
      let tappableDots;
      let self = this;
      self = this;
      ({ carouselRef, dotsLength, dotElement: closure_1, inactiveDotElement: _toConsumableArray, renderDots, tappableDots } = this.props);
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
        let result = outer1_10(Pagination(outer1_1[9]), obj);
        const _Array = Array;
        const tmp13 = outer1_10;
        const tmp16 = Pagination(outer1_1[9]);
        const ArrayResult = Array(dotsLength);
        return outer1_2(Array(dotsLength).keys()).map((index) => {
          let tmp3 = tmp ? closure_1 : _toConsumableArray;
          if (!tmp3) {
            tmp3 = result;
          }
          return outer2_8.cloneElement(tmp3, { key: "pagination-dot-" + index, active: index === self._activeDotIndex, index });
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
          const items = [Pagination(outer1_1[10]).sliderPagination, , ];
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
          return outer1_10(outer1_9, obj);
        }
      }
      return false;
    }
  };
  return callback(Pagination, items);
})(require("result").PureComponent);
tmp3.propTypes = { activeDotIndex: require("emptyFunction").number.isRequired, dotsLength: require("emptyFunction").number.isRequired, activeOpacity: require("emptyFunction").number, carouselRef: require("emptyFunction").object, containerStyle: require("get ColorPropType").ViewPropTypes.style, dotColor: require("emptyFunction").string, dotContainerStyle: require("get ColorPropType").ViewPropTypes.style, dotElement: require("emptyFunction").element, dotStyle: require("get ColorPropType").ViewPropTypes.style, inactiveDotColor: require("emptyFunction").string, inactiveDotElement: require("emptyFunction").element, inactiveDotOpacity: require("emptyFunction").number, inactiveDotScale: require("emptyFunction").number, inactiveDotStyle: require("get ColorPropType").ViewPropTypes.style, renderDots: require("emptyFunction").func, tappableDots: require("emptyFunction").bool, vertical: require("emptyFunction").bool, accessibilityLabel: require("emptyFunction").string, animatedDuration: require("emptyFunction").number, animatedFriction: require("emptyFunction").number, animatedTension: require("emptyFunction").number, delayPressInDot: require("emptyFunction").number };
tmp3.defaultProps = { inactiveDotOpacity: 0.5, inactiveDotScale: 0.5, tappableDots: false, vertical: false, animatedDuration: 250, animatedFriction: 4, animatedTension: 50, delayPressInDot: 0 };

export default tmp3;
