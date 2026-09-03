// Module ID: 11691
// Function ID: 11692
// Name: AppealIngestionActivitySummary
// Dependencies: [19, 17, 21, 4478, 11692, 2]
// Exports: default

// Module 11691 (AppealIngestionActivitySummary)
import noopAll from "noop" /* 19 */;
import ClassificationEvidenceDefault from "ClassificationEvidence" /* 11692 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

noopAll;
let closure_4 = createCacheKey.createStyles({ activity: { marginBottom: 16 } });
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={callback().activity}>{jsx(ClassificationEvidenceDefault, { flaggedContent: arg0.flaggedContent })}</View>;
};
