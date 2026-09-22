// Module ID: 15401
// Function ID: 15402
// Name: AndroidClassicChatFontScaleSetting
// Dependencies: [15349, 8079, 4259, 1247, 1114, 11605, 1363, 2]

// Module 15401 (AndroidClassicChatFontScaleSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import _mod4259 from "module_4259" /* 4259 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import FontScaleStore from "FontScaleStore" /* 15349 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useFontScaleStore = FontScaleStore.useFontScaleStore;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.gFob3e);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, _mod4259.shallow);
  },
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
