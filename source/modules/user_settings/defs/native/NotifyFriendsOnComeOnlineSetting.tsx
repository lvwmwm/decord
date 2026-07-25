// Module ID: 14632
// Function ID: 111543
// Name: toggle
// Dependencies: [7697, 10059, 1212, 2333, 3804, 14396, 2]

// Module 14632 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2333).A0FVCV);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2333).vHX6RG);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").NotifyFriendsOnComeOnline.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onNotifyFriendsOnComeOnlineSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2333).A0FVCV);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2333).vHX6RG);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").NotifyFriendsOnComeOnline.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onNotifyFriendsOnComeOnlineSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
