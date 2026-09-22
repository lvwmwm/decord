// Module ID: 11133
// Function ID: 11134
// Name: useScaledActionHeight
// Dependencies: [5194, 4458, 576, 2]
// Exports: default

// Module 11133 (useScaledActionHeight)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4458 */;
import useFontScale from "useFontScale" /* 5194 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = useFontScale.useFontScale();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
