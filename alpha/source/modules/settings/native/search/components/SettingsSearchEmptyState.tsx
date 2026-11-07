// Module ID: 16907
// Function ID: 16908
// Name: SettingsSearchEmptyState
// Dependencies: [19, 17, 21, 5140, 5149, 1113, 9147, 6159, 5751, 2]

// Module 16907 (SettingsSearchEmptyState)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5149 */;
import Text_Text from "Text/Text" /* 5751 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import NoResultsAlt from "NoResultsAlt" /* 9147 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
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
  const obj3 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl3.t.zihbmv) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [React3(Text, obj3), ];
  const obj4 = { variant: "body-xs/medium", color: "text-muted", children: intl2.string(intl3.t.XclvsB) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[1] = React3(Text2, obj4);
  items[1] = hasOwnProperty(Stack, obj2);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/settings/native/search/components/SettingsSearchEmptyState.tsx");

export default memoResult;
