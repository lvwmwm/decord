// Module ID: 16154
// Function ID: 16155
// Name: showSoundboardSoundPickerActionSheet
// Dependencies: [676, 1231, 4125, 1377, 4271, 16155, 2007, 2]
// Exports: showSoundboardSoundPickerActionSheet

// Module 16154 (showSoundboardSoundPickerActionSheet)
import { ComponentActions } from "ME";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = require(4125) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1377) /* DismissibleContent */.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = require(4125) /* UNSAFE_isDismissibleContentDismissed */;
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(16155, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};
