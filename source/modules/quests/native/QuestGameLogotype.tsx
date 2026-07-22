// Module ID: 13933
// Function ID: 105886
// Dependencies: []

// Module 13933
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = {};
const merged = Object.assign(arg1(dependencyMap[4]).springSlow);
obj["overshootClamping"] = true;
const tmp2 = arg1(dependencyMap[2]);
obj = {};
const obj3 = arg1(dependencyMap[5]);
obj.logo = { marginBottom: importDefault(dependencyMap[6]).space.PX_4 };
let closure_9 = obj3.createStyles(obj);
let closure_10 = { code: "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}" };
const obj1 = { marginBottom: importDefault(dependencyMap[6]).space.PX_4 };
const memoResult = importAllResult.memo((assetUrl) => {
  assetUrl = assetUrl.assetUrl;
  const arg1 = assetUrl;
  let num = assetUrl.width;
  if (num === undefined) {
    num = 120;
  }
  const importDefault = num;
  const height = assetUrl.height;
  const dependencyMap = height;
  const maxWidth = assetUrl.maxWidth;
  const callback = maxWidth;
  const maxHeight = assetUrl.maxHeight;
  const onError = assetUrl.onError;
  let first;
  let closure_6;
  let jsx;
  const tmp = callback2();
  const tmp2 = callback(maxHeight.useState(null), 2);
  first = tmp2[0];
  closure_6 = tmp2[1];
  const items = [first, num, height, maxWidth, maxHeight];
  const memo = importAllResult.useMemo(() => {
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
  jsx = memo;
  const items1 = [assetUrl];
  const effect = importAllResult.useEffect(() => {
    const size = size.getSize(assetUrl, (width, height) => {
      if (tmp) {
        const obj = { width, height };
        callback(obj);
      }
    });
  }, items1);
  let obj = arg1(dependencyMap[7]);
  class C {
    constructor() {
      obj = {};
      obj2 = assetUrl(height[8]);
      num = 1;
      if (null == closure_7) {
        num = 0;
      }
      obj.opacity = obj2.withSpring(num, closure_8, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[8]).withSpring, logoDimensionStyles: memo, SPRING_CONFIG: obj };
  C.__closure = obj;
  C.__workletHash = 11242802634598;
  C.__initData = closure_10;
  const items2 = [assetUrl];
  const animatedStyle = obj.useAnimatedStyle(C);
  const memo1 = importAllResult.useMemo(() => assetUrl.endsWith(".svg"), items2);
  obj = { style: items3 };
  const items3 = [animatedStyle, assetUrl.style];
  if (memo1) {
    const obj1 = {};
    const items4 = [memo, tmp.logo];
    obj1.style = items4;
    const obj2 = { uri: assetUrl, onError };
    obj1.children = tmp9(arg1(dependencyMap[9]).SvgUri, obj2);
    let tmp9Result = tmp9(first, obj1);
  } else {
    const obj3 = {};
    const obj4 = { uri: assetUrl };
    obj3.source = obj4;
    const items5 = [memo, tmp.logo];
    obj3.style = items5;
    obj3.onError = onError;
    tmp9Result = tmp9(importDefault(dependencyMap[10]), obj3);
  }
  obj.children = tmp9Result;
  return jsx(importDefault(dependencyMap[7]).View, obj);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/native/QuestGameLogotype.tsx");

export default memoResult;
