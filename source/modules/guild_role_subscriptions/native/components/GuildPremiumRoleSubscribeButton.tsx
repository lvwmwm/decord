// Module ID: 16328
// Function ID: 125999
// Name: GuildPremiumRoleSubscribeButton
// Dependencies: []
// Exports: GuildPremiumRoleSubscribeButton

// Module 16328 (GuildPremiumRoleSubscribeButton)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = arg1(dependencyMap[2]).createStyles({ crButton: { marginVertical: 16 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx");

export const GuildPremiumRoleSubscribeButton = function GuildPremiumRoleSubscribeButton(onPress) {
  const obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.text = intl.string(arg1(dependencyMap[4]).t.BEeXib);
  obj.onPress = onPress.onPress;
  obj.style = callback().crButton;
  obj.disabled = true;
  return jsx(arg1(dependencyMap[3]).CreatorRevenueButton, obj);
};
