// Module ID: 6470
// Function ID: 6471
// Name: useScaledRowHeight
// Dependencies: [5288, 4531, 576, 2]
// Exports: default, useScaledRowHeightData

// Module 6470 (useScaledRowHeight)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import useFontScale from "useFontScale" /* 5288 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
export const useScaledRowHeightData = function useScaledRowHeightData() {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  const obj4 = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj4;
};
