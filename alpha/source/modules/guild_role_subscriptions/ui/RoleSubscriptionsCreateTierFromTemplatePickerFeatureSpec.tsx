// Module ID: 15635
// Function ID: 15636
// Name: RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec
// Dependencies: [5227, 4937, 1084, 1125, 504, 15636, 2]

// Module 15635 (RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1125 */;
import ExperimentStore from "ExperimentStore" /* 5227 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
let obj = {
  title() {
    const intl = intl2.intl;
    return intl.string(intl2.t.aTFQKh);
  },
  description() {
    const intl = intl2.intl;
    return intl.string(intl2.t.oTbFQg);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    let obj = get_initialized;
    const items = [ExperimentStore, PermissionStore];
    return obj.useStateFromStores(items, () => {
      let constants2;
      return (features) => {
        features = features.features;
        let hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED);
        const tmp = constants;
        if (hasItem) {
          const features2 = features.features;
          hasItem = !features2.has(tmp.CREATOR_MONETIZABLE_RESTRICTED);
        }
        if (hasItem) {
          hasItem = closure_1_3.can(constants2.ADMINISTRATOR, features);
        }
        if (hasItem) {
          const obj = closure_1_0(closure_1_1[5]);
          hasItem = obj.isGuildEligibleForTierTemplates(features.id);
        }
        return hasItem;
      };
    }, []);
  }
};
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx");

export default obj;
