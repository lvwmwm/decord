// Module ID: 16571
// Function ID: 16572
// Name: VibegrationsPublishCtaCard
// Dependencies: [19, 21, 16481, 16523, 5445, 4832, 1115, 3715, 5447, 2]
// Exports: default

// Module 16571 (VibegrationsPublishCtaCard)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5445 */;
import components_Button_Button from "components/Button/Button" /* 5447 */;
import useVibegrationsPublishActionDefault from "useVibegrationsPublishAction" /* 16481 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishCtaCard.tsx");

export default function VibegrationsPublishCtaCard(projectId) {
  const tmp3 = useVibegrationsPublishActionDefault(projectId.projectId);
  closure_0 = tmp3;
  let tmp8Result4 = null;
  if (null != tmp3) {
    const status = tmp3.status;
    let state;
    if (status != null) {
      state = status.state;
    }
    tmp8Result4 = null;
    if ("unpublished" === state) {
      const obj2 = { variant: "heading-md/bold", color: "text-default", accessibilityLabel: null, children: null };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(tmp(3715).kV4lwa);
      const intl3 = util.intl;
      obj2.children = intl3.string(tmp(3715)["8njO1f"]);
      const items = [React3(Text_Text.Text, obj2), , , ];
      let tmp8Result = null;
      if (null != tmp3.guildName) {
        const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl = tmp11(1115).intl;
        const obj3 = { server: tmp3.guildName };
        obj.children = intl.formatToPlainString(tmp(3715).JH4Xt5, obj3);
        tmp8Result = tmp8(tmp11(4832).Text, obj);
      }
      items[1] = tmp8Result;
      let tmp8Result3 = null;
      if (null != tmp3.disabledReason) {
        const obj4 = { variant: "text-md/normal", color: "text-muted", children: tmp3.disabledReason };
        tmp8Result3 = tmp8(tmp11(4832).Text, obj4);
      }
      const obj5 = { children: null };
      const obj6 = { direction: "vertical", spacing: 8, children: null };
      items[2] = tmp8Result3;
      const obj8 = { direction: "horizontal", children: null };
      const obj15 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
      ({ label: obj7.text, publishing: obj7.loading, disabled: obj7.disabled } = tmp3);
      obj15.onPress = function onPress() {
        return closure_0.run("card");
      };
      obj8.children = React3(components_Button_Button.Button, obj15);
      items[3] = React3(Stack_Stack.Stack, obj8);
      obj6.children = items;
      obj5.children = React4(Stack_Stack.Stack, obj6);
      tmp8Result4 = tmp8(tmp(16523), obj5);
      const tmpResult = tmp(16523);
    }
  }
  return tmp8Result4;
};
