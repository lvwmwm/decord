// Module ID: 14993
// Function ID: 14994
// Name: toggle
// Dependencies: [8123, 10493, 1236, 2437, 4034, 14757, 2]

// Module 14993 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2437).A0FVCV);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2437).vHX6RG);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").NotifyFriendsOnComeOnline.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onNotifyFriendsOnComeOnlineSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2437).A0FVCV);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2437).vHX6RG);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").NotifyFriendsOnComeOnline.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onNotifyFriendsOnComeOnlineSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
