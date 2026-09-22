// Module ID: 17198
// Function ID: 17199
// Name: SearchTabsGradient
// Dependencies: [19, 21, 558, 568, 4462, 580, 4608, 12906, 2]

// Module 17198 (SearchTabsGradient)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useToken from "useToken" /* 4462 */;
import TabsGradientDefault from "TabsGradient" /* 12906 */;
import noop from "module_19" /* 19 */;

const ColorUtils = tmp(4608);
require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (cResult[0] !== token) {
    const hexWithOpacityResult = ColorUtils.hexWithOpacity(token, 0);
    cResult[0] = token;
    cResult[1] = hexWithOpacityResult;
    let tmp5 = hexWithOpacityResult;
    const tmpResult = ColorUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === token) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const items = [token, tmp5];
  cResult[2] = token;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp7 = items;
}) : (() => {
  token = token(4462).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  return noop.useMemo(() => {
    const items = [token, ColorUtils.hexWithOpacity(token, 0)];
    return items;
  }, items);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  const cResult = c.c(3);
  state = state.state;
  const tmp3 = closure_5();
  if (cResult[0] === tmp3) {
    if (cResult[1] === state) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(TabsGradientDefault, { state, colors: tmp3 });
  cResult[0] = tmp3;
  cResult[1] = state;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((state) => {
  const colors = closure_5();
  return jsx(TabsGradientDefault, { state: state.state, colors });
});
