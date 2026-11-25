// Module ID: 16146
// Function ID: 16147
// Name: DirectMessageSpamFilterSetting
// Dependencies: [19, 8712, 16147, 4738, 11942, 1112, 16149, 2]

// Module 16146 (DirectMessageSpamFilterSetting)
import intl3 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import ModerationUtils from "ModerationUtils" /* 16147 */;
import useDerivedDMSpamFilterSetting from "useDerivedDMSpamFilterSetting" /* 16149 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.tiCXaH);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useOptions: function useDmSpamFilterSettingOptions() {
    return react.useMemo(() => {
      const obj = ModerationUtils;
      const dmSpamOptions = obj.generateDmSpamOptions();
      return dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
    }, []);
  },
  useValue: useDerivedDMSpamFilterSetting.useDerivedDmSpamFilterSettingValue,
  onValueChange: function onDmSpamFilterSettingValueChange(arg0) {
    const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
    DmSpamFilterV2.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = intl3.intl;
    const items = [intl.string(intl3.t.H9XOl3), ];
    const intl2 = intl3.intl;
    items[1] = intl2.string(intl3.t.k4W40P);
    return items;
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx");

export default radio;
