// Module ID: 9872
// Function ID: 9873
// Name: Carousel
// Dependencies: [19, 17, 21, 4969, 587, 5023, 1202, 558, 576, 5283, 2]

// Module 9872 (Carousel)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1202 */;
import native2 from "native" /* 5023 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5283 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { alignItems: "center" }, carouselContentWrapper: { flexDirection: "row" }, pageIndicator: { flexDirection: "row", justifyContent: "space-around", alignItems: "center" }, activeIndicator: obj2, inactiveIndicator: obj3 };
obj2 = { color: nativeDefault.colors.ICON_STRONG };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { color: nativeDefault.colors.ICON_SUBTLE };
const metroRequire = createLegacyClassComponentStyles(obj);
const Component = react.Component;
class PageIndicator extends Component {
  render() {
    let indicatorSpace;
    let items2;
    let pageIndicatorStyle;
    const tmp = closure_6(this.context);
    const props = this.props;
    const count = props.count;
    const items = [];
    let num = 0;
    ({ indicatorSpace, pageIndicatorStyle } = props);
    if (0 < count) {
      do {
        let tmp4 = React3;
        let obj = { fontSize: tmp3 };
        let items1 = [obj, ];
        let obj2 = { style: items1, children: "\u2022" };
        items1[1] = num === tmp2 ? tmp.activeIndicator : tmp.inactiveIndicator;
        let arr = items.push(tmp4(native.LegacyText, obj2, num));
        num = num + 1;
      } while (num < count);
    }
    const obj3 = { style: items2, children: items };
    items2 = [tmp.pageIndicator, { width: count * indicatorSpace }, pageIndicatorStyle];
    return React3(React2, obj3);
  }
}
const prototype = PageIndicator.prototype;
PageIndicator.contextType = native2.ThemeContext;
PageIndicator.defaultProps = { indicatorSpace: 10, indicatorSize: 20 };
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function CarouselScrollView(arg0) {
  let first;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disallowInterruption: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = LegacyBaseButton;
  const nativeGesture = tmpResult.useNativeGesture(first);
  if (cResult[1] !== arg0) {
    const obj3 = {};
    const merged = Object.assign(arg0);
    const tmp12 = React3(_false, obj3);
    cResult[1] = arg0;
    cResult[2] = tmp12;
    tmp6 = tmp12;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === nativeGesture) {
    let tmp13;
    if (cResult[4] === tmp6) {
      tmp13 = cResult[5];
    }
    return tmp13;
  }
  const tmp14 = React3(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: tmp6 });
  cResult[3] = nativeGesture;
  cResult[4] = tmp6;
  cResult[5] = tmp14;
  tmp13 = tmp14;
}) : (function CarouselScrollView(arg0) {
  let obj3;
  const obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: React3(_false, obj3) };
  obj3 = {};
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged = Object.assign(arg0);
  return React3(GestureDetector, obj2);
});
const Component2 = react.Component;
class Carousel extends Component2 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.state = { activeIndex: 0 };
    applyArgumentsResult.onAnimationEnd = function onAnimationEnd(nativeEvent) {
      const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / applyArgumentsResult.props.width);
      applyArgumentsResult.setState({ activeIndex: rounded });
      const props = applyArgumentsResult.props;
      const onPageChange = props.onPageChange;
      if (onPageChange != null) {
        onPageChange(rounded);
      }
    };
    return applyArgumentsResult;
  }
  render() {
    let items;
    let items1;
    let obj4;
    const self = this;
    const tmp = closure_6(this.context);
    let tmp2 = true === this.props.pageIndictor;
    const pageIndicatorStyle = this.props.pageIndicatorStyle;
    if (tmp2) {
      tmp2 = length > 1;
    }
    let tmp3;
    if (tmp2) {
      const obj = { count: this.props.children.length, activeIndex: self.state.activeIndex, pageIndicatorStyle };
      tmp3 = React3(PageIndicator, obj);
    }
    let scrollViewProps = self.props.scrollViewProps;
    if (scrollViewProps == null) {
      scrollViewProps = {};
    }
    const obj2 = { style: items, children: items1 };
    items = [tmp.container, self.props.style];
    const obj3 = { automaticallyAdjustContentInsets: false, horizontal: true, pagingEnabled: true, scrollEnabled: this.props.children.length > 1, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, onMomentumScrollEnd: self.onAnimationEnd, children: React3(React2, obj4) };
    const merged = Object.assign(scrollViewProps);
    obj4 = {
      style: tmp.carouselContentWrapper,
      onStartShouldSetResponder() {
        return true;
      },
      children: self.props.children
    };
    items1 = [React3(closure_8, obj3), tmp3];
    return hasOwnProperty(React2, obj2);
  }
}
const prototype2 = Carousel.prototype;
Carousel.contextType = native2.ThemeContext;
Carousel.defaultProps = { pageIndictor: true, width: 375 };
const result = size.fileFinishedImporting("components_native/common/Carousel.tsx");

export default Carousel;
