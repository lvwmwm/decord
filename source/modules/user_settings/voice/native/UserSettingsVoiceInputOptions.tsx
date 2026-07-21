// Module ID: 10702
// Function ID: 83312
// Name: handleInputModePress
// Dependencies: []
// Exports: default

// Module 10702 (handleInputModePress)
function handleInputModePress() {
  let obj = arg1(dependencyMap[6]);
  obj = { key: "InputMode" };
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.pS+K2L);
  obj.header = obj;
  const obj1 = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[7]).t.Q8gkVL);
  obj1.onPress = function onPress() {
    callback(closure_2[8]).setMode(constants.PUSH_TO_TALK);
  };
  const items = [obj1, ];
  const obj2 = {};
  const intl3 = arg1(dependencyMap[7]).intl;
  obj2.label = intl3.string(arg1(dependencyMap[7]).t.cHCEOJ);
  obj2.onPress = function onPress() {
    callback(closure_2[8]).setMode(constants.VOICE_ACTIVITY);
  };
  items[1] = obj2;
  obj.options = items;
  obj.hasIcons = false;
  const result = obj.showSimpleActionSheet(obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const InputModes = arg1(dependencyMap[3]).InputModes;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ value: { textAlign: "right" }, slider: { marginTop: 4 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx");

export default function UserSettingsVoiceInputOptions() {
  const iter = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: store.getMode(), vadThreshold: store.getModeOptions().threshold, vadAutoThreshold: store.getModeOptions().autoThreshold }));
  const inputMode = stateFromStoresObject.inputMode;
  const arg1 = inputMode;
  const vadAutoThreshold = stateFromStoresObject.vadAutoThreshold;
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.LKCupB);
  obj.hasIcons = false;
  obj = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.label = intl2.string(arg1(dependencyMap[7]).t.pS+K2L);
  const obj1 = { style: iter.value };
  if (inputMode === InputModes.PUSH_TO_TALK) {
    const intl4 = arg1(dependencyMap[7]).intl;
    let stringResult = intl4.string(arg1(dependencyMap[7]).t.Q8gkVL);
  } else {
    const intl3 = arg1(dependencyMap[7]).intl;
    stringResult = intl3.string(arg1(dependencyMap[7]).t.cHCEOJ);
  }
  obj1.children = stringResult;
  obj.trailing = callback(arg1(dependencyMap[12]).Text, obj1);
  obj.onPress = handleInputModePress;
  const items1 = [callback(arg1(dependencyMap[11]).TableRow, obj), ];
  let tmp9 = null;
  if (inputMode !== InputModes.PUSH_TO_TALK) {
    const obj2 = {};
    const obj3 = {};
    const intl5 = arg1(dependencyMap[7]).intl;
    obj3.label = intl5.string(arg1(dependencyMap[7]).t.Z4oaN0);
    obj3.value = vadAutoThreshold;
    obj3.onValueChange = function onValueChange(autoThreshold) {
      let obj = callback(closure_2[8]);
      obj = { autoThreshold };
      return obj.setMode(inputMode, obj);
    };
    const items2 = [callback(arg1(dependencyMap[13]).TableSwitchRow, obj3), ];
    const obj4 = {};
    const intl6 = arg1(dependencyMap[7]).intl;
    obj4.label = intl6.string(arg1(dependencyMap[7]).t.o+2oMK);
    const obj5 = { style: iter.slider };
    const obj6 = {
      auto: vadAutoThreshold,
      threshold: stateFromStoresObject.vadThreshold,
      onThresholdChange(threshold) {
          let obj = callback(closure_2[8]);
          obj = { threshold };
          return obj.setMode(inputMode, obj);
        }
    };
    obj5.children = callback(importDefault(dependencyMap[14]), obj6);
    obj4.subLabel = callback(View, obj5);
    items2[1] = callback(arg1(dependencyMap[11]).TableRow, obj4);
    obj2.children = items2;
    tmp9 = callback2(closure_7, obj2);
  }
  items1[1] = tmp9;
  obj.children = items1;
  return callback2(arg1(dependencyMap[10]).UserSettingsTableRowGroup, obj);
};
export { handleInputModePress };
