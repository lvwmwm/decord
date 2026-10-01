// Module ID: 17480
// Function ID: 17481
// Name: CommunityRequirementSatisfiedForm
// Dependencies: [19, 17, 21, 4527, 17470, 5435, 2]
// Exports: default

// Module 17480 (CommunityRequirementSatisfiedForm)
import react_native from "react-native" /* 17 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  let items;
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  const children = formSwitchDisabled.children;
  let tmp = formSwitchDisabled;
  let obj = formSwitchDisabled(17470);
  const enableCommunitySharedStyles = obj.useEnableCommunitySharedStyles();
  const obj2 = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: items };
  items = [children, ];
  let tmp6 = null;
  const tmp4 = closure_4;
  const tmp5 = View;
  if (formSwitchDisabled) {
    const obj3 = {
      accessibilityRole: "button",
      style: enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable,
      onPress() {
          const tmp = formSwitchDisabled;
          if (tmp) {
            const obj = ToastUtils;
            const result = obj.communityRequirementSatisfied();
          }
        }
    };
    tmp6 = closure_3(tmp(5435).PressableOpacity, obj3);
  }
  items[1] = tmp6;
  return tmp4(tmp5, obj2);
};
