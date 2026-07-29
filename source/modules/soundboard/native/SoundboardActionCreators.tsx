// Module ID: 15888
// Function ID: 15889
// Name: showSoundboardSoundPickerActionSheet
// Dependencies: [676, 1231, 4005, 1358, 4157, 15889, 1959, 2]
// Exports: showSoundboardSoundPickerActionSheet

// Module 15888 (showSoundboardSoundPickerActionSheet)
import { ComponentActions } from "ME";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = require(4005) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1358) /* DismissibleContent */.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = require(4005) /* UNSAFE_isDismissibleContentDismissed */;
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(15889, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};
