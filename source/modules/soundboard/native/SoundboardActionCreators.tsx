// Module ID: 15987
// Function ID: 15988
// Name: showSoundboardSoundPickerActionSheet
// Dependencies: [676, 1231, 4071, 1358, 4223, 15988, 1959, 2]
// Exports: showSoundboardSoundPickerActionSheet

// Module 15987 (showSoundboardSoundPickerActionSheet)
import { ComponentActions } from "ME";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = require(4071) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1358) /* DismissibleContent */.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = require(4071) /* UNSAFE_isDismissibleContentDismissed */;
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(15988, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};
