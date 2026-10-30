// Module ID: 19897
// Function ID: 19898
// Name: GuildRoleSubscriptionGroupGatingModal
// Dependencies: [32, 19, 19885, 17125, 21, 19887, 1114, 19880, 2]
// Exports: default

// Module 19897 (GuildRoleSubscriptionGroupGatingModal)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1114 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17125 */;
import FormGuildGatingModeSelectorDefault from "FormGuildGatingModeSelector" /* 19880 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19887 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19885 */;
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
