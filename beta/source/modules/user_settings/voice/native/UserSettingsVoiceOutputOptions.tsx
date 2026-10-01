// Module ID: 9441
// Function ID: 9442
// Name: UserSettingsVoiceOutputOptions
// Dependencies: [19, 17, 4858, 502, 1993, 4861, 21, 4836, 504, 38, 9104, 9434, 1115, 5917, 9442, 2]
// Exports: default

// Module 9441 (UserSettingsVoiceOutputOptions)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 4861 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import VolumeSliderDefault from "VolumeSlider" /* 9442 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let lastActiveStream;

let c10;
let c9;
const View = react_native.View;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ slider: { marginTop: 4 } });
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx");

export default function UserSettingsVoiceOutputOptions() {
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items4;
  let obj10;
  let obj6;
  let obj7;
  let obj9;
  let outputVolume;
  let stateFromStores1;
  let tmp11Result;
  let tmp12;
  const tmp = closure_11();
  let tmp2 = stateFromStores1;
  let obj = stateFromStores1(504);
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => outputVolume.getOutputVolume());
  const items1 = [ApplicationStreamingStore, AuthenticationStore];
  const obj2 = stateFromStores1(504);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    lastActiveStream = lastActiveStream.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== id.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  const items2 = [MediaEngineStore];
  const items3 = [stateFromStores1];
  const obj3 = stateFromStores1(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores1) {
      num = MediaEngineStore.getLocalVolume(tmp.ownerId, MediaEngineContextTypes.STREAM);
    }
    return num;
  });
  const callback = react.useCallback((arg0) => {
    _modDef38(null != stateFromStores1, "Can not set stream volume without active stream");
    const obj = AudioActionCreatorsDefault;
    obj.setLocalVolume(stateFromStores1.ownerId, arg0, MediaEngineContextTypes.STREAM);
  }, items3);
  const obj4 = { title: intl.string(stateFromStores1(1115).t.UXxPGB), hasIcons: false, children: items4 };
  const UserSettingsTableRowGroup = stateFromStores1(9434).UserSettingsTableRowGroup;
  intl = stateFromStores1(1115).intl;
  const obj5 = { label: intl2.string(stateFromStores1(1115).t.xPHVBs), subLabel: closure_9(View, obj6) };
  const TableRow = stateFromStores1(5917).TableRow;
  intl2 = stateFromStores1(1115).intl;
  obj6 = { style: tmp.slider, children: closure_9(tmp12, obj7) };
  obj7 = {
    style: tmp.slider,
    value: stateFromStores,
    onValueChange(arg0) {
      const obj = AudioActionCreatorsDefault;
      return obj.setOutputVolume(arg0);
    },
    accessibilityLabel: intl3.string(stateFromStores1(1115).t.xPHVBs)
  };
  tmp12 = VolumeSliderDefault;
  intl3 = stateFromStores1(1115).intl;
  items4 = [closure_9(TableRow, obj5), ];
  let tmp9Result = null != stateFromStores1;
  const tmp10 = View;
  const tmp8 = closure_10;
  if (tmp9Result) {
    const obj8 = { label: intl4.string(tmp2(1115).t.pEAl4b), subLabel: closure_9(tmp10, obj9) };
    const TableRow2 = tmp2(5917).TableRow;
    intl4 = tmp2(1115).intl;
    obj9 = { style: tmp.slider, children: closure_9(tmp11Result, obj10) };
    obj10 = { value: stateFromStores2, onValueChange: callback, accessibilityLabel: intl5.string(tmp2(1115).t.pEAl4b) };
    tmp11Result = VolumeSliderDefault;
    intl5 = tmp2(1115).intl;
    tmp9Result = tmp9(TableRow2, obj8);
  }
  items4[1] = tmp9Result;
  return tmp8(UserSettingsTableRowGroup, obj4);
};
