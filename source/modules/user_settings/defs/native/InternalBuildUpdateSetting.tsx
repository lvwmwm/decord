// Module ID: 14517
// Function ID: 110765
// Name: pressable
// Dependencies: [13436, 33, 13021, 566, 3747, 13852, 4115, 13618, 10099, 2]

// Module 14517 (pressable)
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
      let RefreshIcon = tmp2(4115).DownloadIcon;
    } else {
      RefreshIcon = tmp2(13618).RefreshIcon;
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
        str = "Last refreshed " + importDefault(3747)(stateFromStores1).fromNow();
        const obj3 = importDefault(3747)(stateFromStores1);
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    const obj = require(13852) /* useStaffOrDeveloperSettingPredicate */;
    return _isNativeReflectConstruct.hasUpdatesConfigured && require(13852) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = _isNativeReflectConstruct.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      importAll(13021).openBuildInstaller(newBuild);
      const obj = importAll(13021);
    } else {
      _isNativeReflectConstruct.checkForNewerBuild();
    }
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("_checkForNewerBuild").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default createToggle;
