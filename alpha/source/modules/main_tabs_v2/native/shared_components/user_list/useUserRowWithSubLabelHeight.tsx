// Module ID: 18791
// Function ID: 18792
// Name: useUserRowWithSubLabelHeight
// Dependencies: [5591, 575, 11028, 5637, 12233, 18458, 2]
// Exports: getUserRowWithSubLabelHeight, useUserRowWithSubLabelHeight

// Module 18791 (useUserRowWithSubLabelHeight)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5591 */;
import useFontScale from "useFontScale" /* 5637 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11028 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12233 */;
import ActionStatusSubLabel from "ActionStatusSubLabel" /* 18458 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useUserRowWithSubLabelHeight.tsx");

export function getUserRowWithSubLabelHeight(rowHeight) {
  return Math.max(rowHeight.rowHeight, 2 * rowHeight.rowPadding + rowHeight.labelLineHeight + rowHeight.subLabelLines * rowHeight.subLabelLineHeight);
}
export function useUserRowWithSubLabelHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 1;
  }
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj3 = useScaledTextLineHeight;
  const scaledTextLineHeight = obj3.useScaledTextLineHeight("text-md/semibold");
  const obj4 = useFontScale;
  const fontScale = obj4.useFontScale();
  const tmp5 = roundToNearestPixelDefault;
  return tmp5(Math.max(token, 2 * token1 + scaledTextLineHeight + num * (ActionStatusSubLabel.ACTION_STATUS_SUB_LABEL_LINE_HEIGHT * fontScale)));
}
