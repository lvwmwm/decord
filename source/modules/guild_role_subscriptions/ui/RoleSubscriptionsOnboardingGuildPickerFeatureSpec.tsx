// Module ID: 12784
// Function ID: 97944
// Dependencies: [131072, 619708416, 5, 57, 31, 27, 1352, 1348]

// Module 12784
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_2 = importDefault(dependencyMap[0]);
const isGuildOwner = arg1(dependencyMap[1]).isGuildOwner;
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

export default {
  title() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.KzCF/6);
  },
  description() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.xMW8FH);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [closure_2];
    return arg1(dependencyMap[3]).useStateFromStores(items, () => (guild) => {
      let result = callback2(guild, arg1);
      if (result) {
        let obj = callback(closure_1[4]);
        obj = { guild, isUserInCreatorMonetizationEligibleCountry: callback(closure_1[5]).isUserInCreatorMonetizationEligibleCountry() };
        const obj3 = callback(closure_1[5]);
        obj.shouldRestrictUpdatingRoleSubscriptionSettings = callback(closure_1[6]).shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj);
        const obj4 = callback(closure_1[6]);
      }
      return result;
    }, [], arg1(dependencyMap[3]).statesWillNeverBeEqual);
  }
};
