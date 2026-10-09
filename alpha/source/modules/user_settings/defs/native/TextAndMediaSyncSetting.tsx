// Module ID: 15685
// Function ID: 15686
// Name: TextAndMediaSyncSetting
// Dependencies: [1206, 7974, 558, 576, 504, 10629, 1126, 5259, 2]

// Module 15685 (TextAndMediaSyncSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5259 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1206 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTextAndMediaSyncSettingValue() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectivelySyncedUserSettingsStore];
    const fn = function s() {
      return SelectivelySyncedUserSettingsStore.shouldSync("text");
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
}) : (function useTextAndMediaSyncSettingValue() {
  const items = [SelectivelySyncedUserSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3340dY"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: tmp2,
  onValueChange: UserSettingsActionCreatorsDefault.setShouldSyncTextSettings
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default toggle;
