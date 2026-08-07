// Module ID: 16676
// Function ID: 16677
// Name: CommunityRequirementSatisfiedForm
// Dependencies: [19, 17, 21, 4001, 16666, 4844, 2]
// Exports: default

// Module 16676 (CommunityRequirementSatisfiedForm)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let result = require("jsxProd").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  let obj = formSwitchDisabled(16666);
  const enableCommunitySharedStyles = obj.useEnableCommunitySharedStyles();
  obj = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: null };
  const items = [formSwitchDisabled.children, ];
  let tmp6 = null;
  if (formSwitchDisabled) {
    obj = { accessibilityRole: "button", style: null, onPress: null };
    obj[1] = enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable;
    obj[2] = function onPress() {
      if (formSwitchDisabled) {
        const result = formSwitchDisabled(outer1_1[3]).communityRequirementSatisfied();
        const obj = formSwitchDisabled(outer1_1[3]);
      }
    };
    tmp6 = callback(formSwitchDisabled(4844).PressableOpacity, obj);
  }
  items[1] = tmp6;
  obj[1] = items;
  return closure_4(View, obj);
};
