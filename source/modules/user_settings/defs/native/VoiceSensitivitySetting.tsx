// Module ID: 14189
// Function ID: 109136
// Dependencies: [27, 4177, 7751, 33, 4130, 566, 10743, 8882, 10127, 1212, 2]

// Module 14189
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import createToggle from "createToggle";

let closure_6 = _createForOfIteratorHelperLoose.createStyles({ slider: { marginTop: 8 } });
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["sqUm+k"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    let vadAutoThreshold;
    let vadThreshold;
    let obj = inputMode(566);
    const items = [_isNativeReflectConstruct];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: outer1_4.getMode(), vadThreshold: outer1_4.getModeOptions().threshold, vadAutoThreshold: outer1_4.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    obj = { style: callback().slider, children: jsx(importDefault(10743), obj) };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        let obj = outer1_1(outer1_2[7]);
        obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    return <View auto={vadAutoThreshold} threshold={vadThreshold} onThresholdChange={function onThresholdChange(threshold) {
      let obj = outer1_1(outer1_2[7]);
      obj = { threshold };
      return obj.setMode(inputMode, obj);
    }} />;
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t.nuFtHH)];
    return items;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["sqUm+k"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    let vadAutoThreshold;
    let vadThreshold;
    let obj = inputMode(566);
    const items = [_isNativeReflectConstruct];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: outer1_4.getMode(), vadThreshold: outer1_4.getModeOptions().threshold, vadAutoThreshold: outer1_4.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    obj = { style: callback().slider, children: jsx(importDefault(10743), obj) };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        let obj = outer1_1(outer1_2[7]);
        obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    return <View auto={vadAutoThreshold} threshold={vadThreshold} onThresholdChange={function onThresholdChange(threshold) {
      let obj = outer1_1(outer1_2[7]);
      obj = { threshold };
      return obj.setMode(inputMode, obj);
    }} />;
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t.nuFtHH)];
    return items;
  }
});
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default createStaticResult;
