// Module ID: 19115
// Function ID: 19116
// Name: soundboard/SoundboardActionCreators
// Dependencies: [1072, 5253, 19116, 1995, 1109, 2]
// Exports: openSoundboardSoundPickerActionSheet, showSoundboardSoundPickerActionSheet

// Module 19115 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export function openSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  let initialScrollLocation;
  ({ channel, analyticsSource, initialScrollLocation } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(19116, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, initialScrollLocation });
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
  obj2.openLazy(asyncRequire(19116, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation });
}
