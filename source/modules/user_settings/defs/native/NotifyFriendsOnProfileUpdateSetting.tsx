// Module ID: 14697
// Function ID: 14698
// Name: toggle
// Dependencies: [7753, 10116, 1236, 2389, 3862, 14698, 2]

// Module 14697 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2389).F3llsQ);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2389)["6goWcz"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: require("explicitContentFromProto").NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require("onNotifyFriendsOnProfileUpdateSettingsChanged").onNotifyFriendsOnProfileUpdateSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2389).F3llsQ);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2389)["6goWcz"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: require("explicitContentFromProto").NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require("onNotifyFriendsOnProfileUpdateSettingsChanged").onNotifyFriendsOnProfileUpdateSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
