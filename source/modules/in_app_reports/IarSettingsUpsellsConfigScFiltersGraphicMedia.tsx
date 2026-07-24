// Module ID: 7704
// Function ID: 61327
// Name: items
// Dependencies: [5678, 1282, 1212, 7690, 2]

// Module 7704 (items)
let obj = {
  getTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.RVX1zT);
  },
  getDisabledTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.SYkEBi);
  },
  getDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.aqlmp8);
  }
};
const items = [require("ReportNames").ReportSubType.SUB_GORE, require("ReportNames").ReportSubType.SUB_GLORIFYING_VIOLENCE];
obj.eligibleReportSubtypes = items;
obj.onApply = function onApply() {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  let obj = require(5678) /* resolveGoreSettingWithDefaults */;
  const goreContentSettingOrDefault = require(5678) /* resolveGoreSettingWithDefaults */.getGoreContentSettingOrDefault();
  obj = {};
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  if (goreContentGuilds === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW) {
    obj.goreContentGuilds = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
  }
  if (goreContentFriendDm === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW) {
    obj.goreContentFriendDm = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
  }
  if (goreContentNonFriendDm === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW) {
    obj.goreContentNonFriendDm = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
  }
  return obj.updateGoreContentSetting(obj);
};
obj.predicate = function predicate() {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  const goreContentSettingOrDefault = require(5678) /* resolveGoreSettingWithDefaults */.getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  let tmp2 = goreContentGuilds === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW;
  if (!tmp2) {
    tmp2 = goreContentFriendDm === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW;
  }
  if (!tmp2) {
    tmp2 = goreContentNonFriendDm === require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW;
  }
  return tmp2;
};
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;
