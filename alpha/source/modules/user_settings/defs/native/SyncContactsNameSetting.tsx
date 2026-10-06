// Module ID: 14670
// Function ID: 14671
// Name: SyncContactsNameSetting
// Dependencies: [7645, 1085, 1252, 5099, 14669, 1987, 558, 12344, 11142, 1126, 2]

// Module 14670 (SyncContactsNameSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12344 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
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
    obj2.pushLazy(asyncRequire(14669, dependencyMap.paths), "Contact Sync Name Update Modal");
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
