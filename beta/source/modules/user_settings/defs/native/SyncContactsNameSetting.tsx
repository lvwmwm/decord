// Module ID: 15123
// Function ID: 15124
// Name: SyncContactsNameSetting
// Dependencies: [8270, 1078, 1245, 4993, 15122, 1984, 558, 12863, 11630, 1119, 2]

// Module 15123 (SyncContactsNameSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12863 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.nAsWKy);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15122, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: () => null != ContactSyncUtils.useContactSyncAccount()
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;
