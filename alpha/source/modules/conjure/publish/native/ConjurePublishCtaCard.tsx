// Module ID: 12768
// Function ID: 12769
// Name: ConjurePublishCtaCard
// Dependencies: [19, 21, 12443, 6027, 5634, 12438, 12576, 12769, 5624, 12770, 2]
// Exports: default

// Module 12768 (ConjurePublishCtaCard)
import components_Button_Button from "components/Button/Button" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12438 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12443 */;
import conjurePublishCard from "conjurePublishCard" /* 12576 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 12769 */;
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
  let obj6;
  let projectId;
  let turnId;
  ({ projectId, turnId, cta } = arg0);
  const tmp3 = useConjurePublishActionDefault(projectId);
  let tmp6Result4 = null;
  if (null != tmp3) {
    tmp6Result4 = null;
    const obj = conjurePublishCard;
    if (obj.isConjurePublishCtaVisible(tmp3, cta)) {
      const obj2 = { projectId, publish: tmp3 };
      const tmpResult = ConjureTipInlineCalloutDefault;
      const Stack = tmp5(6027).Stack;
      const items = [_false(PublishCta, obj2), , ];
      let tmp6Result = null;
      const tmp8 = React3;
      if (null != tmp3.failure) {
        const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.failure };
        tmp6Result = tmp6(tmp5(5624).Text, obj3);
      }
      items[1] = tmp6Result;
      let tmp6Result3 = null;
      if (null != turnId) {
        const obj4 = { projectId, turnId, cta, status: tmp3.status };
        tmp6Result3 = tmp6(tmp(12770), obj4, turnId);
      }
      const obj5 = { children: tmp8(Stack, obj6) };
      obj6 = { spacing: 12, children: items };
      items[2] = tmp6Result3;
      tmp6Result4 = tmp6(tmpResult, obj5);
    }
  }
  return tmp6Result4;
};
