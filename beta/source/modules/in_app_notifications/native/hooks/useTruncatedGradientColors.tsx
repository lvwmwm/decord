// Module ID: 13007
// Function ID: 13008
// Name: useTruncatedGradientColors
// Dependencies: [19, 4790, 558, 568, 4494, 580, 676, 2]

// Module 13007 (useTruncatedGradientColors)
import _mod19 from "module_19" /* 19 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import _modDef676 from "module_676" /* 676 */;
import useToken from "useToken" /* 4494 */;
import createStyles from "createStyles" /* 4790 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
let closure_4 = createStyles.createStyles({ gradient: { height: 40 } });
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(10);
  const tmp3 = closure_4();
  const token = useToken.useToken(nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  if (cResult[0] !== token) {
    const obj3 = tmp4(676)(token);
    const hexResult = tmp4(676)(token).alpha(0).hex();
    cResult[0] = token;
    cResult[1] = hexResult;
    let tmp6 = hexResult;
    const alphaResult = tmp4(676)(token).alpha(0);
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== token) {
    const obj5 = tmp4(676)(token);
    const hexResult1 = tmp4(676)(token).alpha(0.72).hex();
    cResult[2] = token;
    cResult[3] = hexResult1;
    let tmp8 = hexResult1;
    const alphaResult1 = tmp4(676)(token).alpha(0.72);
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp6) {
    if (cResult[5] === tmp8) {
      let tmp10 = cResult[6];
    }
    if (cResult[7] === tmp10) {
      if (cResult[8] === tmp3.gradient) {
        let tmp11 = cResult[9];
      }
      return tmp11;
    }
    const obj4 = { gradientColors: tmp10, gradientStyles: tmp3.gradient };
    cResult[7] = tmp10;
    cResult[8] = tmp3.gradient;
    cResult[9] = obj4;
    tmp11 = obj4;
  }
  const items = [tmp6, tmp8];
  cResult[4] = tmp6;
  cResult[5] = tmp8;
  cResult[6] = items;
  tmp10 = items;
}) : (() => {
  const tmp = closure_4();
  token = token(4494).useToken(nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  const obj2 = { gradientColors: null, gradientStyles: tmp.gradient };
  let items = [token];
  obj2.gradientColors = useMemo(() => {
    const obj = _modDef676(token);
    const items = [_modDef676(token).alpha(0).hex(), ];
    const alphaResult = _modDef676(token).alpha(0);
    const obj3 = _modDef676(token);
    items[1] = _modDef676(token).alpha(0.72).hex();
    return items;
  }, items);
  return obj2;
});
