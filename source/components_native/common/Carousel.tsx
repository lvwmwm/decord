// Module ID: 7991
// Function ID: 63508
// Name: _callSuper
// Dependencies: []

// Module 7991 (_callSuper)
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
  return closure_4(arg0, constructResult);
}
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
({ View: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { container: { alignItems: "center" }, carouselContentWrapper: { flexDirection: "row" }, pageIndicator: {} };
obj = { color: importDefault(dependencyMap[9]).colors.ICON_STRONG };
obj.activeIndicator = obj;
const tmp4 = arg1(dependencyMap[7]);
obj.inactiveIndicator = { color: importDefault(dependencyMap[9]).colors.ICON_SUBTLE };
let closure_11 = obj.createLegacyClassComponentStyles(obj);
const tmp5 = (Component) => {
  class PageIndicator {
    constructor() {
      tmp = closure_2(this, PageIndicator);
      return closure_13(this, PageIndicator, arguments);
    }
  }
  const arg1 = PageIndicator;
  callback3(PageIndicator, Component);
  const items = [
    {
      key: "render",
      value() {
        let indicatorSpace;
        let pageIndicatorStyle;
        const tmp = callback3(this.context);
        const props = this.props;
        const count = props.count;
        const children = [];
        let num = 0;
        ({ indicatorSpace, pageIndicatorStyle } = props);
        if (0 < count) {
          do {
            let tmp5 = closure_0;
            let tmp6 = closure_1;
            let tmp4 = closure_9;
            let obj = {};
            obj = { fontSize: tmp3 };
            let items1 = [obj, num === tmp2 ? tmp.activeIndicator : tmp.inactiveIndicator];
            obj.style = items1;
            obj.children = "\u2022";
            let arr = children.push(tmp4(closure_0(closure_1[10]).LegacyText, obj, num));
            num = num + 1;
          } while (num < count);
        }
        const style = [tmp.pageIndicator, { width: count * indicatorSpace }, pageIndicatorStyle];
        return callback2(closure_7, { style, children });
      }
    }
  ];
  return callback(PageIndicator, items);
}(importAllResult.Component);
tmp5.contextType = arg1(dependencyMap[11]).ThemeContext;
tmp5.defaultProps = { f: "%Int8Array%", i: "headMetaSocial" };
const tmp6 = (Component) => {
  class Carousel {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_2(this, Carousel);
      items1 = [...items];
      tmp2 = closure_13(this, Carousel, items1);
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
  const arg1 = Carousel;
  callback3(Carousel, Component);
  const items = [
    {
      key: "render",
      value() {
        const self = this;
        const tmp = callback4(this.context);
        const length = this.props.children.length;
        let tmp2 = true === this.props.pageIndictor;
        if (tmp2) {
          tmp2 = length > 1;
        }
        let tmp3;
        if (tmp2) {
          let obj = { count: length, activeIndex: self.state.activeIndex, pageIndicatorStyle: this.props.pageIndicatorStyle };
          tmp3 = callback2(closure_12, obj);
        }
        let scrollViewProps = self.props.scrollViewProps;
        if (null == scrollViewProps) {
          scrollViewProps = {};
        }
        obj = { style: items };
        const items = [tmp.container, self.props.style];
        obj = { scrollEnabled: length > 1, onMomentumScrollEnd: self.onAnimationEnd };
        const merged = Object.assign(scrollViewProps);
        obj["children"] = callback2(closure_7, {
          style: tmp.carouselContentWrapper,
          onStartShouldSetResponder() {
            return true;
          },
          children: self.props.children
        });
        const items1 = [callback2(closure_8, obj), tmp3];
        obj.children = items1;
        return callback3(closure_7, obj);
      }
    }
  ];
  return callback(Carousel, items);
}(importAllResult.Component);
tmp6.contextType = arg1(dependencyMap[11]).ThemeContext;
tmp6.defaultProps = {};
const obj1 = { color: importDefault(dependencyMap[9]).colors.ICON_SUBTLE };
const result = arg1(dependencyMap[12]).fileFinishedImporting("components_native/common/Carousel.tsx");

export default tmp6;
