// Module ID: 11222
// Function ID: 11223
// Name: AppealIngestionActivitySummary
// Dependencies: [19, 17, 21, 4285, 11207, 2]
// Exports: default

// Module 11222 (AppealIngestionActivitySummary)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles({ activity: { marginBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={callback().activity}>{jsx(importDefault(11207), { flaggedContent: arg0.flaggedContent })}</View>;
};
