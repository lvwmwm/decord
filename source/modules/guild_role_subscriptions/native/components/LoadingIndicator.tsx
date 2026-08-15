// Module ID: 14561
// Function ID: 14562
// Name: LoadingIndicator
// Dependencies: [19, 17, 21, 4661, 2]
// Exports: default

// Module 14561 (LoadingIndicator)
import "noop";
import { ActivityIndicator } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_2 = createCacheKey.createStyles({ indicator: { margin: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/LoadingIndicator.tsx");

export default function LoadingIndicator() {
  return <ActivityIndicator style={callback().indicator} />;
};
