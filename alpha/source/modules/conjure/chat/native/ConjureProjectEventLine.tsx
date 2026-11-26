// Module ID: 18701
// Function ID: 18702
// Name: ConjureProjectEventLine
// Dependencies: [19, 21, 18694, 18690, 18702, 18668, 18704, 5634, 18706, 2]
// Exports: default

// Module 18701 (ConjureProjectEventLine)
import Text_Text from "Text/Text" /* 5634 */;
import useConjureRemixSettingsRequestDefault from "useConjureRemixSettingsRequest" /* 18668 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 18690 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 18694 */;
import useConjureProjectEventLineDefault from "useConjureProjectEventLine" /* 18702 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
function renderMention(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let obj = {
    label: "@" + arg1,
    variant: "body-md/medium",
    onPress() {
      const obj = ConjureMessageActionSheet;
      return obj.openMessageAuthorProfile(closure_0);
    }
  };
  const tmp = ConjureSelectedMentionDefault;
  return closure_3(tmp, obj, arg2);
}
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default function ConjureProjectEventLine(arg0) {
  let event;
  let projectId;
  let tmp5Result;
  ({ projectId, event } = arg0);
  const tmp3 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  const tmp4 = useConjureRemixSettingsRequestDefault(projectId, event);
  if ("voice_channel_pin" === event.type) {
    const obj2 = { projectId };
    tmp5Result = _false(tmp(18704), obj2);
  } else {
    const obj = { variant: "body-md/normal", color: "text-default", children: tmp3 };
    const items = [_false(Text_Text.Text, obj), ];
    let tmp7Result = null;
    const tmp5 = hasOwnProperty;
    const tmp6 = React3;
    const tmp7 = _false;
    if (null != tmp4) {
      const obj3 = { projectId, request: tmp4, notifyAgent: false };
      tmp7Result = tmp7(tmp(18706), obj3);
    }
    const obj4 = { children: items };
    items[1] = tmp7Result;
    tmp5Result = tmp5(tmp6, obj4);
  }
  return tmp5Result;
};
