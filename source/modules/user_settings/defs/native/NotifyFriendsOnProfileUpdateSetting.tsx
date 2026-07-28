// Module ID: 14678
// Function ID: 111724
// Name: toggle
// Dependencies: [7733, 10099, 1212, 2365, 3838, 14679, 2]

// Module 14678 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2365).F3llsQ);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2365)["6goWcz"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: require("explicitContentFromProto").NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require("onNotifyFriendsOnProfileUpdateSettingsChanged").onNotifyFriendsOnProfileUpdateSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2365).F3llsQ);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2365)["6goWcz"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: require("explicitContentFromProto").NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require("onNotifyFriendsOnProfileUpdateSettingsChanged").onNotifyFriendsOnProfileUpdateSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
