// Module ID: 10229
// Function ID: 10230
// Name: CreatorRevenueButton
// Dependencies: [19, 21, 4481, 10230, 2]
// Exports: CreatorRevenueButton

// Module 10229 (CreatorRevenueButton)
import noopAll from "noop" /* 19 */;
import ShinyButtonDefault from "ShinyButton" /* 10230 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

noopAll;
let closure_3 = createCacheKey.createStyles({ container: { borderRadius: 3 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  ({ disabled, text, onPress, style, loading } = arg0);
  style = [callback().container, ];
  style[1] = style;
  return jsx(ShinyButtonDefault, { style, loading, disabled, onPress, text });
};
