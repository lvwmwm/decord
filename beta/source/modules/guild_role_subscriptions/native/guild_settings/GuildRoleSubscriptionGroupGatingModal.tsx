// Module ID: 20367
// Function ID: 20368
// Name: GuildRoleSubscriptionGroupGatingModal
// Dependencies: [32, 19, 20354, 17517, 21, 20357, 1113, 20349, 2]
// Exports: default

// Module 20367 (GuildRoleSubscriptionGroupGatingModal)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17517 */;
import FormGuildGatingModeSelectorDefault from "FormGuildGatingModeSelector" /* 20349 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 20357 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 20354 */;
import size from "module_2" /* 2 */;

const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionsTierScenes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx");

export default function GuildRoleSubscriptionGroupGatingModal(arg0) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = RoleTierEditStore.useGroupIsFullGateState();
  _slicedToArray(RoleTierEditStore.useGroupIsFullGateState(), 2);
  GuildRoleSubscriptionTierEditStepDefault;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  const merged = Object.assign(arg0);
  return <tmp4 title={intl.string(intl3.t.N38nNP)} description={intl2.string(intl3.t.csJWVI)} canProceedToNextStep nextStep={constants.GROUP}>{jsx(FormGuildGatingModeSelectorDefault, { isFullServerGating: tmp2, onChange: tmp3 })}</tmp4>;
};
