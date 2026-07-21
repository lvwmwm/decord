// Module ID: 14423
// Function ID: 108753
// Name: radio
// Dependencies: [0, 0]

// Module 14423 (radio)
import __exportStarResult1 from "__exportStarResult1";

let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.ms+Tme);
  },
  parent: require("__exportStarResult1").MobileSetting.CONNECTED_GAMES,
  useOptions: function useInGameDMsSettingOptions() {
    return React.useMemo(() => {
      let obj = { value: callback(closure_1[3]).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL };
      const intl = callback(closure_1[4]).intl;
      obj.label = intl.string(callback(closure_1[4]).t.JIFnN9);
      const items = [obj, , ];
      obj = { value: callback(closure_1[3]).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME };
      const intl2 = callback(closure_1[4]).intl;
      obj.label = intl2.string(callback(closure_1[4]).t.rRdsk1);
      items[1] = obj;
      obj = { value: callback(closure_1[3]).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE };
      const intl3 = callback(closure_1[4]).intl;
      obj.label = intl3.string(callback(closure_1[4]).t.AolKwN);
      items[2] = obj;
      return items;
    }, []);
  },
  useValue: function useInGameDMsSettingValue() {
    const SlayerSDKReceiveDMsInGame = arg1(dependencyMap[2]).SlayerSDKReceiveDMsInGame;
    let SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = SlayerSDKReceiveDMsInGame.useSetting();
    if (SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL === arg1(dependencyMap[3]).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET) {
      SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = arg1(dependencyMap[3]).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
    }
    return SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
  },
  onValueChange: function onInGameDMsSettingValueChange(arg0) {
    const SlayerSDKReceiveDMsInGame = arg1(dependencyMap[2]).SlayerSDKReceiveDMsInGame;
    SlayerSDKReceiveDMsInGame.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = arg1(dependencyMap[4]).intl;
    const items = [intl.string(arg1(dependencyMap[4]).t.XpBObB)];
    return items;
  }
};
const radio = obj.createRadio(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/InGameDMsSetting.tsx");

export default radio;
