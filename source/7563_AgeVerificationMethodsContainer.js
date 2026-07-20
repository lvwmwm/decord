// Module ID: 7563
// Function ID: 60529
// Name: AgeVerificationMethodsContainer
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: AgeVerificationMethodsContainer

// Module 7563 (AgeVerificationMethodsContainer)
import closure_3 from "result";
import { VerificationMethod } from "result";
import { SafetyHubLinks } from "result";
import result from "result";
import result from "result";

({ jsx: closure_6, jsxs: closure_7 } = result);
result = {};
result = { marginTop: require("result").space.PX_8 };
result.content = result;
result.errorContainer = { marginTop: require("result").space.PX_24, marginBottom: require("result").space.PX_24 };
const obj1 = { marginTop: require("result").space.PX_24, marginBottom: require("result").space.PX_24 };
result.noMethodsText = { paddingHorizontal: require("result").space.PX_40, textAlign: "center" };
result.buttonGroup = { paddingVertical: 0 };
result = result.createStyles(result);
const obj2 = { paddingHorizontal: require("result").space.PX_40, textAlign: "center" };
result = arg1(dependencyMap[20]).fileFinishedImporting("modules/age_assurance/native/AgeVerificationMethodsContainer.tsx");

export const AgeVerificationMethodsContainer = function AgeVerificationMethodsContainer(ageVerificationMethods) {
  const prop = ageVerificationMethods.ageVerificationMethods;
  const arg1 = prop;
  const importDefault = ageVerificationMethods.modalSessionId;
  const tmp = result();
  let obj = arg1(dependencyMap[6]);
  let isSuspendedUser = obj.useIsSuspendedUser();
  const items = [prop];
  const effect = React.useEffect(() => {
    let someResult = null != prop;
    if (someResult) {
      someResult = prop.some((id) => id.id === constants.GOOGLE_WALLET);
    }
    if (someResult) {
      let obj = modalSessionId(closure_2[7]);
      obj = { name: prop(closure_2[8]).MetricEvents.GOOGLE_WALLET_METHOD_IMPRESSION };
      obj.increment(obj);
    }
  }, items);
  obj = { position: null, formatToPlainString: null };
  obj = { spacing: 16, style: tmp.content };
  const obj1 = { messageType: arg1(dependencyMap[10]).HelpMessageTypes.INFO };
  const intl = arg1(dependencyMap[11]).intl;
  obj1.children = intl.string(arg1(dependencyMap[11]).t.El4aXl);
  const items1 = [callback(arg1(dependencyMap[10]).HelpMessage, obj1), ];
  const obj2 = { hasIcons: false };
  if (null != prop) {
    if (0 !== prop.length) {
      let mapped = prop.map((label) => {
        const prop = label;
        return callback(prop(closure_2[18]).TableRow, {
          label: label.title,
          subLabel: label.description,
          onPress() {
            return arg0.onClick(closure_1);
          },
          arrow: true
        }, label.id);
      });
    }
    obj2.children = mapped;
    items1[1] = callback(tmp6, obj2);
    obj.children = items1;
    const items2 = [tmp4(arg1(dependencyMap[9]).Stack, obj), ];
    if (isSuspendedUser) {
      const obj3 = { variant: "text-xs/medium" };
      const intl4 = arg1(dependencyMap[11]).intl;
      const obj4 = {
        handleOnHelpUrlHook() {
              modalSessionId(closure_2[19]).openUrl(constants.LEARN_MORE_UU_APPEAL_LINK);
            }
      };
      obj3.children = intl4.format(importDefault(dependencyMap[14]).htWh1G, obj4);
      isSuspendedUser = callback(arg1(dependencyMap[13]).Text, obj3);
    }
    items2[1] = isSuspendedUser;
    obj.children = items2;
    return tmp4(arg1(dependencyMap[9]).Stack, obj);
  }
  const obj5 = { style: tmp.errorContainer };
  const obj6 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, style: tmp.noMethodsText };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj6.children = intl2.string(importDefault(dependencyMap[14]).cR6336);
  const items3 = [callback(arg1(dependencyMap[13]).Text, obj6), ];
  const obj7 = { style: tmp.buttonGroup };
  const obj8 = { <string:1522289750>: null, <string:570601313>: null };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj8.text = intl3.string(importDefault(dependencyMap[14]).hDvmYP);
  obj8.onPress = arg1(dependencyMap[17]).getAgeVerificationMethods;
  obj7.children = callback(arg1(dependencyMap[16]).Button, obj8);
  items3[1] = callback(arg1(dependencyMap[15]).ButtonGroup, obj7);
  obj5.children = items3;
  mapped = callback2(arg1(dependencyMap[9]).Stack, obj5);
};
