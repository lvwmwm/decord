// Module ID: 17994
// Function ID: 17995
// Name: InternalBuildUpdateSetting
// Dependencies: [16457, 21, 15964, 504, 2171, 16981, 5867, 12420, 11728, 2]

// Module 17994 (InternalBuildUpdateSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import _modDef2171 from "module_2171" /* 2171 */;
import MobileNativeUpdateUtilsAll from "MobileNativeUpdateUtils" /* 15964 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16981 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16457 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: function InstallNativeUpdateIcon() {
    let RefreshIcon;
    const items = [MobileNativeUpdateStore];
    const obj = get_initialized;
    const tmp3 = jsx;
    if (obj.useStateFromStores(items, () => null !== MobileNativeUpdateStore.latestFetchedBuild().newBuild)) {
      RefreshIcon = tmp(5867).DownloadIcon;
    } else {
      RefreshIcon = tmp(12420).RefreshIcon;
    }
    return tmp3(RefreshIcon, {});
  },
  useDescription: function useInternalBuildUpdateDescription() {
    let str;
    const items = [MobileNativeUpdateStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => {
      const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
      let build;
      if (newBuild != null) {
        build = newBuild.build;
      }
      return build;
    });
    const items1 = [MobileNativeUpdateStore];
    const obj2 = get_initialized;
    const stateFromStores1 = obj2.useStateFromStores(items1, () => MobileNativeUpdateStore.latestFetchedBuild().lastCheck);
    if (null != stateFromStores) {
      const _HermesInternal2 = HermesInternal;
      str = "Open build " + stateFromStores + " installer in a browser";
    } else {
      str = "Never refreshed";
      if (null != stateFromStores1) {
        const _HermesInternal = HermesInternal;
        const obj3 = _modDef2171(stateFromStores1);
        str = "Last refreshed " + obj3.fromNow();
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    const obj = useIsStaffOrDeveloperSettingPredicate;
    const tmp = MobileNativeUpdateStore.hasUpdatesConfigured && obj.useStaffOrDeveloperSettingPredicate();
    return tmp;
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
    const obj = MobileNativeUpdateStore;
    if (null !== newBuild) {
      const obj2 = MobileNativeUpdateUtilsAll;
      obj2.openBuildInstaller(newBuild);
    } else {
      obj.checkForNewerBuild();
    }
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default pressable;
