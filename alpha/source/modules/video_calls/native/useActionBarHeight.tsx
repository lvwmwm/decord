// Module ID: 11920
// Function ID: 11921
// Name: useActionBarHeight
// Dependencies: [2135, 1072, 5399, 11921, 11924, 11388, 504, 2]
// Exports: default

// Module 11920 (useActionBarHeight)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5399 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 11388 */;
import CallBarAction from "CallBarAction" /* 11921 */;
import useIsFiveButtonLayout from "useIsFiveButtonLayout" /* 11924 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
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
