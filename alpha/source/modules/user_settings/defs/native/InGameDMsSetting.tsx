// Module ID: 17875
// Function ID: 17876
// Name: InGameDMsSetting
// Dependencies: [19, 8424, 4834, 1197, 1114, 11505, 2]

// Module 17875 (InGameDMsSetting)
import intl4 from "intl" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["ms+Tme"]);
  },
  parent: MobileUserSettings.CONNECTED_GAMES,
  useOptions: function useInGameDMsSettingOptions() {
    return react.useMemo(() => {
      let intl;
      let intl2;
      let intl3;
      const obj = { value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL, label: intl.string(intl4.t.JIFnN9) };
      intl = intl4.intl;
      const items = [obj, , ];
      const obj2 = { value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME, label: intl2.string(intl4.t.rRdsk1) };
      intl2 = intl4.intl;
      items[1] = obj2;
      const obj3 = { value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE, label: intl3.string(intl4.t.AolKwN) };
      intl3 = intl4.intl;
      items[2] = obj3;
      return items;
    }, []);
  },
  useValue: function useInGameDMsSettingValue() {
    const SlayerSDKReceiveDMsInGame = UserSettings.SlayerSDKReceiveDMsInGame;
    let SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = SlayerSDKReceiveDMsInGame.useSetting();
    if (SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL === preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET) {
      SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
    }
    return SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
  },
  onValueChange: function onInGameDMsSettingValueChange(arg0) {
    const SlayerSDKReceiveDMsInGame = UserSettings.SlayerSDKReceiveDMsInGame;
    SlayerSDKReceiveDMsInGame.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t.XpBObB)];
    return items;
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InGameDMsSetting.tsx");

export default radio;
