// Module ID: 12441
// Function ID: 12442
// Name: AppealIngestionActivitySummary
// Dependencies: [19, 17, 21, 4913, 12442, 2]
// Exports: default

// Module 12441 (AppealIngestionActivitySummary)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ClassificationEvidenceDefault from "ClassificationEvidence" /* 12442 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ activity: { marginBottom: 16 } });
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  flaggedContent = flaggedContent.flaggedContent;
  return <View style={closure_4().activity}>{jsx(ClassificationEvidenceDefault, { flaggedContent })}</View>;
};
