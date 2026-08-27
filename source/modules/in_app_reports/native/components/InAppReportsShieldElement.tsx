// Module ID: 8700
// Function ID: 8701
// Name: ShieldElement
// Dependencies: [19, 17, 21, 4445, 6208, 2]
// Exports: default

// Module 8700 (ShieldElement)
import noopAll from "noop" /* 19 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 6208 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj[1] = jsx(AccountAgeTier10LargeBadge.ShieldSpotIllustration, { width: 100, height: 100 });
      tmp2 = <View style={null}>{null}</View>;
    }
  }
  return tmp2;
};
