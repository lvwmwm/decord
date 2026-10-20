// Module ID: 17052
// Function ID: 17053
// Name: VideoBackgroundSetting
// Dependencies: [8276, 1087, 558, 576, 5822, 11505, 5817, 5820, 11099, 1128, 11485, 2]

// Module 17052 (VideoBackgroundSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import applyBackgroundOption from "applyBackgroundOption" /* 5817 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 5820 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 5822 */;
import SettingsConstants from "SettingsConstants" /* 8276 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 11485 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 11505 */;
import Constants from "Constants" /* 1087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AnalyticsSections: c3, NOOP: closure_4, AnalyticsPages: hasOwnProperty } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVideoBackgroundSettingValue() {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = LastUsedVideoBackgroundOption;
  const lastUsedVideoBackgroundOption = obj2.useLastUsedVideoBackgroundOption();
  if (cResult[0] !== lastUsedVideoBackgroundOption) {
    const tmpResult = VideoBackgroundOptions;
    const result = tmpResult.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
    cResult[0] = lastUsedVideoBackgroundOption;
    cResult[1] = result;
    tmp5 = result;
  } else {
    tmp5 = cResult[1];
  }
  return "" + tmp5;
}) : (function useVideoBackgroundSettingValue() {
  const obj = LastUsedVideoBackgroundOption;
  const lastUsedVideoBackgroundOption = obj.useLastUsedVideoBackgroundOption();
  const obj2 = VideoBackgroundOptions;
  return "" + obj2.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.lZTUPs);
  },
  parent: MobileUserSettings.VOICE,
  usePredicate() {
    return useIsVideoBackgroundEnabledDefault("VideoBackgroundSetting");
  },
  useValue: tmp3,
  onValueChange: function onVideoBackgroundSettingChange(arg0) {
    let obj4;
    const fromVideoBackgroundRadioValue = VideoBackgroundOptions.fromVideoBackgroundRadioValue;
    VideoBackgroundOptions;
    const obj = VideoBackgroundOptions;
    const result = fromVideoBackgroundRadioValue(obj.parseVideoBackgroundRadioValue(arg0));
    const obj3 = { location: obj4 };
    obj4 = { page: hasOwnProperty.USER_SETTINGS, section: constants.SETTINGS_VOICE_AND_VIDEO };
    const obj2 = applyBackgroundOption;
    const result1 = obj2.applyBackgroundOptionLive(result, obj3);
    result1.catch(React3);
    const obj5 = VideoBackgroundActionCreators;
    const result2 = obj5.saveLastUsedBackgroundOption(result);
    result2.catch(React3);
  },
  useOptions: VideoBackgroundOptions.useVideoBackgroundRadioOptions
};
const radio = SettingBuilders.createRadio(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoBackgroundSetting.tsx");

export default radio;
