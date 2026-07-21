// Module ID: 16305
// Function ID: 125830
// Name: GuildRoleSubscriptionGroupGatingModal
// Dependencies: []
// Exports: default

// Module 16305 (GuildRoleSubscriptionGroupGatingModal)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).GuildRoleSubscriptionsTierScenes;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx");

export default function GuildRoleSubscriptionGroupGatingModal(arg0) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(closure_4.useGroupIsFullGateState(), 2);
  const obj = {};
  const tmp = callback(closure_4.useGroupIsFullGateState(), 2);
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.N38nNP);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.description = intl2.string(arg1(dependencyMap[6]).t.csJWVI);
  obj.canProceedToNextStep = true;
  obj.nextStep = constants.GROUP;
  const merged = Object.assign(arg0);
  obj["children"] = jsx(importDefault(dependencyMap[7]), { isFullServerGating: tmp2, onChange: tmp3 });
  return jsx(importDefault(dependencyMap[5]), obj);
};
