// Module ID: 12144
// Function ID: 12145
// Name: AppealIngestionActivitySummary
// Dependencies: [19, 17, 21, 4756, 12145, 2]
// Exports: default

// Module 12144 (AppealIngestionActivitySummary)
import ClassificationEvidenceDefault from "ClassificationEvidence" /* 12145 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_4 = createStyles.createStyles({ activity: { marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={closure_4().activity}>{jsx(ClassificationEvidenceDefault, { flaggedContent: arg0.flaggedContent })}</View>;
};
