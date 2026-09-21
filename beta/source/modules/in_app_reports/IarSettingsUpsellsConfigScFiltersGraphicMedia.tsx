// Module ID: 8919
// Function ID: 8920
// Name: IarSettingsUpsellsConfigScFiltersGraphicMedia
// Dependencies: [7545, 1190, 1119, 8906, 2]

// Module 8919 (IarSettingsUpsellsConfigScFiltersGraphicMedia)
import util from "util" /* 1119 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7545 */;
import MenuTypes from "MenuTypes" /* 8906 */;
import size from "module_2" /* 2 */;

let obj = {
  getTitle() {
    const intl = util.intl;
    return intl.string(util.t.RVX1zT);
  },
  getDisabledTitle() {
    const intl = util.intl;
    return intl.string(util.t.SYkEBi);
  },
  getDescription() {
    const intl = util.intl;
    return intl.string(util.t.aqlmp8);
  },
  eligibleReportSubtypes: null,
  onApply: null,
  predicate: null
};
const items = [MenuTypes.ReportSubType.SUB_GORE, MenuTypes.ReportSubType.SUB_GLORIFYING_VIOLENCE];
obj.eligibleReportSubtypes = items;
obj.onApply = function onApply() {
  const obj = SensitiveMediaGoreRedactionSettingsUtils;
  const goreContentSettingOrDefault = SensitiveMediaGoreRedactionSettingsUtils.getGoreContentSettingOrDefault();
  const obj3 = {};
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  if (goreContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj3.goreContentGuilds = tmp(1190).ExplicitContentRedaction.BLUR;
  }
  if (goreContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj3.goreContentFriendDm = tmp(1190).ExplicitContentRedaction.BLUR;
  }
  if (goreContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj3.goreContentNonFriendDm = tmp(1190).ExplicitContentRedaction.BLUR;
  }
  return obj.updateGoreContentSetting(obj3);
};
obj.predicate = function predicate() {
  const goreContentSettingOrDefault = SensitiveMediaGoreRedactionSettingsUtils.getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  return goreContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW || goreContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW || goreContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW;
};
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;
