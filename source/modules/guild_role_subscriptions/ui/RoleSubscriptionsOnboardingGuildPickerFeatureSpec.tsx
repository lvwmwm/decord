// Module ID: 13901
// Function ID: 13902
// Dependencies: [4394, 1430, 1233, 586, 7200, 7201, 4113, 2]

// Module 13901
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "getHash" /* 4394 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1430 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

export default {
  title() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["KzCF/6"]);
  },
  description() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xMW8FH);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => (id) => {
      let result = callback2(id, arg1);
      if (result) {
        let obj = callback(7200);
        obj = { guild: null, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
        obj[0] = id;
        obj[3] = callback(7201).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = callback(7201);
        obj[4] = callback(4113).shouldRestrictUpdatingCreatorMonetizationSettings(id.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj);
        const obj4 = callback(4113);
      }
      return result;
    }, [], initialize.statesWillNeverBeEqual);
  }
};
