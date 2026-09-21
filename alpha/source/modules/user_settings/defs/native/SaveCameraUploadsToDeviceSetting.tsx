// Module ID: 15739
// Function ID: 15740
// Name: SaveCameraUploadsToDeviceSetting
// Dependencies: [1184, 8233, 504, 9472, 11725, 1115, 2]

// Module 15739 (SaveCameraUploadsToDeviceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9472 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;

require = fn;
const SettingBuilders = fn(11725);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["99tBAC"]);
  },
  parent: fn(8233).MobileUserSettings.CHAT,
  useValue: function useSaveCameraUploadsToDeviceValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => UnsyncedUserSettingsStore.saveCameraUploadsToDevice);
  },
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ saveCameraUploadsToDevice });
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default toggle;
