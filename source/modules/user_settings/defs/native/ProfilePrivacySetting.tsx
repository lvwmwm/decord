// Module ID: 13860
// Function ID: 106106
// Name: radio
// Dependencies: [7733, 3838, 12159, 13861, 4133, 13862, 1935, 1212, 1282, 10099, 2]

// Module 13860 (radio)
import createToggle from "createToggle";

const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Qnf32C);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = require(3838) /* explicitContentFromProto */.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = require(3838) /* explicitContentFromProto */.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = require(3838) /* explicitContentFromProto */.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = require(12159) /* apexExperiment */;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = require(13861) /* getPermissiveness */.computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = {};
        ({ direction: obj4.direction, affectedGuildIds: obj4.affectedGuildIds, settingName: obj4.settingName, mappedActivityValue: obj4.mappedActivityValue } = profileToActivityUpsell);
        importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(13862, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = importDefault(4133);
      }
      const obj2 = require(13861) /* getPermissiveness */;
    }
  },
  useOptions() {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.Boxc8R);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl2.string(require(1212) /* getSystemLocale */.t["nLj+nc"]);
    obj.value = require(1282) /* _callSuper */.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t.YOIKBt);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl4.string(require(1212) /* getSystemLocale */.t.y0JZ4s);
    obj.value = require(1282) /* _callSuper */.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj;
    obj = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl5.string(require(1212) /* getSystemLocale */.t.u0nlJv);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl6.string(require(1212) /* getSystemLocale */.t["4jnKHu"]);
    obj.value = require(1282) /* _callSuper */.ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj;
    return items;
  },
  usePredicate() {
    return require(12159) /* apexExperiment */.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Qnf32C);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = require(3838) /* explicitContentFromProto */.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = require(3838) /* explicitContentFromProto */.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = require(3838) /* explicitContentFromProto */.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = require(12159) /* apexExperiment */;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = require(13861) /* getPermissiveness */.computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = {};
        ({ direction: obj4.direction, affectedGuildIds: obj4.affectedGuildIds, settingName: obj4.settingName, mappedActivityValue: obj4.mappedActivityValue } = profileToActivityUpsell);
        importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(13862, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = importDefault(4133);
      }
      const obj2 = require(13861) /* getPermissiveness */;
    }
  },
  useOptions() {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.Boxc8R);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl2.string(require(1212) /* getSystemLocale */.t["nLj+nc"]);
    obj.value = require(1282) /* _callSuper */.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t.YOIKBt);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl4.string(require(1212) /* getSystemLocale */.t.y0JZ4s);
    obj.value = require(1282) /* _callSuper */.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj;
    obj = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl5.string(require(1212) /* getSystemLocale */.t.u0nlJv);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl6.string(require(1212) /* getSystemLocale */.t["4jnKHu"]);
    obj.value = require(1282) /* _callSuper */.ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj;
    return items;
  },
  usePredicate() {
    return require(12159) /* apexExperiment */.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
};
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;
