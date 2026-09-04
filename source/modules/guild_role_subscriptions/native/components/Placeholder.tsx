// Module ID: 17600
// Function ID: 17601
// Name: Placeholder
// Dependencies: [19, 17, 21, 4481, 2]
// Exports: default

// Module 17600 (Placeholder)
import noopAll from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

noopAll;
let closure_2 = createCacheKey.createStyles({ spinner: { marginTop: 12 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/Placeholder.tsx");

export default function Placeholder() {
  return <ActivityIndicator style={callback().spinner} />;
};
