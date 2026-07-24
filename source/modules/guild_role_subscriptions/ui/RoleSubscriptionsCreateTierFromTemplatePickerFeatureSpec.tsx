// Module ID: 12951
// Function ID: 100429
// Dependencies: [4044, 3758, 653, 1212, 566, 12952, 2]

// Module 12951
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ GuildFeatures: closure_4, Permissions: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx");

export default {
  title() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.aTFQKh);
  },
  description() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.oTbFQg);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [_isNativeReflectConstruct, closure_3];
    return require(566) /* initialize */.useStateFromStores(items, () => (features) => {
      features = features.features;
      let hasItem = features.has(outer2_4.ROLE_SUBSCRIPTIONS_ENABLED);
      if (hasItem) {
        const features2 = features.features;
        hasItem = !features2.has(outer2_4.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (hasItem) {
        hasItem = outer2_3.can(outer2_5.ADMINISTRATOR, features);
      }
      if (hasItem) {
        hasItem = outer2_0(outer2_1[5]).isGuildEligibleForTierTemplates(features.id);
        const obj = outer2_0(outer2_1[5]);
      }
      return hasItem;
    }, []);
  }
};
