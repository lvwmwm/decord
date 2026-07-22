// Module ID: 7609
// Function ID: 61004
// Name: items
// Dependencies: []

// Module 7609 (items)
const obj = {
  getTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.RVX1zT);
  },
  getDisabledTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.SYkEBi);
  },
  getDescription() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.aqlmp8);
  }
};
const items = [require(dependencyMap[3]).ReportSubType.SUB_GORE, require(dependencyMap[3]).ReportSubType.SUB_GLORIFYING_VIOLENCE];
obj.eligibleReportSubtypes = items;
obj.onApply = function onApply() {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  let obj = require(dependencyMap[0]);
  const goreContentSettingOrDefault = require(dependencyMap[0]).getGoreContentSettingOrDefault();
  obj = {};
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  if (goreContentGuilds === require(dependencyMap[1]).ExplicitContentRedaction.SHOW) {
    obj.goreContentGuilds = require(dependencyMap[1]).ExplicitContentRedaction.BLUR;
  }
  if (goreContentFriendDm === require(dependencyMap[1]).ExplicitContentRedaction.SHOW) {
    obj.goreContentFriendDm = require(dependencyMap[1]).ExplicitContentRedaction.BLUR;
  }
  if (goreContentNonFriendDm === require(dependencyMap[1]).ExplicitContentRedaction.SHOW) {
    obj.goreContentNonFriendDm = require(dependencyMap[1]).ExplicitContentRedaction.BLUR;
  }
  return obj.updateGoreContentSetting(obj);
};
obj.predicate = function predicate() {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  const goreContentSettingOrDefault = require(dependencyMap[0]).getGoreContentSettingOrDefault();
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = goreContentSettingOrDefault);
  let tmp2 = goreContentGuilds === require(dependencyMap[1]).ExplicitContentRedaction.SHOW;
  if (!tmp2) {
    tmp2 = goreContentFriendDm === require(dependencyMap[1]).ExplicitContentRedaction.SHOW;
  }
  if (!tmp2) {
    tmp2 = goreContentNonFriendDm === require(dependencyMap[1]).ExplicitContentRedaction.SHOW;
  }
  return tmp2;
};
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx");

export default obj;
