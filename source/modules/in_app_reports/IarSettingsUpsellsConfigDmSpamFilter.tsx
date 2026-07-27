// Module ID: 7646
// Function ID: 61262
// Name: items
// Dependencies: [1212, 7634, 669, 3804, 1282, 2]

// Module 7646 (items)
const obj = {
  getTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.vJOqMB);
  },
  getDisabledTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["B5ZvY+"]);
  },
  getDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["43UEUh"]);
  }
};
const items = [require("ReportNames").ReportSubType.SUB_SPAM];
obj.eligibleReportSubtypes = items;
const items1 = [require("set").ChannelTypes.DM, require("set").ChannelTypes.GROUP_DM];
obj.eligibleChannelTypes = items1;
obj.onApply = function onApply() {
  const DmSpamFilterV2 = require(3804) /* explicitContentFromProto */.DmSpamFilterV2;
  return DmSpamFilterV2.updateSetting(require(1282) /* _callSuper */.DmSpamFilterV2.NON_FRIENDS);
};
obj.predicate = function predicate() {
  const DmSpamFilterV2 = require(3804) /* explicitContentFromProto */.DmSpamFilterV2;
  const setting = DmSpamFilterV2.getSetting();
  return setting === require(1282) /* _callSuper */.DmSpamFilterV2.DISABLED;
};
const result = require("set").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx");

export default obj;
