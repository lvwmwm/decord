// Module ID: 14477
// Function ID: 14478
// Name: CheckpointIntroScreen
// Dependencies: [32, 19, 17, 5307, 6377, 21, 575, 5306, 1630, 14478, 504, 1655, 5548, 14270, 1496, 14479, 14480, 14271, 1113, 3317, 2]
// Exports: default

// Module 14477 (CheckpointIntroScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
({ CHECKPOINT_CONTROL_SIZE: metroImportDefault, CHECKPOINT_INTRODUCTION_FADE_IN_DURATION_MS: metroImportAll, CHECKPOINT_INTRODUCTION_REVEAL_DURATION_MS: c9, CHECKPOINT_NAV_HEIGHT: c10 } = CheckpointConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, year: obj3, yearRow: obj4, globe: { width: 75, height: 56 }, descriptions: obj5, landscapeContent: { paddingLeft: "61%" }, landscapeContainer: { justifyContent: "center", paddingBottom: 0 } };
obj2 = { flexGrow: 1, justifyContent: "flex-end", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_32 };
let closure_14 = createStyles(obj);
let closure_15 = { code: "(function CheckpointIntroScreenTsx1(){let[CHECKPOINT_INTRODUCTION_FADE_IN_DURATION_MS,Easing,withTiming,isVisible,FADE_IN_OFFSET_Y]=this.__closure;const timing={duration:CHECKPOINT_INTRODUCTION_FADE_IN_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isVisible?1:0,timing),transform:[{translateY:withTiming(isVisible?0:FADE_IN_OFFSET_Y,timing)}]};})" };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointIntroScreen.tsx");

export default function CheckpointIntroScreen(onCharacterBottomInsetChange) {
  let c3;
  let closure_0;
  let intl2;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj4;
  let obj6;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let useReducedMotion;
  const f109417 = () => useReducedMotion.useReducedMotion;
  const _require = onCharacterBottomInsetChange.onCharacterBottomInsetChange;
  let landscapeContainer;
  let ref;
  _slicedToArray = undefined;
  const layout = onCharacterBottomInsetChange.layout;
  let tmp = closure_14();
  const rect = landscapeContainer(ref[8])();
  landscapeContainer = "MobileLandscape" === layout;
  const sum = rect.top + closure_10;
  const sum1 = rect.bottom + closure_7;
  const bound = Math.max(sum, sum1 + landscapeContainer(ref[6]).space.PX_16);
  ref = react.useRef(null);
  const tmp8 = landscapeContainer(ref[9])();
  let obj = require("get initialized");
  let items = [AccessibilityStore];
  [tmp11, c3] = react.useState(obj.useStateFromStores(items, f109417));
  _slicedToArray(react.useState(obj.useStateFromStores(items, f109417)), 2);
  const effect = react.useEffect(() => {
    const timeout = setTimeout(() => closure_1_3(true), closure_1_9);
    return () => clearTimeout(closure_0);
  }, []);
  const items1 = [closure_15, closure_8, , , , ];
  const useAnimatedStyle = require("module_1655").useAnimatedStyle;
  require("module_1655");
  items1[2] = require("module_1655").Easing;
  items1[3] = require("timing/timing").withTiming;
  items1[4] = tmp11;
  items1[5] = PX_12;
  let c0;
  let c1;
  let c2;
  _slicedToArray = undefined;
  let c4;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items1;
  class CheckpointIntroScreenTsx1 {
    constructor() {
      let items;
      const obj = { duration, easing: _undefined.out(_undefined.cubic) };
      let num = 0;
      if (c3) {
        num = 1;
      }
      let num2 = 0;
      const obj2 = { opacity: _undefined(num, obj), transform: items };
      if (!c3) {
        num2 = c4;
      }
      items = [{ translateY: _undefined(num2, obj) }];
      ({ translateY: _undefined(num2, obj) });
      return obj2;
    }
  }
  const items2 = [tmp15, tmp16, tmp17, tmp18, tmp19];
  CheckpointIntroScreenTsx1.__closure = items2;
  CheckpointIntroScreenTsx1.__workletHash = 8997086399243;
  CheckpointIntroScreenTsx1.__initData = tmp14;
  const animatedStyle = useAnimatedStyle(CheckpointIntroScreenTsx1);
  let tmp23 = landscapeContainer;
  const tmp2Result = landscapeContainer(ref[13]);
  if (landscapeContainer) {
    const items3 = [tmp.landscapeContent, ];
    let obj2 = { paddingTop: bound, paddingRight: rect.right + tmp2(tmp3[6]).space.PX_24, paddingBottom: bound };
    items3[1] = obj2;
    tmp23 = items3;
  }
  const obj3 = { contentContainerStyle: tmp23, children: closure_12(View, obj4) };
  const items4 = [tmp.container, ];
  if (landscapeContainer) {
    landscapeContainer = tmp.landscapeContainer;
  }
  obj4 = { style: items4, children: items7 };
  items4[1] = landscapeContainer;
  const obj5 = {
    ref,
    onLayout: function handleYearLayout() {
      const tmp = landscapeContainer;
      if (!tmp) {
        const current = ref.current;
        if (current != null) {
          current.measureInWindow((arg0, arg1) => {
            const obj = closure_0(ref[14]);
            closure_1_0(obj.getWindowDimensions().height - arg1);
          });
        }
      }
    },
    style: tmp.year,
    children: closure_12(View, obj6)
  };
  obj6 = { style: items5, children: items6 };
  items5 = [tmp.yearRow, animatedStyle];
  View = tmp2(tmp3[11]).View;
  items6 = [closure_11(tmp2(tmp3[15]), { value: "2026", size: 96, isStepHeading: true }), ];
  let tmp21Result = !tmp8;
  if (tmp21Result) {
    const obj7 = { style: tmp.globe };
    tmp21Result = tmp21(tmp2(tmp3[16]), obj7);
  }
  items6[1] = tmp21Result;
  items7 = [closure_11(View, obj5), ];
  const obj8 = { style: items8, children: items9 };
  items8 = [tmp.descriptions, animatedStyle];
  const View2 = tmp2(tmp3[11]).View;
  const tmp2Result4 = landscapeContainer(ref[17]);
  const intl = tmp9(tmp3[18]).intl;
  const string = intl.string;
  const tmp2Result5 = landscapeContainer(ref[19]);
  items9 = [, ];
  const obj9 = { variant: "heading-lg/medium", children: string(tmp8 ? tmp2Result5["7YmUVu"] : tmp2Result5["Fyr+NW"]) };
  items9[0] = closure_11(tmp2Result4, obj9);
  let tmp21Result2 = !tmp8;
  if (tmp21Result2) {
    const obj10 = { variant: "heading-lg/medium", children: intl2.string(landscapeContainer(ref[19])["2GRr6H"]) };
    const tmp2Result6 = landscapeContainer(ref[17]);
    intl2 = tmp9(tmp3[18]).intl;
    tmp21Result2 = tmp21(tmp2Result6, obj10);
  }
  items9[1] = tmp21Result2;
  items7[1] = closure_12(View2, obj8);
  return closure_11(tmp2Result, obj3);
};
