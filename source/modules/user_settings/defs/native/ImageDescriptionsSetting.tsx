// Module ID: 14180
// Function ID: 107359
// Name: onImageDescriptionSettingValueChange
// Dependencies: []
// Exports: onImageDescriptionSettingValueChange

// Module 14180 (onImageDescriptionSettingValueChange)
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  let obj = arg1(dependencyMap[3]);
  obj = { videoUploadQuality: closure_2.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: closure_2.lowQualityImageMode, dataSavingMode: closure_2.dataSavingMode };
  obj.setImageDescriptions(obj);
}
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.w8j+yW);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = arg1(dependencyMap[2]).ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default toggle;
export { onImageDescriptionSettingValueChange };
