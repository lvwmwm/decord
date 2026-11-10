// Module ID: 7217
// Function ID: 7218
// Name: useScaledRowHeight
// Dependencies: [5642, 5596, 575, 2]
// Exports: default, useScaledRowHeightData

// Module 7217 (useScaledRowHeight)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5596 */;
import useFontScale from "useFontScale" /* 5642 */;
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
export function useScaledRowHeightData() {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  const obj4 = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj4;
}
