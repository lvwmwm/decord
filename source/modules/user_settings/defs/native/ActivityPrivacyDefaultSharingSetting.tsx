// Module ID: 14617
// Function ID: 111398
// Name: radio
// Dependencies: [31, 7751, 1282, 1212, 3803, 14618, 13805, 4098, 14619, 1934, 10127, 2]

// Module 14617 (radio)
import result from "result";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.vpgck1);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  usePredicate() {
    return require(14618) /* useIsInActivityPrivacyCopyExperiment */.useIsInActivityPrivacyCopyExperiment("ActivityPrivacyDefaultSharingSetting");
  },
  useOptions() {
    return React.useMemo(() => {
      let obj = { value: outer1_0(outer1_2[2]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF };
      const intl = outer1_0(outer1_2[3]).intl;
      obj.label = intl.string(outer1_0(outer1_2[3]).t.FzgQna);
      const intl2 = outer1_0(outer1_2[3]).intl;
      obj.subLabel = intl2.string(outer1_0(outer1_2[3]).t.SQxoyc);
      const items = [obj, , ];
      obj = { value: outer1_0(outer1_2[2]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS };
      const intl3 = outer1_0(outer1_2[3]).intl;
      obj.label = intl3.string(outer1_0(outer1_2[3]).t["1hvuGH"]);
      const intl4 = outer1_0(outer1_2[3]).intl;
      obj.subLabel = intl4.string(outer1_0(outer1_2[3]).t.odUCPE);
      items[1] = obj;
      obj = { value: outer1_0(outer1_2[2]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON };
      const intl5 = outer1_0(outer1_2[3]).intl;
      obj.label = intl5.string(outer1_0(outer1_2[3]).t.fQc5la);
      items[2] = obj;
      return items;
    }, []);
  },
  useValue() {
    const DefaultGuildsActivityRestrictedV2 = require(3803) /* explicitContentFromProto */.DefaultGuildsActivityRestrictedV2;
    return DefaultGuildsActivityRestrictedV2.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const DefaultGuildsActivityRestrictedV2 = require(3803) /* explicitContentFromProto */.DefaultGuildsActivityRestrictedV2;
    const setting = DefaultGuildsActivityRestrictedV2.getSetting();
    const DefaultGuildsActivityRestrictedV22 = require(3803) /* explicitContentFromProto */.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV22.updateSetting(NumberResult);
    let obj = require(14618) /* useIsInActivityPrivacyCopyExperiment */;
    if (obj.getIsInActivityPrivacyUpsellExperiment("ActivityPrivacyDefaultSharingSetting")) {
      const affectedGuilds = require(13805) /* getPermissiveness */.computeAffectedGuilds(setting, NumberResult);
      if (null != affectedGuilds) {
        const activityRestrictionSettingName = require(13805) /* getPermissiveness */.getActivityRestrictionSettingName(NumberResult);
        const obj3 = require(13805) /* getPermissiveness */;
        obj = {};
        ({ direction: obj5.direction, affectedGuildIds: obj5.affectedGuildIds } = affectedGuilds);
        obj.settingName = activityRestrictionSettingName;
        importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(14619, dependencyMap.paths), "ActivityPrivacyUpsellActionSheet", obj);
        const obj4 = importDefault(4098);
      }
      const obj2 = require(13805) /* getPermissiveness */;
    }
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("_callSuper").fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default createToggle;
