// Module ID: 14921
// Function ID: 14922
// Name: DirectMessageSpamFilterSetting
// Dependencies: [19, 7966, 558, 576, 14922, 2040, 11262, 1126, 14924, 2]

// Module 14921 (DirectMessageSpamFilterSetting)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import useDerivedDMSpamFilterSetting from "useDerivedDMSpamFilterSetting" /* 14924 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let tmp;
const ModerationUtils = tmp(14922);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDmSpamFilterSettingOptions() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = ModerationUtils;
    const dmSpamOptions = tmpResult.generateDmSpamOptions();
    const mapped = dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
    cResult[0] = mapped;
    first = mapped;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useDmSpamFilterSettingOptions() {
  return react.useMemo(() => {
    const obj = ModerationUtils;
    const dmSpamOptions = obj.generateDmSpamOptions();
    return dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
  }, []);
});
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.tiCXaH);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useOptions: tmp2,
  useValue: useDerivedDMSpamFilterSetting.useDerivedDmSpamFilterSettingValue,
  onValueChange: function onDmSpamFilterSettingValueChange(arg0) {
    const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
    DmSpamFilterV2.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = intl3.intl;
    const items = [intl.string(intl3.t.H9XOl3), ];
    const intl2 = intl3.intl;
    items[1] = intl2.string(intl3.t.k4W40P);
    return items;
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx");

export default radio;
