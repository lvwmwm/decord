// Module ID: 15586
// Function ID: 15587
// Name: AndroidClassicChatFontScaleSetting
// Dependencies: [15534, 8270, 558, 568, 4415, 1252, 1119, 11630, 1368, 2]

// Module 15586 (AndroidClassicChatFontScaleSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import _mod4415 from "module_4415" /* 4415 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import FontScaleStore from "FontScaleStore" /* 15534 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useFontScaleStore = FontScaleStore.useFontScaleStore;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isClassicChatFontScaleEnabled) {
      return isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return useFontScaleStore(first, _mod4415.shallow);
}) : (() => useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, _mod4415.shallow));
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.gFob3e);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function n(isClassicChatFontScaleEnabled) {
        return isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled;
      };
      cResult[0] = fn;
      let first = fn;
    } else {
      first = cResult[0];
    }
    return useFontScaleStore(first, _mod4415.shallow);
  }) : (() => useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, _mod4415.shallow)),
  onValueChange: function onClassicChatFontScaleChange(isClassicChatFontScaleEnabled) {
    _require = isClassicChatFontScaleEnabled;
    return require("ReactBatchUpdates").batchUpdates(() => useFontScaleStore.setState({ isClassicChatFontScaleEnabled }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = util.intl;
    return intl.string(util.t.OU3q8a);
  },
  usePredicate: PlatformUtils.isAndroid
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;
