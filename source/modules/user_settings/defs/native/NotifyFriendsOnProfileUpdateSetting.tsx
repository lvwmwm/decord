// Module ID: 15117
// Function ID: 15118
// Name: toggle
// Dependencies: [8238, 10708, 1236, 2502, 4069, 15118, 2]

// Module 15117 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2502 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4069 */;
import MobileUserSettings from "MobileUserSettings" /* 8238 */;
import onNotifyFriendsOnProfileUpdateSettingsChanged from "onNotifyFriendsOnProfileUpdateSettingsChanged" /* 15118 */;
import createToggle from "createToggle" /* 10708 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.F3llsQ);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["6goWcz"]);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: explicitContentFromProto.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: onNotifyFriendsOnProfileUpdateSettingsChanged.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.F3llsQ);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["6goWcz"]);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: explicitContentFromProto.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: onNotifyFriendsOnProfileUpdateSettingsChanged.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
