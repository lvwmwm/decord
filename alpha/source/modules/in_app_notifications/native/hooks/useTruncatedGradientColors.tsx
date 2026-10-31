// Module ID: 11038
// Function ID: 11039
// Name: useTruncatedGradientColors
// Dependencies: [19, 5014, 5596, 575, 671, 2]
// Exports: default

// Module 11038 (useTruncatedGradientColors)
import react from "react" /* 19 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const useMemo = react.useMemo;
let closure_4 = createStyles.createStyles({ gradient: { height: 40 } });
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default function useTruncatedGradientColors() {
  let items;
  let token;
  const tmp = closure_4();
  let obj = token(5596);
  token = obj.useToken(nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  const obj2 = {
    gradientColors: useMemo(() => {
      const items = [, ];
      const obj = _modDef671(token);
      const alphaResult = obj.alpha(0);
      items[0] = alphaResult.hex();
      const obj3 = _modDef671(token);
      const alphaResult1 = obj3.alpha(0.72);
      items[1] = alphaResult1.hex();
      return items;
    }, items),
    gradientStyles: tmp.gradient
  };
  items = [token];
  return obj2;
};
