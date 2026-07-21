// Module ID: 14442
// Function ID: 108847
// Name: radio
// Dependencies: []

// Module 14442 (radio)
let closure_3 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[10]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.vpgck1);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  usePredicate() {
    return arg1(dependencyMap[5]).useIsInActivityPrivacyCopyExperiment("ActivityPrivacyDefaultSharingSetting");
  },
  useOptions() {
    return React.useMemo(() => {
      let obj = { value: callback(closure_2[2]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF };
      const intl = callback(closure_2[3]).intl;
      obj.label = intl.string(callback(closure_2[3]).t.FzgQna);
      const intl2 = callback(closure_2[3]).intl;
      obj.subLabel = intl2.string(callback(closure_2[3]).t.SQxoyc);
      const items = [obj, , ];
      obj = { value: callback(closure_2[2]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS };
      const intl3 = callback(closure_2[3]).intl;
      obj.label = intl3.string(callback(closure_2[3]).t.1hvuGH);
      const intl4 = callback(closure_2[3]).intl;
      obj.subLabel = intl4.string(callback(closure_2[3]).t.odUCPE);
      items[1] = obj;
      obj = { value: callback(closure_2[2]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON };
      const intl5 = callback(closure_2[3]).intl;
      obj.label = intl5.string(callback(closure_2[3]).t.fQc5la);
      items[2] = obj;
      return items;
    }, []);
  },
  useValue() {
    const DefaultGuildsActivityRestrictedV2 = arg1(dependencyMap[4]).DefaultGuildsActivityRestrictedV2;
    return DefaultGuildsActivityRestrictedV2.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const DefaultGuildsActivityRestrictedV2 = arg1(dependencyMap[4]).DefaultGuildsActivityRestrictedV2;
    const setting = DefaultGuildsActivityRestrictedV2.getSetting();
    const DefaultGuildsActivityRestrictedV22 = arg1(dependencyMap[4]).DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV22.updateSetting(NumberResult);
    let obj = arg1(dependencyMap[5]);
    if (obj.getIsInActivityPrivacyUpsellExperiment("ActivityPrivacyDefaultSharingSetting")) {
      const affectedGuilds = arg1(dependencyMap[6]).computeAffectedGuilds(setting, NumberResult);
      if (null != affectedGuilds) {
        const activityRestrictionSettingName = arg1(dependencyMap[6]).getActivityRestrictionSettingName(NumberResult);
        const obj3 = arg1(dependencyMap[6]);
        obj = {};
        ({ direction: obj5.direction, affectedGuildIds: obj5.affectedGuildIds } = affectedGuilds);
        obj.settingName = activityRestrictionSettingName;
        importDefault(dependencyMap[7]).openLazy(arg1(dependencyMap[9])(dependencyMap[8], dependencyMap.paths), "ActivityPrivacyUpsellActionSheet", obj);
        const obj4 = importDefault(dependencyMap[7]);
      }
      const obj2 = arg1(dependencyMap[6]);
    }
  }
};
const radio = obj.createRadio(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default radio;
