// Module ID: 13750
// Function ID: 13751
// Name: ConjurePublishCtaCard
// Dependencies: [19, 21, 13171, 6337, 5936, 13162, 13164, 13568, 13751, 5929, 13752, 2]
// Exports: default

// Module 13750 (ConjurePublishCtaCard)
import components_Button_Button from "components/Button/Button" /* 5936 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 13162 */;
import conjurePublishEval from "conjurePublishEval" /* 13164 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 13171 */;
import conjurePublishCard from "conjurePublishCard" /* 13568 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 13751 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
function PublishCta(publish) {
  let publishing;
  publish = publish.publish;
  let closure_0 = useConjureStartPublishDefault(publish.projectId, publish);
  const Stack = Stack_Stack.Stack;
  const obj = {
    text: publish.label,
    variant: "primary",
    size: "sm",
    loading: publishing,
    onPress() {
      return closure_0("card");
    }
  };
  publishing = publish.publishing;
  const Button = components_Button_Button.Button;
  if (publishing) {
    publishing = !publish.showsProgress;
  }
  const obj2 = { direction: "horizontal", children: _false(Button, obj) };
  return _false(Stack, obj2);
}
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default function ConjurePublishCtaCard(arg0) {
  let cta;
  let obj5;
  let projectId;
  let turnId;
  ({ projectId, turnId, cta } = arg0);
  const tmp3 = useConjurePublishActionDefault(projectId);
  conjurePublishEval;
  let tmp8Result4 = null;
  if (null != tmp3) {
    tmp8Result4 = null;
    const tmp4Result = conjurePublishCard;
    if (tmp4Result.isConjurePublishCtaVisible(tmp3, cta)) {
      const obj = { projectId, publish: tmp3 };
      const tmpResult = ConjureTipInlineCalloutDefault;
      const Stack = tmp4(6337).Stack;
      const items = [_false(PublishCta, obj), , ];
      let tmp8Result = null;
      const tmp10 = React3;
      if (null != tmp3.failure) {
        const obj2 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.failure };
        tmp8Result = tmp8(tmp4(5929).Text, obj2);
      }
      items[1] = tmp8Result;
      let tmp8Result3 = null;
      if (null != turnId) {
        tmp8Result3 = null;
        if (!tmp6) {
          const obj3 = { projectId, turnId, cta, status: tmp3.status, placement: "publish_card" };
          tmp8Result3 = tmp8(tmp(13752), obj3, turnId);
        }
      }
      const obj4 = { children: tmp10(Stack, obj5) };
      obj5 = { spacing: 12, children: items };
      items[2] = tmp8Result3;
      tmp8Result4 = tmp8(tmpResult, obj4);
    }
  }
  return tmp8Result4;
};
