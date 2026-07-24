// Module ID: 14348
// Function ID: 109871
// Name: toggle
// Dependencies: [1280, 7751, 566, 8042, 10127, 1212, 2]

// Module 14348 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["99tBAC"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useSaveCameraUploadsToDeviceValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.saveCameraUploadsToDevice);
  },
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    let obj = importDefault(8042);
    obj = { saveCameraUploadsToDevice };
    const result = obj.updatedUnsyncedSettings(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default createToggle;
