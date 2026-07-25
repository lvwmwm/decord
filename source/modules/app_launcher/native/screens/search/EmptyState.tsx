// Module ID: 11219
// Function ID: 87317
// Name: EmptyState
// Dependencies: [31, 27, 33, 4131, 11162, 7955, 1212, 3844, 4127, 2]
// Exports: default

// Module 11219 (EmptyState)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ container: { position: "relative", justifyContent: "center", alignItems: "center" }, textContainer: { justifyContent: "center", width: "100%" }, text: { marginTop: 16, textAlign: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/search/EmptyState.tsx");

export default function EmptyState(showsGenericMessage) {
  let flag = showsGenericMessage.showsGenericMessage;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  let obj = flag(11162);
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(flag(7955).AppLauncherEmptyStateType.SEARCH_EMPTY, showsGenericMessage.query);
  const items = [flag];
  const effect = React.useEffect(() => {
    const intl = flag(outer1_1[6]).intl;
    const string = intl.string;
    const t = flag(outer1_1[6]).t;
    if (flag) {
      let stringResult = string(t.aOkFv8);
    } else {
      stringResult = string(t.LSNOYf);
    }
    const AccessibilityAnnouncer = flag(outer1_1[7]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(stringResult, "polite");
  }, items);
  obj = { style: tmp.container };
  obj = { style: tmp.textContainer };
  const obj1 = { style: tmp.text, variant: "text-sm/medium", color: "text-default" };
  let intl = flag(1212).intl;
  let string = intl.string;
  let t = flag(1212).t;
  if (flag) {
    let stringResult = string(t.aOkFv8);
  } else {
    stringResult = string(t.LSNOYf);
  }
  obj1.children = stringResult;
  obj.children = jsx(flag(4127).Text, { style: tmp.text, variant: "text-sm/medium", color: "text-default" });
  obj.children = <View style={tmp.textContainer} />;
  return <View style={tmp.textContainer} />;
};
