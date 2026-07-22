// Module ID: 16356
// Function ID: 126178
// Dependencies: []

// Module 16356
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef(() => {
  const obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.qAMb9K);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.description = intl2.string(arg1(dependencyMap[3]).t.pRuzXJ);
  obj.brightTitle = true;
  return jsx(importDefault(dependencyMap[2]), obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default forwardRefResult;
