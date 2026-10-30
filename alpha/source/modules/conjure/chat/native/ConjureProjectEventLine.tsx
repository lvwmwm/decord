// Module ID: 12613
// Function ID: 12614
// Name: ConjureProjectEventLine
// Dependencies: [19, 21, 12606, 12602, 12614, 12579, 12616, 5619, 12618, 2]
// Exports: default

// Module 12613 (ConjureProjectEventLine)
import Text_Text from "Text/Text" /* 5619 */;
import useConjureRemixSettingsRequestDefault from "useConjureRemixSettingsRequest" /* 12579 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12602 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12606 */;
import useConjureProjectEventLineDefault from "useConjureProjectEventLine" /* 12614 */;
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
    variant: "text-md/medium",
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
  let tmp8Result;
  ({ projectId, event } = arg0);
  const tmp3 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  const tmp4 = useConjureRemixSettingsRequestDefault(projectId, event);
  if ("voice_channel_pin" === event.type) {
    const obj2 = { projectId };
    tmp8Result = _false(tmp(12616), obj2);
  } else {
    const obj3 = { variant: "text-md/normal", color: "text-default", children: tmp3 };
    const items = [_false(Text_Text.Text, obj3), ];
    let tmp10Result = null;
    const tmp10 = _false;
    const tmp8 = hasOwnProperty;
    const tmp9 = React3;
    if (null != tmp4) {
      const obj = { projectId, request: tmp4, notifyAgent: false };
      tmp10Result = tmp10(tmp(12618), obj);
    }
    const obj4 = { children: items };
    items[1] = tmp10Result;
    tmp8Result = tmp8(tmp9, obj4);
  }
  return tmp8Result;
};
