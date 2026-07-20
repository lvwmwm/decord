// Module ID: 14279
// Function ID: 107886
// Name: pressable
// Dependencies: []

// Module 14279 (pressable)
let closure_4 = importDefault(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[8]);
obj = {
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: function InstallNativeUpdateIcon() {
    const items = [closure_4];
    if (obj.useStateFromStores(items, () => null !== closure_4.latestFetchedBuild().newBuild)) {
      let RefreshIcon = tmp2(tmp3[6]).DownloadIcon;
    } else {
      RefreshIcon = tmp2(tmp3[7]).RefreshIcon;
    }
    return <RefreshIcon />;
  },
  useDescription: function useInternalBuildUpdateDescription() {
    const items = [closure_4];
    const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
      const newBuild = closure_4.latestFetchedBuild().newBuild;
      let build;
      if (null != newBuild) {
        build = newBuild.build;
      }
      return build;
    });
    const obj = arg1(dependencyMap[3]);
    const items1 = [closure_4];
    const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => closure_4.latestFetchedBuild().lastCheck);
    if (null != stateFromStores) {
      const _HermesInternal2 = HermesInternal;
      let str = "Open build " + stateFromStores + " installer in a browser";
    } else {
      str = "Never refreshed";
      if (null != stateFromStores1) {
        const _HermesInternal = HermesInternal;
        str = "Last refreshed " + importDefault(dependencyMap[4])(stateFromStores1).fromNow();
        const obj3 = importDefault(dependencyMap[4])(stateFromStores1);
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    const obj = arg1(dependencyMap[5]);
    return closure_4.hasUpdatesConfigured && arg1(dependencyMap[5]).useStaffOrDeveloperSettingPredicate();
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = closure_4.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      importAll(dependencyMap[2]).openBuildInstaller(newBuild);
      const obj = importAll(dependencyMap[2]);
    } else {
      closure_4.checkForNewerBuild();
    }
  },
  withArrow: true
};
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default pressable;
