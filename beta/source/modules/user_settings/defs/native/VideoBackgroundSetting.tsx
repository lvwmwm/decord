// Module ID: 15520
// Function ID: 15521
// Name: VideoBackgroundSetting
// Dependencies: [7421, 1086, 558, 576, 9091, 9453, 9087, 9089, 10874, 1127, 9434, 2]

// Module 15520 (VideoBackgroundSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1127 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import applyBackgroundOption from "applyBackgroundOption" /* 9087 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 9089 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 9091 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 9434 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 9453 */;
import Constants from "Constants" /* 1086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AnalyticsSections: c2, NOOP: c3, AnalyticsPages: closure_4 } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
  usePredicate: useIsVideoBackgroundSupportedDefault,
  useValue: tmp3,
  onValueChange: function onVideoBackgroundSettingChange(arg0) {
    let obj4;
    const fromVideoBackgroundRadioValue = VideoBackgroundOptions.fromVideoBackgroundRadioValue;
    VideoBackgroundOptions;
    const obj = VideoBackgroundOptions;
    const result = fromVideoBackgroundRadioValue(obj.parseVideoBackgroundRadioValue(arg0));
    const obj3 = { location: obj4 };
    obj4 = { page: constants2.USER_SETTINGS, section: constants.SETTINGS_VOICE_AND_VIDEO };
    const obj2 = applyBackgroundOption;
    const result1 = obj2.applyBackgroundOptionLive(result, obj3);
    result1.catch(_false);
    const obj5 = VideoBackgroundActionCreators;
    const result2 = obj5.saveLastUsedBackgroundOption(result);
    result2.catch(_false);
  },
  useOptions: VideoBackgroundOptions.useVideoBackgroundRadioOptions
};
const radio = SettingBuilders.createRadio(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoBackgroundSetting.tsx");

export default radio;
