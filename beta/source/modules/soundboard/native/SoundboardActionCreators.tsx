// Module ID: 19211
// Function ID: 19212
// Name: soundboard/SoundboardActionCreators
// Dependencies: [1072, 5542, 19212, 2121, 1108, 2]
// Exports: openSoundboardSoundPickerActionSheet, showSoundboardSoundPickerActionSheet

// Module 19211 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export function openSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  let startExpanded;
  ({ channel, analyticsSource, startExpanded } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(19212, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, startExpanded });
}
export function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  let startExpanded;
  ({ channel, analyticsSource, startExpanded } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(19212, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, startExpanded });
}
