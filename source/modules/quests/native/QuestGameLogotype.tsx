// Module ID: 14047
// Function ID: 108042
// Dependencies: [57, 31, 27, 33, 4546, 4130, 689, 3991, 4542, 8018, 5085, 2]

// Module 14047
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ View: closure_5, Image: closure_6 } = get_ActivityIndicator);
let obj = {};
const merged = Object.assign(require("SUBTLE_SPRING").springSlow);
obj["overshootClamping"] = true;
obj = { logo: { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 } };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}" };
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
const memoResult = importAllResult.memo((assetUrl) => {
  assetUrl = assetUrl.assetUrl;
  let num = assetUrl.width;
  if (num === undefined) {
    num = 120;
  }
  const height = assetUrl.height;
  const maxWidth = assetUrl.maxWidth;
  const maxHeight = assetUrl.maxHeight;
  const onError = assetUrl.onError;
  let first;
  let closure_6;
  let memo;
  const tmp = callback();
  const tmp2 = maxWidth(maxHeight.useState(null), 2);
  first = tmp2[0];
  closure_6 = tmp2[1];
  const items = [first, num, height, maxWidth, maxHeight];
  memo = maxHeight.useMemo(() => {
    if (null != first) {
      const result = first.width / first.height;
      if (null != height) {
        const obj = { height, width: height * result };
        let size = obj;
      } else {
        size = { height: num / result, width: num };
      }
      if (null != maxWidth) {
        const _Math = Math;
        size.width = Math.min(maxWidth, size.width);
        size.height = size.width / result;
      }
      if (null != maxHeight) {
        const _Math2 = Math;
        size.height = Math.min(maxHeight, size.height);
        size.width = size.height * result;
      }
      return size;
    }
  }, items);
  const items1 = [assetUrl];
  const effect = maxHeight.useEffect(() => {
    size = size.getSize(assetUrl, (width, height) => {
      if (tmp) {
        const obj = { width, height };
        outer1_6(obj);
      }
    });
  }, items1);
  let obj = assetUrl(height[7]);
  class C {
    constructor() {
      obj = {};
      obj2 = assetUrl(height[8]);
      num = 1;
      if (null == c7) {
        num = 0;
      }
      obj.opacity = obj2.withSpring(num, outer1_8, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: assetUrl(height[8]).withSpring, logoDimensionStyles: memo, SPRING_CONFIG: obj };
  C.__closure = obj;
  C.__workletHash = 11242802634598;
  C.__initData = closure_10;
  const items2 = [assetUrl];
  const animatedStyle = obj.useAnimatedStyle(C);
  const memo1 = maxHeight.useMemo(() => assetUrl.endsWith(".svg"), items2);
  obj = { style: items3 };
  items3 = [animatedStyle, assetUrl.style];
  if (memo1) {
    const obj1 = {};
    const items4 = [memo, tmp.logo];
    obj1.style = items4;
    const obj2 = { height: "100%", width: "100%", uri: assetUrl, onError };
    obj1.children = tmp9(assetUrl(height[9]).SvgUri, obj2);
    let tmp9Result = tmp9(first, obj1);
  } else {
    const obj3 = {};
    const obj4 = { uri: assetUrl };
    obj3.source = obj4;
    const items5 = [memo, tmp.logo];
    obj3.style = items5;
    obj3.onError = onError;
    tmp9Result = tmp9(num(height[10]), obj3);
  }
  obj.children = tmp9Result;
  return memo(num(height[7]).View, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestGameLogotype.tsx");

export default memoResult;
