// Module ID: 16989
// Function ID: 16990
// Name: CommunityRequirementSatisfiedForm
// Dependencies: [19, 17, 21, 4096, 16979, 5438, 2]
// Exports: default

// Module 16989 (CommunityRequirementSatisfiedForm)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  let obj = formSwitchDisabled(16979);
  const enableCommunitySharedStyles = obj.useEnableCommunitySharedStyles();
  obj = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: null };
  const items = [formSwitchDisabled.children, ];
  let tmp6 = null;
  if (formSwitchDisabled) {
    obj = { accessibilityRole: "button", style: null, onPress: null };
    obj[1] = enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable;
    obj[2] = function onPress() {
      if (formSwitchDisabled) {
        const result = formSwitchDisabled(closure_1_1[3]).communityRequirementSatisfied();
        const obj = formSwitchDisabled(closure_1_1[3]);
      }
    };
    tmp6 = callback(formSwitchDisabled(5438).PressableOpacity, obj);
  }
  items[1] = tmp6;
  obj[1] = items;
  return closure_4(View, obj);
};
