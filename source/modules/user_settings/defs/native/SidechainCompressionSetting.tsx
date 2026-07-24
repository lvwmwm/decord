// Module ID: 14197
// Function ID: 109184
// Name: toggle
// Dependencies: [4177, 7751, 4191, 566, 10127, 1212, 8882, 2]

// Module 14197 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Features } from "DesktopSources";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/jwMtn"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  usePredicate() {
    return _isNativeReflectConstruct.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: function useSidechainCompressionSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getSidechainCompression());
  },
  onValueChange(sidechainCompression) {
    return importDefault(8882).setSidechainCompression(sidechainCompression);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.zlA23F);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("DesktopSources").fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default createToggle;
