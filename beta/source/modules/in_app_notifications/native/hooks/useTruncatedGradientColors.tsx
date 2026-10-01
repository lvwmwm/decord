// Module ID: 9567
// Function ID: 9568
// Name: useTruncatedGradientColors
// Dependencies: [19, 4836, 4531, 576, 672, 2]
// Exports: default

// Module 9567 (useTruncatedGradientColors)
import react from "react" /* 19 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const useMemo = react.useMemo;
let closure_4 = createStyles.createStyles({ gradient: { height: 40 } });
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default function useTruncatedGradientColors() {
  let items;
  let token;
  const tmp = closure_4();
  let obj = token(4531);
  token = obj.useToken(nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  const obj2 = {
    gradientColors: useMemo(() => {
      const items = [, ];
      const obj = _modDef672(token);
      const alphaResult = obj.alpha(0);
      items[0] = alphaResult.hex();
      const obj3 = _modDef672(token);
      const alphaResult1 = obj3.alpha(0.72);
      items[1] = alphaResult1.hex();
      return items;
    }, items),
    gradientStyles: tmp.gradient
  };
  items = [token];
  return obj2;
};
