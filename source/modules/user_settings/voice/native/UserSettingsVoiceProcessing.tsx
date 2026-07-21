// Module ID: 10711
// Function ID: 83362
// Name: VoiceProcessingOptions
// Dependencies: []
// Exports: default

// Module 10711 (VoiceProcessingOptions)
class VoiceProcessingOptions {
  constructor() {
    tmp = closure_8();
    obj = arg1(dependencyMap[6]);
    items = [];
    items[0] = closure_4;
    stateFromStores = obj.useStateFromStores(items, () => closure_4.isNoiseCancellationSupported());
    obj2 = arg1(dependencyMap[7]);
    selectedNoiseSuppressionOption = obj2.useSelectedNoiseSuppressionOption();
    obj3 = arg1(dependencyMap[8]);
    noiseCancellationDeferredToSystem = obj3.useNoiseCancellationDeferredToSystem();
    if (stateFromStores) {
      obj = {};
      obj.style = tmp.optionsParentContainer;
      tmp11 = jsxs;
      tmp12 = arg1;
      tmp13 = dependencyMap;
      num4 = 10;
      tmp9 = jsxs;
      tmp10 = View;
      obj1 = {};
      obj1.value = selectedNoiseSuppressionOption;
      obj1.onChange = function noiseCancellationChanged(arg0) {
        callback2(closure_2[9]).setNoiseCancellation(arg0 === callback(closure_2[7]).NoiseSuppressionOpt.KRISP);
        const obj = callback2(closure_2[9]);
        callback2(closure_2[9]).setNoiseSuppression(arg0 === callback(closure_2[7]).NoiseSuppressionOpt.STANDARD);
      };
      num5 = 11;
      intl3 = arg1(dependencyMap[11]).intl;
      obj1.title = intl3.string(arg1(dependencyMap[11]).t.t8Qhib);
      flag2 = false;
      obj1.hasIcons = false;
      tmp14 = jsx;
      num6 = 12;
      obj2 = {};
      obj2.value = arg1(dependencyMap[7]).NoiseSuppressionOpt.KRISP;
      intl4 = arg1(dependencyMap[11]).intl;
      obj2.label = intl4.string(arg1(dependencyMap[11]).t.rdoNzt);
      obj2.disabled = noiseCancellationDeferredToSystem;
      items1 = [, , ];
      items1[0] = jsx(arg1(dependencyMap[12]).TableRadioRow, obj2);
      tmp15 = jsx;
      obj3 = {};
      obj3.disabled = noiseCancellationDeferredToSystem;
      obj3.value = arg1(dependencyMap[7]).NoiseSuppressionOpt.STANDARD;
      intl5 = arg1(dependencyMap[11]).intl;
      obj3.label = intl5.string(arg1(dependencyMap[11]).t.qXeYHw);
      items1[1] = jsx(arg1(dependencyMap[12]).TableRadioRow, obj3);
      tmp16 = jsx;
      obj4 = {};
      obj4.disabled = noiseCancellationDeferredToSystem;
      obj4.value = arg1(dependencyMap[7]).NoiseSuppressionOpt.NONE;
      intl6 = arg1(dependencyMap[11]).intl;
      obj4.label = intl6.string(arg1(dependencyMap[11]).t.wkYAlz);
      items1[2] = jsx(arg1(dependencyMap[12]).TableRadioRow, obj4);
      obj1.children = items1;
      items2 = [, ];
      items2[0] = jsxs(arg1(dependencyMap[10]).TableRadioGroup, obj1);
      obj5 = {};
      obj5.style = tmp.optionsDescriptionContainer;
      tmp19 = jsx;
      num7 = 13;
      tmp17 = jsxs;
      tmp18 = View;
      Text = arg1(dependencyMap[13]).Text;
      obj6 = {};
      tmp20 = arg1;
      tmp21 = dependencyMap;
      intl7 = arg1(dependencyMap[11]).intl;
      if (noiseCancellationDeferredToSystem) {
        obj7 = {};
        obj7.onSettingsClick = function onSettingsClick() {
          const mediaEngine = closure_4.getMediaEngine();
          const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
        };
        formatResult = intl7.format(tmp20(tmp21[11]).t.EUNgko, obj7);
      } else {
        formatResult = intl7.string(tmp20(tmp21[11]).t.k6h1F4);
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
      tmp25 = importDefault;
      tmp20 = dependencyMap;
      num8 = 14;
      tmp = importDefault(dependencyMap[14]);
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
      tmp6 = arg1;
      tmp7 = dependencyMap;
      num = 15;
      obj9 = {};
      flag = false;
      obj9.hasIcons = false;
      tmp8 = jsx;
      num2 = 16;
      obj10 = {};
      num3 = 11;
      intl = arg1(dependencyMap[11]).intl;
      obj10.label = intl.string(arg1(dependencyMap[11]).t.t8Qhib);
      intl2 = arg1(dependencyMap[11]).intl;
      obj10.subLabel = intl2.string(arg1(dependencyMap[11]).t.najZCV);
      obj10.value = selectedNoiseSuppressionOption === arg1(dependencyMap[7]).NoiseSuppressionOpt.STANDARD;
      obj10.onValueChange = function onValueChange(arg0) {
        const NoiseSuppressionOpt = callback(closure_2[7]).NoiseSuppressionOpt;
        return callback(closure_2[7]).handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
      };
      obj9.children = jsx(arg1(dependencyMap[16]).TableSwitchRow, obj10);
      return jsx(arg1(dependencyMap[15]).UserSettingsTableRowGroup, obj9);
    }
    return;
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { optionsParentContainer: { marginTop: 12 } };
obj = { paddingTop: importDefault(dependencyMap[5]).space.PX_4, gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.optionsDescriptionContainer = obj;
obj.krisp = { marginStart: -20 };
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx");

export default function UserSettingsVoiceProcessing() {
  let advancedVoiceActivitySupported;
  let automaticGainControl;
  let echoCancellation;
  let vadUseKrisp;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ echoCancellation: store.getEchoCancellation(), advancedVoiceActivitySupported: store.isAdvancedVoiceActivitySupported(), automaticGainControl: store.getAutomaticGainControl(), inputMode: store.getMode(), vadUseKrisp: store.getModeOptions().vadUseKrisp }));
  ({ advancedVoiceActivitySupported, inputMode: closure_0 } = stateFromStoresObject);
  obj = {};
  ({ echoCancellation, automaticGainControl, vadUseKrisp } = stateFromStoresObject);
  obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.6I6GUv);
  obj.hasIcons = false;
  const obj1 = {};
  const intl2 = arg1(dependencyMap[11]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[11]).t.iWTwu6);
  obj1.value = echoCancellation;
  obj1.onValueChange = arg1(dependencyMap[7]).handleEchoCancellationChange;
  obj.children = callback(arg1(dependencyMap[16]).TableSwitchRow, obj1);
  const items1 = [callback(arg1(dependencyMap[15]).UserSettingsTableRowGroup, obj), callback(VoiceProcessingOptions, {}), ];
  const obj2 = { hasIcons: false };
  const obj3 = {};
  const intl3 = arg1(dependencyMap[11]).intl;
  obj3.label = intl3.string(arg1(dependencyMap[11]).t.cUMdH0);
  const intl4 = arg1(dependencyMap[11]).intl;
  obj3.subLabel = intl4.string(arg1(dependencyMap[11]).t.6EjbvA);
  obj3.value = automaticGainControl;
  obj3.onValueChange = arg1(dependencyMap[7]).handleAutomaticGainControlChange;
  const items2 = [callback(arg1(dependencyMap[16]).TableSwitchRow, obj3), ];
  if (advancedVoiceActivitySupported) {
    const obj4 = {};
    const intl5 = arg1(dependencyMap[11]).intl;
    obj4.label = intl5.string(arg1(dependencyMap[11]).t.BbESsg);
    const intl6 = arg1(dependencyMap[11]).intl;
    obj4.subLabel = intl6.string(arg1(dependencyMap[11]).t.LoOB1F);
    obj4.value = vadUseKrisp;
    obj4.onValueChange = function onValueChange(vadUseKrisp) {
      let obj = callback(closure_2[9]);
      obj = { vadUseKrisp };
      return obj.setMode(closure_0, obj);
    };
    advancedVoiceActivitySupported = callback(arg1(dependencyMap[16]).TableSwitchRow, obj4);
  }
  items2[1] = advancedVoiceActivitySupported;
  obj2.children = items2;
  items1[2] = closure_6(arg1(dependencyMap[15]).UserSettingsTableRowGroup, obj2);
  obj.children = items1;
  return closure_6(closure_7, obj);
};
export { VoiceProcessingOptions };
