// Module ID: 14659
// Function ID: 14660
// Name: LoadingIndicator
// Dependencies: [19, 17, 21, 4380, 2]
// Exports: default

// Module 14659 (LoadingIndicator)
import noopAll from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

noopAll;
let closure_2 = createCacheKey.createStyles({ indicator: { margin: 16 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/LoadingIndicator.tsx");

export default function LoadingIndicator() {
  return <ActivityIndicator style={callback().indicator} />;
};
