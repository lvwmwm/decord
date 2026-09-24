// Module ID: 12572
// Function ID: 12573
// Name: PollCreationInputError
// Dependencies: [19, 17, 21, 4829, 576, 4536, 1177, 4825, 2]
// Exports: default

// Module 12572 (PollCreationInputError)
import nativeDefault from "native" /* 576 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4536 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
const obj2 = { container: { flexDirection: "row", alignItems: "center", marginTop: -10 }, icon: { alignSelf: "center", marginRight: 5, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL } };
let closure_6 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/PollCreationInputError.tsx");

export default function PollCreationInputError(message) {
  message = message.message;
  const tmp = closure_6();
  const items = [message];
  const effect = noop.useEffect(() => {
    let tmp2 = null != message;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp);
    }
  }, items);
  const obj = { style: tmp.container, children: null };
  const size = { width: 16, height: 16, style: tmp.icon };
  const items1 = [closure_4(message(1177).WarningCircle, size), closure_4(message(4825).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children: message })];
  obj.children = items1;
  return closure_5(View, obj);
};
