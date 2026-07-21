// Module ID: 12776
// Function ID: 97900
// Name: useGuildSettingsPickerFeature
// Dependencies: []
// Exports: useGuildSettingsPickerFeature

// Module 12776 (useGuildSettingsPickerFeature)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const obj = { server-subscriptions-onboarding: importDefault(dependencyMap[3]), server-subscriptions-create-tier-from-template: importDefault(dependencyMap[4]) };
let closure_6 = {
  title() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.V42OaH);
  },
  description() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.7dJ16X);
  },
  selectGuildCta() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.LhlgY9);
  },
  createGuildDescription() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.anOisx);
  },
  createGuildCta() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.B44MTm);
  },
  canCreateGuild: true,
  useIsGuildSupported() {
    const items = [closure_4];
    return arg1(dependencyMap[6]).useStateFromStores(items, () => (arg0) => closure_4.canAccessGuildSettings(arg0), [], arg1(dependencyMap[6]).statesWillNeverBeEqual);
  }
};
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerFeatures.tsx");

export const useGuildSettingsPickerFeature = function useGuildSettingsPickerFeature(feature) {
  let tmp2;
  if (null != feature) {
    tmp2 = obj[feature];
  }
  let first = callback(React.useState(tmp2), 1)[0];
  let closure_0 = closure_6.useIsGuildSupported();
  let isGuildSupported;
  if (null != first) {
    if (null != first.useIsGuildSupported) {
      isGuildSupported = first.useIsGuildSupported();
    }
  }
  const dependencyMap = isGuildSupported;
  let obj = {};
  const merged = Object.assign(closure_6);
  if (null == first) {
    first = {};
  }
  const merged1 = Object.assign(first);
  obj = {
    title: obj.title(),
    description: obj.description(),
    selectGuildCta: obj.selectGuildCta(),
    createGuildDescription: obj.createGuildDescription(),
    createGuildCta: obj.createGuildCta(),
    canCreateGuild: obj.canCreateGuild,
    isGuildSupported(arg0, arg1) {
      let tmp = callback(arg0, arg1);
      if (tmp) {
        let tmp4;
        if (null != isGuildSupported) {
          tmp4 = isGuildSupported(arg0, arg1);
        }
        tmp = false !== tmp4;
      }
      return tmp;
    }
  };
  return obj;
};
