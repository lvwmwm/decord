// Module ID: 14025
// Function ID: 106657
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 14025
import { View } from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

let closure_6 = __exportStarResult1.createStyles({ slider: { marginTop: 8 } });
const obj = {
  useTitle() {
    const intl = require(dependencyMap[9]).intl;
    return intl.string(require(dependencyMap[9]).t.sqUm+k);
  },
  parent: require("__exportStarResult1").MobileSetting.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    let vadAutoThreshold;
    let vadThreshold;
    let obj = require(dependencyMap[5]);
    const items = [closure_4];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: store.getMode(), vadThreshold: store.getModeOptions().threshold, vadAutoThreshold: store.getModeOptions().autoThreshold }));
    const require = stateFromStoresObject.inputMode;
    obj = { style: callback().slider, children: jsx(importDefault(dependencyMap[6]), obj) };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        let obj = callback(closure_2[7]);
        obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    return <View {...obj} />;
  },
  useSearchTerms() {
    const intl = require(dependencyMap[9]).intl;
    const items = [intl.string(require(dependencyMap[9]).t.nuFtHH)];
    return items;
  }
};
const result = __exportStarResult1.fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default __exportStarResult1.createStatic({
  useTitle() {
    const intl = require(dependencyMap[9]).intl;
    return intl.string(require(dependencyMap[9]).t.sqUm+k);
  },
  parent: require("__exportStarResult1").MobileSetting.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    let vadAutoThreshold;
    let vadThreshold;
    let obj = require(dependencyMap[5]);
    const items = [closure_4];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: store.getMode(), vadThreshold: store.getModeOptions().threshold, vadAutoThreshold: store.getModeOptions().autoThreshold }));
    const require = stateFromStoresObject.inputMode;
    obj = { style: callback().slider, children: jsx(importDefault(dependencyMap[6]), obj) };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        let obj = callback(closure_2[7]);
        obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    return <View {...obj} />;
  },
  useSearchTerms() {
    const intl = require(dependencyMap[9]).intl;
    const items = [intl.string(require(dependencyMap[9]).t.nuFtHH)];
    return items;
  }
});
