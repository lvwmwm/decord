// Module ID: 14173
// Function ID: 107317
// Name: toggle
// Dependencies: []

// Module 14173 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.99tBAC);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CHAT,
  useValue: function useSaveCameraUploadsToDeviceValue() {
    const items = [closure_3];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => obj.saveCameraUploadsToDevice);
  },
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    let obj = importDefault(dependencyMap[3]);
    obj = { saveCameraUploadsToDevice };
    const result = obj.updatedUnsyncedSettings(obj);
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default toggle;
