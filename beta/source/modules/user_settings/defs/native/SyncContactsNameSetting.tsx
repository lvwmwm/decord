// Module ID: 14370
// Function ID: 14371
// Name: SyncContactsNameSetting
// Dependencies: [7421, 1086, 1253, 5040, 14369, 1987, 558, 12070, 10874, 1127, 2]

// Module 14370 (SyncContactsNameSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12070 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.nAsWKy);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    const obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(14369, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: () => {
    const obj = ContactSyncUtils;
    return null != obj.useContactSyncAccount();
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;
