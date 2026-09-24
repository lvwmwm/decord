// Module ID: 15738
// Function ID: 15739
// Name: SaveCameraUploadsToDeviceSetting
// Dependencies: [1188, 8270, 558, 568, 504, 9502, 11630, 1119, 2]

// Module 15738 (SaveCameraUploadsToDeviceSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9502 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1188 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnsyncedUserSettingsStore];
    const fn = function n() {
      return UnsyncedUserSettingsStore.saveCameraUploadsToDevice;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UnsyncedUserSettingsStore];
  return initialize.useStateFromStores(items, () => UnsyncedUserSettingsStore.saveCameraUploadsToDevice);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["99tBAC"]);
  },
  parent: fn(8270).MobileUserSettings.CHAT,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UnsyncedUserSettingsStore];
      const fn = function n() {
        return UnsyncedUserSettingsStore.saveCameraUploadsToDevice;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => UnsyncedUserSettingsStore.saveCameraUploadsToDevice);
  }),
  onValueChange: function onSaveCameraUploadsToDeviceValueChange(saveCameraUploadsToDevice) {
    const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ saveCameraUploadsToDevice });
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SaveCameraUploadsToDeviceSetting.tsx");

export default toggle;
