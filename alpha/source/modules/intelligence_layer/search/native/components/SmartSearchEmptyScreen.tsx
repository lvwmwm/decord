// Module ID: 18959
// Function ID: 18960
// Name: SmartSearchEmptyScreen
// Dependencies: [19, 17, 21, 5141, 575, 5743, 5150, 1113, 18960, 5761, 4250, 2]

// Module 18959 (SmartSearchEmptyScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import _modDef4250 from "module_4250" /* 4250 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5150 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5743 */;
import Text_Text from "Text/Text" /* 5761 */;
import SuggestedSearchListDefault from "SuggestedSearchList" /* 18960 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
  const obj3 = { variant: "body-sm/semibold", color: "text-muted", accessibilityRole: "header", children: intl.string(_modDef4250["HX/WYf"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items2 = [hasOwnProperty(Text, obj3), ];
  const obj4 = { variant: "body-sm/semibold", color: "text-muted", accessibilityRole: "header", children: intl2.string(_modDef4250["0ySxbu"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items2[1] = hasOwnProperty(Text2, obj4);
  items1[1] = metroRequire(View, obj2);
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchEmptyScreen.tsx");

export default memoResult;
