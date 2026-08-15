// Module ID: 8149
// Function ID: 8150
// Name: items
// Dependencies: [1236, 8137, 692, 4066, 1306, 2]

// Module 8149 (items)
const obj = {
  getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.vJOqMB);
  },
  getDisabledTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["B5ZvY+"]);
  },
  getDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["43UEUh"]);
  },
  eligibleReportSubtypes: null,
  eligibleChannelTypes: null,
  onApply: null,
  predicate: null
};
const items = [require("ReportNames").ReportSubType.SUB_SPAM];
obj[3] = items;
const items1 = [require("set").ChannelTypes.DM, require("set").ChannelTypes.GROUP_DM];
obj[4] = items1;
obj[5] = function onApply() {
  const DmSpamFilterV2 = require(4066) /* explicitContentFromProto */.DmSpamFilterV2;
  return DmSpamFilterV2.updateSetting(require(1306) /* create */.DmSpamFilterV2.NON_FRIENDS);
};
obj[6] = function predicate() {
  const DmSpamFilterV2 = require(4066) /* explicitContentFromProto */.DmSpamFilterV2;
  const setting = DmSpamFilterV2.getSetting();
  return setting === require(1306) /* create */.DmSpamFilterV2.DISABLED;
};
const result = require("set").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx");

export default obj;
