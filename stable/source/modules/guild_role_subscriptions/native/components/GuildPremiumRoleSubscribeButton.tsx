// Module ID: 17883
// Function ID: 17884
// Name: GuildPremiumRoleSubscribeButton
// Dependencies: [19, 21, 4636, 10429, 1114, 2]
// Exports: GuildPremiumRoleSubscribeButton

// Module 17883 (GuildPremiumRoleSubscribeButton)
import util from "util" /* 1114 */;
import CreatorRevenueButton from "CreatorRevenueButton" /* 10429 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
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
