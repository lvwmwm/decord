// Module ID: 14165
// Function ID: 107289
// Name: toggle
// Dependencies: []

// Module 14165 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.ix8XIj);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CHAT,
  useValue: function useDataSavingModeSettingValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  },
  onValueChange: function onDataSavingModeSettingValueChange(dataSavingMode) {
    let obj = arg1(dependencyMap[3]);
    obj = { videoUploadQuality: closure_2.videoUploadQuality };
    const ViewImageDescriptions = arg1(dependencyMap[4]).ViewImageDescriptions;
    obj.viewImageDescriptions = ViewImageDescriptions.getSetting();
    obj.lowQualityImageMode = closure_2.lowQualityImageMode;
    obj.dataSavingMode = dataSavingMode;
    obj.setDataSavingMode(obj);
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default toggle;
