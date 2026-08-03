// Module ID: 11220
// Function ID: 11221
// Name: AppealIngestionActivitySummary
// Dependencies: [19, 17, 21, 4255, 11210, 2]
// Exports: default

// Module 11220 (AppealIngestionActivitySummary)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles({ activity: { marginBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={callback().activity}>{jsx(importDefault(11210), { flaggedContent: arg0.flaggedContent })}</View>;
};
