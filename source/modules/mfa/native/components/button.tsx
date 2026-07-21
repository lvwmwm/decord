// Module ID: 14520
// Function ID: 109337
// Name: MFAButton
// Dependencies: []
// Exports: default

// Module 14520 (MFAButton)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(arg1(dependencyMap[2]).Button, { size: "lg" });
};
