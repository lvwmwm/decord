// Module ID: 19035
// Function ID: 19036
// Name: soundboard/SoundboardActionCreators
// Dependencies: [1084, 5247, 19036, 2000, 1120, 2]
// Exports: openSoundboardSoundPickerActionSheet, showSoundboardSoundPickerActionSheet

// Module 19035 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1084 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1120 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export function openSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  let initialScrollLocation;
  ({ channel, analyticsSource, initialScrollLocation } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(19036, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, initialScrollLocation });
}
export function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let analyticsSource2;
  let channel;
  let channel2;
  let initialScrollLocation;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const obj = { channel, analyticsSource };
  ({ channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation } = obj);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(19036, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation });
}
