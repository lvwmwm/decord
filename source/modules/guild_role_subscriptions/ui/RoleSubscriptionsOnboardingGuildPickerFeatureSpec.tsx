// Module ID: 13305
// Function ID: 13306
// Dependencies: [4258, 1434, 1236, 589, 5919, 5920, 3982, 2]

// Module 13305
import getHash from "getHash";
import { isGuildOwner } from "GuildNSFWContentLevel";

const require = arg1;
let result = require("getSystemLocale").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

export default {
  title() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["KzCF/6"]);
  },
  description() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.xMW8FH);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [getHash];
    return require(589) /* initialize */.useStateFromStores(items, () => (id) => {
      let result = callback2(id, arg1);
      if (result) {
        let obj = callback(5919);
        obj = { guild: null, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
        obj[0] = id;
        obj[3] = callback(5920).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = callback(5920);
        obj[4] = callback(3982).shouldRestrictUpdatingCreatorMonetizationSettings(id.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj);
        const obj4 = callback(3982);
      }
      return result;
    }, [], require(589) /* initialize */.statesWillNeverBeEqual);
  }
};
