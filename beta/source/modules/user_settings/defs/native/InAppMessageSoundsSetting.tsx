// Module ID: 15771
// Function ID: 15772
// Name: InAppMessageSoundsSetting
// Dependencies: [13003, 8270, 1119, 11630, 14771, 1613, 15761, 2]

// Module 15771 (InAppMessageSoundsSetting)
import util from "util" /* 1119 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14771 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15761 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 13003 */;
import SettingBuilders_mod from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = InAppMessageSoundsStore);
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.jLCRyj);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["wls+Ax"]);
  },
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled
};
let SettingBuilders = SettingBuilders_mod;
let obj2 = {};
const merged = Object.assign(obj);
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  const isDeclarativeSettingsUIAvailable = notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("InAppMessageSoundsSetting");
  return MetaQuestUtils.isMetaQuest() && !isDeclarativeSettingsUIAvailable;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  const isDeclarativeSettingsUIAvailable = notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("RedesignInAppMessageSoundsSetting");
  return MetaQuestUtils.isMetaQuest() && isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;
export const RedesignInAppMessageSoundsSetting = toggle1;
