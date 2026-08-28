// Module ID: 9076
// Function ID: 9077
// Name: CreatorRevenueButton
// Dependencies: [19, 21, 4446, 9077, 2]
// Exports: CreatorRevenueButton

// Module 9076 (CreatorRevenueButton)
import noopAll from "noop" /* 19 */;
import ShinyButtonDefault from "ShinyButton" /* 9077 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

noopAll;
let closure_3 = createCacheKey.createStyles({ container: { borderRadius: 3 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  ({ disabled, text, onPress, style, loading } = arg0);
  style = [callback().container, ];
  style[1] = style;
  return jsx(ShinyButtonDefault, { style, loading, disabled, onPress, text });
};
