// Module ID: 16428
// Function ID: 128228
// Name: CommunityRequirementSatisfiedForm
// Dependencies: [31, 27, 33, 3831, 16418, 4661, 2]
// Exports: default

// Module 16428 (CommunityRequirementSatisfiedForm)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let result = require("jsxProd").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  let obj = formSwitchDisabled(16418);
  const enableCommunitySharedStyles = obj.useEnableCommunitySharedStyles();
  obj = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper };
  const items = [formSwitchDisabled.children, ];
  let tmp4 = null;
  if (formSwitchDisabled) {
    obj = {
      accessibilityRole: "button",
      style: enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable,
      onPress() {
          if (formSwitchDisabled) {
            const result = formSwitchDisabled(outer1_1[3]).communityRequirementSatisfied();
            const obj = formSwitchDisabled(outer1_1[3]);
          }
        }
    };
    tmp4 = callback(formSwitchDisabled(4661).PressableOpacity, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_4(View, obj);
};
