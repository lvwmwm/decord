// Module ID: 20039
// Function ID: 20040
// Name: GuildPremiumRoleSubscribeButton
// Dependencies: [19, 21, 4913, 11288, 1112, 2]
// Exports: GuildPremiumRoleSubscribeButton

// Module 20039 (GuildPremiumRoleSubscribeButton)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import CreatorRevenueButton2 from "CreatorRevenueButton" /* 11288 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ crButton: { marginVertical: 16 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx");

export function GuildPremiumRoleSubscribeButton(onPress) {
  onPress = onPress.onPress;
  const tmp = closure_3();
  const CreatorRevenueButton = CreatorRevenueButton2.CreatorRevenueButton;
  const intl = intl2.intl;
  return <CreatorRevenueButton text={intl.string(intl2.t.BEeXib)} onPress={onPress} style={tmp.crButton} disabled />;
}
