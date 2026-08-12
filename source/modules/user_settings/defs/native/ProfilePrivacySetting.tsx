// Module ID: 14162
// Function ID: 14163
// Name: radio
// Dependencies: [8123, 4034, 12536, 14163, 4312, 14164, 2007, 1236, 1306, 10493, 2]

// Module 14162 (radio)
import createToggle from "createToggle";

const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Qnf32C);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = require(4034) /* explicitContentFromProto */.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = require(4034) /* explicitContentFromProto */.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = require(4034) /* explicitContentFromProto */.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = require(12536) /* apexExperiment */;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = tmp2(14163).computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
        ({ direction: obj4[0], affectedGuildIds: obj4[1], settingName: obj4[2], mappedActivityValue: obj4[3] } = profileToActivityUpsell);
        importDefault(4312).openLazy(tmp2(2007)(14164, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = importDefault(4312);
      }
      const tmp2Result = tmp2(14163);
    }
  },
  useOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t.Boxc8R);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["nLj+nc"]);
    obj[2] = require(1306) /* create */.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.YOIKBt);
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl4.string(require(1236) /* getSystemLocale */.t.y0JZ4s);
    obj[2] = require(1306) /* create */.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl5.string(require(1236) /* getSystemLocale */.t.u0nlJv);
    const intl6 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl6.string(require(1236) /* getSystemLocale */.t["4jnKHu"]);
    obj[2] = require(1306) /* create */.ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj;
    return items;
  },
  usePredicate() {
    return require(12536) /* apexExperiment */.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Qnf32C);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = require(4034) /* explicitContentFromProto */.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = require(4034) /* explicitContentFromProto */.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = require(4034) /* explicitContentFromProto */.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = require(12536) /* apexExperiment */;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = tmp2(14163).computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
        ({ direction: obj4[0], affectedGuildIds: obj4[1], settingName: obj4[2], mappedActivityValue: obj4[3] } = profileToActivityUpsell);
        importDefault(4312).openLazy(tmp2(2007)(14164, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = importDefault(4312);
      }
      const tmp2Result = tmp2(14163);
    }
  },
  useOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t.Boxc8R);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["nLj+nc"]);
    obj[2] = require(1306) /* create */.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.YOIKBt);
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl4.string(require(1236) /* getSystemLocale */.t.y0JZ4s);
    obj[2] = require(1306) /* create */.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl5.string(require(1236) /* getSystemLocale */.t.u0nlJv);
    const intl6 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl6.string(require(1236) /* getSystemLocale */.t["4jnKHu"]);
    obj[2] = require(1306) /* create */.ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj;
    return items;
  },
  usePredicate() {
    return require(12536) /* apexExperiment */.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
};
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;
