// Module ID: 15676
// Function ID: 15677
// Name: VideoUploadQualitySetting
// Dependencies: [1207, 7974, 558, 576, 504, 15675, 2041, 1126, 10629, 2]

// Module 15676 (VideoUploadQualitySetting)
import react from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import UnsyncedUserSettingsStore2 from "UnsyncedUserSettingsStore" /* 1207 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import UserSettingsText from "UserSettingsText" /* 15675 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const UnsyncedUserSettingsStore = UnsyncedUserSettingsStore2;

let tmp;
const get_initialized = tmp(504);
const VideoQualitySettings = UnsyncedUserSettingsStore2.VideoQualitySettings;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVideoUploadQualitySettingValue() {
  let tmp4;
  let tmp5;
  let videoUploadQuality;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnsyncedUserSettingsStore];
    const fn = function o() {
      return videoUploadQuality.videoUploadQuality;
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
}) : (function useVideoUploadQualitySettingValue() {
  let videoUploadQuality;
  const items = [UnsyncedUserSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
});
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.PXq9f1);
  },
  parent: MobileUserSettings.CHAT,
  useValue: tmp2,
  onValueChange: function onVideoUploadQualitySettingValueChange(videoUploadQuality) {
    let ViewImageDescriptions;
    const obj = { videoUploadQuality, viewImageDescriptions: ViewImageDescriptions.getSetting(), lowQualityImageMode: null, dataSavingMode: null };
    const setVideoUploadQuality = UserSettingsText.setVideoUploadQuality;
    UserSettingsText;
    ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    ({ lowQualityImageMode: obj.lowQualityImageMode, dataSavingMode: obj.dataSavingMode } = UnsyncedUserSettingsStore);
    const result = setVideoUploadQuality(obj);
  },
  useOptions: function useVideoUploadQualitySettingOptions() {
    let intl;
    let intl2;
    let intl3;
    const obj = { label: intl.string(intl4.t.cWGW5d), value: VideoQualitySettings.BEST };
    intl = intl4.intl;
    const items = [obj, , ];
    const obj2 = { label: intl2.string(intl4.t["5hKnyC"]), value: VideoQualitySettings.STANDARD };
    intl2 = intl4.intl;
    items[1] = obj2;
    const obj3 = { label: intl3.string(intl4.t.y5k4ZJ), value: VideoQualitySettings.DATA_SAVER };
    intl3 = intl4.intl;
    items[2] = obj3;
    return items;
  }
};
const radio = SettingBuilders.createRadio(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/VideoUploadQualitySetting.tsx");

export default radio;
