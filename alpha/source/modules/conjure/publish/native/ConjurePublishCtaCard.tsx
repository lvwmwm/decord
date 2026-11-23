// Module ID: 18603
// Function ID: 18604
// Name: ConjurePublishCtaCard
// Dependencies: [19, 21, 18253, 5929, 5511, 12305, 18421, 18604, 5504, 2]
// Exports: default

// Module 18603 (ConjurePublishCtaCard)
import components_Button_Button from "components/Button/Button" /* 5511 */;
import Stack_Stack from "Stack/Stack" /* 5929 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12305 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 18253 */;
import conjurePublishCard from "conjurePublishCard" /* 18421 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp;
const ConjureTipInlineCalloutDefault = tmp(18604);
function PublishCta(publish) {
  let tmp2;
  publish = publish.publish;
  let closure_0 = useConjureStartPublishDefault(publish.projectId, publish);
  const Stack = Stack_Stack.Stack;
  const obj = {
    text: publish.label,
    variant: "primary",
    size: "sm",
    loading: tmp2,
    onPress() {
      return closure_0("card");
    }
  };
  tmp2 = "publishing" === publish.state;
  const Button = components_Button_Button.Button;
  if (tmp2) {
    tmp2 = !publish.showsProgress;
  }
  const obj2 = { direction: "horizontal", children: _false(Button, obj) };
  return _false(Stack, obj2);
}
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default function ConjurePublishCtaCard(projectId) {
  let obj5;
  projectId = projectId.projectId;
  const cta = projectId.cta;
  const tmp3 = useConjurePublishActionDefault(projectId);
  let tmp6Result2 = null;
  if (null != tmp3) {
    tmp6Result2 = null;
    const obj = conjurePublishCard;
    if (obj.isConjurePublishCtaVisible(tmp3, cta)) {
      const obj2 = { projectId, publish: tmp3 };
      const tmpResult = ConjureTipInlineCalloutDefault;
      const Stack = tmp5(5929).Stack;
      const items = [_false(PublishCta, obj2), ];
      let tmp6Result = null;
      const tmp8 = React3;
      if (null != tmp3.failure) {
        const obj3 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.failure };
        tmp6Result = tmp6(tmp5(5504).Text, obj3);
      }
      const obj4 = { children: tmp8(Stack, obj5) };
      obj5 = { spacing: 12, children: items };
      items[1] = tmp6Result;
      tmp6Result2 = tmp6(tmpResult, obj4);
    }
  }
  return tmp6Result2;
};
