// Module ID: 11472
// Function ID: 11473
// Name: AppealIngestionActivitySummary
// Dependencies: [19, 17, 21, 4478, 11457, 2]
// Exports: default

// Module 11472 (AppealIngestionActivitySummary)
import noopAll from "noop" /* 19 */;
import ClassificationEvidenceDefault from "ClassificationEvidence" /* 11457 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

noopAll;
let closure_4 = createCacheKey.createStyles({ activity: { marginBottom: 16 } });
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={callback().activity}>{jsx(ClassificationEvidenceDefault, { flaggedContent: arg0.flaggedContent })}</View>;
};
