// Module ID: 9353
// Function ID: 9354
// Name: CreatorRevenueButton
// Dependencies: [19, 21, 4661, 9354, 2]
// Exports: CreatorRevenueButton

// Module 9353 (CreatorRevenueButton)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_3 = createCacheKey.createStyles({ container: { borderRadius: 3 } });
const result = require("createCacheKey").fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  let disabled;
  let loading;
  let onPress;
  let style;
  let text;
  ({ disabled, text, onPress, style, loading } = arg0);
  style = [callback().container, ];
  style[1] = style;
  return jsx(importDefault(9354), { style, loading, disabled, onPress, text });
};
