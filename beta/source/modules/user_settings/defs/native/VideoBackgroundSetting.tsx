// Module ID: 18328
// Function ID: 18329
// Name: VideoBackgroundSetting
// Dependencies: [8536, 1072, 6094, 12162, 6089, 6092, 11717, 1113, 12142, 2]

// Module 18328 (VideoBackgroundSetting)
import intl2 from "intl" /* 1113 */;
import applyBackgroundOption from "applyBackgroundOption" /* 6089 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 6092 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 6094 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 12142 */;
import VideoBackgroundOptions from "VideoBackgroundOptions" /* 12162 */;
import Constants from "Constants" /* 1072 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
