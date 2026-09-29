// Module ID: 15004
// Function ID: 15005
// Name: SettingsSearchEmptyState
// Dependencies: [19, 17, 21, 4788, 4499, 1115, 9880, 5216, 4784, 2]

// Module 15004 (SettingsSearchEmptyState)
import util from "util" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4499 */;
import Text_Text from "Text/Text" /* 4784 */;
import Stack_Stack from "Stack/Stack" /* 5216 */;
import NoResultsAlt from "NoResultsAlt" /* 9880 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4788);
let closure_6 = createStyles.createStyles({ container: { paddingTop: 24, justifyContent: "center", alignItems: "center" }, textContainer: { marginTop: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/search/components/SettingsSearchEmptyState.tsx");

export default noop.memo(function SettingsSearchEmptyState() {
  const tmp = closure_6();
  const effect = noop.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.zihbmv), "polite");
  }, []);
  const obj = { style: tmp.container, children: null };
  const items = [React4(NoResultsAlt.NoResultsAlt, { resizeMode: "contain" }), ];
  const obj2 = { style: tmp.textContainer, align: "center", justify: "center", children: null };
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = util.intl;
  obj3.children = intl.string(util.t.zihbmv);
  const items1 = [React4(Text_Text.Text, obj3), ];
  const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.XclvsB);
  items1[1] = React4(Text_Text.Text, obj4);
  obj2.children = items1;
  items[1] = hasOwnProperty(Stack_Stack.Stack, obj2);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
