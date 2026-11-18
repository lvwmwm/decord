// Module ID: 16973
// Function ID: 16974
// Name: InAppMessageSoundsSetting
// Dependencies: [11080, 8624, 1113, 11897, 15587, 1627, 16956, 2]

// Module 16973 (InAppMessageSoundsSetting)
import intl2 from "intl" /* 1113 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15587 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16956 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 11080 */;
import SettingBuilders_mod from "SettingBuilders" /* 11897 */;
import size from "module_2" /* 2 */;

let setInAppMessageSoundsEnabled;
let useInAppMessageSoundsEnabled;
({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = InAppMessageSoundsStore);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.jLCRyj);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["wls+Ax"]);
  },
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled
};
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
let obj2 = {
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    const isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("InAppMessageSoundsSetting");
    const obj2 = MetaQuestUtils;
    const tmp2 = obj2.isMetaQuest() && !isDeclarativeSettingsUIAvailable;
    return tmp2;
  }
};
const createToggle = SettingBuilders.createToggle;
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const createToggle2 = SettingBuilders.createToggle;
const obj3 = {
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    const isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("RedesignInAppMessageSoundsSetting");
    const obj2 = MetaQuestUtils;
    const tmp2 = obj2.isMetaQuest() && isDeclarativeSettingsUIAvailable;
    return tmp2;
  }
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;
export const RedesignInAppMessageSoundsSetting = toggle2;
