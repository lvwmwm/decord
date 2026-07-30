// Module ID: 14271
// Function ID: 14272
// Name: toggle
// Dependencies: [4236, 7753, 4250, 589, 10116, 1236, 8834, 2]

// Module 14271 (toggle)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { Features } from "DesktopSources";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/jwMtn"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  usePredicate() {
    return _detectH265HardwareDecode.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: function useSidechainCompressionSettingValue() {
    const items = [_detectH265HardwareDecode];
    return require(589) /* initialize */.useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
  },
  onValueChange(arg0) {
    return importDefault(8834).setSidechainCompression(arg0);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.zlA23F);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("DesktopSources").fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default createToggle;
