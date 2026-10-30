// Module ID: 18654
// Function ID: 18655
// Name: ErrorScreen
// Dependencies: [19, 17, 21, 5009, 5602, 5018, 5619, 2]

// Module 18654 (ErrorScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5602 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center", height: "100%", display: "flex" }, text: { textAlign: "center", width: "75%" } });
const memoResult = react.memo(function ErrorScreen(text) {
  text = text.text;
  require = text;
  const tmp = closure_6();
  const items = [text];
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const effect = react.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(require, "polite");
  }, items);
  const items1 = [tmp.container, { paddingBottom: insets.bottom }];
  return <View style={items1}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/ErrorScreen.tsx");

export default memoResult;
