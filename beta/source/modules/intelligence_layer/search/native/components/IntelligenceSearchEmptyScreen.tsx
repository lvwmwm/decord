// Module ID: 16455
// Function ID: 16456
// Name: IntelligenceSearchEmptyScreen
// Dependencies: [19, 17, 21, 4837, 588, 558, 576, 6399, 4545, 1127, 4833, 3880, 2]

// Module 16455 (IntelligenceSearchEmptyScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl3 from "intl" /* 1127 */;
import _modDef3880 from "module_3880" /* 3880 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4545 */;
import Text_Text from "Text/Text" /* 4833 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6399 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, copy: obj3 };
obj2 = { flex: 1, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  let items1;
  let tmp10;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(15);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function b() {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl3.intl;
      announce(intl.string(intl3.t.V6nAfF), "polite");
    };
    const items = [];
    cResult[1] = fn;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = react.useEffect(tmp7, tmp8);
  if (cResult[3] !== insets.bottom) {
    const obj3 = { paddingBottom: insets.bottom };
    cResult[3] = insets.bottom;
    cResult[4] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp4.container) {
    let tmp11;
    let tmp12;
    let tmp15;
    let tmp18;
    if (cResult[6] === tmp10) {
      tmp11 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: intl.string(_modDef3880["0Vo35I"]) };
      const Text = tmp(4833).Text;
      intl = tmp(1127).intl;
      const tmp14 = hasOwnProperty(Text, obj4);
      cResult[8] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: intl2.string(_modDef3880.njrqqv) };
      const Text2 = tmp(4833).Text;
      intl2 = tmp(1127).intl;
      const tmp17 = hasOwnProperty(Text2, obj5);
      cResult[9] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] !== tmp4.copy) {
      const obj6 = { style: tmp4.copy, children: items1 };
      items1 = [tmp12, tmp15];
      const tmp21 = metroRequire(View, obj6);
      cResult[10] = tmp4.copy;
      cResult[11] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp11) {
      let tmp22;
      if (cResult[13] === tmp18) {
        tmp22 = cResult[14];
      }
      return tmp22;
    }
    const obj7 = { style: tmp11, children: tmp18 };
    const tmp25 = hasOwnProperty(View, obj7);
    cResult[12] = tmp11;
    cResult[13] = tmp18;
    cResult[14] = tmp25;
    tmp22 = tmp25;
  }
  const items2 = [tmp4.container, tmp10];
  cResult[5] = tmp4.container;
  cResult[6] = tmp10;
  cResult[7] = items2;
  tmp11 = items2;
}) : (() => {
  let intl;
  let intl2;
  let items;
  let items1;
  let obj2;
  const tmp = closure_7();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const effect = react.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl3.intl;
    announce(intl.string(intl3.t.V6nAfF), "polite");
  }, []);
  const obj = { style: items, children: metroRequire(View, obj2) };
  items = [tmp.container, { paddingBottom: insets.bottom }];
  obj2 = { style: tmp.copy, children: items1 };
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: intl.string(_modDef3880["0Vo35I"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [hasOwnProperty(Text, obj3), ];
  const obj4 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: intl2.string(_modDef3880.njrqqv) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[1] = hasOwnProperty(Text2, obj4);
  return hasOwnProperty(View, obj);
}));
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/IntelligenceSearchEmptyScreen.tsx");

export default memoResult;
