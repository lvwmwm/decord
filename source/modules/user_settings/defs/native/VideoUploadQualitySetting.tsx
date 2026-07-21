// Module ID: 14174
// Function ID: 107338
// Name: radio
// Dependencies: []

// Module 14174 (radio)
let closure_2 = importDefault(dependencyMap[0]);
const VideoQualitySettings = arg1(dependencyMap[0]).VideoQualitySettings;
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.PXq9f1);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CHAT,
  useValue: function useVideoUploadQualitySettingValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => videoUploadQuality.videoUploadQuality);
  },
  onValueChange: function onVideoUploadQualitySettingValueChange(videoUploadQuality) {
    let obj = arg1(dependencyMap[3]);
    obj = { videoUploadQuality };
    const ViewImageDescriptions = arg1(dependencyMap[4]).ViewImageDescriptions;
    obj.viewImageDescriptions = ViewImageDescriptions.getSetting();
    ({ lowQualityImageMode: obj2.lowQualityImageMode, dataSavingMode: obj2.dataSavingMode } = closure_2);
    const result = obj.setVideoUploadQuality(obj);
  },
  useOptions: function useVideoUploadQualitySettingOptions() {
    let obj = {};
    const intl = arg1(dependencyMap[5]).intl;
    obj.label = intl.string(arg1(dependencyMap[5]).t.cWGW5d);
    obj.value = VideoQualitySettings.BEST;
    const items = [obj, , ];
    obj = {};
    const intl2 = arg1(dependencyMap[5]).intl;
    obj.label = intl2.string(arg1(dependencyMap[5]).t.5hKnyC);
    obj.value = VideoQualitySettings.STANDARD;
    items[1] = obj;
    obj = {};
    const intl3 = arg1(dependencyMap[5]).intl;
    obj.label = intl3.string(arg1(dependencyMap[5]).t.y5k4ZJ);
    obj.value = VideoQualitySettings.DATA_SAVER;
    items[2] = obj;
    return items;
  }
};
const radio = obj.createRadio(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/VideoUploadQualitySetting.tsx");

export default radio;
