// Module ID: 18132
// Function ID: 18133
// Name: soundboard/SoundboardActionCreators
// Dependencies: [1087, 5118, 18133, 2002, 1123, 2]
// Exports: openSoundboardSoundPickerActionSheet, showSoundboardSoundPickerActionSheet

// Module 18132 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1087 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const openSoundboardSoundPickerActionSheet = function openSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  let initialScrollLocation;
  ({ channel, analyticsSource, initialScrollLocation } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18133, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, initialScrollLocation });
};
export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
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
  obj2.openLazy(asyncRequire(18133, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation });
};
