// Module ID: 16673
// Function ID: 16674
// Name: VideoBackgroundSetting
// Dependencies: [8000, 1085, 558, 576, 5263, 11166, 5258, 5261, 10767, 1126, 11146, 2]

// Module 16673 (VideoBackgroundSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import applyBackgroundOption from "applyBackgroundOption" /* 5258 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 5261 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 5263 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 11146 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 11166 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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
