// Module ID: 18357
// Function ID: 18358
// Name: ConjureProjectEventLine
// Dependencies: [19, 21, 18350, 18346, 18358, 18324, 18360, 5385, 18362, 2]
// Exports: default

// Module 18357 (ConjureProjectEventLine)
import Text_Text from "Text/Text" /* 5385 */;
import useConjureRemixSettingsRequestDefault from "useConjureRemixSettingsRequest" /* 18324 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 18346 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 18350 */;
import useConjureProjectEventLineDefault from "useConjureProjectEventLine" /* 18358 */;
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
  let tmp8Result;
  ({ projectId, event } = arg0);
  const tmp3 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  const tmp4 = useConjureRemixSettingsRequestDefault(projectId, event);
  if ("voice_channel_pin" === event.type) {
    const obj2 = { projectId };
    tmp8Result = _false(tmp(18360), obj2);
  } else {
    const obj3 = { variant: "body-md/normal", color: "text-default", children: tmp3 };
    const items = [_false(Text_Text.Text, obj3), ];
    let tmp10Result = null;
    const tmp10 = _false;
    const tmp8 = hasOwnProperty;
    const tmp9 = React3;
    if (null != tmp4) {
      const obj = { projectId, request: tmp4, notifyAgent: false };
      tmp10Result = tmp10(tmp(18362), obj);
    }
    const obj4 = { children: items };
    items[1] = tmp10Result;
    tmp8Result = tmp8(tmp9, obj4);
  }
  return tmp8Result;
};
