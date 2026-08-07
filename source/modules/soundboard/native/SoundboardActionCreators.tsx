// Module ID: 16053
// Function ID: 16054
// Name: showSoundboardSoundPickerActionSheet
// Dependencies: [676, 1231, 4117, 1358, 4270, 16054, 1988, 2]
// Exports: showSoundboardSoundPickerActionSheet

// Module 16053 (showSoundboardSoundPickerActionSheet)
import { ComponentActions } from "ME";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = require(4117) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1358) /* DismissibleContent */.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = require(4117) /* UNSAFE_isDismissibleContentDismissed */;
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(16054, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};
