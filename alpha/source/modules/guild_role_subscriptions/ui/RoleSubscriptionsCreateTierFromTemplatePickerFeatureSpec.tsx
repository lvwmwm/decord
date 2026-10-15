// Module ID: 14790
// Function ID: 14791
// Name: RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec
// Dependencies: [5072, 4806, 1085, 1126, 504, 14791, 2]

// Module 14790 (RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1126 */;
import ExperimentStore from "ExperimentStore" /* 5072 */;
import PermissionStore from "PermissionStore" /* 4806 */;
import Constants from "Constants" /* 1085 */;
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
