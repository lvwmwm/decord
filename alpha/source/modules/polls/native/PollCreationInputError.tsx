// Module ID: 11926
// Function ID: 11927
// Name: PollCreationInputError
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 4828, 1200, 5088, 2]

// Module 11926 (PollCreationInputError)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4828 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { flexDirection: "row", alignItems: "center", marginTop: -10 }, icon: obj2 };
obj2 = { alignSelf: "center", marginRight: 5, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PollCreationInputError(message) {
  let items1;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp8;
  const tmp = message;
  let tmp2 = dependencyMap;
  const obj = message(576);
  const cResult = obj.c(11);
  message = message.message;
  const tmp4 = closure_6();
  if (cResult[0] !== message) {
    const fn = function u() {
      const tmp2 = null != message && "" !== tmp;
      if (tmp2) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(message);
      }
    };
    const items = [message];
    cResult[0] = message;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[3] !== tmp4.icon) {
    size = { width: 16, height: 16, style: tmp4.icon };
    const tmp10 = closure_4(tmp(1200).WarningCircle, size);
    cResult[3] = tmp4.icon;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== message) {
    const obj2 = { variant: "text-xs/medium", color: "text-feedback-critical", children: message };
    const tmp13 = closure_4(tmp(5088).Text, obj2);
    cResult[5] = message;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === tmp4.container) {
    if (cResult[8] === tmp8) {
      let tmp14;
      if (cResult[9] === tmp11) {
        tmp14 = cResult[10];
      }
      return tmp14;
    }
  }
  const obj3 = { style: tmp4.container, children: items1 };
  items1 = [tmp8, tmp11];
  const tmp15 = closure_5(View, obj3);
  cResult[7] = tmp4.container;
  cResult[8] = tmp8;
  cResult[9] = tmp11;
  cResult[10] = tmp15;
  tmp14 = tmp15;
}) : (function PollCreationInputError(message) {
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
  items1 = [closure_4(message(1200).WarningCircle, size), closure_4(message(5088).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children: message })];
  return closure_5(View, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/polls/native/PollCreationInputError.tsx");

export default tmp3;
