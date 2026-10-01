// Module ID: 16453
// Function ID: 16454
// Name: IntelligenceSearchEmptyScreen
// Dependencies: [19, 17, 21, 4836, 576, 6402, 4541, 1115, 4832, 3877, 2]

// Module 16453 (IntelligenceSearchEmptyScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import _modDef3877 from "module_3877" /* 3877 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import Text_Text from "Text/Text" /* 4832 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
const memoResult = react.memo(() => {
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
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: intl.string(_modDef3877["0Vo35I"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [hasOwnProperty(Text, obj3), ];
  const obj4 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: intl2.string(_modDef3877.njrqqv) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[1] = hasOwnProperty(Text2, obj4);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/IntelligenceSearchEmptyScreen.tsx");

export default memoResult;
