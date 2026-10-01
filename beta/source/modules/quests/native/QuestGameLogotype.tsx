// Module ID: 14681
// Function ID: 14682
// Name: QuestGameLogotype
// Dependencies: [32, 19, 17, 21, 5284, 4836, 576, 4566, 5280, 7909, 5899, 2]

// Module 14681 (QuestGameLogotype)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj3;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const jsx = Fragment.jsx;
let SPRING_CONFIG = { overshootClamping: true };
const merged = Object.assign(springPresets.springSlow);
const obj2 = { logo: obj3 };
obj3 = { marginBottom: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}" };
const memoResult = react.memo((assetUrl) => {
  let items3;
  let items4;
  let items5;
  let obj6;
  let tmp10Result;
  assetUrl = assetUrl.assetUrl;
  let num = assetUrl.width;
  if (num === undefined) {
    num = 120;
  }
  const height = assetUrl.height;
  const maxWidth = assetUrl.maxWidth;
  const maxHeight = assetUrl.maxHeight;
  const onError = assetUrl.onError;
  const style = assetUrl.style;
  let tmp = closure_9();
  const tmp2 = maxWidth(maxHeight.useState(null), 2);
  const first = tmp2[0];
  let closure_6 = tmp2[1];
  const items = [first, num, height, maxWidth, maxHeight];
  const memo = maxHeight.useMemo(() => {
    size = first;
    if (null != first) {
      let size2;
      const result = size.width / size.height;
      if (null != height) {
        const size1 = { height, width: height * result };
        size2 = size1;
      } else {
        size2 = { height: num / result, width: num };
      }
      if (null != maxWidth) {
        const _Math = Math;
        size2.width = Math.min(tmp4, size2.width);
        size2.height = size2.width / result;
      }
      if (null != maxHeight) {
        const _Math2 = Math;
        size2.height = Math.min(tmp6, size2.height);
        size2.width = size2.height * result;
      }
      return size2;
    }
  }, items);
  const items1 = [assetUrl];
  const effect = maxHeight.useEffect(() => {
    metroRequire = metroRequire.getSize(assetUrl, (width, height) => {
      const tmp = width > 0 && height > 0;
      if (tmp) {
        size = { width, height };
        closure_1_6(size);
      }
    });
  }, items1);
  const tmp6 = assetUrl;
  SPRING_CONFIG = assetUrl(height[7]);
  class C {
    constructor() {
      let obj;
      num = 1;
      const withSpring = spring.withSpring;
      spring;
      if (null == memo) {
        num = 0;
      }
      obj = { opacity: withSpring(num, obj, "animate-always") };
      return obj;
    }
  }
  C.__closure = { withSpring: assetUrl(height[8]).withSpring, logoDimensionStyles: memo, SPRING_CONFIG };
  C.__workletHash = 11242802634598;
  C.__initData = __initData;
  const items2 = [assetUrl];
  ({ withSpring: assetUrl(height[8]).withSpring, logoDimensionStyles: memo, SPRING_CONFIG });
  const animatedStyle = SPRING_CONFIG.useAnimatedStyle(C);
  const memo1 = maxHeight.useMemo(() => assetUrl.endsWith(".svg"), items2);
  const obj3 = { style: items3, children: tmp10Result };
  items3 = [animatedStyle, style];
  const View = num(height[7]).View;
  const tmp11 = num;
  if (memo1) {
    const obj4 = { style: items4, children: memo(tmp6(height[9]).SvgUri, size) };
    items4 = [memo, tmp.logo];
    size = { height: "100%", width: "100%", uri: assetUrl, onError };
    tmp10Result = tmp10(first, obj4);
  } else {
    const obj5 = { source: obj6, style: items5, onError };
    items5 = [memo, tmp.logo];
    obj6 = { uri: assetUrl };
    tmp10Result = tmp10(tmp11(tmp7[10]), obj5);
  }
  return memo(View, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestGameLogotype.tsx");

export default memoResult;
