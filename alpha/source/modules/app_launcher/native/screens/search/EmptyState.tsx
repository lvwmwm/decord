// Module ID: 12262
// Function ID: 12263
// Name: EmptyState
// Dependencies: [19, 17, 21, 5009, 12201, 11467, 1114, 5018, 5619, 2]
// Exports: default

// Module 12262 (EmptyState)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { position: "relative", justifyContent: "center", alignItems: "center" }, textContainer: { justifyContent: "center", width: "100%" }, text: { marginTop: 16, textAlign: "center" } });
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/EmptyState.tsx");

export default function EmptyState(showsGenericMessage) {
  let flag = showsGenericMessage.showsGenericMessage;
  const query = showsGenericMessage.query;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_5();
  const obj = flag(12201);
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(flag(11467).AppLauncherEmptyStateType.SEARCH_EMPTY, query);
  const items = [flag];
  const effect = react.useEffect(() => {
    let stringResult;
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    if (flag) {
      stringResult = string(t.aOkFv8);
    } else {
      stringResult = string(t.LSNOYf);
    }
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(stringResult, "polite");
  }, items);
  const Text = flag(5619).Text;
  let intl = flag(1114).intl;
  let string = intl.string;
  let t = flag(1114).t;
  if (flag) {
    let stringResult = string(t.aOkFv8);
  } else {
    stringResult = string(t.LSNOYf);
  }
  return <View style={tmp.container}>{null}</View>;
};
