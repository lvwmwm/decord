// Module ID: 14253
// Function ID: 109489
// Name: toggle
// Dependencies: [4212, 7733, 4226, 566, 10099, 1212, 8814, 2]

// Module 14253 (toggle)
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
    return importDefault(8814).setSidechainCompression(sidechainCompression);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.zlA23F);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("DesktopSources").fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default createToggle;
