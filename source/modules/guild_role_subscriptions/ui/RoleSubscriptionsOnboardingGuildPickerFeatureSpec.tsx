// Module ID: 12950
// Function ID: 100423
// Dependencies: [4044, 1391, 1212, 566, 5641, 5642, 3751, 2]

// Module 12950
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isGuildOwner } from "isGuildOwner";

const require = arg1;
let result = require("getSystemLocale").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

export default {
  title() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["KzCF/6"]);
  },
  description() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.xMW8FH);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => (guild) => {
      let result = outer2_3(guild, arg1);
      if (result) {
        let obj = outer2_0(outer2_1[4]);
        obj = { guild, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: outer2_0(outer2_1[5]).isUserInCreatorMonetizationEligibleCountry() };
        const obj3 = outer2_0(outer2_1[5]);
        obj.shouldRestrictUpdatingRoleSubscriptionSettings = outer2_0(outer2_1[6]).shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj);
        const obj4 = outer2_0(outer2_1[6]);
      }
      return result;
    }, [], require(566) /* initialize */.statesWillNeverBeEqual);
  }
};
