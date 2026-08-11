// Module ID: 14935
// Function ID: 14936
// Name: toggle
// Dependencies: [8084, 10452, 1236, 2437, 3993, 14699, 2]

// Module 14935 (toggle)
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
