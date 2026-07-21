// Module ID: 10537
// Function ID: 82336
// Name: sum
// Dependencies: []
// Exports: default

// Module 10537 (sum)
let closure_3 = importDefault(dependencyMap[0]);
const InputModes = arg1(dependencyMap[1]).InputModes;
let closure_5 = arg1(dependencyMap[2]).ACTION_SHEET_HANDLE_SPACING;
const sum = 2 * arg1(dependencyMap[3]).SMALL_ACTION_BUTTON_DIMENSIONS.buttonRadius + 16 + 16;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/video_calls/native/useActionBarHeight.tsx");

export default function useActionBarHeight(id) {
  const isFiveButtonLayout = arg1(dependencyMap[4]).useIsFiveButtonLayout(id);
  const obj = arg1(dependencyMap[4]);
  const tmp2 = importDefault(dependencyMap[5])(id);
  const items = [closure_3];
  let num = 88;
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => mode.getMode() === constants.PUSH_TO_TALK);
  if (isFiveButtonLayout) {
    num = sum;
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
