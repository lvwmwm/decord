// Module ID: 14538
// Function ID: 14539
// Name: pressable
// Dependencies: [13454, 21, 13039, 589, 3771, 13868, 4139, 13634, 10116, 2]

// Module 14538 (pressable)
import checkForNewerBuild from "checkForNewerBuild";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: function InstallNativeUpdateIcon() {
    const items = [checkForNewerBuild];
    if (obj.useStateFromStores(items, () => null !== checkForNewerBuild.latestFetchedBuild().newBuild)) {
      let RefreshIcon = tmp(4139).DownloadIcon;
    } else {
      RefreshIcon = tmp(13634).RefreshIcon;
    }
    return <RefreshIcon />;
  },
  useDescription: function useInternalBuildUpdateDescription() {
    const items = [checkForNewerBuild];
    const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => {
      const newBuild = checkForNewerBuild.latestFetchedBuild().newBuild;
      let build;
      if (newBuild != null) {
        build = newBuild.build;
      }
      return build;
    });
    const obj = require(589) /* initialize */;
    const items1 = [checkForNewerBuild];
    const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => checkForNewerBuild.latestFetchedBuild().lastCheck);
    if (null != stateFromStores) {
      const _HermesInternal2 = HermesInternal;
      let str = "Open build " + stateFromStores + " installer in a browser";
    } else {
      str = "Never refreshed";
      if (null != stateFromStores1) {
        const _HermesInternal = HermesInternal;
        str = "Last refreshed " + importDefault(3771)(stateFromStores1).fromNow();
        const obj3 = importDefault(3771)(stateFromStores1);
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    const obj = require(13868) /* useStaffOrDeveloperSettingPredicate */;
    return checkForNewerBuild.hasUpdatesConfigured && require(13868) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = checkForNewerBuild.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      importAll(13039).openBuildInstaller(newBuild);
      const obj2 = importAll(13039);
    } else {
      checkForNewerBuild.checkForNewerBuild();
    }
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("_checkForNewerBuild").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default createToggle;
