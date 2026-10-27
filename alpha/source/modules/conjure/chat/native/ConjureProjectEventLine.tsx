// Module ID: 12361
// Function ID: 12362
// Name: ConjureProjectEventLine
// Dependencies: [19, 21, 12353, 12349, 558, 576, 12362, 12364, 5235, 12366, 2]

// Module 12361 (ConjureProjectEventLine)
import react2 from "react" /* 576 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12349 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12353 */;
import useConjureProjectEventLineDefault from "useConjureProjectEventLine" /* 12362 */;
import useConjureRemixSettingsRequestDefault from "useConjureRemixSettingsRequest" /* 12364 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let tmp;
let tmp4;
const Text_Text = tmp(5235);
const ConjureSettingsRequestCardDefault = tmp4(12366);
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
tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectEventLine(arg0) {
  let event;
  let items;
  let projectId;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  ({ projectId, event } = arg0);
  const tmp5 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  const tmp6 = useConjureRemixSettingsRequestDefault(projectId, event);
  if (cResult[0] !== tmp5) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: tmp5 };
    const tmp9 = _false(Text_Text.Text, obj2);
    cResult[0] = tmp5;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === projectId) {
    let tmp10;
    if (cResult[3] === tmp6) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      let tmp13;
      if (cResult[6] === tmp10) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
    const obj3 = { children: items };
    items = [tmp7, tmp10];
    const tmp16 = hasOwnProperty(React3, obj3);
    cResult[5] = tmp7;
    cResult[6] = tmp10;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  let tmp11 = null;
  if (null != tmp6) {
    const obj4 = { projectId, request: tmp6, notifyAgent: false };
    tmp11 = _false(ConjureSettingsRequestCardDefault, obj4);
  }
  cResult[2] = projectId;
  cResult[3] = tmp6;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : (function ConjureProjectEventLine(arg0) {
  let event;
  let projectId;
  ({ projectId, event } = arg0);
  const tmp3 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  const tmp4 = useConjureRemixSettingsRequestDefault(projectId, event);
  const children = [_false(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: tmp3 }), ];
  let tmp7Result = null;
  const tmp5 = hasOwnProperty;
  const tmp6 = React3;
  const tmp7 = _false;
  if (null != tmp4) {
    const obj = { projectId, request: tmp4, notifyAgent: false };
    tmp7Result = tmp7(ConjureSettingsRequestCardDefault, obj);
  }
  children[1] = tmp7Result;
  return tmp5(tmp6, { children });
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default tmp4;
