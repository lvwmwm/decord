// Module ID: 17238
// Function ID: 17239
// Name: AndroidClassicChatFontScaleSetting
// Dependencies: [17186, 8424, 4924, 1260, 1114, 11505, 1376, 2]

// Module 17238 (AndroidClassicChatFontScaleSetting)
import intl2 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import _slicedToArray from "_slicedToArray" /* 4924 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import FontScaleStore from "FontScaleStore" /* 17186 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useFontScaleStore = FontScaleStore.useFontScaleStore;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.gFob3e);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, _slicedToArray.shallow);
  },
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
