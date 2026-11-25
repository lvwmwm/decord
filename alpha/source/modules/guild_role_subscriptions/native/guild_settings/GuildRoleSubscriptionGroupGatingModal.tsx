// Module ID: 20168
// Function ID: 20169
// Name: GuildRoleSubscriptionGroupGatingModal
// Dependencies: [32, 19, 20155, 16765, 21, 20158, 1112, 20150, 2]
// Exports: default

// Module 20168 (GuildRoleSubscriptionGroupGatingModal)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1112 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 16765 */;
import FormGuildGatingModeSelectorDefault from "FormGuildGatingModeSelector" /* 20150 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 20158 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 20155 */;
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
