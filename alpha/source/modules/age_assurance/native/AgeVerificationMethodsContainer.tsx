// Module ID: 12440
// Function ID: 12441
// Name: AgeVerificationMethodsContainer
// Dependencies: [19, 6413, 7809, 21, 4913, 575, 7808, 6365, 6370, 5929, 7762, 1112, 7348, 5504, 3444, 6545, 5511, 7807, 7045, 7793, 2]
// Exports: AgeVerificationMethodsContainer

// Module 12440 (AgeVerificationMethodsContainer)
import nativeDefault from "native" /* 575 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6365 */;
import MetricEvents from "MetricEvents" /* 6370 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 6413 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7809 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const VerificationMethod = AgeVerificationConstants.VerificationMethod;
const SafetyHubLinks = SafetyHubConstants.SafetyHubLinks;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, errorContainer: obj3, noMethodsText: obj4, buttonGroup: { paddingVertical: 0 } };
obj2 = { marginTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_40, textAlign: "center" };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationMethodsContainer.tsx");

export function AgeVerificationMethodsContainer(ageVerificationMethods) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let obj11;
  let obj6;
  const prop = ageVerificationMethods.ageVerificationMethods;
  const modalSessionId = ageVerificationMethods.modalSessionId;
  const tmp = closure_8();
  let obj = prop(7808);
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [prop];
  const effect = react.useEffect(() => {
    let someResult;
    const obj = prop;
    if (prop != null) {
      someResult = obj.some((id) => id.id === constants.GOOGLE_WALLET);
    }
    if (someResult) {
      const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_METHOD_IMPRESSION };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      increment(obj2);
    }
  }, items);
  const Stack = prop(5929).Stack;
  let obj2 = { spacing: 16, style: tmp.content, children: null };
  const Stack2 = prop(5929).Stack;
  const obj3 = { type: "info", message: intl.string(prop(1112).t.El4aXl), role: "none" };
  const InlineNotice = prop(7762).InlineNotice;
  intl = prop(1112).intl;
  const items1 = [closure_6(InlineNotice, obj3), ];
  if (null != prop) {
    let mapped;
    if (0 !== prop.length) {
      mapped = prop.map((label) => {
        const obj = {
          label: label.title,
          subLabel: label.description,
          onPress() {
            return label.onClick(modalSessionId);
          },
          arrow: true
        };
        return closure_1_6(prop(dependencyMap[18]).TableRow, obj, label.id);
      });
    }
    const obj4 = { hasIcons: false, children: mapped };
    items1[1] = closure_6(tmp8, obj4);
    obj2.children = items1;
    const items2 = [closure_7(Stack2, obj2), ];
    let tmp7Result = isSuspendedUser;
    if (tmp7Result) {
      const obj5 = { variant: "body-xs/medium", children: intl4.format(modalSessionId(3444).htWh1G, obj6) };
      const Text2 = tmp2(5504).Text;
      intl4 = tmp2(1112).intl;
      obj6 = {
        handleOnHelpUrlHook() {
              const obj = modalSessionId(dependencyMap[19]);
              obj.openUrl(constants.LEARN_MORE_UU_APPEAL_LINK);
            }
      };
      tmp7Result = tmp7(Text2, obj5);
    }
    const obj7 = { spacing: 8, align: "center", children: items2 };
    items2[1] = tmp7Result;
    return closure_7(Stack, obj7);
  }
  const obj8 = { direction: "vertical", align: "center", spacing: 16, style: tmp.errorContainer, children: items3 };
  const Stack3 = tmp2(5929).Stack;
  const obj9 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.noMethodsText, children: intl2.string(modalSessionId(3444).cR6336) };
  const Text = tmp2(5504).Text;
  intl2 = tmp2(1112).intl;
  items3 = [closure_6(Text, obj9), ];
  const obj10 = { style: tmp.buttonGroup, children: closure_6(Button, obj11) };
  const ButtonGroup = tmp2(6545).ButtonGroup;
  obj11 = { variant: "primary", size: "lg", text: intl3.string(modalSessionId(3444).hDvmYP), onPress: prop(7807).getAgeVerificationMethods };
  Button = tmp2(5511).Button;
  intl3 = tmp2(1112).intl;
  items3[1] = closure_6(ButtonGroup, obj10);
  mapped = tmp6(Stack3, obj8);
}
