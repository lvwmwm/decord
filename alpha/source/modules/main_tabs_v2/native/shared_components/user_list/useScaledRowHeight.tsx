// Module ID: 6736
// Function ID: 6737
// Name: useScaledRowHeight
// Dependencies: [558, 576, 5383, 4779, 587, 2]
// Exports: default

// Module 6736 (useScaledRowHeight)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4779 */;
import useFontScale from "useFontScale" /* 5383 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useScaledRowHeightData() {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = useFontScale;
  const fontScale = obj2.useFontScale();
  const obj3 = useToken;
  const token = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj4 = useToken;
  const token1 = obj4.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  const sum = token + Math.max(result - token1, 0);
  if (cResult[0] === result) {
    let tmp7;
    if (cResult[1] === sum) {
      tmp7 = cResult[2];
    }
    return tmp7;
  }
  const obj5 = { rowHeight: sum, rowContentHeight: result };
  cResult[0] = result;
  cResult[1] = sum;
  cResult[2] = obj5;
  tmp7 = obj5;
}) : (function useScaledRowHeightData() {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  const obj4 = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj4;
});
let closure_3 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  return closure_3().rowHeight;
};
export const useScaledRowHeightData = tmp2;
