// Module ID: 8950
// Function ID: 8951
// Name: IarSettingsUpsellsConfigScFiltersSexualMedia
// Dependencies: [7574, 1190, 1119, 8938, 2]

// Module 8950 (IarSettingsUpsellsConfigScFiltersSexualMedia)
import util from "util" /* 1119 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7574 */;
import MenuTypes from "MenuTypes" /* 8938 */;
import size from "module_2" /* 2 */;

let obj = {
  getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Gtck/t"]);
  },
  getDisabledTitle() {
    const intl = util.intl;
    return intl.string(util.t.E6UmXa);
  },
  getDescription() {
    const intl = util.intl;
    return intl.string(util.t.jcRSp6);
  },
  eligibleReportSubtypes: null,
  onApply: null,
  predicate: null
};
const items = [MenuTypes.ReportSubType.SUB_CSAM, MenuTypes.ReportSubType.SUB_LOLI, MenuTypes.ReportSubType.SUB_NCP, MenuTypes.ReportSubType.SUB_SEXUALLY_DEGRADING_CONTENT, MenuTypes.ReportSubType.SUB_UNSOLICITED_PORN];
obj.eligibleReportSubtypes = items;
obj.onApply = function onApply() {
  const obj = SensitiveMediaExplicitRedactionSettingsUtils;
  const explicitContentSettingOrDefault = SensitiveMediaExplicitRedactionSettingsUtils.getExplicitContentSettingOrDefault();
  const obj3 = {};
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  if (explicitContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj3.explicitContentGuilds = tmp(1190).ExplicitContentRedaction.BLUR;
  }
  if (explicitContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj3.explicitContentFriendDm = tmp(1190).ExplicitContentRedaction.BLUR;
  }
  if (explicitContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW) {
    obj3.explicitContentNonFriendDm = tmp(1190).ExplicitContentRedaction.BLUR;
  }
  return obj.updateExplicitContentSetting(obj3);
};
obj.predicate = function predicate() {
  const explicitContentSettingOrDefault = SensitiveMediaExplicitRedactionSettingsUtils.getExplicitContentSettingOrDefault();
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  return explicitContentGuilds === preloaded_user_settings.ExplicitContentRedaction.SHOW || explicitContentFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW || explicitContentNonFriendDm === preloaded_user_settings.ExplicitContentRedaction.SHOW;
};
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx");

export default obj;
