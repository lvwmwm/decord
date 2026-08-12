// Module ID: 11363
// Function ID: 11364
// Name: AppealIngestionActivitySummary
// Dependencies: [19, 17, 21, 4344, 11348, 2]
// Exports: default

// Module 11363 (AppealIngestionActivitySummary)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles({ activity: { marginBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={callback().activity}>{jsx(importDefault(11348), { flaggedContent: arg0.flaggedContent })}</View>;
};
