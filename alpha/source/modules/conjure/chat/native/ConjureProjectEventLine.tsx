// Module ID: 12406
// Function ID: 12407
// Name: ConjureProjectEventLine
// Dependencies: [19, 21, 12398, 12394, 558, 576, 12407, 12409, 12411, 5270, 12413, 2]

// Module 12406 (ConjureProjectEventLine)
import react2 from "react" /* 576 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12394 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12398 */;
import useConjureProjectEventLineDefault from "useConjureProjectEventLine" /* 12407 */;
import useConjureRemixSettingsRequestDefault from "useConjureRemixSettingsRequest" /* 12409 */;
import ConjureVoiceChannelPinCardDefault from "ConjureVoiceChannelPinCard" /* 12411 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let tmp;
const Text_Text = tmp(5270);
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectEventLine(arg0) {
  let event;
  let items;
  let projectId;
  let tmp13;
  const obj = react2;
  const cResult = obj.c(10);
  ({ projectId, event } = arg0);
  const tmp5 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  const tmp6 = useConjureRemixSettingsRequestDefault(projectId, event);
  if ("voice_channel_pin" === event.type) {
    let tmp17;
    if (cResult[0] !== projectId) {
      const obj2 = { projectId };
      const tmp19 = _false(ConjureVoiceChannelPinCardDefault, obj2);
      cResult[0] = projectId;
      cResult[1] = tmp19;
      tmp17 = tmp19;
    } else {
      tmp17 = cResult[1];
    }
    tmp13 = tmp17;
  } else {
    let tmp7;
    if (cResult[2] !== tmp5) {
      const obj3 = { variant: "text-md/normal", color: "text-default", children: tmp5 };
      const tmp9 = _false(Text_Text.Text, obj3);
      cResult[2] = tmp5;
      cResult[3] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === projectId) {
      let tmp10;
      if (cResult[5] === tmp6) {
        tmp10 = cResult[6];
      }
      if (cResult[7] === tmp7) {
        if (cResult[8] === tmp10) {
          tmp13 = cResult[9];
        }
      }
      const obj4 = { children: items };
      items = [tmp7, tmp10];
      const tmp16 = hasOwnProperty(React3, obj4);
      cResult[7] = tmp7;
      cResult[8] = tmp10;
      cResult[9] = tmp16;
      tmp13 = tmp16;
    }
    let tmp11 = null;
    if (null != tmp6) {
      const obj5 = { projectId, request: tmp6, notifyAgent: false };
      tmp11 = _false(tmp4(12413), obj5);
    }
    cResult[4] = projectId;
    cResult[5] = tmp6;
    cResult[6] = tmp11;
    tmp10 = tmp11;
  }
  return tmp13;
}) : (function ConjureProjectEventLine(arg0) {
  let event;
  let projectId;
  let tmp8Result;
  ({ projectId, event } = arg0);
  const tmp3 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  const tmp4 = useConjureRemixSettingsRequestDefault(projectId, event);
  if ("voice_channel_pin" === event.type) {
    const obj2 = { projectId };
    tmp8Result = _false(tmp(12411), obj2);
  } else {
    const obj3 = { variant: "text-md/normal", color: "text-default", children: tmp3 };
    const items = [_false(Text_Text.Text, obj3), ];
    let tmp10Result = null;
    const tmp10 = _false;
    const tmp8 = hasOwnProperty;
    const tmp9 = React3;
    if (null != tmp4) {
      const obj = { projectId, request: tmp4, notifyAgent: false };
      tmp10Result = tmp10(tmp(12413), obj);
    }
    const obj4 = { children: items };
    items[1] = tmp10Result;
    tmp8Result = tmp8(tmp9, obj4);
  }
  return tmp8Result;
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default tmp4;
