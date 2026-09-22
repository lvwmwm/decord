// Module ID: 12148
// Function ID: 12149
// Name: AppealIngestionActivitySummary
// Dependencies: [19, 17, 21, 4757, 12149, 2]
// Exports: default

// Module 12148 (AppealIngestionActivitySummary)
import ClassificationEvidenceDefault from "ClassificationEvidence" /* 12149 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_4 = createStyles.createStyles({ activity: { marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={closure_4().activity}>{jsx(ClassificationEvidenceDefault, { flaggedContent: arg0.flaggedContent })}</View>;
};
