// Module ID: 14259
// Function ID: 14260
// Name: SettingsSearchEmptyState
// Dependencies: [19, 17, 21, 4836, 4541, 1115, 9041, 5279, 4832, 2]

// Module 14259 (SettingsSearchEmptyState)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import NoResultsAlt from "NoResultsAlt" /* 9041 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { paddingTop: 24, justifyContent: "center", alignItems: "center" }, textContainer: { marginTop: 24 } });
const memoResult = react.memo(function SettingsSearchEmptyState() {
  let intl;
  let intl2;
  let items;
  let items1;
  const tmp = closure_6();
  const effect = react.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl3.intl;
    announce(intl.string(intl3.t.zihbmv), "polite");
  }, []);
  const obj = { style: tmp.container, children: items };
  items = [React3(NoResultsAlt.NoResultsAlt, { resizeMode: "contain" }), ];
  const obj2 = { style: tmp.textContainer, align: "center", justify: "center", children: items1 };
  const Stack = Stack_Stack.Stack;
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl3.t.zihbmv) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [React3(Text, obj3), ];
  const obj4 = { variant: "text-xs/medium", color: "text-muted", children: intl2.string(intl3.t.XclvsB) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[1] = React3(Text2, obj4);
  items[1] = hasOwnProperty(Stack, obj2);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/settings/native/search/components/SettingsSearchEmptyState.tsx");

export default memoResult;
