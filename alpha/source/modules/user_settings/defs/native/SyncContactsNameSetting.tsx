// Module ID: 15102
// Function ID: 15103
// Name: SyncContactsNameSetting
// Dependencies: [7992, 1085, 1265, 5934, 15101, 2000, 558, 12402, 10663, 1126, 2]

// Module 15102 (SyncContactsNameSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12402 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
    obj2.pushLazy(asyncRequire(15101, dependencyMap.paths), "Contact Sync Name Update Modal");
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
