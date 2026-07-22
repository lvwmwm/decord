// Module ID: 14026
// Function ID: 106663
// Name: volumeSlider
// Dependencies: [4173, 7656, 566, 1212, 10087, 10713, 2, 4173]

// Module 14026 (volumeSlider)
import closure_3 from "_isNativeReflectConstruct";
import getSystemLocale from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

getSystemLocale = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.xPHVBs);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 200,
  useValue: function useOutputVolumeSettingValue() {
    const items = [closure_3];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => outputVolume.getOutputVolume());
  },
  onValueChange: require("getSelectedNoiseSuppressionOption").setOutputVolume,
  useSearchTerms() {
    const intl = arg1(dependencyMap[4]).intl;
    const items = [intl.string(arg1(dependencyMap[4]).t.3182VD), ];
    const intl2 = arg1(dependencyMap[4]).intl;
    items[1] = intl2.string(arg1(dependencyMap[4]).t.DGq/PR);
    return items;
  },
  usePredicate() {
    return importDefault(dependencyMap[6]).useConfig({ location: "OutputVolumeSetting" }).audioOutputPresent;
  }
};
getSystemLocale = getSystemLocale.createVolumeSlider(getSystemLocale);
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/user_settings/defs/native/OutputVolumeSetting.tsx");

export default getSystemLocale;
