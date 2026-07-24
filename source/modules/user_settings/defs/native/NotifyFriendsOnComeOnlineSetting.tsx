// Module ID: 14621
// Function ID: 111416
// Name: toggle
// Dependencies: [7751, 10127, 1212, 2332, 3803, 14385, 2]

// Module 14621 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2332).A0FVCV);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2332).vHX6RG);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").NotifyFriendsOnComeOnline.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onNotifyFriendsOnComeOnlineSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2332).A0FVCV);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2332).vHX6RG);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").NotifyFriendsOnComeOnline.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onNotifyFriendsOnComeOnlineSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
