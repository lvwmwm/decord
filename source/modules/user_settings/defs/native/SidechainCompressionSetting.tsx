// Module ID: 14016
// Function ID: 106610
// Name: toggle
// Dependencies: [1278, 7656, 653, 1324, 566, 10080, 1212, 14019]

// Module 14016 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Features } from "ME";
import initialize from "initialize";
import useAppearanceSettingTrailing from "useAppearanceSettingTrailing";

initialize = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t./jwMtn);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  usePredicate() {
    return _isNativeReflectConstruct.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: function useSidechainCompressionSettingValue() {
    const items = [_isNativeReflectConstruct];
    return arg1(dependencyMap[3]).useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
  },
  onValueChange(sidechainCompression) {
    return importDefault(dependencyMap[6]).setSidechainCompression(sidechainCompression);
  },
  useDescription() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.zlA23F);
  }
};
initialize = initialize.createToggle(initialize);
const result = useAppearanceSettingTrailing.fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default initialize;
