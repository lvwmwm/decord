// Module ID: 13639
// Function ID: 103321
// Name: radio
// Dependencies: []

// Module 13639 (radio)
const _module = require(dependencyMap[9]);
const radio = _module.createRadio({
  useTitle() {
    const intl = require(dependencyMap[7]).intl;
    return intl.string(require(dependencyMap[7]).t.Qnf32C);
  },
  parent: require(dependencyMap[0]).MobileSetting.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = require(dependencyMap[1]).ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = require(dependencyMap[1]).ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = require(dependencyMap[1]).ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = require(dependencyMap[2]);
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = require(dependencyMap[3]).computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = {};
        ({ direction: obj4.direction, affectedGuildIds: obj4.affectedGuildIds, settingName: obj4.settingName, mappedActivityValue: obj4.mappedActivityValue } = profileToActivityUpsell);
        importDefault(dependencyMap[4]).openLazy(require(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = importDefault(dependencyMap[4]);
      }
      const obj2 = require(dependencyMap[3]);
    }
  },
  useOptions() {
    let obj = {};
    const intl = require(dependencyMap[7]).intl;
    obj.label = intl.string(require(dependencyMap[7]).t.Boxc8R);
    const intl2 = require(dependencyMap[7]).intl;
    obj.subLabel = intl2.string(require(dependencyMap[7]).t.nLj+nc);
    obj.value = require(dependencyMap[8]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    obj = {};
    const intl3 = require(dependencyMap[7]).intl;
    obj.label = intl3.string(require(dependencyMap[7]).t.YOIKBt);
    const intl4 = require(dependencyMap[7]).intl;
    obj.subLabel = intl4.string(require(dependencyMap[7]).t.y0JZ4s);
    obj.value = require(dependencyMap[8]).ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj;
    obj = {};
    const intl5 = require(dependencyMap[7]).intl;
    obj.label = intl5.string(require(dependencyMap[7]).t.u0nlJv);
    const intl6 = require(dependencyMap[7]).intl;
    obj.subLabel = intl6.string(require(dependencyMap[7]).t.4jnKHu);
    obj.value = require(dependencyMap[8]).ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj;
    return items;
  },
  usePredicate() {
    return require(dependencyMap[2]).useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
});
const _module1 = require(dependencyMap[10]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;
