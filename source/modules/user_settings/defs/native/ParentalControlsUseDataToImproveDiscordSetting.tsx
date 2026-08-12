// Module ID: 14984
// Function ID: 14985
// Name: toggle
// Dependencies: [7038, 8123, 676, 7040, 14136, 10493, 1236, 2]

// Module 14984 (toggle)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import { Consents } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XuADY2);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToImproveDiscordSettingValue() {
    return require(14136) /* useParentalControlledExplicitContentSettings */.useParentalControlledConsent(Consents.USAGE_STATISTICS).hasConsented;
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.USAGE_STATISTICS];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.USAGE_STATISTICS];
      }
      importDefault(7040).updateTeenConsents(selectedTeenId, items1, items2);
      const obj = importDefault(7040);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx");

export default createToggle;
