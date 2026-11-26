// Module ID: 17427
// Function ID: 17428
// Name: VideoBackgroundSetting
// Dependencies: [8712, 1071, 5824, 11008, 5819, 5822, 11942, 1112, 10971, 2]

// Module 17427 (VideoBackgroundSetting)
import intl2 from "intl" /* 1112 */;
import applyBackgroundOption from "applyBackgroundOption" /* 5819 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 5822 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 5824 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 10971 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 11008 */;
import Constants from "Constants" /* 1071 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AnalyticsSections: c3, NOOP: closure_4, AnalyticsPages: hasOwnProperty } = Constants);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.lZTUPs);
  },
  parent: MobileUserSettings.VOICE,
  usePredicate() {
    return useIsVideoBackgroundEnabledDefault("VideoBackgroundSetting");
  },
  useValue: function useVideoBackgroundSettingValue() {
    const obj = LastUsedVideoBackgroundOption;
    const lastUsedVideoBackgroundOption = obj.useLastUsedVideoBackgroundOption();
    const obj2 = VideoBackgroundOptions;
    return "" + obj2.toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption);
  },
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
