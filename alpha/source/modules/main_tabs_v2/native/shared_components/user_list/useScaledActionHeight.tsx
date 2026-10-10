// Module ID: 10221
// Function ID: 10222
// Name: useScaledActionHeight
// Dependencies: [558, 5386, 4818, 587, 2]

// Module 10221 (useScaledActionHeight)
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4818 */;
import useFontScale from "useFontScale" /* 5386 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useScaledActionHeight() {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
}) : (function useScaledActionHeight() {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default tmp2;
