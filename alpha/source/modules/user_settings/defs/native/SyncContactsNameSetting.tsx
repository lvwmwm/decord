// Module ID: 15812
// Function ID: 15813
// Name: SyncContactsNameSetting
// Dependencies: [8213, 1087, 1267, 6152, 15811, 2002, 558, 13271, 11006, 1128, 2]

// Module 15812 (SyncContactsNameSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import ContactSyncUtils from "ContactSyncUtils" /* 13271 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
    obj2.pushLazy(asyncRequire(15811, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    const obj = ContactSyncUtils;
    return null != obj.useContactSyncAccount();
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;
