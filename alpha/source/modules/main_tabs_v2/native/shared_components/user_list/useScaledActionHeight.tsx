// Module ID: 10712
// Function ID: 10713
// Name: useScaledActionHeight
// Dependencies: [5637, 5591, 575, 2]
// Exports: default

// Module 10712 (useScaledActionHeight)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5591 */;
import useFontScale from "useFontScale" /* 5637 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
