// Module ID: 12858
// Function ID: 12859
// Name: CheckpointScreen
// Dependencies: [19, 17, 6396, 21, 575, 5043, 1495, 1629, 1379, 1654, 1643, 2]
// Exports: default, useCheckpointScreenContentHeight, useCheckpointScreenFrame

// Module 12858 (CheckpointScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import createStyles from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp4;
let tmp5;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ CHECKPOINT_CONTENT_MAX_HEIGHT: metroRequire, CHECKPOINT_CONTENT_MAX_WIDTH: metroImportDefault, CHECKPOINT_NAV_HEIGHT: metroImportAll } = CheckpointConstants);
const jsx = Fragment.jsx;
const PX_24 = nativeDefault.space.PX_24;
const PX_16 = nativeDefault.space.PX_16;
let closure_12 = createStyles.createStyles({ container: { height: "100%", width: "100%" }, scroll: { width: "100%" }, scrollContent: { flexGrow: 1 }, centered: { justifyContent: "center" } });
let items = [{ code: "(function getKeyboardShift_CheckpointScreenTsx1(containerBottom,windowHeight,keyboardHeight){let[KEYBOARD_GAP]=this.__closure;const overlap=containerBottom+KEYBOARD_GAP-(windowHeight-keyboardHeight);return Math.min(keyboardHeight,Math.max(0,overlap));})" }, PX_16];
let c0;
[tmp4, tmp5] = items;
function getKeyboardShift(arg0, arg1, arg2) {
  return Math.min(arg2, Math.max(0, arg0 + c0 - (arg1 - arg2)));
}
let items1 = [tmp5];
getKeyboardShift.__closure = items1;
getKeyboardShift.__workletHash = 1986039801391;
getKeyboardShift.__initData = tmp4;
let closure_14 = { code: "(function CheckpointScreenTsx2(e){let[containerRef,shift,measure,containerBottom]=this.__closure;if(containerRef==null||e.height===0||shift.get()!==0)return;const frame=measure(containerRef);containerBottom.set(frame!=null?frame.pageY+frame.height:0);})" };
let closure_15 = { code: "(function CheckpointScreenTsx3(e){let[containerRef,shift,getKeyboardShift,containerBottom,windowHeight]=this.__closure;if(containerRef==null)return;shift.set(getKeyboardShift(containerBottom.get(),windowHeight,e.height));})" };
let closure_16 = { code: "(function CheckpointScreenTsx4(e){let[containerRef,shift,getKeyboardShift,containerBottom,windowHeight]=this.__closure;if(containerRef==null)return;shift.set(getKeyboardShift(containerBottom.get(),windowHeight,e.height));})" };
let closure_17 = { code: "(function CheckpointScreenTsx5(){let[isEnabled,shift]=this.__closure;return{transform:[{translateY:isEnabled?-shift.get():0}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointScreen.tsx");

