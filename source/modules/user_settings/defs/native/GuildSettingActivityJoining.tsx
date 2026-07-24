// Module ID: 14592
// Function ID: 111283
// Name: toggle
// Dependencies: [14580, 7751, 3803, 5793, 10127, 1212, 2]

// Module 14592 (toggle)
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import createToggle from "createToggle";

let closure_2;
let closure_3;
({ getSelectedGuildId: closure_2, useUserSafetySettingsSelectedGuildStore: closure_3 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["T+nevN"]);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["b+bVSw"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const ActivityJoiningRestrictedGuilds = require(3803) /* explicitContentFromProto */.ActivityJoiningRestrictedGuilds;
    const setting = ActivityJoiningRestrictedGuilds.useSetting();
    return !setting.includes(callback2().selectedGuildId);
  },
  onValueChange(arg0) {
    const tmp = callback();
    const sanitizedActivityJoiningRestrictedGuilds = require(5793) /* getSanitizedRestrictedGuilds */.getSanitizedActivityJoiningRestrictedGuilds();
    if (arg0) {
      sanitizedActivityJoiningRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityJoiningRestrictedGuilds.add(tmp);
    }
    const ActivityJoiningRestrictedGuilds = require(3803) /* explicitContentFromProto */.ActivityJoiningRestrictedGuilds;
    const items = [...sanitizedActivityJoiningRestrictedGuilds];
    ActivityJoiningRestrictedGuilds.updateSetting(items);
  }
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["T+nevN"]);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["b+bVSw"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const ActivityJoiningRestrictedGuilds = require(3803) /* explicitContentFromProto */.ActivityJoiningRestrictedGuilds;
    const setting = ActivityJoiningRestrictedGuilds.useSetting();
    return !setting.includes(callback2().selectedGuildId);
  },
  onValueChange(arg0) {
    const tmp = callback();
    const sanitizedActivityJoiningRestrictedGuilds = require(5793) /* getSanitizedRestrictedGuilds */.getSanitizedActivityJoiningRestrictedGuilds();
    if (arg0) {
      sanitizedActivityJoiningRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityJoiningRestrictedGuilds.add(tmp);
    }
    const ActivityJoiningRestrictedGuilds = require(3803) /* explicitContentFromProto */.ActivityJoiningRestrictedGuilds;
    const items = [...sanitizedActivityJoiningRestrictedGuilds];
    ActivityJoiningRestrictedGuilds.updateSetting(items);
  }
};
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/GuildSettingActivityJoining.tsx");

export default toggle;
