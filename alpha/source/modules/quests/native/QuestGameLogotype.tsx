// Module ID: 17375
// Function ID: 17376
// Name: QuestGameLogotype
// Dependencies: [32, 19, 17, 21, 5772, 5141, 575, 1652, 5771, 8171, 5851, 2]

// Module 17375 (QuestGameLogotype)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import springPresets from "springPresets" /* 5772 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj3;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const jsx = Fragment.jsx;
let obj = { overshootClamping: true };
const merged = Object.assign(springPresets.springSlow);
const obj2 = { logo: obj3 };
obj3 = { marginBottom: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = { code: "(function QuestGameLogotypeTsx1(){let[withSpring,logoDimensionStyles,SPRING_CONFIG]=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};})" };
const memoResult = react.memo(function QuestGameLogotype(assetUrl) {
  let items6;
  let items7;
  let obj5;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15Result;
  let tmp9;
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
  obj = maxHeight;
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
  const items2 = [closure_10, , , ];
  const useAnimatedStyle = assetUrl(height[7]).useAnimatedStyle;
  assetUrl(height[7]);
  items2[1] = assetUrl(height[8]).withSpring;
  items2[2] = memo;
  items2[3] = obj;
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  class QuestGameLogotypeTsx1 {
    constructor() {
      num = 1;
      const tmp = c0;
      if (null == c1) {
        num = 0;
      }
      obj = { opacity: tmp(num, c2, "animate-always") };
      return obj;
    }
  }
  const items3 = [tmp10, tmp11, tmp12];
  QuestGameLogotypeTsx1.__closure = items3;
  QuestGameLogotypeTsx1.__workletHash = 2309549072991;
  QuestGameLogotypeTsx1.__initData = tmp9;
  const items4 = [assetUrl];
  const animatedStyle = useAnimatedStyle(QuestGameLogotypeTsx1);
  const memo1 = obj.useMemo(() => assetUrl.endsWith(".svg"), items4);
  const items5 = [animatedStyle, style];
  const View = num(tmp7[7]).View;
  const tmp16 = num;
  if (memo1) {
    const obj3 = { style: items6, children: null };
    items6 = [memo, tmp.logo];
    size = { height: "100%", width: "100%", uri: assetUrl, onError };
    tmp15Result = tmp15(first, obj3);
  } else {
    const obj4 = { source: obj5, style: items7, onError };
    items7 = [memo, tmp.logo];
    obj5 = { uri: assetUrl };
    tmp15Result = tmp15(tmp16(tmp7[10]), obj4);
  }
  return <View style={items5}>{tmp15Result}</View>;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestGameLogotype.tsx");

export default memoResult;
