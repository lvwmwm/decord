// Module ID: 16695
// Function ID: 16696
// Name: SyncContactsNameSetting
// Dependencies: [8424, 1072, 1253, 6738, 16694, 1995, 14198, 11505, 1114, 2]

// Module 16695 (SyncContactsNameSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import ContactSyncUtils from "ContactSyncUtils" /* 14198 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
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
    obj2.pushLazy(asyncRequire(16694, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    const obj = ContactSyncUtils;
    return null != obj.useContactSyncAccount();
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;
