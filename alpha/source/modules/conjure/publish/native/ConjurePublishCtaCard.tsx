// Module ID: 18474
// Function ID: 18475
// Name: ConjurePublishCtaCard
// Dependencies: [19, 21, 18124, 5810, 5392, 12176, 18292, 18475, 5385, 2]
// Exports: default

// Module 18474 (ConjurePublishCtaCard)
import components_Button_Button from "components/Button/Button" /* 5392 */;
import Stack_Stack from "Stack/Stack" /* 5810 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12176 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 18124 */;
import conjurePublishCard from "conjurePublishCard" /* 18292 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp;
const ConjureTipInlineCalloutDefault = tmp(18475);
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
      const Stack = tmp5(5810).Stack;
      const items = [_false(PublishCta, obj2), ];
      let tmp6Result = null;
      const tmp8 = React3;
      if (null != tmp3.failure) {
        const obj3 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.failure };
        tmp6Result = tmp6(tmp5(5385).Text, obj3);
      }
      const obj4 = { children: tmp8(Stack, obj5) };
      obj5 = { spacing: 12, children: items };
      items[1] = tmp6Result;
      tmp6Result2 = tmp6(tmpResult, obj4);
    }
  }
  return tmp6Result2;
};
