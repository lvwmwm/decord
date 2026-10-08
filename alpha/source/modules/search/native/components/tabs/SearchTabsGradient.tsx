// Module ID: 17206
// Function ID: 17207
// Name: SearchTabsGradient
// Dependencies: [19, 21, 558, 576, 4778, 587, 4927, 12536, 2]

// Module 17206 (SearchTabsGradient)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import TabsGradientDefault from "TabsGradient" /* 12536 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const ColorUtils = tmp(4927);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGradientColors() {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (cResult[0] !== token) {
    const tmpResult = ColorUtils;
    const hexWithOpacityResult = tmpResult.hexWithOpacity(token, 0);
    cResult[0] = token;
    cResult[1] = hexWithOpacityResult;
    tmp5 = hexWithOpacityResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === token) {
    let tmp7;
    if (cResult[3] === tmp5) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const items = [token, tmp5];
  cResult[2] = token;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp7 = items;
}) : (function useGradientColors() {
  let token;
  let obj = token(4778);
  token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  return react.useMemo(() => {
    const items = [token, ];
    const obj = ColorUtils;
    items[1] = obj.hexWithOpacity(token, 0);
    return items;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchTabsGradient(state) {
  const obj = react2;
  const cResult = obj.c(3);
  state = state.state;
  const tmp3 = closure_5();
  if (cResult[0] === tmp3) {
    let tmp4;
    if (cResult[1] === state) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(TabsGradientDefault, { state, colors: tmp3 });
  cResult[0] = tmp3;
  cResult[1] = state;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function SearchTabsGradient(state) {
  state = state.state;
  const colors = closure_5();
  return jsx(TabsGradientDefault, { state, colors });
});
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default tmp2;
