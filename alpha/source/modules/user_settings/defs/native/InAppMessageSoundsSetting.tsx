// Module ID: 16444
// Function ID: 16445
// Name: InAppMessageSoundsSetting
// Dependencies: [13424, 8210, 1126, 10991, 15359, 1628, 16434, 2]

// Module 16444 (InAppMessageSoundsSetting)
import intl2 from "intl" /* 1126 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15359 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16434 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 13424 */;
import SettingBuilders_mod from "SettingBuilders" /* 10991 */;
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
