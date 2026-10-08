// Module ID: 16055
// Function ID: 16056
// Name: SecureFramesPersistentCodesSetting
// Dependencies: [5129, 7966, 558, 576, 504, 16056, 11262, 1126, 2]

// Module 16055 (SecureFramesPersistentCodesSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import updatePersistentCodesEnabled from "updatePersistentCodesEnabled" /* 16056 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 5129 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSecureFramesPersistentCodesValue() {
  let persistentCodesEnabled;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesPersistedStore];
    const fn = function n() {
      return persistentCodesEnabled.getPersistentCodesEnabled();
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
}) : (function useSecureFramesPersistentCodesValue() {
  let persistentCodesEnabled;
  const items = [SecureFramesPersistedStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["opi/XK"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.opw5ls);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: tmp2,
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const obj = updatePersistentCodesEnabled;
    const result = obj.updatePersistentCodesEnabled(arg0);
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx");

export default toggle;
export const DataAndPrivacySecureFramesPersistentCodesSetting = toggle;
