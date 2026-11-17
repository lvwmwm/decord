// Module ID: 11335
// Function ID: 11336
// Name: useActionBarHeight
// Dependencies: [2133, 1072, 5561, 11336, 11339, 11345, 504, 2]
// Exports: default

// Module 11335 (useActionBarHeight)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5561 */;
import CallBarAction from "CallBarAction" /* 11336 */;
import useIsFiveButtonLayout from "useIsFiveButtonLayout" /* 11339 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 11345 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import size from "module_2" /* 2 */;

const InputModes = Constants.InputModes;
let closure_5 = ActionSheetConstants.ACTION_SHEET_HANDLE_SPACING;
const sum = 2 * CallBarAction.SMALL_ACTION_BUTTON_DIMENSIONS.buttonRadius + 16 + 16;
let metroRequire = sum;
const result = size.fileFinishedImporting("modules/video_calls/native/useActionBarHeight.tsx");

export default function useActionBarHeight(id) {
  let mode;
  const obj = useIsFiveButtonLayout;
  const isFiveButtonLayout = obj.useIsFiveButtonLayout(id);
  const items = [MediaEngineStore];
  let num = 88;
  const tmp2 = useCanSpeakInChannelDefault(id);
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => mode.getMode() === constants.PUSH_TO_TALK);
  if (isFiveButtonLayout) {
    num = metroRequire;
  }
  let num2 = 0;
  metroRequire = num + closure_5;
  if (stateFromStores) {
    num2 = 0;
    if (tmp2) {
      num2 = 56;
    }
  }
  return metroRequire + num2;
};
export const CALL_ACTION_BAR_HEIGHT = 88;
export const FIVE_BUTTON_CONTAINER_PADDING_TOP = 16;
export const FIVE_BUTTON_CONTAINER_PADDING_BOTTOM = 16;
export const FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT = sum;
