// Module ID: 16472
// Function ID: 16473
// Name: ProfileCustomizationScrollAwayTabs
// Dependencies: [32, 19, 17, 21, 5005, 587, 558, 576, 5289, 5086, 12315, 11240, 16355, 2]

// Module 16472 (ProfileCustomizationScrollAwayTabs)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import useToken from "useToken" /* 5289 */;
import SegmentedControlPages from "SegmentedControlPages" /* 11240 */;
import Tabs from "Tabs" /* 12315 */;
import ProfileCustomizationHeaderContextDefault from "ProfileCustomizationHeaderContext" /* 16355 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let metroImportDefault;
let metroRequire;
let rect;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { flex: 1, overflow: "hidden" }, header: rect };
rect = { position: "absolute", zIndex: 1, top: 0, left: 0, right: 0, paddingTop: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function ProfileCustomizationScrollAwayTabsTsx1(){const{activeIndex,mainScrollY,height,guildScrollY}=this.__closure;const guildPageVisibility=Math.min(Math.max(activeIndex.get(),0),1);const mainOffset=Math.min(Math.max(mainScrollY.get(),0),height);const guildOffset=Math.min(Math.max(guildScrollY.get(),0),height);const offset=mainOffset*(1-guildPageVisibility)+guildOffset*guildPageVisibility;return{transform:[{translateY:-offset}]};}" };
const __initData2 = { code: "function ProfileCustomizationScrollAwayTabsTsx2(){const{activeIndex,mainScrollY,height,guildScrollY}=this.__closure;const guildPageVisibility=Math.min(Math.max(activeIndex.get(),0),1);const mainOffset=Math.min(Math.max(mainScrollY.get(),0),height);const guildOffset=Math.min(Math.max(guildScrollY.get(),0),height);const offset=mainOffset*(1-guildPageVisibility)+guildOffset*guildPageVisibility;return{transform:[{translateY:-offset}]};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationScrollAwayTabs(state) {
  let closure_1;
  let first;
  let first1;
  let items;
  let obj = react2;
  const cResult = obj.c(26);
  state = state.state;
  const tmp4 = closure_8();
  [first, closure_1] = react.useState(0);
  let obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj3 = ReanimatedRexport;
  const sharedValue = obj3.useSharedValue(0);
  const obj4 = ReanimatedRexport;
  const sharedValue1 = obj4.useSharedValue(0);
  const activeIndex = state.activeIndex;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f(nativeEvent) {
      closure_1(nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  const tmpResult = ReanimatedRexport;
  class O {
    constructor() {
      let items;
      let result;
      const bound = Math.min(Math.max(activeIndex.get(), 0), 1);
      const obj = { transform: items };
      const obj2 = { translateY: -result + Math.min(Math.max(sharedValue1.get(), 0), first) * bound };
      result = Math.min(Math.max(sharedValue.get(), 0), first) * (1 - bound);
      items = [obj2];
      return obj;
    }
  }
  O.__closure = { activeIndex, mainScrollY: sharedValue, height: first, guildScrollY: sharedValue1 };
  O.__workletHash = 14885523841037;
  O.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(O);
  if (cResult[1] === token) {
    if (cResult[2] === sharedValue1) {
      if (cResult[3] === first) {
        let tmp13;
        let tmp14;
        if (cResult[4] === sharedValue) {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== token) {
          const obj5 = { backgroundColor: token };
          cResult[6] = token;
          cResult[7] = obj5;
          tmp14 = obj5;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === animatedStyle) {
          if (cResult[9] === tmp4.header) {
            let tmp15;
            let tmp16;
            if (cResult[10] === tmp14) {
              tmp15 = cResult[11];
            }
            if (cResult[12] !== state) {
              const obj6 = { state };
              const tmp18 = metroRequire(Tabs.Tabs, obj6);
              cResult[12] = state;
              cResult[13] = tmp18;
              tmp16 = tmp18;
            } else {
              tmp16 = cResult[13];
            }
            if (cResult[14] === tmp15) {
              let tmp19;
              let tmp22;
              if (cResult[15] === tmp16) {
                tmp19 = cResult[16];
              }
              if (cResult[17] !== state) {
                const obj7 = { state };
                const tmp24 = metroRequire(SegmentedControlPages.SegmentedControlPages, obj7);
                cResult[17] = state;
                cResult[18] = tmp24;
                tmp22 = tmp24;
              } else {
                tmp22 = cResult[18];
              }
              if (cResult[19] === tmp4.container) {
                if (cResult[20] === tmp19) {
                  let tmp25;
                  if (cResult[21] === tmp22) {
                    tmp25 = cResult[22];
                  }
                  if (cResult[23] === tmp13) {
                    let tmp29;
                    if (cResult[24] === tmp25) {
                      tmp29 = cResult[25];
                    }
                    return tmp29;
                  }
                  const obj8 = { value: tmp13, children: tmp25 };
                  const tmp31 = metroRequire(ProfileCustomizationHeaderContextDefault.Provider, obj8);
                  cResult[23] = tmp13;
                  cResult[24] = tmp25;
                  cResult[25] = tmp31;
                  tmp29 = tmp31;
                }
              }
              const obj9 = { style: tmp4.container, children: items };
              items = [tmp19, tmp22];
              const tmp28 = metroImportDefault(View, obj9);
              cResult[19] = tmp4.container;
              cResult[20] = tmp19;
              cResult[21] = tmp22;
              cResult[22] = tmp28;
              tmp25 = tmp28;
            }
            const obj10 = { style: tmp15, onLayout: first1, children: tmp16 };
            const tmp21 = metroRequire(ReanimatedRexportDefault.View, obj10);
            cResult[14] = tmp15;
            cResult[15] = tmp16;
            cResult[16] = tmp21;
            tmp19 = tmp21;
          }
        }
        const items1 = [tmp4.header, tmp14, animatedStyle];
        cResult[8] = animatedStyle;
        cResult[9] = tmp4.header;
        cResult[10] = tmp14;
        cResult[11] = items1;
        tmp15 = items1;
      }
    }
  }
  const obj11 = { height: first, backgroundColor: token, mainScrollY: sharedValue, guildScrollY: sharedValue1 };
  cResult[1] = token;
  cResult[2] = sharedValue1;
  cResult[3] = first;
  cResult[4] = sharedValue;
  cResult[5] = obj11;
  tmp13 = obj11;
}) : (function ProfileCustomizationScrollAwayTabs(state) {
  let closure_1;
  let first;
  let items1;
  let items2;
  let obj6;
  state = state.state;
  first = undefined;
  closure_1 = undefined;
  const tmp = closure_8();
  [first, closure_1] = react.useState(0);
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = ReanimatedRexport;
  const sharedValue1 = obj3.useSharedValue(0);
  const activeIndex = state.activeIndex;
  const callback = react.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.height);
  }, []);
  const fn = function h() {
    let items;
    let result;
    const bound = Math.min(Math.max(activeIndex.get(), 0), 1);
    const obj = { transform: items };
    const obj2 = { translateY: -result + Math.min(Math.max(sharedValue1.get(), 0), first) * bound };
    result = Math.min(Math.max(sharedValue.get(), 0), first) * (1 - bound);
    items = [obj2];
    return obj;
  };
  fn.__closure = { activeIndex, mainScrollY: sharedValue, height: first, guildScrollY: sharedValue1 };
  fn.__workletHash = 11093326166862;
  fn.__initData = __initData2;
  let items = [first, token, sharedValue, sharedValue1];
  const obj4 = ReanimatedRexport;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const memo = react.useMemo(() => ({ height, backgroundColor: token, mainScrollY: sharedValue, guildScrollY: sharedValue1 }), items);
  const obj5 = { value: memo, children: metroImportDefault(View, obj6) };
  obj6 = { style: tmp.container, children: items2 };
  const Provider = ProfileCustomizationHeaderContextDefault.Provider;
  const obj7 = { style: items1, onLayout: callback, children: metroRequire(Tabs.Tabs, { state }) };
  items1 = [tmp.header, { backgroundColor: token }, animatedStyle];
  View = ReanimatedRexportDefault.View;
  items2 = [metroRequire(View, obj7), metroRequire(SegmentedControlPages.SegmentedControlPages, { state })];
  return metroRequire(Provider, obj5);
});
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationScrollAwayTabs.tsx");

export default tmp3;
