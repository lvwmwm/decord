// Module ID: 14461
// Function ID: 110460
// Name: pressable
// Dependencies: [13380, 33, 12965, 566, 3712, 13796, 4080, 13562, 10127, 2]

// Module 14461 (pressable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: function InstallNativeUpdateIcon() {
    const items = [_isNativeReflectConstruct];
    if (obj.useStateFromStores(items, () => null !== outer1_4.latestFetchedBuild().newBuild)) {
      let RefreshIcon = tmp2(4080).DownloadIcon;
    } else {
      RefreshIcon = tmp2(13562).RefreshIcon;
    }
    return <RefreshIcon />;
  },
  useDescription: function useInternalBuildUpdateDescription() {
    const items = [_isNativeReflectConstruct];
    const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => {
      const newBuild = outer1_4.latestFetchedBuild().newBuild;
      let build;
      if (null != newBuild) {
        build = newBuild.build;
      }
      return build;
    });
    const obj = require(566) /* initialize */;
    const items1 = [_isNativeReflectConstruct];
    const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_4.latestFetchedBuild().lastCheck);
    if (null != stateFromStores) {
      const _HermesInternal2 = HermesInternal;
      let str = "Open build " + stateFromStores + " installer in a browser";
    } else {
      str = "Never refreshed";
      if (null != stateFromStores1) {
        const _HermesInternal = HermesInternal;
        str = "Last refreshed " + importDefault(3712)(stateFromStores1).fromNow();
        const obj3 = importDefault(3712)(stateFromStores1);
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    const obj = require(13796) /* useStaffOrDeveloperSettingPredicate */;
    return _isNativeReflectConstruct.hasUpdatesConfigured && require(13796) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = _isNativeReflectConstruct.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      importAll(12965).openBuildInstaller(newBuild);
      const obj = importAll(12965);
    } else {
      _isNativeReflectConstruct.checkForNewerBuild();
    }
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("_checkForNewerBuild").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default createToggle;
