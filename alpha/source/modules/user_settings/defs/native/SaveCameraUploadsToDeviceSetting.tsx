// Module ID: 17731
// Function ID: 17732
// Name: SaveCameraUploadsToDeviceSetting
// Dependencies: [1194, 8578, 504, 6070, 11737, 1113, 2]

// Module 17731 (SaveCameraUploadsToDeviceSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 6070 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
