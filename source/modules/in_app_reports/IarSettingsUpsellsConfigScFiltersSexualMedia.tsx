// Module ID: 7683
// Function ID: 61358
// Name: items
// Dependencies: [5863, 1282, 1212, 7670, 2]

// Module 7683 (items)
let obj = {
  getTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["Gtck/t"]);
  },
  getDisabledTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.E6UmXa);
  },
  getDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jcRSp6);
  }
};
const items = [require("ReportNames").ReportSubType.SUB_CSAM, require("ReportNames").ReportSubType.SUB_LOLI, require("ReportNames").ReportSubType.SUB_NCP, require("ReportNames").ReportSubType.SUB_SEXUALLY_DEGRADING_CONTENT, require("ReportNames").ReportSubType.SUB_UNSOLICITED_PORN];
obj.eligibleReportSubtypes = items;
obj.onApply = function onApply() {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  let obj = require(5863) /* resolveExplicitContentSettingWithDefaults */;
  const explicitContentSettingOrDefault = require(5863) /* resolveExplicitContentSettingWithDefaults */.getExplicitContentSettingOrDefault();
  obj = {};
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  if (explicitContentGuilds === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentGuilds = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
  }
  if (explicitContentFriendDm === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentFriendDm = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
  }
  if (explicitContentNonFriendDm === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW) {
    obj.explicitContentNonFriendDm = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
  }
  return obj.updateExplicitContentSetting(obj);
};
obj.predicate = function predicate() {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  const explicitContentSettingOrDefault = require(5863) /* resolveExplicitContentSettingWithDefaults */.getExplicitContentSettingOrDefault();
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  let tmp2 = explicitContentGuilds === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW;
  if (!tmp2) {
    tmp2 = explicitContentFriendDm === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW;
  }
  if (!tmp2) {
    tmp2 = explicitContentNonFriendDm === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW;
  }
  return tmp2;
};
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx");

export default obj;
