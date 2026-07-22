// Module ID: 16253
// Function ID: 125562
// Name: CommunityRequirementSatisfiedForm
// Dependencies: []
// Exports: default

// Module 16253 (CommunityRequirementSatisfiedForm)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  const arg1 = formSwitchDisabled;
  let obj = arg1(dependencyMap[4]);
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
            const result = formSwitchDisabled(closure_1[3]).communityRequirementSatisfied();
            const obj = formSwitchDisabled(closure_1[3]);
          }
        }
    };
    tmp4 = callback(arg1(dependencyMap[5]).PressableOpacity, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_4(View, obj);
};
