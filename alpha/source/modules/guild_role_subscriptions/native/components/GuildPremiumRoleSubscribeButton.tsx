// Module ID: 20306
// Function ID: 20307
// Name: GuildPremiumRoleSubscribeButton
// Dependencies: [19, 21, 5170, 10114, 1113, 2]
// Exports: GuildPremiumRoleSubscribeButton

// Module 20306 (GuildPremiumRoleSubscribeButton)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import CreatorRevenueButton2 from "CreatorRevenueButton" /* 10114 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
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
