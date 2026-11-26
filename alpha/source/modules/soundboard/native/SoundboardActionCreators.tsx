// Module ID: 18227
// Function ID: 18228
// Name: soundboard/SoundboardActionCreators
// Dependencies: [1071, 5257, 18228, 2120, 1107, 2]
// Exports: openSoundboardSoundPickerActionSheet, showSoundboardSoundPickerActionSheet

// Module 18227 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1071 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1107 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export function openSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  let startExpanded;
  ({ channel, analyticsSource, startExpanded } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18228, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, startExpanded });
}
export function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  let startExpanded;
  ({ channel, analyticsSource, startExpanded } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18228, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, startExpanded });
}
