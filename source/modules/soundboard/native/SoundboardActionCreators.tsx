// Module ID: 15627
// Function ID: 119312
// Name: showSoundboardSoundPickerActionSheet
// Dependencies: []
// Exports: showSoundboardSoundPickerActionSheet

// Module 15627 (showSoundboardSoundPickerActionSheet)
const ComponentActions = require(dependencyMap[0]).ComponentActions;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = require(dependencyMap[1]).ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = require(dependencyMap[2]).UNSAFE_markDismissibleContentAsDismissed(require(dependencyMap[3]).DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = require(dependencyMap[2]);
  importDefault(dependencyMap[4]).openLazy(require(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};
