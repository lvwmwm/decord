// Module ID: 7711
// Function ID: 7712
// Name: AgeVerificationMethodsContainer
// Dependencies: [19, 5917, 7512, 21, 5092, 587, 558, 576, 7511, 5729, 5734, 7567, 1126, 5377, 5088, 3120, 5958, 5379, 7510, 6179, 6264, 7497, 2]

// Module 7711 (AgeVerificationMethodsContainer)
import nativeDefault from "native" /* 587 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5729 */;
import MetricEvents from "MetricEvents" /* 5734 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 5917 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7512 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AgeVerificationMethodsContainer(ageVerificationMethods) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj6;
  let prop;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = prop(576);
  const cResult = obj.c(20);
  prop = ageVerificationMethods.ageVerificationMethods;
  const modalSessionId = ageVerificationMethods.modalSessionId;
  const tmp4 = closure_8();
  let obj2 = prop(7511);
  const isSuspendedUser = obj2.useIsSuspendedUser();
  if (cResult[0] !== prop) {
    const fn = function h() {
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
    };
    const items = [prop];
    cResult[0] = prop;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { type: "info", message: intl.string(prop(1126).t.El4aXl), role: "static" };
    const InlineNotice = tmp(7567).InlineNotice;
    intl = tmp(1126).intl;
    const tmp11 = closure_6(InlineNotice, obj3);
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === prop) {
    if (cResult[5] === modalSessionId) {
      if (cResult[6] === tmp4.buttonGroup) {
        if (cResult[7] === tmp4.errorContainer) {
          let tmp14;
          if (cResult[8] === tmp4.noMethodsText) {
            tmp12 = cResult[9];
          }
          if (cResult[10] !== tmp12) {
            const obj4 = { hasIcons: false, children: tmp12 };
            const tmp16 = closure_6(prop(6264).TableRowGroup, obj4);
            cResult[10] = tmp12;
            cResult[11] = tmp16;
            tmp14 = tmp16;
          } else {
            tmp14 = cResult[11];
          }
          if (cResult[12] === tmp4.content) {
            let tmp17;
            let tmp20;
            if (cResult[13] === tmp14) {
              tmp17 = cResult[14];
            }
            if (cResult[15] !== isSuspendedUser) {
              let tmp21 = isSuspendedUser;
              if (tmp21) {
                const obj5 = { variant: "text-xs/medium", children: intl4.format(modalSessionId(3120).htWh1G, obj6) };
                const Text2 = tmp(5088).Text;
                intl4 = tmp(1126).intl;
                obj6 = {
                  handleOnHelpUrlHook() {
                                  const obj = modalSessionId(dependencyMap[21]);
                                  obj.openUrl(constants.LEARN_MORE_UU_APPEAL_LINK);
                                }
                };
                tmp21 = closure_6(Text2, obj5);
              }
              cResult[15] = isSuspendedUser;
              cResult[16] = tmp21;
              tmp20 = tmp21;
            } else {
              tmp20 = cResult[16];
            }
            if (cResult[17] === tmp17) {
              let tmp24;
              if (cResult[18] === tmp20) {
                tmp24 = cResult[19];
              }
              return tmp24;
            }
            const obj7 = { spacing: 8, align: "center", children: items1 };
            items1 = [tmp17, tmp20];
            const tmp26 = closure_7(prop(5377).Stack, obj7);
            cResult[17] = tmp17;
            cResult[18] = tmp20;
            cResult[19] = tmp26;
            tmp24 = tmp26;
          }
          const obj8 = { spacing: 16, style: tmp4.content, children: items2 };
          items2 = [tmp9, tmp14];
          const tmp19 = closure_7(prop(5377).Stack, obj8);
          cResult[12] = tmp4.content;
          cResult[13] = tmp14;
          cResult[14] = tmp19;
          tmp17 = tmp19;
        }
      }
    }
  }
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
        return closure_1_6(prop(dependencyMap[19]).TableRow, obj, label.id);
      });
    }
    cResult[4] = prop;
    cResult[5] = modalSessionId;
    cResult[6] = tmp4.buttonGroup;
    cResult[7] = tmp4.errorContainer;
    cResult[8] = tmp4.noMethodsText;
    cResult[9] = mapped;
    tmp12 = mapped;
  }
  const obj9 = { direction: "vertical", align: "center", spacing: 16, style: tmp4.errorContainer, children: items3 };
  const Stack = tmp(5377).Stack;
  const obj10 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.noMethodsText, children: intl2.string(modalSessionId(3120).cR6336) };
  const Text = tmp(5088).Text;
  intl2 = tmp(1126).intl;
  items3 = [closure_6(Text, obj10), ];
  const obj11 = { style: tmp4.buttonGroup, children: closure_6(Button, obj12) };
  const ButtonGroup = tmp(5958).ButtonGroup;
  obj12 = { variant: "primary", size: "lg", text: intl3.string(modalSessionId(3120).hDvmYP), onPress: prop(7510).getAgeVerificationMethods };
  Button = tmp(5379).Button;
  intl3 = tmp(1126).intl;
  items3[1] = closure_6(ButtonGroup, obj11);
  mapped = closure_7(Stack, obj9);
}) : (function AgeVerificationMethodsContainer(ageVerificationMethods) {
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
  let obj = prop(7511);
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
  const Stack = prop(5377).Stack;
  let obj2 = { spacing: 16, style: tmp.content, children: null };
  const Stack2 = prop(5377).Stack;
  const obj3 = { type: "info", message: intl.string(prop(1126).t.El4aXl), role: "static" };
  const InlineNotice = prop(7567).InlineNotice;
  intl = prop(1126).intl;
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
        return closure_1_6(prop(dependencyMap[19]).TableRow, obj, label.id);
      });
    }
    const obj4 = { hasIcons: false, children: mapped };
    items1[1] = closure_6(tmp8, obj4);
    obj2.children = items1;
    const items2 = [closure_7(Stack2, obj2), ];
    let tmp7Result = isSuspendedUser;
    if (tmp7Result) {
      const obj5 = { variant: "text-xs/medium", children: intl4.format(modalSessionId(3120).htWh1G, obj6) };
      const Text2 = tmp2(5088).Text;
      intl4 = tmp2(1126).intl;
      obj6 = {
        handleOnHelpUrlHook() {
              const obj = modalSessionId(dependencyMap[21]);
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
  const Stack3 = tmp2(5377).Stack;
  const obj9 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.noMethodsText, children: intl2.string(modalSessionId(3120).cR6336) };
  const Text = tmp2(5088).Text;
  intl2 = tmp2(1126).intl;
  items3 = [closure_6(Text, obj9), ];
  const obj10 = { style: tmp.buttonGroup, children: closure_6(Button, obj11) };
  const ButtonGroup = tmp2(5958).ButtonGroup;
  obj11 = { variant: "primary", size: "lg", text: intl3.string(modalSessionId(3120).hDvmYP), onPress: prop(7510).getAgeVerificationMethods };
  Button = tmp2(5379).Button;
  intl3 = tmp2(1126).intl;
  items3[1] = closure_6(ButtonGroup, obj10);
  mapped = tmp6(Stack3, obj8);
});
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationMethodsContainer.tsx");

export const AgeVerificationMethodsContainer = tmp4;
