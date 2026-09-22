// Module ID: 17246
// Function ID: 17247
// Name: useUserRowWithSubLabelHeight
// Dependencies: [4458, 576, 10381, 5194, 11265, 16793, 2]
// Exports: getUserRowWithSubLabelHeight, useUserRowWithSubLabelHeight

// Module 17246 (useUserRowWithSubLabelHeight)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4458 */;
import useFontScale from "useFontScale" /* 5194 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10381 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11265 */;
import ActionStatusSubLabel from "ActionStatusSubLabel" /* 16793 */;
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
