// Module ID: 17238
// Function ID: 17239
// Name: useUserRowWithSubLabelHeight
// Dependencies: [4489, 576, 10414, 5225, 11288, 16785, 2]
// Exports: getUserRowWithSubLabelHeight, useUserRowWithSubLabelHeight

// Module 17238 (useUserRowWithSubLabelHeight)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4489 */;
import useFontScale from "useFontScale" /* 5225 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10414 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11288 */;
import ActionStatusSubLabel from "ActionStatusSubLabel" /* 16785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useUserRowWithSubLabelHeight.tsx");

export const getUserRowWithSubLabelHeight = function getUserRowWithSubLabelHeight(rowHeight) {
  return Math.max(rowHeight.rowHeight, 2 * rowHeight.rowPadding + rowHeight.labelLineHeight + rowHeight.subLabelLines * rowHeight.subLabelLineHeight);
};
export const useUserRowWithSubLabelHeight = function useUserRowWithSubLabelHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 1;
  }
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const scaledTextLineHeight = useScaledTextLineHeight.useScaledTextLineHeight("text-md/semibold");
  const fontScale = useFontScale.useFontScale();
  return roundToNearestPixelDefault(Math.max(token, 2 * token1 + scaledTextLineHeight + num * (ActionStatusSubLabel.ACTION_STATUS_SUB_LABEL_LINE_HEIGHT * fontScale)));
};
