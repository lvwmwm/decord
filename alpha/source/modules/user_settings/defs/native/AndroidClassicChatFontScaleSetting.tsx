// Module ID: 15412
// Function ID: 15413
// Name: AndroidClassicChatFontScaleSetting
// Dependencies: [15360, 7966, 558, 576, 4690, 1271, 1126, 11262, 1381, 2]

// Module 15412 (AndroidClassicChatFontScaleSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import FontScaleStore from "FontScaleStore" /* 15360 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const _slicedToArray = tmp(4690);
const useFontScaleStore = FontScaleStore.useFontScaleStore;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useClassicChatFontScaleValue() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(isClassicChatFontScaleEnabled) {
      return isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return useFontScaleStore(first, _slicedToArray.shallow);
}) : (function useClassicChatFontScaleValue() {
  return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, _slicedToArray.shallow);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.gFob3e);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: tmp2,
  onValueChange: function onClassicChatFontScaleChange(isClassicChatFontScaleEnabled) {
    _require = isClassicChatFontScaleEnabled;
    let obj = require("react-native");
    return obj.batchUpdates(() => {
      const obj = { isClassicChatFontScaleEnabled };
      return useFontScaleStore.setState(obj);
    });
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.OU3q8a);
  },
  usePredicate: PlatformUtils.isAndroid
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;
