// Module ID: 7603
// Function ID: 60964
// Name: items
// Dependencies: [7611, 482, 22, 3974, 689]

// Module 7603 (items)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const obj = {
  getTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.Gtck/t);
  },
  getDisabledTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.E6UmXa);
  },
  getDescription() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.jcRSp6);
  }
};
const items = [require("AccessibilityAnnouncer").ReportSubType.SUB_CSAM, require("AccessibilityAnnouncer").ReportSubType.SUB_LOLI, require("AccessibilityAnnouncer").ReportSubType.SUB_NCP, require("AccessibilityAnnouncer").ReportSubType.SUB_SEXUALLY_DEGRADING_CONTENT, require("AccessibilityAnnouncer").ReportSubType.SUB_UNSOLICITED_PORN];
obj.eligibleReportSubtypes = items;
obj.onApply = function onApply() {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  let obj = require(dependencyMap[0]);
  const explicitContentSettingOrDefault = require(dependencyMap[0]).getExplicitContentSettingOrDefault();
  obj = {};
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  if (explicitContentGuilds === require(dependencyMap[1]).ExplicitContentRedaction.SHOW) {
    obj.explicitContentGuilds = require(dependencyMap[1]).ExplicitContentRedaction.BLUR;
  }
  if (explicitContentFriendDm === require(dependencyMap[1]).ExplicitContentRedaction.SHOW) {
    obj.explicitContentFriendDm = require(dependencyMap[1]).ExplicitContentRedaction.BLUR;
  }
  if (explicitContentNonFriendDm === require(dependencyMap[1]).ExplicitContentRedaction.SHOW) {
    obj.explicitContentNonFriendDm = require(dependencyMap[1]).ExplicitContentRedaction.BLUR;
  }
  return obj.updateExplicitContentSetting(obj);
};
obj.predicate = function predicate() {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  const explicitContentSettingOrDefault = require(dependencyMap[0]).getExplicitContentSettingOrDefault();
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = explicitContentSettingOrDefault);
  let tmp2 = explicitContentGuilds === require(dependencyMap[1]).ExplicitContentRedaction.SHOW;
  if (!tmp2) {
    tmp2 = explicitContentFriendDm === require(dependencyMap[1]).ExplicitContentRedaction.SHOW;
  }
  if (!tmp2) {
    tmp2 = explicitContentNonFriendDm === require(dependencyMap[1]).ExplicitContentRedaction.SHOW;
  }
  return tmp2;
};
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigScFiltersSexualMedia.tsx");

export default obj;
