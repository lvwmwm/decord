// Module ID: 15665
// Function ID: 15666
// Name: pressable
// Dependencies: [14320, 21, 13916, 586, 4074, 14767, 4430, 15082, 11400, 2]

// Module 15665 (pressable)
import initialize from "initialize" /* 586 */;
import hooksDefault from "hooks" /* 4074 */;
import _checkForNewerBuildAll from "_checkForNewerBuild" /* 13916 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14767 */;
import closure_4 from "checkForNewerBuild" /* 14320 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: function InstallNativeUpdateIcon() {
    const items = [closure_4];
    if (obj.useStateFromStores(items, () => null !== closure_4.latestFetchedBuild().newBuild)) {
      let RefreshIcon = tmp(4430).DownloadIcon;
    } else {
      RefreshIcon = tmp(15082).RefreshIcon;
    }
    return <RefreshIcon />;
  },
  useDescription: function useInternalBuildUpdateDescription() {
    const items = [closure_4];
    const stateFromStores = initialize.useStateFromStores(items, () => {
      const newBuild = closure_4.latestFetchedBuild().newBuild;
      let build;
      if (newBuild != null) {
        build = newBuild.build;
      }
      return build;
    });
    const obj = initialize;
    const items1 = [closure_4];
    const stateFromStores1 = initialize.useStateFromStores(items1, () => closure_4.latestFetchedBuild().lastCheck);
    if (null != stateFromStores) {
      const _HermesInternal2 = HermesInternal;
      let str = "Open build " + stateFromStores + " installer in a browser";
    } else {
      str = "Never refreshed";
      if (null != stateFromStores1) {
        const _HermesInternal = HermesInternal;
        str = "Last refreshed " + hooksDefault(stateFromStores1).fromNow();
        const obj3 = hooksDefault(stateFromStores1);
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    const obj = useStaffOrDeveloperSettingPredicate;
    return closure_4.hasUpdatesConfigured && useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = closure_4.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      _checkForNewerBuildAll.openBuildInstaller(newBuild);
      const obj2 = _checkForNewerBuildAll;
    } else {
      closure_4.checkForNewerBuild();
    }
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default createToggle;
