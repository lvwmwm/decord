// Module ID: 16994
// Function ID: 16995
// Name: Placeholder
// Dependencies: [19, 17, 21, 4668, 2]
// Exports: default

// Module 16994 (Placeholder)
import noopAll from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

noopAll;
let closure_2 = createCacheKey.createStyles({ spinner: { marginTop: 12 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/Placeholder.tsx");

export default function Placeholder() {
  return <ActivityIndicator style={callback().spinner} />;
};
