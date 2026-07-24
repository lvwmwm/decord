// Module ID: 10285
// Function ID: 79458
// Name: useTruncatedGradientColors
// Dependencies: [31, 4130, 3834, 689, 666, 2]
// Exports: default

// Module 10285 (useTruncatedGradientColors)
import { useMemo } from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4 = _createForOfIteratorHelperLoose.createStyles({ gradient: { height: 40 } });
const result = require("map").fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default function useTruncatedGradientColors() {
  let obj = token(3834);
  token = obj.useToken(importDefault(689).colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  obj = {
    gradientColors: useMemo(() => {
      const obj = outer1_1(outer1_2[4])(token);
      const items = [outer1_1(outer1_2[4])(token).alpha(0).hex(), ];
      const alphaResult = outer1_1(outer1_2[4])(token).alpha(0);
      const obj3 = outer1_1(outer1_2[4])(token);
      items[1] = outer1_1(outer1_2[4])(token).alpha(0.72).hex();
      return items;
    }, items),
    gradientStyles: callback().gradient
  };
  items = [token];
  return obj;
};
