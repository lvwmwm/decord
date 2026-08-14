// Module ID: 14734
// Function ID: 14735
// Name: toggle
// Dependencies: [1304, 8148, 589, 8761, 10421, 1236, 2]

// Module 14734 (toggle)
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["99tBAC"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useSaveCameraUploadsToDeviceValue() {
    const items = [CHANNEL_SIDEBAR_WIDTH];
    return require(589) /* initialize */.useStateFromStores(items, () => obj.saveCameraUploadsToDevice);
  },
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    let obj = importDefault(8761);
    obj = { saveCameraUploadsToDevice };
    const result = obj.updatedUnsyncedSettings(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default createToggle;
