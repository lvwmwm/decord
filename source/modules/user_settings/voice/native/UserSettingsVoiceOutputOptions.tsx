// Module ID: 10704
// Function ID: 83351
// Name: UserSettingsVoiceOutputOptions
// Dependencies: []
// Exports: default

// Module 10704 (UserSettingsVoiceOutputOptions)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const MediaEngineContextTypes = arg1(dependencyMap[5]).MediaEngineContextTypes;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).createStyles({ slider: { marginTop: 4 } });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx");

export default function UserSettingsVoiceOutputOptions() {
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => store.getOutputVolume());
  let obj1 = arg1(dependencyMap[8]);
  const items1 = [closure_5, closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const lastActiveStream = lastActiveStream.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== id.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  const arg1 = stateFromStores1;
  let obj2 = arg1(dependencyMap[8]);
  const items2 = [closure_7];
  const items3 = [stateFromStores1];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores1) {
      num = store.getLocalVolume(stateFromStores1.ownerId, constants.STREAM);
    }
    return num;
  });
  const callback = React.useCallback((volume) => {
    callback(closure_2[9])(null != stateFromStores1, "Can not set stream volume without active stream");
    callback(closure_2[10]).setLocalVolume(stateFromStores1.ownerId, volume, constants.STREAM);
  }, items3);
  obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj.title = intl.string(arg1(dependencyMap[12]).t.UXxPGB);
  obj.hasIcons = false;
  obj = {};
  const intl2 = arg1(dependencyMap[12]).intl;
  obj.label = intl2.string(arg1(dependencyMap[12]).t.xPHVBs);
  obj1 = { style: tmp.slider, children: callback(importDefault(dependencyMap[14]), obj2) };
  obj2 = {
    style: tmp.slider,
    value: stateFromStores,
    onValueChange(closure_45) {
      return callback(closure_2[10]).setOutputVolume(closure_45);
    }
  };
  obj.subLabel = callback(View, obj1);
  const items4 = [callback(arg1(dependencyMap[13]).TableRow, obj), ];
  let tmp7 = null != stateFromStores1;
  if (tmp7) {
    const obj3 = {};
    const intl3 = arg1(dependencyMap[12]).intl;
    obj3.label = intl3.string(arg1(dependencyMap[12]).t.pEAl4b);
    const obj4 = { style: tmp.slider };
    const obj5 = { value: stateFromStores2, onValueChange: callback };
    obj4.children = callback(importDefault(dependencyMap[14]), obj5);
    obj3.subLabel = callback(View, obj4);
    tmp7 = callback(arg1(dependencyMap[13]).TableRow, obj3);
  }
  items4[1] = tmp7;
  obj.children = items4;
  return closure_10(arg1(dependencyMap[11]).UserSettingsTableRowGroup, obj);
};
