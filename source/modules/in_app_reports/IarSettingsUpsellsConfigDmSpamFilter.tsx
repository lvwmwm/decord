// Module ID: 7607
// Function ID: 60982
// Name: items
// Dependencies: []

// Module 7607 (items)
const obj = {
  getTitle() {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.vJOqMB);
  },
  getDisabledTitle() {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.B5ZvY+);
  },
  getDescription() {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.43UEUh);
  }
};
const items = [require(dependencyMap[1]).ReportSubType.SUB_SPAM];
obj.eligibleReportSubtypes = items;
const items1 = [require(dependencyMap[2]).ChannelTypes.DM, require(dependencyMap[2]).ChannelTypes.GROUP_DM];
obj.eligibleChannelTypes = items1;
obj.onApply = function onApply() {
  const DmSpamFilterV2 = require(dependencyMap[3]).DmSpamFilterV2;
  return DmSpamFilterV2.updateSetting(require(dependencyMap[4]).DmSpamFilterV2.NON_FRIENDS);
};
obj.predicate = function predicate() {
  const DmSpamFilterV2 = require(dependencyMap[3]).DmSpamFilterV2;
  const setting = DmSpamFilterV2.getSetting();
  return setting === require(dependencyMap[4]).DmSpamFilterV2.DISABLED;
};
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx");

export default obj;
