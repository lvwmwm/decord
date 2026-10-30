// Module ID: 17386
// Function ID: 17387
// Name: SaveCameraUploadsToDeviceSetting
// Dependencies: [1195, 8424, 504, 5913, 11505, 1114, 2]

// Module 17386 (SaveCameraUploadsToDeviceSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5913 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["99tBAC"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: function useSaveCameraUploadsToDeviceValue() {
    const items = [UnsyncedUserSettingsStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => UnsyncedUserSettingsStore.saveCameraUploadsToDevice);
  },
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    const obj = UserSettingsActionCreatorsDefault;
    const obj2 = { saveCameraUploadsToDevice };
    const result = obj.updatedUnsyncedSettings(obj2);
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default toggle;
