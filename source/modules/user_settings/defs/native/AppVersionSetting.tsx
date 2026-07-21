// Module ID: 14264
// Function ID: 107809
// Dependencies: []

// Module 14264
const constants = importAll(dependencyMap[0]).getConstants();
const importAllResult = importAll(dependencyMap[0]);
const obj2 = arg1(dependencyMap[3]);
const obj = {
  useTitle: function useAppVersionSettingTitle() {
    const intl = arg1(dependencyMap[1]).intl;
    return intl.string(arg1(dependencyMap[1]).t.H66MEk);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[4]).ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    const clientInfoString = arg1(dependencyMap[2]).getClientInfoString(closure_3.ReleaseChannel);
    const obj = arg1(dependencyMap[2]);
    const obj2 = arg1(dependencyMap[2]);
    const clientInfoString1 = obj2.getClientInfoString(importAll(dependencyMap[0]).getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const obj3 = importAll(dependencyMap[0]);
    const clientInfoString2 = arg1(dependencyMap[2]).getClientInfoString(closure_3.Version);
    if (hasItem) {
      let combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: arg1(dependencyMap[5]).DeveloperMode.useSetting
};
const createStaticResult = obj2.createStatic({
  useTitle: function useAppVersionSettingTitle() {
    const intl = arg1(dependencyMap[1]).intl;
    return intl.string(arg1(dependencyMap[1]).t.H66MEk);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[4]).ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    const clientInfoString = arg1(dependencyMap[2]).getClientInfoString(closure_3.ReleaseChannel);
    const obj = arg1(dependencyMap[2]);
    const obj2 = arg1(dependencyMap[2]);
    const clientInfoString1 = obj2.getClientInfoString(importAll(dependencyMap[0]).getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const obj3 = importAll(dependencyMap[0]);
    const clientInfoString2 = arg1(dependencyMap[2]).getClientInfoString(closure_3.Version);
    if (hasItem) {
      let combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: arg1(dependencyMap[5]).DeveloperMode.useSetting
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/AppVersionSetting.tsx");

export default createStaticResult;
