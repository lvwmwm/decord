// Module ID: 15678
// Function ID: 15679
// Name: SaveCameraUploadsToDeviceSetting
// Dependencies: [1207, 7974, 558, 576, 504, 5259, 10629, 1126, 2]

// Module 15678 (SaveCameraUploadsToDeviceSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5259 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSaveCameraUploadsToDeviceValue() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnsyncedUserSettingsStore];
    const fn = function o() {
      return UnsyncedUserSettingsStore.saveCameraUploadsToDevice;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useSaveCameraUploadsToDeviceValue() {
  const items = [UnsyncedUserSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => UnsyncedUserSettingsStore.saveCameraUploadsToDevice);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["99tBAC"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: tmp2,
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    const obj = UserSettingsActionCreatorsDefault;
    const obj2 = { saveCameraUploadsToDevice };
    const result = obj.updatedUnsyncedSettings(obj2);
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default toggle;
