// Module ID: 16523
// Function ID: 16524
// Name: ProfileCustomizationScrollAwayTabs
// Dependencies: [32, 19, 17, 21, 5009, 575, 5591, 5090, 1376, 5298, 16408, 12476, 11445, 2]
// Exports: default

// Module 16523 (ProfileCustomizationScrollAwayTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportDefault;
let metroRequire;
let rect;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { flex: 1, overflow: "hidden" }, header: rect };
rect = { position: "absolute", zIndex: 1, top: 0, left: 0, right: 0, paddingTop: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function ProfileCustomizationScrollAwayTabsTsx1(){const{activeIndex,mainScrollY,height,guildScrollY}=this.__closure;const guildPageVisibility=Math.min(Math.max(activeIndex.get(),0),1);const mainOffset=Math.min(Math.max(mainScrollY.get(),0),height);const guildOffset=Math.min(Math.max(guildScrollY.get(),0),height);const offset=mainOffset*(1-guildPageVisibility)+guildOffset*guildPageVisibility;return{transform:[{translateY:-offset}]};}" };
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationScrollAwayTabs.tsx");

export default function ProfileCustomizationScrollAwayTabs(state) {
  let closure_1;
  let items1;
  let items2;
  let obj6;
  state = state.state;
  let token;
  let sharedValue;
  let sharedValue1;
  let tmp = closure_8();
  let tmp2 = sharedValue(sharedValue1.useState(0), 2);
  const height = tmp2[0];
  importDefault = tmp2[1];
  let obj = height(token[6]);
  token = obj.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj2 = height(token[7]);
  sharedValue = obj2.useSharedValue(0);
  const obj3 = height(token[7]);
  sharedValue1 = obj3.useSharedValue(0);
  const activeIndex = state.activeIndex;
  const memo = sharedValue1.useMemo(() => {
    let NativeResult;
    const obj = first(token[8]);
    const tmp = first;
    const tmp2 = token;
    if (obj.isAndroid()) {
      const Gesture = tmp(tmp2[9]).Gesture;
      NativeResult = Gesture.Native();
    }
    return NativeResult;
  }, []);
  const callback = sharedValue1.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.height);
  }, []);
  const fn = function f() {
    let items;
    let result;
    const bound = Math.min(Math.max(activeIndex.get(), 0), 1);
    const obj = { transform: items };
    const obj2 = { translateY: -result + Math.min(Math.max(sharedValue1.get(), 0), first) * bound };
    result = Math.min(Math.max(sharedValue.get(), 0), first) * (1 - bound);
    items = [obj2];
    return obj;
  };
  fn.__closure = { activeIndex, mainScrollY: sharedValue, height, guildScrollY: sharedValue1 };
  fn.__workletHash = 14885523841037;
  fn.__initData = __initData;
  let items = [height, token, sharedValue, sharedValue1, memo];
  const obj4 = height(token[7]);
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const memo1 = sharedValue1.useMemo(() => ({ height, backgroundColor: token, mainScrollY: sharedValue, guildScrollY: sharedValue1, pagerGesture: memo }), items);
  const obj5 = { value: memo1, children: closure_7(activeIndex, obj6) };
  obj6 = { style: tmp.container, children: items2 };
  const Provider = require("ProfileCustomizationHeaderContext").Provider;
  const obj7 = { style: items1, onLayout: callback, children: memo(height(token[11]).Tabs, { state }) };
  items1 = [tmp.header, { backgroundColor: token }, animatedStyle];
  View = require("ReanimatedRexport").View;
  items2 = [memo(View, obj7), memo(height(token[12]).SegmentedControlPages, { state, nativeGesture: memo })];
  return memo(Provider, obj5);
};
