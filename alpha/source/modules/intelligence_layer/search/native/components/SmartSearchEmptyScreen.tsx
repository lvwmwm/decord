// Module ID: 18649
// Function ID: 18650
// Name: SmartSearchEmptyScreen
// Dependencies: [19, 17, 21, 5009, 575, 5602, 5018, 1114, 18650, 5619, 4120, 2]

// Module 18649 (SmartSearchEmptyScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import _modDef4120 from "module_4120" /* 4120 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5602 */;
import Text_Text from "Text/Text" /* 5619 */;
import SuggestedSearchListDefault from "SuggestedSearchList" /* 18650 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
const memoResult = react.memo(function SmartSearchEmptyScreen(smartSearchQuery) {
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const tmp = closure_7();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const effect = react.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl3.intl;
    announce(intl.string(intl3.t.V6nAfF), "polite");
  }, []);
  const obj = { style: items, children: items1 };
  items = [tmp.container, { paddingBottom: insets.bottom }];
  items1 = [hasOwnProperty(SuggestedSearchListDefault, { smartSearchQuery, source: "error_screen" }), ];
  const obj2 = { style: tmp.copy, children: items2 };
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: intl.string(_modDef4120["HX/WYf"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items2 = [hasOwnProperty(Text, obj3), ];
  const obj4 = { variant: "text-sm/semibold", color: "text-muted", accessibilityRole: "header", children: intl2.string(_modDef4120["0ySxbu"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items2[1] = hasOwnProperty(Text2, obj4);
  items1[1] = metroRequire(View, obj2);
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchEmptyScreen.tsx");

export default memoResult;
