// Module ID: 18136
// Function ID: 18137
// Name: ShowSpoilersSetting
// Dependencies: [19, 9213, 1072, 5135, 1113, 12612, 2]

// Module 18136 (ShowSpoilersSetting)
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const SpoilerRenderSetting = Constants.SpoilerRenderSetting;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.QgwmVz);
  },
  parent: MobileUserSettings.CHAT,
  useValue: UserSettings.RenderSpoilers.useSetting,
  onValueChange: function onShowSpoilersChange(arg0) {
    const RenderSpoilers = UserSettings.RenderSpoilers;
    RenderSpoilers.updateSetting(arg0);
  },
  useOptions: function useShowSpoilersOptions() {
    return react.useMemo(() => {
      let intl;
      let intl2;
      let intl3;
      const obj = { label: intl.string(intl4.t["KFH/me"]), value: constants.ON_CLICK };
      intl = intl4.intl;
      const items = [obj, , ];
      const obj2 = { label: intl2.string(intl4.t.Pe1RbL), value: constants.ALWAYS };
      intl2 = intl4.intl;
      items[1] = obj2;
      const obj3 = { label: intl3.string(intl4.t.K5VTBE), value: constants.IF_MODERATOR };
      intl3 = intl4.intl;
      items[2] = obj3;
      return items;
    }, []);
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowSpoilersSetting.tsx");

export default radio;
