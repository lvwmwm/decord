// Module ID: 11033
// Function ID: 85924
// Name: AppealIngestionActivitySummary
// Dependencies: []
// Exports: default

// Module 11033 (AppealIngestionActivitySummary)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles({ activity: { marginBottom: 16 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={callback().activity}>{jsx(importDefault(dependencyMap[4]), { flaggedContent: arg0.flaggedContent })}</View>;
};
