// Module ID: 7223
// Function ID: 58200
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: []
// Exports: default

// Module 7223 (BlockedPaymentsCountryActionSheet)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  const obj = { children: jsx(importDefault(dependencyMap[3]), {}) };
  return jsx(arg1(dependencyMap[2]).BottomSheet, obj);
};
