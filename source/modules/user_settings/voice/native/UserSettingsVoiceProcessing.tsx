// Module ID: 10751
// Function ID: 83627
// Name: VoiceProcessingOptions
// Dependencies: [31, 27, 4177, 33, 4130, 689, 566, 10752, 10753, 8882, 7654, 1212, 7653, 4126, 10756, 10738, 5502, 2]
// Exports: default

// Module 10751 (VoiceProcessingOptions)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
class VoiceProcessingOptions {
  constructor() {
    tmp = c8();
    obj = require("initialize");
    items = [];
    items[0] = c4;
    stateFromStores = obj.useStateFromStores(items, () => outer1_4.isNoiseCancellationSupported());
    obj2 = require("getSelectedNoiseSuppressionOption");
    selectedNoiseSuppressionOption = obj2.useSelectedNoiseSuppressionOption();
    obj3 = require("getNoiseCancellationDeferredToSystem");
    noiseCancellationDeferredToSystem = obj3.useNoiseCancellationDeferredToSystem();
    if (stateFromStores) {
      obj = {};
      obj.style = tmp.optionsParentContainer;
      tmp11 = jsxs;
      tmp12 = closure_0;
      tmp13 = closure_2;
      num4 = 10;
      tmp9 = jsxs;
      tmp10 = View;
      obj1 = {};
      obj1.value = selectedNoiseSuppressionOption;
      obj1.onChange = function noiseCancellationChanged(arg0) {
        outer1_1(outer1_2[9]).setNoiseCancellation(arg0 === outer1_0(outer1_2[7]).NoiseSuppressionOpt.KRISP);
        const obj = outer1_1(outer1_2[9]);
        outer1_1(outer1_2[9]).setNoiseSuppression(arg0 === outer1_0(outer1_2[7]).NoiseSuppressionOpt.STANDARD);
      };
      num5 = 11;
      intl3 = require("getSystemLocale").intl;
      obj1.title = intl3.string(require("getSystemLocale").t.t8Qhib);
      flag2 = false;
      obj1.hasIcons = false;
      tmp14 = jsx;
      num6 = 12;
      obj2 = {};
      obj2.value = require("getSelectedNoiseSuppressionOption").NoiseSuppressionOpt.KRISP;
      intl4 = require("getSystemLocale").intl;
      obj2.label = intl4.string(require("getSystemLocale").t.rdoNzt);
      obj2.disabled = noiseCancellationDeferredToSystem;
      items1 = [, , ];
      items1[0] = jsx(require("TableRadioRow").TableRadioRow, obj2);
      tmp15 = jsx;
      obj3 = {};
      obj3.disabled = noiseCancellationDeferredToSystem;
      obj3.value = require("getSelectedNoiseSuppressionOption").NoiseSuppressionOpt.STANDARD;
      intl5 = require("getSystemLocale").intl;
      obj3.label = intl5.string(require("getSystemLocale").t.qXeYHw);
      items1[1] = jsx(require("TableRadioRow").TableRadioRow, obj3);
      tmp16 = jsx;
      obj4 = {};
      obj4.disabled = noiseCancellationDeferredToSystem;
      obj4.value = require("getSelectedNoiseSuppressionOption").NoiseSuppressionOpt.NONE;
      intl6 = require("getSystemLocale").intl;
      obj4.label = intl6.string(require("getSystemLocale").t.wkYAlz);
      items1[2] = jsx(require("TableRadioRow").TableRadioRow, obj4);
      obj1.children = items1;
      items2 = [, ];
      items2[0] = jsxs(require("context").TableRadioGroup, obj1);
      obj5 = {};
      obj5.style = tmp.optionsDescriptionContainer;
      tmp19 = jsx;
      num7 = 13;
      tmp17 = jsxs;
      tmp18 = View;
      Text = require("Text").Text;
      obj6 = { variant: "text-xs/medium", color: "text-muted" };
      tmp20 = closure_0;
      tmp21 = closure_2;
      intl7 = require("getSystemLocale").intl;
      if (noiseCancellationDeferredToSystem) {
        obj7 = {};
        obj7.onSettingsClick = function onSettingsClick() {
          const mediaEngine = outer1_4.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        };
        formatResult = intl7.format(require("getSystemLocale").t.EUNgko, obj7);
      } else {
        formatResult = intl7.string(require("getSystemLocale").t.k6h1F4);
      }
      obj6.children = formatResult;
      tmp19Result = tmp19(Text, obj6);
      obj6 = [, ];
      obj6[0] = tmp19Result;
      tmp24 = jsx;
      tmp19 = View;
      obj8 = {};
      obj8.style = tmp.krisp;
      tmp21 = jsx;
      tmp25 = closure_1;
      tmp20 = closure_2;
      num8 = 14;
      tmp = require("handleKrispLinkPressed");
      obj8.children = jsx(tmp, {});
      Text = jsx(View, obj8);
      obj6[1] = Text;
      obj5.children = obj6;
      obj5 = tmp17(tmp18, obj5);
      items2[1] = obj5;
      obj.children = items2;
      tmp9Result = tmp9(tmp10, obj);
    } else {
      tmp5 = jsx;
      tmp6 = closure_0;
      tmp7 = closure_2;
      num = 15;
      obj9 = {};
      flag = false;
      obj9.hasIcons = false;
      tmp8 = jsx;
      num2 = 16;
      obj10 = {};
      num3 = 11;
      intl = require("getSystemLocale").intl;
      obj10.label = intl.string(require("getSystemLocale").t.t8Qhib);
      intl2 = require("getSystemLocale").intl;
      obj10.subLabel = intl2.string(require("getSystemLocale").t.najZCV);
      obj10.value = selectedNoiseSuppressionOption === require("getSelectedNoiseSuppressionOption").NoiseSuppressionOpt.STANDARD;
      obj10.onValueChange = function onValueChange(arg0) {
        const NoiseSuppressionOpt = outer1_0(outer1_2[7]).NoiseSuppressionOpt;
        return outer1_0(outer1_2[7]).handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
      };
      obj9.children = jsx(require("TableSwitchRow").TableSwitchRow, obj10);
      return jsx(require("UserSettingsVoice").UserSettingsTableRowGroup, obj9);
    }
    return;
  }
}
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { optionsParentContainer: { marginTop: 12 } };
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_4, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.optionsDescriptionContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.krisp = { marginStart: -20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx");

export default function UserSettingsVoiceProcessing() {
  let advancedVoiceActivitySupported;
  let automaticGainControl;
  let echoCancellation;
  let require;
  let vadUseKrisp;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ echoCancellation: outer1_4.getEchoCancellation(), advancedVoiceActivitySupported: outer1_4.isAdvancedVoiceActivitySupported(), automaticGainControl: outer1_4.getAutomaticGainControl(), inputMode: outer1_4.getMode(), vadUseKrisp: outer1_4.getModeOptions().vadUseKrisp }));
  ({ advancedVoiceActivitySupported, inputMode: require } = stateFromStoresObject);
  obj = {};
  ({ echoCancellation, automaticGainControl, vadUseKrisp } = stateFromStoresObject);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["6I6GUv"]);
  obj.hasIcons = false;
  const obj1 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl2.string(require(1212) /* getSystemLocale */.t.iWTwu6);
  obj1.value = echoCancellation;
  obj1.onValueChange = require(10752) /* getSelectedNoiseSuppressionOption */.handleEchoCancellationChange;
  obj.children = callback(require(5502) /* TableSwitchRow */.TableSwitchRow, obj1);
  const items1 = [callback(require(10738) /* UserSettingsVoice */.UserSettingsTableRowGroup, obj), callback(VoiceProcessingOptions, {}), ];
  const obj2 = { hasIcons: false };
  const obj3 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl3.string(require(1212) /* getSystemLocale */.t.cUMdH0);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj3.subLabel = intl4.string(require(1212) /* getSystemLocale */.t["6EjbvA"]);
  obj3.value = automaticGainControl;
  obj3.onValueChange = require(10752) /* getSelectedNoiseSuppressionOption */.handleAutomaticGainControlChange;
  const items2 = [callback(require(5502) /* TableSwitchRow */.TableSwitchRow, obj3), ];
  if (advancedVoiceActivitySupported) {
    const obj4 = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj4.label = intl5.string(require(1212) /* getSystemLocale */.t.BbESsg);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj4.subLabel = intl6.string(require(1212) /* getSystemLocale */.t.LoOB1F);
    obj4.value = vadUseKrisp;
    obj4.onValueChange = function onValueChange(vadUseKrisp) {
      let obj = outer1_1(outer1_2[9]);
      obj = { vadUseKrisp };
      return obj.setMode(closure_0, obj);
    };
    advancedVoiceActivitySupported = callback(require(5502) /* TableSwitchRow */.TableSwitchRow, obj4);
  }
  items2[1] = advancedVoiceActivitySupported;
  obj2.children = items2;
  items1[2] = closure_6(require(10738) /* UserSettingsVoice */.UserSettingsTableRowGroup, obj2);
  obj.children = items1;
  return closure_6(closure_7, obj);
};
export { VoiceProcessingOptions };
