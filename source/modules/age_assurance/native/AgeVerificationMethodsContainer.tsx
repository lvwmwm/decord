// Module ID: 7574
// Function ID: 60601
// Name: AgeVerificationMethodsContainer
// Dependencies: [31, 7537, 7544, 33, 4130, 689, 7543, 6837, 6842, 4541, 1273, 1212, 5503, 4126, 2716, 4965, 4543, 7542, 5165, 7536, 2]
// Exports: AgeVerificationMethodsContainer

// Module 7574 (AgeVerificationMethodsContainer)
import result from "result";
import { VerificationMethod } from "set";
import { SafetyHubLinks } from "SafetyHubLinks";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.errorContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.noMethodsText = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_40, textAlign: "center" };
_createForOfIteratorHelperLoose.buttonGroup = { paddingVertical: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_40, textAlign: "center" };
const result = require("SafetyHubLinks").fileFinishedImporting("modules/age_assurance/native/AgeVerificationMethodsContainer.tsx");

export const AgeVerificationMethodsContainer = function AgeVerificationMethodsContainer(ageVerificationMethods) {
  const prop = ageVerificationMethods.ageVerificationMethods;
  const modalSessionId = ageVerificationMethods.modalSessionId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = prop(7543);
  let isSuspendedUser = obj.useIsSuspendedUser();
  const items = [prop];
  const effect = React.useEffect(() => {
    let someResult = null != prop;
    if (someResult) {
      someResult = prop.some((id) => id.id === outer2_4.GOOGLE_WALLET);
    }
    if (someResult) {
      let obj = modalSessionId(outer1_2[7]);
      obj = { name: prop(outer1_2[8]).MetricEvents.GOOGLE_WALLET_METHOD_IMPRESSION };
      obj.increment(obj);
    }
  }, items);
  obj = { spacing: 8, align: "center" };
  obj = { spacing: 16, style: tmp.content };
  const obj1 = { messageType: prop(1273).HelpMessageTypes.INFO, textColor: "text-feedback-info", textVariant: "text-sm/medium" };
  const intl = prop(1212).intl;
  obj1.children = intl.string(prop(1212).t.El4aXl);
  const items1 = [callback(prop(1273).HelpMessage, obj1), ];
  const obj2 = { hasIcons: false };
  if (null != prop) {
    if (0 !== prop.length) {
      let mapped = prop.map((label) => {
        let closure_0 = label;
        return outer1_6(prop(outer1_2[18]).TableRow, {
          label: label.title,
          subLabel: label.description,
          onPress() {
            return label.onClick(outer1_1);
          },
          arrow: true
        }, label.id);
      });
    }
    obj2.children = mapped;
    items1[1] = callback(tmp6, obj2);
    obj.children = items1;
    const items2 = [tmp4(prop(4541).Stack, obj), ];
    if (isSuspendedUser) {
      const obj3 = { variant: "text-xs/medium" };
      const intl4 = prop(1212).intl;
      const obj4 = {
        handleOnHelpUrlHook() {
              modalSessionId(outer1_2[19]).openUrl(outer1_5.LEARN_MORE_UU_APPEAL_LINK);
            }
      };
      obj3.children = intl4.format(modalSessionId(2716).htWh1G, obj4);
      isSuspendedUser = callback(prop(4126).Text, obj3);
    }
    items2[1] = isSuspendedUser;
    obj.children = items2;
    return tmp4(prop(4541).Stack, obj);
  }
  const obj5 = { direction: "vertical", align: "center", spacing: 16, style: tmp.errorContainer };
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.noMethodsText };
  const intl2 = prop(1212).intl;
  obj6.children = intl2.string(modalSessionId(2716).cR6336);
  const items3 = [callback(prop(4126).Text, obj6), ];
  const obj7 = { style: tmp.buttonGroup };
  const obj8 = { variant: "primary", size: "lg" };
  const intl3 = prop(1212).intl;
  obj8.text = intl3.string(modalSessionId(2716).hDvmYP);
  obj8.onPress = prop(7542).getAgeVerificationMethods;
  obj7.children = callback(prop(4543).Button, obj8);
  items3[1] = callback(prop(4965).ButtonGroup, obj7);
  obj5.children = items3;
  mapped = callback2(prop(4541).Stack, obj5);
};
