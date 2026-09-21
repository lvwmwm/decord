// Module ID: 11167
// Function ID: 11168
// Name: useScaledActionHeight
// Dependencies: [558, 5195, 4462, 580, 2]

// Module 11167 (useScaledActionHeight)
import nativeDefault from "native" /* 580 */;
import useToken from "useToken" /* 4462 */;
import useFontScale from "useFontScale" /* 5195 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const fontScale = useFontScale.useFontScale();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
}) : (() => {
  const fontScale = useFontScale.useFontScale();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
});
