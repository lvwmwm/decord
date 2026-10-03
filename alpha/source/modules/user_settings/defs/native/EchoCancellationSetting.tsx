// Module ID: 15071
// Function ID: 15072
// Name: EchoCancellationSetting
// Dependencies: [1999, 7634, 558, 576, 504, 11129, 1126, 9673, 2]

// Module 15071 (EchoCancellationSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 9673 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let echoCancellation;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      return echoCancellation.getEchoCancellation();
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
}) : (() => {
  let echoCancellation;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.iWTwu6);
  },
  parent: MobileUserSettings.VOICE,
  useValue: tmp2,
  onValueChange: UserSettingsVoiceUtils.handleEchoCancellationChange
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;
