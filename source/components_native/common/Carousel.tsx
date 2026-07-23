// Module ID: 7998
// Function ID: 63568
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 4130, 689, 1273, 3842, 2]

// Module 7998 (_callSuper)
import getActivityIndicator from "get ActivityIndicator";
import closure_3 from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignItems: "center" }, carouselContentWrapper: { flexDirection: "row" }, pageIndicator: { flexDirection: "row", justifyContent: "space-around", alignItems: "center" } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
_createForOfIteratorHelperLoose.activeIndicator = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.inactiveIndicator = { color: require("_createForOfIteratorHelperLoose").colors.ICON_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let tmp5 = ((Component) => {
  class PageIndicator {
    constructor() {
      tmp = outer1_2(this, PageIndicator);
      return outer1_13(this, PageIndicator, arguments);
    }
  }
  callback3(PageIndicator, Component);
  const items = [
    {
      key: "render",
      value() {
        let indicatorSpace;
        let pageIndicatorStyle;
        const tmp = outer1_11(this.context);
        const props = this.props;
        const count = props.count;
        const children = [];
        let num = 0;
        ({ indicatorSpace, pageIndicatorStyle } = props);
        if (0 < count) {
          do {
            let tmp5 = PageIndicator;
            let tmp6 = outer1_1;
            let tmp4 = outer1_9;
            let obj = {};
            obj = { fontSize: tmp3 };
            let items1 = [obj, num === tmp2 ? tmp.activeIndicator : tmp.inactiveIndicator];
            obj.style = items1;
            obj.children = "\u2022";
            let arr = children.push(tmp4(PageIndicator(outer1_1[10]).LegacyText, obj, num));
            num = num + 1;
          } while (num < count);
        }
        const style = [tmp.pageIndicator, { width: count * indicatorSpace }, pageIndicatorStyle];
        return outer1_9(outer1_7, { style, children });
      }
    }
  ];
  return callback(PageIndicator, items);
})(importAllResult.Component);
let closure_12 = tmp5;
tmp5.contextType = require("ManaContext").ThemeContext;
tmp5.defaultProps = { indicatorSpace: 10, indicatorSize: 20 };
let tmp6 = ((Component) => {
  class Carousel {
    constructor(arg0) {
      items = [...arguments];
      tmp = outer1_2(this, Carousel);
      items1 = [...items];
      tmp2 = outer1_13(this, Carousel, items1);
      Carousel = tmp2;
      tmp2.state = { activeIndex: 0 };
      tmp2.onAnimationEnd = (nativeEvent) => {
        const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / tmp2.props.width);
        tmp2.setState({ activeIndex: rounded });
        if (null != tmp2.props.onPageChange) {
          const props = tmp2.props;
          props.onPageChange(rounded);
        }
      };
      return tmp2;
    }
  }
  callback3(Carousel, Component);
  let items = [
    {
      key: "render",
      value() {
        const self = this;
        const tmp = outer1_11(this.context);
        let tmp2 = true === this.props.pageIndictor;
        if (tmp2) {
          tmp2 = length > 1;
        }
        let tmp3;
        if (tmp2) {
          let obj = { count: length, activeIndex: self.state.activeIndex, pageIndicatorStyle: this.props.pageIndicatorStyle };
          tmp3 = outer1_9(outer1_12, obj);
        }
        let scrollViewProps = self.props.scrollViewProps;
        if (null == scrollViewProps) {
          scrollViewProps = {};
        }
        obj = { style: items };
        items = [tmp.container, self.props.style];
        obj = { automaticallyAdjustContentInsets: false, horizontal: true, pagingEnabled: true, scrollEnabled: this.props.children.length > 1, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, onMomentumScrollEnd: self.onAnimationEnd };
        const merged = Object.assign(scrollViewProps);
        obj["children"] = outer1_9(outer1_7, {
          style: tmp.carouselContentWrapper,
          onStartShouldSetResponder() {
            return true;
          },
          children: self.props.children
        });
        const items1 = [outer1_9(outer1_8, obj), tmp3];
        obj.children = items1;
        return outer1_10(outer1_7, obj);
      }
    }
  ];
  return callback(Carousel, items);
})(importAllResult.Component);
tmp6.contextType = require("ManaContext").ThemeContext;
tmp6.defaultProps = { pageIndictor: true, width: 375 };
const obj1 = { color: require("_createForOfIteratorHelperLoose").colors.ICON_SUBTLE };
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/common/Carousel.tsx");

export default tmp6;
