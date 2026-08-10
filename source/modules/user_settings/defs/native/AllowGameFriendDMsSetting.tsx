// Module ID: 14900
// Function ID: 14901
// Name: toggle
// Dependencies: [8082, 10447, 1236, 3974, 14901, 2]

// Module 14900 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XpBObB);
  },
  parent: require("MobileSetting").MobileSetting.CONNECTED_GAMES,
  useValue: require("explicitContentFromProto").AllowGameFriendDmsInDiscord.useSetting,
  onValueChange: require("explicitContentFromProto").AllowGameFriendDmsInDiscord.updateSetting,
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t.XpBObB)];
    return items;
  },
  usePredicate: require("useIsAllowGameFriendDMsSettingVisible").useIsAllowGameFriendDMsSettingVisible
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XpBObB);
  },
  parent: require("MobileSetting").MobileSetting.CONNECTED_GAMES,
  useValue: require("explicitContentFromProto").AllowGameFriendDmsInDiscord.useSetting,
  onValueChange: require("explicitContentFromProto").AllowGameFriendDmsInDiscord.updateSetting,
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t.XpBObB)];
    return items;
  },
  usePredicate: require("useIsAllowGameFriendDMsSettingVisible").useIsAllowGameFriendDMsSettingVisible
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AllowGameFriendDMsSetting.tsx");

export default toggle;
