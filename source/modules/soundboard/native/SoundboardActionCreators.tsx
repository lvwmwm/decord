// Module ID: 15853
// Function ID: 122179
// Name: showSoundboardSoundPickerActionSheet
// Dependencies: [653, 1207, 3981, 1334, 4133, 15854, 1935, 2]
// Exports: showSoundboardSoundPickerActionSheet

// Module 15853 (showSoundboardSoundPickerActionSheet)
import { ComponentActions } from "ME";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = require(3981) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = require(3981) /* UNSAFE_isDismissibleContentDismissed */;
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(15854, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};
