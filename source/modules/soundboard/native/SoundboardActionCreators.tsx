// Module ID: 16211
// Function ID: 16212
// Name: showSoundboardSoundPickerActionSheet
// Dependencies: [676, 1231, 4166, 1377, 4312, 16212, 2007, 2]
// Exports: showSoundboardSoundPickerActionSheet

// Module 16211 (showSoundboardSoundPickerActionSheet)
import { ComponentActions } from "ME";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = require(4166) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1377) /* DismissibleContent */.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = require(4166) /* UNSAFE_isDismissibleContentDismissed */;
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(16212, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};
