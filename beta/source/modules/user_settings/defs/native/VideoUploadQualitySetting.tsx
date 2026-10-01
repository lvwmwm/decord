// Module ID: 15013
// Function ID: 15014
// Name: VideoUploadQualitySetting
// Dependencies: [1184, 7417, 504, 15012, 2021, 1115, 11006, 2]

// Module 15013 (VideoUploadQualitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1115 */;
import UnsyncedUserSettingsStore2 from "UnsyncedUserSettingsStore" /* 1184 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import UserSettingsText from "UserSettingsText" /* 15012 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const UnsyncedUserSettingsStore = UnsyncedUserSettingsStore2;

const VideoQualitySettings = UnsyncedUserSettingsStore2.VideoQualitySettings;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.PXq9f1);
  },
  parent: MobileUserSettings.CHAT,
  useValue: function useVideoUploadQualitySettingValue() {
    let videoUploadQuality;
    const items = [UnsyncedUserSettingsStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
  },
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