export default function CheckpointScreen(keyboardInput) {
  let bottomOffset;
  let centered;
  let children;
  let closure_1;
  let items10;
  let items11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp35Result;
  ({ children, centered } = keyboardInput);
  if (centered === undefined) {
    centered = false;
  }
  keyboardInput = keyboardInput.keyboardInput;
  importDefault = undefined;
  let width;
  const contentContainerStyle = keyboardInput.contentContainerStyle;
  const tmp = closure_12();
  const tmp4 = require("useSafeAreaInsets")();
  const tmp2 = importDefault;
  importDefault = tmp4;
  size = require("useWindowDimensions")({ ignoreKeyboard: true });
  width = size.width;
  const height = size.height;
  let tmp5 = centered;
  let obj = centered(width[8]);
  let tmp6;
  if (obj.isAndroid()) {
    let containerRef;
    if (keyboardInput != null) {
      containerRef = keyboardInput.containerRef;
    }
    tmp6 = containerRef;
  }
  const tmp5Result = tmp5(width[9]);
  const sharedValue = tmp5Result.useSharedValue(0);
  const tmp5Result5 = tmp5(width[9]);
  const sharedValue1 = tmp5Result5.useSharedValue(0);
  let items = [closure_14, tmp6, sharedValue1, , ];
  const useKeyboardHandler = tmp5(width[10]).useKeyboardHandler;
  items[3] = tmp5(width[9]).measure;
  items[4] = sharedValue;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  const obj2 = { onStart: CheckpointScreenTsx2, onMove: CheckpointScreenTsx3, onEnd: CheckpointScreenTsx4 };
  class CheckpointScreenTsx2 {
    constructor(height) {
      if (null != c0) {
        if (0 !== height.height) {
          if (0 === _undefined.get()) {
            const tmp5 = _undefined2(tmp);
            let num2 = 0;
            set = _undefined3.set;
            if (null != tmp5) {
              num2 = tmp5.pageY + tmp5.height;
            }
            const result = set(num2);
          }
        }
      }
    }
  }
  const items1 = [tmp13, tmp14, tmp15, tmp16];
  CheckpointScreenTsx2.__closure = items1;
  CheckpointScreenTsx2.__workletHash = 5808424766174;
  CheckpointScreenTsx2.__initData = tmp12;
  const items2 = [closure_15, tmp6, sharedValue1, getKeyboardShift, sharedValue, height];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items2;
  class CheckpointScreenTsx3 {
    constructor(height) {
      if (null != c0) {
        const result = _undefined.set(_undefined2(_undefined3.get(), c4, height.height));
      }
    }
  }
  const items3 = [tmp18, tmp19, tmp20, tmp21, tmp22];
  CheckpointScreenTsx3.__closure = items3;
  CheckpointScreenTsx3.__workletHash = 15804020579446;
  CheckpointScreenTsx3.__initData = tmp17;
  const items4 = [closure_16, tmp6, sharedValue1, getKeyboardShift, sharedValue, height];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items4;
  class CheckpointScreenTsx4 {
    constructor(height) {
      if (null != c0) {
        const result = _undefined.set(_undefined2(_undefined3.get(), c4, height.height));
      }
    }
  }
  const items5 = [tmp24, tmp25, tmp26, tmp27, tmp28];
  CheckpointScreenTsx4.__closure = items5;
  CheckpointScreenTsx4.__workletHash = 15114287885457;
  CheckpointScreenTsx4.__initData = tmp23;
  const items6 = [tmp6, height];
  useKeyboardHandler(obj2, items6);
  const items7 = [closure_17, null != tmp6, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  [tmp30, tmp31, tmp32] = items7;
  const tmp5Result7 = tmp5(width[9]);
  class CheckpointScreenTsx5 {
    constructor() {
      let items;
      let num = 0;
      if (c0) {
        num = -_undefined.get();
      }
      const obj = { transform: items };
      items = [{ translateY: num }];
      return obj;
    }
  }
  const items8 = [tmp31, tmp32];
  CheckpointScreenTsx5.__closure = items8;
  CheckpointScreenTsx5.__workletHash = 13320023813122;
  CheckpointScreenTsx5.__initData = tmp30;
  const items9 = [tmp4, centered, width, height];
  const animatedStyle = tmp5Result7.useAnimatedStyle(CheckpointScreenTsx5);
  let str = "never";
  const memo = height.useMemo(() => {
    let bottom;
    let num5;
    let num6;
    let top;
    let num = 0;
    if (!centered) {
      const _Math = Math;
      num = Math.max(0, (width - closure_1.left - closure_1.right - 2 * PX_24 - metroImportDefault) / 2);
    }
    let num3 = 0;
    if (!centered) {
      const _Math2 = Math;
      num3 = Math.max(0, (height - closure_1.top - metroImportAll - closure_1.bottom - PX_24 - metroRequire) / 2);
    }
    const obj = { paddingLeft: closure_1.left + PX_24 + num, paddingRight: closure_1.right + PX_24 + num, paddingBottom: bottom + num5 + num3, paddingTop: top + num6 + num3 };
    num5 = 0;
    bottom = closure_1.bottom;
    const tmp13 = closure_1;
    if (!centered) {
      num5 = PX_24;
    }
    num6 = 0;
    top = tmp13.top;
    if (!centered) {
      num6 = metroImportAll;
    }
    return obj;
  }, items9);
  if (null != keyboardInput) {
    str = "handled";
  }
  const obj3 = { keyboardShouldPersistTaps: str, style: tmp.scroll, contentContainerStyle: items10, showsVerticalScrollIndicator: false };
  items10 = [tmp.scrollContent, , , ];
  if (centered) {
    centered = tmp.centered;
  }
  items10[1] = centered;
  items10[2] = memo;
  items10[3] = contentContainerStyle;
  const tmp5Result8 = tmp5(width[8]);
  if (tmp5Result8.isAndroid()) {
    const obj5 = { style: items11, children: null };
    items11 = [tmp.container, animatedStyle];
    let str2 = "none";
    const View = tmp2(tmp3[9]).View;
    if (null != keyboardInput) {
      str2 = "on-drag";
    }
    const merged = Object.assign(obj3);
    tmp35Result = tmp35(View, obj5);
  } else {
    const obj7 = { enabled: null != keyboardInput, bottomOffset, children };
    bottomOffset = undefined;
    const KeyboardAwareScrollView = tmp5(tmp3[10]).KeyboardAwareScrollView;
    if (keyboardInput != null) {
      bottomOffset = keyboardInput.bottomOffset;
    }
    const merged1 = Object.assign(obj3);
    tmp35Result = tmp35(KeyboardAwareScrollView, obj7);
  }
  return <tmp36 style={tmp.container}>{tmp35Result}</tmp36>;
};
export function useCheckpointScreenContentHeight(arg0) {
  let diff;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const rect = useSafeAreaInsetsDefault();
  if (flag) {
    diff = height - rect.top - rect.bottom;
  } else {
    const _Math = Math;
    diff = Math.min(height - rect.top - metroImportAll - rect.bottom - PX_24, metroRequire);
  }
  return diff;
}
export function useCheckpointScreenFrame() {
  let height;
  let width;
  ({ height, width } = useWindowDimensionsDefault({ ignoreKeyboard: true }));
  useWindowDimensionsDefault({ ignoreKeyboard: true });
  const rect = useSafeAreaInsetsDefault();
  size = { width: Math.min(width, metroImportDefault + 2 * PX_24), height: Math.min(height, height - (height - rect.top - metroImportAll - rect.bottom - PX_24) + metroRequire) };
  return size;
}
