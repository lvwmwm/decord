// Module ID: 14548
// Function ID: 110981
// Name: radio
// Dependencies: [31, 7662, 3803, 1282, 1212, 10095, 2]

// Module 14548 (radio)
import result from "result";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["ms+Tme"]);
  },
  parent: require("MobileSetting").MobileSetting.CONNECTED_GAMES,
  useOptions: function useInGameDMsSettingOptions() {
    return React.useMemo(() => {
      let obj = { value: outer1_0(outer1_1[3]).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL };
      const intl = outer1_0(outer1_1[4]).intl;
      obj.label = intl.string(outer1_0(outer1_1[4]).t.JIFnN9);
      const items = [obj, , ];
      obj = { value: outer1_0(outer1_1[3]).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME };
      const intl2 = outer1_0(outer1_1[4]).intl;
      obj.label = intl2.string(outer1_0(outer1_1[4]).t.rRdsk1);
      items[1] = obj;
      obj = { value: outer1_0(outer1_1[3]).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE };
      const intl3 = outer1_0(outer1_1[4]).intl;
      obj.label = intl3.string(outer1_0(outer1_1[4]).t.AolKwN);
      items[2] = obj;
      return items;
    }, []);
  },
  useValue: function useInGameDMsSettingValue() {
    const SlayerSDKReceiveDMsInGame = require(3803) /* explicitContentFromProto */.SlayerSDKReceiveDMsInGame;
    let SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = SlayerSDKReceiveDMsInGame.useSetting();
    if (SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL === require(1282) /* _callSuper */.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET) {
      SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = require(1282) /* _callSuper */.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
    }
    return SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
  },
  onValueChange: function onInGameDMsSettingValueChange(arg0) {
    const SlayerSDKReceiveDMsInGame = require(3803) /* explicitContentFromProto */.SlayerSDKReceiveDMsInGame;
    SlayerSDKReceiveDMsInGame.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t.XpBObB)];
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/InGameDMsSetting.tsx");

export default createToggle;
