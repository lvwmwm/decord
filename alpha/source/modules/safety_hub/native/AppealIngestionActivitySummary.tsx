// Module ID: 14084
// Function ID: 14085
// Name: AppealIngestionActivitySummary
// Dependencies: [19, 17, 21, 5243, 14085, 2]
// Exports: default

// Module 14084 (AppealIngestionActivitySummary)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ClassificationEvidenceDefault from "ClassificationEvidence" /* 14085 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ activity: { marginBottom: 16 } });
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  flaggedContent = flaggedContent.flaggedContent;
  return <View style={closure_4().activity}>{jsx(ClassificationEvidenceDefault, { flaggedContent })}</View>;
};
