// Module ID: 14011
// Function ID: 14012
// Name: radio
// Dependencies: [8005, 3957, 12386, 14012, 4253, 14013, 1988, 1236, 1306, 10364, 2]

// Module 14011 (radio)
import createToggle from "createToggle";

const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Qnf32C);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = require(3957) /* explicitContentFromProto */.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = require(3957) /* explicitContentFromProto */.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = require(3957) /* explicitContentFromProto */.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = require(12386) /* apexExperiment */;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = tmp2(14012).computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
        ({ direction: obj4[0], affectedGuildIds: obj4[1], settingName: obj4[2], mappedActivityValue: obj4[3] } = profileToActivityUpsell);
        importDefault(4253).openLazy(tmp2(1988)(14013, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = importDefault(4253);
      }
      const tmp2Result = tmp2(14012);
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
    return require(12386) /* apexExperiment */.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Qnf32C);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = require(3957) /* explicitContentFromProto */.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = require(3957) /* explicitContentFromProto */.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = require(3957) /* explicitContentFromProto */.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = require(12386) /* apexExperiment */;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = tmp2(14012).computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
        ({ direction: obj4[0], affectedGuildIds: obj4[1], settingName: obj4[2], mappedActivityValue: obj4[3] } = profileToActivityUpsell);
        importDefault(4253).openLazy(tmp2(1988)(14013, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = importDefault(4253);
      }
      const tmp2Result = tmp2(14012);
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
    return require(12386) /* apexExperiment */.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
};
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;
