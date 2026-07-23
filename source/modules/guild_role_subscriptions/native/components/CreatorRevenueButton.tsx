// Module ID: 9354
// Function ID: 73053
// Name: CreatorRevenueButton
// Dependencies: [31, 33, 4130, 9355, 2]
// Exports: CreatorRevenueButton

// Module 9354 (CreatorRevenueButton)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3 = _createForOfIteratorHelperLoose.createStyles({ container: { borderRadius: 3 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  let disabled;
  let loading;
  let onPress;
  let style;
  let text;
  ({ disabled, text, onPress, style, loading } = arg0);
  style = [callback().container, ];
  style[1] = style;
  return jsx(importDefault(9355), { style, loading, disabled, onPress, text });
};
