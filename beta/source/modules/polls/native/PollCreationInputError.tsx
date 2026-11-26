// Module ID: 13096
// Function ID: 13097
// Name: PollCreationInputError
// Dependencies: [19, 17, 21, 4913, 575, 4922, 1186, 5504, 2]
// Exports: default

// Module 13096 (PollCreationInputError)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4922 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { flexDirection: "row", alignItems: "center", marginTop: -10 }, icon: { alignSelf: "center", marginRight: 5, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL } };
({ alignSelf: "center", marginRight: 5, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL });
let closure_6 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/polls/native/PollCreationInputError.tsx");

export default function PollCreationInputError(message) {
  let items1;
  message = message.message;
  const tmp = closure_6();
  const items = [message];
  const effect = react.useEffect(() => {
    const tmp2 = null != message && "" !== tmp;
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(message);
    }
  }, items);
  size = { width: 16, height: 16, style: tmp.icon };
  const obj = { style: tmp.container, children: items1 };
  items1 = [closure_4(message(1186).WarningCircle, size), closure_4(message(5504).Text, { variant: "body-xs/medium", color: "text-feedback-critical", children: message })];
  return closure_5(View, obj);
};
