// Module ID: 15904
// Function ID: 15905
// Name: AutomaticGainControlSetting
// Dependencies: [2012, 8000, 558, 576, 504, 1126, 10767, 11158, 2]

// Module 15904 (AutomaticGainControlSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 11158 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAutomaticGainControlSettingValue() {
  let automaticGainControl;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      return automaticGainControl.getAutomaticGainControl();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useAutomaticGainControlSettingValue() {
  let automaticGainControl;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.cUMdH0);
  },
  parent: MobileUserSettings.VOICE,
  useValue: tmp2,
  onValueChange: UserSettingsVoiceUtils.handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["6EjbvA"]);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default toggle;
