// Module ID: 16562
// Function ID: 16563
// Name: ChannelDetailsTopicGradient
// Dependencies: [19, 558, 576, 4535, 588, 684, 2]

// Module 16562 (ChannelDetailsTopicGradient)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import useToken from "useToken" /* 4535 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp3;
const _modDef684 = tmp3(684);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  if (cResult[0] !== token) {
    const obj3 = _modDef684(token);
    const alphaResult = obj3.alpha(0);
    const hexResult = alphaResult.hex();
    cResult[0] = token;
    cResult[1] = hexResult;
    tmp5 = hexResult;
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
  const items = [tmp5, token];
  cResult[2] = token;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp7 = items;
}) : (() => {
  let token;
  let obj = token(4535);
  token = obj.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  return react.useMemo(() => {
    const items = [, ];
    const obj = _modDef684(token);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = token;
    return items;
  }, items);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx");

export const useChannelTopicGradientBackground = tmp2;
