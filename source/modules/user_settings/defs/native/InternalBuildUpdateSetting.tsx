// Module ID: 15741
// Function ID: 15742
// Name: pressable
// Dependencies: [14394, 21, 13906, 504, 4153, 14842, 4509, 15158, 11468, 2]

// Module 15741 (pressable)
import initialize from "initialize" /* 504 */;
import hooksDefault from "hooks" /* 4153 */;
import _checkForNewerBuildAll from "_checkForNewerBuild" /* 13906 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14842 */;
import closure_4 from "checkForNewerBuild" /* 14394 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11468 */;

require = arg1;
createToggle = {
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: function InstallNativeUpdateIcon() {
    const items = [closure_4];
    if (obj.useStateFromStores(items, () => null !== closure_4.latestFetchedBuild().newBuild)) {
      let RefreshIcon = tmp(4509).DownloadIcon;
    } else {
      RefreshIcon = tmp(15158).RefreshIcon;
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
