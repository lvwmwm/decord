// Module ID: 17308
// Function ID: 17309
// Name: AndroidClassicChatFontScaleSetting
// Dependencies: [17256, 8432, 4929, 1259, 1113, 11540, 1375, 2]

// Module 17308 (AndroidClassicChatFontScaleSetting)
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import _slicedToArray from "_slicedToArray" /* 4929 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import FontScaleStore from "FontScaleStore" /* 17256 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
