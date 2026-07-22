// Module ID: 14296
// Function ID: 107980
// Dependencies: []

// Module 14296
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[2]);
obj = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: arg1(dependencyMap[3]).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    const obj = arg1(dependencyMap[1]);
    return hasUpdatesConfigured.hasUpdatesConfigured && arg1(dependencyMap[1]).useStaffOrDeveloperSettingPredicate();
  }
};
const createStaticResult = obj.createStatic(obj);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createStaticResult;
