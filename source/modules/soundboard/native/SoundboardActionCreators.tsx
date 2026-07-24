// Module ID: 15791
// Function ID: 121807
// Name: showSoundboardSoundPickerActionSheet
// Dependencies: [653, 1207, 3946, 1334, 4098, 15792, 1934, 2]
// Exports: showSoundboardSoundPickerActionSheet

// Module 15791 (showSoundboardSoundPickerActionSheet)
import { ComponentActions } from "ME";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(15792, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};
