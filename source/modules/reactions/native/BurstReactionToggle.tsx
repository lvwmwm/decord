// Module ID: 9332
// Function ID: 72920
// Name: BurstReactionToggle
// Dependencies: []
// Exports: default

// Module 9332 (BurstReactionToggle)
let closure_3 = importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
let closure_5 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = { duration: 100 };
const Easing = arg1(dependencyMap[5]).Easing;
obj.easing = Easing.out(arg1(dependencyMap[5]).Easing.quad);
let closure_9 = {};
let closure_10 = { code: "function BurstReactionToggleTsx1(){const{reducedMotion,targetBackgroundColor,backgroundColor,rotation}=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+\"deg\"}]};}" };
obj = {};
obj = { "Bool(true)": "/assets/design/components/Illustration/native/redesign/generated/images", "Bool(true)": 120, "Bool(true)": 96, "Bool(true)": null, "Bool(true)": "f9c127df442a3e2592e404fc380b1a52", borderRadius: importDefault(dependencyMap[8]).modules.button.BORDER_RADIUS };
obj.container = obj;
let closure_11 = arg1(dependencyMap[11]).createStyles(obj);
const obj2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/reactions/native/BurstReactionToggle.tsx");

export default function BurstReactionToggle(arg0) {
  let isActive;
  ({ onPress: closure_0, isActive } = arg0);
  let importDefault;
  const colors = importDefault(dependencyMap[8]).colors;
  const ref = React.useRef(null);
  importDefault = importDefault(dependencyMap[12])(ref);
  let obj = {
    onPress() {
      callback2(constants.AUTO);
      callback();
    },
    accessible: true
  };
  const intl = arg1(dependencyMap[13]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[13]).t;
  if (isActive) {
    let stringResult = string(t.5cRA/b);
  } else {
    stringResult = string(t.buV4av);
  }
  obj.accessibilityLabel = stringResult;
  obj.accessibilityRole = "switch";
  obj.accessibilityState = { checked: isActive };
  obj = { style: items, ref };
  const items = [
    callback().container,
    function useBurstToggleStyles(isActive) {
      let obj = stateFromStores(num[6]);
      const items = [closure_5];
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const colors = callback2(num[8]).colors;
      const token = stateFromStores(num[7]).useToken(isActive ? colors.BACKGROUND_BRAND : colors.INPUT_BACKGROUND_DEFAULT);
      let str = "";
      if (null != token) {
        str = token;
      }
      const callback2 = str;
      let num = 0;
      if (isActive) {
        num = 360;
      }
      const obj2 = stateFromStores(num[7]);
      const sharedValue = stateFromStores(num[5]).useSharedValue(str);
      const obj3 = stateFromStores(num[5]);
      const sharedValue1 = stateFromStores(num[5]).useSharedValue(num);
      const obj4 = stateFromStores(num[5]);
      const fn = function c() {
        let obj = {};
        if (stateFromStores) {
          let value = str;
        } else {
          value = sharedValue.get();
        }
        obj.backgroundColor = value;
        obj = {};
        let num = 0;
        if (!stateFromStores) {
          num = sharedValue1.get();
        }
        obj.rotate = "" + num + "deg";
        const items = [obj];
        obj.transform = items;
        return obj;
      };
      obj = { reducedMotion: stateFromStores, targetBackgroundColor: str, backgroundColor: sharedValue, rotation: sharedValue1 };
      fn.__closure = obj;
      fn.__workletHash = 1525758595013;
      fn.__initData = closure_10;
      const items1 = [sharedValue, str, sharedValue1, num];
      const containerStyle = stateFromStores(num[5]).useAnimatedStyle(fn);
      const effect = sharedValue.useEffect(() => {
        const result = sharedValue.set(stateFromStores(num[9]).withTiming(str, closure_8));
        const obj = stateFromStores(num[9]);
        const result1 = sharedValue1.set(stateFromStores(num[10]).withSpring(num, closure_9));
      }, items1);
      return { containerStyle };
    }(isActive).containerStyle
  ];
  obj.children = jsx(arg1(dependencyMap[14]).SuperReactionIcon, { color: isActive ? colors.WHITE : colors.INTERACTIVE_TEXT_DEFAULT });
  obj.children = jsx(importDefault(dependencyMap[5]).View, obj);
  return <Pressable {...obj} />;
};
