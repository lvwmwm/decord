// Module ID: 16461
// Function ID: 128276
// Name: GuildPremiumRoleSubscribeButton
// Dependencies: [31, 33, 4130, 9354, 1212, 2]
// Exports: GuildPremiumRoleSubscribeButton

// Module 16461 (GuildPremiumRoleSubscribeButton)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_3 = _createForOfIteratorHelperLoose.createStyles({ crButton: { marginVertical: 16 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx");

export const GuildPremiumRoleSubscribeButton = function GuildPremiumRoleSubscribeButton(onPress) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.BEeXib);
  obj.onPress = onPress.onPress;
  obj.style = callback().crButton;
  obj.disabled = true;
  return jsx(require(9354) /* CreatorRevenueButton */.CreatorRevenueButton, {});
};
