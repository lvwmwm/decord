// Module ID: 8775
// Function ID: 69342
// Name: GiftBackgroundSelect
// Dependencies: []
// Exports: default

// Module 8775 (GiftBackgroundSelect)
class GiftBackgroundSelect {
  constructor(arg0) {
    flag = global.withConsistentHeight;
    if (flag === undefined) {
      flag = true;
    }
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    tmp = closure_9();
    tmp2 = closure_3(importAll.useState(), 2);
    first = tmp2[0];
    closure_0 = first;
    closure_1 = tmp2[1];
    obj = closure_0(closure_2[4]);
    sharedValue = obj.useSharedValue(false);
    closure_2 = sharedValue;
    items = [, ];
    items[0] = first;
    items[1] = sharedValue;
    effect = importAll.useEffect(() => {
      const result = sharedValue.set(null != first);
    }, items);
    obj2 = closure_0(closure_2[4]);
    class N {
      constructor() {
        obj = {};
        obj2 = closure_0(closure_2[8]);
        num = 0;
        if (closure_2.get()) {
          num = 1;
        }
        obj = { easing: closure_0(closure_2[9]).STANDARD_EASING, duration: 100 };
        obj.opacity = obj2.withTiming(num, obj);
        return obj;
      }
    }
    obj = { STANDARD_EASING: closure_0(closure_2[9]).STANDARD_EASING, withTiming: closure_0(closure_2[8]).withTiming, visibility: sharedValue };
    N.__closure = obj;
    N.__workletHash = 5743780040676;
    N.__initData = closure_10;
    obj1 = {};
    animatedStyle = obj2.useAnimatedStyle(N);
    tmp7 = jsxs;
    tmp8 = Fragment;
    obj2 = { giftStyle: global.giftStyle };
    obj2.withConsistentHeight = flag;
    items1 = [, ];
    items1[0] = jsx(closure_1(closure_2[10]), obj2);
    obj3 = {
      onContentSizeChange(arg0) {
            if (null == first) {
              callback(arg0);
            }
          }
    };
    items2 = [, ];
    items2[0] = tmp.contentContainer;
    tmp11 = null != first;
    tmp9 = jsx;
    tmp10 = createAnimatedComponent;
    if (tmp11) {
      tmp11 = first < closure_1(closure_2[7])().width;
    }
    if (tmp11) {
      obj4 = {};
      obj4.flex = 1;
      tmp11 = obj4;
    }
    items2[1] = tmp11;
    obj3.contentContainerStyle = items2;
    items3 = [, ];
    items3[0] = tmp.scrollView;
    items3[1] = animatedStyle;
    obj3.style = items3;
    obj3.horizontal = true;
    obj3.showsHorizontalScrollIndicator = false;
    items1[1] = tmp9(tmp10, obj3);
    obj1.children = items1;
    return tmp7(tmp8, obj1);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[2]).ScrollView);
const importDefaultResult = importDefault(dependencyMap[4]);
let obj = {};
obj = { flex: 1, marginTop: importDefault(dependencyMap[6]).space.PX_24 };
obj.scrollView = obj;
obj.contentContainer = { justifyContent: "center" };
let closure_9 = arg1(dependencyMap[5]).createStyles(obj);
let closure_10 = { code: "function PremiumGiftBackgroundSelectTsx1(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}" };
const obj2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx");

export default function PremiumGiftBackgroundSelect() {
  let obj = arg1(dependencyMap[11]);
  const nativeGiftContext = obj.useNativeGiftContext();
  obj = { giftStyle: nativeGiftContext.giftStyle, setGiftStyle: nativeGiftContext.setGiftStyle };
  return callback2(GiftBackgroundSelect, obj);
};
export { GiftBackgroundSelect };
