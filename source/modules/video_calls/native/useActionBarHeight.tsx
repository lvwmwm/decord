// Module ID: 10577
// Function ID: 82602
// Name: sum
// Dependencies: [4177, 653, 5188, 10578, 10581, 10396, 566, 2]
// Exports: default

// Module 10577 (sum)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { InputModes } from "ME";
import { ACTION_SHEET_HANDLE_SPACING as closure_5 } from "ACTION_SHEET_START_HEIGHT_RATIO";

const require = arg1;
let sum = 2 * require("ActionButton").SMALL_ACTION_BUTTON_DIMENSIONS.buttonRadius + 16 + 16;
const result = require("ACTION_SHEET_START_HEIGHT_RATIO").fileFinishedImporting("modules/video_calls/native/useActionBarHeight.tsx");

export default function useActionBarHeight(id) {
  const isFiveButtonLayout = require(10581) /* useIsFiveButtonLayout */.useIsFiveButtonLayout(id);
  const obj = require(10581) /* useIsFiveButtonLayout */;
  const tmp2 = importDefault(10396)(id);
  const items = [_isNativeReflectConstruct];
  let num = 88;
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getMode() === outer1_4.PUSH_TO_TALK);
  if (isFiveButtonLayout) {
    num = closure_6;
  }
  let num2 = 0;
  const sum = num + closure_5;
  if (stateFromStores) {
    num2 = 0;
    if (tmp2) {
      num2 = 56;
    }
  }
  return sum + num2;
};
export const CALL_ACTION_BAR_HEIGHT = 88;
export const FIVE_BUTTON_CONTAINER_PADDING_TOP = 16;
export const FIVE_BUTTON_CONTAINER_PADDING_BOTTOM = 16;
export const FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT = sum;
