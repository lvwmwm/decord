// Module ID: 8119
// Function ID: 8120
// Name: IarSettingsUpsellsConfigDmSpamFilter
// Dependencies: [1125, 8107, 1105, 4800, 1208, 2]

// Module 8119 (IarSettingsUpsellsConfigDmSpamFilter)
import ChannelTypes from "ChannelTypes" /* 1105 */;
import intl2 from "intl" /* 1125 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1208 */;
import UserSettings from "UserSettings" /* 4800 */;
import MenuTypes from "MenuTypes" /* 8107 */;
import size from "module_2" /* 2 */;

let items;
let items1;
const obj = {
  getTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.vJOqMB);
  },
  getDisabledTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["B5ZvY+"]);
  },
  getDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["43UEUh"]);
  },
  eligibleReportSubtypes: items,
  eligibleChannelTypes: items1,
  onApply() {
    const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
    return DmSpamFilterV2.updateSetting(preloaded_user_settings.DmSpamFilterV2.NON_FRIENDS);
  },
  predicate() {
    const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
    const setting = DmSpamFilterV2.getSetting();
    return setting === preloaded_user_settings.DmSpamFilterV2.DISABLED;
  }
};
items = [MenuTypes.ReportSubType.SUB_SPAM];
items1 = [ChannelTypes.ChannelTypes.DM, ChannelTypes.ChannelTypes.GROUP_DM];
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigDmSpamFilter.tsx");

export default obj;
