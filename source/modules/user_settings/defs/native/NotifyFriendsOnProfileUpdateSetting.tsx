// Module ID: 14821
// Function ID: 14822
// Name: toggle
// Dependencies: [7892, 10361, 1236, 2451, 3958, 14822, 2]

// Module 14821 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2451).F3llsQ);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2451)["6goWcz"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: require("explicitContentFromProto").NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require("onNotifyFriendsOnProfileUpdateSettingsChanged").onNotifyFriendsOnProfileUpdateSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2451).F3llsQ);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2451)["6goWcz"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: require("explicitContentFromProto").NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require("onNotifyFriendsOnProfileUpdateSettingsChanged").onNotifyFriendsOnProfileUpdateSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
