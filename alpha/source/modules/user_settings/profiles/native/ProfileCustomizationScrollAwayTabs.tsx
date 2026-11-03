// Module ID: 16721
// Function ID: 16722
// Name: ProfileCustomizationScrollAwayTabs
// Dependencies: [32, 19, 17, 21, 5141, 575, 5719, 1652, 1377, 5426, 16606, 12306, 14323, 2]
// Exports: default

// Module 16721 (ProfileCustomizationScrollAwayTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
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
let closure_9 = { code: "(function ProfileCustomizationScrollAwayTabsTsx1(){let[activeIndex,mainScrollY,height,guildScrollY]=this.__closure;const guildPageVisibility=Math.min(Math.max(activeIndex.get(),0),1);const mainOffset=Math.min(Math.max(mainScrollY.get(),0),height);const guildOffset=Math.min(Math.max(guildScrollY.get(),0),height);const offset=mainOffset*(1-guildPageVisibility)+guildOffset*guildPageVisibility;return{transform:[{translateY:-offset}]};})" };
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationScrollAwayTabs.tsx");

export default function ProfileCustomizationScrollAwayTabs(state) {
  let closure_1;
  let items3;
  let items4;
  let obj7;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  state = state.state;
  let token;
  let sharedValue;
  let sharedValue1;
  let tmp = closure_8();
  let obj = sharedValue1;
  let tmp2 = sharedValue(sharedValue1.useState(0), 2);
  const height = tmp2[0];
  importDefault = tmp2[1];
  let obj2 = height(token[6]);
  token = obj2.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj3 = height(token[7]);
  sharedValue = obj3.useSharedValue(0);
  const obj4 = height(token[7]);
  sharedValue1 = obj4.useSharedValue(0);
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
  let items = [closure_9, activeIndex, sharedValue, height, sharedValue1];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  const obj5 = height(token[7]);
  class ProfileCustomizationScrollAwayTabsTsx1 {
    constructor() {
      let items;
      let result;
      const bound = Math.min(Math.max(_undefined.get(), 0), 1);
      const obj = { transform: items };
      const obj2 = { translateY: -result + Math.min(Math.max(_undefined3.get(), 0), c2) * bound };
      result = Math.min(Math.max(_undefined2.get(), 0), c2) * (1 - bound);
      items = [obj2];
      return obj;
    }
  }
  const items1 = [tmp13, tmp14, tmp15, tmp16];
  ProfileCustomizationScrollAwayTabsTsx1.__closure = items1;
  ProfileCustomizationScrollAwayTabsTsx1.__workletHash = 6091010255124;
  ProfileCustomizationScrollAwayTabsTsx1.__initData = tmp12;
  const items2 = [height, token, sharedValue, sharedValue1, memo];
  const animatedStyle = obj5.useAnimatedStyle(ProfileCustomizationScrollAwayTabsTsx1);
  const memo1 = obj.useMemo(() => ({ height, backgroundColor: token, mainScrollY: sharedValue, guildScrollY: sharedValue1, pagerGesture: memo }), items2);
  const obj6 = { value: memo1, children: closure_7(memo, obj7) };
  obj7 = { style: tmp.container, children: items4 };
  const Provider = tmp6(tmp5[10]).Provider;
  const obj8 = { style: items3, onLayout: callback, children: closure_6(height(token[11]).Tabs, { state }) };
  items3 = [tmp.header, { backgroundColor: token }, animatedStyle];
  View = tmp6(tmp5[7]).View;
  items4 = [closure_6(View, obj8), closure_6(height(token[12]).SegmentedControlPages, { state, nativeGesture: memo })];
  return closure_6(Provider, obj6);
};
