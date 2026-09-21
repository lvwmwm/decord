// Module ID: 16222
// Function ID: 16223
// Name: ActivityPrivacyDefaultSharingSetting
// Dependencies: [19, 8238, 558, 568, 1190, 1119, 2023, 16223, 15118, 4725, 16224, 1984, 11594, 2]

// Module 16222 (ActivityPrivacyDefaultSharingSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import UserSettings from "UserSettings" /* 2023 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import ActivityPrivacyMatchingExperiment from "ActivityPrivacyMatchingExperiment" /* 16223 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(11594);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: tmp(1190).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF, label: null, subLabel: null };
    const intl = tmp(1119).intl;
    obj2.label = intl.string(tmp(1119).t.FzgQna);
    const intl2 = tmp(1119).intl;
    obj2.subLabel = intl2.string(tmp(1119).t.SQxoyc);
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { value: tmp(1190).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, label: null, subLabel: null };
    const intl3 = tmp(1119).intl;
    obj3.label = intl3.string(tmp(1119).t["1hvuGH"]);
    const intl4 = tmp(1119).intl;
    obj3.subLabel = intl4.string(tmp(1119).t.odUCPE);
    cResult[1] = obj3;
    let tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first, tmp5, ];
    const obj4 = { value: tmp(1190).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON, label: null };
    const intl5 = tmp(1119).intl;
    obj4.label = intl5.string(tmp(1119).t.fQc5la);
    items[2] = obj4;
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : (() => noop.useMemo(() => {
  const obj = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF, label: null, subLabel: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.FzgQna);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(util.t.SQxoyc);
  const items = [obj, , ];
  const obj2 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, label: null, subLabel: null };
  const intl3 = util.intl;
  obj2.label = intl3.string(util.t["1hvuGH"]);
  const intl4 = util.intl;
  obj2.subLabel = intl4.string(util.t.odUCPE);
  items[1] = obj2;
  const obj3 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON, label: null };
  const intl5 = util.intl;
  obj3.label = intl5.string(util.t.fQc5la);
  items[2] = obj3;
  return items;
}, []));
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.vpgck1);
  },
  parent: fn(8238).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  usePredicate() {
    return ActivityPrivacyMatchingExperiment.useIsInActivityPrivacyCopyExperiment("ActivityPrivacyDefaultSharingSetting");
  },
  useOptions: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(3);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { value: tmp(1190).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF, label: null, subLabel: null };
      const intl = tmp(1119).intl;
      obj2.label = intl.string(tmp(1119).t.FzgQna);
      const intl2 = tmp(1119).intl;
      obj2.subLabel = intl2.string(tmp(1119).t.SQxoyc);
      cResult[0] = obj2;
      let first = obj2;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { value: tmp(1190).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, label: null, subLabel: null };
      const intl3 = tmp(1119).intl;
      obj3.label = intl3.string(tmp(1119).t["1hvuGH"]);
      const intl4 = tmp(1119).intl;
      obj3.subLabel = intl4.string(tmp(1119).t.odUCPE);
      cResult[1] = obj3;
      let tmp5 = obj3;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [first, tmp5, ];
      const obj4 = { value: tmp(1190).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON, label: null };
      const intl5 = tmp(1119).intl;
      obj4.label = intl5.string(tmp(1119).t.fQc5la);
      items[2] = obj4;
      cResult[2] = items;
      let tmp6 = items;
    } else {
      tmp6 = cResult[2];
    }
    return tmp6;
  }) : (() => noop.useMemo(() => {
    const obj = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF, label: null, subLabel: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.FzgQna);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t.SQxoyc);
    const items = [obj, , ];
    const obj2 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, label: null, subLabel: null };
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t["1hvuGH"]);
    const intl4 = util.intl;
    obj2.subLabel = intl4.string(util.t.odUCPE);
    items[1] = obj2;
    const obj3 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON, label: null };
    const intl5 = util.intl;
    obj3.label = intl5.string(util.t.fQc5la);
    items[2] = obj3;
    return items;
  }, [])),
  useValue: () => {
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    return DefaultGuildsActivityRestrictedV2.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    const setting = DefaultGuildsActivityRestrictedV2.getSetting();
    const DefaultGuildsActivityRestrictedV22 = UserSettings.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV22.updateSetting(NumberResult);
    if (obj.getIsInActivityPrivacyUpsellExperiment("ActivityPrivacyDefaultSharingSetting")) {
      const affectedGuilds = tmp2(15118).computeAffectedGuilds(setting, NumberResult);
      if (null != affectedGuilds) {
        const activityRestrictionSettingName = tmp2(15118).getActivityRestrictionSettingName(NumberResult);
        const tmp2Result2 = tmp2(15118);
        const obj2 = { direction: null, affectedGuildIds: null, settingName: null };
        ({ direction: obj5.direction, affectedGuildIds: obj5.affectedGuildIds } = affectedGuilds);
        obj2.settingName = activityRestrictionSettingName;
        ActionSheetActionCreatorsDefault.openLazy(tmp2(1984)(16224, dependencyMap.paths), "ActivityPrivacyUpsellActionSheet", obj2);
      }
      const tmp2Result = tmp2(15118);
    }
  }
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default radio;
