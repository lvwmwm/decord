// Module ID: 8357
// Function ID: 8358
// Name: IarSettingsUpsellsConfigDmSpamFilter
// Dependencies: [1114, 8345, 1094, 4834, 1197, 2]

// Module 8357 (IarSettingsUpsellsConfigDmSpamFilter)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import intl2 from "intl" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 4834 */;
import MenuTypes from "MenuTypes" /* 8345 */;
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
