// Module ID: 16839
// Function ID: 16840
// Name: Placeholder
// Dependencies: [19, 17, 21, 4342, 2]
// Exports: default

// Module 16839 (Placeholder)
import "noop";
import { ActivityIndicator } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_2 = createCacheKey.createStyles({ spinner: { marginTop: 12 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/Placeholder.tsx");

export default function Placeholder() {
  return <ActivityIndicator style={callback().spinner} />;
};
