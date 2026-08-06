// Module ID: 14838
// Function ID: 14839
// Name: toggle
// Dependencies: [8005, 10364, 1236, 2450, 3957, 14839, 2]

// Module 14838 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2450).F3llsQ);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2450)["6goWcz"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: require("explicitContentFromProto").NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require("onNotifyFriendsOnProfileUpdateSettingsChanged").onNotifyFriendsOnProfileUpdateSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2450).F3llsQ);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2450)["6goWcz"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: require("explicitContentFromProto").NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require("onNotifyFriendsOnProfileUpdateSettingsChanged").onNotifyFriendsOnProfileUpdateSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
