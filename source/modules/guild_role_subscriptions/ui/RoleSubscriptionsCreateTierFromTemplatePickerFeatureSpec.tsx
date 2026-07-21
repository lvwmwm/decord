// Module ID: 12778
// Function ID: 97917
// Dependencies: []

// Module 12778
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ GuildFeatures: closure_4, Permissions: closure_5 } = arg1(dependencyMap[2]));
const obj = {
  title() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.aTFQKh);
  },
  description() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.oTbFQg);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [closure_2, closure_3];
    return arg1(dependencyMap[4]).useStateFromStores(items, () => (features) => {
      features = features.features;
      let hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED);
      if (hasItem) {
        const features2 = features.features;
        hasItem = !features2.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (hasItem) {
        hasItem = closure_3.can(constants2.ADMINISTRATOR, features);
      }
      if (hasItem) {
        hasItem = callback(closure_1[5]).isGuildEligibleForTierTemplates(features.id);
        const obj = callback(closure_1[5]);
      }
      return hasItem;
    }, []);
  }
};
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx");

export default obj;
