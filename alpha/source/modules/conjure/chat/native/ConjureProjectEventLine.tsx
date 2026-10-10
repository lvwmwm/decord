// Module ID: 17229
// Function ID: 17230
// Name: ConjureProjectEventLine
// Dependencies: [19, 21, 17140, 17137, 558, 576, 17230, 5088, 2]

// Module 17229 (ConjureProjectEventLine)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 17137 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 17140 */;
import useConjureProjectEventLineDefault from "useConjureProjectEventLine" /* 17230 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const Text_Text = tmp(5088);
function renderMention(arg0, arg1, arg2) {
  let closure_0 = arg0;
  ConjureSelectedMentionDefault;
  return <tmp key={arg2} label={"@" + arg1} variant="text-md/medium" onPress={function onPress() {
    const obj = ConjureMessageActionSheet;
    return obj.openMessageAuthorProfile(closure_0);
  }} />;
}
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectEventLine(arg0) {
  let event;
  let projectId;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  ({ projectId, event } = arg0);
  const tmp4 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  if (cResult[0] !== tmp4) {
    const tmp7 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: tmp4 });
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function ConjureProjectEventLine(arg0) {
  let event;
  let projectId;
  ({ projectId, event } = arg0);
  const children = useConjureProjectEventLineDefault(projectId, event, renderMention);
  return jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children });
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default tmp3;
