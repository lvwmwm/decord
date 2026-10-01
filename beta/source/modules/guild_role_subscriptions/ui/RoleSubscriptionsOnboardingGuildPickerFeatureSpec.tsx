// Module ID: 13435
// Function ID: 13436
// Name: RoleSubscriptionsOnboardingGuildPickerFeatureSpec
// Dependencies: [4750, 2063, 1115, 504, 6678, 6679, 4461, 2]

// Module 13435 (RoleSubscriptionsOnboardingGuildPickerFeatureSpec)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1115 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import size from "module_2" /* 2 */;

const isGuildOwner = GuildRecord.isGuildOwner;
let obj = {
  title() {
    const intl = intl2.intl;
    return intl.string(intl2.t["KzCF/6"]);
  },
  description() {
    const intl = intl2.intl;
    return intl.string(intl2.t.xMW8FH);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    let obj = get_initialized;
    const items = [ExperimentStore];
    return obj.useStateFromStores(items, () => (guild, arg1) => {
      let obj2;
      let obj3;
      let result = closure_1_3(guild, arg1);
      if (result) {
        const obj = { guild, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: obj2.isUserInCreatorMonetizationEligibleCountry(), shouldRestrictUpdatingRoleSubscriptionSettings: obj3.shouldRestrictUpdatingCreatorMonetizationSettings(guild.id) };
        const canSeeGuildRoleSubscriptionSettings = closure_1_0(closure_1_1[4]).canSeeGuildRoleSubscriptionSettings;
        closure_1_0(closure_1_1[4]);
        obj2 = closure_1_0(closure_1_1[5]);
        obj3 = closure_1_0(closure_1_1[6]);
        result = canSeeGuildRoleSubscriptionSettings(obj);
      }
      return result;
    }, [], get_initialized.statesWillNeverBeEqual);
  }
};
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

export default obj;
