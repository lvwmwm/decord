// Module ID: 14634
// Function ID: 110370
// Name: RegistrationBailoutButton
// Dependencies: []
// Exports: default

// Module 14634 (RegistrationBailoutButton)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = arg1(dependencyMap[2]).createStyles({ bail: {} });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

export default function RegistrationBailoutButton(onBail) {
  const obj = { shrink: true };
  const intl = arg1(dependencyMap[4]).intl;
  obj.text = intl.string(arg1(dependencyMap[4]).t.CZ7wvG);
  obj.size = arg1(dependencyMap[3]).Button.Sizes.MEDIUM;
  obj.look = arg1(dependencyMap[3]).ButtonLooks.LINK;
  obj.color = arg1(dependencyMap[3]).ButtonColors.LINK;
  obj.style = callback().bail;
  obj.onPress = onBail.onBail;
  return jsx(arg1(dependencyMap[3]).Button, obj);
};
