// Module ID: 14018
// Function ID: 106617
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 14018
import { View } from "result";
import closure_4 from "result";
import { jsx } from "result";
import result from "result";
import result from "result";
import result from "result";

let closure_6 = result.createStyles({ slider: { marginTop: 8 } });
const obj = {
  useTitle() {
    const intl = require(dependencyMap[9]).intl;
    return intl.string(require(dependencyMap[9]).t.sqUm+k);
  },
  parent: require("result").MobileSetting.VOICE,
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
result = result.fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default result.createStatic({
  useTitle() {
    const intl = require(dependencyMap[9]).intl;
    return intl.string(require(dependencyMap[9]).t.sqUm+k);
  },
  parent: require("result").MobileSetting.VOICE,
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
