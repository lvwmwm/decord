// Module ID: 18237
// Function ID: 18238
// Name: GuildPremiumRoleSubscribeButton
// Dependencies: [19, 21, 4757, 10564, 1115, 2]
// Exports: GuildPremiumRoleSubscribeButton

// Module 18237 (GuildPremiumRoleSubscribeButton)
import util from "util" /* 1115 */;
import CreatorRevenueButton from "CreatorRevenueButton" /* 10564 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_3 = createStyles.createStyles({ crButton: { marginVertical: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx");

export const GuildPremiumRoleSubscribeButton = function GuildPremiumRoleSubscribeButton(onPress) {
  const obj = { text: null, onPress: null, style: null, disabled: true };
  const intl = util.intl;
  obj.text = intl.string(util.t.BEeXib);
  obj.onPress = onPress.onPress;
  obj.style = closure_3().crButton;
  return jsx(CreatorRevenueButton.CreatorRevenueButton, { text: null, onPress: null, style: null, disabled: true });
};
